import { UnknownVersionError } from '@shared/errors'
import { awarded, spendApproved } from '@assethub/types/treasury/events'
import { Event } from '@src/processor'

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v1009001.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v1009001.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface SpendApprovedData {
    proposalIndex: number
    amount: bigint
    beneficiary: string

}

export function getSpendApprovedData(itemEvent: Event): SpendApprovedData {
    if (spendApproved.v1009001.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary } = spendApproved.v1009001.decode(itemEvent)
        return {
            proposalIndex,
            amount,
            beneficiary
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }

}