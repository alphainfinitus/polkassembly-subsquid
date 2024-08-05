import { ProposalStatus, ProposalType } from "../../../model";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { getClosedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

export async function handleClosed(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const hash = getClosedData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, hash, ProposalType.CommunityCouncilMotion, extrinsicIndex, {
    isEnded: true,
    status: ProposalStatus.Closed,
  });
}
