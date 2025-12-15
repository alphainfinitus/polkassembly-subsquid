import { UnknownVersionError } from '@shared/errors'
import { awarded, proposed, rejected, spendApproved, assetSpendApproved } from '@polkadot/types/treasury/events'
import { Event } from '@src/processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v0.is(itemEvent)) {
        const index = proposed.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v9170.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v9170.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(itemEvent: Event): RejectedData {
    if (rejected.v0.is(itemEvent)) {
        const [index] = rejected.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v9170.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v9170.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v0.is(itemEvent)) {
        const [index] = awarded.v0.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v9170.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v9170.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface SpendApprovedData {
    proposalIndex: number
    amount: bigint
    beneficiary: string

}

export function getSpendApprovedData(itemEvent: Event): SpendApprovedData {
    if (spendApproved.v9250.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary}= spendApproved.v9250.decode(itemEvent)
        return {
            proposalIndex,
            amount,
            beneficiary
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }

}

interface AssetSpendApprovedData {
    index: number
    assetKind: any
    amount: bigint
    beneficiary: any
    expireAt: number
}

export function getAssetSpendApprovedData(itemEvent: Event): AssetSpendApprovedData {
    if (assetSpendApproved.v1001002.is(itemEvent)) {
        const { index, assetKind, amount, beneficiary, expireAt } = assetSpendApproved.v1001002.decode(itemEvent)
        return {
            index,
            assetKind,
            amount,
            beneficiary,
            expireAt
        }
    } else if (assetSpendApproved.v1002000.is(itemEvent)) {
        const { index, assetKind, amount, beneficiary, expireAt } = assetSpendApproved.v1002000.decode(itemEvent)
        return {
            index,
            assetKind,
            amount,
            beneficiary,
            expireAt
        }
    } else if (assetSpendApproved.v1005001.is(itemEvent)) {
        const { index, assetKind, amount, beneficiary, expireAt } = assetSpendApproved.v1005001.decode(itemEvent)
        return {
            index,
            assetKind,
            amount,
            beneficiary,
            expireAt
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}