import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'
import * as v1005001 from '../v1005001'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v1001002: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v1001002.Bounty) as BountiesV1001002,
    /**
     *  Bounties that have been made.
     */
    v1005001: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v1005001.Bounty) as BountiesV1005001,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1001002.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1001002.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1001002.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1001002.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1001002.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1001002.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV1005001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1005001.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1005001.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1005001.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1005001.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1005001.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1005001.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v1001002: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsV1001002,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV1001002  {
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
