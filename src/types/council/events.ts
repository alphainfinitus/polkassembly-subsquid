import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v63 from '../v63'
import * as v83 from '../v83'
import * as v105 from '../v105'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v63: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v63.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v63.H256,
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
    v63: new EventType(
        'Council.Voted',
        sts.struct({
            account: v63.AccountId32,
            proposalHash: v63.H256,
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
    v63: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v63.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v63: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v63.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v63: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v63.H256,
            result: sts.result(() => sts.unit(), () => v63.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v83: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v83.H256,
            result: sts.result(() => sts.unit(), () => v83.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v105: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v105.H256,
            result: sts.result(() => sts.unit(), () => v105.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v63: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v63.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
