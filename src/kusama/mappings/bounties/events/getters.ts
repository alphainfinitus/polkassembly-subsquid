import { UnknownVersionError } from '@src/shared/errors'
import {
    bountyExtended as TreasuryBountyExtendedEvent,
    bountyBecameActive as TreasuryBountyBecameActiveEvent,
    bountyCanceled as TreasuryBountyCanceledEvent,
    bountyAwarded as TreasuryBountyAwardedEvent,
    bountyClaimed as TreasuryBountyClaimedEvent,
    bountyProposed as TreasuryBountyProposedEvent,
    bountyRejected as TreasuryBountyRejectedEvent,
} from '@kusama/types/treasury/events'
import {
    bountyAwarded,
    bountyBecameActive,
    bountyCanceled,
    bountyClaimed,
    bountyExtended,
    bountyProposed,
    bountyRejected
} from '@kusama/types/bounties/events'
import { Event } from '@src/processor'

interface BountyAwardedData {
    index: number
    beneficiary: string
}

export function getBountyAwardedData(itemEvent: Event): BountyAwardedData {
    if (bountyAwarded.v2028.is(itemEvent)) {
        const [index, beneficiary] = bountyAwarded.v2028.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else if (bountyAwarded.v9130.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v9130.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyAwardedDataOld(itemEvent: Event): BountyAwardedData {
    if (TreasuryBountyAwardedEvent.v2025.is(itemEvent)) {
        const [index, beneficiary] = TreasuryBountyAwardedEvent.v2025.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveDataOld(itemEvent: Event): BountyBacameActiveData {
    if (TreasuryBountyBecameActiveEvent.v2025.is(itemEvent)) {
        const index = TreasuryBountyBecameActiveEvent.v2025.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyBacameActiveData(itemEvent: Event): BountyBacameActiveData {
    if (bountyBecameActive.v2028.is(itemEvent)) {
        const index = bountyBecameActive.v2028.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyBecameActive.v9130.is(itemEvent)) {
        const { index } = bountyBecameActive.v9130.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyCanceledData {
    index: number
}

export function getBountyCanceledDataOld(itemEvent: Event): BountyCanceledData {
    if (TreasuryBountyCanceledEvent.v2025.is(itemEvent)) {
        const index = TreasuryBountyCanceledEvent.v2025.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyCanceledData(itemEvent: Event): BountyCanceledData {
    if (bountyCanceled.v2028.is(itemEvent)) {
        const index = bountyCanceled.v2028.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyCanceled.v9130.is(itemEvent)) {
        const { index } = bountyCanceled.v9130.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyClaimedData {
    index: number
    payout: bigint
    beneficiary: string
}

export function getBountyClaimedDataOld(itemEvent: Event): BountyClaimedData {
    if (TreasuryBountyClaimedEvent.v2025.is(itemEvent)) {
        const [index, payout, beneficiary] = TreasuryBountyClaimedEvent.v2025.decode(itemEvent)
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyClaimedData(itemEvent: Event): BountyClaimedData {
    if (bountyClaimed.v2028.is(itemEvent)) {
        const [index, payout, beneficiary] = bountyClaimed.v2028.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (bountyClaimed.v9130.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v9130.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyExtendedData {
    index: number
}

export function getBountyExtendedDataOld(itemEvent: Event): BountyExtendedData {
    if (TreasuryBountyExtendedEvent.v2025.is(itemEvent)) {
        const index = TreasuryBountyExtendedEvent.v2025.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyExtendedData(itemEvent: Event): BountyExtendedData {
    if (bountyExtended.v2028.is(itemEvent)) {
        const index = bountyExtended.v2028.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyExtended.v9130.is(itemEvent)) {
        const { index } = bountyExtended.v9130.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyProposedData {
    index: number
}

export function getBountyProposedDataOld(itemEvent: Event): BountyProposedData {
    if (TreasuryBountyProposedEvent.v2025.is(itemEvent)) {
        const index = TreasuryBountyProposedEvent.v2025.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyProposedData(itemEvent: Event): BountyProposedData {
    if (bountyProposed.v2028.is(itemEvent)) {
        const index = bountyProposed.v2028.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyProposed.v9130.is(itemEvent)) {
        const { index } = bountyProposed.v9130.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface BountyRejectedData {
    index: number
}

export function getBountyRejectedDataOld(itemEvent: Event): BountyRejectedData {
    if (TreasuryBountyRejectedEvent.v2025.is(itemEvent)) {
        const [index] = TreasuryBountyRejectedEvent.v2025.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyRejectedData(itemEvent: Event): BountyRejectedData {
    if (bountyRejected.v2028.is(itemEvent)) {
        const [index] = bountyRejected.v2028.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyRejected.v9130.is(itemEvent)) {
        const { index } = bountyRejected.v9130.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
