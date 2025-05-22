import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v1001002: new StorageType('ConvictionVoting.VotingFor', 'Default', [v1001002.AccountId32, sts.number()], v1001002.Voting) as VotingForV1001002,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.Voting
    get(block: Block, key1: v1001002.AccountId32, key2: number): Promise<(v1001002.Voting | undefined)>
    getMany(block: Block, keys: [v1001002.AccountId32, number][]): Promise<(v1001002.Voting | undefined)[]>
    getKeys(block: Block): Promise<[v1001002.AccountId32, number][]>
    getKeys(block: Block, key1: v1001002.AccountId32): Promise<[v1001002.AccountId32, number][]>
    getKeys(block: Block, key1: v1001002.AccountId32, key2: number): Promise<[v1001002.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1001002.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1001002.AccountId32): AsyncIterable<[v1001002.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1001002.AccountId32, key2: number): AsyncIterable<[v1001002.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
    getPairs(block: Block, key1: v1001002.AccountId32): Promise<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
    getPairs(block: Block, key1: v1001002.AccountId32, key2: number): Promise<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1001002.AccountId32): AsyncIterable<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1001002.AccountId32, key2: number): AsyncIterable<[k: [v1001002.AccountId32, number], v: (v1001002.Voting | undefined)][]>
}
