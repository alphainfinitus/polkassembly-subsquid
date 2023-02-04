import { UnknownVersionError } from '../../../common/errors'
import {
    DemocracyCancelledEvent,
    DemocracyExecutedEvent,
    DemocracyNotPassedEvent,
    DemocracyPassedEvent,
    DemocracyPreimageInvalidEvent,
    DemocracyPreimageMissingEvent,
    DemocracyPreimageNotedEvent,
    DemocracyPreimageReapedEvent,
    DemocracyPreimageUsedEvent,
    DemocracySecondedEvent,
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export function getCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyCancelledEvent(ctx, itemEvent)
    if (event.isV40) {
        return event.asV40
    } else if (event.isV1200) {
        return event.asV1200.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyExecutedEvent(ctx, itemEvent)
    if (event.isV40) {
        return event.asV40[0]
    } else if (event.isV701) {
        return event.asV701[0]
    } else if (event.isV900) {
        return event.asV900[0]
    } else if (event.isV1200) {
        return event.asV1200.refIndex
    } else if (event.isV1300) {
        return event.asV1300.refIndex
    } else if (event.isV1400) {
        return event.asV1400.refIndex
    } else if (event.isV1603) {
        return event.asV1603.refIndex
    } else {
        const data = ctx._chain.decodeEvent(itemEvent)
        return data.refIndex
    }
}

export function getNotPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyNotPassedEvent(ctx, itemEvent)
    if (event.isV40) {
        return event.asV40
    } else if (event.isV1200) {
        return event.asV1200.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPassedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): number {
    const event = new DemocracyPassedEvent(ctx, itemEvent)
    if (event.isV40) {
        return event.asV40
    } else if (event.isV1200) {
        return event.asV1200.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageInvalidData {
    hash: Uint8Array
    index: number
}

export function getPreimageInvalidData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageInvalidData {
    const event = new DemocracyPreimageInvalidEvent(ctx, itemEvent)
    if (event.isV40) {
        const [hash, index] = event.asV40
        return {
            hash,
            index,
        }
    } else if (event.isV1200) {
        const { proposalHash: hash, refIndex: index } = event.asV1200
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageMissingData {
    hash: Uint8Array
    index: number
}

export function getPreimageMissingData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageMissingData {
    const event = new DemocracyPreimageMissingEvent(ctx, itemEvent)
    if (event.isV40) {
        const [hash, index] = event.asV40
        return {
            hash,
            index,
        }
    } else if (event.isV1200) {
        const { proposalHash: hash, refIndex: index } = event.asV1200
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface PreimageNotedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageNotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageNotedData {
    const event = new DemocracyPreimageNotedEvent(ctx, itemEvent)
    if (event.isV40) {
        const [hash, provider, deposit] = event.asV40
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1200) {
        const { proposalHash: hash, who: provider, deposit } = event.asV1200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageReapedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageReapedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageReapedData {
    const event = new DemocracyPreimageReapedEvent(ctx, itemEvent)
    if (event.isV40) {
        const [hash, provider, deposit] = event.asV40
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1200) {
        const { proposalHash: hash, provider, deposit } = event.asV1200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageUsedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageUsedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageUsedData {
    const event = new DemocracyPreimageUsedEvent(ctx, itemEvent)
    if (event.isV40) {
        const [hash, provider, deposit] = event.asV40
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1200) {
        const { proposalHash: hash, provider, deposit } = event.asV1200
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface DemocracySecondedData {
    accountId: Uint8Array
    refIndex: number
}

export function getDemocracySecondedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): DemocracySecondedData {
    const event = new DemocracySecondedEvent(ctx, itemEvent)
    if (event.isV1001) {
        const [seconder, propIndex] = event.asV1001
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    } else if (event.isV1200) {
        const { who: seconder, proposalIndex: propIndex } = event.asV1200
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    } else if (event.isV1300) {
        const { seconder, propIndex } = event.asV1300
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }
}