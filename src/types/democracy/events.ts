import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v63 from '../v63'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v63: new EventType(
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
    v63: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v63.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v83: new EventType(
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
    v63: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v63.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v63: new EventType(
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
    v63: new EventType(
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
    v63: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v63: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v63.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v63: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}
