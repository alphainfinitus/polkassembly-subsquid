import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getBountyBacameActiveData } from '@assethub/mappings/bounties/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleBecameActive(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyBacameActiveData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Active,
    })
}