import { MissingProposalRecordWarn } from '@src/shared/errors'
import { ss58codec } from '@src/shared/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '@model/index'
import { getVotedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'
import { ProcessorContext, Event } from '@src/processor'
import { sendGovEvent } from '@kusama/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'


export async function handleVoted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { voter, hash, decision } = getVotedData(item)

    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hash, type: ProposalType.TechCommitteeProposal },
        order: { createdAtBlock: 'DESC' },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.TechCommitteeProposal, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    // const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(voter),
            blockNumber: header.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(header.timestamp),
            type: VoteType.Motion,
            extrinsicIndex
        })
    )

    await sendGovEvent(ctx, {
        event: EGovEvent.VOTED,
        address: ss58codec.encode(voter),
        proposalIndex: proposal.index?.toString(),
        proposalType: ProposalType.TechCommitteeProposal,
        blockTimestamp: new Date(header.timestamp)
    })
}