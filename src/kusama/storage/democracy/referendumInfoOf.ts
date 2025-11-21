import { UnknownVersionError } from '@src/shared/errors'
import { ProcessorContext } from '@src/processor'
import { referendumInfoOf } from '@kusama/types/democracy/storage'
import * as v1020 from '@kusama/types/v1020'
import * as v9111 from '@kusama/types/v9111'
import * as v9320 from '@kusama/types/v9320'
import { Store } from '@subsquid/typeorm-store'

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
    if (referendumInfoOf.v1020.is(block)) {
        const storageData = await referendumInfoOf.v1020.get(block, index)
        if (!storageData) return undefined

        const { proposalHash: hash, end, delay, threshold } = storageData
        return {
            status: 'Ongoing',
            hash,
            end,
            delay,
            threshold: threshold.__kind,
        }
    } else if (referendumInfoOf.v1055.is(block)) {
        const storageData = await referendumInfoOf.v1055.get(block, index)
        if (!storageData) return undefined
        if (storageData.__kind == "Ongoing") {
            const { proposalHash: hash, end, delay, threshold } = storageData.value
            return {
                status: storageData.__kind,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        }
        else {
            const { end, approved } = storageData.value
            return {
                status: storageData.__kind,
                end,
                approved
            }
        }
    } else if (referendumInfoOf.v9111.is(block)) {
        const storageData = await referendumInfoOf.v9111.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v9111.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v9111.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    }
    else if (referendumInfoOf.v9320.is(block)) {
        const storageData = await referendumInfoOf.v9320.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposal, end, delay, threshold } = (storageData as v9320.ReferendumInfo_Ongoing).value
            if (proposal.__kind == "Inline") {
                hash = proposal.value
            }
            else {
                hash = proposal.hash
            }
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v9320.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }

    }
    else {
        throw new UnknownVersionError("Democracy.ReferendumInfoOf")
    }
}

export async function getReferendumInfoOf(ctx: ProcessorContext<Store>, index: number, block: any) {
    return await getStorageData(ctx, index, block)
}
