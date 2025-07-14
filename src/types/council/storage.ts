import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v11 from '../v11'
import * as v21 from '../v21'
import * as v24 from '../v24'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v44 from '../v44'
import * as v48 from '../v48'
import * as v64 from '../v64'
import * as v74 from '../v74'
import * as v78 from '../v78'
import * as v116 from '../v116'
import * as v135 from '../v135'
import * as v154 from '../v154'
import * as v169 from '../v169'

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1: new StorageType('Council.ProposalOf', 'Optional', [v1.H256], v1.Call) as ProposalOfV1,
    v11: new StorageType('Council.ProposalOf', 'Optional', [v11.H256], v11.Call) as ProposalOfV11,
    v21: new StorageType('Council.ProposalOf', 'Optional', [v21.H256], v21.Call) as ProposalOfV21,
    v24: new StorageType('Council.ProposalOf', 'Optional', [v24.H256], v24.Call) as ProposalOfV24,
    v26: new StorageType('Council.ProposalOf', 'Optional', [v26.H256], v26.Call) as ProposalOfV26,
    v28: new StorageType('Council.ProposalOf', 'Optional', [v28.H256], v28.Call) as ProposalOfV28,
    v44: new StorageType('Council.ProposalOf', 'Optional', [v44.H256], v44.Call) as ProposalOfV44,
    v48: new StorageType('Council.ProposalOf', 'Optional', [v48.H256], v48.Call) as ProposalOfV48,
    v64: new StorageType('Council.ProposalOf', 'Optional', [v64.H256], v64.Call) as ProposalOfV64,
    v74: new StorageType('Council.ProposalOf', 'Optional', [v74.H256], v74.Call) as ProposalOfV74,
    v78: new StorageType('Council.ProposalOf', 'Optional', [v78.H256], v78.Call) as ProposalOfV78,
    v116: new StorageType('Council.ProposalOf', 'Optional', [v116.H256], v116.Call) as ProposalOfV116,
    v135: new StorageType('Council.ProposalOf', 'Optional', [v135.H256], v135.Call) as ProposalOfV135,
    v154: new StorageType('Council.ProposalOf', 'Optional', [v154.H256], v154.Call) as ProposalOfV154,
    v169: new StorageType('Council.ProposalOf', 'Optional', [v169.H256], v169.Call) as ProposalOfV169,
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

export interface ProposalOfV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v21.H256): Promise<(v21.Call | undefined)>
    getMany(block: Block, keys: v21.H256[]): Promise<(v21.Call | undefined)[]>
    getKeys(block: Block): Promise<v21.H256[]>
    getKeys(block: Block, key: v21.H256): Promise<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v21.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<v21.H256[]>
    getPairs(block: Block): Promise<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairs(block: Block, key: v21.H256): Promise<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v21.H256, v: (v21.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v21.H256): AsyncIterable<[k: v21.H256, v: (v21.Call | undefined)][]>
}

export interface ProposalOfV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.H256): Promise<(v24.Call | undefined)>
    getMany(block: Block, keys: v24.H256[]): Promise<(v24.Call | undefined)[]>
    getKeys(block: Block): Promise<v24.H256[]>
    getKeys(block: Block, key: v24.H256): Promise<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<v24.H256[]>
    getPairs(block: Block): Promise<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairs(block: Block, key: v24.H256): Promise<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.H256, v: (v24.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<[k: v24.H256, v: (v24.Call | undefined)][]>
}

export interface ProposalOfV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v26.H256): Promise<(v26.Call | undefined)>
    getMany(block: Block, keys: v26.H256[]): Promise<(v26.Call | undefined)[]>
    getKeys(block: Block): Promise<v26.H256[]>
    getKeys(block: Block, key: v26.H256): Promise<v26.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.H256): AsyncIterable<v26.H256[]>
    getPairs(block: Block): Promise<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairs(block: Block, key: v26.H256): Promise<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.H256, v: (v26.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.H256): AsyncIterable<[k: v26.H256, v: (v26.Call | undefined)][]>
}

export interface ProposalOfV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.H256): Promise<(v28.Call | undefined)>
    getMany(block: Block, keys: v28.H256[]): Promise<(v28.Call | undefined)[]>
    getKeys(block: Block): Promise<v28.H256[]>
    getKeys(block: Block, key: v28.H256): Promise<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<v28.H256[]>
    getPairs(block: Block): Promise<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairs(block: Block, key: v28.H256): Promise<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.H256, v: (v28.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.H256): AsyncIterable<[k: v28.H256, v: (v28.Call | undefined)][]>
}

