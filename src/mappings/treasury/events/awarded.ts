import { ProposalStatus, ProposalType } from "../../../model";
import { ProcessorContext, Event } from "../../../processor";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { getAwarderData } from "./getters";
import { Store } from "@subsquid/typeorm-store";

export async function handleAwarded(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { index } = getAwarderData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, extrinsicIndex, {
    isEnded: true,
    status: ProposalStatus.Awarded,
  });
}
