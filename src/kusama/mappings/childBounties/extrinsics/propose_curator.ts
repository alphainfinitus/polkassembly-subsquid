import { MissingProposalRecordWarn } from '@src/shared/errors'
import { getOriginAccountId, ss58codec } from '@src/shared/tools'
import { Proposal, ProposalStatus, ProposalType } from '@model/index'
import { getProposeCuratorData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { ProcessorContext, Call } from '@src/processor'



export async function handleProposeCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { parentBountyId, childBountyId, curator, fee } = getProposeCuratorData(item)

    if (!curator || typeof curator == 'number') {
        return
    }

    const proposal = await ctx.store.get(Proposal, { where: { index: childBountyId, parentBountyIndex: parentBountyId, type: ProposalType.ChildBounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ChildBounty, childBountyId))
        return
    }

    const origin = getOriginAccountId(item.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`


    proposal.curator = ss58codec.encode(curator)
    proposal.fee = fee
    await ctx.store.save(proposal)

    await updateProposalStatus(ctx, header, childBountyId, ProposalType.ChildBounty, extrinsicIndex, {
        status: ProposalStatus.CuratorProposed,
    })

}
