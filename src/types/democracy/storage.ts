import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1013 from '../v1013'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v1013: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v1013.Bounded, v1013.AccountId20]))) as PublicPropsV1013,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV1013  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1013.Bounded, v1013.AccountId20][]
    get(block: Block): Promise<([number, v1013.Bounded, v1013.AccountId20][] | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v1013: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v1013.ReferendumInfo) as ReferendumInfoOfV1013,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1013.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1013.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1013.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1013.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1013.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1013.ReferendumInfo | undefined)][]>
}
