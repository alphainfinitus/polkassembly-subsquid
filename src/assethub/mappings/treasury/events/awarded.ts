import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getAwarderData } from '@assethub/mappings/treasury/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwarded(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getAwarderData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Awarded,
    })
}
