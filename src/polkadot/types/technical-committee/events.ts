import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    v0: new EventType(
        'TechnicalCommittee.Proposed',
        sts.tuple([v0.AccountId, v0.ProposalIndex, v0.Hash, v0.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v9140: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v9140.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v9140.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v0: new EventType(
        'TechnicalCommittee.Voted',
        sts.tuple([v0.AccountId, v0.Hash, sts.boolean(), v0.MemberCount, v0.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v9140: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v9140.AccountId32,
            proposalHash: v9140.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     *  A motion was approved by the required threshold.
     */
    v0: new EventType(
        'TechnicalCommittee.Approved',
        v0.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v9140: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v9140.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     */
    v0: new EventType(
        'TechnicalCommittee.Disapproved',
        v0.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v9140: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v9140.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    v0: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v0.Hash, v0.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    v9110: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v9110.H256, sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9140: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9140.H256,
            result: sts.result(() => sts.unit(), () => v9140.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9170: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9170.H256,
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9190: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9190.H256,
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9340: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v9340.H256,
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
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
     *  A proposal was closed after its duration was up.
     */
    v0: new EventType(
        'TechnicalCommittee.Closed',
        sts.tuple([v0.Hash, v0.MemberCount, v0.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v9140: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v9140.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
