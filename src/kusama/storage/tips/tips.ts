import { UnknownVersionError } from '@src/shared/errors'
import { tips, reasons } from '@kusama/types/tips/storage'
import { tips as TreasuryTipsStorage, reasons as TreasuryReasonsStorage } from '@kusama/types/treasury/storage'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '@src/processor'
interface TipStorageData {
    who: string
    finder?: string
    deposit?: bigint
    reason: string
}


async function getTipsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<TipStorageData | undefined> {
    if (tips.v2028.is(block)) {
        return await tips.v2028.get(block, hash)
    } else {
        throw new UnknownVersionError("Tips.tips")
    }
}

async function getTreasuryStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<TipStorageData | undefined> {
    if (TreasuryTipsStorage.v1038.is(block)) {
        const storageData = await TreasuryTipsStorage.v1038.get(block, hash)
        if (!storageData) return undefined

        const { who, finder, reason } = storageData
        return {
            who,
            finder: finder?.[0],
            deposit: finder?.[1],
            reason,
        }
    } else if (TreasuryTipsStorage.v2013.is(block)) {
        return await TreasuryTipsStorage.v2013.get(block, hash)
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getTipsReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {
    if (reasons.v2028.is(block)) {
        return await reasons.v2028.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getTreasuryReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {

    if (TreasuryReasonsStorage.v1038.is(block)) {
        return TreasuryReasonsStorage.v1038.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
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