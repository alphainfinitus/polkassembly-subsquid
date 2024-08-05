import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as modules from "./mappings";
import assert from "assert";

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/shibuya-substrate")
  .setRpcEndpoint("wss://rpc.shibuya.astar.network")
  .setBlockRange({ from: 0 })
  .setFields({
    event: {},
    call: { origin: true, success: true, error: true },
    extrinsic: { hash: true, fee: true, tip: true },
    block: { timestamp: true },
  })
  .addCall({
    name: [
      "Democracy.vote",
      "Democracy.delegate",
      "Democracy.undelegate",
      "Democracy.remove_vote",
      "Democracy.remove_other_vote",
    ],
  })
  .addEvent({
    name: [
      "CommunityCouncil.Proposed",
      "CommunityCouncil.Voted",
      "CommunityCouncil.Approved",
      "CommunityCouncil.Disapproved",
      "CommunityCouncil.Executed",
      "CommunityCouncil.Closed",

      "CommunityTreasury.Proposed",
      "CommunityTreasury.Awarded",
      "CommunityTreasury.Rejected",
      "CommunityTreasury.SpendApproved",

      "Council.Proposed",
      "Council.Voted",
      "Council.Approved",
      "Council.Disapproved",
      "Council.Executed",
      "Council.Closed",

      "Democracy.Proposed",
      "Democracy.Tabled",
      "Democracy.Started",
      "Democracy.Passed",
      "Democracy.NotPassed",
      "Democracy.Cancelled",
      "Democracy.Seconded",
      "Democracy.ProposalCanceled",

      "Preimage.Noted",
      "Preimage.Requested",
      "Preimage.Cleared",

      "TechnicalCommittee.Proposed",
      "TechnicalCommittee.Voted",
      "TechnicalCommittee.Approved",
      "TechnicalCommittee.Disapproved",
      "TechnicalCommittee.Executed",
      "TechnicalCommittee.Closed",

      "Treasury.Proposed",
      "Treasury.Awarded",
      "Treasury.Rejected",
      "Treasury.SpendApproved",
    ],
    call: true,
    extrinsic: true,
  });

