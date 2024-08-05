import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v133 from '../v133'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v133: new StorageType('CommunityCouncil.Proposals', 'Default', [], sts.array(() => v133.H256)) as ProposalsV133,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV133  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v133.H256[]
    get(block: Block): Promise<(v133.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v133: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v133.H256], v133.Call) as ProposalOfV133,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV133  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v133.H256): Promise<(v133.Call | undefined)>
    getMany(block: Block, keys: v133.H256[]): Promise<(v133.Call | undefined)[]>
    getKeys(block: Block): Promise<v133.H256[]>
    getKeys(block: Block, key: v133.H256): Promise<v133.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v133.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v133.H256): AsyncIterable<v133.H256[]>
    getPairs(block: Block): Promise<[k: v133.H256, v: (v133.Call | undefined)][]>
    getPairs(block: Block, key: v133.H256): Promise<[k: v133.H256, v: (v133.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v133.H256, v: (v133.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v133.H256): AsyncIterable<[k: v133.H256, v: (v133.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v133: new StorageType('CommunityCouncil.Voting', 'Optional', [v133.H256], v133.Votes) as VotingV133,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV133  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v133.H256): Promise<(v133.Votes | undefined)>
    getMany(block: Block, keys: v133.H256[]): Promise<(v133.Votes | undefined)[]>
    getKeys(block: Block): Promise<v133.H256[]>
    getKeys(block: Block, key: v133.H256): Promise<v133.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v133.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v133.H256): AsyncIterable<v133.H256[]>
    getPairs(block: Block): Promise<[k: v133.H256, v: (v133.Votes | undefined)][]>
    getPairs(block: Block, key: v133.H256): Promise<[k: v133.H256, v: (v133.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v133.H256, v: (v133.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v133.H256): AsyncIterable<[k: v133.H256, v: (v133.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v133: new StorageType('CommunityCouncil.ProposalCount', 'Default', [], sts.number()) as ProposalCountV133,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV133  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v133: new StorageType('CommunityCouncil.Members', 'Default', [], sts.array(() => v133.AccountId32)) as MembersV133,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV133  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v133.AccountId32[]
    get(block: Block): Promise<(v133.AccountId32[] | undefined)>
}
