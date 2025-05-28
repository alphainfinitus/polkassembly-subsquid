import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'
import * as v9360 from '../v9360'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1003000 from '../v1003000'
import * as v1004000 from '../v1004000'
import * as v1005001 from '../v1005001'

export const execute =  {
    name: 'AllianceMotion.execute',
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9290: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v9290.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9360: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v9360.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    v9370: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v9370.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v9420: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v9420.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v1000000: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1000000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v1001000: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1001000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v1002000: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1002000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v1002004: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1002004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v1003000: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1003000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v1004000: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1004000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    v1005001: new CallType(
        'AllianceMotion.execute',
        sts.struct({
            proposal: v1005001.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const propose =  {
    name: 'AllianceMotion.propose',
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9290: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9290.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9360: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9360.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    v9370: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9370.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v9420: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v9420.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    v1000000: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1000000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    v1001000: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1001000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    v1002000: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1002000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::propose`].
     */
    v1002004: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1002004.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v1003000: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1003000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v1004000: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1004000.Call,
            lengthBound: sts.number(),
        })
    ),
    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    v1005001: new CallType(
        'AllianceMotion.propose',
        sts.struct({
            threshold: sts.number(),
            proposal: v1005001.Call,
            lengthBound: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'AllianceMotion.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    v9290: new CallType(
        'AllianceMotion.vote',
        sts.struct({
            proposal: v9290.H256,
            index: sts.number(),
            approve: sts.boolean(),
        })
    ),
}

export const close =  {
    name: 'AllianceMotion.close',
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    v9290: new CallType(
        'AllianceMotion.close',
        sts.struct({
            proposalHash: v9290.H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        })
    ),
    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    v9360: new CallType(
        'AllianceMotion.close',
        sts.struct({
            proposalHash: v9360.H256,
            index: sts.number(),
            proposalWeightBound: v9360.Weight,
            lengthBound: sts.number(),
        })
    ),
}
