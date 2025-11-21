import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2028 from '../v2028'
import * as v9111 from '../v9111'
import * as v1005000 from '../v1005000'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v2028: new StorageType('Bounties.Bounties', 'Optional', [v2028.BountyIndex], v2028.Bounty) as BountiesV2028,
    /**
     *  Bounties that have been made.
     */
    v9111: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v9111.Bounty) as BountiesV9111,
    /**
     *  Bounties that have been made.
     */
    v1005000: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v1005000.Bounty) as BountiesV1005000,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV2028  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2028.BountyIndex): Promise<(v2028.Bounty | undefined)>
    getMany(block: Block, keys: v2028.BountyIndex[]): Promise<(v2028.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v2028.BountyIndex[]>
    getKeys(block: Block, key: v2028.BountyIndex): Promise<v2028.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.BountyIndex): AsyncIterable<v2028.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v2028.BountyIndex, v: (v2028.Bounty | undefined)][]>
    getPairs(block: Block, key: v2028.BountyIndex): Promise<[k: v2028.BountyIndex, v: (v2028.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.BountyIndex, v: (v2028.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.BountyIndex): AsyncIterable<[k: v2028.BountyIndex, v: (v2028.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9111.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9111.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9111.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9111.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9111.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9111.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV1005000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1005000.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1005000.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1005000.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1005000.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1005000.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1005000.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v2028: new StorageType('Bounties.BountyDescriptions', 'Optional', [v2028.BountyIndex], sts.bytes()) as BountyDescriptionsV2028,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV2028  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2028.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v2028.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v2028.BountyIndex[]>
    getKeys(block: Block, key: v2028.BountyIndex): Promise<v2028.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.BountyIndex): AsyncIterable<v2028.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v2028.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v2028.BountyIndex): Promise<[k: v2028.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.BountyIndex): AsyncIterable<[k: v2028.BountyIndex, v: (Bytes | undefined)][]>
}
