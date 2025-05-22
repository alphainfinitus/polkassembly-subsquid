import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const childBounties =  {
    /**
     *  Child bounties that have been added.
     */
    v1001002: new StorageType('ChildBounties.ChildBounties', 'Optional', [sts.number(), sts.number()], v1001002.ChildBounty) as ChildBountiesV1001002,
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v1001002.ChildBounty | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v1001002.ChildBounty | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v1001002.ChildBounty | undefined)][]>
}

export const childBountyDescriptions =  {
    /**
     *  The description of each child-bounty.
     */
    v1001002: new StorageType('ChildBounties.ChildBountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as ChildBountyDescriptionsV1001002,
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountyDescriptionsV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}
