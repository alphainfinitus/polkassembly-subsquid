import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as v1009001 from '../v1009001'

export const awarded = {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v1009001: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v1009001.AccountId32,
        })
    ),
}

export const spendApproved = {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v1009001: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v1009001.AccountId32,
        })
    ),
}
