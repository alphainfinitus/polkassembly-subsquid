import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'
import * as v5005 from '../v5005'
import * as v6000 from '../v6000'
import * as v7000 from '../v7000'
import * as v7002 from '../v7002'
import * as v7004 from '../v7004'
import * as v7006 from '../v7006'
import * as v8000 from '../v8000'
import * as v9000 from '../v9000'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5000: new StorageType('Council.ProposalOf', 'Optional', [v5000.H256], v5000.Call) as ProposalOfV5000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5005: new StorageType('Council.ProposalOf', 'Optional', [v5005.H256], v5005.Call) as ProposalOfV5005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v6000: new StorageType('Council.ProposalOf', 'Optional', [v6000.H256], v6000.Call) as ProposalOfV6000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7000: new StorageType('Council.ProposalOf', 'Optional', [v7000.H256], v7000.Call) as ProposalOfV7000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7002: new StorageType('Council.ProposalOf', 'Optional', [v7002.H256], v7002.Call) as ProposalOfV7002,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7004: new StorageType('Council.ProposalOf', 'Optional', [v7004.H256], v7004.Call) as ProposalOfV7004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7006: new StorageType('Council.ProposalOf', 'Optional', [v7006.H256], v7006.Call) as ProposalOfV7006,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v8000: new StorageType('Council.ProposalOf', 'Optional', [v8000.H256], v8000.Call) as ProposalOfV8000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9000: new StorageType('Council.ProposalOf', 'Optional', [v9000.H256], v9000.Call) as ProposalOfV9000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1000000: new StorageType('Council.ProposalOf', 'Optional', [v1000000.H256], v1000000.Call) as ProposalOfV1000000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1001000: new StorageType('Council.ProposalOf', 'Optional', [v1001000.H256], v1001000.Call) as ProposalOfV1001000,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5000.H256): Promise<(v5000.Call | undefined)>
    getMany(block: Block, keys: v5000.H256[]): Promise<(v5000.Call | undefined)[]>
    getKeys(block: Block): Promise<v5000.H256[]>
    getKeys(block: Block, key: v5000.H256): Promise<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<v5000.H256[]>
    getPairs(block: Block): Promise<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairs(block: Block, key: v5000.H256): Promise<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5000.H256, v: (v5000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5000.H256): AsyncIterable<[k: v5000.H256, v: (v5000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5005.H256): Promise<(v5005.Call | undefined)>
    getMany(block: Block, keys: v5005.H256[]): Promise<(v5005.Call | undefined)[]>
    getKeys(block: Block): Promise<v5005.H256[]>
    getKeys(block: Block, key: v5005.H256): Promise<v5005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v5005.H256): AsyncIterable<v5005.H256[]>
    getPairs(block: Block): Promise<[k: v5005.H256, v: (v5005.Call | undefined)][]>
    getPairs(block: Block, key: v5005.H256): Promise<[k: v5005.H256, v: (v5005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5005.H256, v: (v5005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5005.H256): AsyncIterable<[k: v5005.H256, v: (v5005.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV6000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6000.H256): Promise<(v6000.Call | undefined)>
    getMany(block: Block, keys: v6000.H256[]): Promise<(v6000.Call | undefined)[]>
    getKeys(block: Block): Promise<v6000.H256[]>
    getKeys(block: Block, key: v6000.H256): Promise<v6000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v6000.H256): AsyncIterable<v6000.H256[]>
    getPairs(block: Block): Promise<[k: v6000.H256, v: (v6000.Call | undefined)][]>
    getPairs(block: Block, key: v6000.H256): Promise<[k: v6000.H256, v: (v6000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6000.H256, v: (v6000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6000.H256): AsyncIterable<[k: v6000.H256, v: (v6000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7000.H256): Promise<(v7000.Call | undefined)>
    getMany(block: Block, keys: v7000.H256[]): Promise<(v7000.Call | undefined)[]>
    getKeys(block: Block): Promise<v7000.H256[]>
    getKeys(block: Block, key: v7000.H256): Promise<v7000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7000.H256): AsyncIterable<v7000.H256[]>
    getPairs(block: Block): Promise<[k: v7000.H256, v: (v7000.Call | undefined)][]>
    getPairs(block: Block, key: v7000.H256): Promise<[k: v7000.H256, v: (v7000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7000.H256, v: (v7000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7000.H256): AsyncIterable<[k: v7000.H256, v: (v7000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7002.H256): Promise<(v7002.Call | undefined)>
    getMany(block: Block, keys: v7002.H256[]): Promise<(v7002.Call | undefined)[]>
    getKeys(block: Block): Promise<v7002.H256[]>
    getKeys(block: Block, key: v7002.H256): Promise<v7002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7002.H256): AsyncIterable<v7002.H256[]>
    getPairs(block: Block): Promise<[k: v7002.H256, v: (v7002.Call | undefined)][]>
    getPairs(block: Block, key: v7002.H256): Promise<[k: v7002.H256, v: (v7002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7002.H256, v: (v7002.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7002.H256): AsyncIterable<[k: v7002.H256, v: (v7002.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7004.H256): Promise<(v7004.Call | undefined)>
    getMany(block: Block, keys: v7004.H256[]): Promise<(v7004.Call | undefined)[]>
    getKeys(block: Block): Promise<v7004.H256[]>
    getKeys(block: Block, key: v7004.H256): Promise<v7004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7004.H256): AsyncIterable<v7004.H256[]>
    getPairs(block: Block): Promise<[k: v7004.H256, v: (v7004.Call | undefined)][]>
    getPairs(block: Block, key: v7004.H256): Promise<[k: v7004.H256, v: (v7004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7004.H256, v: (v7004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7004.H256): AsyncIterable<[k: v7004.H256, v: (v7004.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7006.H256): Promise<(v7006.Call | undefined)>
    getMany(block: Block, keys: v7006.H256[]): Promise<(v7006.Call | undefined)[]>
    getKeys(block: Block): Promise<v7006.H256[]>
    getKeys(block: Block, key: v7006.H256): Promise<v7006.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7006.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7006.H256): AsyncIterable<v7006.H256[]>
    getPairs(block: Block): Promise<[k: v7006.H256, v: (v7006.Call | undefined)][]>
    getPairs(block: Block, key: v7006.H256): Promise<[k: v7006.H256, v: (v7006.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7006.H256, v: (v7006.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7006.H256): AsyncIterable<[k: v7006.H256, v: (v7006.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV8000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v8000.H256): Promise<(v8000.Call | undefined)>
    getMany(block: Block, keys: v8000.H256[]): Promise<(v8000.Call | undefined)[]>
    getKeys(block: Block): Promise<v8000.H256[]>
    getKeys(block: Block, key: v8000.H256): Promise<v8000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v8000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v8000.H256): AsyncIterable<v8000.H256[]>
    getPairs(block: Block): Promise<[k: v8000.H256, v: (v8000.Call | undefined)][]>
    getPairs(block: Block, key: v8000.H256): Promise<[k: v8000.H256, v: (v8000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v8000.H256, v: (v8000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v8000.H256): AsyncIterable<[k: v8000.H256, v: (v8000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9000.H256): Promise<(v9000.Call | undefined)>
    getMany(block: Block, keys: v9000.H256[]): Promise<(v9000.Call | undefined)[]>
    getKeys(block: Block): Promise<v9000.H256[]>
    getKeys(block: Block, key: v9000.H256): Promise<v9000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9000.H256): AsyncIterable<v9000.H256[]>
    getPairs(block: Block): Promise<[k: v9000.H256, v: (v9000.Call | undefined)][]>
    getPairs(block: Block, key: v9000.H256): Promise<[k: v9000.H256, v: (v9000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9000.H256, v: (v9000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9000.H256): AsyncIterable<[k: v9000.H256, v: (v9000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.H256): Promise<(v1000000.Call | undefined)>
    getMany(block: Block, keys: v1000000.H256[]): Promise<(v1000000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1000000.H256[]>
    getKeys(block: Block, key: v1000000.H256): Promise<v1000000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.H256): AsyncIterable<v1000000.H256[]>
    getPairs(block: Block): Promise<[k: v1000000.H256, v: (v1000000.Call | undefined)][]>
    getPairs(block: Block, key: v1000000.H256): Promise<[k: v1000000.H256, v: (v1000000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.H256, v: (v1000000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.H256): AsyncIterable<[k: v1000000.H256, v: (v1000000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1001000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001000.H256): Promise<(v1001000.Call | undefined)>
    getMany(block: Block, keys: v1001000.H256[]): Promise<(v1001000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1001000.H256[]>
    getKeys(block: Block, key: v1001000.H256): Promise<v1001000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001000.H256): AsyncIterable<v1001000.H256[]>
    getPairs(block: Block): Promise<[k: v1001000.H256, v: (v1001000.Call | undefined)][]>
    getPairs(block: Block, key: v1001000.H256): Promise<[k: v1001000.H256, v: (v1001000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001000.H256, v: (v1001000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001000.H256): AsyncIterable<[k: v1001000.H256, v: (v1001000.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v5000: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV5000,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV5000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v5000: new StorageType('Council.Members', 'Default', [], sts.array(() => v5000.AccountId32)) as MembersV5000,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV5000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v5000.AccountId32[]
    get(block: Block): Promise<(v5000.AccountId32[] | undefined)>
}
