import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '../../../types/council/events'

import { Event } from '../../../processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v9300.is(itemEvent)) {
        return approved.v9300.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v9300.is(itemEvent)) {
        return closed.v9300.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v9300.is(itemEvent)) {
        return disapproved.v9300.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v9300.is(itemEvent)) {
        return executed.v9300.decode(itemEvent).proposalHash
    } else if (executed.v9310.is(itemEvent)) {
        return executed.v9310.decode(itemEvent).proposalHash
    } else if (executed.v9420.is(itemEvent)) {
        return executed.v9420.decode(itemEvent).proposalHash
    } else if (executed.v9430.is(itemEvent)) {
        return executed.v9430.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ProposedData {
    proposer: string
    index: number
    hash: string
    threshold: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v9300.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v9300.decode(itemEvent)
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface VotedData {
    voter: string
    hash: string
    decision: boolean
}

export function getVotedData(itemEvent: Event): VotedData {
    if (voted.v9300.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v9300.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
