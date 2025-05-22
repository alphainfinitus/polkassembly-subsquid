import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createBounty } from '../../utils/proposals'
import { getBountyProposedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

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
