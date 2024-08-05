import { FindOneOptions, Store } from "@subsquid/typeorm-store";
import { toJSON } from "@subsquid/util-internal-json";
import { MissingProposalRecordWarn } from "../../common/errors";
import { ss58codec } from "../../common/tools";
import fetch from "node-fetch";
import { NOTIFICATION_URL } from "../../consts/consts";

import {
  MotionThreshold,
  Preimage,
  Proposal,
  ProposalStatus,
  ProposalType,
  ProposedCall,
  Tally,
  DecisionDeposit,
  SubmissionDeposit,
  Deciding,
  ReferendumThreshold,
  ReferendumThresholdType,
  StatusHistory,
  ProposalGroup,
} from "../../model";
import {
  CouncilMotionData,
  DemocracyProposalData,
  HashProposal,
  IndexProposal,
  PreimageData,
  ProposedCallData,
  ReferendumData,
  TechCommitteeMotionData,
  TreasuryData,
  DecisionDepositData,
  SubmissionDepositData,
  DecidingData,
  TallyData,
} from "../types/data";
import { randomUUID } from "crypto";
import config from "../../config";
import { ProcessorContext } from "../../processor";

type ProposalUpdateData = Partial<
  Omit<
    Proposal,
    "updatedAt" | "updatedAtBlock" | "endedAt" | "endedAtBlock" | "status" | "voting" | "statusHistory" | "id"
  >
>;

export async function updatePreimageStatus(
  ctx: ProcessorContext<Store>,
  header: any,
  hash: string,
  extrinsicIndex: string,
  options: {
    status: ProposalStatus;
    isEnded?: boolean;
    data?: ProposalUpdateData;
  }
) {
  const proposal = await ctx.store.get(Preimage, { where: { hash: hash } });

  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn("Preimage", `with hash ${hash} not found`));
    return;
  }

  Object.assign(proposal, options.data);
  proposal.updatedAt = new Date(header.timestamp);
  proposal.updatedAtBlock = header.height;
  proposal.status = options.status;

  await ctx.store.save(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.updatedAtBlock || undefined,
      timestamp: proposal.updatedAt,
      extrinsicIndex,
      status: proposal.status,
      preimage: proposal,
    })
  );

  await ctx.store.save(proposal);
}

export async function updatePreimageStatusV2(
  ctx: ProcessorContext<Store>,
  header: any,
  hash: string,
  extrinsicIndex: string,
  options: {
    status: ProposalStatus;
    isEnded?: boolean;
    data?: ProposalUpdateData;
  }
) {
  const proposal = await ctx.store.get(Preimage, { where: { hash: hash }, order: { createdAtBlock: "DESC" } });

  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn("PreimageV2", `with hash ${hash} not found`));
    return;
  }

  Object.assign(proposal, options.data);
  proposal.updatedAt = new Date(header.timestamp);
  proposal.updatedAtBlock = header.height;
  proposal.status = options.status;

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.updatedAtBlock || undefined,
      timestamp: proposal.updatedAt,
      extrinsicIndex,
      status: proposal.status,
      preimage: proposal,
    })
  );

  await ctx.store.save(proposal);
}

export async function updateProposalStatus(
  ctx: ProcessorContext<Store>,
  header: any,
  index: number,
  type: IndexProposal,
  extrinsicIndex: string,
  options: {
    status: ProposalStatus;
    isEnded?: boolean;
    data?: ProposalUpdateData;
  }
): Promise<void>;
export async function updateProposalStatus(
  ctx: ProcessorContext<Store>,
  header: any,
  hash: string,
  type: HashProposal,
  extrinsicIndex: string,
  options: {
    status: ProposalStatus;
    isEnded?: boolean;
    data?: ProposalUpdateData;
  }
): Promise<void>;
export async function updateProposalStatus(
  ctx: ProcessorContext<Store>,
  header: any,
  hashOrIndex: string | number,
  type: ProposalType,
  extrinsicIndex: string,
  options: {
    status: ProposalStatus;
    isEnded?: boolean;
    data?: ProposalUpdateData;
  }
): Promise<void> {
  const proposal = await ctx.store.get(Proposal, {
    where:
      typeof hashOrIndex === "string"
        ? {
            hash: hashOrIndex,
            type,
          }
        : {
            index: hashOrIndex,
            type,
          },
    order: {
      id: "DESC",
    },
  });

  if (!proposal) {
    ctx.log.warn(MissingProposalRecordWarn(type, hashOrIndex));
    return;
  }

  Object.assign(proposal, options.data);
  proposal.updatedAt = new Date(header.timestamp);
  proposal.updatedAtBlock = header.height;
  proposal.status = options.status;

  if (options.isEnded) {
    proposal.endedAtBlock = proposal.updatedAtBlock;
    proposal.endedAt = proposal.updatedAt;
  }

  await ctx.store.save(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.updatedAtBlock || undefined,
      timestamp: proposal.updatedAt,
      extrinsicIndex,
      status: proposal.status,
      proposal,
    })
  );
  await sendNotification(ctx, proposal, "proposalStatusChanged");
}

