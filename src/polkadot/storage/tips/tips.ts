import { UnknownVersionError } from '@shared/errors'
import { tips, reasons } from '@polkadot/types/tips/storage'
import { tips as TreasuryTipsStorage, reasons as TreasuryReasonsStorage } from '@polkadot/types/treasury/storage'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '@src/processor'
interface TipStorageData {
    who: string
    finder?: string
    deposit?: bigint
    reason: string
}


async function getTipsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<TipStorageData | undefined> {
    if (tips.v28.is(block)) {
        return await tips.v28.get(block, hash)
    } else {
        throw new UnknownVersionError("Tips.tips")
    }
}

async function getTreasuryStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<TipStorageData | undefined> {
    if (TreasuryTipsStorage.v0.is(block)) {
        const storageData = await TreasuryTipsStorage.v0.get(block, hash)
        if (!storageData) return undefined

        const { who, finder, reason } = storageData
        return {
            who,
            finder: finder?.[0],
            deposit: finder?.[1],
            reason,
        }
    } else if (TreasuryTipsStorage.v13.is(block)) {
        return await TreasuryTipsStorage.v13.get(block, hash)
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getTipsReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {
    if (reasons.v28.is(block)) {
        return await reasons.v28.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getTreasuryReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {

    if (TreasuryReasonsStorage.v0.is(block)) {
        return TreasuryReasonsStorage.v0.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Treasury.Reasons")
    }
}

async function getReason(ctx: ProcessorContext<Store>, hash: string, block: any) {
    try {
        return (await getTipsReasonsStorageData(ctx, hash, block))
    } catch {
        return (await getTreasuryReasonsStorageData(ctx, hash, block))
    }
}

export async function getTips(ctx: ProcessorContext<Store>, hash: string, block: any) {
    let tipInfo;
    try {
        tipInfo = await getTipsStorageData(ctx, hash, block)
    } catch (e) {
        tipInfo = await getTreasuryStorageData(ctx, hash, block)
    }
    if (!tipInfo) return undefined

    let reason = await getReason(ctx, tipInfo.reason, block).then((r) => r || '')

    return {
        ...tipInfo,
        reason,
    }
}