import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getConfirmedData } from './getters'
import { createTally } from '@assethub/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleConfirmed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {

    const { index, tally } = getConfirmedData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        status: ProposalStatus.Confirmed,
        data: {
            tally: tallyData
        }
    })
}