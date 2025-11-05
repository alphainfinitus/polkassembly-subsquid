import { UnknownVersionError } from '@shared/errors'
import { awarded, spendApproved, assetSpendApproved } from '@assethub/types/treasury/events'
import { Event } from '@src/processor'

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v2000000.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v2000000.decode(itemEvent)
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
    if (spendApproved.v2000000.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary } = spendApproved.v2000000.decode(itemEvent)
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
    if (assetSpendApproved.v2000000.is(itemEvent)) {
        const { index, assetKind, amount, beneficiary, expireAt } = assetSpendApproved.v2000000.decode(itemEvent)
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