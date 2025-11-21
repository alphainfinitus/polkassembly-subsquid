import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getBountyExtendedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleExtended(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyExtendedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Extended,
    })
}
