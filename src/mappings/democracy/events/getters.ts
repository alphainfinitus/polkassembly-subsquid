import { UnknownVersionError } from "../../../common/errors";
import {
  cancelled,
  notPassed,
  passed,
  seconded,
} from "../../../types/democracy/events";
import { Event } from "../../../processor";
import { ss58codec } from "../../../common/tools";
import { decodeHex } from "@subsquid/substrate-processor";

export function getCancelledData(itemEvent: Event): number {
  if (cancelled.v1013.decode(itemEvent)) {
    return cancelled.v1013.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

// export function getExecutedData(itemEvent: Event): number {
//     if (executed.v0.is(itemEvent)) {
//         return executed.v0.decode(itemEvent)[0]
//     } else if (executed.v9090.is(itemEvent)) {
//         return executed.v9090.decode(itemEvent)[0]
//     } else if (executed.v9110.is(itemEvent)) {
//         return executed.v9110.decode(itemEvent)[0]
//     } else if (executed.v5000.is(itemEvent)) {
//         return executed.v5000.decode(itemEvent).refIndex
//     } else if (executed.v9170.is(itemEvent)) {
//         return executed.v9170.decode(itemEvent).refIndex
//     } else if (executed.v9190.is(itemEvent)) {
//         return executed.v9190.decode(itemEvent).refIndex
//     } else {
//         throw new UnknownVersionError(itemEvent.name)
//     }
// }

export function getNotPassedData(itemEvent: Event): number {
  if (notPassed.v1013.is(itemEvent)) {
    return notPassed.v1013.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

export function getPassedData(itemEvent: Event): number {
  if (passed.v1013.is(itemEvent)) {
    return passed.v1013.decode(itemEvent).refIndex;
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}

interface DemocracySecondedData {
  accountId: string;
  refIndex: number;
}

export function getDemocracySecondedData(
  itemEvent: Event
): DemocracySecondedData {
  if (seconded.v1013.is(itemEvent)) {
    const { seconder, propIndex } = seconded.v1013.decode(itemEvent);
    return {
      accountId: seconder,
      refIndex: propIndex,
    };
  } else {
    throw new UnknownVersionError(itemEvent.name);
  }
}
