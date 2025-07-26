import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'
import * as v46 from '../v46'
import * as v56 from '../v56'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v34: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v34.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v34.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v34: new EventType(
        'TechnicalCommittee.Voted',
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
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v34: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v34.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v34: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v34.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v34: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v34.H256,
            result: sts.result(() => sts.unit(), () => v34.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v35: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v35.H256,
            result: sts.result(() => sts.unit(), () => v35.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v36: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v36.H256,
            result: sts.result(() => sts.unit(), () => v36.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v46: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v46.H256,
            result: sts.result(() => sts.unit(), () => v46.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v56: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v56.H256,
            result: sts.result(() => sts.unit(), () => v56.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v34: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v34.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
