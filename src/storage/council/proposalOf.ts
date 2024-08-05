import { ProcessorContext } from "../../processor";
import { Call } from "../../types/v133";
import { Store } from "@subsquid/typeorm-store";
import { proposalOf } from "../../types/council/storage";
type CouncilProposalStorageData = Call;

async function getInstance1CollectiveStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CouncilProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "Instance1Collective.ProposalOf", hash);
}

async function getCoucilStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CouncilProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "Council.ProposalOf", hash);
}

export async function getProposalOf(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CouncilProposalStorageData | undefined> {
  try {
    return await getCoucilStorageData(ctx, hash, block);
  } catch (e) {
    return await getInstance1CollectiveStorageData(ctx, hash, block);
  }
}
