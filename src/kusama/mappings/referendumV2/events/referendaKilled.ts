import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { getKilledData } from './getters'
import { createTally } from '@kusama/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleKilled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally } = getKilledData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Killed,
        data: {
            tally: tallyData
        }
    })
}