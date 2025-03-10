import { ProposalStatus, ProposalType } from "../../../model";
import { ProcessorContext, Event } from "../../../processor";
import { updateProposalStatus } from "../../utils/proposals";
import { Store } from "@subsquid/typeorm-store";

// export async function handleRejected(ctx: ProcessorContext<Store>,
//     item: Event,
//     header: any) {
//     const { index } = getRejectedData(item)
//     const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

//     await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, extrinsicIndex, {
//         isEnded: true,
//         status: ProposalStatus.Rejected,
//     })
// }
