import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v133 from '../v133'

export const proposed =  {
    name: 'CommunityCouncil.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v133: new EventType(
        'CommunityCouncil.Proposed',
        sts.struct({
            account: v133.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v133.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'CommunityCouncil.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v133: new EventType(
        'CommunityCouncil.Voted',
        sts.struct({
            account: v133.AccountId32,
            proposalHash: v133.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'CommunityCouncil.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v133: new EventType(
        'CommunityCouncil.Approved',
        sts.struct({
            proposalHash: v133.H256,
        })
    ),
}

export const disapproved =  {
    name: 'CommunityCouncil.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v133: new EventType(
        'CommunityCouncil.Disapproved',
        sts.struct({
            proposalHash: v133.H256,
        })
    ),
}

export const executed =  {
    name: 'CommunityCouncil.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v133: new EventType(
        'CommunityCouncil.Executed',
        sts.struct({
            proposalHash: v133.H256,
            result: sts.result(() => sts.unit(), () => v133.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'CommunityCouncil.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v133: new EventType(
        'CommunityCouncil.Closed',
        sts.struct({
            proposalHash: v133.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
