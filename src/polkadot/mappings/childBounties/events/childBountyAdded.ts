import { ProposalStatus } from '@model/index'
import { getOriginAccountId } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createChildBounty } from '@polkadot/mappings/utils/proposals'
import { getChildBountyAddedData } from '@polkadot/mappings/childBounties/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex } = getChildBountyAddedData(item)

    const origin = item.extrinsic?.call?.origin
    let proposer
    if (origin) {
        proposer = getOriginAccountId(origin)
    }

    const extrinsicIndex = `${header.height}-${item.index}`

    // Try to get storage data, but handle gracefully if it doesn't exist
    const storageData = await storage.childBounties.getChildBountyDataWithFallback(ctx, parentIndex, childIndex, header)

    if (storageData.hasStorageData) {
        // Full data available - create complete record
        ctx.log.info(`Creating child bounty ${childIndex} with full storage data`)
        const { value, fee, description, curatorDeposit } = storageData

        await createChildBounty(ctx, header, extrinsicIndex, {
            index: childIndex,
            parentBountyIndex: parentIndex,
            status: ProposalStatus.Added,
            proposer,
            reward: value!,
            fee: fee!,
            curatorDeposit: curatorDeposit!,
            description: description!,
        })
    } else {
        // Storage not available yet - create minimal record
        ctx.log.info(`Creating child bounty ${childIndex} with minimal data (storage not available yet)`)

        await createChildBounty(ctx, header, extrinsicIndex, {
            index: childIndex,
            parentBountyIndex: parentIndex,
            status: ProposalStatus.Added,
            proposer,
            reward: BigInt(0), // Will be updated when storage becomes available
            fee: BigInt(0),
            curatorDeposit: BigInt(0),
            description: 'Child bounty pending storage data', // Temporary description
        })
    }
}