import { randomUUID } from "crypto";
import { MissingProposalRecordWarn } from "../../../common/errors";
import { ss58codec } from "../../../common/tools";
import { Proposal, ProposalType, StandardVoteBalance, Vote, VoteType } from "../../../model";
import { getDemocracySecondedData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { VoteDecision } from "../../../model";
import { ProcessorContext, Event } from "../../../processor";

export async function handleDemocracySeconds(ctx: ProcessorContext<Store>, item: Event, header: any) {
  const { accountId, refIndex } = getDemocracySecondedData(item);

  const amount = undefined;

  const proposal = await ctx.store.get(Proposal, { where: { index: refIndex, type: ProposalType.DemocracyProposal } });
  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn(ProposalType.DemocracyProposal, refIndex));
    return;
  }

  //const count = await getVotesCount(ctx, proposal.id)
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  await ctx.store.insert(
    new Vote({
      id: randomUUID(),
      voter: ss58codec.encode(accountId),
      blockNumber: header.height,
      decision: VoteDecision.yes,
      proposal,
      balance: new StandardVoteBalance({
        value: amount ? BigInt(amount) : BigInt(0),
      }),
      timestamp: new Date(header.timestamp),
      type: VoteType.DemocracyProposal,
      extrinsicIndex,
    })
  );
}
