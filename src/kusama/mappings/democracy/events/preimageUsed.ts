import { ProposalStatus } from '@model/index'
import { updatePreimageStatus } from '@kusama/mappings/utils/proposals'
import { getPreimageUsedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handlePreimageUsed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageUsedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Used,
    })
}
