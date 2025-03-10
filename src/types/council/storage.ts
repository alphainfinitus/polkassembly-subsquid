import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1004 from '../v1004'
import * as v1006 from '../v1006'
import * as v1007 from '../v1007'
import * as v1009 from '../v1009'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'
import * as v1013 from '../v1013'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1004: new StorageType('Council.ProposalOf', 'Optional', [v1004.H256], v1004.Call) as ProposalOfV1004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1006: new StorageType('Council.ProposalOf', 'Optional', [v1006.H256], v1006.Call) as ProposalOfV1006,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1007: new StorageType('Council.ProposalOf', 'Optional', [v1007.H256], v1007.Call) as ProposalOfV1007,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1009: new StorageType('Council.ProposalOf', 'Optional', [v1009.H256], v1009.Call) as ProposalOfV1009,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1010: new StorageType('Council.ProposalOf', 'Optional', [v1010.H256], v1010.Call) as ProposalOfV1010,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1011: new StorageType('Council.ProposalOf', 'Optional', [v1011.H256], v1011.Call) as ProposalOfV1011,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1013: new StorageType('Council.ProposalOf', 'Optional', [v1013.H256], v1013.Call) as ProposalOfV1013,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1004.H256): Promise<(v1004.Call | undefined)>
    getMany(block: Block, keys: v1004.H256[]): Promise<(v1004.Call | undefined)[]>
    getKeys(block: Block): Promise<v1004.H256[]>
    getKeys(block: Block, key: v1004.H256): Promise<v1004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1004.H256): AsyncIterable<v1004.H256[]>
    getPairs(block: Block): Promise<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairs(block: Block, key: v1004.H256): Promise<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1004.H256): AsyncIterable<[k: v1004.H256, v: (v1004.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1006.H256): Promise<(v1006.Call | undefined)>
    getMany(block: Block, keys: v1006.H256[]): Promise<(v1006.Call | undefined)[]>
    getKeys(block: Block): Promise<v1006.H256[]>
    getKeys(block: Block, key: v1006.H256): Promise<v1006.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1006.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1006.H256): AsyncIterable<v1006.H256[]>
    getPairs(block: Block): Promise<[k: v1006.H256, v: (v1006.Call | undefined)][]>
    getPairs(block: Block, key: v1006.H256): Promise<[k: v1006.H256, v: (v1006.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1006.H256, v: (v1006.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1006.H256): AsyncIterable<[k: v1006.H256, v: (v1006.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1007  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1007.H256): Promise<(v1007.Call | undefined)>
    getMany(block: Block, keys: v1007.H256[]): Promise<(v1007.Call | undefined)[]>
    getKeys(block: Block): Promise<v1007.H256[]>
    getKeys(block: Block, key: v1007.H256): Promise<v1007.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1007.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1007.H256): AsyncIterable<v1007.H256[]>
    getPairs(block: Block): Promise<[k: v1007.H256, v: (v1007.Call | undefined)][]>
    getPairs(block: Block, key: v1007.H256): Promise<[k: v1007.H256, v: (v1007.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1007.H256, v: (v1007.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1007.H256): AsyncIterable<[k: v1007.H256, v: (v1007.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1009  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1009.H256): Promise<(v1009.Call | undefined)>
    getMany(block: Block, keys: v1009.H256[]): Promise<(v1009.Call | undefined)[]>
    getKeys(block: Block): Promise<v1009.H256[]>
    getKeys(block: Block, key: v1009.H256): Promise<v1009.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1009.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1009.H256): AsyncIterable<v1009.H256[]>
    getPairs(block: Block): Promise<[k: v1009.H256, v: (v1009.Call | undefined)][]>
    getPairs(block: Block, key: v1009.H256): Promise<[k: v1009.H256, v: (v1009.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1009.H256, v: (v1009.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1009.H256): AsyncIterable<[k: v1009.H256, v: (v1009.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.H256): Promise<(v1010.Call | undefined)>
    getMany(block: Block, keys: v1010.H256[]): Promise<(v1010.Call | undefined)[]>
    getKeys(block: Block): Promise<v1010.H256[]>
    getKeys(block: Block, key: v1010.H256): Promise<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<v1010.H256[]>
    getPairs(block: Block): Promise<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairs(block: Block, key: v1010.H256): Promise<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<[k: v1010.H256, v: (v1010.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1011  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1011.H256): Promise<(v1011.Call | undefined)>
    getMany(block: Block, keys: v1011.H256[]): Promise<(v1011.Call | undefined)[]>
    getKeys(block: Block): Promise<v1011.H256[]>
    getKeys(block: Block, key: v1011.H256): Promise<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<v1011.H256[]>
    getPairs(block: Block): Promise<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairs(block: Block, key: v1011.H256): Promise<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<[k: v1011.H256, v: (v1011.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1013.H256): Promise<(v1013.Call | undefined)>
    getMany(block: Block, keys: v1013.H256[]): Promise<(v1013.Call | undefined)[]>
    getKeys(block: Block): Promise<v1013.H256[]>
    getKeys(block: Block, key: v1013.H256): Promise<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<v1013.H256[]>
    getPairs(block: Block): Promise<[k: v1013.H256, v: (v1013.Call | undefined)][]>
    getPairs(block: Block, key: v1013.H256): Promise<[k: v1013.H256, v: (v1013.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1013.H256, v: (v1013.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<[k: v1013.H256, v: (v1013.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v1004: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV1004,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV1004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v1004: new StorageType('Council.Members', 'Default', [], sts.array(() => v1004.AccountId20)) as MembersV1004,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV1004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1004.AccountId20[]
    get(block: Block): Promise<(v1004.AccountId20[] | undefined)>
}
