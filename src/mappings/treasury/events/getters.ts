import { UnknownVersionError } from '../../../common/errors'
import { awarded, proposed, rejected, spendApproved } from '../../../types/treasury/events'
import { Event } from '../../../processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v0.is(itemEvent)) {
        const index = proposed.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v9170.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v9170.decode(itemEvent)
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
    if (rejected.v0.is(itemEvent)) {
        const [index] = rejected.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v9170.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v9170.decode(itemEvent)
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
    if (awarded.v0.is(itemEvent)) {
        const [index] = awarded.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v9170.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v9170.decode(itemEvent)
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
        const { proposalIndex, amount, beneficiary}= spendApproved.v9250.decode(itemEvent)
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