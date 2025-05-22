import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyBacameActiveData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleBecameActive(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyBacameActiveData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Active,
    })
}