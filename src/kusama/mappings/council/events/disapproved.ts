import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { getDisapprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleDisapproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const hash = getDisapprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, hash, ProposalType.CouncilMotion, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}