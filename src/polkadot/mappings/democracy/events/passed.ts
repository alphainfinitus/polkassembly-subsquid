import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getPassedData } from '@polkadot/mappings/democracy/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handlePassed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const index = getPassedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Passed,
    })
}
