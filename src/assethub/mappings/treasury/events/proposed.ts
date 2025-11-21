import { ProposalStatus } from '@model/index'
import { ss58codec } from '@src/shared/tools'
import { createTreasury } from '@assethub/mappings/utils/proposals'
import { getSpendApprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleSpendApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await createTreasury(ctx, header, extrinsicIndex, {
        index: proposalIndex,
        proposer: ss58codec.encode(beneficiary),
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: ss58codec.encode(beneficiary),
    })
}