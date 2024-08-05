import { ProposalStatus, ProposalType, ReferendumThresholdType } from "../../model";

export type IndexProposal =
  | ProposalType.DemocracyProposal
  | ProposalType.Referendum
  | ProposalType.TreasuryProposal
  | ProposalType.CommunityTreasuryProposal
  | ProposalType.TechCommitteeProposal
  | ProposalType.CouncilMotion
  | ProposalType.CommunityCouncilMotion;

export type HashProposal =
  | ProposalType.CommunityCouncilMotion
  | ProposalType.CouncilMotion
  | ProposalType.TechCommitteeProposal;

export interface ProposedCallData {
  section: string;
  method: string;
  description: string;
  args?: Record<string, unknown>;
}

export interface BaseProposalData {
  status: ProposalStatus;
}
export interface DemocracyProposalData extends BaseProposalData {
  index: number;
  hash: string;
  proposer: string;
  deposit: bigint;
}

export interface ReferendumData extends BaseProposalData {
  index: number;
  hash: string;
  threshold: ReferendumThresholdType;
  end?: number;
  delay?: number;
}

export interface CouncilMotionData extends BaseProposalData {
  index: number;
  hash: string;
  threshold: number;
  proposer: string;
  call: ProposedCallData;
}

export type CommunityCouncilMotionData = CouncilMotionData;

export type TechCommitteeMotionData = CouncilMotionData;

export interface TreasuryData extends BaseProposalData {
  index: number;
  proposer: string;
  reward: bigint;
  deposit: bigint;
  payee: string;
}

export interface PreimageData extends BaseProposalData {
  hash: string;
  proposer?: string;
  deposit?: bigint;
  call?: ProposedCallData;
  section?: string;
  method?: string;
  length?: number;
}

export interface TallyData {
  ayes: bigint | number;
  nays: bigint | number;
  support?: bigint | number;
  bareAyes?: bigint | number;
}
export interface DecisionDepositData {
  who: string;
  amount: bigint;
}

export interface SubmissionDepositData {
  who: string;
  amount: bigint;
}

export interface DecidingData {
  since: number;
  confirming: number | undefined;
}
