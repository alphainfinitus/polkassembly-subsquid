import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'
import * as v1001000 from '../v1001000'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v5000: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v5000.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v5000.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'Council.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v5000: new EventType(
        'Council.Voted',
        sts.struct({
            account: v5000.AccountId32,
            proposalHash: v5000.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'Council.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v5000: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v5000.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v5000: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v5000.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v5000: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v5000.H256,
            result: sts.result(() => sts.unit(), () => v5000.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1001000: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v1001000.H256,
            result: sts.result(() => sts.unit(), () => v1001000.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v5000: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v5000.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
