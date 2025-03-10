import { UnknownVersionError } from '../../../common/errors'
import {
    cancelled,
    notPassed,
    passed,
    seconded,
} from '../../../types/democracy/events'
import { Event } from '../../../processor'

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v1013.is(itemEvent)) {
        return cancelled.v1013.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v1013.is(itemEvent)) {
        return notPassed.v1013.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v1013.is(itemEvent)) {
        return passed.v1013.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface DemocracySecondedData {
    accountId: string
    refIndex: number
}

export function getDemocracySecondedData(itemEvent: Event): DemocracySecondedData {
    if (seconded.v1013.is(itemEvent)) {
        const { seconder, propIndex } = seconded.v1013.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}