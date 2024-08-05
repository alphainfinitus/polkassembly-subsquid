import { proposalCanceled } from "../../../types/democracy/events";
import { UnknownVersionError } from "../../../common/errors";
import { ProposalStatus, ProposalType } from "../../../model";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

interface ProposalCanceledEventData {
  index: number;
}

function getEventData(itemEvent: Event): ProposalCanceledEventData {
  if (proposalCanceled.v63.is(itemEvent)) {
    const { propIndex: index } = proposalCanceled.v63.decode(itemEvent);
    return {
      index,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

export async function handleProposalCanceled(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { index } = getEventData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, extrinsicIndex, {
    status: ProposalStatus.Cancelled,
    isEnded: true,
  });
}
