/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from "@subsquid/substrate-processor";
import { StorageNotExistsWarn } from "../../../common/errors";
import { ProposalStatus, ProposalType } from "../../../model";
import { ss58codec } from "../../../common/tools";
import { storage } from "../../../storage";
import { createCoucilMotion } from "../../utils/dataOrchestrator";
import { getProposedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { ProcessorContext, Event } from "../../../processor";

export async function handleProposed(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { index, proposer, hash, threshold } = getProposedData(item);

  const storageData = await storage.council.getProposalOf(ctx, hash, header);
  if (!storageData) {
    ctx.log.warn(StorageNotExistsWarn(ProposalType.CouncilMotion, index));
    return;
  }

  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  const section = storageData.__kind as string;
  const method = storageData.value.__kind as string;
  const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join("\n");

  const { __kind, ...argsValue } = storageData.value;

  await createCoucilMotion(ctx, header, extrinsicIndex, {
    index,
    hash: hash,
    proposer: ss58codec.encode(proposer),
    status: ProposalStatus.Proposed,
    threshold,
    call: {
      section,
      method,
      description: desc,
      args: argsValue as Record<string, unknown>,
    },
  });
}
