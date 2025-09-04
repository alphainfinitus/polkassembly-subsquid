import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto';
import { getStorageData } from '../mappings/fellowshipReferendum/events/referendaSubmitted';
import { Proposal, CurveData } from '../model'
import { getTotalIssuanceStorageData, getTotalInactiveIssuanceStorageData } from '../storage/balances';
import { ProcessorContext } from '../processor';
import { getTrackConfig } from './tracks';
import { calculateThresholds, calcDecidingEnd } from './curveCalculations';
import { calculateTrackEligibleWeightedVotes, getEstimatedTrackWeightedVotes } from './fellowshipEligibility';

export async function updateCurveData(ctx: ProcessorContext<Store>, header: any, proposal: Proposal) {
    if (proposal.index == null || proposal.index == undefined) {
        return;
    }

    const storageData = await getStorageData(ctx, proposal.index, header)

    if (storageData) {
        const tally = storageData.tally

        // Get track configuration
        const trackConfig = getTrackConfig(storageData.trackNumber)
        if (!trackConfig) {
            ctx.log.warn(`Unknown track ${storageData.trackNumber} for proposal ${proposal.index}`)
            return;
        }

        // For Fellowship referenda, support is calculated based on weighted votes
        // Fellowship uses rank-based voting where vote weight = r(r+1)/2 for rank r
        // Support = weighted_ayes / total_possible_weighted_votes

        // Get actual Fellowship member data from blockchain storage
        let totalPossibleWeightedVotes: bigint

        try {
            // Try different storage keys for Fellowship member data
            let fellowshipMembers: any = null
            let memberCount = 0
            let calculatedWeightedVotes = BigInt(0)

            // Try the most common storage keys for Fellowship collective
            const storageKeys = [
                'FellowshipCollective.Members',
                'FellowshipCollective.MemberCount',
                'FellowshipCollective.IdToIndex',
                'TechnicalFellowship.Members'
            ]

            // First, try to get member count
            try {
                memberCount = await header._runtime.getStorage(header.hash, 'FellowshipCollective.MemberCount') || 0
                ctx.log.info(`Proposal ${proposal.index}: Fellowship member count: ${memberCount}`)
            } catch (e) {
                ctx.log.debug(`Could not get member count: ${e}`)
            }

            // Try to get member data from various storage locations
            for (const key of storageKeys) {
                try {
                    fellowshipMembers = await header._runtime.getStorage(header.hash, key)
                    if (fellowshipMembers) {
                        ctx.log.info(`Proposal ${proposal.index}: Found Fellowship data at ${key}`)
                        break
                    }
                } catch (e) {
                    ctx.log.debug(`Storage key ${key} not found: ${e}`)
                }
            }

            if (fellowshipMembers && typeof fellowshipMembers === 'object') {
                // Handle different data structures
                let members: any[] = []

                if (Array.isArray(fellowshipMembers)) {
                    members = fellowshipMembers
                } else if (fellowshipMembers instanceof Map) {
                    members = Array.from(fellowshipMembers.entries())
                } else {
                    members = Object.entries(fellowshipMembers)
                }

                // Parse member data into [address, rank] format
                const memberList: [string, number][] = []

                for (const memberData of members) {
                    let address: string = ''
                    let rank: number = 1 // Default rank

                    // Try to extract address and rank from various data structures
                    if (Array.isArray(memberData) && memberData.length >= 2) {
                        // [address, rankData] format
                        address = memberData[0]
                        const rankData = memberData[1]
                        if (typeof rankData === 'number') {
                            rank = rankData
                        } else if (typeof rankData === 'object' && rankData !== null) {
                            rank = rankData.rank || rankData.value || 1
                        }
                    } else if (typeof memberData === 'object' && memberData !== null) {
                        // Direct object with rank
                        address = memberData.address || memberData.id || 'unknown'
                        rank = memberData.rank || memberData.value || 1
                    }

                    // Ensure rank is valid (between 1 and 9 for Fellowship)
                    rank = Math.max(1, Math.min(9, rank))
                    memberList.push([address, rank])
                }

                // Calculate track-specific eligible weighted votes
                totalPossibleWeightedVotes = calculateTrackEligibleWeightedVotes(memberList, storageData.trackNumber)
                ctx.log.info(`Proposal ${proposal.index}: Calculated ${members.length} Fellowship members with total weighted votes: ${totalPossibleWeightedVotes}`)

            } else {
                throw new Error('Fellowship members data not found or in unexpected format')
            }

        } catch (error) {
            ctx.log.warn(`Could not get actual Fellowship members for proposal ${proposal.index}: ${error}`)

            // Fallback to sophisticated track-based estimates if we can't get actual data
            const trackId = storageData.trackNumber
            totalPossibleWeightedVotes = getEstimatedTrackWeightedVotes(trackId)

            ctx.log.info(`Proposal ${proposal.index}: Using sophisticated fallback weighted votes estimate: ${totalPossibleWeightedVotes} for track ${trackId}`)
        }

        // Safety check: if current votes exceed calculated total, adjust upward
        if (tally.ayes > 0 || tally.nays > 0) {
            const totalCurrentWeightedVotes = BigInt(tally.ayes) + BigInt(tally.nays)
            if (totalCurrentWeightedVotes > totalPossibleWeightedVotes) {
                totalPossibleWeightedVotes = totalCurrentWeightedVotes * BigInt(2) // Assume 50% participation
                ctx.log.info(`Proposal ${proposal.index}: Adjusted total weighted votes upward to: ${totalPossibleWeightedVotes}`)
            }
        }

        // Get decision start block
        const decisionStartBlock = storageData.deciding?.since || 0
        const timeSinceStart = decisionStartBlock > 0 ? BigInt(header.height - decisionStartBlock) : BigInt(0)

        // Debug logging to understand what's happening
        ctx.log.info(`Proposal ${proposal.index}: tally.ayes=${tally.ayes}, tally.nays=${tally.nays}, tally.bareAyes=${tally.bareAyes}, tally.support=${tally.support}, totalPossibleWeightedVotes=${totalPossibleWeightedVotes}, track=${storageData.trackNumber}`)

        // Convert tally to bigint for calculations
        const tallyBigInt = {
            ayes: BigInt(tally.ayes),
            nays: BigInt(tally.nays),
            support: tally.support ? BigInt(tally.support) : undefined,
            bareAyes: tally.bareAyes ? BigInt(tally.bareAyes) : undefined
        }

        // Calculate thresholds and current percentages
        const thresholds = calculateThresholds(
            tallyBigInt,
            totalPossibleWeightedVotes,
            trackConfig,
            timeSinceStart
        )

        // Debug the calculated thresholds
        ctx.log.info(`Proposal ${proposal.index}: supportPercent=${thresholds.currentSupport}, approvalPercent=${thresholds.currentApproval}, isSupportMet=${thresholds.isSupportMet}, isApprovalMet=${thresholds.isApprovalMet}`)

        // Calculate deciding end block
        const decidingEndBlock = decisionStartBlock > 0 ?
            Number(calcDecidingEnd(totalPossibleWeightedVotes, tallyBigInt, trackConfig, BigInt(decisionStartBlock))) :
            undefined

        await ctx.store.insert(
            new CurveData({
                id: randomUUID(),
                index: proposal.index,
                proposal: proposal,
                timestamp: new Date(header.timestamp),
                approvalPercent: !isNaN(thresholds.currentApproval) ? thresholds.currentApproval : 0.00,
                supportPercent: !isNaN(thresholds.currentSupport) ? thresholds.currentSupport : 0.00,
                requiredApprovalPercent: !isNaN(thresholds.requiredApproval) ? thresholds.requiredApproval : 0.00,
                requiredSupportPercent: !isNaN(thresholds.requiredSupport) ? thresholds.requiredSupport : 0.00,
                isApprovalMet: thresholds.isApprovalMet,
                isSupportMet: thresholds.isSupportMet,
                timeSinceDecisionStart: Number(timeSinceStart),
                decidingEndBlock: decidingEndBlock,
                block: header.height,
                extrinsicIndex: `${header.height}-0` // Default extrinsic index
            })
        )
    }

}