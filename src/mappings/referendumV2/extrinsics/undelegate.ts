import { getOriginAccountId } from '../../../common/tools'
import { NoDelegationFound, TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { ConvictionDelegatedVotes, ConvictionVote, DelegationType, Proposal, ProposalType, VoteType } from '../../../model'
import { getUndelegateData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import {
    VotingDelegation
} from '../../../model'
import { removeFlattenedVotes } from './utils'
import { Call, ProcessorContext } from '../../../processor'
import { sendGovEvent } from '../../utils/proposals'
import { EGovEvent } from '../../../common/types'

export async function handleUndelegate(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const from = getOriginAccountId(item.origin)
    const { track } = getUndelegateData(item)
    let delegation = null;
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track, type: DelegationType.OpenGov } })
    if (delegations != undefined && delegations != null) {
        if (delegations.length > 1) {
            ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
        }
        else if (delegations.length === 0) {
            ctx.log.warn(NoDelegationFound(header.height, track, from))
            return
        }
        delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
    }
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        const wallets: string[] = []
        if (!referendum || referendum.index == undefined || referendum.index == null) {
            continue
        }
        if (delegation && referendum) {
            const votes = await ctx.store.find(ConvictionVote, { where: { voter: delegation.to, proposalIndex: referendum.index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
            if (votes) {
                if (votes.length > 1) {
                    ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, from))
                }
                if (votes.length > 0) {
                    const vote = votes[0]
                    const delegatedVotes = await ctx.store.find(ConvictionDelegatedVotes, {
                        where: {
                            delegatedTo: {
                                id: vote.id
                            },
                            voter: from
                        }
                    })
                    if (delegatedVotes) {
                        for (let j = 0; j < delegatedVotes?.length; j++) {
                            const delegatedVote = delegatedVotes[j]
                            if (delegatedVote) {
                                delegatedVote.removedAtBlock = header.height
                                delegatedVote.removedAt = new Date(header.timestamp)
                                if (delegatedVote.voter) {
                                    wallets.push(delegatedVote.voter)
                                }
                                await ctx.store.save(delegatedVote)
                                if (delegatedVote.votingPower && vote.totalVotingPower) {
                                    vote.totalVotingPower -= delegatedVote.votingPower
                                }
                                if (delegatedVote.votingPower && vote.delegatedVotingPower) {
                                    vote.delegatedVotingPower -= delegatedVote.votingPower
                                }
                                await ctx.store.save(vote)
                                break;
                            }
                        }
                    }
                }
            }
        }
        await removeFlattenedVotes(ctx, wallets, referendum.index, header.height, header.timestamp)
    }

    //send gov event
    await sendGovEvent(ctx, {
        event: EGovEvent.UNDELEGATED,
        address: from,
        addressTo: delegation?.to || '',
        blockTimestamp: new Date(header.timestamp)
    })
}