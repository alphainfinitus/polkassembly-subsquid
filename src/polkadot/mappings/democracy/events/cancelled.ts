import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getCancelledData } from '@polkadot/mappings/democracy/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const index = getCancelledData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}
