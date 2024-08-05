import { UnknownVersionError } from "../../../common/errors";
import { awarded, proposed, rejected, spendApproved } from "../../../types/treasury/events";
import { Event } from "../../../processor";
interface ProposedData {
  index: number;
}

export function getProposedData(itemEvent: Event): ProposedData {
  if (proposed.v63.is(itemEvent)) {
    const { proposalIndex: index } = proposed.v63.decode(itemEvent);
    return {
      index,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

interface RejectedData {
  index: number;
}

export function getRejectedData(itemEvent: Event): RejectedData {
  if (rejected.v63.is(itemEvent)) {
    const { proposalIndex: index } = rejected.v63.decode(itemEvent);
    return {
      index,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

interface AwarderData {
  index: number;
}

export function getAwarderData(itemEvent: Event): AwarderData {
  if (awarded.v63.is(itemEvent)) {
    const { proposalIndex: index } = awarded.v63.decode(itemEvent);
    return {
      index,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

interface SpendApprovedData {
  proposalIndex: number;
  amount: bigint;
  beneficiary: string;
}

export function getSpendApprovedData(itemEvent: Event): SpendApprovedData {
  if (spendApproved.v63.is(itemEvent)) {
    const { proposalIndex, amount, beneficiary } = spendApproved.v63.decode(itemEvent);
    return {
      proposalIndex,
      amount,
      beneficiary,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}
