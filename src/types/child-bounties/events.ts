import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const added =  {
    name: 'ChildBounties.Added',
    /**
     * A child-bounty is added.
     */
    v1001002: new EventType(
        'ChildBounties.Added',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'ChildBounties.Awarded',
    /**
     * A child-bounty is awarded to a beneficiary.
     */
    v1001002: new EventType(
        'ChildBounties.Awarded',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
            beneficiary: v1001002.AccountId32,
        })
    ),
}

export const claimed =  {
    name: 'ChildBounties.Claimed',
    /**
     * A child-bounty is claimed by beneficiary.
     */
    v1001002: new EventType(
        'ChildBounties.Claimed',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
            payout: sts.bigint(),
            beneficiary: v1001002.AccountId32,
        })
    ),
}

export const canceled =  {
    name: 'ChildBounties.Canceled',
    /**
     * A child-bounty is cancelled.
     */
    v1001002: new EventType(
        'ChildBounties.Canceled',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
        })
    ),
}
