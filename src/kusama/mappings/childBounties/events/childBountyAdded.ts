import { StorageNotExistsWarn } from '@src/shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { getOriginAccountId, ss58codec } from '@src/shared/tools'
import { storage } from '@kusama/storage'
import { createChildBounty } from '@kusama/mappings/utils/proposals'
import { getChildBountyAddedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex } = getChildBountyAddedData(item)

    const storageData = await storage.childBounties.getChildBounties(ctx, parentIndex, childIndex, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.ChildBounty, childIndex))
        return
    }

    const origin = item.extrinsic?.call?.origin
    let proposer;
    if (origin) {
        proposer = getOriginAccountId(origin)
    }

    const extrinsicIndex = `${header.height}-${item.index}`


    const { value, fee, description, curatorDeposit } = storageData

    await createChildBounty(ctx, header, extrinsicIndex, {
        index: childIndex,
        parentBountyIndex: parentIndex,
        status: ProposalStatus.Added,
        proposer,
        reward: value,
        fee: fee,
        curatorDeposit: curatorDeposit,
        description: description,
    })
}