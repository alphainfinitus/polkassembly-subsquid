import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2028 from '../v2028'
import * as v9130 from '../v9130'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    v2028: new EventType(
        'Tips.NewTip',
        v2028.Hash
    ),
    /**
     * A new tip suggestion has been opened.
     */
    v9130: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v9130.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    v2028: new EventType(
        'Tips.TipClosed',
        sts.tuple([v2028.Hash, v2028.AccountId, v2028.Balance])
    ),
    /**
     * A tip suggestion has been closed.
     */
    v9130: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v9130.H256,
            who: v9130.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    v2028: new EventType(
        'Tips.TipRetracted',
        v2028.Hash
    ),
    /**
     * A tip suggestion has been retracted.
     */
    v9130: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v9130.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    v2028: new EventType(
        'Tips.TipSlashed',
        sts.tuple([v2028.Hash, v2028.AccountId, v2028.Balance])
    ),
    /**
     * A tip suggestion has been slashed.
     */
    v9130: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v9130.H256,
            finder: v9130.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
