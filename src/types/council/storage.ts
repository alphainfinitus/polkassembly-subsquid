import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v2800 from '../v2800'
import * as v10101 from '../v10101'
import * as v10110 from '../v10110'
import * as v10300 from '../v10300'
import * as v10310 from '../v10310'
import * as v10400 from '../v10400'
import * as v10500 from '../v10500'
import * as v10620 from '../v10620'
import * as v10700 from '../v10700'
import * as v10710 from '../v10710'
import * as v10720 from '../v10720'
import * as v10740 from '../v10740'
import * as v10750 from '../v10750'
import * as v10801 from '../v10801'
import * as v10890 from '../v10890'
import * as v11000 from '../v11000'
import * as v11110 from '../v11110'
import * as v11210 from '../v11210'
import * as v11300 from '../v11300'
import * as v11401 from '../v11401'
import * as v11405 from '../v11405'
import * as v11504 from '../v11504'
import * as v11602 from '../v11602'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v25: new StorageType('Council.ProposalOf', 'Optional', [v25.Hash], v25.Proposal) as ProposalOfV25,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v2800: new StorageType('Council.ProposalOf', 'Optional', [v2800.H256], v2800.Call) as ProposalOfV2800,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10101: new StorageType('Council.ProposalOf', 'Optional', [v10101.H256], v10101.Call) as ProposalOfV10101,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10110: new StorageType('Council.ProposalOf', 'Optional', [v10110.H256], v10110.Call) as ProposalOfV10110,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10300: new StorageType('Council.ProposalOf', 'Optional', [v10300.H256], v10300.Call) as ProposalOfV10300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10310: new StorageType('Council.ProposalOf', 'Optional', [v10310.H256], v10310.Call) as ProposalOfV10310,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10400: new StorageType('Council.ProposalOf', 'Optional', [v10400.H256], v10400.Call) as ProposalOfV10400,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10500: new StorageType('Council.ProposalOf', 'Optional', [v10500.H256], v10500.Call) as ProposalOfV10500,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10620: new StorageType('Council.ProposalOf', 'Optional', [v10620.H256], v10620.Call) as ProposalOfV10620,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10700: new StorageType('Council.ProposalOf', 'Optional', [v10700.H256], v10700.Call) as ProposalOfV10700,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10710: new StorageType('Council.ProposalOf', 'Optional', [v10710.H256], v10710.Call) as ProposalOfV10710,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10720: new StorageType('Council.ProposalOf', 'Optional', [v10720.H256], v10720.Call) as ProposalOfV10720,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10740: new StorageType('Council.ProposalOf', 'Optional', [v10740.H256], v10740.Call) as ProposalOfV10740,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10750: new StorageType('Council.ProposalOf', 'Optional', [v10750.H256], v10750.Call) as ProposalOfV10750,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10801: new StorageType('Council.ProposalOf', 'Optional', [v10801.H256], v10801.Call) as ProposalOfV10801,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10890: new StorageType('Council.ProposalOf', 'Optional', [v10890.H256], v10890.Call) as ProposalOfV10890,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11000: new StorageType('Council.ProposalOf', 'Optional', [v11000.H256], v11000.Call) as ProposalOfV11000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11110: new StorageType('Council.ProposalOf', 'Optional', [v11110.H256], v11110.Call) as ProposalOfV11110,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11210: new StorageType('Council.ProposalOf', 'Optional', [v11210.H256], v11210.Call) as ProposalOfV11210,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11300: new StorageType('Council.ProposalOf', 'Optional', [v11300.H256], v11300.Call) as ProposalOfV11300,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11401: new StorageType('Council.ProposalOf', 'Optional', [v11401.H256], v11401.Call) as ProposalOfV11401,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11405: new StorageType('Council.ProposalOf', 'Optional', [v11405.H256], v11405.Call) as ProposalOfV11405,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11504: new StorageType('Council.ProposalOf', 'Optional', [v11504.H256], v11504.Call) as ProposalOfV11504,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v11602: new StorageType('Council.ProposalOf', 'Optional', [v11602.H256], v11602.Call) as ProposalOfV11602,
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
export interface ProposalOfV2800  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2800.H256): Promise<(v2800.Call | undefined)>
    getMany(block: Block, keys: v2800.H256[]): Promise<(v2800.Call | undefined)[]>
    getKeys(block: Block): Promise<v2800.H256[]>
    getKeys(block: Block, key: v2800.H256): Promise<v2800.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2800.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2800.H256): AsyncIterable<v2800.H256[]>
    getPairs(block: Block): Promise<[k: v2800.H256, v: (v2800.Call | undefined)][]>
    getPairs(block: Block, key: v2800.H256): Promise<[k: v2800.H256, v: (v2800.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2800.H256, v: (v2800.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2800.H256): AsyncIterable<[k: v2800.H256, v: (v2800.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10101  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10101.H256): Promise<(v10101.Call | undefined)>
    getMany(block: Block, keys: v10101.H256[]): Promise<(v10101.Call | undefined)[]>
    getKeys(block: Block): Promise<v10101.H256[]>
    getKeys(block: Block, key: v10101.H256): Promise<v10101.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10101.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10101.H256): AsyncIterable<v10101.H256[]>
    getPairs(block: Block): Promise<[k: v10101.H256, v: (v10101.Call | undefined)][]>
    getPairs(block: Block, key: v10101.H256): Promise<[k: v10101.H256, v: (v10101.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10101.H256, v: (v10101.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10101.H256): AsyncIterable<[k: v10101.H256, v: (v10101.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10110.H256): Promise<(v10110.Call | undefined)>
    getMany(block: Block, keys: v10110.H256[]): Promise<(v10110.Call | undefined)[]>
    getKeys(block: Block): Promise<v10110.H256[]>
    getKeys(block: Block, key: v10110.H256): Promise<v10110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10110.H256): AsyncIterable<v10110.H256[]>
    getPairs(block: Block): Promise<[k: v10110.H256, v: (v10110.Call | undefined)][]>
    getPairs(block: Block, key: v10110.H256): Promise<[k: v10110.H256, v: (v10110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10110.H256, v: (v10110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10110.H256): AsyncIterable<[k: v10110.H256, v: (v10110.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10300.H256): Promise<(v10300.Call | undefined)>
    getMany(block: Block, keys: v10300.H256[]): Promise<(v10300.Call | undefined)[]>
    getKeys(block: Block): Promise<v10300.H256[]>
    getKeys(block: Block, key: v10300.H256): Promise<v10300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10300.H256): AsyncIterable<v10300.H256[]>
    getPairs(block: Block): Promise<[k: v10300.H256, v: (v10300.Call | undefined)][]>
    getPairs(block: Block, key: v10300.H256): Promise<[k: v10300.H256, v: (v10300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10300.H256, v: (v10300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10300.H256): AsyncIterable<[k: v10300.H256, v: (v10300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10310  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10310.H256): Promise<(v10310.Call | undefined)>
    getMany(block: Block, keys: v10310.H256[]): Promise<(v10310.Call | undefined)[]>
    getKeys(block: Block): Promise<v10310.H256[]>
    getKeys(block: Block, key: v10310.H256): Promise<v10310.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10310.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10310.H256): AsyncIterable<v10310.H256[]>
    getPairs(block: Block): Promise<[k: v10310.H256, v: (v10310.Call | undefined)][]>
    getPairs(block: Block, key: v10310.H256): Promise<[k: v10310.H256, v: (v10310.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10310.H256, v: (v10310.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10310.H256): AsyncIterable<[k: v10310.H256, v: (v10310.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10400.H256): Promise<(v10400.Call | undefined)>
    getMany(block: Block, keys: v10400.H256[]): Promise<(v10400.Call | undefined)[]>
    getKeys(block: Block): Promise<v10400.H256[]>
    getKeys(block: Block, key: v10400.H256): Promise<v10400.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10400.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10400.H256): AsyncIterable<v10400.H256[]>
    getPairs(block: Block): Promise<[k: v10400.H256, v: (v10400.Call | undefined)][]>
    getPairs(block: Block, key: v10400.H256): Promise<[k: v10400.H256, v: (v10400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10400.H256, v: (v10400.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10400.H256): AsyncIterable<[k: v10400.H256, v: (v10400.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10500.H256): Promise<(v10500.Call | undefined)>
    getMany(block: Block, keys: v10500.H256[]): Promise<(v10500.Call | undefined)[]>
    getKeys(block: Block): Promise<v10500.H256[]>
    getKeys(block: Block, key: v10500.H256): Promise<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<v10500.H256[]>
    getPairs(block: Block): Promise<[k: v10500.H256, v: (v10500.Call | undefined)][]>
    getPairs(block: Block, key: v10500.H256): Promise<[k: v10500.H256, v: (v10500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10500.H256, v: (v10500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10500.H256): AsyncIterable<[k: v10500.H256, v: (v10500.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10620  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10620.H256): Promise<(v10620.Call | undefined)>
    getMany(block: Block, keys: v10620.H256[]): Promise<(v10620.Call | undefined)[]>
    getKeys(block: Block): Promise<v10620.H256[]>
    getKeys(block: Block, key: v10620.H256): Promise<v10620.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10620.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10620.H256): AsyncIterable<v10620.H256[]>
    getPairs(block: Block): Promise<[k: v10620.H256, v: (v10620.Call | undefined)][]>
    getPairs(block: Block, key: v10620.H256): Promise<[k: v10620.H256, v: (v10620.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10620.H256, v: (v10620.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10620.H256): AsyncIterable<[k: v10620.H256, v: (v10620.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10700  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10700.H256): Promise<(v10700.Call | undefined)>
    getMany(block: Block, keys: v10700.H256[]): Promise<(v10700.Call | undefined)[]>
    getKeys(block: Block): Promise<v10700.H256[]>
    getKeys(block: Block, key: v10700.H256): Promise<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10700.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<v10700.H256[]>
    getPairs(block: Block): Promise<[k: v10700.H256, v: (v10700.Call | undefined)][]>
    getPairs(block: Block, key: v10700.H256): Promise<[k: v10700.H256, v: (v10700.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10700.H256, v: (v10700.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10700.H256): AsyncIterable<[k: v10700.H256, v: (v10700.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10710  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10710.H256): Promise<(v10710.Call | undefined)>
    getMany(block: Block, keys: v10710.H256[]): Promise<(v10710.Call | undefined)[]>
    getKeys(block: Block): Promise<v10710.H256[]>
    getKeys(block: Block, key: v10710.H256): Promise<v10710.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10710.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10710.H256): AsyncIterable<v10710.H256[]>
    getPairs(block: Block): Promise<[k: v10710.H256, v: (v10710.Call | undefined)][]>
    getPairs(block: Block, key: v10710.H256): Promise<[k: v10710.H256, v: (v10710.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10710.H256, v: (v10710.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10710.H256): AsyncIterable<[k: v10710.H256, v: (v10710.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10720  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10720.H256): Promise<(v10720.Call | undefined)>
    getMany(block: Block, keys: v10720.H256[]): Promise<(v10720.Call | undefined)[]>
    getKeys(block: Block): Promise<v10720.H256[]>
    getKeys(block: Block, key: v10720.H256): Promise<v10720.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10720.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10720.H256): AsyncIterable<v10720.H256[]>
    getPairs(block: Block): Promise<[k: v10720.H256, v: (v10720.Call | undefined)][]>
    getPairs(block: Block, key: v10720.H256): Promise<[k: v10720.H256, v: (v10720.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10720.H256, v: (v10720.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10720.H256): AsyncIterable<[k: v10720.H256, v: (v10720.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10740  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10740.H256): Promise<(v10740.Call | undefined)>
    getMany(block: Block, keys: v10740.H256[]): Promise<(v10740.Call | undefined)[]>
    getKeys(block: Block): Promise<v10740.H256[]>
    getKeys(block: Block, key: v10740.H256): Promise<v10740.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10740.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10740.H256): AsyncIterable<v10740.H256[]>
    getPairs(block: Block): Promise<[k: v10740.H256, v: (v10740.Call | undefined)][]>
    getPairs(block: Block, key: v10740.H256): Promise<[k: v10740.H256, v: (v10740.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10740.H256, v: (v10740.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10740.H256): AsyncIterable<[k: v10740.H256, v: (v10740.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10750  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10750.H256): Promise<(v10750.Call | undefined)>
    getMany(block: Block, keys: v10750.H256[]): Promise<(v10750.Call | undefined)[]>
    getKeys(block: Block): Promise<v10750.H256[]>
    getKeys(block: Block, key: v10750.H256): Promise<v10750.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10750.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10750.H256): AsyncIterable<v10750.H256[]>
    getPairs(block: Block): Promise<[k: v10750.H256, v: (v10750.Call | undefined)][]>
    getPairs(block: Block, key: v10750.H256): Promise<[k: v10750.H256, v: (v10750.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10750.H256, v: (v10750.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10750.H256): AsyncIterable<[k: v10750.H256, v: (v10750.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10801  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10801.H256): Promise<(v10801.Call | undefined)>
    getMany(block: Block, keys: v10801.H256[]): Promise<(v10801.Call | undefined)[]>
    getKeys(block: Block): Promise<v10801.H256[]>
    getKeys(block: Block, key: v10801.H256): Promise<v10801.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10801.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10801.H256): AsyncIterable<v10801.H256[]>
    getPairs(block: Block): Promise<[k: v10801.H256, v: (v10801.Call | undefined)][]>
    getPairs(block: Block, key: v10801.H256): Promise<[k: v10801.H256, v: (v10801.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10801.H256, v: (v10801.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10801.H256): AsyncIterable<[k: v10801.H256, v: (v10801.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10890  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10890.H256): Promise<(v10890.Call | undefined)>
    getMany(block: Block, keys: v10890.H256[]): Promise<(v10890.Call | undefined)[]>
    getKeys(block: Block): Promise<v10890.H256[]>
    getKeys(block: Block, key: v10890.H256): Promise<v10890.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10890.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10890.H256): AsyncIterable<v10890.H256[]>
    getPairs(block: Block): Promise<[k: v10890.H256, v: (v10890.Call | undefined)][]>
    getPairs(block: Block, key: v10890.H256): Promise<[k: v10890.H256, v: (v10890.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10890.H256, v: (v10890.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10890.H256): AsyncIterable<[k: v10890.H256, v: (v10890.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11000.H256): Promise<(v11000.Call | undefined)>
    getMany(block: Block, keys: v11000.H256[]): Promise<(v11000.Call | undefined)[]>
    getKeys(block: Block): Promise<v11000.H256[]>
    getKeys(block: Block, key: v11000.H256): Promise<v11000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11000.H256): AsyncIterable<v11000.H256[]>
    getPairs(block: Block): Promise<[k: v11000.H256, v: (v11000.Call | undefined)][]>
    getPairs(block: Block, key: v11000.H256): Promise<[k: v11000.H256, v: (v11000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11000.H256, v: (v11000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11000.H256): AsyncIterable<[k: v11000.H256, v: (v11000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11110.H256): Promise<(v11110.Call | undefined)>
    getMany(block: Block, keys: v11110.H256[]): Promise<(v11110.Call | undefined)[]>
    getKeys(block: Block): Promise<v11110.H256[]>
    getKeys(block: Block, key: v11110.H256): Promise<v11110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11110.H256): AsyncIterable<v11110.H256[]>
    getPairs(block: Block): Promise<[k: v11110.H256, v: (v11110.Call | undefined)][]>
    getPairs(block: Block, key: v11110.H256): Promise<[k: v11110.H256, v: (v11110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11110.H256, v: (v11110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11110.H256): AsyncIterable<[k: v11110.H256, v: (v11110.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11210  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11210.H256): Promise<(v11210.Call | undefined)>
    getMany(block: Block, keys: v11210.H256[]): Promise<(v11210.Call | undefined)[]>
    getKeys(block: Block): Promise<v11210.H256[]>
    getKeys(block: Block, key: v11210.H256): Promise<v11210.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11210.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11210.H256): AsyncIterable<v11210.H256[]>
    getPairs(block: Block): Promise<[k: v11210.H256, v: (v11210.Call | undefined)][]>
    getPairs(block: Block, key: v11210.H256): Promise<[k: v11210.H256, v: (v11210.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11210.H256, v: (v11210.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11210.H256): AsyncIterable<[k: v11210.H256, v: (v11210.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11300.H256): Promise<(v11300.Call | undefined)>
    getMany(block: Block, keys: v11300.H256[]): Promise<(v11300.Call | undefined)[]>
    getKeys(block: Block): Promise<v11300.H256[]>
    getKeys(block: Block, key: v11300.H256): Promise<v11300.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11300.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11300.H256): AsyncIterable<v11300.H256[]>
    getPairs(block: Block): Promise<[k: v11300.H256, v: (v11300.Call | undefined)][]>
    getPairs(block: Block, key: v11300.H256): Promise<[k: v11300.H256, v: (v11300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11300.H256, v: (v11300.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11300.H256): AsyncIterable<[k: v11300.H256, v: (v11300.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11401  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11401.H256): Promise<(v11401.Call | undefined)>
    getMany(block: Block, keys: v11401.H256[]): Promise<(v11401.Call | undefined)[]>
    getKeys(block: Block): Promise<v11401.H256[]>
    getKeys(block: Block, key: v11401.H256): Promise<v11401.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11401.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11401.H256): AsyncIterable<v11401.H256[]>
    getPairs(block: Block): Promise<[k: v11401.H256, v: (v11401.Call | undefined)][]>
    getPairs(block: Block, key: v11401.H256): Promise<[k: v11401.H256, v: (v11401.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11401.H256, v: (v11401.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11401.H256): AsyncIterable<[k: v11401.H256, v: (v11401.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11405  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11405.H256): Promise<(v11405.Call | undefined)>
    getMany(block: Block, keys: v11405.H256[]): Promise<(v11405.Call | undefined)[]>
    getKeys(block: Block): Promise<v11405.H256[]>
    getKeys(block: Block, key: v11405.H256): Promise<v11405.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11405.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11405.H256): AsyncIterable<v11405.H256[]>
    getPairs(block: Block): Promise<[k: v11405.H256, v: (v11405.Call | undefined)][]>
    getPairs(block: Block, key: v11405.H256): Promise<[k: v11405.H256, v: (v11405.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11405.H256, v: (v11405.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11405.H256): AsyncIterable<[k: v11405.H256, v: (v11405.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11504  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11504.H256): Promise<(v11504.Call | undefined)>
    getMany(block: Block, keys: v11504.H256[]): Promise<(v11504.Call | undefined)[]>
    getKeys(block: Block): Promise<v11504.H256[]>
    getKeys(block: Block, key: v11504.H256): Promise<v11504.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11504.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11504.H256): AsyncIterable<v11504.H256[]>
    getPairs(block: Block): Promise<[k: v11504.H256, v: (v11504.Call | undefined)][]>
    getPairs(block: Block, key: v11504.H256): Promise<[k: v11504.H256, v: (v11504.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11504.H256, v: (v11504.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11504.H256): AsyncIterable<[k: v11504.H256, v: (v11504.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV11602  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v11602.H256): Promise<(v11602.Call | undefined)>
    getMany(block: Block, keys: v11602.H256[]): Promise<(v11602.Call | undefined)[]>
    getKeys(block: Block): Promise<v11602.H256[]>
    getKeys(block: Block, key: v11602.H256): Promise<v11602.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11602.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v11602.H256): AsyncIterable<v11602.H256[]>
    getPairs(block: Block): Promise<[k: v11602.H256, v: (v11602.Call | undefined)][]>
    getPairs(block: Block, key: v11602.H256): Promise<[k: v11602.H256, v: (v11602.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11602.H256, v: (v11602.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11602.H256): AsyncIterable<[k: v11602.H256, v: (v11602.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v25: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV25,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v25: new StorageType('Council.Members', 'Default', [], sts.array(() => v25.AccountId)) as MembersV25,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v25.AccountId[]
    get(block: Block): Promise<(v25.AccountId[] | undefined)>
}
