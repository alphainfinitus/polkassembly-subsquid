import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyPublicPropsStorage } from '../../types/storage'

interface DemocracyProposalStorageData {
    index: number
    hash: Uint8Array
    proposer: Uint8Array
}

async function getStorageData(ctx: BlockContext): Promise<DemocracyProposalStorageData[] | undefined> {
    const storage = new DemocracyPublicPropsStorage(ctx)
    if (storage.isV110) {
        const storageData = await storage.asV110.get()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, , proposer] = proposal
            return {
                index,
                hash: new Uint8Array(32).fill(0),
                proposer,
            }
        })
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BlockContext) {
    return await getStorageData(ctx)
}
