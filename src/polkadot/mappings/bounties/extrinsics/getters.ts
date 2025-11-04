import { UnknownVersionError } from '@shared/errors'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '@polkadot/types/bounties/calls'
import {
    acceptCurator as TreasuryAcceptCuratorCall,
    unassignCurator as TreasuryUnassignCuratorCall,
} from '@polkadot/types/treasury/calls'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorDataOld(itemCall: any): AccepterCuratorData {
    if (TreasuryAcceptCuratorCall.v25.is(itemCall)) {
        const { bountyId } = TreasuryAcceptCuratorCall.v25.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v28.is(itemCall)) {
        const { bountyId } = acceptCurator.v28.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface UnassingCuratorData {
    index: number
}

export function getUnassingCuratorDataOld(itemCall: any): UnassingCuratorData {
    if (TreasuryUnassignCuratorCall.v25.is(itemCall)) {
        const { bountyId } = TreasuryUnassignCuratorCall.v25.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.v28.is(itemCall)) {
        const { bountyId } = unassignCurator.v28.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface ProposeCuratorData {
    index: number
    fee: bigint
    curator?: string | number | undefined | null
}

export function getProposeCuratorData(itemCall: any): ProposeCuratorData {
    if (proposeCurator.v28.is(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v28.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.value
        }
    } else if (proposeCurator.v9110.decode(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v9110.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.__kind == "Index" ? null : curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}