async function getOrCreateProposalGroup(
  ctx: ProcessorContext<Store>,
  index: number,
  type: ProposalType,
  parentId: number,
  parentType: ProposalType
): Promise<ProposalGroup> {
  const condition: FindOneOptions<ProposalGroup>["where"] = {};
  switch (type) {
    case ProposalType.CommunityTreasuryProposal:
      condition.communityTreasuryIndex = index as number;
      break;
    case ProposalType.TreasuryProposal:
      condition.treasuryIndex = index as number;
      break;
    case ProposalType.Referendum:
      condition.referendumIndex = index as number;
      break;
    case ProposalType.DemocracyProposal:
      condition.democracyProposalIndex = index as number;
      break;
    case ProposalType.CouncilMotion:
      condition.councilMotionIndex = index as number;
      break;
    case ProposalType.CommunityCouncilMotion:
      condition.communityCouncilMotionIndex = index as number;
      break;
    case ProposalType.TechCommitteeProposal:
      condition.techCommitteeProposalIndex = index as number;
      break;
    default:
      throw new Error(`Unknown proposal type ${type}`);
  }
  let link = await ctx.store.get(ProposalGroup, { where: condition });
  if (link) {
    switch (parentType) {
      case ProposalType.CommunityTreasuryProposal:
        link.communityTreasuryIndex = parentId as number;
        break;
      case ProposalType.TreasuryProposal:
        link.treasuryIndex = parentId as number;
        break;
      case ProposalType.Referendum:
        link.referendumIndex = parentId as number;
        break;
      case ProposalType.DemocracyProposal:
        link.democracyProposalIndex = parentId as number;
        break;
      case ProposalType.CouncilMotion:
        link.councilMotionIndex = parentId as number;
        break;
      case ProposalType.CommunityCouncilMotion:
        link.communityCouncilMotionIndex = parentId as number;
        break;
      case ProposalType.TechCommitteeProposal:
        link.techCommitteeProposalIndex = parentId as number;
        break;
      default:
        throw new Error(`Unknown proposal type ${type}`);
    }
    await ctx.store.save(link);
  }
  if (!link) {
    const id = await ctx.store.count(ProposalGroup);
    link = new ProposalGroup({
      id: id.toString(),
    });
    switch (type) {
      case ProposalType.CommunityTreasuryProposal:
        link.communityTreasuryIndex = index as number;
        break;
      case ProposalType.TreasuryProposal:
        link.treasuryIndex = index as number;
        break;
      case ProposalType.Referendum:
        link.referendumIndex = index as number;
        break;
      case ProposalType.DemocracyProposal:
        link.democracyProposalIndex = index as number;
        break;
      case ProposalType.CouncilMotion:
        link.councilMotionIndex = index as number;
        break;
      case ProposalType.CommunityCouncilMotion:
        link.communityCouncilMotionIndex = index as number;
        break;
      case ProposalType.TechCommitteeProposal:
        link.techCommitteeProposalIndex = index as number;
        break;
      default:
        throw new Error(`Unknown proposal type ${type}`);
    }
    switch (parentType) {
      case ProposalType.CommunityTreasuryProposal:
        link.communityTreasuryIndex = parentId as number;
        break;
      case ProposalType.TreasuryProposal:
        link.treasuryIndex = parentId as number;
        break;
      case ProposalType.Referendum:
        link.referendumIndex = parentId as number;
        break;
      case ProposalType.DemocracyProposal:
        link.democracyProposalIndex = parentId as number;
        break;
      case ProposalType.CouncilMotion:
        link.councilMotionIndex = parentId as number;
        break;
      case ProposalType.CommunityCouncilMotion:
        link.communityCouncilMotionIndex = parentId as number;
        break;
      case ProposalType.TechCommitteeProposal:
        link.techCommitteeProposalIndex = parentId as number;
        break;
      default:
        throw new Error(`Unknown proposal type ${type}`);
    }
    await ctx.store.insert(link);
  }
  return link;
}

