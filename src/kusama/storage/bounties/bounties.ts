/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '@src/shared/errors'
import { ProcessorContext } from '@src/processor'
import { bounties, bountyDescriptions } from '@kusama/types/bounties/storage'
import { bounties as TreasuryBountiesStorage, bountyDescriptions as TreasuryBountyDescriptionsStorage } from '@kusama/types/treasury/storage'

import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: string
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {

    if (bounties.v2028.is(block)) {
        return await bounties.v2028.get(block, index)
    } else if (bounties.v9111.is(block)) {
        return await bounties.v9111.get(block, index)
    } else if (bounties.v1005000.is(block)) {
        return await bounties.v1005000.get(block, index)
    } else {
        throw new UnknownVersionError("Bounty.Bounties")
    }
}

async function getTreasuryStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {

    if (TreasuryBountiesStorage.v2025.is(block)) {
        return await TreasuryBountiesStorage.v2025.get(block, index)
    } else {
        throw new UnknownVersionError("Treasury.Bounties")
    }
}

export async function getBounties(ctx: ProcessorContext<Store>, index: number, block: any) {
    let bountyInfo;
    try {
        bountyInfo = await getBountyStorageData(ctx, index, block)
    } catch {
        bountyInfo = await getTreasuryStorageData(ctx, index, block)
    }
    if (!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}

async function getBountyDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (bountyDescriptions.v2028.is(block)) {
        return await bountyDescriptions.v2028.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Bounties.descriptions")
    }
}

async function getTreasuryDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (TreasuryBountyDescriptionsStorage.v2025.is(block)) {
        return await TreasuryBountyDescriptionsStorage.v2025.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Bounties.descriptions")
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    try {
        return await getBountyDescriptionStorageData(ctx, index, block)
    } catch {
        await getTreasuryDescriptionStorageData(ctx, index, block)
    }
}