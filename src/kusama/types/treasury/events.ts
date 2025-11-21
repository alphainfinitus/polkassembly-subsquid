import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1032 from '../v1032'
import * as v1038 from '../v1038'
import * as v2025 from '../v2025'
import * as v9160 from '../v9160'
import * as v9250 from '../v9250'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal.
     */
    v1020: new EventType(
        'Treasury.Proposed',
        v1020.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v9160: new EventType(
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
    v1020: new EventType(
        'Treasury.Awarded',
        sts.tuple([v1020.ProposalIndex, v1020.Balance, v1020.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v9160: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v9160.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed.
     */
    v1032: new EventType(
        'Treasury.Rejected',
        sts.tuple([v1032.ProposalIndex, v1032.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v9160: new EventType(
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
    v1038: new EventType(
        'Treasury.NewTip',
        v1038.Hash
    ),
}

export const tipClosed =  {
    name: 'Treasury.TipClosed',
    /**
     *  A tip suggestion has been closed.
     */
    v1038: new EventType(
        'Treasury.TipClosed',
        sts.tuple([v1038.Hash, v1038.AccountId, v1038.Balance])
    ),
}

export const tipRetracted =  {
    name: 'Treasury.TipRetracted',
    /**
     *  A tip suggestion has been retracted.
     */
    v1038: new EventType(
        'Treasury.TipRetracted',
        v1038.Hash
    ),
}

export const bountyProposed =  {
    name: 'Treasury.BountyProposed',
    /**
     *  New bounty proposal. [index]
     */
    v2025: new EventType(
        'Treasury.BountyProposed',
        v2025.BountyIndex
    ),
}

export const bountyRejected =  {
    name: 'Treasury.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    v2025: new EventType(
        'Treasury.BountyRejected',
        sts.tuple([v2025.BountyIndex, v2025.Balance])
    ),
}

export const bountyBecameActive =  {
    name: 'Treasury.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. [index]
     */
    v2025: new EventType(
        'Treasury.BountyBecameActive',
        v2025.BountyIndex
    ),
}

export const bountyAwarded =  {
    name: 'Treasury.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    v2025: new EventType(
        'Treasury.BountyAwarded',
        sts.tuple([v2025.BountyIndex, v2025.AccountId])
    ),
}

export const bountyClaimed =  {
    name: 'Treasury.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    v2025: new EventType(
        'Treasury.BountyClaimed',
        sts.tuple([v2025.BountyIndex, v2025.Balance, v2025.AccountId])
    ),
}

export const bountyCanceled =  {
    name: 'Treasury.BountyCanceled',
    /**
     *  A bounty is cancelled. [index]
     */
    v2025: new EventType(
        'Treasury.BountyCanceled',
        v2025.BountyIndex
    ),
}

export const bountyExtended =  {
    name: 'Treasury.BountyExtended',
    /**
     *  A bounty expiry is extended. [index]
     */
    v2025: new EventType(
        'Treasury.BountyExtended',
        v2025.BountyIndex
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
