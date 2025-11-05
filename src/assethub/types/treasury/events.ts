import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v2000000: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v2000000.AccountId32,
        })
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v2000000: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v2000000.AccountId32,
        })
    ),
}

export const assetSpendApproved =  {
    name: 'Treasury.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     * Note: Types for VersionedLocatableAsset and VersionedLocation will be available after running typegen
     */
    v2000000: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            assetKind: sts.any(), // Will be VersionedLocatableAsset after typegen
            amount: sts.bigint(),
            beneficiary: sts.any(), // Will be VersionedLocation after typegen
            validFrom: sts.number(),
            expireAt: sts.number(),
        })
    ),
}
