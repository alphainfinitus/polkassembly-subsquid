import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getDisapprovedData } from '@polkadot/mappings/techCommittee/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleDisapproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const hash = getDisapprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}