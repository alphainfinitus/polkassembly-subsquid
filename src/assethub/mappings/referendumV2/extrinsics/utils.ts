import { In, IsNull } from 'typeorm'
import { Store } from '@subsquid/typeorm-store'

import { TooManyOpenVotes } from '@shared/errors'
import { ConvictionDelegatedVotes, ConvictionVote, StandardVoteBalance, VoteType, VotingDelegation, FlattenedConvictionVotes, DelegationType, ProposalType, Proposal, ProposalStatus } from '@model/index'
import { randomUUID } from 'crypto'
import { ProcessorContext } from '@src/processor'
import { sendGovEvent, createReferendumV2 } from '@assethub/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'
import * as storage from '@assethub/types/storage'
import { ss58codec } from '@assethub/common/tools'
import * as referendaStorage from '@assethub/types/referenda/storage'

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

export function convictionToLockPeriod(conviction: string): number {
    return conviction === 'None' ? 0 : Number(conviction[conviction.search(/\d/)])
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

        // Use the first available version
        const version = storageVersions[0]
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

// Interface for referendum storage data
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
 * Attempt to fetch referendum data from chain storage
 * This is used for lazy-loading referenda that may have been migrated
 */
async function getReferendumFromStorage(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumStorageInfo | undefined> {
    try {
        let referendumInfo: any = undefined

        // AssetHub storage version
        if (referendaStorage.referendumInfoFor.v2000000?.is(block)) {
            referendumInfo = await referendaStorage.referendumInfoFor.v2000000.get(block, index)
        }

        if (!referendumInfo) {
            return undefined
        }

        // Only handle Ongoing referenda - we can only create from storage for active referenda
        if (referendumInfo.__kind !== 'Ongoing') {
            return undefined
        }

        const ongoing = referendumInfo.value

        // Extract origin string
        let originStr = 'Unknown'
        if (ongoing.origin) {
            if (ongoing.origin.__kind) {
                originStr = ongoing.origin.__kind
                if (ongoing.origin.value && typeof ongoing.origin.value === 'string') {
                    originStr = ongoing.origin.value
                } else if (ongoing.origin.value?.__kind) {
                    originStr = ongoing.origin.value.__kind
                }
            }
        }

        // Extract hash from proposal if available
        let hash: string | undefined
        if (ongoing.proposal) {
            if (ongoing.proposal.__kind === 'Lookup' && ongoing.proposal.hash) {
                hash = ongoing.proposal.hash
            } else if (ongoing.proposal.__kind === 'Inline') {
                // For inline proposals, we might not have a hash
                hash = undefined
            }
        }

        return {
            index,
            trackNumber: ongoing.track,
            origin: originStr,
            enactmentAt: ongoing.enactment?.__kind === 'At' ? ongoing.enactment.value : undefined,
            enactmentAfter: ongoing.enactment?.__kind === 'After' ? ongoing.enactment.value : undefined,
            submittedAt: ongoing.submitted,
            submissionDeposit: {
                who: ongoing.submissionDeposit.who,
                amount: ongoing.submissionDeposit.amount
            },
            decisionDeposit: ongoing.decisionDeposit ? {
                who: ongoing.decisionDeposit.who,
                amount: ongoing.decisionDeposit.amount
            } : undefined,
            deciding: ongoing.deciding ? {
                since: ongoing.deciding.since,
                confirming: ongoing.deciding.confirming
            } : undefined,
            tally: {
                ayes: ongoing.tally.ayes,
                nays: ongoing.tally.nays,
                support: ongoing.tally.support
            },
            hash
        }
    } catch (e) {
        ctx.log.error(`Error fetching referendum ${index} from storage: ${e}`)
        return undefined
    }
}

/**
 * Get an existing ReferendumV2 proposal or create it from chain storage if missing.
 * This handles the case where votes/events reference a referendum that hasn't been
 * indexed yet (e.g., due to migration or race conditions between processors).
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

    // Not in database, try to fetch from chain storage
    ctx.log.info(`Referendum ${index} not found in database, attempting to fetch from chain storage...`)

    const storageData = await getReferendumFromStorage(ctx, index, header)

    if (!storageData) {
        ctx.log.warn(`Referendum ${index} not found in chain storage at block ${header.height}`)
        return null
    }

    ctx.log.info(`Creating referendum ${index} from chain storage (migrated referendum)`)

    // Create the referendum from storage data
    const extrinsicIndex = `${header.height}-migration-backfill`

    try {
        const proposal = await createReferendumV2(ctx, header, extrinsicIndex, {
            index: storageData.index,
            status: ProposalStatus.Deciding,
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