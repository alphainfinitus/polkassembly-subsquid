import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v28 from '../v28'
import * as v9140 from '../v9140'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    v28: new EventType(
        'Tips.NewTip',
        v28.Hash
    ),
    /**
     * A new tip suggestion has been opened.
     */
    v9140: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v9140.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    v28: new EventType(
        'Tips.TipClosed',
        sts.tuple([v28.Hash, v28.AccountId, v28.Balance])
    ),
    /**
     * A tip suggestion has been closed.
     */
    v9140: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v9140.H256,
            who: v9140.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    v28: new EventType(
        'Tips.TipRetracted',
        v28.Hash
    ),
    /**
     * A tip suggestion has been retracted.
     */
    v9140: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v9140.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    v28: new EventType(
        'Tips.TipSlashed',
        sts.tuple([v28.Hash, v28.AccountId, v28.Balance])
    ),
    /**
     * A tip suggestion has been slashed.
     */
    v9140: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v9140.H256,
            finder: v9140.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
