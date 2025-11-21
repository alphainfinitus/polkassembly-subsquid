import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getApprovedData, getConfirmAbortedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmAborted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getConfirmAbortedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.ConfirmAborted,
    })
}