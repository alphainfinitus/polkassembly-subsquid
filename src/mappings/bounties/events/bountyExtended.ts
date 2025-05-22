import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyExtendedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleExtended(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyExtendedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Extended,
    })
}
