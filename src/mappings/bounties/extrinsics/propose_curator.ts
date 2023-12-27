import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId, ss58codec } from '../../../common/tools'
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { getProposeCuratorData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { updateProposalStatus } from '../../utils/proposals'
import { ProcessorContext, Call } from '../../../processor'



export async function handleProposeCurator(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { index, curator, fee } = getProposeCuratorData(item)
    if(!curator || typeof curator == 'number'){
        return
    }

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
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    proposal.curator = ss58codec.encode(curator)
    proposal.fee = fee
    await ctx.store.save(proposal)
    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.CuratorProposed,
    })
}
