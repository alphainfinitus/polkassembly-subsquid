import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, StandardVoteBalance, Vote, VoteType } from '../../../model'
import { getFellowshipVoteData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { createTally } from '../../utils/proposals'
import { ProcessorContext, Event } from '../../../processor'

export async function handleFellowshipVotes(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { accountId, index, decision, amount, tally } = getFellowshipVoteData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.FellowshipReferendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.FellowshipReferendum, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`
    //const count = await getVotesCount(ctx, proposal.id)
    proposal.tally = createTally(tally)
    await ctx.store.save(proposal)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(accountId),
            blockNumber: header.height,
            decision: decision,
            proposal,
            balance: new StandardVoteBalance({
                value: amount ? BigInt(amount) : BigInt(0),
            }),
            timestamp: new Date(header.timestamp),
            type: VoteType.Fellowship,
            extrinsicIndex
        })
    )
}