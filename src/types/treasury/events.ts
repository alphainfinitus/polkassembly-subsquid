import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as integriteeParachainV14 from '../integriteeParachainV14'
import * as integriteeParachainV26 from '../integriteeParachainV26'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal.
     */
    integriteeParachainV14: new EventType(
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
    integriteeParachainV14: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: integriteeParachainV14.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    integriteeParachainV14: new EventType(
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
    integriteeParachainV26: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: integriteeParachainV26.AccountId32,
        })
    ),
}