export interface ProposalOfV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v44.H256): Promise<(v44.Call | undefined)>
    getMany(block: Block, keys: v44.H256[]): Promise<(v44.Call | undefined)[]>
    getKeys(block: Block): Promise<v44.H256[]>
    getKeys(block: Block, key: v44.H256): Promise<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<v44.H256[]>
    getPairs(block: Block): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairs(block: Block, key: v44.H256): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
}

export interface ProposalOfV48  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48.H256): Promise<(v48.Call | undefined)>
    getMany(block: Block, keys: v48.H256[]): Promise<(v48.Call | undefined)[]>
    getKeys(block: Block): Promise<v48.H256[]>
    getKeys(block: Block, key: v48.H256): Promise<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<v48.H256[]>
    getPairs(block: Block): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairs(block: Block, key: v48.H256): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
}

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

export interface ProposalOfV78  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v78.H256): Promise<(v78.Call | undefined)>
    getMany(block: Block, keys: v78.H256[]): Promise<(v78.Call | undefined)[]>
    getKeys(block: Block): Promise<v78.H256[]>
    getKeys(block: Block, key: v78.H256): Promise<v78.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v78.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v78.H256): AsyncIterable<v78.H256[]>
    getPairs(block: Block): Promise<[k: v78.H256, v: (v78.Call | undefined)][]>
    getPairs(block: Block, key: v78.H256): Promise<[k: v78.H256, v: (v78.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v78.H256, v: (v78.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v78.H256): AsyncIterable<[k: v78.H256, v: (v78.Call | undefined)][]>
}

export interface ProposalOfV116  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v116.H256): Promise<(v116.Call | undefined)>
    getMany(block: Block, keys: v116.H256[]): Promise<(v116.Call | undefined)[]>
    getKeys(block: Block): Promise<v116.H256[]>
    getKeys(block: Block, key: v116.H256): Promise<v116.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v116.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v116.H256): AsyncIterable<v116.H256[]>
    getPairs(block: Block): Promise<[k: v116.H256, v: (v116.Call | undefined)][]>
    getPairs(block: Block, key: v116.H256): Promise<[k: v116.H256, v: (v116.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v116.H256, v: (v116.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v116.H256): AsyncIterable<[k: v116.H256, v: (v116.Call | undefined)][]>
}

export interface ProposalOfV135  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v135.H256): Promise<(v135.Call | undefined)>
    getMany(block: Block, keys: v135.H256[]): Promise<(v135.Call | undefined)[]>
    getKeys(block: Block): Promise<v135.H256[]>
    getKeys(block: Block, key: v135.H256): Promise<v135.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v135.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v135.H256): AsyncIterable<v135.H256[]>
    getPairs(block: Block): Promise<[k: v135.H256, v: (v135.Call | undefined)][]>
    getPairs(block: Block, key: v135.H256): Promise<[k: v135.H256, v: (v135.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v135.H256, v: (v135.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v135.H256): AsyncIterable<[k: v135.H256, v: (v135.Call | undefined)][]>
}

export interface ProposalOfV154  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v154.H256): Promise<(v154.Call | undefined)>
    getMany(block: Block, keys: v154.H256[]): Promise<(v154.Call | undefined)[]>
    getKeys(block: Block): Promise<v154.H256[]>
    getKeys(block: Block, key: v154.H256): Promise<v154.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v154.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v154.H256): AsyncIterable<v154.H256[]>
    getPairs(block: Block): Promise<[k: v154.H256, v: (v154.Call | undefined)][]>
    getPairs(block: Block, key: v154.H256): Promise<[k: v154.H256, v: (v154.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v154.H256, v: (v154.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v154.H256): AsyncIterable<[k: v154.H256, v: (v154.Call | undefined)][]>
}

export interface ProposalOfV169  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v169.H256): Promise<(v169.Call | undefined)>
    getMany(block: Block, keys: v169.H256[]): Promise<(v169.Call | undefined)[]>
    getKeys(block: Block): Promise<v169.H256[]>
    getKeys(block: Block, key: v169.H256): Promise<v169.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v169.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v169.H256): AsyncIterable<v169.H256[]>
    getPairs(block: Block): Promise<[k: v169.H256, v: (v169.Call | undefined)][]>
    getPairs(block: Block, key: v169.H256): Promise<[k: v169.H256, v: (v169.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v169.H256, v: (v169.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v169.H256): AsyncIterable<[k: v169.H256, v: (v169.Call | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v1: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV1,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v1: new StorageType('Council.Members', 'Default', [], sts.array(() => v1.AccountId32)) as MembersV1,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId32[]
    get(block: Block): Promise<(v1.AccountId32[] | undefined)>
}
