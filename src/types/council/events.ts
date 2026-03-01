import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v15 from '../v15'
import * as v19 from '../v19'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v1: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v1.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v1.H256,
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
    v1: new EventType(
        'Council.Voted',
        sts.struct({
            account: v1.AccountId32,
            proposalHash: v1.H256,
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
    v1: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v1: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v1.H256,
            result: sts.result(() => sts.unit(), () => v1.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v15: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v15.H256,
            result: sts.result(() => sts.unit(), () => v15.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v19: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v19.H256,
            result: sts.result(() => sts.unit(), () => v19.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v1: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v1.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
