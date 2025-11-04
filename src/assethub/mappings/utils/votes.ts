import { ConvictionDelegatedVotes, ConvictionVote, FlattenedConvictionVotes, Vote } from '@model/index'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '@src/processor'

const proposalsVotes = new Map<string, number>()

export async function getVotesCount(ctx: ProcessorContext<Store>, proposalId: string) {
    let count = proposalsVotes.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(Vote, {
            where: {
                proposalId,
            },
        })
    }
    proposalsVotes.set(proposalId, count + 1)
    return count
}

const proposals = new Map<number, number>()

export async function getConvictionVotesCount(ctx: ProcessorContext<Store>, proposalId: number) {
    let count = proposals.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(ConvictionVote, {
            where: {
                proposalIndex: proposalId,
            },
        })
    }
    proposals.set(proposalId, count + 1)
    return count
}

const delegatedVotesCount = new Map<String, number>()

export async function getConvictionDelegatedVotesCount(ctx: ProcessorContext<Store>) {
    let count = delegatedVotesCount.get('delegatedVoteCount')
    if (count == null) {
        count = await ctx.store.count(ConvictionDelegatedVotes)
    }
    delegatedVotesCount.set('delegatedVoteCount', count + 1)
    return count
}

const flattenedVotesCount = new Map<String, number>()

export async function getFlattenedConvictionVotesCount(ctx: ProcessorContext<Store>) {
    let count = flattenedVotesCount.get('flattenedVoteCount')
    if (count == null) {
        count = await ctx.store.count(FlattenedConvictionVotes)
    }
    flattenedVotesCount.set('flattenedVoteCount', count + 1)
    return count
}