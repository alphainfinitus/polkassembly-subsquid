import { UnknownVersionError } from '@shared/errors'
import {
    noted,
    requested,
    cleared
} from '@polkadot/types/preimage/events'
import { Event } from '@src/processor'
interface PreimageNotedData {
    hash: string
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (noted.v9170.is(itemEvent)) {
        const { hash } = noted.v9170.decode(itemEvent)
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
    if (requested.v9170.is(itemEvent)) {
        const {hash} = requested.v9170.decode(itemEvent)
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
    if (cleared.v9170.is(itemEvent)) {
        const {hash} = cleared.v9170.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}