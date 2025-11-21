import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9190 from '../v9190'

export const proposeCurator =  {
    name: 'ChildBounties.propose_curator',
    /**
     * Propose curator for funded child-bounty.
     * 
     * The dispatch origin for this call must be curator of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "Added" state, for processing the call. And
     * state of child-bounty is moved to "CuratorProposed" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     * - `curator`: Address of child-bounty curator.
     * - `fee`: payment fee to child-bounty curator for execution.
     */
    v9190: new CallType(
        'ChildBounties.propose_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            curator: v9190.MultiAddress,
            fee: sts.bigint(),
        })
    ),
}

export const acceptCurator =  {
    name: 'ChildBounties.accept_curator',
    /**
     * Accept the curator role for the child-bounty.
     * 
     * The dispatch origin for this call must be the curator of this
     * child-bounty.
     * 
     * A deposit will be reserved from the curator and refund upon
     * successful payout or cancellation.
     * 
     * Fee for curator is deducted from curator fee of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "CuratorProposed" state, for processing the
     * call. And state of child-bounty is moved to "Active" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    v9190: new CallType(
        'ChildBounties.accept_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        })
    ),
}

export const unassignCurator =  {
    name: 'ChildBounties.unassign_curator',
    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent-bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent-bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent-bounty curator, we assume that the child-bounty curator is
     * malicious or inactive. As a result, child-bounty curator deposit is
     * slashed.
     * 
     * If the origin is the child-bounty curator, we take this as a sign
     * that they are unable to do their job, and are willingly giving up.
     * We could slash the deposit, but for now we allow them to unreserve
     * their deposit and exit without issue. (We may want to change this if
     * it is abused.)
     * 
     * Finally, the origin can be anyone iff the child-bounty curator is
     * "inactive". Expiry update due of parent bounty is used to estimate
     * inactive state of child-bounty curator.
     * 
     * This allows anyone in the community to call out that a child-bounty
     * curator is not doing their due diligence, and we should pick a new
     * one. In this case the child-bounty curator deposit is slashed.
     * 
     * State of child-bounty is moved to Added state on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    v9190: new CallType(
        'ChildBounties.unassign_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        })
    ),
}
