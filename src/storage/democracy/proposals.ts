import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyPublicPropsStorage } from '../../types/storage'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface DemocracyProposalStorageData {
    index: number
    hash: Uint8Array
    proposer: Uint8Array
}

async function getStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<DemocracyProposalStorageData[] | undefined> {
    const storage = new DemocracyPublicPropsStorage(ctx, block)
    if(storage.isV1){
        const storageData = await storage.asV1.get()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            if(hash.__kind === 'Inline'){
                return {
                    index,
                    hash: hash.value,
                    proposer,
                }
            }else{
                return {
                    index,
                    hash: hash.hash,
                    proposer,
                }
            }
        })

    }else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BatchContext<Store, unknown>, block: SubstrateBlock) {
    return await getStorageData(ctx, block)
}
