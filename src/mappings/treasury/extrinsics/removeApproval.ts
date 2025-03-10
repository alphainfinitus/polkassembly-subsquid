import { Proposal, ProposalStatus, ProposalType } from "../../../model";
import { Store } from "@subsquid/typeorm-store";
import { getOriginAccountId } from "../../../common/tools";
import { getRemoveApprovalData } from "./getters";
import { MissingProposalRecordWarn } from "../../../common/errors";
import { Call, ProcessorContext } from "../../../processor";
import { updateProposalStatus } from "../../utils/proposals";

export async function handleRemoveApproval(
  ctx: ProcessorContext<Store>,
  item: Call,
  header: any
): Promise<void> {
  if (!(item as any).success) return;
  const { index } = getRemoveApprovalData(item);
  const proposal = await ctx.store.get(Proposal, {
    where: { index, type: ProposalType.TreasuryProposal },
  });
  if (!proposal || proposal.index == undefined || proposal.index == null) {
    ctx.log.warn(
      MissingProposalRecordWarn(ProposalType.TreasuryProposal, index)
    );
    return;
  }
  if (proposal.endedAtBlock && proposal.endedAtBlock < header.height) {
    return;
  }
  const wallet = getOriginAccountId(item.origin);
  if (!wallet) {
    return;
  }
  await updateProposalStatus(
    ctx,
    header,
    proposal.index,
    ProposalType.TreasuryProposal,
    `${header.height}-${item.extrinsicIndex}`,
    {
      status: ProposalStatus.Rejected,
      isEnded: true,
    }
  );
}