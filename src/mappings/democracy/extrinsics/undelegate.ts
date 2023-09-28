import { getOriginAccountId } from '../../../common/tools'
import { NoDelegationFound, TooManyOpenDelegations, TooManyOpenVotes } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { ConvictionVote, DelegationType, Proposal, ProposalType, VoteType } from '../../../model'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import {
    VotingDelegation
} from '../../../model'
import { removeFlattenedVotes } from './utils'

export async function handleUndelegate(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.undelegate', { call: { args: true; origin: true } }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const from = getOriginAccountId(item.call.origin)
    let delegation = null;
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), type: DelegationType.Democracy } })
    if(delegations != undefined && delegations != null){
        if (delegations.length > 1) {
            ctx.log.warn(TooManyOpenDelegations(header.height, from))
        }
        else if (delegations.length === 0) {
            ctx.log.warn(NoDelegationFound(header.height, from))
            return
        }
        delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
    }
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), type: ProposalType.Referendum } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        const wallets: string[] = []
        if(!referendum || referendum.index == undefined || referendum.index == null){
            continue
        }
        if(delegation && referendum){
            const votes = await ctx.store.find(ConvictionVote, { where: { voter: delegation.to, proposalIndex: referendum.index, removedAtBlock: IsNull(), type: VoteType.Referendum },
                relations: {
                    delegatedVotes: true
                }
            })
            if(votes){
                if (votes.length > 1) {
                    ctx.log.warn(TooManyOpenVotes(header.height, referendum.index, from))
                }
                if(votes.length > 0){
                    const vote = votes[0]
                    if (vote.delegatedVotes){
                        for(let j = 0; j < vote?.delegatedVotes?.length; j++){
                            const delegatedVote = vote.delegatedVotes[j]
                            if(delegatedVote && delegatedVote.voter == from){
                                delegatedVote.removedAtBlock = header.height
                                delegatedVote.removedAt = new Date(header.timestamp)
                                if (delegatedVote.voter){
                                    wallets.push(delegatedVote.voter)
                                }
                                await ctx.store.save(delegatedVote)
                                if(delegatedVote.votingPower && vote.totalVotingPower){
                                    vote.totalVotingPower -= delegatedVote.votingPower
                                }
                                if(delegatedVote.votingPower && vote.delegatedVotingPower){
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
}