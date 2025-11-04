/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createTreasury } from '@polkadot/mappings/utils/proposals'
import { getProposedData, getSpendApprovedData } from '@polkadot/mappings/treasury/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getProposedData(item)

    const storageData = await storage.treasury.getProposals(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, header, extrinsicIndex, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: ss58codec.encode(beneficiary),
    })
}

export async function handleSpendApproved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await createTreasury(ctx, header, extrinsicIndex, {
        index: proposalIndex,
        proposer: ss58codec.encode(beneficiary),
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: ss58codec.encode(beneficiary),
    })
}