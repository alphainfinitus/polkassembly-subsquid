
import { Proposal, ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { createDeciding, updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getConfirmStartedData } from '@assethub/mappings/referendumV2/events/getters'
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
        deciding = createDeciding({ confirming: header.height, since: proposal.deciding.since })
    }
    else {
        deciding = createDeciding({ confirming: header.height, since: header.height })
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        status: ProposalStatus.ConfirmStarted,
        data: {
            deciding: deciding
        }
    })
}