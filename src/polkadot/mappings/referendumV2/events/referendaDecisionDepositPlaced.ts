import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { getDecisionDepositPlacedData } from '@polkadot/mappings/referendumV2/events/getters'
import { createDecisionDeposit } from '@polkadot/mappings/utils/proposals'
import { ss58codec } from '@polkadot/common/tools'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleDecisionDepositPlaced(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, who, amount } = getDecisionDepositPlacedData(item)

    const decisionDeposit = createDecisionDeposit({ who: ss58codec.encode(who), amount })
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, extrinsicIndex, {
        status: ProposalStatus.DecisionDepositPlaced,
        data: {
            decisionDeposit: decisionDeposit
        }
    })
}