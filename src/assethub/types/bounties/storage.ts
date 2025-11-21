import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v1009001: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v1009001.Type_1112) as BountiesV1009001,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1009001.Type_1112 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1009001.Type_1112 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1009001.Type_1112 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1009001.Type_1112 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1009001.Type_1112 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1009001.Type_1112 | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v1009001: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsV1009001,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV1009001  {
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
