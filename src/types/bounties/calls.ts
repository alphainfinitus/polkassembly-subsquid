import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as integriteeParachainV35 from '../integriteeParachainV35'

export const proposeCurator =  {
    name: 'Bounties.propose_curator',
    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    integriteeParachainV35: new CallType(
        'Bounties.propose_curator',
        sts.struct({
            bountyId: sts.number(),
            curator: integriteeParachainV35.MultiAddress,
            fee: sts.bigint(),
        })
    ),
}

export const unassignCurator =  {
    name: 'Bounties.unassign_curator',
    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * ## Complexity
     * - O(1).
     */
    integriteeParachainV35: new CallType(
        'Bounties.unassign_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const acceptCurator =  {
    name: 'Bounties.accept_curator',
    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * ## Complexity
     * - O(1).
     */
    integriteeParachainV35: new CallType(
        'Bounties.accept_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}
