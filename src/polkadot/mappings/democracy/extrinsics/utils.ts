import { In, IsNull } from 'typeorm'
import { Store } from '@subsquid/typeorm-store'

import { NoOpenVoteFound, TooManyOpenVotes } from '@shared/errors'
import { ConvictionDelegatedVotes, ConvictionVote, StandardVoteBalance, VoteType, VotingDelegation, FlattenedConvictionVotes, DelegationType, ProposalType } from '@model/index'
import { randomUUID } from 'crypto'
import { ProcessorContext } from '@src/processor'
import { sendGovEvent } from '@polkadot/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'

export function convictionToLockPeriod(conviction: string): number {
    return conviction === 'None' ? 0 : Number(conviction[conviction.search(/\d/)])
}

export async function addDelegatedVotesReferendum(ctx: ProcessorContext<Store>, block: number, blockTime: number, nestedDelegations: VotingDelegation[], convictionVote: ConvictionVote): Promise<{ delegatedVotesNested: ConvictionDelegatedVotes[], delegatedVotePower: bigint, flattenedVotesNested: FlattenedConvictionVotes[] }> {
    let votingPower = BigInt(0)
    const delegatedVotes = [];
    let delegatedVotePower = BigInt(0)
    const flattenedVotes = []
    for (let i = 0; i < nestedDelegations.length; i++) {
        const delegation = nestedDelegations[i]
        const voteBalance = new StandardVoteBalance({
            value: delegation.balance,
        })
        if (delegation.lockPeriod === 0 && delegation.balance) {
            votingPower = delegation.balance / BigInt(10)
        } else {
            votingPower = delegation.balance ? BigInt(delegation.lockPeriod) * delegation.balance : BigInt(0)
        }
        delegatedVotes.push(
            new ConvictionDelegatedVotes({
                id: randomUUID(),
                voter: delegation.from,
                createdAtBlock: block,
                proposalIndex: convictionVote.proposalIndex,
                decision: convictionVote.decision,
                votingPower: votingPower,
                lockPeriod: delegation.lockPeriod,
                balance: voteBalance,
                createdAt: new Date(blockTime),
                delegatedTo: convictionVote,
                type: VoteType.Referendum,
            })
        )
        delegatedVotePower += votingPower

        flattenedVotes.push(
            new FlattenedConvictionVotes({
                id: randomUUID(),
                voter: delegation.from,
                parentVote: convictionVote,
                isDelegated: true,
                delegatedTo: delegation.to,
                proposalIndex: convictionVote.proposalIndex,
                proposal: convictionVote.proposal,
                createdAtBlock: block,
                removedAtBlock: null,
                createdAt: new Date(blockTime),
                removedAt: null,
                decision: convictionVote.decision,
                balance: voteBalance,
                lockPeriod: delegation.lockPeriod,
                type: VoteType.Referendum,
            })
        )
    }
    return {
        delegatedVotesNested: delegatedVotes,
        delegatedVotePower,
        flattenedVotesNested: flattenedVotes
    }
}


export async function getDelegations(ctx: ProcessorContext<Store>, voter: string | undefined): Promise<any> {
    try {
        let delegations = await ctx.store.find(VotingDelegation, { where: { to: voter, endedAtBlock: IsNull(), type: DelegationType.Democracy } })
        if (delegations != null && delegations != undefined && delegations.length > 0) {
            let nestedDelegations = []
            for (let i = 0; i < delegations.length; i++) {
                const delegation = delegations[i]
                if (delegation.from == voter || delegation.to == voter) {
                    continue
                }
                nestedDelegations.push(...(await getDelegations(ctx, delegation.from)))
            }
            return [...delegations, ...nestedDelegations]
        }
        else {
            return []
        }
    }
    catch (e) {
        return []
    }
}

export async function removeDelegatedVotesReferendum(ctx: ProcessorContext<Store>, block: number, blockTime: number, delegatedVotes: ConvictionDelegatedVotes[]): Promise<void> {
    const addresses: string[] = []
    for (let i = 0; i < delegatedVotes.length; i++) {
        const vote = delegatedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
        if (vote.voter) {
            addresses.push(vote.voter)
        }
    }
    if (addresses.length > 0) {
        await removeFlattenedVotes(ctx, addresses, delegatedVotes[0].proposalIndex, block, blockTime)
    }
}

export async function removeVote(ctx: ProcessorContext<Store>, wallet: string, proposalIndex: number, block: number, blockTime: number, shouldHaveVote: boolean): Promise<void> {
    const votes = await ctx.store.find(ConvictionVote, {
        where: { voter: wallet, proposalIndex, removedAtBlock: IsNull(), type: VoteType.Referendum },
        relations: {
            delegatedVotes: true
        }
    })
    if (votes) {
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && shouldHaveVote) {
            ctx.log.warn(NoOpenVoteFound(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && !shouldHaveVote) {
            return
        }
        const vote = votes[0]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
        if (vote.delegatedVotes) {
            await removeDelegatedVotesReferendum(ctx, block, blockTime, vote.delegatedVotes)
        }
    }
    await removeFlattenedVotes(ctx, [wallet], proposalIndex, block, blockTime)

    await sendGovEvent(ctx, {
        event: EGovEvent.REMOVED_VOTE,
        address: wallet,
        proposalIndex: proposalIndex.toString(),
        proposalType: ProposalType.DemocracyProposal,
        blockTimestamp: new Date(blockTime)
    })
}

export async function removeFlattenedVotes(ctx: ProcessorContext<Store>, wallet: string[], proposalIndex: number, block: number, blockTime: number): Promise<void> {
    const flattenedVotes = await ctx.store.find(FlattenedConvictionVotes, { where: { voter: In(wallet), proposalIndex, removedAtBlock: IsNull(), type: VoteType.Referendum } })

    for (let i = 0; i < flattenedVotes.length; i++) {
        const vote = flattenedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
    }
}