import { Proposal, ProposalType } from '@model/index'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '@polkadot/common/tools'
import { getRemoveOtherVoteData } from '@polkadot/mappings/democracy/extrinsics/getters'
import { MissingProposalRecordWarn } from '@shared/errors'
import { removeVote } from '@polkadot/mappings/democracy/extrinsics/utils'
import { ProcessorContext, Call } from '@src/processor'

export async function handleRemoveOtherVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { target, index } = getRemoveOtherVoteData(item)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!referendum || referendum.index == undefined || referendum.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        return
    }
    if (!target) {
        return
    }

    const wallet = ss58codec.encode(target)
    await removeVote(ctx, wallet, index, header.height, referendum.index, true)
}