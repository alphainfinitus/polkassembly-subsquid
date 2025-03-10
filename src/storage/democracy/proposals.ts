import { UnknownVersionError } from "../../common/errors";
import { ProcessorContext } from "../../processor";
import { publicProps } from "../../types/democracy/storage";
import { Store } from "@subsquid/typeorm-store";

interface DemocracyProposalStorageData {
  index: number;
  hash: string;
  proposer: string;
}

async function getStorageData(
  ctx: ProcessorContext<Store>,
  block: any
): Promise<DemocracyProposalStorageData[] | undefined> {
  if (publicProps.v1013.is(block)) {
    const storageData = await publicProps.v1013.get(block);
    if (!storageData) return undefined;

    return storageData.map((proposal): DemocracyProposalStorageData => {
      const [index, hash, proposer] = proposal;
      if (hash.__kind === "Inline") {
        return {
          index,
          hash: hash.value,
          proposer,
        };
      } else {
        return {
          index,
          hash: hash.hash,
          proposer,
        };
      }
    });
  } else {
    throw new UnknownVersionError("Democracy.publicProps");
  }
}

export async function getProposals(ctx: ProcessorContext<Store>, block: any) {
  return await getStorageData(ctx, block);
}
