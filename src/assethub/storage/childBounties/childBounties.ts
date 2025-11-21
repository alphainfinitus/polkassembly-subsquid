/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '@shared/errors'
import { ProcessorContext } from '@src/processor'
import { childBounties, childBountyDescriptionsV1 } from '@assethub/types/child-bounties/storage'
import { Store } from '@subsquid/typeorm-store'

interface ChildBountyBountyStorageData {
    value: bigint
    fee: bigint
    parentBounty: number,
    curatorDeposit: bigint,
}

async function getChildBountyStorageData(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<ChildBountyBountyStorageData | undefined> {
    if (childBounties.v1009001.is(block)) {
        return await childBounties.v1009001.get(block, parentBountyId, index)
    } else {
        throw new UnknownVersionError("ChildBounties.childbounty")
    }
}


export async function getChildBounties(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any) {
    let childBountyInfo = await getChildBountyStorageData(ctx, parentBountyId, index, block)
    if (!childBountyInfo) return undefined;
    let description = await getDescription(ctx, parentBountyId, index, block).then((r) => r || '');
    return {
        ...childBountyInfo,
        description
    }
}

async function getDescription(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any) {
    return (await getChildBountyStorageReasonData(ctx, parentBountyId, index, block))
}

async function getChildBountyStorageReasonData(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<string | undefined> {
    if (childBountyDescriptionsV1.v1009001.is(block)) {
        return await childBountyDescriptionsV1.v1009001.get(block, parentBountyId, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("ChildBounties.description")
    }
}
