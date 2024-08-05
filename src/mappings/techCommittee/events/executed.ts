import { ProposalStatus, ProposalType } from "../../../model";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { getExecutedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

export async function handleExecuted(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const hash = getExecutedData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, hash, ProposalType.TechCommitteeProposal, extrinsicIndex, {
    isEnded: true,
    status: ProposalStatus.Executed,
  });
}
