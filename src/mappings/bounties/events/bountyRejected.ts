import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyRejectedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleRejected(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyRejectedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
}
