import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9340 from '../v9340'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v0: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v0.PropIndex, v0.Hash, v0.AccountId]))) as PublicPropsV0,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v9340: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9340.Bounded, v9340.AccountId32]))) as PublicPropsV9340,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.PropIndex, v0.Hash, v0.AccountId][]
    get(block: Block): Promise<([v0.PropIndex, v0.Hash, v0.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9340.Bounded, v9340.AccountId32][]
    get(block: Block): Promise<([number, v9340.Bounded, v9340.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v0: new StorageType('Democracy.Preimages', 'Optional', [v0.Hash], v0.PreimageStatus) as PreimagesV0,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v9110: new StorageType('Democracy.Preimages', 'Optional', [v9110.H256], v9110.PreimageStatus) as PreimagesV9110,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(v0.PreimageStatus | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(v0.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.H256): Promise<(v9110.PreimageStatus | undefined)>
    getMany(block: Block, keys: v9110.H256[]): Promise<(v9110.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v9110.H256[]>
    getKeys(block: Block, key: v9110.H256): Promise<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<v9110.H256[]>
    getPairs(block: Block): Promise<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v9110.H256): Promise<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v0: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v0.ReferendumIndex], v0.ReferendumInfo) as ReferendumInfoOfV0,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9110: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9110.ReferendumInfo) as ReferendumInfoOfV9110,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9340: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9340.ReferendumInfo) as ReferendumInfoOfV9340,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ReferendumIndex): Promise<(v0.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v0.ReferendumIndex[]): Promise<(v0.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v0.ReferendumIndex[]>
    getKeys(block: Block, key: v0.ReferendumIndex): Promise<v0.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ReferendumIndex): AsyncIterable<v0.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v0.ReferendumIndex): Promise<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ReferendumIndex): AsyncIterable<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9110.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9340.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9340.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
}
