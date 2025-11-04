import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9270 from '../v9270'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v0: new StorageType('Council.ProposalOf', 'Optional', [v0.Hash], v0.Proposal) as ProposalOfV0,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v5: new StorageType('Council.ProposalOf', 'Optional', [v5.Hash], v5.Proposal) as ProposalOfV5,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v6: new StorageType('Council.ProposalOf', 'Optional', [v6.Hash], v6.Proposal) as ProposalOfV6,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7: new StorageType('Council.ProposalOf', 'Optional', [v7.Hash], v7.Proposal) as ProposalOfV7,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9: new StorageType('Council.ProposalOf', 'Optional', [v9.Hash], v9.Proposal) as ProposalOfV9,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10: new StorageType('Council.ProposalOf', 'Optional', [v10.Hash], v10.Proposal) as ProposalOfV10,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11: new StorageType('Council.ProposalOf', 'Optional', [v11.Hash], v11.Proposal) as ProposalOfV11,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v13: new StorageType('Council.ProposalOf', 'Optional', [v13.Hash], v13.Proposal) as ProposalOfV13,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v14: new StorageType('Council.ProposalOf', 'Optional', [v14.Hash], v14.Proposal) as ProposalOfV14,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v15: new StorageType('Council.ProposalOf', 'Optional', [v15.Hash], v15.Proposal) as ProposalOfV15,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v17: new StorageType('Council.ProposalOf', 'Optional', [v17.Hash], v17.Proposal) as ProposalOfV17,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v18: new StorageType('Council.ProposalOf', 'Optional', [v18.Hash], v18.Proposal) as ProposalOfV18,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v23: new StorageType('Council.ProposalOf', 'Optional', [v23.Hash], v23.Proposal) as ProposalOfV23,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v24: new StorageType('Council.ProposalOf', 'Optional', [v24.Hash], v24.Proposal) as ProposalOfV24,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v25: new StorageType('Council.ProposalOf', 'Optional', [v25.Hash], v25.Proposal) as ProposalOfV25,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v26: new StorageType('Council.ProposalOf', 'Optional', [v26.Hash], v26.Proposal) as ProposalOfV26,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v28: new StorageType('Council.ProposalOf', 'Optional', [v28.Hash], v28.Proposal) as ProposalOfV28,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v29: new StorageType('Council.ProposalOf', 'Optional', [v29.Hash], v29.Proposal) as ProposalOfV29,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v30: new StorageType('Council.ProposalOf', 'Optional', [v30.Hash], v30.Proposal) as ProposalOfV30,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9050: new StorageType('Council.ProposalOf', 'Optional', [v9050.Hash], v9050.Proposal) as ProposalOfV9050,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9080: new StorageType('Council.ProposalOf', 'Optional', [v9080.Hash], v9080.Proposal) as ProposalOfV9080,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9090: new StorageType('Council.ProposalOf', 'Optional', [v9090.Hash], v9090.Proposal) as ProposalOfV9090,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9100: new StorageType('Council.ProposalOf', 'Optional', [v9100.Hash], v9100.Proposal) as ProposalOfV9100,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9110: new StorageType('Council.ProposalOf', 'Optional', [v9110.H256], v9110.Call) as ProposalOfV9110,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9140: new StorageType('Council.ProposalOf', 'Optional', [v9140.H256], v9140.Call) as ProposalOfV9140,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9170: new StorageType('Council.ProposalOf', 'Optional', [v9170.H256], v9170.Call) as ProposalOfV9170,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9180: new StorageType('Council.ProposalOf', 'Optional', [v9180.H256], v9180.Call) as ProposalOfV9180,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9190: new StorageType('Council.ProposalOf', 'Optional', [v9190.H256], v9190.Call) as ProposalOfV9190,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9220: new StorageType('Council.ProposalOf', 'Optional', [v9220.H256], v9220.Call) as ProposalOfV9220,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9230: new StorageType('Council.ProposalOf', 'Optional', [v9230.H256], v9230.Call) as ProposalOfV9230,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9250: new StorageType('Council.ProposalOf', 'Optional', [v9250.H256], v9250.Call) as ProposalOfV9250,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9270: new StorageType('Council.ProposalOf', 'Optional', [v9270.H256], v9270.Call) as ProposalOfV9270,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9280: new StorageType('Council.ProposalOf', 'Optional', [v9280.H256], v9280.Call) as ProposalOfV9280,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9291: new StorageType('Council.ProposalOf', 'Optional', [v9291.H256], v9291.Call) as ProposalOfV9291,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9300: new StorageType('Council.ProposalOf', 'Optional', [v9300.H256], v9300.Call) as ProposalOfV9300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9340: new StorageType('Council.ProposalOf', 'Optional', [v9340.H256], v9340.Call) as ProposalOfV9340,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9370: new StorageType('Council.ProposalOf', 'Optional', [v9370.H256], v9370.Call) as ProposalOfV9370,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9420: new StorageType('Council.ProposalOf', 'Optional', [v9420.H256], v9420.Call) as ProposalOfV9420,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9430: new StorageType('Council.ProposalOf', 'Optional', [v9430.H256], v9430.Call) as ProposalOfV9430,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(v0.Proposal | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(v0.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (v0.Proposal | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (v0.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (v0.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (v0.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV5  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v5.Hash): Promise<(v5.Proposal | undefined)>
    getMany(block: Block, keys: v5.Hash[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v5.Hash[]>
    getKeys(block: Block, key: v5.Hash): Promise<v5.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v5.Hash): AsyncIterable<v5.Hash[]>
    getPairs(block: Block): Promise<[k: v5.Hash, v: (v5.Proposal | undefined)][]>
    getPairs(block: Block, key: v5.Hash): Promise<[k: v5.Hash, v: (v5.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5.Hash, v: (v5.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5.Hash): AsyncIterable<[k: v5.Hash, v: (v5.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV6  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v6.Hash): Promise<(v6.Proposal | undefined)>
    getMany(block: Block, keys: v6.Hash[]): Promise<(v6.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v6.Hash[]>
    getKeys(block: Block, key: v6.Hash): Promise<v6.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v6.Hash): AsyncIterable<v6.Hash[]>
    getPairs(block: Block): Promise<[k: v6.Hash, v: (v6.Proposal | undefined)][]>
    getPairs(block: Block, key: v6.Hash): Promise<[k: v6.Hash, v: (v6.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6.Hash, v: (v6.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6.Hash): AsyncIterable<[k: v6.Hash, v: (v6.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.Hash): Promise<(v7.Proposal | undefined)>
    getMany(block: Block, keys: v7.Hash[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v7.Hash[]>
    getKeys(block: Block, key: v7.Hash): Promise<v7.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.Hash): AsyncIterable<v7.Hash[]>
    getPairs(block: Block): Promise<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairs(block: Block, key: v7.Hash): Promise<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.Hash): AsyncIterable<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9.Hash): Promise<(v9.Proposal | undefined)>
    getMany(block: Block, keys: v9.Hash[]): Promise<(v9.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v9.Hash[]>
    getKeys(block: Block, key: v9.Hash): Promise<v9.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.Hash): AsyncIterable<v9.Hash[]>
    getPairs(block: Block): Promise<[k: v9.Hash, v: (v9.Proposal | undefined)][]>
    getPairs(block: Block, key: v9.Hash): Promise<[k: v9.Hash, v: (v9.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.Hash, v: (v9.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.Hash): AsyncIterable<[k: v9.Hash, v: (v9.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.Hash): Promise<(v10.Proposal | undefined)>
    getMany(block: Block, keys: v10.Hash[]): Promise<(v10.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v10.Hash[]>
    getKeys(block: Block, key: v10.Hash): Promise<v10.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.Hash): AsyncIterable<v10.Hash[]>
    getPairs(block: Block): Promise<[k: v10.Hash, v: (v10.Proposal | undefined)][]>
    getPairs(block: Block, key: v10.Hash): Promise<[k: v10.Hash, v: (v10.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.Hash, v: (v10.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.Hash): AsyncIterable<[k: v10.Hash, v: (v10.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11.Hash): Promise<(v11.Proposal | undefined)>
    getMany(block: Block, keys: v11.Hash[]): Promise<(v11.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v11.Hash[]>
    getKeys(block: Block, key: v11.Hash): Promise<v11.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v11.Hash): AsyncIterable<v11.Hash[]>
    getPairs(block: Block): Promise<[k: v11.Hash, v: (v11.Proposal | undefined)][]>
    getPairs(block: Block, key: v11.Hash): Promise<[k: v11.Hash, v: (v11.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11.Hash, v: (v11.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11.Hash): AsyncIterable<[k: v11.Hash, v: (v11.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.Hash): Promise<(v13.Proposal | undefined)>
    getMany(block: Block, keys: v13.Hash[]): Promise<(v13.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v13.Hash[]>
    getKeys(block: Block, key: v13.Hash): Promise<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<v13.Hash[]>
    getPairs(block: Block): Promise<[k: v13.Hash, v: (v13.Proposal | undefined)][]>
    getPairs(block: Block, key: v13.Hash): Promise<[k: v13.Hash, v: (v13.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.Hash, v: (v13.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<[k: v13.Hash, v: (v13.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV14  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v14.Hash): Promise<(v14.Proposal | undefined)>
    getMany(block: Block, keys: v14.Hash[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v14.Hash[]>
    getKeys(block: Block, key: v14.Hash): Promise<v14.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v14.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v14.Hash): AsyncIterable<v14.Hash[]>
    getPairs(block: Block): Promise<[k: v14.Hash, v: (v14.Proposal | undefined)][]>
    getPairs(block: Block, key: v14.Hash): Promise<[k: v14.Hash, v: (v14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v14.Hash, v: (v14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v14.Hash): AsyncIterable<[k: v14.Hash, v: (v14.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV15  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v15.Hash): Promise<(v15.Proposal | undefined)>
    getMany(block: Block, keys: v15.Hash[]): Promise<(v15.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v15.Hash[]>
    getKeys(block: Block, key: v15.Hash): Promise<v15.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v15.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v15.Hash): AsyncIterable<v15.Hash[]>
    getPairs(block: Block): Promise<[k: v15.Hash, v: (v15.Proposal | undefined)][]>
    getPairs(block: Block, key: v15.Hash): Promise<[k: v15.Hash, v: (v15.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v15.Hash, v: (v15.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v15.Hash): AsyncIterable<[k: v15.Hash, v: (v15.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV17  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v17.Hash): Promise<(v17.Proposal | undefined)>
    getMany(block: Block, keys: v17.Hash[]): Promise<(v17.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v17.Hash[]>
    getKeys(block: Block, key: v17.Hash): Promise<v17.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v17.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v17.Hash): AsyncIterable<v17.Hash[]>
    getPairs(block: Block): Promise<[k: v17.Hash, v: (v17.Proposal | undefined)][]>
    getPairs(block: Block, key: v17.Hash): Promise<[k: v17.Hash, v: (v17.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v17.Hash, v: (v17.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v17.Hash): AsyncIterable<[k: v17.Hash, v: (v17.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV18  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v18.Hash): Promise<(v18.Proposal | undefined)>
    getMany(block: Block, keys: v18.Hash[]): Promise<(v18.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v18.Hash[]>
    getKeys(block: Block, key: v18.Hash): Promise<v18.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v18.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v18.Hash): AsyncIterable<v18.Hash[]>
    getPairs(block: Block): Promise<[k: v18.Hash, v: (v18.Proposal | undefined)][]>
    getPairs(block: Block, key: v18.Hash): Promise<[k: v18.Hash, v: (v18.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v18.Hash, v: (v18.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v18.Hash): AsyncIterable<[k: v18.Hash, v: (v18.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV23  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v23.Hash): Promise<(v23.Proposal | undefined)>
    getMany(block: Block, keys: v23.Hash[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v23.Hash[]>
    getKeys(block: Block, key: v23.Hash): Promise<v23.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.Hash): AsyncIterable<v23.Hash[]>
    getPairs(block: Block): Promise<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairs(block: Block, key: v23.Hash): Promise<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.Hash): AsyncIterable<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.Hash): Promise<(v24.Proposal | undefined)>
    getMany(block: Block, keys: v24.Hash[]): Promise<(v24.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v24.Hash[]>
    getKeys(block: Block, key: v24.Hash): Promise<v24.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.Hash): AsyncIterable<v24.Hash[]>
    getPairs(block: Block): Promise<[k: v24.Hash, v: (v24.Proposal | undefined)][]>
    getPairs(block: Block, key: v24.Hash): Promise<[k: v24.Hash, v: (v24.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.Hash, v: (v24.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.Hash): AsyncIterable<[k: v24.Hash, v: (v24.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.Hash): Promise<(v25.Proposal | undefined)>
    getMany(block: Block, keys: v25.Hash[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v25.Hash[]>
    getKeys(block: Block, key: v25.Hash): Promise<v25.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.Hash): AsyncIterable<v25.Hash[]>
    getPairs(block: Block): Promise<[k: v25.Hash, v: (v25.Proposal | undefined)][]>
    getPairs(block: Block, key: v25.Hash): Promise<[k: v25.Hash, v: (v25.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.Hash, v: (v25.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.Hash): AsyncIterable<[k: v25.Hash, v: (v25.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v26.Hash): Promise<(v26.Proposal | undefined)>
    getMany(block: Block, keys: v26.Hash[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v26.Hash[]>
    getKeys(block: Block, key: v26.Hash): Promise<v26.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.Hash): AsyncIterable<v26.Hash[]>
    getPairs(block: Block): Promise<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairs(block: Block, key: v26.Hash): Promise<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.Hash): AsyncIterable<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.Hash): Promise<(v28.Proposal | undefined)>
    getMany(block: Block, keys: v28.Hash[]): Promise<(v28.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v28.Hash[]>
    getKeys(block: Block, key: v28.Hash): Promise<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<v28.Hash[]>
    getPairs(block: Block): Promise<[k: v28.Hash, v: (v28.Proposal | undefined)][]>
    getPairs(block: Block, key: v28.Hash): Promise<[k: v28.Hash, v: (v28.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.Hash, v: (v28.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<[k: v28.Hash, v: (v28.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v29.Hash): Promise<(v29.Proposal | undefined)>
    getMany(block: Block, keys: v29.Hash[]): Promise<(v29.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v29.Hash[]>
    getKeys(block: Block, key: v29.Hash): Promise<v29.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v29.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v29.Hash): AsyncIterable<v29.Hash[]>
    getPairs(block: Block): Promise<[k: v29.Hash, v: (v29.Proposal | undefined)][]>
    getPairs(block: Block, key: v29.Hash): Promise<[k: v29.Hash, v: (v29.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v29.Hash, v: (v29.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v29.Hash): AsyncIterable<[k: v29.Hash, v: (v29.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV30  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v30.Hash): Promise<(v30.Proposal | undefined)>
    getMany(block: Block, keys: v30.Hash[]): Promise<(v30.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v30.Hash[]>
    getKeys(block: Block, key: v30.Hash): Promise<v30.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v30.Hash): AsyncIterable<v30.Hash[]>
    getPairs(block: Block): Promise<[k: v30.Hash, v: (v30.Proposal | undefined)][]>
    getPairs(block: Block, key: v30.Hash): Promise<[k: v30.Hash, v: (v30.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30.Hash, v: (v30.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30.Hash): AsyncIterable<[k: v30.Hash, v: (v30.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9050.Hash): Promise<(v9050.Proposal | undefined)>
    getMany(block: Block, keys: v9050.Hash[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v9050.Hash[]>
    getKeys(block: Block, key: v9050.Hash): Promise<v9050.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9050.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9050.Hash): AsyncIterable<v9050.Hash[]>
    getPairs(block: Block): Promise<[k: v9050.Hash, v: (v9050.Proposal | undefined)][]>
    getPairs(block: Block, key: v9050.Hash): Promise<[k: v9050.Hash, v: (v9050.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9050.Hash, v: (v9050.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9050.Hash): AsyncIterable<[k: v9050.Hash, v: (v9050.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9080  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9080.Hash): Promise<(v9080.Proposal | undefined)>
    getMany(block: Block, keys: v9080.Hash[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v9080.Hash[]>
    getKeys(block: Block, key: v9080.Hash): Promise<v9080.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9080.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9080.Hash): AsyncIterable<v9080.Hash[]>
    getPairs(block: Block): Promise<[k: v9080.Hash, v: (v9080.Proposal | undefined)][]>
    getPairs(block: Block, key: v9080.Hash): Promise<[k: v9080.Hash, v: (v9080.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9080.Hash, v: (v9080.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9080.Hash): AsyncIterable<[k: v9080.Hash, v: (v9080.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.Hash): Promise<(v9090.Proposal | undefined)>
    getMany(block: Block, keys: v9090.Hash[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v9090.Hash[]>
    getKeys(block: Block, key: v9090.Hash): Promise<v9090.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.Hash): AsyncIterable<v9090.Hash[]>
    getPairs(block: Block): Promise<[k: v9090.Hash, v: (v9090.Proposal | undefined)][]>
    getPairs(block: Block, key: v9090.Hash): Promise<[k: v9090.Hash, v: (v9090.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.Hash, v: (v9090.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.Hash): AsyncIterable<[k: v9090.Hash, v: (v9090.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9100.Hash): Promise<(v9100.Proposal | undefined)>
    getMany(block: Block, keys: v9100.Hash[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v9100.Hash[]>
    getKeys(block: Block, key: v9100.Hash): Promise<v9100.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9100.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9100.Hash): AsyncIterable<v9100.Hash[]>
    getPairs(block: Block): Promise<[k: v9100.Hash, v: (v9100.Proposal | undefined)][]>
    getPairs(block: Block, key: v9100.Hash): Promise<[k: v9100.Hash, v: (v9100.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9100.Hash, v: (v9100.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9100.Hash): AsyncIterable<[k: v9100.Hash, v: (v9100.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.H256): Promise<(v9110.Call | undefined)>
    getMany(block: Block, keys: v9110.H256[]): Promise<(v9110.Call | undefined)[]>
    getKeys(block: Block): Promise<v9110.H256[]>
    getKeys(block: Block, key: v9110.H256): Promise<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<v9110.H256[]>
    getPairs(block: Block): Promise<[k: v9110.H256, v: (v9110.Call | undefined)][]>
    getPairs(block: Block, key: v9110.H256): Promise<[k: v9110.H256, v: (v9110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.H256, v: (v9110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<[k: v9110.H256, v: (v9110.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9140.H256): Promise<(v9140.Call | undefined)>
    getMany(block: Block, keys: v9140.H256[]): Promise<(v9140.Call | undefined)[]>
    getKeys(block: Block): Promise<v9140.H256[]>
    getKeys(block: Block, key: v9140.H256): Promise<v9140.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9140.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9140.H256): AsyncIterable<v9140.H256[]>
    getPairs(block: Block): Promise<[k: v9140.H256, v: (v9140.Call | undefined)][]>
    getPairs(block: Block, key: v9140.H256): Promise<[k: v9140.H256, v: (v9140.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9140.H256, v: (v9140.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9140.H256): AsyncIterable<[k: v9140.H256, v: (v9140.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9170.H256): Promise<(v9170.Call | undefined)>
    getMany(block: Block, keys: v9170.H256[]): Promise<(v9170.Call | undefined)[]>
    getKeys(block: Block): Promise<v9170.H256[]>
    getKeys(block: Block, key: v9170.H256): Promise<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<v9170.H256[]>
    getPairs(block: Block): Promise<[k: v9170.H256, v: (v9170.Call | undefined)][]>
    getPairs(block: Block, key: v9170.H256): Promise<[k: v9170.H256, v: (v9170.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9170.H256, v: (v9170.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<[k: v9170.H256, v: (v9170.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9180.H256): Promise<(v9180.Call | undefined)>
    getMany(block: Block, keys: v9180.H256[]): Promise<(v9180.Call | undefined)[]>
    getKeys(block: Block): Promise<v9180.H256[]>
    getKeys(block: Block, key: v9180.H256): Promise<v9180.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9180.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9180.H256): AsyncIterable<v9180.H256[]>
    getPairs(block: Block): Promise<[k: v9180.H256, v: (v9180.Call | undefined)][]>
    getPairs(block: Block, key: v9180.H256): Promise<[k: v9180.H256, v: (v9180.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9180.H256, v: (v9180.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9180.H256): AsyncIterable<[k: v9180.H256, v: (v9180.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9190  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9190.H256): Promise<(v9190.Call | undefined)>
    getMany(block: Block, keys: v9190.H256[]): Promise<(v9190.Call | undefined)[]>
    getKeys(block: Block): Promise<v9190.H256[]>
    getKeys(block: Block, key: v9190.H256): Promise<v9190.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9190.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9190.H256): AsyncIterable<v9190.H256[]>
    getPairs(block: Block): Promise<[k: v9190.H256, v: (v9190.Call | undefined)][]>
    getPairs(block: Block, key: v9190.H256): Promise<[k: v9190.H256, v: (v9190.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9190.H256, v: (v9190.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9190.H256): AsyncIterable<[k: v9190.H256, v: (v9190.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9220.H256): Promise<(v9220.Call | undefined)>
    getMany(block: Block, keys: v9220.H256[]): Promise<(v9220.Call | undefined)[]>
    getKeys(block: Block): Promise<v9220.H256[]>
    getKeys(block: Block, key: v9220.H256): Promise<v9220.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9220.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9220.H256): AsyncIterable<v9220.H256[]>
    getPairs(block: Block): Promise<[k: v9220.H256, v: (v9220.Call | undefined)][]>
    getPairs(block: Block, key: v9220.H256): Promise<[k: v9220.H256, v: (v9220.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9220.H256, v: (v9220.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9220.H256): AsyncIterable<[k: v9220.H256, v: (v9220.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9230  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9230.H256): Promise<(v9230.Call | undefined)>
    getMany(block: Block, keys: v9230.H256[]): Promise<(v9230.Call | undefined)[]>
    getKeys(block: Block): Promise<v9230.H256[]>
    getKeys(block: Block, key: v9230.H256): Promise<v9230.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9230.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9230.H256): AsyncIterable<v9230.H256[]>
    getPairs(block: Block): Promise<[k: v9230.H256, v: (v9230.Call | undefined)][]>
    getPairs(block: Block, key: v9230.H256): Promise<[k: v9230.H256, v: (v9230.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9230.H256, v: (v9230.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9230.H256): AsyncIterable<[k: v9230.H256, v: (v9230.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9250  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9250.H256): Promise<(v9250.Call | undefined)>
    getMany(block: Block, keys: v9250.H256[]): Promise<(v9250.Call | undefined)[]>
    getKeys(block: Block): Promise<v9250.H256[]>
    getKeys(block: Block, key: v9250.H256): Promise<v9250.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9250.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9250.H256): AsyncIterable<v9250.H256[]>
    getPairs(block: Block): Promise<[k: v9250.H256, v: (v9250.Call | undefined)][]>
    getPairs(block: Block, key: v9250.H256): Promise<[k: v9250.H256, v: (v9250.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9250.H256, v: (v9250.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9250.H256): AsyncIterable<[k: v9250.H256, v: (v9250.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9270  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9270.H256): Promise<(v9270.Call | undefined)>
    getMany(block: Block, keys: v9270.H256[]): Promise<(v9270.Call | undefined)[]>
    getKeys(block: Block): Promise<v9270.H256[]>
    getKeys(block: Block, key: v9270.H256): Promise<v9270.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9270.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9270.H256): AsyncIterable<v9270.H256[]>
    getPairs(block: Block): Promise<[k: v9270.H256, v: (v9270.Call | undefined)][]>
    getPairs(block: Block, key: v9270.H256): Promise<[k: v9270.H256, v: (v9270.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9270.H256, v: (v9270.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9270.H256): AsyncIterable<[k: v9270.H256, v: (v9270.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9280  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9280.H256): Promise<(v9280.Call | undefined)>
    getMany(block: Block, keys: v9280.H256[]): Promise<(v9280.Call | undefined)[]>
    getKeys(block: Block): Promise<v9280.H256[]>
    getKeys(block: Block, key: v9280.H256): Promise<v9280.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9280.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9280.H256): AsyncIterable<v9280.H256[]>
    getPairs(block: Block): Promise<[k: v9280.H256, v: (v9280.Call | undefined)][]>
    getPairs(block: Block, key: v9280.H256): Promise<[k: v9280.H256, v: (v9280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9280.H256, v: (v9280.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9280.H256): AsyncIterable<[k: v9280.H256, v: (v9280.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9291  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9291.H256): Promise<(v9291.Call | undefined)>
    getMany(block: Block, keys: v9291.H256[]): Promise<(v9291.Call | undefined)[]>
    getKeys(block: Block): Promise<v9291.H256[]>
    getKeys(block: Block, key: v9291.H256): Promise<v9291.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9291.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9291.H256): AsyncIterable<v9291.H256[]>
    getPairs(block: Block): Promise<[k: v9291.H256, v: (v9291.Call | undefined)][]>
    getPairs(block: Block, key: v9291.H256): Promise<[k: v9291.H256, v: (v9291.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9291.H256, v: (v9291.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9291.H256): AsyncIterable<[k: v9291.H256, v: (v9291.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.H256): Promise<(v9300.Call | undefined)>
    getMany(block: Block, keys: v9300.H256[]): Promise<(v9300.Call | undefined)[]>
    getKeys(block: Block): Promise<v9300.H256[]>
    getKeys(block: Block, key: v9300.H256): Promise<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<v9300.H256[]>
    getPairs(block: Block): Promise<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairs(block: Block, key: v9300.H256): Promise<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.H256, v: (v9300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.H256): AsyncIterable<[k: v9300.H256, v: (v9300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9340.H256): Promise<(v9340.Call | undefined)>
    getMany(block: Block, keys: v9340.H256[]): Promise<(v9340.Call | undefined)[]>
    getKeys(block: Block): Promise<v9340.H256[]>
    getKeys(block: Block, key: v9340.H256): Promise<v9340.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.H256): AsyncIterable<v9340.H256[]>
    getPairs(block: Block): Promise<[k: v9340.H256, v: (v9340.Call | undefined)][]>
    getPairs(block: Block, key: v9340.H256): Promise<[k: v9340.H256, v: (v9340.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.H256, v: (v9340.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.H256): AsyncIterable<[k: v9340.H256, v: (v9340.Call | undefined)][]>
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
export interface ProposalOfV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9430.H256): Promise<(v9430.Call | undefined)>
    getMany(block: Block, keys: v9430.H256[]): Promise<(v9430.Call | undefined)[]>
    getKeys(block: Block): Promise<v9430.H256[]>
    getKeys(block: Block, key: v9430.H256): Promise<v9430.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9430.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9430.H256): AsyncIterable<v9430.H256[]>
    getPairs(block: Block): Promise<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairs(block: Block, key: v9430.H256): Promise<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9430.H256, v: (v9430.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9430.H256): AsyncIterable<[k: v9430.H256, v: (v9430.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v0: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV0,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v0: new StorageType('Council.Members', 'Default', [], sts.array(() => v0.AccountId)) as MembersV0,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId[]
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}
