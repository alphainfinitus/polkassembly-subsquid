import { ProcessorContext } from "../../processor";
import { Store } from "@subsquid/typeorm-store";
import { Call } from "../../types/v133";
type CommunityCouncilProposalStorageData = Call;

async function getInstance1CollectiveStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CommunityCouncilProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "Instance1Collective.ProposalOf", hash);
}

async function getCommunityCoucilStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CommunityCouncilProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "CommunityCouncil.ProposalOf", hash);
}

export async function getProposalOf(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<CommunityCouncilProposalStorageData | undefined> {
  try {
    return await getCommunityCoucilStorageData(ctx, hash, block);
  } catch (e) {
    return await getInstance1CollectiveStorageData(ctx, hash, block);
  }
}
