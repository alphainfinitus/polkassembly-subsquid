import { Index } from 'typeorm'
import { UnknownVersionError } from '../../../common/errors'
import {
    added,
    awarded,
    canceled,
    claimed,
} from '../../../types/child-bounties/events'

interface ChildBountyAwardedData {
    parentIndex: number
    childIndex: number
    beneficiary: string
}

export function getChildBountyAwardedData(itemEvent: any): ChildBountyAwardedData {
    if (awarded.v3.is(itemEvent)) {
        const { index, childIndex, beneficiary } = awarded.v3.decode(itemEvent)
        return {
            parentIndex: index,
            childIndex,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ChildBountyCancelledData {
    parentIndex: number,
    childIndex: number,
}

export function getChildBountyCancelledData(itemEvent: any): ChildBountyCancelledData {
    if (canceled.v3.is(itemEvent)) {
        const { index, childIndex } = canceled.v3.decode(itemEvent)
        return {
            parentIndex: index,
            childIndex
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ChildBountyClaimedData {
    parentIndex: number
    childIndex: number
    payout: bigint
    beneficiary: string
}

export function getChildBountyClaimedData(itemEvent: any): ChildBountyClaimedData {
    if (claimed.v3.is(itemEvent)) {
        const { index, childIndex, payout, beneficiary } = claimed.v3.decode(itemEvent)
        return {
            parentIndex: index,
            childIndex,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface ChildBountyAddedData {
    parentIndex: number
    childIndex: number
}

export function getChildBountyAddedData(itemEvent: any): ChildBountyAddedData {
    if (added.v3.is(itemEvent)) {
        const { index, childIndex } = added.v3.decode(itemEvent)
        return {
            parentIndex: index,
            childIndex
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
