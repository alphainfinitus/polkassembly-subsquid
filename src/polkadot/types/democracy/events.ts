import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9090 from '../v9090'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account.
     */
    v0: new EventType(
        'Democracy.Proposed',
        sts.tuple([v0.PropIndex, v0.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v9140: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    /**
     *  A public proposal has been tabled for referendum vote.
     */
    v0: new EventType(
        'Democracy.Tabled',
        sts.tuple([v0.PropIndex, v0.Balance, sts.array(() => v0.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9140: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v9140.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9340: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     *  A referendum has begun.
     */
    v0: new EventType(
        'Democracy.Started',
        sts.tuple([v0.ReferendumIndex, v0.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v9140: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v9140.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum.
     */
    v0: new EventType(
        'Democracy.Passed',
        v0.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v9140: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     *  A proposal has been rejected by referendum.
     */
    v0: new EventType(
        'Democracy.NotPassed',
        v0.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v9140: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     *  A referendum has been cancelled.
     */
    v0: new EventType(
        'Democracy.Cancelled',
        v0.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v9140: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     *  A proposal has been enacted.
     */
    v0: new EventType(
        'Democracy.Executed',
        sts.tuple([v0.ReferendumIndex, sts.boolean()])
    ),
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v9090: new EventType(
        'Democracy.Executed',
        sts.tuple([v9090.ReferendumIndex, v9090.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v9110: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v9140: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9140.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9170: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9190: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken.
     */
    v0: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v9140: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v9140.H256,
            who: v9140.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    v0: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v9140: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v9140.H256,
            provider: v9140.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     *  A proposal could not be executed because its preimage was invalid.
     */
    v0: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v0.Hash, v0.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v9140: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v9140.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     *  A proposal could not be executed because its preimage was missing.
     */
    v0: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v0.Hash, v0.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v9140: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v9140.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    v0: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance, v0.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v9140: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v9140.H256,
            provider: v9140.AccountId32,
            deposit: sts.bigint(),
            reaper: v9140.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v9170: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v9170.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
