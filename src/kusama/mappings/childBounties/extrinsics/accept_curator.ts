import { MissingProposalRecordWarn } from '@src/shared/errors'
import { getOriginAccountId } from '@src/shared/tools'
import { Store } from '@subsquid/typeorm-store'
import { Proposal, ProposalType } from '@model/index'
import { getAccepterCuratorData } from './getters'
import { ProcessorContext, Call } from '@src/processor'

export async function handleAcceptCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { parentBountyId, childBountyId } = getAccepterCuratorData(item)

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
    proposal.curator = origin

    await ctx.store.save(proposal)
}