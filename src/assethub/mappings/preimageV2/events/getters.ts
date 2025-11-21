import { UnknownVersionError } from '@shared/errors'
import {
    noted,
    requested,
    cleared
} from '@assethub/types/preimage/events'
import { Event } from '@src/processor'
interface PreimageNotedData {
    hash: string
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (noted.v1009001.is(itemEvent)) {
        const { hash } = noted.v1009001.decode(itemEvent)
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

export function getPreimageRequestedData(itemEvent: Event): PreimageRequestedData {
    if (requested.v1009001.is(itemEvent)) {
        const { hash } = requested.v1009001.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageClearedData {
    hash: Uint8Array
}

export function getPreimageClearedData(itemEvent: Event): PreimageRequestedData {
    if (cleared.v1009001.is(itemEvent)) {
        const { hash } = cleared.v1009001.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}