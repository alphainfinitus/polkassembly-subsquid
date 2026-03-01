import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v2 from '../v2'
import * as v3 from '../v3'
import * as v4 from '../v4'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v12 from '../v12'
import * as v15 from '../v15'
import * as v19 from '../v19'
import * as v20 from '../v20'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1.H256], v1.Call) as ProposalOfV1,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v2: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v2.H256], v2.Call) as ProposalOfV2,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v3: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v3.H256], v3.Call) as ProposalOfV3,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v4: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v4.H256], v4.Call) as ProposalOfV4,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9.H256], v9.Call) as ProposalOfV9,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v10.H256], v10.Call) as ProposalOfV10,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v11.H256], v11.Call) as ProposalOfV11,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v12: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v12.H256], v12.Call) as ProposalOfV12,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v15: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v15.H256], v15.Call) as ProposalOfV15,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v19: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v19.H256], v19.Call) as ProposalOfV19,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v20: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v20.H256], v20.Call) as ProposalOfV20,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.Call | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.Call | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: (v1.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: (v1.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV2  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2.H256): Promise<(v2.Call | undefined)>
    getMany(block: Block, keys: v2.H256[]): Promise<(v2.Call | undefined)[]>
    getKeys(block: Block): Promise<v2.H256[]>
    getKeys(block: Block, key: v2.H256): Promise<v2.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2.H256): AsyncIterable<v2.H256[]>
    getPairs(block: Block): Promise<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairs(block: Block, key: v2.H256): Promise<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2.H256, v: (v2.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2.H256): AsyncIterable<[k: v2.H256, v: (v2.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3.H256): Promise<(v3.Call | undefined)>
    getMany(block: Block, keys: v3.H256[]): Promise<(v3.Call | undefined)[]>
    getKeys(block: Block): Promise<v3.H256[]>
    getKeys(block: Block, key: v3.H256): Promise<v3.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.H256): AsyncIterable<v3.H256[]>
    getPairs(block: Block): Promise<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairs(block: Block, key: v3.H256): Promise<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.H256, v: (v3.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.H256): AsyncIterable<[k: v3.H256, v: (v3.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV4  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v4.H256): Promise<(v4.Call | undefined)>
    getMany(block: Block, keys: v4.H256[]): Promise<(v4.Call | undefined)[]>
    getKeys(block: Block): Promise<v4.H256[]>
    getKeys(block: Block, key: v4.H256): Promise<v4.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v4.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v4.H256): AsyncIterable<v4.H256[]>
    getPairs(block: Block): Promise<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairs(block: Block, key: v4.H256): Promise<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v4.H256, v: (v4.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v4.H256): AsyncIterable<[k: v4.H256, v: (v4.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9.H256): Promise<(v9.Call | undefined)>
    getMany(block: Block, keys: v9.H256[]): Promise<(v9.Call | undefined)[]>
    getKeys(block: Block): Promise<v9.H256[]>
    getKeys(block: Block, key: v9.H256): Promise<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<v9.H256[]>
    getPairs(block: Block): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairs(block: Block, key: v9.H256): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.Call | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.Call | undefined)[]>
    getKeys(block: Block): Promise<v10.H256[]>
    getKeys(block: Block, key: v10.H256): Promise<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<v10.H256[]>
    getPairs(block: Block): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairs(block: Block, key: v10.H256): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11.H256): Promise<(v11.Call | undefined)>
    getMany(block: Block, keys: v11.H256[]): Promise<(v11.Call | undefined)[]>
    getKeys(block: Block): Promise<v11.H256[]>
    getKeys(block: Block, key: v11.H256): Promise<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<v11.H256[]>
    getPairs(block: Block): Promise<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairs(block: Block, key: v11.H256): Promise<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11.H256, v: (v11.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11.H256): AsyncIterable<[k: v11.H256, v: (v11.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV12  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v12.H256): Promise<(v12.Call | undefined)>
    getMany(block: Block, keys: v12.H256[]): Promise<(v12.Call | undefined)[]>
    getKeys(block: Block): Promise<v12.H256[]>
    getKeys(block: Block, key: v12.H256): Promise<v12.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v12.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v12.H256): AsyncIterable<v12.H256[]>
    getPairs(block: Block): Promise<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairs(block: Block, key: v12.H256): Promise<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v12.H256, v: (v12.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v12.H256): AsyncIterable<[k: v12.H256, v: (v12.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV15  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v15.H256): Promise<(v15.Call | undefined)>
    getMany(block: Block, keys: v15.H256[]): Promise<(v15.Call | undefined)[]>
    getKeys(block: Block): Promise<v15.H256[]>
    getKeys(block: Block, key: v15.H256): Promise<v15.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v15.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v15.H256): AsyncIterable<v15.H256[]>
    getPairs(block: Block): Promise<[k: v15.H256, v: (v15.Call | undefined)][]>
    getPairs(block: Block, key: v15.H256): Promise<[k: v15.H256, v: (v15.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v15.H256, v: (v15.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v15.H256): AsyncIterable<[k: v15.H256, v: (v15.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV19  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v19.H256): Promise<(v19.Call | undefined)>
    getMany(block: Block, keys: v19.H256[]): Promise<(v19.Call | undefined)[]>
    getKeys(block: Block): Promise<v19.H256[]>
    getKeys(block: Block, key: v19.H256): Promise<v19.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.H256): AsyncIterable<v19.H256[]>
    getPairs(block: Block): Promise<[k: v19.H256, v: (v19.Call | undefined)][]>
    getPairs(block: Block, key: v19.H256): Promise<[k: v19.H256, v: (v19.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.H256, v: (v19.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.H256): AsyncIterable<[k: v19.H256, v: (v19.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV20  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v20.H256): Promise<(v20.Call | undefined)>
    getMany(block: Block, keys: v20.H256[]): Promise<(v20.Call | undefined)[]>
    getKeys(block: Block): Promise<v20.H256[]>
    getKeys(block: Block, key: v20.H256): Promise<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v20.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<v20.H256[]>
    getPairs(block: Block): Promise<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairs(block: Block, key: v20.H256): Promise<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v20.H256, v: (v20.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v20.H256): AsyncIterable<[k: v20.H256, v: (v20.Call | undefined)][]>
}
