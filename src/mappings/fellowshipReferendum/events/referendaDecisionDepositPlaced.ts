import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDecisionDepositPlacedData } from './getters'
import {createDecisionDeposit} from '../../utils/proposals'
import { ss58codec } from '../../../common/tools'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleDecisionDepositPlaced(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, who, amount } = getDecisionDepositPlacedData(item)

    const decisionDeposit = createDecisionDeposit({who: ss58codec.encode(who), amount})
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, extrinsicIndex, {
        status: ProposalStatus.DecisionDepositPlaced,
        data: {
            decisionDeposit: decisionDeposit
        }
    })
}