import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getRejectedData } from '@polkadot/mappings/treasury/events/getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleRejected(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getRejectedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Rejected,
    })
}
