import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as integriteeParachainV28 from '../integriteeParachainV28'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    integriteeParachainV28: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: integriteeParachainV28.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    integriteeParachainV28: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: integriteeParachainV28.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    integriteeParachainV28: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: integriteeParachainV28.H256,
        })
    ),
}
