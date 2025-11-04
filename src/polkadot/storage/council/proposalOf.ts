import { ProcessorContext } from '@src/processor'
import { Call } from '@polkadot/types/v9370'
import { Store } from '@subsquid/typeorm-store'
import { proposalOf } from '@polkadot/types/council/storage'
type CouncilProposalStorageData = Call

async function getInstance1CollectiveStorageData(
    ctx: ProcessorContext<Store>,
    hash: string,
    block: any
): Promise<CouncilProposalStorageData | undefined> {
    return block._runtime.getStorage(block.hash, 'Instance1Collective.ProposalOf', hash)
}

async function getCoucilStorageData(
    ctx: ProcessorContext<Store>,
    hash: string,
    block: any
): Promise<CouncilProposalStorageData | undefined> {
    return block._runtime.getStorage(block.hash, 'Council.ProposalOf', hash)
}

export async function getProposalOf
    (ctx: ProcessorContext<Store>, hash: string, block: any
    ): Promise<CouncilProposalStorageData | undefined> {
    try {
        return (await getCoucilStorageData(ctx, hash, block))
    } catch (e) {
        return await getInstance1CollectiveStorageData(ctx, hash, block)
    }
}