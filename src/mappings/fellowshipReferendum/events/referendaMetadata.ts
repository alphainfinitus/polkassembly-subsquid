import { Proposal, ProposalType } from '../../../model'
import { ProcessorContext, Event } from '../../../processor'
import { getMetadataSetData, getMetadataClearedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleMetadataSet(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, hash } = getMetadataSetData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.FellowshipReferendum } })
    if (!proposal) {
        ctx.log.warn(`Proposal with index ${index} not found for setting metadata at block ${header.height}`)
        return
    }

    proposal.metadata = hash
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height

    await ctx.store.save(proposal)

}

export async function handleMetadataCleared(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getMetadataClearedData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.FellowshipReferendum } })
    if (!proposal) {
        ctx.log.warn(`Proposal with index ${index} not found for setting metadata at block ${header.height}`)
        return
    }

    proposal.metadata = null
    proposal.updatedAt = new Date(header.timestamp)
    proposal.updatedAtBlock = header.height

    await ctx.store.save(proposal)

}