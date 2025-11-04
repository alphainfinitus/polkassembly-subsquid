import assert from 'assert'
import { UnknownVersionError } from '@shared/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    proposed,
    voted,
} from '@polkadot/types/technical-committee/events'

import { Event } from '@src/processor'

export function getApprovedData(itemEvent: Event): string {
    if (approved.v0.is(itemEvent)) {
        return approved.v0.decode(itemEvent)
    } else if (approved.v9140.is(itemEvent)) {
        return approved.v9140.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.v0.is(itemEvent)) {
        return closed.v0.decode(itemEvent)[0]
    } else if (closed.v9140.is(itemEvent)) {
        return closed.v9140.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.v0.is(itemEvent)) {
        return disapproved.v0.decode(itemEvent)[0]
    } else if (disapproved.v9140.is(itemEvent)) {
        return disapproved.v9140.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.v0.is(itemEvent)) {
        return executed.v0.decode(itemEvent)[0]
    } else if (executed.v9110.is(itemEvent)) {
        return executed.v9110.decode(itemEvent)[0]
    } else if (executed.v9140.is(itemEvent)) {
        return executed.v9140.decode(itemEvent).proposalHash
    } else if (executed.v9170.is(itemEvent)) {
        return executed.v9170.decode(itemEvent).proposalHash
    } else if (executed.v9190.is(itemEvent)) {
        return executed.v9190.decode(itemEvent).proposalHash
    }else if (executed.v9340.is(itemEvent)) {
        return executed.v9340.decode(itemEvent).proposalHash
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
    if (proposed.v0.is(itemEvent)) {
        const [proposer, index, hash, threshold] = proposed.v0.decode(itemEvent)
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (proposed.v9140.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v9140.decode(itemEvent)
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
    if (voted.v0.is(itemEvent)) {
        const [voter, hash, decision] = voted.v0.decode(itemEvent)
        return {
            voter,
            hash,
            decision,
        }
    } else if (voted.v9140.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.v9140.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
