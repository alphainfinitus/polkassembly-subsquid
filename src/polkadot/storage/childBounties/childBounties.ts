/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '@shared/errors'
import { ProcessorContext } from '@src/processor'
import { childBounties, childBountyDescriptions, childBountyDescriptionsV1 } from '@polkadot/types/child-bounties/storage'
import { Store } from '@subsquid/typeorm-store'

interface ChildBountyBountyStorageData {
    value: bigint
    fee: bigint
    parentBounty: number
    curatorDeposit: bigint
    description: string

}

async function getChildBountyStorageData(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<any | undefined> {
    if (childBounties.v9190.is(block)) {
        try {
            // First check if storage entry exists by checking if keys exist
            const keys = await childBounties.v9190.getKeys(block, parentBountyId, index)
            if (keys.length === 0) {
                ctx.log.debug(`Child bounty storage entry does not exist for bounty ${parentBountyId}, child ${index}`)
                return undefined
            }

            const result = await childBounties.v9190.get(block, parentBountyId, index)
            if (!result) {
                ctx.log.debug(`Child bounty storage not available yet for bounty ${parentBountyId}, child ${index}`)
                return undefined
            }

            return result
        } catch (error) {
            ctx.log.warn(`Error fetching child bounty storage for bounty ${parentBountyId}, child ${index}: ${error}`)
            return undefined
        }
    } else {
        throw new UnknownVersionError("ChildBounties.childbounty")
    }
}


export async function getChildBounties(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<ChildBountyBountyStorageData | undefined> {
    let childBountyInfo = await getChildBountyStorageData(ctx, parentBountyId, index, block)
    if (!childBountyInfo) return undefined

    let description = await getDescription(ctx, parentBountyId, index, block).then((r) => r || '')
    return {
        ...childBountyInfo,
        description
    }
}

/**
 * Attempts to enrich child bounty data with storage information when available
 * Returns partial data with null values when storage is not available
 */
export async function getChildBountyDataWithFallback(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<{
    value?: bigint
    fee?: bigint
    parentBounty?: number
    curatorDeposit?: bigint
    description?: string
    hasStorageData: boolean
}> {
    const storageData = await getChildBounties(ctx, parentBountyId, index, block)

    if (storageData) {
        return {
            ...storageData,
            hasStorageData: true
        }
    }

    // Return minimal data structure when storage is not available
    return {
        hasStorageData: false,
        value: BigInt(0),
        fee: BigInt(0),
        parentBounty: parentBountyId,
        curatorDeposit: BigInt(0),
        description: ''
    }
}

async function getDescription(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any) {
    return (await getChildBountyStorageReasonData(ctx, parentBountyId, index, block))
}

async function getChildBountyStorageReasonData(ctx: ProcessorContext<Store>, parentBountyId: number, index: number, block: any): Promise<string | undefined> {
    try {
        if (childBountyDescriptionsV1.v1005001.is(block)) {
            return await childBountyDescriptionsV1.v1005001.get(block, parentBountyId, index).then((r) => Buffer.from(r || []).toString('utf8'))
        } else if (childBountyDescriptions.v9190.is(block)) {
            return await childBountyDescriptions.v9190.get(block, index).then((r) => Buffer.from(r || []).toString('utf8'))
        } else {
            throw new UnknownVersionError("ChildBounties.description")
        }
    } catch (error) {
        ctx.log.warn(`Error fetching child bounty description for bounty ${parentBountyId}, child ${index}: ${error}`)
        return ''
    }
}
