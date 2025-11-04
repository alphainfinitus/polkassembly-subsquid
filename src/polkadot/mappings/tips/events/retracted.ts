import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getRectractedData, getRectractedDataOld } from '@polkadot/mappings/tips/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleRetractedOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getRectractedDataOld(item)

    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}

export async function handleRetracted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getRectractedData(item)

    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}