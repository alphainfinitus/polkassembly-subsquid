import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const submitted =  {
    name: 'Referenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    v9420: new EventType(
        'Referenda.Submitted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v9420.Bounded,
        })
    ),
}

export const decisionDepositPlaced =  {
    name: 'Referenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    v9420: new EventType(
        'Referenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v9420.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionStarted =  {
    name: 'Referenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    v9420: new EventType(
        'Referenda.DecisionStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v9420.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const confirmStarted =  {
    name: 'Referenda.ConfirmStarted',
    v9420: new EventType(
        'Referenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted =  {
    name: 'Referenda.ConfirmAborted',
    v9420: new EventType(
        'Referenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed =  {
    name: 'Referenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    v9420: new EventType(
        'Referenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const approved =  {
    name: 'Referenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    v9420: new EventType(
        'Referenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected =  {
    name: 'Referenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    v9420: new EventType(
        'Referenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const timedOut =  {
    name: 'Referenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    v9420: new EventType(
        'Referenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const cancelled =  {
    name: 'Referenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v9420: new EventType(
        'Referenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const killed =  {
    name: 'Referenda.Killed',
    /**
     * A referendum has been killed.
     */
    v9420: new EventType(
        'Referenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9420.Tally,
        })
    ),
}

export const metadataSet =  {
    name: 'Referenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    v9420: new EventType(
        'Referenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'Referenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    v9420: new EventType(
        'Referenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}
