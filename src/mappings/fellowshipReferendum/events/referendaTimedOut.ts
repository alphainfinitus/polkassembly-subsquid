
// import { ProposalStatus, ProposalType } from '../../../model'
// import { EventHandlerContext } from '../../types/contexts'
// import { updateProposalStatus } from '../../utils/proposals'
// import { getTimedOutData } from './getters'
// import {createTally} from '../../utils/proposals'
// import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
// import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
// import { Store } from '@subsquid/typeorm-store'

// export async function handleTimedOut(ctx: BatchContext<Store, unknown>,
//     item: EventItem<'FellowshipReferenda.TimedOut', { event: { args: true; extrinsic: { hash: true } } }>,
//     header: SubstrateBlock) {
//     const { index } = getTimedOutData(ctx, item.event)

//     await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
//         isEnded: true,
//         status: ProposalStatus.TimedOut,
//     })
// }