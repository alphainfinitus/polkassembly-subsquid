import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { createDeciding, updateProposalStatus } from '../../utils/proposals'
import { getConfirmStartedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { updateCurveData } from '../../../common/curveData'

export async function handleConfirmStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index } = getConfirmStartedData(ctx, item)

    const proposal = await ctx.store.get(Proposal, {
        where: {
            index: index,
            type: ProposalType.FellowshipReferendum,
        },
        order: {
            id: 'DESC',
        },
    })

    let deciding = undefined
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if (proposal && proposal.deciding && proposal.deciding.since) {
        deciding = createDeciding({ confirming: header.height, since: proposal.deciding.since })
    }
    else {
        deciding = createDeciding({ confirming: header.height, since: header.height })
    }

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.ConfirmStarted,
        extrinsicIndex,
        data: {
            deciding: deciding
        }
    })

    // Update curve data for the referendum that started confirming
    if (proposal) {
        await updateCurveData(ctx, header, proposal)
    }
}