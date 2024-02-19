import { UnknownVersionError } from '../../../common/errors'
import {
    noted,
    requested,
    cleared
} from '../../../types/preimage/events'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

interface PreimageNotedData {
    hash: string
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (noted.v9420.is(itemEvent)) {
        const { hash } = noted.v9420.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageRequestedData {
    hash: string
}

export function getPreimageRequestedData(ctx: ProcessorContext<Store>, itemEvent: Event): PreimageRequestedData {
    if (requested.v9420.is(itemEvent)) {
        const {hash} = requested.v9420.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageClearedData {
    hash: string
}

export function getPreimageClearedData(ctx: ProcessorContext<Store>, itemEvent: Event): PreimageClearedData {
    if (cleared.v9420.is(itemEvent)) {
        const {hash} = cleared.v9420.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}