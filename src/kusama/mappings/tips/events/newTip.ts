import { StorageNotExistsWarn } from '@src/shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@src/shared/tools'
import { storage } from '@kusama/storage'
import { createTip } from '@kusama/mappings/utils/proposals'
import { getNewTipData, getNewTipDataOld } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleNewTipOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getNewTipDataOld(item)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, extrinsicIndex, {
        hash: hash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}

export async function handleNewTip(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getNewTipData(item)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, extrinsicIndex, {
        hash: hash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}