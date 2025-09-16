import { UnknownVersionError } from '../../../common/errors'
import {
    acceptCurator,
    proposeCurator,
    unassignCurator,
} from '../../../types/child-bounties/calls'
import { Store } from '@subsquid/typeorm-store'

interface AccepterCuratorData {
    parentBountyId: number,
    childBountyId: number,
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.integriteeParachainV35.is(itemCall)) {
        const { parentBountyId, childBountyId } = acceptCurator.integriteeParachainV35.decode(itemCall)
        return {
            childBountyId,
            parentBountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface UnassingCuratorData {
    parentBountyId: number
    childBountyId: number
}

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.integriteeParachainV35.is(itemCall)) {
        const { parentBountyId, childBountyId } = unassignCurator.integriteeParachainV35.decode(itemCall)
        return {
            parentBountyId,
            childBountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface ProposeCuratorData {
    parentBountyId: number
    childBountyId: number
    fee: bigint
    curator?: string | number | undefined | null
}

export function getProposeCuratorData(itemCall: any): ProposeCuratorData {
    if (proposeCurator.integriteeParachainV35.is(itemCall)) {
        const { parentBountyId, childBountyId, curator, fee } = proposeCurator.integriteeParachainV35.decode(itemCall)
        return {
            parentBountyId: parentBountyId,
            childBountyId,
            fee,
            curator: curator.__kind != "Index" ? curator.value : null
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}