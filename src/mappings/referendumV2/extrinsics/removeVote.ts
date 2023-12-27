import { Proposal, ProposalType } from '../../../model'
import { Store } from '@subsquid/typeorm-store'
import { getOriginAccountId } from '../../../common/tools'
import { getRemoveVoteData } from './getters'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { removeVote } from './utils'
import { updateCurveData } from '../../../common/curveData'
import { Call, ProcessorContext } from '../../../processor'

export async function handleRemoveVote(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) : Promise<void> {
    if (!(item as any).success) return
    const { index } = getRemoveVoteData(item)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2 } })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        return
    }
    const wallet = getOriginAccountId(item.origin)
    if(!wallet){
        return
    }
    await removeVote(ctx, wallet, index, header.height, header.timestamp, true)
    await updateCurveData(ctx, header, referendum)
}