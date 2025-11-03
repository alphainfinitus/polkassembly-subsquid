import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getKilledData } from './getters'
import {createTally} from '../../utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleKilled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally } = getKilledData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Killed,
        data: {
            tally: tallyData
        }
    })
}