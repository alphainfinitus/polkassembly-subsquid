import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1050 from '../v1050'
import * as v2005 from '../v2005'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9320 from '../v9320'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    v1020: new EventType(
        'Council.Proposed',
        sts.tuple([v1020.AccountId, v1020.ProposalIndex, v1020.Hash, v1020.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v9130: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v9130.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v9130.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'Council.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v1020: new EventType(
        'Council.Voted',
        sts.tuple([v1020.AccountId, v1020.Hash, sts.boolean(), v1020.MemberCount, v1020.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v9130: new EventType(
        'Council.Voted',
        sts.struct({
            account: v9130.AccountId32,
            proposalHash: v9130.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'Council.Approved',
    /**
     *  A motion was approved by the required threshold.
     */
    v1020: new EventType(
        'Council.Approved',
        v1020.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v9130: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v9130.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     */
    v1020: new EventType(
        'Council.Disapproved',
        v1020.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v9130: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v9130.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    v1020: new EventType(
        'Council.Executed',
        sts.tuple([v1020.Hash, sts.boolean()])
    ),
    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    v2005: new EventType(
        'Council.Executed',
        sts.tuple([v2005.Hash, v2005.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    v9111: new EventType(
        'Council.Executed',
        sts.tuple([v9111.H256, sts.result(() => sts.unit(), () => v9111.DispatchError)])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9130: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v9130.H256,
            result: sts.result(() => sts.unit(), () => v9130.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9160: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v9160.H256,
            result: sts.result(() => sts.unit(), () => v9160.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9170: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v9170.H256,
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9190: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v9190.H256,
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9320: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v9320.H256,
            result: sts.result(() => sts.unit(), () => v9320.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     *  A proposal was closed after its duration was up.
     */
    v1050: new EventType(
        'Council.Closed',
        sts.tuple([v1050.Hash, v1050.MemberCount, v1050.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v9130: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v9130.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
