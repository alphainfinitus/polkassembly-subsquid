import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v25 from '../v25'
import * as v9170 from '../v9170'
import * as v9250 from '../v9250'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal.
     */
    v0: new EventType(
        'Treasury.Proposed',
        v0.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v9170: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     *  Some funds have been allocated.
     */
    v0: new EventType(
        'Treasury.Awarded',
        sts.tuple([v0.ProposalIndex, v0.Balance, v0.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v9170: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v9170.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed.
     */
    v0: new EventType(
        'Treasury.Rejected',
        sts.tuple([v0.ProposalIndex, v0.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v9170: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const newTip =  {
    name: 'Treasury.NewTip',
    /**
     *  A new tip suggestion has been opened.
     */
    v0: new EventType(
        'Treasury.NewTip',
        v0.Hash
    ),
}

export const tipClosed =  {
    name: 'Treasury.TipClosed',
    /**
     *  A tip suggestion has been closed.
     */
    v0: new EventType(
        'Treasury.TipClosed',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
}

export const tipRetracted =  {
    name: 'Treasury.TipRetracted',
    /**
     *  A tip suggestion has been retracted.
     */
    v0: new EventType(
        'Treasury.TipRetracted',
        v0.Hash
    ),
}

export const bountyProposed =  {
    name: 'Treasury.BountyProposed',
    /**
     *  New bounty proposal. [index]
     */
    v25: new EventType(
        'Treasury.BountyProposed',
        v25.BountyIndex
    ),
}

export const bountyRejected =  {
    name: 'Treasury.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    v25: new EventType(
        'Treasury.BountyRejected',
        sts.tuple([v25.BountyIndex, v25.Balance])
    ),
}

export const bountyBecameActive =  {
    name: 'Treasury.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. [index]
     */
    v25: new EventType(
        'Treasury.BountyBecameActive',
        v25.BountyIndex
    ),
}

export const bountyAwarded =  {
    name: 'Treasury.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    v25: new EventType(
        'Treasury.BountyAwarded',
        sts.tuple([v25.BountyIndex, v25.AccountId])
    ),
}

export const bountyClaimed =  {
    name: 'Treasury.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    v25: new EventType(
        'Treasury.BountyClaimed',
        sts.tuple([v25.BountyIndex, v25.Balance, v25.AccountId])
    ),
}

export const bountyCanceled =  {
    name: 'Treasury.BountyCanceled',
    /**
     *  A bounty is cancelled. [index]
     */
    v25: new EventType(
        'Treasury.BountyCanceled',
        v25.BountyIndex
    ),
}

export const bountyExtended =  {
    name: 'Treasury.BountyExtended',
    /**
     *  A bounty expiry is extended. [index]
     */
    v25: new EventType(
        'Treasury.BountyExtended',
        v25.BountyIndex
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v9250: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v9250.AccountId32,
        })
    ),
}
