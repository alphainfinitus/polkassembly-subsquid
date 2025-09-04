
import { ProposalStatus, ProposalType, Proposal } from '../../../model'
import { createDeciding, updateProposalStatus } from '../../utils/proposals'
import { getDecisionStartedData } from './getters'
import { createTally } from '../../utils/proposals'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { updateCurveData } from '../../../common/curveData'

export async function handleDecisionStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index, tally, track, hash } = getDecisionStartedData(ctx, item)
    const tallyData = createTally(tally)

    const deciding = createDeciding({ confirming: undefined, since: header.height })
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Deciding,
        extrinsicIndex,
        data: {
            tally: tallyData,
            trackNumber: track,
            hash: hash,
            deciding: deciding
        }
    })

    // Update curve data for the referendum that just started deciding
    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.FellowshipReferendum } })
    if (proposal) {
        await updateCurveData(ctx, header, proposal)
    }
}