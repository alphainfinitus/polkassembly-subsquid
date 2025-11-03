
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getCancelledData } from './getters'
import {createTally} from '../../utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleCancelled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, tally } = getCancelledData(item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
        data: {
            tally: tallyData
        }
    })
}