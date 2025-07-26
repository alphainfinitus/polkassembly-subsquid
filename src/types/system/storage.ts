import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v56 from '../v56'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v26: new StorageType('System.Account', 'Default', [v26.AccountId], v26.AccountInfo) as AccountV26,
    /**
     *  The full account information for a particular account ID.
     */
    v56: new StorageType('System.Account', 'Default', [v56.AccountId32], v56.AccountInfo) as AccountV56,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountInfo
    get(block: Block, key: v26.AccountId): Promise<(v26.AccountInfo | undefined)>
    getMany(block: Block, keys: v26.AccountId[]): Promise<(v26.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v26.AccountId[]>
    getKeys(block: Block, key: v26.AccountId): Promise<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<v26.AccountId[]>
    getPairs(block: Block): Promise<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v26.AccountId): Promise<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<[k: v26.AccountId, v: (v26.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV56  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v56.AccountInfo
    get(block: Block, key: v56.AccountId32): Promise<(v56.AccountInfo | undefined)>
    getMany(block: Block, keys: v56.AccountId32[]): Promise<(v56.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v56.AccountId32[]>
    getKeys(block: Block, key: v56.AccountId32): Promise<v56.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v56.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v56.AccountId32): AsyncIterable<v56.AccountId32[]>
    getPairs(block: Block): Promise<[k: v56.AccountId32, v: (v56.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v56.AccountId32): Promise<[k: v56.AccountId32, v: (v56.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v56.AccountId32, v: (v56.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v56.AccountId32): AsyncIterable<[k: v56.AccountId32, v: (v56.AccountInfo | undefined)][]>
}
