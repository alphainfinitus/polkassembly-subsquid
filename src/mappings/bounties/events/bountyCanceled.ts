import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyCanceledData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleCanceled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyCanceledData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
    })
}