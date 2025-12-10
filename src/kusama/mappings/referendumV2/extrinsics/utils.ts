import { In, IsNull } from 'typeorm'
import { Store } from '@subsquid/typeorm-store'

import { TooManyOpenVotes } from '@src/shared/errors'
import { ConvictionDelegatedVotes, ConvictionVote, StandardVoteBalance, VoteType, VotingDelegation, FlattenedConvictionVotes, DelegationType, ProposalType, Proposal, ProposalStatus } from '@model/index'
import { randomUUID } from 'crypto'
import { ProcessorContext } from '@src/processor'
import { sendGovEvent, createReferendumV2 } from '@kusama/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'
import * as storage from '@kusama/types/storage'
import { ss58codec } from '@src/shared/tools'

export function convictionToLockPeriod(conviction: string): number {
    return conviction === 'None' ? 0 : Number(conviction[conviction.search(/\d/)])
}

/**
 * Convert an ss58 address to hex format for storage queries.
 * ss58codec.decode() returns a hex string with 0x prefix.
 */
function ss58ToHex(ss58Address: string): string {
    try {
        // ss58codec.decode returns a hex string (0x-prefixed)
        return ss58codec.decode(ss58Address)
    } catch (e) {
        // If decoding fails, return the original (it might already be hex)
        if (ss58Address.startsWith('0x')) {
            return ss58Address
        }
        throw new Error(`Failed to decode ss58 address: ${ss58Address}`)
    }
}

/**
 * Query chain state to get the actual delegated voting power for a voter on a track.
 * This is the source of truth as maintained by the Substrate runtime.
 * Returns { votes: bigint, capital: bigint } where votes is the voting power and capital is the balance.
 */
export async function getChainStateDelegations(block: any, voter: string, track: number): Promise<{ votes: bigint, capital: bigint } | null> {
    try {
        if (!storage.convictionVoting || !storage.convictionVoting.votingFor) {
            return null
        }

        // Check if the storage version is available
        const storageVersions = Object.keys(storage.convictionVoting.votingFor).filter(k => k.startsWith('v'))
        if (storageVersions.length === 0) {
            return null
        }

        // Use the latest available version
        const version = storageVersions[storageVersions.length - 1]
        const storageQuery = (storage.convictionVoting.votingFor as any)[version]

        if (!storageQuery.is(block)) {
            return null
        }

        // Convert ss58 address to hex for the storage query
        const voterHex = ss58ToHex(voter)
        const votingFor = await storageQuery.get(block, voterHex, track)
        if (!votingFor) {
            return null
        }

        if (votingFor.__kind === 'Casting') {
            return {
                votes: votingFor.value.delegations.votes,
                capital: votingFor.value.delegations.capital
            }
        }

        return null
    } catch (e) {
        console.error(`Error querying chain state delegations for ${voter} on track ${track}:`, e)
        return null
    }
}

/**
 * Remove existing ConvictionDelegatedVotes for a delegator when they re-delegate.
 * Also updates the old delegate's delegatedVotingPower and totalVotingPower.
 */
export async function removeDelegatorFromVote(
    ctx: ProcessorContext<Store>,
    delegator: string,
    proposalIndex: number,
    block: number,
    blockTime: number
): Promise<void> {
    // Find all delegated votes from this delegator for this proposal
    const delegatedVotes = await ctx.store.find(ConvictionDelegatedVotes, {
        where: {
            voter: delegator,
            proposalIndex,
            removedAtBlock: IsNull(),
            type: VoteType.ReferendumV2
        },
        relations: {
            delegatedTo: true
        }
    })

    for (const dv of delegatedVotes) {
        // Mark the delegated vote as removed
        dv.removedAtBlock = block
        dv.removedAt = new Date(blockTime)
        await ctx.store.save(dv)

        // Update the parent vote's delegated power
        if (dv.delegatedTo && dv.votingPower) {
            const parentVote = await ctx.store.get(ConvictionVote, {
                where: { id: dv.delegatedTo.id }
            })
            if (parentVote) {
                if (parentVote.delegatedVotingPower) {
                    parentVote.delegatedVotingPower -= dv.votingPower
                }
                if (parentVote.totalVotingPower) {
                    parentVote.totalVotingPower -= dv.votingPower
                }
                await ctx.store.save(parentVote)
            }
        }
    }

    // Also remove flattened votes for this delegator
    await removeFlattenedVotes(ctx, [delegator], proposalIndex, block, blockTime)
}

