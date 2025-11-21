import { UnknownVersionError } from '@shared/errors'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '../../../types/bounties/calls'
import {
    acceptCurator as TreasuryAcceptCuratorCall,
    unassignCurator as TreasuryUnassignCuratorCall,
} from '../../../types/treasury/calls'
import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorDataOld(itemCall: any): AccepterCuratorData {
    if (TreasuryAcceptCuratorCall.v2025.is(itemCall)) {
        const { bountyId } = TreasuryAcceptCuratorCall.v2025.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v2028.is(itemCall)) {
        const { bountyId } = acceptCurator.v2028.decode(itemCall)
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
    if (TreasuryUnassignCuratorCall.v2025.is(itemCall)) {
        const { bountyId } = TreasuryUnassignCuratorCall.v2025.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.v2028.is(itemCall)) {
        const { bountyId } = unassignCurator.v2028.decode(itemCall)
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
    if (proposeCurator.v2028.is(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v2028.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.value
        }
    } else if (proposeCurator.v9111.decode(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v9111.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.__kind == "Index" ? null : curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}