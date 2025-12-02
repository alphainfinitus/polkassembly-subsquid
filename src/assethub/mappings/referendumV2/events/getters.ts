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
} from '@assethub/types/referenda/events'
import { UnknownVersionError } from '@shared/errors'
import { TallyData } from '@shared/types'
import { Event } from '@src/processor'
interface ReferendumEventData {
    index: number
    track: number
    hash: string
    proposalKind: string
}


export function getEventData(itemEvent: Event): ReferendumEventData {
    if (submitted.v2000000.is(itemEvent)) {
        const { index, track, proposal } = submitted.v2000000.decode(itemEvent)
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
    if (cancelled.v2000000.is(itemEvent)) {
        const { index, tally } = cancelled.v2000000.decode(itemEvent)
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
    if (approved.v2000000.is(itemEvent)) {
        const { index } = approved.v2000000.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if (killed.v2000000.is(itemEvent)) {
        const { index, tally } = killed.v2000000.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if (timedOut.v2000000.is(itemEvent)) {
        const { index, tally } = timedOut.v2000000.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if (rejected.v2000000.is(itemEvent)) {
        const { index, tally } = rejected.v2000000.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if (confirmAborted.v2000000.is(itemEvent)) {
        const { index } = confirmAborted.v2000000.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if (confirmed.v2000000.is(itemEvent)) {
        const { index, tally } = confirmed.v2000000.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if (confirmStarted.v2000000.is(itemEvent)) {
        const { index } = confirmStarted.v2000000.decode(itemEvent)
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
    if (decisionDepositPlaced.v2000000.is(itemEvent)) {
        const { index, who, amount } = decisionDepositPlaced.v2000000.decode(itemEvent)
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
    if (decisionStarted.v2000000.is(itemEvent)) {
        let hash = undefined;
        const { index, track, proposal, tally } = decisionStarted.v2000000.decode(itemEvent)
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
    if (metadataSet.v2000000.is(itemEvent)) {
        const { index, hash } = metadataSet.v2000000.decode(itemEvent)
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
    if (metadataCleared.v2000000.is(itemEvent)) {
        const { index, hash } = metadataCleared.v2000000.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}