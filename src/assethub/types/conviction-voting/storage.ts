import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v2000000: new StorageType('ConvictionVoting.VotingFor', 'Default', [v2000000.AccountId32, sts.number()], v2000000.Type_912) as VotingForV2000000,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV2000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2000000.Type_912
    get(block: Block, key1: v2000000.AccountId32, key2: number): Promise<(v2000000.Type_912 | undefined)>
    getMany(block: Block, keys: [v2000000.AccountId32, number][]): Promise<(v2000000.Type_912 | undefined)[]>
    getKeys(block: Block): Promise<[v2000000.AccountId32, number][]>
    getKeys(block: Block, key1: v2000000.AccountId32): Promise<[v2000000.AccountId32, number][]>
    getKeys(block: Block, key1: v2000000.AccountId32, key2: number): Promise<[v2000000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2000000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2000000.AccountId32): AsyncIterable<[v2000000.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2000000.AccountId32, key2: number): AsyncIterable<[v2000000.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
    getPairs(block: Block, key1: v2000000.AccountId32): Promise<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
    getPairs(block: Block, key1: v2000000.AccountId32, key2: number): Promise<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2000000.AccountId32): AsyncIterable<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2000000.AccountId32, key2: number): AsyncIterable<[k: [v2000000.AccountId32, number], v: (v2000000.Type_912 | undefined)][]>
}
