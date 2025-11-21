import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { getSlashedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleSlashed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getSlashedData(item)

    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Slashed,
    })
}