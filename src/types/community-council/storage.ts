import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v133 from '../v133'
import * as v136 from '../v136'
import * as v137 from '../v137'
import * as v1000 from '../v1000'
import * as v1200 from '../v1200'
import * as v1300 from '../v1300'
import * as v1401 from '../v1401'
import * as v1500 from '../v1500'

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
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v136: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v136.H256], v136.Call) as ProposalOfV136,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v137: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v137.H256], v137.Call) as ProposalOfV137,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1000: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v1000.H256], v1000.Call) as ProposalOfV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1200: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v1200.H256], v1200.Call) as ProposalOfV1200,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1300: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v1300.H256], v1300.Call) as ProposalOfV1300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1401: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v1401.H256], v1401.Call) as ProposalOfV1401,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1500: new StorageType('CommunityCouncil.ProposalOf', 'Optional', [v1500.H256], v1500.Call) as ProposalOfV1500,
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV136  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v136.H256): Promise<(v136.Call | undefined)>
    getMany(block: Block, keys: v136.H256[]): Promise<(v136.Call | undefined)[]>
    getKeys(block: Block): Promise<v136.H256[]>
    getKeys(block: Block, key: v136.H256): Promise<v136.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v136.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v136.H256): AsyncIterable<v136.H256[]>
    getPairs(block: Block): Promise<[k: v136.H256, v: (v136.Call | undefined)][]>
    getPairs(block: Block, key: v136.H256): Promise<[k: v136.H256, v: (v136.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v136.H256, v: (v136.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v136.H256): AsyncIterable<[k: v136.H256, v: (v136.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV137  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v137.H256): Promise<(v137.Call | undefined)>
    getMany(block: Block, keys: v137.H256[]): Promise<(v137.Call | undefined)[]>
    getKeys(block: Block): Promise<v137.H256[]>
    getKeys(block: Block, key: v137.H256): Promise<v137.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v137.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v137.H256): AsyncIterable<v137.H256[]>
    getPairs(block: Block): Promise<[k: v137.H256, v: (v137.Call | undefined)][]>
    getPairs(block: Block, key: v137.H256): Promise<[k: v137.H256, v: (v137.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v137.H256, v: (v137.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v137.H256): AsyncIterable<[k: v137.H256, v: (v137.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.H256): Promise<(v1000.Call | undefined)>
    getMany(block: Block, keys: v1000.H256[]): Promise<(v1000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1000.H256[]>
    getKeys(block: Block, key: v1000.H256): Promise<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<v1000.H256[]>
    getPairs(block: Block): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairs(block: Block, key: v1000.H256): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1200.H256): Promise<(v1200.Call | undefined)>
    getMany(block: Block, keys: v1200.H256[]): Promise<(v1200.Call | undefined)[]>
    getKeys(block: Block): Promise<v1200.H256[]>
    getKeys(block: Block, key: v1200.H256): Promise<v1200.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1200.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1200.H256): AsyncIterable<v1200.H256[]>
    getPairs(block: Block): Promise<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairs(block: Block, key: v1200.H256): Promise<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1200.H256, v: (v1200.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1200.H256): AsyncIterable<[k: v1200.H256, v: (v1200.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1300.H256): Promise<(v1300.Call | undefined)>
    getMany(block: Block, keys: v1300.H256[]): Promise<(v1300.Call | undefined)[]>
    getKeys(block: Block): Promise<v1300.H256[]>
    getKeys(block: Block, key: v1300.H256): Promise<v1300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1300.H256): AsyncIterable<v1300.H256[]>
    getPairs(block: Block): Promise<[k: v1300.H256, v: (v1300.Call | undefined)][]>
    getPairs(block: Block, key: v1300.H256): Promise<[k: v1300.H256, v: (v1300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1300.H256, v: (v1300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1300.H256): AsyncIterable<[k: v1300.H256, v: (v1300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1401  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1401.H256): Promise<(v1401.Call | undefined)>
    getMany(block: Block, keys: v1401.H256[]): Promise<(v1401.Call | undefined)[]>
    getKeys(block: Block): Promise<v1401.H256[]>
    getKeys(block: Block, key: v1401.H256): Promise<v1401.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1401.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1401.H256): AsyncIterable<v1401.H256[]>
    getPairs(block: Block): Promise<[k: v1401.H256, v: (v1401.Call | undefined)][]>
    getPairs(block: Block, key: v1401.H256): Promise<[k: v1401.H256, v: (v1401.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1401.H256, v: (v1401.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1401.H256): AsyncIterable<[k: v1401.H256, v: (v1401.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1500.H256): Promise<(v1500.Call | undefined)>
    getMany(block: Block, keys: v1500.H256[]): Promise<(v1500.Call | undefined)[]>
    getKeys(block: Block): Promise<v1500.H256[]>
    getKeys(block: Block, key: v1500.H256): Promise<v1500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1500.H256): AsyncIterable<v1500.H256[]>
    getPairs(block: Block): Promise<[k: v1500.H256, v: (v1500.Call | undefined)][]>
    getPairs(block: Block, key: v1500.H256): Promise<[k: v1500.H256, v: (v1500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1500.H256, v: (v1500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1500.H256): AsyncIterable<[k: v1500.H256, v: (v1500.Call | undefined)][]>
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
