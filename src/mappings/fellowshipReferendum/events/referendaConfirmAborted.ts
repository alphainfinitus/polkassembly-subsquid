
import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData, getConfirmAbortedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmAborted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getConfirmAbortedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.ConfirmAborted,
    })
}