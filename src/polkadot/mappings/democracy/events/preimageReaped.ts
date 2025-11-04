import { ProposalStatus } from '@model/index'
import { updatePreimageStatus } from '@polkadot/mappings/utils/proposals'
import { getPreimageReapedData } from '@polkadot/mappings/democracy/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handlePreimageReaped(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageReapedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Reaped,
    })
}
