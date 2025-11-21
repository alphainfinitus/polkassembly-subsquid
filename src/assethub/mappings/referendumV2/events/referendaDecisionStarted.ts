import { ProposalStatus, ProposalType } from '@model/index'
import { createDeciding, updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getDecisionStartedData } from './getters'
import { createTally } from '@assethub/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleDecisionStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally, track, hash } = getDecisionStartedData(item)
    const tallyData = createTally(tally)

    const deciding = createDeciding({ confirming: undefined, since: header.height })
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        status: ProposalStatus.Deciding,
        data: {
            tally: tallyData,
            trackNumber: track,
            hash,
            deciding: deciding
        }
    })
}
