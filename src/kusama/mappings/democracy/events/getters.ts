import { UnknownVersionError } from '@src/shared/errors'
import {
    cancelled,
    executed,
    notPassed,
    passed,
    preimageInvalid,
    preimageMissing,
    preimageNoted,
    preimageReaped,
    preimageUsed,
    seconded,
} from '@kusama/types/democracy/events'
import { Event } from '@src/processor'
import { ss58codec } from '@src/shared/tools'
import { decodeHex } from '@subsquid/substrate-processor'
import { encodeAddress } from '@src/shared/utils'

export function getCancelledData(itemEvent: Event): number {
    if (cancelled.v1020.is(itemEvent)) {
        return cancelled.v1020.decode(itemEvent)
    } else if (cancelled.v9130.decode(itemEvent)) {
        return cancelled.v9130.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getExecutedData(itemEvent: Event): number {
    if (executed.v1020.is(itemEvent)) {
        return executed.v1020.decode(itemEvent)[0]
    } else if (executed.v9090.is(itemEvent)) {
        return executed.v9090.decode(itemEvent)[0]
    } else if (executed.v9111.is(itemEvent)) {
        return executed.v9111.decode(itemEvent)[0]
    } else if (executed.v9130.is(itemEvent)) {
        return executed.v9130.decode(itemEvent).refIndex
    } else if (executed.v9160.is(itemEvent)) {
        return executed.v9160.decode(itemEvent).refIndex
    } else if (executed.v9170.is(itemEvent)) {
        return executed.v9170.decode(itemEvent).refIndex
    } else if (executed.v9190.is(itemEvent)) {
        return executed.v9190.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getNotPassedData(itemEvent: Event): number {
    if (notPassed.v1020.is(itemEvent)) {
        return notPassed.v1020.decode(itemEvent)
    } else if (notPassed.v9130.is(itemEvent)) {
        return notPassed.v9130.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getPassedData(itemEvent: Event): number {
    if (passed.v1020.is(itemEvent)) {
        return passed.v1020.decode(itemEvent)
    } else if (passed.v9130.is(itemEvent)) {
        return passed.v9130.decode(itemEvent).refIndex
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageInvalidData {
    hash: string
    index: number
}

export function getPreimageInvalidData(itemEvent: Event): PreimageInvalidData {
    if (preimageInvalid.v1022.is(itemEvent)) {
        const [hash, index] = preimageInvalid.v1022.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageInvalid.v9130.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageInvalid.v9130.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageMissingData {
    hash: string
    index: number
}

export function getPreimageMissingData(itemEvent: Event): PreimageMissingData {
    if (preimageMissing.v1022.is(itemEvent)) {
        const [hash, index] = preimageMissing.v1022.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else if (preimageMissing.v9130.is(itemEvent)) {
        const { proposalHash: hash, refIndex: index } = preimageMissing.v9130.decode(itemEvent)
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface PreimageNotedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageNotedData(itemEvent: Event): PreimageNotedData {
    if (preimageNoted.v1022.is(itemEvent)) {
        const [hash, provider, deposit] = preimageNoted.v1022.decode(itemEvent)
        return {
            hash,
            provider: encodeAddress(provider),
            deposit,
        }
    } else if (preimageNoted.v9130.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9130.decode(itemEvent)
        return {
            hash,
            provider: encodeAddress(provider),
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageReapedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageReapedData(itemEvent: Event): PreimageNotedData {
    if (preimageReaped.v1022.is(itemEvent)) {
        const [hash, provider, deposit] = preimageReaped.v1022.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageNoted.v9130.is(itemEvent)) {
        const { proposalHash: hash, who: provider, deposit } = preimageNoted.v9130.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export interface PreimageUsedData {
    hash: string
    provider: string
    deposit: bigint
}

export function getPreimageUsedData(itemEvent: Event): PreimageNotedData {
    if (preimageUsed.v1022.is(itemEvent)) {
        const [hash, provider, deposit] = preimageUsed.v1022.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else if (preimageUsed.v9130.is(itemEvent)) {
        const { proposalHash: hash, provider, deposit } = preimageUsed.v9130.decode(itemEvent)
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface DemocracySecondedData {
    accountId: string
    refIndex: number
}

export function getDemocracySecondedData(itemEvent: Event): DemocracySecondedData {
    if (seconded.v9160.is(itemEvent)) {
        const { seconder, propIndex } = seconded.v9160.decode(itemEvent)
        return {
            accountId: seconder,
            refIndex: propIndex
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }
}