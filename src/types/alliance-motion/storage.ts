import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'
import * as v9360 from '../v9360'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1003000 from '../v1003000'
import * as v1004000 from '../v1004000'
import * as v1005001 from '../v1005001'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v9290: new StorageType('AllianceMotion.Proposals', 'Default', [], sts.array(() => v9290.H256)) as ProposalsV9290,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9290.H256[]
    get(block: Block): Promise<(v9290.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9290: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v9290.H256], v9290.Call) as ProposalOfV9290,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9360: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v9360.H256], v9360.Call) as ProposalOfV9360,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9370: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v9370.H256], v9370.Call) as ProposalOfV9370,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9420: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v9420.H256], v9420.Call) as ProposalOfV9420,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1000000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1000000.H256], v1000000.Call) as ProposalOfV1000000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1001000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1001000.H256], v1001000.Call) as ProposalOfV1001000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1002000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1002000.H256], v1002000.Call) as ProposalOfV1002000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1002004: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1002004.H256], v1002004.Call) as ProposalOfV1002004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1003000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1003000.H256], v1003000.Call) as ProposalOfV1003000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1004000: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1004000.H256], v1004000.Call) as ProposalOfV1004000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1005001: new StorageType('AllianceMotion.ProposalOf', 'Optional', [v1005001.H256], v1005001.Call) as ProposalOfV1005001,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9290  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9290.H256): Promise<(v9290.Call | undefined)>
    getMany(block: Block, keys: v9290.H256[]): Promise<(v9290.Call | undefined)[]>
    getKeys(block: Block): Promise<v9290.H256[]>
    getKeys(block: Block, key: v9290.H256): Promise<v9290.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9290.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9290.H256): AsyncIterable<v9290.H256[]>
    getPairs(block: Block): Promise<[k: v9290.H256, v: (v9290.Call | undefined)][]>
    getPairs(block: Block, key: v9290.H256): Promise<[k: v9290.H256, v: (v9290.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9290.H256, v: (v9290.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9290.H256): AsyncIterable<[k: v9290.H256, v: (v9290.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9360  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9360.H256): Promise<(v9360.Call | undefined)>
    getMany(block: Block, keys: v9360.H256[]): Promise<(v9360.Call | undefined)[]>
    getKeys(block: Block): Promise<v9360.H256[]>
    getKeys(block: Block, key: v9360.H256): Promise<v9360.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9360.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9360.H256): AsyncIterable<v9360.H256[]>
    getPairs(block: Block): Promise<[k: v9360.H256, v: (v9360.Call | undefined)][]>
    getPairs(block: Block, key: v9360.H256): Promise<[k: v9360.H256, v: (v9360.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9360.H256, v: (v9360.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9360.H256): AsyncIterable<[k: v9360.H256, v: (v9360.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9370.H256): Promise<(v9370.Call | undefined)>
    getMany(block: Block, keys: v9370.H256[]): Promise<(v9370.Call | undefined)[]>
    getKeys(block: Block): Promise<v9370.H256[]>
    getKeys(block: Block, key: v9370.H256): Promise<v9370.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9370.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9370.H256): AsyncIterable<v9370.H256[]>
    getPairs(block: Block): Promise<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairs(block: Block, key: v9370.H256): Promise<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9370.H256, v: (v9370.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9370.H256): AsyncIterable<[k: v9370.H256, v: (v9370.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.H256): Promise<(v9420.Call | undefined)>
    getMany(block: Block, keys: v9420.H256[]): Promise<(v9420.Call | undefined)[]>
    getKeys(block: Block): Promise<v9420.H256[]>
    getKeys(block: Block, key: v9420.H256): Promise<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<v9420.H256[]>
    getPairs(block: Block): Promise<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairs(block: Block, key: v9420.H256): Promise<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.H256, v: (v9420.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.H256): AsyncIterable<[k: v9420.H256, v: (v9420.Call | undefined)][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1002000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1002000.H256): Promise<(v1002000.Call | undefined)>
    getMany(block: Block, keys: v1002000.H256[]): Promise<(v1002000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1002000.H256[]>
    getKeys(block: Block, key: v1002000.H256): Promise<v1002000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1002000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1002000.H256): AsyncIterable<v1002000.H256[]>
    getPairs(block: Block): Promise<[k: v1002000.H256, v: (v1002000.Call | undefined)][]>
    getPairs(block: Block, key: v1002000.H256): Promise<[k: v1002000.H256, v: (v1002000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1002000.H256, v: (v1002000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1002000.H256): AsyncIterable<[k: v1002000.H256, v: (v1002000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1002004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1002004.H256): Promise<(v1002004.Call | undefined)>
    getMany(block: Block, keys: v1002004.H256[]): Promise<(v1002004.Call | undefined)[]>
    getKeys(block: Block): Promise<v1002004.H256[]>
    getKeys(block: Block, key: v1002004.H256): Promise<v1002004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1002004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1002004.H256): AsyncIterable<v1002004.H256[]>
    getPairs(block: Block): Promise<[k: v1002004.H256, v: (v1002004.Call | undefined)][]>
    getPairs(block: Block, key: v1002004.H256): Promise<[k: v1002004.H256, v: (v1002004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1002004.H256, v: (v1002004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1002004.H256): AsyncIterable<[k: v1002004.H256, v: (v1002004.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1003000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1003000.H256): Promise<(v1003000.Call | undefined)>
    getMany(block: Block, keys: v1003000.H256[]): Promise<(v1003000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1003000.H256[]>
    getKeys(block: Block, key: v1003000.H256): Promise<v1003000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1003000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1003000.H256): AsyncIterable<v1003000.H256[]>
    getPairs(block: Block): Promise<[k: v1003000.H256, v: (v1003000.Call | undefined)][]>
    getPairs(block: Block, key: v1003000.H256): Promise<[k: v1003000.H256, v: (v1003000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1003000.H256, v: (v1003000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1003000.H256): AsyncIterable<[k: v1003000.H256, v: (v1003000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1004000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1004000.H256): Promise<(v1004000.Call | undefined)>
    getMany(block: Block, keys: v1004000.H256[]): Promise<(v1004000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1004000.H256[]>
    getKeys(block: Block, key: v1004000.H256): Promise<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1004000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<v1004000.H256[]>
    getPairs(block: Block): Promise<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairs(block: Block, key: v1004000.H256): Promise<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1004000.H256): AsyncIterable<[k: v1004000.H256, v: (v1004000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1005001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1005001.H256): Promise<(v1005001.Call | undefined)>
    getMany(block: Block, keys: v1005001.H256[]): Promise<(v1005001.Call | undefined)[]>
    getKeys(block: Block): Promise<v1005001.H256[]>
    getKeys(block: Block, key: v1005001.H256): Promise<v1005001.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1005001.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1005001.H256): AsyncIterable<v1005001.H256[]>
    getPairs(block: Block): Promise<[k: v1005001.H256, v: (v1005001.Call | undefined)][]>
    getPairs(block: Block, key: v1005001.H256): Promise<[k: v1005001.H256, v: (v1005001.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1005001.H256, v: (v1005001.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1005001.H256): AsyncIterable<[k: v1005001.H256, v: (v1005001.Call | undefined)][]>
}
