import { UnknownVersionError } from "../../../common/errors";
import { removeApproval } from "../../../types/treasury/calls";
import { Event } from "../../../processor";

interface RemoveApprovalData {
  index: number;
}

export function getRemoveApprovalData(itemCall: any): RemoveApprovalData {
  if (removeApproval.v1013.is(itemCall)) {
    const { proposalId } = removeApproval.v1013.decode(itemCall);
    return {
      index: proposalId,
    };
  } else {
    throw new UnknownVersionError(itemCall.name);
  }
}