import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getApprovedData } from '@polkadot/mappings/council/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const hash = getApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.CouncilMotion, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Approved,
    })
}