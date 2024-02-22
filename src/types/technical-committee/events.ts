import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9310 from '../v9310'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v9300: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v9300.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v9300.H256,
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
    v9300: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v9300.AccountId32,
            proposalHash: v9300.H256,
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
    v9300: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v9300.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v9300: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v9300.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9300: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9300.H256,
            result: sts.result(() => sts.unit(), () => v9300.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9310: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9310.H256,
            result: sts.result(() => sts.unit(), () => v9310.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9420: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9420.H256,
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9430: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9430.H256,
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v9300: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v9300.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
