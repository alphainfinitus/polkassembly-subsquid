import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as integriteeParachainV21 from '../integriteeParachainV21'
import * as integriteeParachainV28 from '../integriteeParachainV28'
import * as integriteeParachainV35 from '../integriteeParachainV35'
import * as integriteeParachainV42 from '../integriteeParachainV42'
import * as v560 from '../v560'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    integriteeParachainV21: new EventType(
        'Council.Proposed',
        sts.struct({
            account: integriteeParachainV21.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: integriteeParachainV21.H256,
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
    integriteeParachainV21: new EventType(
        'Council.Voted',
        sts.struct({
            account: integriteeParachainV21.AccountId32,
            proposalHash: integriteeParachainV21.H256,
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
    integriteeParachainV21: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    integriteeParachainV21: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    integriteeParachainV21: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            result: sts.result(() => sts.unit(), () => integriteeParachainV21.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    integriteeParachainV28: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: integriteeParachainV28.H256,
            result: sts.result(() => sts.unit(), () => integriteeParachainV28.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    integriteeParachainV35: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: integriteeParachainV35.H256,
            result: sts.result(() => sts.unit(), () => integriteeParachainV35.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    integriteeParachainV42: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: integriteeParachainV42.H256,
            result: sts.result(() => sts.unit(), () => integriteeParachainV42.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v560: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v560.H256,
            result: sts.result(() => sts.unit(), () => v560.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    integriteeParachainV21: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
