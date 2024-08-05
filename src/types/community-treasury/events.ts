import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v133 from '../v133'

export const proposed =  {
    name: 'CommunityTreasury.Proposed',
    /**
     * New proposal.
     */
    v133: new EventType(
        'CommunityTreasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'CommunityTreasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v133: new EventType(
        'CommunityTreasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v133.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'CommunityTreasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    v133: new EventType(
        'CommunityTreasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const spendApproved =  {
    name: 'CommunityTreasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v133: new EventType(
        'CommunityTreasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v133.AccountId32,
        })
    ),
}
