import { MissingProposalRecordWarn } from '@src/shared/errors'
import { Proposal, ProposalStatus, ProposalType } from '@model/index'
import { getUnassingCuratorData, getUnassingCuratorDataOld } from './getters'

import { Store } from '@subsquid/typeorm-store'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { ProcessorContext, Call } from '@src/processor'

export async function handleUnassignCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return
    const { index } = getUnassingCuratorData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    proposal.curator = null
    await ctx.store.save(proposal)
    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.CuratorUnassigned,
    })
}

export async function handleUnassignCuratorOld(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return
    const { index } = getUnassingCuratorDataOld(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    proposal.curator = null
    await ctx.store.save(proposal)
    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.CuratorUnassigned,
    })
}