import { StorageNotExistsWarn } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createTip } from '@polkadot/mappings/utils/proposals'
import { getNewTipData, getNewTipDataOld } from '@polkadot/mappings/tips/events/getters'
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