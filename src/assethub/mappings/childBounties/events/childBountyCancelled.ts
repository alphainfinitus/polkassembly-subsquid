import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getChildBountyCancelledData } from '@assethub/mappings/childBounties/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex } = getChildBountyCancelledData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}