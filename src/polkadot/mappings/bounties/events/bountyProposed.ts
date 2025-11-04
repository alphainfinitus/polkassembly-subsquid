import { StorageNotExistsWarn } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createBounty } from '@polkadot/mappings/utils/proposals'
import { getBountyProposedData, getBountyProposedDataOld } from '@polkadot/mappings/bounties/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposedOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyProposedDataOld(item)

    const storageData = await storage.bounties.getBounties(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Bounty, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`


    const { proposer, value, bond, description, curatorDeposit, fee } = storageData

    await createBounty(ctx, header, extrinsicIndex, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        description: description,
        curatorDeposit,
        fee: fee
    })
}

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getBountyProposedData(item)

    const storageData = await storage.bounties.getBounties(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Bounty, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { proposer, value, bond, description, curatorDeposit, fee } = storageData

    await createBounty(ctx, header, extrinsicIndex, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        description: description,
        curatorDeposit,
        fee: fee
    })
}
