import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    TechnicalCommitteeApprovedEvent,
    TechnicalCommitteeClosedEvent,
    TechnicalCommitteeDisapprovedEvent,
    TechnicalCommitteeExecutedEvent,
    TechnicalCommitteeProposedEvent,
    TechnicalCommitteeVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getApprovedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeApprovedEvent(ctx)
    if (event.isV110) {
        return event.asV110.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx)
    if (event.isV110) {
        return event.asV110.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDissaprovedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx)
    if (event.isV110) {
        return event.asV110.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx)
    if (event.isV110) {
        return event.asV110.proposalHash
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export interface ProposedData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

export function getProposedData(ctx: EventContext): ProposedData {
    const event = new TechnicalCommitteeProposedEvent(ctx)
    if (event.isV110) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV110
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface VotedData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

export function getVotedData(ctx: EventContext): VotedData {
    const event = new TechnicalCommitteeVotedEvent(ctx)
    if (event.isV110) {
        const { account, proposalHash, voted } = event.asV110
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
