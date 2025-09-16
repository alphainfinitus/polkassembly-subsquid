import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV21 from '../integriteeParachainV21'
import * as integriteeParachainV28 from '../integriteeParachainV28'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    integriteeParachainV21: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), integriteeParachainV21.H256, integriteeParachainV21.AccountId32]))) as PublicPropsIntegriteeParachainV21,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    integriteeParachainV28: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), integriteeParachainV28.Bounded, integriteeParachainV28.AccountId32]))) as PublicPropsIntegriteeParachainV28,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsIntegriteeParachainV21  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, integriteeParachainV21.H256, integriteeParachainV21.AccountId32][]
    get(block: Block): Promise<([number, integriteeParachainV21.H256, integriteeParachainV21.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, integriteeParachainV28.Bounded, integriteeParachainV28.AccountId32][]
    get(block: Block): Promise<([number, integriteeParachainV28.Bounded, integriteeParachainV28.AccountId32][] | undefined)>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    integriteeParachainV21: new StorageType('Democracy.Preimages', 'Optional', [integriteeParachainV21.H256], integriteeParachainV21.PreimageStatus) as PreimagesIntegriteeParachainV21,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesIntegriteeParachainV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV21.H256): Promise<(integriteeParachainV21.PreimageStatus | undefined)>
    getMany(block: Block, keys: integriteeParachainV21.H256[]): Promise<(integriteeParachainV21.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV21.H256[]>
    getKeys(block: Block, key: integriteeParachainV21.H256): Promise<integriteeParachainV21.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV21.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV21.H256): AsyncIterable<integriteeParachainV21.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV21.H256): Promise<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV21.H256): AsyncIterable<[k: integriteeParachainV21.H256, v: (integriteeParachainV21.PreimageStatus | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    integriteeParachainV21: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], integriteeParachainV21.ReferendumInfo) as ReferendumInfoOfIntegriteeParachainV21,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    integriteeParachainV28: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], integriteeParachainV28.ReferendumInfo) as ReferendumInfoOfIntegriteeParachainV28,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfIntegriteeParachainV21  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(integriteeParachainV21.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(integriteeParachainV21.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (integriteeParachainV21.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (integriteeParachainV21.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (integriteeParachainV21.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (integriteeParachainV21.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(integriteeParachainV28.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(integriteeParachainV28.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (integriteeParachainV28.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (integriteeParachainV28.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (integriteeParachainV28.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (integriteeParachainV28.ReferendumInfo | undefined)][]>
}
