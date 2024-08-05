import { ProposalStatus, ProposalType } from "../../../model";
import { ProcessorContext, Event } from "../../../processor";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { getCancelledData } from "./getters";
import { Store } from "@subsquid/typeorm-store";

export async function handleCancelled(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const index = getCancelledData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, index, ProposalType.Referendum, extrinsicIndex, {
    isEnded: true,
    status: ProposalStatus.Cancelled,
  });
}
