import { ActivityType, ProposalStatus, ProposalType, ReferendumThresholdType, SalaryCycle } from '../../model'
import { Multihash } from '../../types/collectivesV1000000'

export type IndexProposal =
    | ProposalType.AllianceMotion
    | ProposalType.FellowshipReferendum

export type HashProposal =
    | ProposalType.AllianceMotion
    | ProposalType.FellowshipReferendum

export interface ProposedCallData {
    section: string
    method: string
    description: string
    args?: Record<string, unknown>
}

export interface BaseProposalData {
    status: ProposalStatus
}
export interface DemocracyProposalData extends BaseProposalData {
    index: number
    hash: string
    proposer: string
    deposit: bigint
}

export interface AllianceMotionData extends BaseProposalData {
    index: number
    hash: string
    proposer: string
    threshold: number
    extrinsicIndex: string
    callData?: ProposedCallData
}

export interface SalaryCycleData {
    cycleIndex: number
    cycleStart: number
    totalRegistrations?: bigint
    budget?: bigint
    totalUnregisteredPaid?: bigint
}

export interface MetaActionsData {
    who?: string
    amount?: bigint
    toRank?: number
    rank?: number
    isActive?: boolean
    evidence?: string
    showClaimButton?: boolean
    evidenceJudged?: boolean
    params?: any
    wish?: string,
    activityType: ActivityType
}

export interface SalaryPayoutData {
    who: string,
    amount: bigint,
    rank?: number, 
    beneficiary?: string,
    salaryCycle?: SalaryCycle
    id: bigint
}

export interface AnnouncementsData {
    hash: string
    version?: string
    code?: bigint
    announcement?: Multihash
    extrinsicIndex?: String
    codec?: bigint
    cid?: string
}

export interface ReferendumData extends BaseProposalData {
    index: number
    hash: string
    threshold: ReferendumThresholdType
    end?: number
    delay?: number
}

export interface CouncilMotionData extends BaseProposalData {
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
}

export type TechCommitteeMotionData = CouncilMotionData

export interface TipData extends BaseProposalData {
    hash: string
    proposer?: string
    payee: string
    deposit?: bigint
    status: ProposalStatus
    reason?: string
}

export interface BountyData extends BaseProposalData {
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
    description?: string
    curatorDeposit?: bigint
    fee?: bigint
}

export interface ChildBountyData extends BaseProposalData {
    index: number
    parentBountyIndex: number
    reward: bigint
    curatorDeposit: bigint
    fee: bigint
    description?: string
    curator?: string 
}

export interface TreasuryData extends BaseProposalData {
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
    payee: string
}

export interface PreimageData extends BaseProposalData {
    hash: string
    proposer?: string
    deposit?: bigint
    call?: ProposedCallData
    extrinsicIndex?: string
    section?: string
    method?: string
    length?: number
}

// export interface PreimageDataV2 extends BaseProposalData {
//     hash: string
//     proposer?: string
//     deposit?: bigint
//     call?: ProposedCallData
//     section?: string
//     method?: string
//     length?: number
// }

export interface FellowshipReferendumData extends BaseProposalData {
    index: number
    hash: string
    trackNumber: number
    origin: string
    proposer: string
    enactmentAt?: number
    enactmentAfter?: number
    submittedAt: number
    hashType?: string
    proposalArguments?: any
    submissionDeposit: {who: Uint8Array, amount: bigint}
    decisionDeposit: {who: Uint8Array, amount: bigint} | undefined
    extrinsicIndex?: string,
    deciding: {since: number, confirming: number | undefined} | undefined
    tally: {ayes: bigint | number, nays: bigint | number, support?: bigint | number, bareAyegs?: bigint | number}
}

export interface TallyData {
    ayes: bigint | number
    nays: bigint | number
    support?: bigint | number
    bareAyes?: bigint | number

}
export interface DecisionDepositData {
    who: string
    amount: bigint
}

export interface SubmissionDepositData {
    who: string
    amount: bigint
}

export interface DecidingData {
    since: number
    confirming: number | undefined
}