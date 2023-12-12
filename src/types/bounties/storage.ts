import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v40 from '../v40'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v40: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v40.Bounty) as BountiesV40,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV40  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v40.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v40.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v40.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v40.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v40.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v40.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v40: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsV40,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV40  {
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
