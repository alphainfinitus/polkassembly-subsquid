import { ProposalStatus } from '@model/index'
import { updatePreimageStatusV2 } from '@kusama/mappings/utils/proposals'
import { getPreimageClearedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handlePreimageV2Cleared(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getPreimageClearedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updatePreimageStatusV2(ctx, header, hash, extrinsicIndex, {
        status: ProposalStatus.Cleared,
    })
}