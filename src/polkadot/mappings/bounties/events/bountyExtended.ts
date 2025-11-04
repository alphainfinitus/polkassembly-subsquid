import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getBountyExtendedData, getBountyExtendedDataOld } from '@polkadot/mappings/bounties/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleExtendedOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyExtendedDataOld(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Extended,
    })
}
export async function handleExtended(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyExtendedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Extended,
    })
}
