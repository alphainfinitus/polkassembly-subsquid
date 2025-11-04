import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getClosedData, getClosedDataOld } from '@polkadot/mappings/tips/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleClosedOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash, reward } = getClosedDataOld(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}

export async function handleClosed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash, reward } = getClosedData(item)

    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.Tip, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}