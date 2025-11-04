import { tabled } from '@polkadot/types/democracy/events'
import { UnknownVersionError } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@polkadot/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

interface TabledEventData {
    index: number
    deposit: bigint
    depositors?: string[]
}

function getEventData(itemEvent: Event): TabledEventData {
    if (tabled.v0.is(itemEvent)) {
        const [index, deposit, depositors] = tabled.v0.decode(itemEvent)
        return {
            index,
            deposit,
            depositors,
        }
    } else if (tabled.v9140.is(itemEvent)) {
        const { proposalIndex: index, deposit, depositors } = tabled.v9140.decode(itemEvent)
        return {
            index,
            deposit,
            depositors,
        }
    } else if (tabled.v9340.is(itemEvent)) {
        const { proposalIndex: index, deposit } = tabled.v9340.decode(itemEvent)
        return {
            index,
            deposit,
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export async function handleTabled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getEventData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, extrinsicIndex, {
        status: ProposalStatus.Tabled,
        isEnded: true,
    })
}
