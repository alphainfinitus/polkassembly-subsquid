import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63 from '../v63'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v69 from '../v69'
import * as v74 from '../v74'
import * as v77 from '../v77'
import * as v83 from '../v83'
import * as v84 from '../v84'
import * as v86 from '../v86'
import * as v89 from '../v89'
import * as v91 from '../v91'
import * as v96 from '../v96'
import * as v98 from '../v98'
import * as v101 from '../v101'
import * as v105 from '../v105'
import * as v107 from '../v107'
import * as v109 from '../v109'
import * as v110 from '../v110'
import * as v112 from '../v112'
import * as v113 from '../v113'
import * as v115 from '../v115'
import * as v118 from '../v118'
import * as v119 from '../v119'
import * as v122 from '../v122'
import * as v123 from '../v123'
import * as v125 from '../v125'
import * as v126 from '../v126'
import * as v133 from '../v133'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v63: new StorageType('Council.Proposals', 'Default', [], sts.array(() => v63.H256)) as ProposalsV63,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63.H256[]
    get(block: Block): Promise<(v63.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v63: new StorageType('Council.ProposalOf', 'Optional', [v63.H256], v63.Call) as ProposalOfV63,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v64: new StorageType('Council.ProposalOf', 'Optional', [v64.H256], v64.Call) as ProposalOfV64,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v66: new StorageType('Council.ProposalOf', 'Optional', [v66.H256], v66.Call) as ProposalOfV66,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v69: new StorageType('Council.ProposalOf', 'Optional', [v69.H256], v69.Call) as ProposalOfV69,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v74: new StorageType('Council.ProposalOf', 'Optional', [v74.H256], v74.Call) as ProposalOfV74,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v77: new StorageType('Council.ProposalOf', 'Optional', [v77.H256], v77.Call) as ProposalOfV77,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v83: new StorageType('Council.ProposalOf', 'Optional', [v83.H256], v83.Call) as ProposalOfV83,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v84: new StorageType('Council.ProposalOf', 'Optional', [v84.H256], v84.Call) as ProposalOfV84,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v86: new StorageType('Council.ProposalOf', 'Optional', [v86.H256], v86.Call) as ProposalOfV86,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v89: new StorageType('Council.ProposalOf', 'Optional', [v89.H256], v89.Call) as ProposalOfV89,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v91: new StorageType('Council.ProposalOf', 'Optional', [v91.H256], v91.Call) as ProposalOfV91,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v96: new StorageType('Council.ProposalOf', 'Optional', [v96.H256], v96.Call) as ProposalOfV96,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v98: new StorageType('Council.ProposalOf', 'Optional', [v98.H256], v98.Call) as ProposalOfV98,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v101: new StorageType('Council.ProposalOf', 'Optional', [v101.H256], v101.Call) as ProposalOfV101,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v105: new StorageType('Council.ProposalOf', 'Optional', [v105.H256], v105.Call) as ProposalOfV105,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v107: new StorageType('Council.ProposalOf', 'Optional', [v107.H256], v107.Call) as ProposalOfV107,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v109: new StorageType('Council.ProposalOf', 'Optional', [v109.H256], v109.Call) as ProposalOfV109,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v110: new StorageType('Council.ProposalOf', 'Optional', [v110.H256], v110.Call) as ProposalOfV110,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v112: new StorageType('Council.ProposalOf', 'Optional', [v112.H256], v112.Call) as ProposalOfV112,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v113: new StorageType('Council.ProposalOf', 'Optional', [v113.H256], v113.Call) as ProposalOfV113,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v115: new StorageType('Council.ProposalOf', 'Optional', [v115.H256], v115.Call) as ProposalOfV115,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v118: new StorageType('Council.ProposalOf', 'Optional', [v118.H256], v118.Call) as ProposalOfV118,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v119: new StorageType('Council.ProposalOf', 'Optional', [v119.H256], v119.Call) as ProposalOfV119,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v122: new StorageType('Council.ProposalOf', 'Optional', [v122.H256], v122.Call) as ProposalOfV122,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v123: new StorageType('Council.ProposalOf', 'Optional', [v123.H256], v123.Call) as ProposalOfV123,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v125: new StorageType('Council.ProposalOf', 'Optional', [v125.H256], v125.Call) as ProposalOfV125,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v126: new StorageType('Council.ProposalOf', 'Optional', [v126.H256], v126.Call) as ProposalOfV126,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v133: new StorageType('Council.ProposalOf', 'Optional', [v133.H256], v133.Call) as ProposalOfV133,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63.H256): Promise<(v63.Call | undefined)>
    getMany(block: Block, keys: v63.H256[]): Promise<(v63.Call | undefined)[]>
    getKeys(block: Block): Promise<v63.H256[]>
    getKeys(block: Block, key: v63.H256): Promise<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<v63.H256[]>
    getPairs(block: Block): Promise<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairs(block: Block, key: v63.H256): Promise<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<[k: v63.H256, v: (v63.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64.H256): Promise<(v64.Call | undefined)>
    getMany(block: Block, keys: v64.H256[]): Promise<(v64.Call | undefined)[]>
    getKeys(block: Block): Promise<v64.H256[]>
    getKeys(block: Block, key: v64.H256): Promise<v64.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.H256): AsyncIterable<v64.H256[]>
    getPairs(block: Block): Promise<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairs(block: Block, key: v64.H256): Promise<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.H256): AsyncIterable<[k: v64.H256, v: (v64.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV66  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v66.H256): Promise<(v66.Call | undefined)>
    getMany(block: Block, keys: v66.H256[]): Promise<(v66.Call | undefined)[]>
    getKeys(block: Block): Promise<v66.H256[]>
    getKeys(block: Block, key: v66.H256): Promise<v66.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v66.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v66.H256): AsyncIterable<v66.H256[]>
    getPairs(block: Block): Promise<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairs(block: Block, key: v66.H256): Promise<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v66.H256): AsyncIterable<[k: v66.H256, v: (v66.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.H256): Promise<(v69.Call | undefined)>
    getMany(block: Block, keys: v69.H256[]): Promise<(v69.Call | undefined)[]>
    getKeys(block: Block): Promise<v69.H256[]>
    getKeys(block: Block, key: v69.H256): Promise<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<v69.H256[]>
    getPairs(block: Block): Promise<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairs(block: Block, key: v69.H256): Promise<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<[k: v69.H256, v: (v69.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV74  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v74.H256): Promise<(v74.Call | undefined)>
    getMany(block: Block, keys: v74.H256[]): Promise<(v74.Call | undefined)[]>
    getKeys(block: Block): Promise<v74.H256[]>
    getKeys(block: Block, key: v74.H256): Promise<v74.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v74.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v74.H256): AsyncIterable<v74.H256[]>
    getPairs(block: Block): Promise<[k: v74.H256, v: (v74.Call | undefined)][]>
    getPairs(block: Block, key: v74.H256): Promise<[k: v74.H256, v: (v74.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v74.H256, v: (v74.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v74.H256): AsyncIterable<[k: v74.H256, v: (v74.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV77  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v77.H256): Promise<(v77.Call | undefined)>
    getMany(block: Block, keys: v77.H256[]): Promise<(v77.Call | undefined)[]>
    getKeys(block: Block): Promise<v77.H256[]>
    getKeys(block: Block, key: v77.H256): Promise<v77.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v77.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v77.H256): AsyncIterable<v77.H256[]>
    getPairs(block: Block): Promise<[k: v77.H256, v: (v77.Call | undefined)][]>
    getPairs(block: Block, key: v77.H256): Promise<[k: v77.H256, v: (v77.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v77.H256, v: (v77.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v77.H256): AsyncIterable<[k: v77.H256, v: (v77.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV83  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v83.H256): Promise<(v83.Call | undefined)>
    getMany(block: Block, keys: v83.H256[]): Promise<(v83.Call | undefined)[]>
    getKeys(block: Block): Promise<v83.H256[]>
    getKeys(block: Block, key: v83.H256): Promise<v83.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v83.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v83.H256): AsyncIterable<v83.H256[]>
    getPairs(block: Block): Promise<[k: v83.H256, v: (v83.Call | undefined)][]>
    getPairs(block: Block, key: v83.H256): Promise<[k: v83.H256, v: (v83.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v83.H256, v: (v83.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v83.H256): AsyncIterable<[k: v83.H256, v: (v83.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v84.H256): Promise<(v84.Call | undefined)>
    getMany(block: Block, keys: v84.H256[]): Promise<(v84.Call | undefined)[]>
    getKeys(block: Block): Promise<v84.H256[]>
    getKeys(block: Block, key: v84.H256): Promise<v84.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v84.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v84.H256): AsyncIterable<v84.H256[]>
    getPairs(block: Block): Promise<[k: v84.H256, v: (v84.Call | undefined)][]>
    getPairs(block: Block, key: v84.H256): Promise<[k: v84.H256, v: (v84.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v84.H256, v: (v84.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v84.H256): AsyncIterable<[k: v84.H256, v: (v84.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV86  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v86.H256): Promise<(v86.Call | undefined)>
    getMany(block: Block, keys: v86.H256[]): Promise<(v86.Call | undefined)[]>
    getKeys(block: Block): Promise<v86.H256[]>
    getKeys(block: Block, key: v86.H256): Promise<v86.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v86.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v86.H256): AsyncIterable<v86.H256[]>
    getPairs(block: Block): Promise<[k: v86.H256, v: (v86.Call | undefined)][]>
    getPairs(block: Block, key: v86.H256): Promise<[k: v86.H256, v: (v86.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v86.H256, v: (v86.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v86.H256): AsyncIterable<[k: v86.H256, v: (v86.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV89  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v89.H256): Promise<(v89.Call | undefined)>
    getMany(block: Block, keys: v89.H256[]): Promise<(v89.Call | undefined)[]>
    getKeys(block: Block): Promise<v89.H256[]>
    getKeys(block: Block, key: v89.H256): Promise<v89.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v89.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v89.H256): AsyncIterable<v89.H256[]>
    getPairs(block: Block): Promise<[k: v89.H256, v: (v89.Call | undefined)][]>
    getPairs(block: Block, key: v89.H256): Promise<[k: v89.H256, v: (v89.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v89.H256, v: (v89.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v89.H256): AsyncIterable<[k: v89.H256, v: (v89.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV91  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v91.H256): Promise<(v91.Call | undefined)>
    getMany(block: Block, keys: v91.H256[]): Promise<(v91.Call | undefined)[]>
    getKeys(block: Block): Promise<v91.H256[]>
    getKeys(block: Block, key: v91.H256): Promise<v91.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v91.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v91.H256): AsyncIterable<v91.H256[]>
    getPairs(block: Block): Promise<[k: v91.H256, v: (v91.Call | undefined)][]>
    getPairs(block: Block, key: v91.H256): Promise<[k: v91.H256, v: (v91.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v91.H256, v: (v91.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v91.H256): AsyncIterable<[k: v91.H256, v: (v91.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV96  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v96.H256): Promise<(v96.Call | undefined)>
    getMany(block: Block, keys: v96.H256[]): Promise<(v96.Call | undefined)[]>
    getKeys(block: Block): Promise<v96.H256[]>
    getKeys(block: Block, key: v96.H256): Promise<v96.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v96.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v96.H256): AsyncIterable<v96.H256[]>
    getPairs(block: Block): Promise<[k: v96.H256, v: (v96.Call | undefined)][]>
    getPairs(block: Block, key: v96.H256): Promise<[k: v96.H256, v: (v96.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v96.H256, v: (v96.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v96.H256): AsyncIterable<[k: v96.H256, v: (v96.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV98  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v98.H256): Promise<(v98.Call | undefined)>
    getMany(block: Block, keys: v98.H256[]): Promise<(v98.Call | undefined)[]>
    getKeys(block: Block): Promise<v98.H256[]>
    getKeys(block: Block, key: v98.H256): Promise<v98.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v98.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v98.H256): AsyncIterable<v98.H256[]>
    getPairs(block: Block): Promise<[k: v98.H256, v: (v98.Call | undefined)][]>
    getPairs(block: Block, key: v98.H256): Promise<[k: v98.H256, v: (v98.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v98.H256, v: (v98.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v98.H256): AsyncIterable<[k: v98.H256, v: (v98.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV101  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v101.H256): Promise<(v101.Call | undefined)>
    getMany(block: Block, keys: v101.H256[]): Promise<(v101.Call | undefined)[]>
    getKeys(block: Block): Promise<v101.H256[]>
    getKeys(block: Block, key: v101.H256): Promise<v101.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v101.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v101.H256): AsyncIterable<v101.H256[]>
    getPairs(block: Block): Promise<[k: v101.H256, v: (v101.Call | undefined)][]>
    getPairs(block: Block, key: v101.H256): Promise<[k: v101.H256, v: (v101.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v101.H256, v: (v101.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v101.H256): AsyncIterable<[k: v101.H256, v: (v101.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV105  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v105.H256): Promise<(v105.Call | undefined)>
    getMany(block: Block, keys: v105.H256[]): Promise<(v105.Call | undefined)[]>
    getKeys(block: Block): Promise<v105.H256[]>
    getKeys(block: Block, key: v105.H256): Promise<v105.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v105.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v105.H256): AsyncIterable<v105.H256[]>
    getPairs(block: Block): Promise<[k: v105.H256, v: (v105.Call | undefined)][]>
    getPairs(block: Block, key: v105.H256): Promise<[k: v105.H256, v: (v105.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v105.H256, v: (v105.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v105.H256): AsyncIterable<[k: v105.H256, v: (v105.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV107  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v107.H256): Promise<(v107.Call | undefined)>
    getMany(block: Block, keys: v107.H256[]): Promise<(v107.Call | undefined)[]>
    getKeys(block: Block): Promise<v107.H256[]>
    getKeys(block: Block, key: v107.H256): Promise<v107.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v107.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v107.H256): AsyncIterable<v107.H256[]>
    getPairs(block: Block): Promise<[k: v107.H256, v: (v107.Call | undefined)][]>
    getPairs(block: Block, key: v107.H256): Promise<[k: v107.H256, v: (v107.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v107.H256, v: (v107.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v107.H256): AsyncIterable<[k: v107.H256, v: (v107.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV109  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v109.H256): Promise<(v109.Call | undefined)>
    getMany(block: Block, keys: v109.H256[]): Promise<(v109.Call | undefined)[]>
    getKeys(block: Block): Promise<v109.H256[]>
    getKeys(block: Block, key: v109.H256): Promise<v109.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v109.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v109.H256): AsyncIterable<v109.H256[]>
    getPairs(block: Block): Promise<[k: v109.H256, v: (v109.Call | undefined)][]>
    getPairs(block: Block, key: v109.H256): Promise<[k: v109.H256, v: (v109.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v109.H256, v: (v109.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v109.H256): AsyncIterable<[k: v109.H256, v: (v109.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.H256): Promise<(v110.Call | undefined)>
    getMany(block: Block, keys: v110.H256[]): Promise<(v110.Call | undefined)[]>
    getKeys(block: Block): Promise<v110.H256[]>
    getKeys(block: Block, key: v110.H256): Promise<v110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.H256): AsyncIterable<v110.H256[]>
    getPairs(block: Block): Promise<[k: v110.H256, v: (v110.Call | undefined)][]>
    getPairs(block: Block, key: v110.H256): Promise<[k: v110.H256, v: (v110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.H256, v: (v110.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v110.H256): AsyncIterable<[k: v110.H256, v: (v110.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV112  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v112.H256): Promise<(v112.Call | undefined)>
    getMany(block: Block, keys: v112.H256[]): Promise<(v112.Call | undefined)[]>
    getKeys(block: Block): Promise<v112.H256[]>
    getKeys(block: Block, key: v112.H256): Promise<v112.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v112.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v112.H256): AsyncIterable<v112.H256[]>
    getPairs(block: Block): Promise<[k: v112.H256, v: (v112.Call | undefined)][]>
    getPairs(block: Block, key: v112.H256): Promise<[k: v112.H256, v: (v112.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v112.H256, v: (v112.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v112.H256): AsyncIterable<[k: v112.H256, v: (v112.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV113  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v113.H256): Promise<(v113.Call | undefined)>
    getMany(block: Block, keys: v113.H256[]): Promise<(v113.Call | undefined)[]>
    getKeys(block: Block): Promise<v113.H256[]>
    getKeys(block: Block, key: v113.H256): Promise<v113.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v113.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v113.H256): AsyncIterable<v113.H256[]>
    getPairs(block: Block): Promise<[k: v113.H256, v: (v113.Call | undefined)][]>
    getPairs(block: Block, key: v113.H256): Promise<[k: v113.H256, v: (v113.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v113.H256, v: (v113.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v113.H256): AsyncIterable<[k: v113.H256, v: (v113.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV115  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v115.H256): Promise<(v115.Call | undefined)>
    getMany(block: Block, keys: v115.H256[]): Promise<(v115.Call | undefined)[]>
    getKeys(block: Block): Promise<v115.H256[]>
    getKeys(block: Block, key: v115.H256): Promise<v115.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v115.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v115.H256): AsyncIterable<v115.H256[]>
    getPairs(block: Block): Promise<[k: v115.H256, v: (v115.Call | undefined)][]>
    getPairs(block: Block, key: v115.H256): Promise<[k: v115.H256, v: (v115.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v115.H256, v: (v115.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v115.H256): AsyncIterable<[k: v115.H256, v: (v115.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV118  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v118.H256): Promise<(v118.Call | undefined)>
    getMany(block: Block, keys: v118.H256[]): Promise<(v118.Call | undefined)[]>
    getKeys(block: Block): Promise<v118.H256[]>
    getKeys(block: Block, key: v118.H256): Promise<v118.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v118.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v118.H256): AsyncIterable<v118.H256[]>
    getPairs(block: Block): Promise<[k: v118.H256, v: (v118.Call | undefined)][]>
    getPairs(block: Block, key: v118.H256): Promise<[k: v118.H256, v: (v118.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v118.H256, v: (v118.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v118.H256): AsyncIterable<[k: v118.H256, v: (v118.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV119  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v119.H256): Promise<(v119.Call | undefined)>
    getMany(block: Block, keys: v119.H256[]): Promise<(v119.Call | undefined)[]>
    getKeys(block: Block): Promise<v119.H256[]>
    getKeys(block: Block, key: v119.H256): Promise<v119.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v119.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v119.H256): AsyncIterable<v119.H256[]>
    getPairs(block: Block): Promise<[k: v119.H256, v: (v119.Call | undefined)][]>
    getPairs(block: Block, key: v119.H256): Promise<[k: v119.H256, v: (v119.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v119.H256, v: (v119.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v119.H256): AsyncIterable<[k: v119.H256, v: (v119.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV122  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v122.H256): Promise<(v122.Call | undefined)>
    getMany(block: Block, keys: v122.H256[]): Promise<(v122.Call | undefined)[]>
    getKeys(block: Block): Promise<v122.H256[]>
    getKeys(block: Block, key: v122.H256): Promise<v122.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v122.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v122.H256): AsyncIterable<v122.H256[]>
    getPairs(block: Block): Promise<[k: v122.H256, v: (v122.Call | undefined)][]>
    getPairs(block: Block, key: v122.H256): Promise<[k: v122.H256, v: (v122.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v122.H256, v: (v122.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v122.H256): AsyncIterable<[k: v122.H256, v: (v122.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV123  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v123.H256): Promise<(v123.Call | undefined)>
    getMany(block: Block, keys: v123.H256[]): Promise<(v123.Call | undefined)[]>
    getKeys(block: Block): Promise<v123.H256[]>
    getKeys(block: Block, key: v123.H256): Promise<v123.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v123.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v123.H256): AsyncIterable<v123.H256[]>
    getPairs(block: Block): Promise<[k: v123.H256, v: (v123.Call | undefined)][]>
    getPairs(block: Block, key: v123.H256): Promise<[k: v123.H256, v: (v123.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v123.H256, v: (v123.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v123.H256): AsyncIterable<[k: v123.H256, v: (v123.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV125  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v125.H256): Promise<(v125.Call | undefined)>
    getMany(block: Block, keys: v125.H256[]): Promise<(v125.Call | undefined)[]>
    getKeys(block: Block): Promise<v125.H256[]>
    getKeys(block: Block, key: v125.H256): Promise<v125.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v125.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v125.H256): AsyncIterable<v125.H256[]>
    getPairs(block: Block): Promise<[k: v125.H256, v: (v125.Call | undefined)][]>
    getPairs(block: Block, key: v125.H256): Promise<[k: v125.H256, v: (v125.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v125.H256, v: (v125.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v125.H256): AsyncIterable<[k: v125.H256, v: (v125.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV126  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v126.H256): Promise<(v126.Call | undefined)>
    getMany(block: Block, keys: v126.H256[]): Promise<(v126.Call | undefined)[]>
    getKeys(block: Block): Promise<v126.H256[]>
    getKeys(block: Block, key: v126.H256): Promise<v126.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v126.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v126.H256): AsyncIterable<v126.H256[]>
    getPairs(block: Block): Promise<[k: v126.H256, v: (v126.Call | undefined)][]>
    getPairs(block: Block, key: v126.H256): Promise<[k: v126.H256, v: (v126.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v126.H256, v: (v126.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v126.H256): AsyncIterable<[k: v126.H256, v: (v126.Call | undefined)][]>
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
    v63: new StorageType('Council.Voting', 'Optional', [v63.H256], v63.Votes) as VotingV63,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63.H256): Promise<(v63.Votes | undefined)>
    getMany(block: Block, keys: v63.H256[]): Promise<(v63.Votes | undefined)[]>
    getKeys(block: Block): Promise<v63.H256[]>
    getKeys(block: Block, key: v63.H256): Promise<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<v63.H256[]>
    getPairs(block: Block): Promise<[k: v63.H256, v: (v63.Votes | undefined)][]>
    getPairs(block: Block, key: v63.H256): Promise<[k: v63.H256, v: (v63.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63.H256, v: (v63.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<[k: v63.H256, v: (v63.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v63: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV63,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v63: new StorageType('Council.Members', 'Default', [], sts.array(() => v63.AccountId32)) as MembersV63,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63.AccountId32[]
    get(block: Block): Promise<(v63.AccountId32[] | undefined)>
}
