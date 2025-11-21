import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2028 from '../v2028'

export const tips =  {
    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v2028: new StorageType('Tips.Tips', 'Optional', [v2028.Hash], v2028.OpenTip) as TipsV2028,
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV2028  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2028.Hash): Promise<(v2028.OpenTip | undefined)>
    getMany(block: Block, keys: v2028.Hash[]): Promise<(v2028.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v2028.Hash[]>
    getKeys(block: Block, key: v2028.Hash): Promise<v2028.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.Hash): AsyncIterable<v2028.Hash[]>
    getPairs(block: Block): Promise<[k: v2028.Hash, v: (v2028.OpenTip | undefined)][]>
    getPairs(block: Block, key: v2028.Hash): Promise<[k: v2028.Hash, v: (v2028.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.Hash, v: (v2028.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.Hash): AsyncIterable<[k: v2028.Hash, v: (v2028.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v2028: new StorageType('Tips.Reasons', 'Optional', [v2028.Hash], sts.bytes()) as ReasonsV2028,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV2028  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2028.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v2028.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v2028.Hash[]>
    getKeys(block: Block, key: v2028.Hash): Promise<v2028.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.Hash): AsyncIterable<v2028.Hash[]>
    getPairs(block: Block): Promise<[k: v2028.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v2028.Hash): Promise<[k: v2028.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.Hash): AsyncIterable<[k: v2028.Hash, v: (Bytes | undefined)][]>
}
