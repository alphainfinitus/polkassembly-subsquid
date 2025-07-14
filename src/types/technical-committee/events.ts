import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'
import * as v44 from '../v44'
import * as v56 from '../v56'
import * as v154 from '../v154'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v1: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v1.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v1.H256,
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
    v1: new EventType(
        'TechnicalCommittee.Voted',
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
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v1: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v1: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v1.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v1.H256,
            result: sts.result(() => sts.unit(), () => v1.DispatchError),
        })
    ),
    v11: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v11.H256,
            result: sts.result(() => sts.unit(), () => v11.DispatchError),
        })
    ),
    v44: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v44.H256,
            result: sts.result(() => sts.unit(), () => v44.DispatchError),
        })
    ),
    v56: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v56.H256,
            result: sts.result(() => sts.unit(), () => v56.DispatchError),
        })
    ),
    v154: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v154.H256,
            result: sts.result(() => sts.unit(), () => v154.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v1: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v1.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
