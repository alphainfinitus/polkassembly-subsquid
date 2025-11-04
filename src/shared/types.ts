/**
 * This enum matches Polkassembly v2 BE
 *
 * @export
 * @enum {string}
 */
export enum EGovEvent {
  PROPOSAL_CREATED = "proposal_created",
  PROPOSAL_ENDED = "proposal_ended",
  VOTED = "voted",
  BOUNTY_CLAIMED = "bounty_claimed",
  DECISION_DEPOSIT_PLACED = "decision_deposit_placed",
  REMOVED_VOTE = "removed_vote",
  TIPPED = "tipped",
  DELEGATED = "delegated",
  UNDELEGATED = "undelegated",
  PROPOSAL_STATUS_UPDATED = "proposal_status_updated",
}