async function getProposalId(store: Store, type: ProposalType) {
  const count = await store.count(Proposal, { where: { type } });

  return `${Buffer.from(type.toLowerCase()).toString("hex").slice(0, 8).padEnd(8, "0")}-${count
    .toString()
    .padStart(8, "0")}`;
}

async function getPreimageId(store: Store) {
  const count = await store.count(Preimage);

  return count.toString().padStart(8, "0");
}

// async function getPreimageIdV2(store: Store) {
//     const count = await store.count(PreimageV2)

//     return count.toString().padStart(8, '0')
// }

export async function createDemocracyProposal(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: DemocracyProposalData
): Promise<Proposal> {
  const { index, hash, proposer, deposit, status } = data;

  const type = ProposalType.DemocracyProposal;

  const id = await getProposalId(ctx.store, type);

  const preimage = await ctx.store.get(Preimage, {
    where: {
      hash: hash,
      status: ProposalStatus.Noted,
    },
    order: {
      createdAtBlock: "DESC",
    },
  });

  const proposal = new Proposal({
    id,
    index,
    type,
    hash,
    proposer,
    deposit,
    status,
    preimage,
    createdAtBlock: header.height,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.createdAtBlock,
      timestamp: proposal.createdAt,
      status: proposal.status,
      proposal,
      extrinsicIndex,
    })
  );

  await sendNotification(ctx, proposal, "newProposalCreated");

  return proposal;
}

export async function createReferendum(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: ReferendumData
): Promise<Proposal> {
  const { index, threshold, hash, status, end, delay } = data;

  const type = ProposalType.Referendum;

  let group: ProposalGroup | undefined;

  const id = await getProposalId(ctx.store, type);

  let preimage = null;
  let proposer = null;

  if (hash) {
    const associatedProposal =
      (await ctx.store.get(Proposal, {
        where: {
          hash: hash,
          status: ProposalStatus.Executed,
          type: ProposalType.CouncilMotion,
        },
        order: {
          createdAtBlock: "DESC",
        },
      })) ||
      (await ctx.store.get(Proposal, {
        where: {
          hash: hash,
          status: ProposalStatus.Tabled,
          updatedAtBlock: header.height,
          type: ProposalType.DemocracyProposal,
        },
        order: {
          createdAtBlock: "DESC",
        },
      })) ||
      (await ctx.store.get(Proposal, {
        where: {
          proposalArgumentHash: hash,
          status: ProposalStatus.Executed,
          type: ProposalType.CouncilMotion,
        },
        order: {
          createdAtBlock: "DESC",
        },
      }));
    if (
      associatedProposal &&
      associatedProposal.index != null &&
      associatedProposal.index != undefined &&
      associatedProposal.type
    ) {
      group = await getOrCreateProposalGroup(
        ctx,
        associatedProposal.index,
        associatedProposal.type as ProposalType,
        index,
        type
      );
      associatedProposal.group = group;
      await ctx.store.save(associatedProposal);
      if (!preimage && associatedProposal.preimage) {
        preimage = associatedProposal.preimage;
        proposer = associatedProposal.proposer;
      }
    }
  }

  if (!preimage) {
    preimage = await ctx.store.get(Preimage, {
      where: {
        hash: hash,
      },
      order: {
        createdAtBlock: "DESC",
      },
    });
  }

  if (!proposer && preimage && preimage.proposer) {
    proposer = preimage.proposer;
  }

  const proposal = new Proposal({
    id,
    index,
    type,
    hash,
    proposer,
    threshold: new ReferendumThreshold({
      type: threshold as ReferendumThresholdType,
    }),
    preimage,
    status,
    end: end,
    delay: delay,
    group: group,
    createdAtBlock: header.height,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.createdAtBlock,
      timestamp: proposal.createdAt,
      status: proposal.status,
      proposal,
      extrinsicIndex,
    })
  );

  await sendNotification(ctx, proposal, "newProposalCreated");

  return proposal;
}

