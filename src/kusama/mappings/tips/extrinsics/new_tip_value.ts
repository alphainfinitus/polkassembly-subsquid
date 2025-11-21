import { MissingProposalRecordWarn } from '@src/shared/errors'
import { getOriginAccountId } from '@src/shared/tools'
import { Proposal, ProposalType, Tippers } from '@model/index'
import { getTipsTipData, getTreasuryTipData } from './getters'
import { randomUUID } from 'crypto'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Call } from '@src/processor'
import { sendGovEvent } from '@kusama/mappings/utils/proposals'
import { EGovEvent } from '@shared/types'

export async function handleNewTipValue(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { hash, tipValue } = getTipsTipData(item)
    const proposal = await ctx.store.get(Proposal, { where: { hash: hash, type: ProposalType.Tip } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const origin = getOriginAccountId(item.origin)

    if (!origin) {
        ctx.log.warn(`Origin for Tips.tip is null`)
        return
    }

    const tipper = new Tippers({
        id: randomUUID(),
        hash: hash,
        tipper: origin,
        value: tipValue,
        proposal: proposal,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        extrinsicIndex
    })

    await ctx.store.save(tipper)

    await sendGovEvent(ctx, {
        event: EGovEvent.TIPPED,
        address: origin,
        proposalIndex: proposal.index?.toString(),
        proposalType: ProposalType.Tip,
        blockTimestamp: new Date(header.timestamp)
    })
}

export async function handleNewTipValueOld(ctx: ProcessorContext<Store>,
    item: Call,
    header: any) {
    if (!item.success) return

    const { hash, tipValue } = getTreasuryTipData(item)
    const proposal = await ctx.store.get(Proposal, { where: { hash: hash, type: ProposalType.Tip } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const origin = getOriginAccountId(item.origin)

    if (!origin) {
        ctx.log.warn(`Origin for Tips.tip is null`)
        return
    }

    const tipper = new Tippers({
        id: randomUUID(),
        hash: hash,
        tipper: origin,
        value: tipValue,
        proposal: proposal,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
        extrinsicIndex
    })

    await ctx.store.save(tipper)

    await sendGovEvent(ctx, {
        event: EGovEvent.TIPPED,
        address: origin,
        proposalIndex: proposal.index?.toString(),
        proposalType: ProposalType.Tip,
        blockTimestamp: new Date(header.timestamp)
    })
}
