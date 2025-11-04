import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getBountyBacameActiveData, getBountyBacameActiveDataOld } from '@polkadot/mappings/bounties/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleBecameActiveOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyBacameActiveDataOld(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Active,
    })
}

export async function handleBecameActive(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyBacameActiveData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Active,
    })
}