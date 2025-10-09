import { toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { getVotedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'
import { ProcessorContext, Event } from '../../../processor'
import { sendGovEvent } from '../../utils/proposals'
import { EGovEvent } from '../../../common/types'


export async function handleVoted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { voter, hash, decision } = getVotedData(item)

    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hash, type: ProposalType.CouncilMotion },
        order: { createdAtBlock: 'DESC' },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.CouncilMotion, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    // const count = await getVotesCount(ctx, proposal.id)

    const voterAddress = ss58codec.encode(voter);

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: voterAddress,
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
        address: voterAddress,
        proposalIndex: proposal.index?.toString(),
        proposalType: ProposalType.CouncilMotion,
        blockTimestamp: new Date(header.timestamp)
    })
}