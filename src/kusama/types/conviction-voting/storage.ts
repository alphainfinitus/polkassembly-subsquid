import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9340 from '../v9340'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v9320: new StorageType('ConvictionVoting.VotingFor', 'Default', [v9320.AccountId32, sts.number()], v9320.Type_608) as VotingForV9320,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v9340: new StorageType('ConvictionVoting.VotingFor', 'Default', [v9340.AccountId32, sts.number()], v9340.Type_608) as VotingForV9340,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9320.Type_608
    get(block: Block, key1: v9320.AccountId32, key2: number): Promise<(v9320.Type_608 | undefined)>
    getMany(block: Block, keys: [v9320.AccountId32, number][]): Promise<(v9320.Type_608 | undefined)[]>
    getKeys(block: Block): Promise<[v9320.AccountId32, number][]>
    getKeys(block: Block, key1: v9320.AccountId32): Promise<[v9320.AccountId32, number][]>
    getKeys(block: Block, key1: v9320.AccountId32, key2: number): Promise<[v9320.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9320.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9320.AccountId32): AsyncIterable<[v9320.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9320.AccountId32, key2: number): AsyncIterable<[v9320.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
    getPairs(block: Block, key1: v9320.AccountId32): Promise<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
    getPairs(block: Block, key1: v9320.AccountId32, key2: number): Promise<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9320.AccountId32): AsyncIterable<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9320.AccountId32, key2: number): AsyncIterable<[k: [v9320.AccountId32, number], v: (v9320.Type_608 | undefined)][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.Type_608
    get(block: Block, key1: v9340.AccountId32, key2: number): Promise<(v9340.Type_608 | undefined)>
    getMany(block: Block, keys: [v9340.AccountId32, number][]): Promise<(v9340.Type_608 | undefined)[]>
    getKeys(block: Block): Promise<[v9340.AccountId32, number][]>
    getKeys(block: Block, key1: v9340.AccountId32): Promise<[v9340.AccountId32, number][]>
    getKeys(block: Block, key1: v9340.AccountId32, key2: number): Promise<[v9340.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9340.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9340.AccountId32): AsyncIterable<[v9340.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9340.AccountId32, key2: number): AsyncIterable<[v9340.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
    getPairs(block: Block, key1: v9340.AccountId32): Promise<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
    getPairs(block: Block, key1: v9340.AccountId32, key2: number): Promise<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9340.AccountId32): AsyncIterable<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9340.AccountId32, key2: number): AsyncIterable<[k: [v9340.AccountId32, number], v: (v9340.Type_608 | undefined)][]>
}
