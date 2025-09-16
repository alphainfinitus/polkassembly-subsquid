import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV35 from '../integriteeParachainV35'
import * as v560 from '../v560'

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    integriteeParachainV35: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], integriteeParachainV35.Bounty) as BountiesIntegriteeParachainV35,
    /**
     *  Bounties that have been made.
     */
    v560: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], v560.Bounty) as BountiesV560,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesIntegriteeParachainV35  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(integriteeParachainV35.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(integriteeParachainV35.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (integriteeParachainV35.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (integriteeParachainV35.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (integriteeParachainV35.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (integriteeParachainV35.Bounty | undefined)][]>
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV560  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v560.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v560.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v560.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v560.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v560.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v560.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    integriteeParachainV35: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsIntegriteeParachainV35,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsIntegriteeParachainV35  {
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
