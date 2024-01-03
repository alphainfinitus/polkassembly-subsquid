import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'
import * as v44 from '../v44'
import * as v56 from '../v56'

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
    v11: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v11.H256,
            result: sts.result(() => sts.unit(), () => v11.DispatchError),
        })
    ),
    v44: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v44.H256,
            result: sts.result(() => sts.unit(), () => v44.DispatchError),
        })
    ),
    v56: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v56.H256,
            result: sts.result(() => sts.unit(), () => v56.DispatchError),
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
