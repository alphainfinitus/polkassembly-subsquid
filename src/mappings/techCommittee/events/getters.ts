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
    if (approved.integriteeParachainV21.is(itemEvent)) {
        return approved.integriteeParachainV21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): string {
    if (closed.integriteeParachainV21.is(itemEvent)) {
        return closed.integriteeParachainV21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDisapprovedData(itemEvent: Event): string {
    if (disapproved.integriteeParachainV21.is(itemEvent)) {
        return disapproved.integriteeParachainV21.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): string {
    if (executed.integriteeParachainV21.is(itemEvent)) {
        return executed.integriteeParachainV21.decode(itemEvent).proposalHash
    } else if (executed.integriteeParachainV28.is(itemEvent)) {
        return executed.integriteeParachainV28.decode(itemEvent).proposalHash
    } else if (executed.integriteeParachainV35.is(itemEvent)) {
        return executed.integriteeParachainV35.decode(itemEvent).proposalHash
    } else if (executed.integriteeParachainV42.is(itemEvent)) {
        return executed.integriteeParachainV42.decode(itemEvent).proposalHash
    } else if (executed.v560.is(itemEvent)) {
        return executed.v560.decode(itemEvent).proposalHash
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
    if (proposed.integriteeParachainV21.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.integriteeParachainV21.decode(itemEvent)
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
    if (voted.integriteeParachainV21.is(itemEvent)) {
        const { account, proposalHash, voted: voteData } = voted.integriteeParachainV21.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: voteData,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
