import { UnknownVersionError } from '@src/shared/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '@kusama/types/council/events'

import { Event } from '@src/processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v1020.is(itemEvent)) {
        return approved.v1020.decode(itemEvent)
    } else if (approved.v9130.is(itemEvent)) {
        return approved.v9130.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v1050.is(itemEvent)) {
        return closed.v1050.decode(itemEvent)[0]
    } else if (closed.v9130.is(itemEvent)) {
        return closed.v9130.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v1020.is(itemEvent)) {
        return disapproved.v1020.decode(itemEvent)[0]
    } else if (disapproved.v9130.is(itemEvent)) {
        return disapproved.v9130.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v1020.is(itemEvent)) {
        return executed.v1020.decode(itemEvent)[0]
    } else if (executed.v2005.is(itemEvent)) {
        return executed.v2005.decode(itemEvent)[0]
    } else if (executed.v9111.is(itemEvent)) {
        return executed.v9111.decode(itemEvent)[0]
    } else if (executed.v9130.is(itemEvent)) {
        return executed.v9130.decode(itemEvent).proposalHash
    } else if (executed.v9160.is(itemEvent)) {
        return executed.v9160.decode(itemEvent).proposalHash
    } else if (executed.v9170.is(itemEvent)) {
        return executed.v9170.decode(itemEvent).proposalHash
    } else if (executed.v9190.is(itemEvent)) {
        return executed.v9190.decode(itemEvent).proposalHash
    } else if (executed.v9320.is(itemEvent)) {
        return executed.v9320.decode(itemEvent).proposalHash
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
    if (proposed.v1020.is(itemEvent)) {
        const [proposer, index, hash, threshold] = proposed.v1020.decode(itemEvent)
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (proposed.v9130.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v9130.decode(itemEvent)
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
    if (voted.v1020.is(itemEvent)) {
        const [voter, hash, decision] = voted.v1020.decode(itemEvent)
        return {
            voter,
            hash,
            decision,
        }
    } else if (voted.v9130.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v9130.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
