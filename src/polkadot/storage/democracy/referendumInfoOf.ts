import { UnknownVersionError } from '@shared/errors'
import { ProcessorContext } from '@src/processor'
import { referendumInfoOf } from '@polkadot/types/democracy/storage'
import * as v0 from '@polkadot/types/v0'
import * as v9110 from '@polkadot/types/v9110'
import * as v9340 from '@polkadot/types/v9340'
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
    if (referendumInfoOf.v0.is(block)) {
        const storageData = await referendumInfoOf.v0.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v0.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v0.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (referendumInfoOf.v9110.is(block)) {
        const storageData = await referendumInfoOf.v9110.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v9110.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v9110.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    }
    else if (referendumInfoOf.v9340.is(block)) {
        const storageData = await referendumInfoOf.v9340.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposal, end, delay, threshold } = (storageData as v9340.ReferendumInfo_Ongoing).value
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
            const { end, approved } = storageData as v9340.ReferendumInfo_Finished
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
