import { UnknownVersionError } from '@src/shared/errors'
import { ProcessorContext } from '@src/processor'
import { publicProps } from '@kusama/types/democracy/storage'
import { Store } from '@subsquid/typeorm-store'

interface DemocracyProposalStorageData {
    index: number
    hash: string
    proposer: string
}

async function getStorageData(ctx: ProcessorContext<Store>, block: any): Promise<DemocracyProposalStorageData[] | undefined> {
    if (publicProps.v1020.is(block)) {
        const storageData = await publicProps.v1020.get(block)
        if (!storageData) return undefined

        return storageData.map((proposal: any): DemocracyProposalStorageData => {
            const [index, , proposer] = proposal
            return {
                index,
                hash: new Uint8Array(32).fill(0).toString(),
                proposer,
            }
        })
    } else if (publicProps.v1022.is(block)) {
        const storageData = await publicProps.v1022.get(block)
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            return {
                index,
                hash: hash,
                proposer,
            }
        })
    } else if (publicProps.v9320.is(block)) {
        const storageData = await publicProps.v9320.get(block)
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            if (hash.__kind === 'Inline') {
                return {
                    index,
                    hash: hash.value,
                    proposer,
                }
            } else {
                return {
                    index,
                    hash: hash.hash,
                    proposer,
                }
            }
        })

    } else {
        throw new UnknownVersionError("Democracy.publicProps")
    }
}

export async function getProposals(ctx: ProcessorContext<Store>, block: any) {
    return await getStorageData(ctx, block)
}
