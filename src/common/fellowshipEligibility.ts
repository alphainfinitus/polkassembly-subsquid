// Fellowship track eligibility rules
// Different tracks have different rank requirements

/**
 * Determines if a Fellowship member of given rank can vote on a specific track
 * @param rank - Member's Fellowship rank (1-9)
 * @param trackId - Track ID
 * @returns true if member can vote on this track
 */
export function canVoteOnTrack(rank: number, trackId: number): boolean {
  // Basic Fellowship tracks (1-9) - all ranks can vote
  if (trackId >= 1 && trackId <= 9) {
    return rank >= 1 // All Fellowship members can vote
  }

  // Dan retention tracks (11-16) - only Dan ranks can vote
  if (trackId >= 11 && trackId <= 16) {
    // Dan tracks are typically for higher ranks
    // The exact rank requirement depends on the specific Dan level
    const danLevel = trackId - 10 // 11->1, 12->2, etc.
    return rank >= danLevel // Must have at least the Dan level rank
  }

  // Dan promotion tracks (21-26) - even more restricted
  if (trackId >= 21 && trackId <= 26) {
    const danLevel = trackId - 20 // 21->1, 22->2, etc.
    return rank >= danLevel + 1 // Must be higher than the target Dan level
  }

  // Fast promotion tracks (31-33) - highest restrictions
  if (trackId >= 31 && trackId <= 33) {
    return rank >= 5 // Only senior members can vote on fast promotions
  }

  // Default: allow all ranks (conservative approach)
  return true
}

/**
 * Calculates the total possible weighted votes for a track based on eligible members
 * @param members - Array of [address, rank] pairs
 * @param trackId - Track ID
 * @returns Total possible weighted votes for this track
 */
export function calculateTrackEligibleWeightedVotes(members: [string, number][], trackId: number): bigint {
  let totalWeightedVotes = BigInt(0)

  for (const [address, rank] of members) {
    if (canVoteOnTrack(rank, trackId)) {
      // Calculate voting weight for this rank: w(r) = r(r+1)/2
      const votingWeight = BigInt(rank * (rank + 1) / 2)
      totalWeightedVotes += votingWeight
    }
  }

  return totalWeightedVotes
}

/**
 * Gets estimated Fellowship composition for fallback calculations
 * @returns Array of [rank, estimated_count] pairs
 */
export function getEstimatedFellowshipComposition(): [number, number][] {
  // Based on typical Fellowship distribution
  return [
    [1, 15], // ~15 rank 1 members
    [2, 12], // ~12 rank 2 members
    [3, 8],  // ~8 rank 3 members
    [4, 6],  // ~6 rank 4 members
    [5, 4],  // ~4 rank 5 members
    [6, 3],  // ~3 rank 6 members
    [7, 2],  // ~2 rank 7 members
    [8, 1],  // ~1 rank 8 member
    [9, 1]   // ~1 rank 9 member
  ]
}

/**
 * Calculates fallback weighted votes based on estimated composition
 * @param trackId - Track ID
 * @returns Estimated total weighted votes for this track
 */
export function getEstimatedTrackWeightedVotes(trackId: number): bigint {
  const composition = getEstimatedFellowshipComposition()
  let totalWeightedVotes = BigInt(0)

  for (const [rank, count] of composition) {
    if (canVoteOnTrack(rank, trackId)) {
      const votingWeight = BigInt(rank * (rank + 1) / 2)
      totalWeightedVotes += votingWeight * BigInt(count)
    }
  }

  return totalWeightedVotes
}

