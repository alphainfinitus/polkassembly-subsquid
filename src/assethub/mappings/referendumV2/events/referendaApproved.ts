import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { ProcessorContext, Event } from '@src/processor'
import { getApprovedData } from './getters'
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