/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { childBounties, childBountyDescriptions } from '../../types/child-bounties/storage'
import { Store } from '@subsquid/typeorm-store'

interface ChildBountyBountyStorageData {
    value: bigint
    fee: bigint
    parentBounty: number,
    curatorDeposit: bigint,
}

async function getChildBountyStorageData(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<ChildBountyBountyStorageData | undefined> {
    if (childBounties.integriteeParachainV35.is(block)) {
        return await childBounties.integriteeParachainV35.get(block, parentBountyId, index)
    } else {
        throw new UnknownVersionError("ChildBounties.childbounty")
    }
}


export async function getChildBounties(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any) {
    let childBountyInfo = await getChildBountyStorageData(ctx, parentBountyId, index, block)
    if (!childBountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...childBountyInfo,
        description
    }
}

async function getDescription(ctx: ProcessorContext<Store>, index: number, block: any) {
    return (await getChildBountyStorageReasonData(ctx, index, block))
}

async function getChildBountyStorageReasonData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<string | undefined> {
    if (childBountyDescriptions.integriteeParachainV35.is(block)) {
        return await childBountyDescriptions.integriteeParachainV35.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("ChildBounties.description")
    }
}
