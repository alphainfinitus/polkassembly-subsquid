import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v9420: new StorageType('ConvictionVoting.VotingFor', 'Default', [v9420.AccountId32, sts.number()], v9420.Type_605) as VotingForV9420,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.Type_605
    get(block: Block, key1: v9420.AccountId32, key2: number): Promise<(v9420.Type_605 | undefined)>
    getMany(block: Block, keys: [v9420.AccountId32, number][]): Promise<(v9420.Type_605 | undefined)[]>
    getKeys(block: Block): Promise<[v9420.AccountId32, number][]>
    getKeys(block: Block, key1: v9420.AccountId32): Promise<[v9420.AccountId32, number][]>
    getKeys(block: Block, key1: v9420.AccountId32, key2: number): Promise<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9420.AccountId32): AsyncIterable<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9420.AccountId32, key2: number): AsyncIterable<[v9420.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairs(block: Block, key1: v9420.AccountId32): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairs(block: Block, key1: v9420.AccountId32, key2: number): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9420.AccountId32): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9420.AccountId32, key2: number): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
}
