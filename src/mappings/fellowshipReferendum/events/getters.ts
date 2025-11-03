import { submitted, 
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
    metadataCleared } from '../../../types/fellowship-referenda/events'
import { voted } from '../../../types/fellowship-collective/events'
import { UnknownVersionError } from '../../../common/errors'
import { TallyData } from '../../types/data'
import { Event } from '../../../processor'
import { VoteDecision } from '../../../model'
interface ReferendumEventData {
    index: number
    track: number
    hash: string
}


export function getEventData(itemEvent: Event): ReferendumEventData {
    if (submitted.v9320.is(itemEvent)) {
        const {index, track, proposal } = submitted.v9320.decode(itemEvent)
        let hash = null;
        if(proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else{
            hash = proposal.hash
        }
        return {
            index,
            track,
            hash
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
    if (cancelled.v9320.is(itemEvent)) {
        const { index, tally } = cancelled.v9320.decode(itemEvent)
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
    if (approved.v9320.is(itemEvent)) {
        const { index } = approved.v9320.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getKilledData(itemEvent: Event): ReferendaData {
    if (killed.v9320.is(itemEvent)) {
        const { index, tally } = killed.v9320.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getTimedOutData(itemEvent: Event): ReferendaData {
    if (timedOut.v9320.is(itemEvent)) {
        const { index, tally } = timedOut.v9320.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRejectedData(itemEvent: Event): ReferendaData {
    if (rejected.v9320.is(itemEvent)) {
        const { index, tally } = rejected.v9320.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmAbortedData(itemEvent: Event): ReferendaIndexData {
    if (confirmAborted.v9320.is(itemEvent)) {
        const { index } = confirmAborted.v9320.decode(itemEvent)
        return {
            index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmedData(itemEvent: Event): ReferendaData {
    if (confirmed.v9320.is(itemEvent)) {
        const { index, tally } = confirmed.v9320.decode(itemEvent)
        return {
            index,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getConfirmStartedData(itemEvent: Event): ReferendaIndexData {
    if (confirmStarted.v9320.is(itemEvent)) {
        const { index } = confirmStarted.v9320.decode(itemEvent)
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
    if (decisionDepositPlaced.v9320.is(itemEvent)) {
        const { index, who, amount } = decisionDepositPlaced.v9320.decode(itemEvent)
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
    if (decisionStarted.v9320.is(itemEvent)) {
        let hash = undefined;
        const { index, track, proposal, tally} = decisionStarted.v9320.decode(itemEvent)
        if(proposal.__kind == "Inline") {
            hash = proposal.value
        }
        else{
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
    if (metadataSet.v9420.is(itemEvent)) {
        const { index, hash } = metadataSet.v9420.decode(itemEvent)
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
    if (metadataCleared.v9420.is(itemEvent)) {
        const { index, hash } = metadataCleared.v9420.decode(itemEvent)
        return {
            index,
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface FellowshipCollectiveVoteData {
    accountId: string, 
    index: number, 
    decision: VoteDecision,
    amount: number, 
    tally: TallyData

}

export function getFellowshipVoteData(itemEvent: Event): FellowshipCollectiveVoteData {
    if (voted.v9320.is(itemEvent)) {
        const { who, poll, vote, tally  } = voted.v9320.decode(itemEvent)
        const decision = vote.__kind == "Aye" ? VoteDecision.yes : VoteDecision.no
        const amount = vote.value
        return {
            accountId: who,
            index: poll,
            decision,
            amount,
            tally
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}