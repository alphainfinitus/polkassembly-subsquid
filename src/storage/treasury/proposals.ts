import { Store } from "@subsquid/typeorm-store";
import { UnknownVersionError } from "../../common/errors";
import { proposals } from "../../types/treasury/storage";
import { ProcessorContext } from "../../processor";

interface TreasuryProposalStorageData {
  proposer: string;
  value: bigint;
  beneficiary: string;
  bond: bigint;
}

async function getStorageData(
  ctx: ProcessorContext<Store>,
  index: number,
  block: any
): Promise<TreasuryProposalStorageData | undefined> {
  if (proposals.v63.is(block)) {
    return await proposals.v63.get(block, index);
  } else {
    throw new UnknownVersionError("Treasury.Proposals");
  }
}

export async function getProposals(ctx: ProcessorContext<Store>, index: number, block: any) {
  return await getStorageData(ctx, index, block);
}
