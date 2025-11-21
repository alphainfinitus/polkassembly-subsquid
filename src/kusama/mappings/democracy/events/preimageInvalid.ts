import { ProposalStatus } from '@model/index'
import { updatePreimageStatus } from '@kusama/mappings/utils/proposals'
import { getPreimageInvalidData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handlePreimageInvalid(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageInvalidData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updatePreimageStatus(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Invalid,
    })
}
