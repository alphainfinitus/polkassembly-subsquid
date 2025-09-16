import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as integriteeParachainV21 from '../integriteeParachainV21'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    integriteeParachainV21: new EventType(
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
     * A public proposal has been tabled for referendum vote.
     */
    integriteeParachainV21: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => integriteeParachainV21.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    integriteeParachainV28: new EventType(
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
     * A referendum has begun.
     */
    integriteeParachainV21: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: integriteeParachainV21.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    integriteeParachainV21: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    integriteeParachainV21: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    integriteeParachainV21: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     * A proposal has been enacted.
     */
    integriteeParachainV21: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => integriteeParachainV21.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    integriteeParachainV21: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            who: integriteeParachainV21.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    integriteeParachainV21: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            provider: integriteeParachainV21.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    integriteeParachainV21: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    integriteeParachainV21: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    integriteeParachainV21: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: integriteeParachainV21.H256,
            provider: integriteeParachainV21.AccountId32,
            deposit: sts.bigint(),
            reaper: integriteeParachainV21.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    integriteeParachainV21: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: integriteeParachainV21.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
