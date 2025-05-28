import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'
import * as v9360 from '../v9360'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1005001 from '../v1005001'

export const proposed =  {
    name: 'AllianceMotion.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v9290: new EventType(
        'AllianceMotion.Proposed',
        sts.struct({
            account: v9290.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v9290.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'AllianceMotion.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v9290: new EventType(
        'AllianceMotion.Voted',
        sts.struct({
            account: v9290.AccountId32,
            proposalHash: v9290.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'AllianceMotion.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v9290: new EventType(
        'AllianceMotion.Approved',
        sts.struct({
            proposalHash: v9290.H256,
        })
    ),
}

export const disapproved =  {
    name: 'AllianceMotion.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v9290: new EventType(
        'AllianceMotion.Disapproved',
        sts.struct({
            proposalHash: v9290.H256,
        })
    ),
}

export const executed =  {
    name: 'AllianceMotion.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9290: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: v9290.H256,
            result: sts.result(() => sts.unit(), () => v9290.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9360: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: v9360.H256,
            result: sts.result(() => sts.unit(), () => v9360.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9420: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: v9420.H256,
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v9430: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: v9430.H256,
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v1005001: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: v1005001.H256,
            result: sts.result(() => sts.unit(), () => v1005001.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'AllianceMotion.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v9290: new EventType(
        'AllianceMotion.Closed',
        sts.struct({
            proposalHash: v9290.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
