import { UnknownVersionError } from '@shared/errors'
import {
    bountyExtended as TreasuryBountyExtendedEvent,
    bountyBecameActive as TreasuryBountyBecameActiveEvent,
    bountyCanceled as TreasuryBountyCanceledEvent,
    bountyAwarded as TreasuryBountyAwardedEvent,
    bountyClaimed as TreasuryBountyClaimedEvent,
    bountyProposed as TreasuryBountyProposedEvent,
    bountyRejected as TreasuryBountyRejectedEvent,
} from '@polkadot/types/treasury/events'
import {
    bountyAwarded,
    bountyBecameActive,
    bountyCanceled,
    bountyClaimed,
    bountyExtended,
    bountyProposed,
    bountyRejected
} from '@polkadot/types/bounties/events'
import { Event } from '@src/processor'

interface BountyAwardedData {
    index: number
    beneficiary: string
}

export function getBountyAwardedData(itemEvent: Event): BountyAwardedData {
    if (bountyAwarded.v28.is(itemEvent)) {
        const [index, beneficiary] = bountyAwarded.v28.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else if (bountyAwarded.v9140.is(itemEvent)) {
        const { index, beneficiary } = bountyAwarded.v9140.decode(itemEvent)
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyAwardedDataOld(itemEvent: Event): BountyAwardedData {
    if (TreasuryBountyAwardedEvent.v25.is(itemEvent)) {
        const [index, beneficiary] = TreasuryBountyAwardedEvent.v25.decode(itemEvent)
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
    if (TreasuryBountyBecameActiveEvent.v25.is(itemEvent)) {
        const index = TreasuryBountyBecameActiveEvent.v25.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyBacameActiveData(itemEvent: Event): BountyBacameActiveData {
    if (bountyBecameActive.v28.is(itemEvent)) {
        const index = bountyBecameActive.v28.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyBecameActive.v9140.is(itemEvent)) {
        const { index } = bountyBecameActive.v9140.decode(itemEvent)
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
    if (TreasuryBountyCanceledEvent.v25.is(itemEvent)) {
        const index = TreasuryBountyCanceledEvent.v25.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyCanceledData(itemEvent: Event): BountyCanceledData {
    if (bountyCanceled.v28.is(itemEvent)) {
        const index = bountyCanceled.v28.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyCanceled.v9140.is(itemEvent)) {
        const { index } = bountyCanceled.v9140.decode(itemEvent)
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
    if (TreasuryBountyClaimedEvent.v25.is(itemEvent)) {
        const [index, payout, beneficiary] = TreasuryBountyClaimedEvent.v25.decode(itemEvent)
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
    if (bountyClaimed.v28.is(itemEvent)) {
        const [index, payout, beneficiary] = bountyClaimed.v28.decode(itemEvent)
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (bountyClaimed.v9140.is(itemEvent)) {
        const { index, payout, beneficiary } = bountyClaimed.v9140.decode(itemEvent)
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
    if (TreasuryBountyExtendedEvent.v25.is(itemEvent)) {
        const index = TreasuryBountyExtendedEvent.v25.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyExtendedData(itemEvent: Event): BountyExtendedData {
    if (bountyExtended.v28.is(itemEvent)) {
        const index = bountyExtended.v28.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyExtended.v9140.is(itemEvent)) {
        const { index } = bountyExtended.v9140.decode(itemEvent)
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
    if (TreasuryBountyProposedEvent.v25.is(itemEvent)) {
        const index = TreasuryBountyProposedEvent.v25.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyProposedData(itemEvent: Event): BountyProposedData {
    if (bountyProposed.v28.is(itemEvent)) {
        const index = bountyProposed.v28.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyProposed.v9140.is(itemEvent)) {
        const { index } = bountyProposed.v9140.decode(itemEvent)
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
    if (TreasuryBountyRejectedEvent.v25.is(itemEvent)) {
        const [index] = TreasuryBountyRejectedEvent.v25.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getBountyRejectedData(itemEvent: Event): BountyRejectedData {
    if (bountyRejected.v28.is(itemEvent)) {
        const [index] = bountyRejected.v28.decode(itemEvent)
        return {
            index,
        }
    } else if (bountyRejected.v9140.is(itemEvent)) {
        const { index } = bountyRejected.v9140.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}
