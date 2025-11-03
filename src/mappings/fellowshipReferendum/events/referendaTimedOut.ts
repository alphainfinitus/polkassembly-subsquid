
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getTimedOutData } from './getters'
import {createTally} from '../../utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleTimedOut(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally } = getTimedOutData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.TimedOut,
        data: {
            tally: tallyData
        }
    })
}