import { UnknownVersionError } from '@shared/errors'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '@assethub/types/bounties/calls'


interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v2000000.is(itemCall)) {
        const { bountyId } = acceptCurator.v2000000.decode(itemCall)
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

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.v2000000.is(itemCall)) {
        const { bountyId } = unassignCurator.v2000000.decode(itemCall)
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
    if (proposeCurator.v2000000.decode(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v2000000.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.__kind == "Index" ? null : curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}