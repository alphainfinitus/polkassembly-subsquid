import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { getUnassingCuratorData } from './getters'
import { updateProposalStatus } from '../../utils/proposals'
import { Call, ProcessorContext } from '../../../processor'

export async function handleUnassignCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return
    const { parentBountyId, childBountyId } = getUnassingCuratorData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index: childBountyId, parentBountyIndex: parentBountyId, type: ProposalType.ChildBounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ChildBounty, childBountyId))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    proposal.curator = null
    await ctx.store.save(proposal)
    await updateProposalStatus(ctx, header, childBountyId, ProposalType.ChildBounty, extrinsicIndex, {
        status: ProposalStatus.CuratorUnassigned,
    })
}