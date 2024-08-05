import { UnknownVersionError } from "../../../common/errors";
import { cancelled, notPassed, passed, seconded } from "../../../types/democracy/events";
import { Event } from "../../../processor";

export function getCancelledData(itemEvent: Event): number {
  if (cancelled.v63.decode(itemEvent)) {
    return cancelled.v63.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

export function getNotPassedData(itemEvent: Event): number {
  if (notPassed.v63.is(itemEvent)) {
    return notPassed.v63.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

export function getPassedData(itemEvent: Event): number {
  if (passed.v63.is(itemEvent)) {
    return passed.v63.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

interface DemocracySecondedData {
  accountId: string;
  refIndex: number;
}

export function getDemocracySecondedData(itemEvent: Event): DemocracySecondedData {
  if (seconded.v63.is(itemEvent)) {
    const { seconder, propIndex } = seconded.v63.decode(itemEvent);
    return {
      accountId: seconder,
      refIndex: propIndex,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}
