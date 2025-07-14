import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '../../../types/technical-committee/events'

import { Event } from '../../../processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v1.is(itemEvent)) {
        return approved.v1.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v1.is(itemEvent)) {
        return closed.v1.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v1.is(itemEvent)) {
        return disapproved.v1.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v1.is(itemEvent)) {
        return executed.v1.decode(itemEvent).proposalHash
    } else if (executed.v11.is(itemEvent)) {
        return executed.v11.decode(itemEvent).proposalHash
    } else if (executed.v44.is(itemEvent)) {
        return executed.v44.decode(itemEvent).proposalHash
    } else if (executed.v56.is(itemEvent)) {
        return executed.v56.decode(itemEvent).proposalHash
    } else if (executed.v154.is(itemEvent)) {
        return executed.v154.decode(itemEvent).proposalHash
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
    if (proposed.v1.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v1.decode(itemEvent)
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
    if (voted.v1.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v1.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
