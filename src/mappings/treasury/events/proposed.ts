/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getSpendApprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

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