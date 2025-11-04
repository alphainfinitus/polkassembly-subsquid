import { MissingProposalRecordWarn } from '@shared/errors'
import { getOriginAccountId } from '@polkadot/common/tools'
import { Proposal, ProposalType } from '@model/index'
import { ProcessorContext, Call } from '@src/processor'
import { getAccepterCuratorData, getAccepterCuratorDataOld } from '@polkadot/mappings/bounties/extrinsics/getters'
import { Store } from '@subsquid/typeorm-store'


export async function handleAcceptCuratorOld(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { index } = getAccepterCuratorDataOld(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    const origin = getOriginAccountId(item.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(item.origin)

    await ctx.store.save(proposal)
}

export async function handleAcceptCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { index } = getAccepterCuratorData(item)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    const origin = getOriginAccountId(item.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(item.origin)

    await ctx.store.save(proposal)
}
