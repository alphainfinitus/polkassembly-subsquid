
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { createDeciding, updateProposalStatus } from '../../utils/proposals'
import { getConfirmStartedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getConfirmStartedData(item)

    const proposal = await ctx.store.get(Proposal, {
        where: {
                    index: index,
                    type: ProposalType.ReferendumV2,
                },
        order: {
            id: 'DESC',
        },
    })

    let deciding = undefined

    if (proposal && proposal.deciding && proposal.deciding.since) {
        deciding = createDeciding({confirming: header.height, since: proposal.deciding.since})
    }
    else {
        deciding = createDeciding({confirming: header.height, since: header.height})
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        status: ProposalStatus.ConfirmStarted,
        data: {
            deciding: deciding
        }
    })
}