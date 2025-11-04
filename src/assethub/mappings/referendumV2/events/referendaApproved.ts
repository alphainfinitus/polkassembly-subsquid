
import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getApprovedData } from '@assethub/mappings/referendumV2/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Approved,
    })
}