export async function addDelegatedVotesReferendumV2(ctx: ProcessorContext<Store>, block: number, blockTime: number, nestedDelegations: VotingDelegation[], convictionVote: ConvictionVote): Promise<{ delegatedVotesNested: ConvictionDelegatedVotes[], delegatedVotePower: bigint, flattenedVotesNested: FlattenedConvictionVotes[] }> {
    let votingPower = BigInt(0)
    const delegatedVotes = [];
    let delegatedVotePower = BigInt(0)
    const flattenedVotes = []
    for (let i = 0; i < nestedDelegations.length; i++) {
        const delegation = nestedDelegations[i]
        const voteBalance = new StandardVoteBalance({
            value: delegation.balance,
        })
        if (delegation.lockPeriod === 0 && delegation.balance) {
            votingPower = delegation.balance / BigInt(10)
        } else {
            votingPower = delegation.balance ? BigInt(delegation.lockPeriod) * delegation.balance : BigInt(0)
        }
        delegatedVotes.push(
            new ConvictionDelegatedVotes({
                id: randomUUID(),
                voter: delegation.from,
                createdAtBlock: block,
                proposalIndex: convictionVote.proposalIndex,
                decision: convictionVote.decision,
                votingPower: votingPower,
                lockPeriod: delegation.lockPeriod,
                balance: voteBalance,
                createdAt: new Date(blockTime),
                delegatedTo: convictionVote,
                type: VoteType.ReferendumV2,
            })
        )
        delegatedVotePower += votingPower

        flattenedVotes.push(
            new FlattenedConvictionVotes({
                id: randomUUID(),
                voter: delegation.from,
                parentVote: convictionVote,
                isDelegated: true,
                delegatedTo: delegation.to,
                proposalIndex: convictionVote.proposalIndex,
                proposal: convictionVote.proposal,
                createdAtBlock: block,
                removedAtBlock: null,
                createdAt: new Date(blockTime),
                removedAt: null,
                decision: convictionVote.decision,
                balance: voteBalance,
                lockPeriod: delegation.lockPeriod,
                type: VoteType.ReferendumV2,
            })
        )
    }
    return {
        delegatedVotesNested: delegatedVotes,
        delegatedVotePower,
        flattenedVotesNested: flattenedVotes
    }
}


/**
 * Get direct delegations to a voter on a specific track.
 * 
 * IMPORTANT: The Substrate runtime does NOT support nested/transitive delegations.
 * From pallet-conviction-voting lib.rs: "We don't support second level delegating"
 * 
 * If A delegates to B, and B is casting, A's votes are added to B's delegations.
 * If A delegates to B, and B is delegating to C, A's votes stay with B (NOT propagated to C).
 * 
 * Therefore, we only fetch DIRECT delegations to the voter, not nested ones.
 * The chain state's `delegations` field on a voter's `Casting` entry is the source of truth.
 */
export async function getDelegations(ctx: ProcessorContext<Store>, voter: string | undefined, track: number): Promise<VotingDelegation[]> {
    try {
        if (!voter) {
            return []
        }

        // Only get DIRECT delegations to this voter (no recursion per Substrate runtime behavior)
        let delegations = await ctx.store.find(VotingDelegation, {
            where: { to: voter, endedAtBlock: IsNull(), track, type: DelegationType.OpenGov }
        })

        // Filter out self-delegations
        return delegations.filter(d => d.from !== d.to)
    }
    catch (e) {
        return []
    }
}

export async function removeDelegatedVotesReferendum(ctx: ProcessorContext<Store>, block: number, blockTime: number, delegatedVotes: ConvictionDelegatedVotes[]): Promise<void> {
    const addresses: string[] = []
    for (let i = 0; i < delegatedVotes.length; i++) {
        const vote = delegatedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
        if (vote.voter) {
            addresses.push(vote.voter)
        }
    }
    if (addresses.length > 0) {
        await removeFlattenedVotes(ctx, addresses, delegatedVotes[0].proposalIndex, block, blockTime)
    }
}

export async function removeVote(ctx: ProcessorContext<Store>, wallet: string, proposalIndex: number, block: number, blockTime: number, shouldHaveVote: boolean): Promise<void> {
    const votes = await ctx.store.find(ConvictionVote, {
        where: { voter: wallet, proposalIndex, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 },
        relations: {
            delegatedVotes: true
        }
    })
    if (votes) {
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && shouldHaveVote) {
            // ctx.log.warn(NoOpenVoteFound(block, proposalIndex, wallet))
            return
        }
        else if (votes.length === 0 && !shouldHaveVote) {
            return
        }
        const vote = votes[0]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
        if (vote.delegatedVotes) {
            await removeDelegatedVotesReferendum(ctx, block, blockTime, vote.delegatedVotes)
        }
    }
    await removeFlattenedVotes(ctx, [wallet], proposalIndex, block, blockTime)

    await sendGovEvent(ctx, {
        event: EGovEvent.REMOVED_VOTE,
        address: wallet,
        proposalIndex: proposalIndex.toString(),
        proposalType: ProposalType.ReferendumV2,
        blockTimestamp: new Date(blockTime)
    })
}

