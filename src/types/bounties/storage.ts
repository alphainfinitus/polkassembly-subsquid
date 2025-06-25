import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v283 from '../v283'
import * as v295 from '../v295'
import * as v73115 from '../v73115'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v283: new StorageType('Bounties.Bounties', 'Optional', [v283.BountyIndex], v283.Bounty) as BountiesV283,
    /**
     *  Bounties that have been made.
     */
    v295: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v295.Bounty) as BountiesV295,
    /**
     *  Bounties that have been made.
     */
    v73115: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v73115.Bounty) as BountiesV73115,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.BountyIndex): Promise<(v283.Bounty | undefined)>
    getMany(block: Block, keys: v283.BountyIndex[]): Promise<(v283.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v283.BountyIndex[]>
    getKeys(block: Block, key: v283.BountyIndex): Promise<v283.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.BountyIndex): AsyncIterable<v283.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v283.BountyIndex, v: (v283.Bounty | undefined)][]>
    getPairs(block: Block, key: v283.BountyIndex): Promise<[k: v283.BountyIndex, v: (v283.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.BountyIndex, v: (v283.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.BountyIndex): AsyncIterable<[k: v283.BountyIndex, v: (v283.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV295  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v295.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v295.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v295.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v295.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v295.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v295.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV73115  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v73115.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v73115.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v73115.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v73115.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v73115.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v73115.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v283: new StorageType('Bounties.BountyDescriptions', 'Optional', [v283.BountyIndex], sts.bytes()) as BountyDescriptionsV283,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV283  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v283.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v283.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v283.BountyIndex[]>
    getKeys(block: Block, key: v283.BountyIndex): Promise<v283.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v283.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v283.BountyIndex): AsyncIterable<v283.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v283.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v283.BountyIndex): Promise<[k: v283.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v283.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v283.BountyIndex): AsyncIterable<[k: v283.BountyIndex, v: (Bytes | undefined)][]>
}