export async function createCoucilMotion(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: CouncilMotionData,
  type:
    | ProposalType.CouncilMotion
    | ProposalType.TechCommitteeProposal
    | ProposalType.CommunityCouncilMotion = ProposalType.CouncilMotion
): Promise<Proposal> {
  const { index, status, threshold, hash, proposer, call } = data;

  let group: ProposalGroup | undefined;
  let preimage = null;
  let hexHash = null;

  if (call.args) {
    if (call.args["proposalHash"]) {
      hexHash = call.args["proposalHash"] as string;
      preimage = await ctx.store.get(Preimage, {
        where: {
          hash: hexHash,
          status: ProposalStatus.Noted,
        },
        order: {
          createdAtBlock: "DESC",
        },
      });
    }
    if (call.args["proposal"]) {
      const prop = call.args["proposal"] as any;
      if (prop.hash) {
        hexHash = prop.hash;
        preimage = await ctx.store.get(Preimage, {
          where: {
            hash: hexHash,
            status: ProposalStatus.Noted,
          },
          order: {
            createdAtBlock: "DESC",
          },
        });
      }
    }
  }

  const id = await getProposalId(ctx.store, type);

  if (!preimage) {
    preimage = await ctx.store.get(Preimage, {
      where: {
        hash: hash,
        status: ProposalStatus.Noted,
      },
      order: {
        createdAtBlock: "DESC",
      },
    });
  }

  if (call.args) {
    if (call.args["proposalId"] || call.args["proposal_index"] || call.args["proposal_id"]) {
      const proposalId =
        (call.args["proposalId"] as number) ||
        (call.args["proposal_index"] as number) ||
        (call.args["proposal_id"] as number);
      group = await getOrCreateProposalGroup(ctx, proposalId, ProposalType.TreasuryProposal, index, type);
      const associatedTreasuryProposal = await ctx.store.get(Proposal, {
        where: {
          index: proposalId,
          type: ProposalType.TreasuryProposal,
        },
        order: {
          createdAtBlock: "DESC",
        },
      });
      if (associatedTreasuryProposal) {
        associatedTreasuryProposal.group = group;
        await ctx.store.save(associatedTreasuryProposal);
      }
    } else if (call.args["proposalHash"] && type === ProposalType.TechCommitteeProposal) {
      const motionHash = call.args["proposalHash"] as string;
      const counciMotion =
        (await ctx.store.get(Proposal, {
          where: {
            hash: motionHash,
            type: ProposalType.CouncilMotion,
          },
          order: {
            createdAtBlock: "DESC",
          },
        })) ||
        (await ctx.store.get(Proposal, {
          where: {
            proposalArgumentHash: motionHash,
            type: ProposalType.CouncilMotion,
          },
          order: {
            createdAtBlock: "DESC",
          },
        }));
      if (counciMotion && counciMotion.index != null && counciMotion.index != undefined) {
        group = await getOrCreateProposalGroup(ctx, counciMotion.index, ProposalType.CouncilMotion, index, type);
        counciMotion.group = group;
        await ctx.store.save(counciMotion);
      }
    }
  }

  const proposal = new Proposal({
    id,
    index,
    type,
    hash,
    proposer,
    status,
    threshold: new MotionThreshold({
      value: threshold,
    }),
    proposalArguments: createProposedCall(call),
    proposalArgumentHash: hexHash,
    preimage,
    group: group,
    createdAtBlock: header.height,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.createdAtBlock,
      timestamp: proposal.createdAt,
      status: proposal.status,
      extrinsicIndex,
      proposal,
    })
  );

  await sendNotification(ctx, proposal, "newProposalCreated");

  return proposal;
}

export async function createTechCommitteeMotion(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: TechCommitteeMotionData
): Promise<Proposal> {
  return await createCoucilMotion(ctx, header, extrinsicIndex, data, ProposalType.TechCommitteeProposal);
}

export async function createTreasury(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: TreasuryData,
  type: ProposalType.TreasuryProposal | ProposalType.CommunityTreasuryProposal = ProposalType.TreasuryProposal
): Promise<Proposal> {
  const { status, index, proposer, deposit, reward, payee } = data;

  const id = await getProposalId(ctx.store, type);

  let group = null;
  let refProposer = null;

  const proposal = new Proposal({
    id,
    type,
    index,
    proposer: refProposer || proposer,
    deposit,
    reward,
    status,
    payee,
    createdAtBlock: header.height,
    group: group,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(proposal);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: proposal.createdAtBlock,
      timestamp: proposal.createdAt,
      status: proposal.status,
      extrinsicIndex,
      proposal,
    })
  );

  await sendNotification(ctx, proposal, "newProposalCreated");

  return proposal;
}

export async function createPreimage(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: PreimageData
): Promise<Preimage> {
  const { status, hash, proposer, call, section, method } = data;

  // const type = ProposalType.Preimage

  const id = await getPreimageId(ctx.store);

  // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

  const preimage = new Preimage({
    id,
    hash,
    proposer,
    status,
    proposedCall: call ? createProposedCall(call) : null,
    section: section,
    method: method,
    createdAtBlock: header.height,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(preimage);

  const proposal = await ctx.store.get(Proposal, { where: { hash }, order: { createdAt: "DESC" } });

  if (proposal && !proposal.preimage) {
    proposal.preimage = preimage;
    await ctx.store.save(proposal);
  }

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: preimage.createdAtBlock,
      timestamp: preimage.createdAt,
      status: preimage.status,
      extrinsicIndex,
      preimage,
    })
  );

  return preimage;
}

