
import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Approved,
    })
}