import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal.
     */
    v1001002: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v1001002: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v1001002.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    v1001002: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v1001002: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v1001002.AccountId32,
        })
    ),
}
