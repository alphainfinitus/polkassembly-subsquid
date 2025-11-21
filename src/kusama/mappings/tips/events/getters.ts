import { UnknownVersionError } from '@src/shared/errors'
import {
    newTip,
    tipClosed,
    tipRetracted,
    tipSlashed
} from '@kusama/types/tips/events'
import {
    tipClosed as TipsClosedEvent,
    tipRetracted as TipsRetractedEvent,
    newTip as TipsNewTipEvent,
} from '@kusama/types/treasury/events'
import { Event } from '@src/processor'
interface ClosedData {
    hash: string
    reward: bigint
}

export function getClosedDataOld(itemEvent: Event): ClosedData {
    if (TipsClosedEvent.v1038.is(itemEvent)) {
        const [hash, , reward] = TipsClosedEvent.v1038.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): ClosedData {
    if (tipClosed.v2028.is(itemEvent)) {
        const [hash, , reward] = tipClosed.v2028.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else if (tipClosed.v9130.is(itemEvent)) {
        const { tipHash: hash, payout: reward } = tipClosed.v9130.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface NewTipData {
    hash: string
}

export function getNewTipDataOld(itemEvent: Event): NewTipData {
    if (TipsNewTipEvent.v1038.is(itemEvent)) {
        const hash = TipsNewTipEvent.v1038.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNewTipData(itemEvent: Event): NewTipData {
    if (newTip.v2028.is(itemEvent)) {
        const hash = newTip.v2028.decode(itemEvent)
        return {
            hash,
        }
    } else if (newTip.v9130.is(itemEvent)) {
        const { tipHash: hash } = newTip.v9130.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RectractedData {
    hash: string
}

export function getRectractedDataOld(itemEvent: Event): RectractedData {
    if (TipsRetractedEvent.v1038.is(itemEvent)) {
        const hash = TipsRetractedEvent.v1038.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRectractedData(itemEvent: Event): RectractedData {
    if (tipRetracted.v2028.is(itemEvent)) {
        const hash = tipRetracted.v2028.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipRetracted.v9130.is(itemEvent)) {
        const { tipHash: hash } = tipRetracted.v9130.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface SlashedData {
    hash: string
}

export function getSlashedData(itemEvent: Event): SlashedData {
    if (tipSlashed.v2028.is(itemEvent)) {
        const [hash] = tipSlashed.v2028.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipSlashed.v9130.is(itemEvent)) {
        const { tipHash: hash } = tipSlashed.v9130.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
