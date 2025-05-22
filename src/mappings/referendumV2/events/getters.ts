import {
    submitted,
    cancelled,
    approved,
    killed,
    confirmAborted,
    confirmStarted,
    decisionDepositPlaced,
    decisionStarted,
    confirmed,
    rejected,
    timedOut,
    metadataSet,
    metadataCleared
} from '../../../types/referenda/events'
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import { Event } from '../../../processor'
interface ReferendumEventData {
    index: number
    track: number
    hash: string
    proposalKind: string
}


export function getEventData(itemEvent: Event): ReferendumEventData {
    if (submitted.v1001002.is(itemEvent)) {
        const { index, track, proposal } = submitted.v1001002.decode(itemEvent)
        let hash = null;
        if (proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else {
            hash = proposal.hash
        }
        return {
            index,
            track,
            hash,
            proposalKind: proposal.__kind
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaData {
    tally: TallyData,
    index: number,
}

export function getCancelledData(itemEvent: Event): ReferendaData {
    if (cancelled.v1001002.is(itemEvent)) {
        const { index, tally } = cancelled.v1001002.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaIndexData {
    index: number
}

export function getApprovedData(itemEvent: Event): ReferendaIndexData {
    if (approved.v1001002.is(itemEvent)) {
        const { index } = approved.v1001002.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if (killed.v1001002.is(itemEvent)) {
        const { index, tally } = killed.v1001002.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if (timedOut.v1001002.is(itemEvent)) {
        const { index, tally } = timedOut.v1001002.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if (rejected.v1001002.is(itemEvent)) {
        const { index, tally } = rejected.v1001002.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if (confirmAborted.v1001002.is(itemEvent)) {
        const { index } = confirmAborted.v1001002.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if (confirmed.v1001002.is(itemEvent)) {
        const { index, tally } = confirmed.v1001002.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if (confirmStarted.v1001002.is(itemEvent)) {
        const { index } = confirmStarted.v1001002.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaDepositData {
    index: number,
    who: string,
    amount: bigint,
}

export function getDecisionDepositPlacedData(itemEvent: Event): ReferendaDepositData {
    if (decisionDepositPlaced.v1001002.is(itemEvent)) {
        const { index, who, amount } = decisionDepositPlaced.v1001002.decode(itemEvent)
        return {
            index,
            who,
            amount
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaDecisionStartedData {
    index: number,
    tally: TallyData,
    track: number,
    hash: string,
}

export function getDecisionStartedData(itemEvent: Event): ReferendaDecisionStartedData {
    if (decisionStarted.v1001002.is(itemEvent)) {
        let hash = undefined;
        const { index, track, proposal, tally } = decisionStarted.v1001002.decode(itemEvent)
        if (proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else {
            hash = proposal.hash
        }
        return {
            index,
            track,
            tally,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
export interface ReferendaMetadataSetData {
    index: number,
    hash: string,
}

export function getMetadataSetData(itemEvent: Event): ReferendaMetadataSetData {
    if (metadataSet.v1001002.is(itemEvent)) {
        const { index, hash } = metadataSet.v1001002.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ReferendaMetadataCleared {
    index: number,
    hash: string,
}

export function getMetadataClearedData(itemEvent: Event): ReferendaMetadataCleared {
    if (metadataCleared.v1001002.is(itemEvent)) {
        const { index, hash } = metadataCleared.v1001002.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}