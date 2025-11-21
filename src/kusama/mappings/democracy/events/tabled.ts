import { tabled } from '@kusama/types/democracy/events'
import { UnknownVersionError } from '@src/shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

interface TabledEventData {
    index: number
    deposit: bigint
    depositors?: string[]
}

function getEventData(itemEvent: Event): TabledEventData {
    if (tabled.v1020.is(itemEvent)) {
        const [index, deposit, depositors] = tabled.v1020.decode(itemEvent)
        return {
            index,
            deposit,
            depositors,
        }
    } else if (tabled.v9130.is(itemEvent)) {
        const { proposalIndex: index, deposit, depositors } = tabled.v9130.decode(itemEvent)
        return {
            index,
            deposit,
            depositors,
        }
    } else if (tabled.v9320.is(itemEvent)) {
        const { proposalIndex: index, deposit } = tabled.v9320.decode(itemEvent)
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
