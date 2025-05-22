import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v1001002: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v1001002.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v1001002: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v1001002.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v1001002: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v1001002.H256,
        })
    ),
}
