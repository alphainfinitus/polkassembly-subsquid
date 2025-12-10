import { Proposal, ProposalType } from '@model/index'
import { Store } from '@subsquid/typeorm-store'
import { ss58codec } from '@src/shared/tools'
import { getRemoveOtherVoteData } from './getters'
import { MissingProposalRecordWarn } from '@shared/errors'
import { removeVote, getOrCreateReferendumV2 } from './utils'
import { updateCurveData } from '@assethub/common/curveData'
import { Call, ProcessorContext } from '@src/processor'

export async function handleRemoveOtherVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const { target, index } = getRemoveOtherVoteData(item)
    // Use getOrCreateReferendumV2 to handle migrated referenda that may not exist in DB yet
    const referendum = await getOrCreateReferendumV2(ctx, index, header)
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
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
    await updateCurveData(ctx, header, referendum)

}