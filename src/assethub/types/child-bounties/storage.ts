import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const childBounties =  {
    /**
     *  Child bounties that have been added.
     */
    v2000000: new StorageType('ChildBounties.ChildBounties', 'Optional', [sts.number(), sts.number()], v2000000.ChildBounty) as ChildBountiesV2000000,
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v2000000.ChildBounty | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v2000000.ChildBounty | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v2000000.ChildBounty | undefined)][]>
}

export const childBountyDescriptionsV1 =  {
    /**
     *  The description of each child-bounty. Indexed by `(parent_id, child_id)`.
     * 
     *  This item replaces the `ChildBountyDescriptions` storage item from the V0 storage version.
     */
    v2000000: new StorageType('ChildBounties.ChildBountyDescriptionsV1', 'Optional', [sts.number(), sts.number()], sts.bytes()) as ChildBountyDescriptionsV1V2000000,
}

/**
 *  The description of each child-bounty. Indexed by `(parent_id, child_id)`.
 * 
 *  This item replaces the `ChildBountyDescriptions` storage item from the V0 storage version.
 */
export interface ChildBountyDescriptionsV1V2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (Bytes | undefined)][]>
}
