import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    approved,
    closed,
    disapproved,
    executed,
    voted,
    proposed
} from '../../../types/advisory-committee/events'
import { ProcessorContext, Event } from '../../../processor'

import { Store } from '@subsquid/typeorm-store'

export function getApprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): string {
    if (approved.v34.is(itemEvent)) {
        return approved.v34.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(ctx: ProcessorContext<Store>, itemEvent: Event): string {
    if (closed.v34.is(itemEvent)) {
        return closed.v34.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDissaprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): string {
    if (disapproved.v34.is(itemEvent)) {
        return disapproved.v34.decode(itemEvent).proposalHash
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface ExecutedData {
    proposalHash: string
    result: Boolean
}

export function getExecutedData(ctx: ProcessorContext<Store>, itemEvent: Event): ExecutedData {
    if (executed.v34.is(itemEvent)) {
        const {proposalHash, result } = executed.v34.decode(itemEvent)
        return {
            proposalHash,
            result: result.__kind == "Ok" ? true : false
        }
    } else if (executed.v35.is(itemEvent)) {
        const {proposalHash, result } = executed.v35.decode(itemEvent)
        return {
            proposalHash,
            result: result.__kind == "Ok" ? true : false
        }
    } else if (executed.v36.is(itemEvent)) {
        const {proposalHash, result } = executed.v36.decode(itemEvent)
        return {
            proposalHash,
            result: result.__kind == "Ok" ? true : false
        }
    } else if (executed.v46.is(itemEvent)) {
        const {proposalHash, result } = executed.v46.decode(itemEvent)
        return {
            proposalHash,
            result: result.__kind == "Ok" ? true : false
        }
    } else if (executed.v56.is(itemEvent)) {
        const {proposalHash, result } = executed.v56.decode(itemEvent)
        return {
            proposalHash,
            result: result.__kind == "Ok" ? true : false
        }
    }else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface VotedData {
    voter: string
    hash: string
    decision: boolean
    yes: number
    no: number
}

export function getVotedData(ctx: ProcessorContext<Store>, itemEvent: Event): VotedData {
    if (voted.v34.is(itemEvent)) {
        const { account, proposalHash, voted: votedData, yes, no } = voted.v34.decode(itemEvent)
        return {
            voter: account,
            hash: proposalHash,
            decision: votedData,
            yes,
            no
        }
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

export function getProposedData(ctx: ProcessorContext<Store>, itemEvent: Event): ProposedData {
    if (proposed.v34.is(itemEvent)) {
        const { account, proposalIndex, proposalHash, threshold } = proposed.v34.decode(itemEvent)
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