import { ProcessorContext } from "../../processor";

import { Store } from "@subsquid/typeorm-store";
import { Call } from "../../types/v63";

type TechnicalCommitteeProposalStorageData = Call;

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "Instance2Collective.ProposalOf", hash);
}

async function getCoucilStorageData(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
  return block._runtime.getStorage(block.hash, "TechnicalCommittee.ProposalOf", hash);

  // if (storage.isV9111) {
  //     return (await storage.getAsV9111(hash)) as Call
  // } else if (storage.isV9122) {
  //     return (await storage.getAsV9122(hash)) as Call
  // } else if (storage.isV9130) {
  //     return (await storage.getAsV9130(hash)) as Call
  // } else if (storage.isV9160) {
  //     return (await storage.getAsV9160(hash)) as Call
  // } else if (storage.isV9170) {
  //     return (await storage.getAsV9170(hash)) as Call
  // } else if (storage.isV9180) {
  //     return (await storage.getAsV9180(hash)) as Call
  // } else if (storage.isV9190) {
  //     return (await storage.getAsV9190(hash)) as Call
  // } else {
  //     throw new UnknownVersionError(storage.constructor.name)
  // }
}

export async function getProposalOf(
  ctx: ProcessorContext<Store>,
  hash: string,
  block: any
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
  try {
    return await getCoucilStorageData(ctx, hash, block);
  } catch (e) {
    return await getInstanceStorageData(ctx, hash, block);
  }
}
