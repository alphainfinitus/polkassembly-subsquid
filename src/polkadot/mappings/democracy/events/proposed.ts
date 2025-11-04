import { toHex } from '@subsquid/substrate-processor'
import { proposed } from '@polkadot/types/democracy/events'
import { StorageNotExistsWarn, UnknownVersionError } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createDemocracyProposal } from '@polkadot/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(itemEvent: Event): DemocracyProposalEventData {
    if (proposed.v0.is(itemEvent)) {
        const [index, deposit] = proposed.v0.decode(itemEvent)
        return {
            index,
            deposit,
        }
    } else if (proposed.v9140.is(itemEvent)) {
        const { proposalIndex: index, deposit } = proposed.v9140.decode(itemEvent)
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, deposit } = getEventData(item)

    const storageData = await storage.democracy.getProposals(ctx, header)
    if (!storageData) {
        ctx.log.warn(`Storage doesn't exist for democracy proposals at block ${header.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.DemocracyProposal, index))
        return
    }
    const { hash, proposer } = proposalData
    const extrinsicIndex = `${header.height}-${item.index}`

    await createDemocracyProposal(ctx, header, extrinsicIndex, {
        hash,
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        deposit,
    })
}
