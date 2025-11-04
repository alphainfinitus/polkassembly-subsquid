/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '@shared/errors'
import { ProcessorContext } from '@src/processor'
import { bounties, bountyDescriptions } from '@assethub/types/bounties/storage'

import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: string
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {

    if (bounties.v2000000.is(block)) {
        return await bounties.v2000000.get(block, index)
    } else {
        throw new UnknownVersionError("Bounty.Bounties")
    }
}


export async function getBounties(ctx: ProcessorContext<Store>, index: number, block: any) {
    const bountyInfo = await getBountyStorageData(ctx, index, block)
    if (!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}

async function getBountyDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (bountyDescriptions.v2000000.is(block)) {
        return await bountyDescriptions.v2000000.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Bounties.descriptions")
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    return await getBountyDescriptionStorageData(ctx, index, block)
}