import { UnknownVersionError } from '@shared/errors'
import {
    newTip,
    tipClosed,
    tipRetracted,
    tipSlashed
} from '@polkadot/types/tips/events'
import {
    tipClosed as TipsClosedEvent,
    tipRetracted as TipsRetractedEvent,
    newTip as TipsNewTipEvent,
} from '@polkadot/types/treasury/events'
import { Event } from '@src/processor'
interface ClosedData {
    hash: string
    reward: bigint
}

export function getClosedDataOld(itemEvent: Event): ClosedData {
    if (TipsClosedEvent.v0.is(itemEvent)) {
        const [hash, , reward] = TipsClosedEvent.v0.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getClosedData(itemEvent: Event): ClosedData {
    if (tipClosed.v28.is(itemEvent)) {
        const [hash, , reward] = tipClosed.v28.decode(itemEvent)
        return {
            hash,
            reward,
        }
    } else if (tipClosed.v9140.is(itemEvent)) {
        const { tipHash: hash, payout: reward } = tipClosed.v9140.decode(itemEvent)
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
    if (TipsNewTipEvent.v0.is(itemEvent)) {
        const hash = TipsNewTipEvent.v0.decode(itemEvent)
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNewTipData(itemEvent: Event): NewTipData {
    if (newTip.v28.is(itemEvent)) {
        const hash = newTip.v28.decode(itemEvent)
        return {
            hash,
        }
    } else if (newTip.v9140.is(itemEvent)) {
        const { tipHash: hash } = newTip.v9140.decode(itemEvent)
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
    if (TipsRetractedEvent.v0.is(itemEvent)) {
        const hash = TipsRetractedEvent.v0.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getRectractedData(itemEvent: Event): RectractedData {
    if (tipRetracted.v28.is(itemEvent)) {
        const hash = tipRetracted.v28.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipRetracted.v9140.is(itemEvent)) {
        const { tipHash: hash } = tipRetracted.v9140.decode(itemEvent)
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
    if (tipSlashed.v28.is(itemEvent)) {
        const [hash] = tipSlashed.v28.decode(itemEvent)
        return {
            hash,
        }
    } else if (tipSlashed.v9140.is(itemEvent)) {
        const { tipHash: hash } = tipSlashed.v9140.decode(itemEvent)
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
