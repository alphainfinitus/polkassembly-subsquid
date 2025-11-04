import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v28 from '../v28'

export const tips =  {
    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v28: new StorageType('Tips.Tips', 'Optional', [v28.Hash], v28.OpenTip) as TipsV28,
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.Hash): Promise<(v28.OpenTip | undefined)>
    getMany(block: Block, keys: v28.Hash[]): Promise<(v28.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v28.Hash[]>
    getKeys(block: Block, key: v28.Hash): Promise<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<v28.Hash[]>
    getPairs(block: Block): Promise<[k: v28.Hash, v: (v28.OpenTip | undefined)][]>
    getPairs(block: Block, key: v28.Hash): Promise<[k: v28.Hash, v: (v28.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.Hash, v: (v28.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<[k: v28.Hash, v: (v28.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v28: new StorageType('Tips.Reasons', 'Optional', [v28.Hash], sts.bytes()) as ReasonsV28,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v28.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v28.Hash[]>
    getKeys(block: Block, key: v28.Hash): Promise<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<v28.Hash[]>
    getPairs(block: Block): Promise<[k: v28.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v28.Hash): Promise<[k: v28.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.Hash): AsyncIterable<[k: v28.Hash, v: (Bytes | undefined)][]>
}
