// Curve threshold calculations for Fellowship referenda
// Based on Polkadot-JS and Polkadot-API implementations

import { CurveConfig, TrackConfig, LinearDecreasingConfig, SteppedDecreasingConfig, ReciprocalConfig } from './tracks'

// BigNumber utilities for high precision calculations
const BN_BILLION = BigInt('1000000000')
const BN_ZERO = BigInt(0)

/**
 * Calculate the minimum value between two BigInts
 */
function bnMin(a: bigint, b: bigint): bigint {
  return a < b ? a : b
}

/**
 * Calculate the maximum value between two BigInts
 */
function bnMax(a: bigint, b: bigint): bigint {
  return a > b ? a : b
}

/**
 * Calculate curve threshold value at a specific point in time
 * @param curve - The curve configuration
 * @param input - Time elapsed since decision start (in blocks)
 * @param div - Total decision period (in blocks)
 * @returns Threshold value (scaled by 1e9)
 */
export function curveThreshold(curve: CurveConfig, input: bigint, div: bigint): bigint {
  if (div === BN_ZERO) {
    return BN_BILLION
  }

  const x = (input * BN_BILLION) / div

  switch (curve.type) {
    case 'LinearDecreasing': {
      const { ceil, floor, length } = curve.value as LinearDecreasingConfig
      return ceil - (bnMin(x, length) * (ceil - floor)) / length
    }

    case 'SteppedDecreasing': {
      const { begin, end, period, step } = curve.value as SteppedDecreasingConfig
      return bnMax(end, begin - bnMin(begin, (step * x) / period))
    }

    case 'Reciprocal': {
      const { factor, xOffset, yOffset } = curve.value as ReciprocalConfig
      const divisor = x + xOffset

      if (divisor === BN_ZERO) {
        return BN_BILLION
      }

      return bnMin(BN_BILLION, (factor * BN_BILLION) / divisor + yOffset)
    }

    default:
      throw new Error(`Unknown curve type: ${(curve as any).type}`)
  }
}

/**
 * Calculate curve delay - used for deciding end calculation
 * @param curve - The curve configuration
 * @param current - Current vote count (ayes for approval, support for support)
 * @param total - Total possible votes
 * @returns Delay factor (scaled by 1e9)
 */
export function curveDelay(curve: CurveConfig, current: bigint, total: bigint): bigint {
  if (total === BN_ZERO) {
    return BN_BILLION
  }

  const currentPercent = (current * BN_BILLION) / total

  switch (curve.type) {
    case 'LinearDecreasing': {
      const { ceil, floor, length } = curve.value as LinearDecreasingConfig
      if (currentPercent >= ceil) {
        return BN_ZERO
      }
      if (currentPercent <= floor) {
        return length
      }
      return ((ceil - currentPercent) * length) / (ceil - floor)
    }

    case 'SteppedDecreasing': {
      const { begin, end, period, step } = curve.value as SteppedDecreasingConfig
      if (currentPercent >= begin) {
        return BN_ZERO
      }
      if (currentPercent <= end) {
        return period
      }
      return ((begin - currentPercent) * period) / step
    }

    case 'Reciprocal': {
      const { factor, xOffset, yOffset } = curve.value as ReciprocalConfig
      if (currentPercent >= BN_BILLION) {
        return BN_ZERO
      }

      // Solve for x when y = currentPercent
      // currentPercent = factor / (x + xOffset) + yOffset
      // currentPercent - yOffset = factor / (x + xOffset)
      // x + xOffset = factor / (currentPercent - yOffset)
      // x = factor / (currentPercent - yOffset) - xOffset

      const adjustedPercent = currentPercent - yOffset
      if (adjustedPercent <= BN_ZERO) {
        return BN_BILLION
      }

      const result = (factor * BN_BILLION) / adjustedPercent - xOffset
      return bnMax(BN_ZERO, bnMin(BN_BILLION, result))
    }

    default:
      throw new Error(`Unknown curve type: ${(curve as any).type}`)
  }
}

/**
 * Calculate when the referendum decision period will end
 * @param totalEligible - Total eligible voters
 * @param tally - Current vote tally
 * @param track - Track configuration
 * @param since - Block when decision started
 * @returns Block number when decision period ends
 */
export function calcDecidingEnd(
  totalEligible: bigint,
  tally: { ayes: bigint; nays: bigint; support?: bigint; bareAyes?: bigint },
  track: TrackConfig,
  since: bigint
): bigint {
  const support = tally.support || tally.bareAyes || BN_ZERO
  const totalVotes = tally.ayes + tally.nays

  const approvalDelay = curveDelay(track.minApproval, tally.ayes, totalVotes)
  const supportDelay = curveDelay(track.minSupport, support, totalEligible)

  const maxDelay = bnMax(approvalDelay, supportDelay)

  return since + (track.decisionPeriod * maxDelay) / BN_BILLION
}

/**
 * Calculate current approval and support percentages with required thresholds
 * @param tally - Current vote tally
 * @param totalEligible - Total eligible voters
 * @param track - Track configuration
 * @param timeSinceStart - Time elapsed since decision start (in blocks)
 * @returns Object with current and required percentages
 */
export function calculateThresholds(
  tally: { ayes: bigint; nays: bigint; support?: bigint; bareAyes?: bigint },
  totalEligible: bigint,
  track: TrackConfig,
  timeSinceStart: bigint
): {
  currentApproval: number
  currentSupport: number
  requiredApproval: number
  requiredSupport: number
  isApprovalMet: boolean
  isSupportMet: boolean
} {
  // Current approval percentage
  const totalVotes = tally.ayes + tally.nays
  const currentApproval = totalVotes === BN_ZERO ? 0 :
    Number((tally.ayes * BigInt(1000)) / totalVotes) / 10

  // Current support percentage (use weighted ayes for Fellowship)
  // For Fellowship referenda, support = weighted_ayes / total_possible_weighted_votes
  // For other collectives, fall back to bareAyes if available
  const support = tally.ayes // Use weighted ayes for Fellowship support calculation
  const currentSupport = totalEligible === BN_ZERO ? 0 :
    Number((support * BigInt(1000)) / totalEligible) / 10

  // Required thresholds at current time
  const requiredApprovalRaw = curveThreshold(
    track.minApproval,
    timeSinceStart,
    track.decisionPeriod
  )
  const requiredApproval = Number(requiredApprovalRaw / BigInt(10000000)) / 100

  const requiredSupportRaw = curveThreshold(
    track.minSupport,
    timeSinceStart,
    track.decisionPeriod
  )
  const requiredSupport = Number(requiredSupportRaw / BigInt(10000000)) / 100

  // Status checks
  const isApprovalMet = currentApproval >= requiredApproval
  const isSupportMet = currentSupport >= requiredSupport

  return {
    currentApproval,
    currentSupport,
    requiredApproval,
    requiredSupport,
    isApprovalMet,
    isSupportMet
  }
}