export async function createPreimageV2(
  ctx: ProcessorContext<Store>,
  header: any,
  extrinsicIndex: string,
  data: PreimageData
): Promise<Preimage> {
  const { status, hash, proposer, call, section, method, deposit, length } = data;

  // const type = ProposalType.Preimage

  const id = await getPreimageId(ctx.store);

  // const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

  const preimage = new Preimage({
    id,
    hash,
    proposer,
    status,
    proposedCall: call ? createProposedCall(call) : null,
    deposit,
    length,
    section: section,
    method: method,
    createdAtBlock: header.height,
    createdAt: new Date(header.timestamp),
    updatedAt: new Date(header.timestamp),
  });

  await ctx.store.insert(preimage);

  await ctx.store.insert(
    new StatusHistory({
      id: randomUUID(),
      block: preimage.createdAtBlock,
      timestamp: preimage.createdAt,
      status: preimage.status,
      extrinsicIndex,
      preimage,
    })
  );

  return preimage;
}

function createProposedCall(data: ProposedCallData): ProposedCall {
  return new ProposedCall(toJSON(data));
}

export function createTally(data: TallyData): Tally {
  return new Tally(toJSON(data));
}

export function createDeciding(data: DecidingData): Deciding {
  return new Deciding(toJSON(data));
}

export function createDecisionDeposit(data: DecisionDepositData): DecisionDeposit {
  return new DecisionDeposit(toJSON(data));
}

export function createSubmissionDeposit(data: SubmissionDepositData): SubmissionDeposit {
  return new SubmissionDeposit(toJSON(data));
}

export async function sendNotification(ctx: ProcessorContext<Store>, proposal: Proposal, trigger: String) {
  const { hash, type, index, proposer, curator, status, trackNumber } = proposal;
  let statusName = null;
  // if difference between proposal update time and current time > 10 mins return
  if (proposal.updatedAt && new Date().getTime() - proposal.updatedAt.getTime() > 600000) {
    ctx.log.info(`Proposal ${index || hash} updated more than 10 mins ago, skipping notification`);
    return;
  }

  if (
    [
      ProposalStatus.Started,
      ProposalStatus.Submitted,
      ProposalStatus.Added,
      ProposalStatus.Proposed,
      ProposalStatus.Opened,
    ].includes(status)
  ) {
    statusName = "submitted";
  } else if (
    [
      ProposalStatus.Executed,
      ProposalStatus.Cancelled,
      ProposalStatus.Killed,
      ProposalStatus.Rejected,
      ProposalStatus.Executed,
      ProposalStatus.ExecutionFailed,
      ProposalStatus.Closed,
      ProposalStatus.Approved,
      ProposalStatus.Disapproved,
      ProposalStatus.Awarded,
      ProposalStatus.Claimed,
      ProposalStatus.NotPassed,
      ProposalStatus.Passed,
      ProposalStatus.Tabled,
      ProposalStatus.Retracted,
      ProposalStatus.Slashed,
      ProposalStatus.TimedOut,
    ].includes(status)
  ) {
    statusName = "closed";
  } else if ([ProposalStatus.Deciding, ProposalStatus.ConfirmStarted, ProposalStatus.ConfirmAborted].includes(status)) {
    statusName = "voting";
  }

  const notification = {
    trigger: trigger,
    args: {
      network: config.chain.name,
      postType: type,
      postId: String(index),
      proposerAddress: proposer || curator,
      statusType: statusName,
      track: String(trackNumber),
      statusName: status,
    },
  };

  if (!process.env.NOTIFICATION_API_KEY) {
    ctx.log.error(`Notification Api Key not found`);
    return;
  }

  ctx.log.info(`Sending notification with data ${JSON.stringify(notification)}`);

  const response = await fetch(NOTIFICATION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NOTIFICATION_API_KEY || "",
      "x-source": "polkassembly",
    },
    body: JSON.stringify(notification),
  });

  ctx.log.info(`Notification response ${JSON.stringify(response)}`);

  if (response.status !== 200) {
    ctx.log.error(`Notification failed for proposal ${index || hash} with status ${response.status}`);
    return;
  }
}