export async function removeFlattenedVotes(ctx: ProcessorContext<Store>, wallet: string[], proposalIndex: number, block: number, blockTime: number): Promise<void> {
    const flattenedVotes = await ctx.store.find(FlattenedConvictionVotes, { where: { voter: In(wallet), proposalIndex, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })

    for (let i = 0; i < flattenedVotes.length; i++) {
        const vote = flattenedVotes[i]
        vote.removedAtBlock = block
        vote.removedAt = new Date(blockTime)
        await ctx.store.save(vote)
    }
}

/**
 * Interface for referendum info fetched from chain storage
 */
interface ReferendumStorageInfo {
    index: number
    trackNumber: number
    origin: string
    enactmentAt?: number
    enactmentAfter?: number
    submittedAt: number
    submissionDeposit: { who: Uint8Array, amount: bigint }
    decisionDeposit: { who: Uint8Array, amount: bigint } | undefined
    deciding: { since: number, confirming: number | undefined } | undefined
    tally: { ayes: bigint, nays: bigint, support: bigint }
    hash?: string
}

/**
 * Fetch referendum info from chain storage.
 * This is used to lazily create referendum records for referenda that may not exist in the squid database yet.
 */
async function getReferendumFromStorage(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumStorageInfo | undefined> {
    try {
        const storageData = await block._runtime.getStorage(block.hash, 'Referenda.ReferendumInfoFor', index)

        if (!storageData) return undefined

        if (storageData.__kind === 'Ongoing') {
            let enactmentAt = undefined
            let enactmentAfter = undefined
            if (storageData.value.enactment.__kind === 'At') {
                enactmentAt = storageData.value.enactment.value
            }
            else if (storageData.value.enactment.__kind === 'After') {
                enactmentAfter = storageData.value.enactment.value
            }

            // Try to get proposal hash from the proposal field
            let hash: string | undefined = undefined
            if (storageData.value.proposal) {
                if (storageData.value.proposal.__kind === 'Lookup') {
                    hash = storageData.value.proposal.hash
                } else if (storageData.value.proposal.__kind === 'Inline') {
                    // For inline proposals, the hash is the encoded call itself
                    hash = storageData.value.proposal.value
                }
            }

            return {
                index,
                trackNumber: storageData.value.track,
                origin: storageData.value.origin?.value?.__kind || 'Unknown',
                enactmentAt,
                enactmentAfter,
                submittedAt: storageData.value.submitted,
                submissionDeposit: storageData.value.submissionDeposit,
                decisionDeposit: storageData.value.decisionDeposit,
                deciding: storageData.value.deciding,
                tally: storageData.value.tally,
                hash
            }
        }

        return undefined
    } catch (e) {
        ctx.log.warn(`Error fetching referendum ${index} from storage: ${e}`)
        return undefined
    }
}

/**
 * Get or create a ReferendumV2 proposal.
 * 
 * This function handles race conditions between processors where a referendum
 * may not exist in the database yet. It:
 * 1. First tries to fetch the referendum from the database
 * 2. If not found, fetches from chain storage (source of truth)
 * 3. Creates a proposal record if found in storage
 * 4. Returns the proposal or null if not found anywhere
 * 
 * @param ctx - The processor context
 * @param index - The referendum index
 * @param header - The block header (for storage queries and timestamps)
 * @returns The Proposal entity or null if not found
 */
export async function getOrCreateReferendumV2(
    ctx: ProcessorContext<Store>,
    index: number,
    header: any
): Promise<Proposal | null> {
    // First, try to get from database
    const existingProposal = await ctx.store.get(Proposal, {
        where: { index, type: ProposalType.ReferendumV2 }
    })

    if (existingProposal) {
        return existingProposal
    }

    // Not in database - try to fetch from chain storage
    ctx.log.info(`Referendum ${index} not found in database, attempting to fetch from chain storage...`)

    const storageData = await getReferendumFromStorage(ctx, index, header)

    if (!storageData) {
        // Referendum doesn't exist in storage either - it may have ended or never existed
        ctx.log.warn(`Referendum ${index} not found in chain storage at block ${header.height}`)
        return null
    }

    // Create the referendum from storage data
    ctx.log.info(`Creating referendum ${index} from chain storage (backfill)`)

    const extrinsicIndex = `${header.height}-storage-backfill`

    try {
        const proposal = await createReferendumV2(ctx, header, extrinsicIndex, {
            index: storageData.index,
            status: ProposalStatus.Deciding, // Assume Deciding since we're processing votes
            hash: storageData.hash || '',
            proposer: ss58codec.encode(storageData.submissionDeposit.who),
            submissionDeposit: storageData.submissionDeposit,
            decisionDeposit: storageData.decisionDeposit,
            deciding: storageData.deciding,
            tally: storageData.tally,
            trackNumber: storageData.trackNumber,
            origin: storageData.origin,
            submittedAt: storageData.submittedAt,
            enactmentAt: storageData.enactmentAt,
            enactmentAfter: storageData.enactmentAfter,
        }, ProposalType.ReferendumV2)

        return proposal
    } catch (e) {
        ctx.log.error(`Failed to create referendum ${index} from storage: ${e}`)
        return null
    }
}