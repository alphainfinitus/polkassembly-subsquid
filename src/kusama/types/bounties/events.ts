import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2028 from '../v2028'
import * as v9130 from '../v9130'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     *  New bounty proposal. \[index\]
     */
    v2028: new EventType(
        'Bounties.BountyProposed',
        v2028.BountyIndex
    ),
    /**
     * New bounty proposal.
     */
    v9130: new EventType(
        'Bounties.BountyProposed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyRejected =  {
    name: 'Bounties.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    v2028: new EventType(
        'Bounties.BountyRejected',
        sts.tuple([v2028.BountyIndex, v2028.Balance])
    ),
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    v9130: new EventType(
        'Bounties.BountyRejected',
        sts.struct({
            index: sts.number(),
            bond: sts.bigint(),
        })
    ),
}

export const bountyBecameActive =  {
    name: 'Bounties.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. \[index\]
     */
    v2028: new EventType(
        'Bounties.BountyBecameActive',
        v2028.BountyIndex
    ),
    /**
     * A bounty proposal is funded and became active.
     */
    v9130: new EventType(
        'Bounties.BountyBecameActive',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyAwarded =  {
    name: 'Bounties.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    v2028: new EventType(
        'Bounties.BountyAwarded',
        sts.tuple([v2028.BountyIndex, v2028.AccountId])
    ),
    /**
     * A bounty is awarded to a beneficiary.
     */
    v9130: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: v9130.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    v2028: new EventType(
        'Bounties.BountyClaimed',
        sts.tuple([v2028.BountyIndex, v2028.Balance, v2028.AccountId])
    ),
    /**
     * A bounty is claimed by beneficiary.
     */
    v9130: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: v9130.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     *  A bounty is cancelled. \[index\]
     */
    v2028: new EventType(
        'Bounties.BountyCanceled',
        v2028.BountyIndex
    ),
    /**
     * A bounty is cancelled.
     */
    v9130: new EventType(
        'Bounties.BountyCanceled',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyExtended =  {
    name: 'Bounties.BountyExtended',
    /**
     *  A bounty expiry is extended. \[index\]
     */
    v2028: new EventType(
        'Bounties.BountyExtended',
        v2028.BountyIndex
    ),
    /**
     * A bounty expiry is extended.
     */
    v9130: new EventType(
        'Bounties.BountyExtended',
        sts.struct({
            index: sts.number(),
        })
    ),
}
