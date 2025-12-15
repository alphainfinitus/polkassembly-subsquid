/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ProposalStatus } from '@model/index'
import { ss58codec } from '@assethub/common/tools'
import { createTreasury } from '@assethub/mappings/utils/proposals'
import { getSpendApprovedData, getAssetSpendApprovedData } from '@assethub/mappings/treasury/events/getters'
import { createOrUpdateTreasurySpend } from '@assethub/mappings/utils/treasurySpends'
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

export async function handleAssetSpendApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any,
    block?: any) {
    try {
        const { index, assetKind, amount, beneficiary, expireAt } = getAssetSpendApprovedData(item)
        
        await createOrUpdateTreasurySpend(ctx, header, index, {
            beneficiary,
            amount,
            expireAt,
            assetKind
        }, block)
    } catch (error) {
        ctx.log.warn(`Error handling Treasury.AssetSpendApproved at block ${header.height}: ${error}`)
    }
}