import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '@src/shared/errors'
import { proposals } from '@kusama/types/treasury/storage'
import { ProcessorContext } from '@src/processor'

interface TreasuryProposalStorageData {
    proposer: string
    value: bigint
    beneficiary: string
    bond: bigint
}

async function getStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<TreasuryProposalStorageData | undefined> {
    if (proposals.v1020.is(block)) {
        return await proposals.v1020.get(block, index)
    } else {
        throw new UnknownVersionError("Treasury.Proposals")
    }
}

export async function getProposals(ctx: ProcessorContext<Store>, index: number, block: any) {
    return await getStorageData(ctx, index, block)
}
