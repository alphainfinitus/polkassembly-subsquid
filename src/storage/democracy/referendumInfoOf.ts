import { UnknownVersionError } from "../../common/errors";
import { ProcessorContext } from "../../processor";
import { v63, v83 } from "../../types";
import { referendumInfoOf } from "../../types/democracy/storage";
import { Store } from "@subsquid/typeorm-store";

type Threshold = "SuperMajorityApprove" | "SuperMajorityAgainst" | "SimpleMajority";

type FinishedReferendumData = {
  status: "Finished";
  approved: boolean;
  end: number;
};

type OngoingReferendumData = {
  status: "Ongoing";
  end: number;
  hash: string;
  threshold: Threshold;
  delay: number;
};

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData;

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(
  ctx: ProcessorContext<Store>,
  index: number,
  block: any
): Promise<ReferendumStorageData | undefined> {
  if (referendumInfoOf.v63.is(block)) {
    const storageData = await referendumInfoOf.v63.get(block, index);
    if (!storageData) return undefined;

    const { __kind: status } = storageData;
    if (status === "Ongoing") {
      const { end, delay, threshold, proposalHash } = (storageData as v63.ReferendumInfo_Ongoing).value;
      return {
        status,
        hash: proposalHash,
        end,
        delay,
        threshold: threshold.__kind,
      };
    } else {
      const { end, approved } = storageData;
      return {
        status,
        end,
        approved,
      };
    }
  }
  if (referendumInfoOf.v83.is(block)) {
    const storageData = await referendumInfoOf.v83.get(block, index);
    if (!storageData) return undefined;

    const { __kind: status } = storageData;
    if (status === "Ongoing") {
      let hash;
      const { proposal, end, delay, threshold } = (storageData as v83.ReferendumInfo_Ongoing).value;
      if (proposal.__kind == "Inline") {
        hash = proposal.value;
      } else {
        hash = proposal.hash;
      }
      return {
        status,
        hash,
        end,
        delay,
        threshold: threshold.__kind,
      };
    } else {
      const { end, approved } = storageData;
      return {
        status,
        end,
        approved,
      };
    }
  } else {
    throw new UnknownVersionError("Democracy.ReferendumInfoOf");
  }
}

export async function getReferendumInfoOf(ctx: ProcessorContext<Store>, index: number, block: any) {
  return await getStorageData(ctx, index, block);
}
