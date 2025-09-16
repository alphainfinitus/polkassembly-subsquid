import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV21 from '../integriteeParachainV21'
import * as integriteeParachainV22 from '../integriteeParachainV22'
import * as integriteeParachainV26 from '../integriteeParachainV26'
import * as integriteeParachainV28 from '../integriteeParachainV28'
import * as integriteeParachainV29 from '../integriteeParachainV29'
import * as integriteeParachainV35 from '../integriteeParachainV35'
import * as integriteeParachainV37 from '../integriteeParachainV37'
import * as integriteeParachainV41 from '../integriteeParachainV41'
import * as integriteeParachainV42 from '../integriteeParachainV42'
import * as integriteeParachainV520 from '../integriteeParachainV520'
import * as integriteeParachainV540 from '../integriteeParachainV540'
import * as v551 from '../v551'
import * as v552 from '../v552'
import * as v560 from '../v560'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV21: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV21.H256], integriteeParachainV21.Call) as ProposalOfIntegriteeParachainV21,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV22: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV22.H256], integriteeParachainV22.Call) as ProposalOfIntegriteeParachainV22,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV26: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV26.H256], integriteeParachainV26.Call) as ProposalOfIntegriteeParachainV26,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV28: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV28.H256], integriteeParachainV28.Call) as ProposalOfIntegriteeParachainV28,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV29: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV29.H256], integriteeParachainV29.Call) as ProposalOfIntegriteeParachainV29,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV35: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV35.H256], integriteeParachainV35.Call) as ProposalOfIntegriteeParachainV35,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV37: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV37.H256], integriteeParachainV37.Call) as ProposalOfIntegriteeParachainV37,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV41: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV41.H256], integriteeParachainV41.Call) as ProposalOfIntegriteeParachainV41,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV42: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV42.H256], integriteeParachainV42.Call) as ProposalOfIntegriteeParachainV42,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV520: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV520.H256], integriteeParachainV520.Call) as ProposalOfIntegriteeParachainV520,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    integriteeParachainV540: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [integriteeParachainV540.H256], integriteeParachainV540.Call) as ProposalOfIntegriteeParachainV540,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v551: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v551.H256], v551.Call) as ProposalOfV551,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v552: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v552.H256], v552.Call) as ProposalOfV552,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v560: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v560.H256], v560.Call) as ProposalOfV560,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV21.H256): Promise<(integriteeParachainV21.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV21.H256[]): Promise<(integriteeParachainV21.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV21.H256[]>
    getKeys(block: Block, key: integriteeParachainV21.H256): Promise<integriteeParachainV21.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV21.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV21.H256): AsyncIterable<integriteeParachainV21.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV21.H256): Promise<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV21.H256): AsyncIterable<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV22.H256): Promise<(integriteeParachainV22.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV22.H256[]): Promise<(integriteeParachainV22.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV22.H256[]>
    getKeys(block: Block, key: integriteeParachainV22.H256): Promise<integriteeParachainV22.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV22.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV22.H256): AsyncIterable<integriteeParachainV22.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV22.H256, v: (integriteeParachainV22.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV22.H256): Promise<[k: integriteeParachainV22.H256, v: (integriteeParachainV22.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV22.H256, v: (integriteeParachainV22.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV22.H256): AsyncIterable<[k: integriteeParachainV22.H256, v: (integriteeParachainV22.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV26.H256): Promise<(integriteeParachainV26.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV26.H256[]): Promise<(integriteeParachainV26.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV26.H256[]>
    getKeys(block: Block, key: integriteeParachainV26.H256): Promise<integriteeParachainV26.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV26.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV26.H256): AsyncIterable<integriteeParachainV26.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV26.H256, v: (integriteeParachainV26.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV26.H256): Promise<[k: integriteeParachainV26.H256, v: (integriteeParachainV26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV26.H256, v: (integriteeParachainV26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV26.H256): AsyncIterable<[k: integriteeParachainV26.H256, v: (integriteeParachainV26.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV28.H256): Promise<(integriteeParachainV28.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV28.H256[]): Promise<(integriteeParachainV28.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV28.H256[]>
    getKeys(block: Block, key: integriteeParachainV28.H256): Promise<integriteeParachainV28.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV28.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV28.H256): AsyncIterable<integriteeParachainV28.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV28.H256): Promise<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV28.H256): AsyncIterable<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV29.H256): Promise<(integriteeParachainV29.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV29.H256[]): Promise<(integriteeParachainV29.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV29.H256[]>
    getKeys(block: Block, key: integriteeParachainV29.H256): Promise<integriteeParachainV29.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV29.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV29.H256): AsyncIterable<integriteeParachainV29.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV29.H256, v: (integriteeParachainV29.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV29.H256): Promise<[k: integriteeParachainV29.H256, v: (integriteeParachainV29.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV29.H256, v: (integriteeParachainV29.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV29.H256): AsyncIterable<[k: integriteeParachainV29.H256, v: (integriteeParachainV29.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV35  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV35.H256): Promise<(integriteeParachainV35.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV35.H256[]): Promise<(integriteeParachainV35.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV35.H256[]>
    getKeys(block: Block, key: integriteeParachainV35.H256): Promise<integriteeParachainV35.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV35.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV35.H256): AsyncIterable<integriteeParachainV35.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV35.H256, v: (integriteeParachainV35.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV35.H256): Promise<[k: integriteeParachainV35.H256, v: (integriteeParachainV35.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV35.H256, v: (integriteeParachainV35.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV35.H256): AsyncIterable<[k: integriteeParachainV35.H256, v: (integriteeParachainV35.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV37  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV37.H256): Promise<(integriteeParachainV37.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV37.H256[]): Promise<(integriteeParachainV37.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV37.H256[]>
    getKeys(block: Block, key: integriteeParachainV37.H256): Promise<integriteeParachainV37.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV37.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV37.H256): AsyncIterable<integriteeParachainV37.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV37.H256, v: (integriteeParachainV37.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV37.H256): Promise<[k: integriteeParachainV37.H256, v: (integriteeParachainV37.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV37.H256, v: (integriteeParachainV37.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV37.H256): AsyncIterable<[k: integriteeParachainV37.H256, v: (integriteeParachainV37.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV41  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV41.H256): Promise<(integriteeParachainV41.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV41.H256[]): Promise<(integriteeParachainV41.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV41.H256[]>
    getKeys(block: Block, key: integriteeParachainV41.H256): Promise<integriteeParachainV41.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV41.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV41.H256): AsyncIterable<integriteeParachainV41.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV41.H256, v: (integriteeParachainV41.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV41.H256): Promise<[k: integriteeParachainV41.H256, v: (integriteeParachainV41.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV41.H256, v: (integriteeParachainV41.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV41.H256): AsyncIterable<[k: integriteeParachainV41.H256, v: (integriteeParachainV41.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV42.H256): Promise<(integriteeParachainV42.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV42.H256[]): Promise<(integriteeParachainV42.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV42.H256[]>
    getKeys(block: Block, key: integriteeParachainV42.H256): Promise<integriteeParachainV42.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV42.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV42.H256): AsyncIterable<integriteeParachainV42.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV42.H256, v: (integriteeParachainV42.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV42.H256): Promise<[k: integriteeParachainV42.H256, v: (integriteeParachainV42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV42.H256, v: (integriteeParachainV42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV42.H256): AsyncIterable<[k: integriteeParachainV42.H256, v: (integriteeParachainV42.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV520  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV520.H256): Promise<(integriteeParachainV520.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV520.H256[]): Promise<(integriteeParachainV520.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV520.H256[]>
    getKeys(block: Block, key: integriteeParachainV520.H256): Promise<integriteeParachainV520.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV520.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV520.H256): AsyncIterable<integriteeParachainV520.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV520.H256, v: (integriteeParachainV520.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV520.H256): Promise<[k: integriteeParachainV520.H256, v: (integriteeParachainV520.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV520.H256, v: (integriteeParachainV520.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV520.H256): AsyncIterable<[k: integriteeParachainV520.H256, v: (integriteeParachainV520.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfIntegriteeParachainV540  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV540.H256): Promise<(integriteeParachainV540.Call | undefined)>
    getMany(block: Block, keys: integriteeParachainV540.H256[]): Promise<(integriteeParachainV540.Call | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV540.H256[]>
    getKeys(block: Block, key: integriteeParachainV540.H256): Promise<integriteeParachainV540.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV540.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV540.H256): AsyncIterable<integriteeParachainV540.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV540.H256, v: (integriteeParachainV540.Call | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV540.H256): Promise<[k: integriteeParachainV540.H256, v: (integriteeParachainV540.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV540.H256, v: (integriteeParachainV540.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV540.H256): AsyncIterable<[k: integriteeParachainV540.H256, v: (integriteeParachainV540.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV551  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v551.H256): Promise<(v551.Call | undefined)>
    getMany(block: Block, keys: v551.H256[]): Promise<(v551.Call | undefined)[]>
    getKeys(block: Block): Promise<v551.H256[]>
    getKeys(block: Block, key: v551.H256): Promise<v551.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v551.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v551.H256): AsyncIterable<v551.H256[]>
    getPairs(block: Block): Promise<[k: v551.H256, v: (v551.Call | undefined)][]>
    getPairs(block: Block, key: v551.H256): Promise<[k: v551.H256, v: (v551.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v551.H256, v: (v551.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v551.H256): AsyncIterable<[k: v551.H256, v: (v551.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV552  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v552.H256): Promise<(v552.Call | undefined)>
    getMany(block: Block, keys: v552.H256[]): Promise<(v552.Call | undefined)[]>
    getKeys(block: Block): Promise<v552.H256[]>
    getKeys(block: Block, key: v552.H256): Promise<v552.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v552.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v552.H256): AsyncIterable<v552.H256[]>
    getPairs(block: Block): Promise<[k: v552.H256, v: (v552.Call | undefined)][]>
    getPairs(block: Block, key: v552.H256): Promise<[k: v552.H256, v: (v552.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v552.H256, v: (v552.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v552.H256): AsyncIterable<[k: v552.H256, v: (v552.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV560  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v560.H256): Promise<(v560.Call | undefined)>
    getMany(block: Block, keys: v560.H256[]): Promise<(v560.Call | undefined)[]>
    getKeys(block: Block): Promise<v560.H256[]>
    getKeys(block: Block, key: v560.H256): Promise<v560.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v560.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v560.H256): AsyncIterable<v560.H256[]>
    getPairs(block: Block): Promise<[k: v560.H256, v: (v560.Call | undefined)][]>
    getPairs(block: Block, key: v560.H256): Promise<[k: v560.H256, v: (v560.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v560.H256, v: (v560.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v560.H256): AsyncIterable<[k: v560.H256, v: (v560.Call | undefined)][]>
}
