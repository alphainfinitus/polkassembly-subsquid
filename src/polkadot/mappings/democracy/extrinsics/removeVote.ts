import { Proposal, ProposalType } from '@model/index'
import { Store } from '@subsquid/typeorm-store'
import { getOriginAccountId } from '@polkadot/common/tools'
import { getRemoveVoteData } from '@polkadot/mappings/democracy/extrinsics/getters'
import { MissingProposalRecordWarn } from '@shared/errors'
import { removeVote } from '@polkadot/mappings/democracy/extrinsics/utils'
import { Call, ProcessorContext } from '@src/processor'

export async function handleRemoveVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { index } = getRemoveVoteData(item)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!referendum || referendum.index == undefined || referendum.index == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        return
    }
    const wallet = getOriginAccountId(item.origin)
    if (!wallet) {
        return
    }
    await removeVote(ctx, wallet, index, header.height, header.timestamp, true)
}