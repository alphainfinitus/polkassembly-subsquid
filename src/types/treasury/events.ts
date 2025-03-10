import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1013 from '../v1013'

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v1013: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v1013.AccountId20,
        })
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v1013: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v1013.AccountId20,
        })
    ),
}
