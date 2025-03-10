import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { referendumInfoOf } from '../../types/democracy/storage'
import { Store } from '@subsquid/typeorm-store'
import * as v1013 from '../../types/v1013'
type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

type FinishedReferendumData = {
    status: 'Finished'
    approved: boolean
    end: number
}

type OngoingReferendumData = {
    status: 'Ongoing'
    end: number
    hash: string
    threshold: Threshold
    delay: number
}

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumStorageData | undefined> {
    if (referendumInfoOf.v1013.is(block)) {
        const storageData = await referendumInfoOf.v1013.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposal, end, delay, threshold } = (storageData as v1013.ReferendumInfo_Ongoing).value
            return {
                status,
                hash: proposal.__kind === 'Inline' ? proposal.value : proposal.hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v1013.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    } else {
        throw new UnknownVersionError("Democracy.ReferendumInfoOf")
    }
}

export async function getReferendumInfoOf(ctx: ProcessorContext<Store>, index: number, block: any) {
    return await getStorageData(ctx, index, block)
}
