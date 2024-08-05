import { tabled } from "../../../types/democracy/events";
import { UnknownVersionError } from "../../../common/errors";
import { ProposalStatus, ProposalType } from "../../../model";
import { updateProposalStatus } from "../../utils/dataOrchestrator";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

interface TabledEventData {
  index: number;
  deposit: bigint;
  depositors?: string[];
}

function getEventData(itemEvent: Event): TabledEventData {
  if (tabled.v63.is(itemEvent)) {
    const { proposalIndex: index, deposit } = tabled.v63.decode(itemEvent);
    return {
      index,
      deposit,
    };
  } else if (tabled.v83.is(itemEvent)) {
    const { proposalIndex: index, deposit } = tabled.v83.decode(itemEvent);
    return {
      index,
      deposit,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

export async function handleTabled(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { index } = getEventData(item);
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, extrinsicIndex, {
    status: ProposalStatus.Tabled,
    isEnded: true,
  });
}
