/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { bounties, bountyDescriptions } from '../../types/bounties/storage'
import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: string
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<BountyStorageData | undefined> {
    if (bounties.v1.is(block)) {
        return await bounties.v1.get(block, index)
    }else {
        throw new UnknownVersionError("Bounty.Bounties")
    }
}

export async function getBounties(ctx: ProcessorContext<Store>, index: number, block: any) {
    let bountyInfo;
    try{
        bountyInfo = await getBountyStorageData(ctx, index, block)
    }catch(e) {
        ctx.log.warn(`Something went wrong while fetching bounty storage data: ${e} at block: ${block.height}`)
    }
    if(!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}

async function getBountyDescriptionStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (bountyDescriptions.v1.is(block)) {
        return await bountyDescriptions.v1.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Bounties.descriptions")
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    try {
        return await getBountyDescriptionStorageData(ctx, index, block)
    }catch(e) {
        ctx.log.warn(`Something went wrong while fetching bounty description storage data: ${e} at block: ${block.height}`)
    }
}