import { toHex } from "@subsquid/substrate-processor";
import { MissingProposalRecordWarn } from "../../../common/errors";
import { ss58codec } from "../../../common/tools";
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from "../../../model";
import { getVotedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { randomUUID } from "crypto";
import { ProcessorContext, Event } from "../../../processor";

export async function handleVoted(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { voter, hash, decision } = getVotedData(item);

  const proposal = await ctx.store.get(Proposal, {
    where: { hash: hash, type: ProposalType.CommunityCouncilMotion },
    order: { createdAtBlock: "DESC" },
  });

  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn(ProposalType.CommunityCouncilMotion, hash));
    return;
  }

  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await ctx.store.insert(
    new Vote({
      id: randomUUID(),
      voter: ss58codec.encode(voter),
      blockNumber: header.height,
      decision: decision ? VoteDecision.yes : VoteDecision.no,
      proposal,
      timestamp: new Date(header.timestamp),
      type: VoteType.Motion,
      extrinsicIndex,
    })
  );
}
