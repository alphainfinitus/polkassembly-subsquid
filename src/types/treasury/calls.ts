import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v266 from '../v266'

export const tip =  {
    name: 'Treasury.tip',
    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    v266: new CallType(
        'Treasury.tip',
        sts.struct({
            hash: v266.Hash,
            tipValue: sts.bigint(),
        })
    ),
}

export const unassignCurator =  {
    name: 'Treasury.unassign_curator',
    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v266: new CallType(
        'Treasury.unassign_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const acceptCurator =  {
    name: 'Treasury.accept_curator',
    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v266: new CallType(
        'Treasury.accept_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}
