import { MissingProposalRecordWarn, TooManyOpenVotes } from '@shared/errors'
import {
    ConvictionVote,
    Proposal,
    ProposalType,
    SplitVoteBalance,
    StandardVoteBalance,
    Vote,
    VoteBalance,
    VoteDecision,
    VoteType,
    FlattenedConvictionVotes
} from '@model/index'
import { getOriginAccountId } from '@polkadot/common/tools'
import { getVoteData } from '@polkadot/mappings/referendumV2/extrinsics/getters'
import { Store } from '@subsquid/typeorm-store'
import { getDelegations, removeDelegatedVotesReferendum, getChainStateDelegations, getOrCreateReferendumV2 } from '@polkadot/mappings/referendumV2/extrinsics/utils'
import { addDelegatedVotesReferendumV2 } from '@polkadot/mappings/referendumV2/extrinsics/utils'
import { IsNull } from 'typeorm'
import { updateCurveData } from '@polkadot/common/curveData'
import { randomUUID } from 'crypto'
import { Call, ProcessorContext } from '@src/processor'
import { sendGovEvent } from '@polkadot/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'

export async function handleConvictionVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!(item as any).success) return

    const { index, vote } = getVoteData(item)

    const proposal = await getOrCreateReferendumV2(ctx, index, header)
    if (!proposal || proposal.trackNumber === undefined || proposal.trackNumber === null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }

    const from = getOriginAccountId(item.origin)

    if (!from) {
        ctx.log.warn('No from address found for Conviction.vote call')
        return
    }

    const votes = await ctx.store.find(ConvictionVote, {
        where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 },
        relations: {
            delegatedVotes: true
        }
    })
    if (votes) {
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(header.height, index, from))
        }

        if (votes.length > 0) {
            const vote = votes[0]
            vote.removedAtBlock = header.height
            vote.removedAt = new Date(header.timestamp)
            const flattenedVote = await ctx.store.get(FlattenedConvictionVotes, { where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
            if (flattenedVote) {
                flattenedVote.removedAtBlock = header.height
                flattenedVote.removedAt = new Date(header.timestamp)
                await ctx.store.save(flattenedVote)
            }
            await ctx.store.save(vote)
            const delegatedVotes = vote.delegatedVotes
            if (delegatedVotes) {
                await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, delegatedVotes)
            }
        }
    }

    const nestedDelegations = await getDelegations(ctx, from, proposal.trackNumber)

    let decision: VoteDecision
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break

        case 'SplitAbstain':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    let votingPower: bigint | undefined = BigInt(0)
    if (vote.type === 'Split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.type === 'Standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
        lockPeriod = vote.value < 128 ? vote.value : vote.value - 128
        if (lockPeriod === 0 && vote.balance) {
            votingPower = vote.balance / BigInt(10)
        } else {
            votingPower = lockPeriod && vote.balance ? vote.balance * BigInt(lockPeriod) : BigInt(0)
        }

    } else if (vote.type === 'SplitAbstain') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
            abstain: vote.abstain,
        })
    }

    let flattenedVotes = [];
    let convictionDelegatedVotes = [];
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`


    const convictionVote = new ConvictionVote({
        id: randomUUID(),
        voter: item.origin ? getOriginAccountId(item.origin) : null,
        createdAtBlock: header.height,
        proposalIndex: index,
        proposalId: proposal.id,
        decision,
        lockPeriod,
        proposal,
        balance,
        createdAt: new Date(header.timestamp),
        selfVotingPower: votingPower,
        totalVotingPower: votingPower,
        delegatedVotingPower: BigInt(0),
        extrinsicIndex,
        type: VoteType.ReferendumV2,
    })
    const flattened = new FlattenedConvictionVotes({
        id: randomUUID(),
        voter: item.origin ? getOriginAccountId(item.origin) : null,
        parentVote: convictionVote,
        isDelegated: false,
        delegatedTo: null,
        proposalIndex: index,
        proposal: proposal,
        createdAtBlock: header.height,
        removedAtBlock: null,
        createdAt: new Date(header.timestamp),
        removedAt: null,
        decision: decision,
        balance: balance,
        lockPeriod: lockPeriod,
        type: VoteType.ReferendumV2,
    })

    if ([VoteDecision.yes, VoteDecision.no].includes(decision)) {
        const { delegatedVotesNested, delegatedVotePower, flattenedVotesNested } = await addDelegatedVotesReferendumV2(ctx, header.height, header.timestamp, nestedDelegations, convictionVote)
        
        // Try to get the actual delegated voting power from chain state (source of truth)
        // Fall back to calculated value if chain state is not available
        const chainStateDelegations = await getChainStateDelegations(header, from, proposal.trackNumber)
        if (chainStateDelegations) {
            convictionVote.delegatedVotingPower = chainStateDelegations.votes
            convictionVote.totalVotingPower = votingPower ? votingPower + chainStateDelegations.votes : chainStateDelegations.votes
        } else {
            // Fall back to calculated value from VotingDelegation records
            convictionVote.delegatedVotingPower = convictionVote.delegatedVotingPower ? convictionVote.delegatedVotingPower + delegatedVotePower : delegatedVotePower
            convictionVote.totalVotingPower = votingPower ? votingPower + convictionVote.delegatedVotingPower : convictionVote.delegatedVotingPower
        }
        
        convictionDelegatedVotes.push(...delegatedVotesNested)
        flattenedVotes.push(...flattenedVotesNested)
    }
    await ctx.store.insert(convictionVote)
    await ctx.store.insert([flattened, ...flattenedVotes])
    await ctx.store.insert(convictionDelegatedVotes)

    await updateCurveData(ctx, header, proposal)

    await sendGovEvent(ctx, {
        event: EGovEvent.VOTED,
        address: item.origin ? getOriginAccountId(item.origin) : '',
        proposalIndex: index.toString(),
        proposalType: ProposalType.ReferendumV2,
        blockTimestamp: new Date(header.timestamp)
    })

}