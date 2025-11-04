
import { getOriginAccountId } from '@polkadot/common/tools'
import { getDelegateData } from '@polkadot/mappings/democracy/extrinsics/getters'
import { Store } from '@subsquid/typeorm-store'
import { NoOpenVoteFound, TooManyOpenDelegations, TooManyOpenVotes } from '@shared/errors'
import { IsNull } from 'typeorm'
import { addDelegatedVotesReferendum, getDelegations, removeVote } from '@polkadot/mappings/democracy/extrinsics/utils'
import { StandardVoteBalance, ConvictionVote, VoteType, VotingDelegation, Proposal, ProposalType, ConvictionDelegatedVotes, DelegationType, FlattenedConvictionVotes, VoteDecision } from '@model/index'
import { randomUUID } from 'crypto'
import { ProcessorContext, Call } from '@src/processor'

export async function handleDelegate(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { to, lockPeriod, balance } = getDelegateData(item)
    let from = getOriginAccountId(item.origin)
    if (!from) {
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if (!from) {
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), type: DelegationType.Democracy } })

    if (delegations != null && delegations != undefined && delegations.length > 1) {
        ctx.log.warn(TooManyOpenDelegations(header.height, undefined, from))
    }

    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAtBlock: IsNull(), type: ProposalType.Referendum } })

    if (delegations.length > 0) {
        const delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
        for (let i = 0; i < ongoingReferenda.length; i++) {
            const referendum = ongoingReferenda[i]
            if (referendum.index || referendum.index === 0) {
                await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false)
            }
        }
    }

    await ctx.store.insert(
        new VotingDelegation({
            id: `${await ctx.store.count(VotingDelegation)}`,
            createdAtBlock: header.height,
            from: from,
            to: to,
            balance,
            lockPeriod,
            type: DelegationType.Democracy,
            createdAt: new Date(header.timestamp),
            extrinsicIndex
        })
    )
    let votingPower = BigInt(0)
    const nestedDelegations = await getDelegations(ctx, from)

    let delegatedVotes = [];
    let flattenedVotes = [];
    let convictionVotes = [];

    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if (!referendum || referendum.index === undefined || referendum.index === null) {
            continue
        }
        const votes = await ctx.store.find(ConvictionVote, { where: { voter: to, proposalIndex: referendum.index, removedAtBlock: IsNull(), type: VoteType.Referendum } })
        if (votes) {
            if (votes.length > 1) {
                ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, to))
                continue
            }
            else if (votes.length === 0) {
                // ctx.log.warn(NoOpenVoteFound(header.height, referendum.index, toWallet))
                continue
            }
            const vote = votes[0]
            if (vote.decision != VoteDecision.abstain) {
                try {
                    const voteBalance = new StandardVoteBalance({
                        value: balance,
                    })
                    const voter = from
                    if (lockPeriod === 0 && balance) {
                        votingPower = balance / BigInt(10)
                    } else {
                        votingPower = balance ? BigInt(lockPeriod) * balance : BigInt(0)
                    }
                    const { delegatedVotesNested, delegatedVotePower, flattenedVotesNested } = await addDelegatedVotesReferendum(ctx, header.height, header.timestamp, nestedDelegations, vote)
                    delegatedVotes.push(
                        new ConvictionDelegatedVotes({
                            id: randomUUID(),
                            voter,
                            createdAtBlock: header.height,
                            decision: vote.decision,
                            lockPeriod,
                            proposalIndex: referendum.index,
                            balance: voteBalance,
                            votingPower,
                            type: VoteType.Referendum,
                            createdAt: new Date(header.timestamp),
                            delegatedTo: vote
                        }), ...delegatedVotesNested
                    )
                    flattenedVotes.push(
                        new FlattenedConvictionVotes({
                            id: randomUUID(),
                            voter: voter,
                            parentVote: vote,
                            isDelegated: true,
                            delegatedTo: to,
                            proposalIndex: referendum.index,
                            proposal: referendum,
                            createdAtBlock: header.height,
                            removedAtBlock: null,
                            createdAt: new Date(header.timestamp),
                            removedAt: null,
                            decision: vote.decision,
                            balance: voteBalance,
                            lockPeriod: lockPeriod,
                            type: VoteType.Referendum,
                        }), ...flattenedVotesNested
                    )

                    vote.delegatedVotingPower = vote.delegatedVotingPower ? delegatedVotePower + votingPower + vote.delegatedVotingPower : delegatedVotePower + votingPower
                    vote.totalVotingPower = vote.selfVotingPower ? vote.delegatedVotingPower + vote.selfVotingPower : delegatedVotePower

                    convictionVotes.push(vote)

                }
                catch (e) {
                    ctx.log.error(`Something went wrong at block ${header.height} in democracy.delegate with error: ${e}`)
                }
            }
        }
    }
    await ctx.store.save(convictionVotes)
    await ctx.store.insert(delegatedVotes)
    await ctx.store.insert(flattenedVotes)
}