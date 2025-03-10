import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const removeApproval =  {
    name: 'Treasury.remove_approval',
    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * 
     * ## Dispatch Origin
     * 
     * Must be [`Config::RejectOrigin`].
     * 
     * ## Details
     * 
     * The original deposit will no longer be returned.
     * 
     * ### Parameters
     * - `proposal_id`: The index of a proposal
     * 
     * ### Complexity
     * - O(A) where `A` is the number of approvals
     * 
     * ### Errors
     * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
     *   approval queue, i.e., the proposal has not been approved. This could also mean the
     *   proposal does not exist altogether, thus there is no way it would have been approved
     *   in the first place.
     */
    v1013: new CallType(
        'Treasury.remove_approval',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}
