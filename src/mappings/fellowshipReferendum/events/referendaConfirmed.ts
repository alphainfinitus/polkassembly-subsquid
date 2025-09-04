import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getConfirmedData } from './getters'
import { createTally } from '../../utils/proposals'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmed(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index, tally } = getConfirmedData(ctx, item)

    const tallyData = createTally(tally)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Confirmed,
        extrinsicIndex,
        data: {
            tally: tallyData
        }
    })
}