import { MissingProposalRecordWarn, TooManyOpenVotes } from "../../../common/errors";
import {
  ConvictionVote,
  Proposal,
  ProposalType,
  SplitVoteBalance,
  StandardVoteBalance,
  VoteBalance,
  VoteDecision,
  VoteType,
  FlattenedConvictionVotes,
} from "../../../model";
import { getOriginAccountId } from "../../../common/tools";
import { getVoteData } from "./getters";
import { Store } from "@subsquid/typeorm-store";
import { getDelegations, removeDelegatedVotesReferendum, addDelegatedVotesReferendum } from "./utils";
import { IsNull } from "typeorm";
import { randomUUID } from "crypto";
import { Call, ProcessorContext } from "../../../processor";

export async function handleVote(ctx: ProcessorContext<Store>, item: Call, header: any) {
  if (!(item as any).success) return;

  const { index, vote } = getVoteData(item);

  const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } });
  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index));
    return;
  }

  const from = getOriginAccountId(item.origin);

  if (!from) {
    ctx.log.warn("No from address found for democracy.vote call");
    return;
  }
  const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`;

  const votes = await ctx.store.find(ConvictionVote, {
    where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.Referendum },
    relations: {
      delegatedVotes: true,
    },
  });

  if (votes) {
    if (votes.length > 1) {
      ctx.log.warn(TooManyOpenVotes(header.height, index, from));
    }

    if (votes.length > 0) {
      const vote = votes[0];
      vote.removedAtBlock = header.height;
      vote.removedAt = new Date(header.timestamp);
      const flattenedVote = await ctx.store.get(FlattenedConvictionVotes, {
        where: { voter: from, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.Referendum },
      });
      if (flattenedVote) {
        flattenedVote.removedAtBlock = header.height;
        flattenedVote.removedAt = new Date(header.timestamp);
        await ctx.store.save(flattenedVote);
      }
      await ctx.store.save(vote);
      const delegatedVotes = vote.delegatedVotes;
      if (delegatedVotes) {
        await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, delegatedVotes);
      }
    }
  }

  const nestedDelegations = await getDelegations(ctx, from);

  let decision: VoteDecision | undefined = undefined;
  switch (vote.type) {
    case "Standard":
      decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes;
      break;
    case "Split":
      decision = VoteDecision.abstain;
      break;
  }

  let lockPeriod: number | undefined;
  let balance: VoteBalance | undefined;
  let votingPower: bigint | undefined = BigInt(0);
  if (vote.type === "Split") {
    balance = new SplitVoteBalance({
      aye: vote.aye,
      nay: vote.nay,
    });
  } else if (vote.type === "Standard") {
    balance = new StandardVoteBalance({
      value: vote.balance,
    });
    lockPeriod = vote.value < 128 ? vote.value : vote.value - 128;
    if (lockPeriod === 0 && vote.balance) {
      votingPower = vote.balance / BigInt(10);
    } else {
      votingPower = lockPeriod && vote.balance ? vote.balance * BigInt(lockPeriod) : BigInt(0);
    }
  }
  let flattenedVotes = [];
  let convictionDelegatedVotes = [];

  const convictionVote = new ConvictionVote({
    id: randomUUID(),
    voter: item.origin ? getOriginAccountId(item.origin) : null,
    createdAtBlock: header.height,
    proposalIndex: index,
    proposalId: proposal.id,
    decision,
    lockPeriod,
    extrinsicIndex,
    proposal,
    balance,
    createdAt: new Date(header.timestamp),
    selfVotingPower: votingPower,
    type: VoteType.Referendum,
  });

  const flattened = new FlattenedConvictionVotes({
    id: randomUUID(),
    voter: item.origin ? getOriginAccountId(item.origin) : null,
    parentVote: convictionVote,
    isDelegated: false,
    delegatedTo: null,
    proposalIndex: index,
    proposal: proposal,
    createdAtBlock: header.height,
    removedAtBlock: null,
    createdAt: new Date(header.timestamp),
    removedAt: null,
    decision: decision,
    balance: balance,
    lockPeriod: lockPeriod,
    type: VoteType.Referendum,
  });

  if ([VoteDecision.yes, VoteDecision.no].includes(decision)) {
    const { delegatedVotesNested, delegatedVotePower, flattenedVotesNested } = await addDelegatedVotesReferendum(
      ctx,
      header.height,
      header.timestamp,
      nestedDelegations,
      convictionVote
    );
    convictionVote.delegatedVotingPower = convictionVote.delegatedVotingPower
      ? convictionVote.delegatedVotingPower + delegatedVotePower
      : delegatedVotePower;
    convictionVote.totalVotingPower = votingPower + convictionVote.delegatedVotingPower;
    convictionDelegatedVotes.push(...delegatedVotesNested);
    flattenedVotes.push(...flattenedVotesNested);
  }

  await ctx.store.insert(convictionVote);
  await ctx.store.insert(convictionDelegatedVotes);
  await ctx.store.insert([flattened, ...flattenedVotes]);
}
