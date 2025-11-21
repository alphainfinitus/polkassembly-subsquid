import { UnknownVersionError } from '@src/shared/errors'
import { awarded, proposed, rejected, spendApproved } from '@kusama/types/treasury/events'
import { Event } from '@src/processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v1020.is(itemEvent)) {
        const index = proposed.v1020.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v9160.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v9160.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(itemEvent: Event): RejectedData {
    if (rejected.v1032.is(itemEvent)) {
        const [index] = rejected.v1032.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v9160.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v9160.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v1020.is(itemEvent)) {
        const [index] = awarded.v1020.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v9160.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v9160.decode(itemEvent)
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
    if (spendApproved.v9250.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary } = spendApproved.v9250.decode(itemEvent)
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