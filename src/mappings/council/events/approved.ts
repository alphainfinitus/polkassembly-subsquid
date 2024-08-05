import { ProposalStatus, ProposalType } from "../../../model";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { getApprovedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

export async function handleApproved(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const hash = getApprovedData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, hash, ProposalType.CouncilMotion, extrinsicIndex, {
    isEnded: true,
    status: ProposalStatus.Approved,
  });
}
