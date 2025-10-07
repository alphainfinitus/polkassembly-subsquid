import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const added =  {
    name: 'ChildBounties.Added',
    /**
     * A child-bounty is added.
     */
    v1009001: new EventType(
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
    v1009001: new EventType(
        'ChildBounties.Awarded',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
            beneficiary: v1009001.AccountId32,
        })
    ),
}

export const claimed =  {
    name: 'ChildBounties.Claimed',
    /**
     * A child-bounty is claimed by beneficiary.
     */
    v1009001: new EventType(
        'ChildBounties.Claimed',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
            payout: sts.bigint(),
            beneficiary: v1009001.AccountId32,
        })
    ),
}

export const canceled =  {
    name: 'ChildBounties.Canceled',
    /**
     * A child-bounty is cancelled.
     */
    v1009001: new EventType(
        'ChildBounties.Canceled',
        sts.struct({
            index: sts.number(),
            childIndex: sts.number(),
        })
    ),
}
