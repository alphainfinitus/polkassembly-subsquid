import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'
import * as v46 from '../v46'
import * as v56 from '../v56'

export const proposed =  {
    name: 'AdvisoryCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v34: new EventType(
        'AdvisoryCommittee.Proposed',
        sts.struct({
            account: v34.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v34.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'AdvisoryCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v34: new EventType(
        'AdvisoryCommittee.Voted',
        sts.struct({
            account: v34.AccountId32,
            proposalHash: v34.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'AdvisoryCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v34: new EventType(
        'AdvisoryCommittee.Approved',
        sts.struct({
            proposalHash: v34.H256,
        })
    ),
}

export const disapproved =  {
    name: 'AdvisoryCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v34: new EventType(
        'AdvisoryCommittee.Disapproved',
        sts.struct({
            proposalHash: v34.H256,
        })
    ),
}

export const executed =  {
    name: 'AdvisoryCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v34: new EventType(
        'AdvisoryCommittee.Executed',
        sts.struct({
            proposalHash: v34.H256,
            result: sts.result(() => sts.unit(), () => v34.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v35: new EventType(
        'AdvisoryCommittee.Executed',
        sts.struct({
            proposalHash: v35.H256,
            result: sts.result(() => sts.unit(), () => v35.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v36: new EventType(
        'AdvisoryCommittee.Executed',
        sts.struct({
            proposalHash: v36.H256,
            result: sts.result(() => sts.unit(), () => v36.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v46: new EventType(
        'AdvisoryCommittee.Executed',
        sts.struct({
            proposalHash: v46.H256,
            result: sts.result(() => sts.unit(), () => v46.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v56: new EventType(
        'AdvisoryCommittee.Executed',
        sts.struct({
            proposalHash: v56.H256,
            result: sts.result(() => sts.unit(), () => v56.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'AdvisoryCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v34: new EventType(
        'AdvisoryCommittee.Closed',
        sts.struct({
            proposalHash: v34.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
