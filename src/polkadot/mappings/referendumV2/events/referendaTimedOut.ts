import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getTimedOutData } from '@polkadot/mappings/referendumV2/events/getters'
import { createTally } from '@polkadot/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleTimedOut(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally } = getTimedOutData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.TimedOut,
        data: {
            tally: tallyData
        }
    })
}