processor.run(new TypeormDatabase(), async (ctx: any) => {
  for (let block of ctx.blocks) {
    let multisigOrigins = new Map<string, any>();
    for (let item of block.events) {
      let multisigAddress: string;
      if (item.name == "Multisig.MultisigExecuted") {
        if (Array.isArray(item.event.args)) {
          assert(item.event.args.length >= 3);
          multisigAddress = item.event.args[2];
        } else if (typeof item.event.args === "object") {
          assert("multisig" in item.event.args);
          multisigAddress = item.event.args.multisig;
        } else {
          throw new Error("Unextpected case");
        }

        let extrinsicHash = item.event.extrinsic!.hash;
        multisigOrigins.set(extrinsicHash, {
          __kind: "system",
          value: {
            __kind: "Signed",
            value: multisigAddress,
          },
        });
      }
    }

    if (multisigOrigins.size > 0) {
      for (let item of block.calls) {
        if (item.kind === "call" && "extrinsic" in item && "origin" in item.call && item.origin == null) {
          item.origin = multisigOrigins.get(item.extrinsic.hash);
        }
      }
    }

    for (let item of block.calls) {
      if (item.name == "Democracy.vote") {
        await modules.democracy.extrinsics.handleVote(ctx, item, block.header);
      }
      if (item.name == "Democracy.remove_vote") {
        await modules.democracy.extrinsics.handleRemoveVote(ctx, item, block.header);
      }
      if (item.name == "Democracy.remove_other_vote") {
        await modules.democracy.extrinsics.handleRemoveOtherVote(ctx, item, block.header);
      }
      if (item.name == "Democracy.delegate") {
        await modules.democracy.extrinsics.handleDelegate(ctx, item, block.header);
      }
      if (item.name == "Democracy.undelegate") {
        await modules.democracy.extrinsics.handleUndelegate(ctx, item, block.header);
      }
    }

    for (let item of block.events) {
      if (item.name == "Democracy.Proposed") {
        await modules.democracy.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "Democracy.Tabled") {
        await modules.democracy.events.handleTabled(ctx, item, block.header);
      }
      if (item.name == "Democracy.ProposalCanceled") {
        await modules.democracy.events.handleProposalCanceled(ctx, item, block.header);
      }
      if (item.name == "Democracy.Started") {
        await modules.democracy.events.handleStarted(ctx, item, block.header);
      }
      if (item.name == "Democracy.Passed") {
        await modules.democracy.events.handlePassed(ctx, item, block.header);
      }
      if (item.name == "Democracy.NotPassed") {
        await modules.democracy.events.handleNotPassed(ctx, item, block.header);
      }
      if (item.name == "Democracy.Cancelled") {
        await modules.democracy.events.handleCancelled(ctx, item, block.header);
      }
      if (item.name == "Democracy.Seconded") {
        await modules.democracy.events.handleDemocracySeconds(ctx, item, block.header);
      }

      if (item.name == "CommunityCouncil.Proposed") {
        await modules.communityCouncil.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "CommunityCouncil.Voted") {
        await modules.communityCouncil.events.handleVoted(ctx, item, block.header);
      }
      if (item.name == "CommunityCouncil.Closed") {
        await modules.communityCouncil.events.handleClosed(ctx, item, block.header);
      }
      if (item.name == "CommunityCouncil.Disapproved") {
        await modules.communityCouncil.events.handleDisapproved(ctx, item, block.header);
      }
      if (item.name == "CommunityCouncil.Executed") {
        await modules.communityCouncil.events.handleExecuted(ctx, item, block.header);
      }
      if (item.name == "CommunityCouncil.Approved") {
        await modules.communityCouncil.events.handleApproved(ctx, item, block.header);
      }

      if (item.name == "CommunityTreasury.Proposed") {
        await modules.communityTreasury.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "CommunityTreasury.Awarded") {
        await modules.communityTreasury.events.handleAwarded(ctx, item, block.header);
      }
      if (item.name == "CommunityTreasury.Rejected") {
        await modules.communityTreasury.events.handleRejected(ctx, item, block.header);
      }
      if (item.name == "CommunityTreasury.SpendApproved") {
        await modules.communityTreasury.events.handleSpendApproved(ctx, item, block.header);
      }

      if (item.name == "Council.Proposed") {
        await modules.council.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "Council.Voted") {
        await modules.council.events.handleVoted(ctx, item, block.header);
      }
      if (item.name == "Council.Closed") {
        await modules.council.events.handleClosed(ctx, item, block.header);
      }
      if (item.name == "Council.Disapproved") {
        await modules.council.events.handleDisapproved(ctx, item, block.header);
      }
      if (item.name == "Council.Executed") {
        await modules.council.events.handleExecuted(ctx, item, block.header);
      }
      if (item.name == "Council.Approved") {
        await modules.council.events.handleApproved(ctx, item, block.header);
      }

      if (item.name == "TechnicalCommittee.Proposed") {
        await modules.techComittee.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "TechnicalCommittee.Approved") {
        await modules.techComittee.events.handleApproved(ctx, item, block.header);
      }
      if (item.name == "TechnicalCommittee.Disapproved") {
        await modules.techComittee.events.handleDisapproved(ctx, item, block.header);
      }
      if (item.name == "TechnicalCommittee.Closed") {
        await modules.techComittee.events.handleClosed(ctx, item, block.header);
      }
      if (item.name == "TechnicalCommittee.Voted") {
        await modules.techComittee.events.handleVoted(ctx, item, block.header);
      }
      if (item.name == "TechnicalCommittee.Executed") {
        await modules.techComittee.events.handleExecuted(ctx, item, block.header);
      }

      if (item.name == "Treasury.Proposed") {
        await modules.treasury.events.handleProposed(ctx, item, block.header);
      }
      if (item.name == "Treasury.Awarded") {
        await modules.treasury.events.handleAwarded(ctx, item, block.header);
      }
      if (item.name == "Treasury.Rejected") {
        await modules.treasury.events.handleRejected(ctx, item, block.header);
      }
      if (item.name == "Treasury.SpendApproved") {
        await modules.treasury.events.handleSpendApproved(ctx, item, block.header);
      }

      if (item.name == "Preimage.Noted") {
        await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header);
      }
      if (item.name == "Preimage.Cleared") {
        await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header);
      }
      if (item.name == "Preimage.Requested") {
        await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header);
      }
    }
  }
});

export type Fields = SubstrateBatchProcessorFields<typeof processor>;

export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
