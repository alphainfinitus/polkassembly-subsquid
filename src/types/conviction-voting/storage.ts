import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v1009001: new StorageType('ConvictionVoting.VotingFor', 'Default', [v1009001.AccountId32, sts.number()], v1009001.Type_1096) as VotingForV1009001,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV1009001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1009001.Type_1096
    get(block: Block, key1: v1009001.AccountId32, key2: number): Promise<(v1009001.Type_1096 | undefined)>
    getMany(block: Block, keys: [v1009001.AccountId32, number][]): Promise<(v1009001.Type_1096 | undefined)[]>
    getKeys(block: Block): Promise<[v1009001.AccountId32, number][]>
    getKeys(block: Block, key1: v1009001.AccountId32): Promise<[v1009001.AccountId32, number][]>
    getKeys(block: Block, key1: v1009001.AccountId32, key2: number): Promise<[v1009001.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1009001.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1009001.AccountId32): AsyncIterable<[v1009001.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1009001.AccountId32, key2: number): AsyncIterable<[v1009001.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
    getPairs(block: Block, key1: v1009001.AccountId32): Promise<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
    getPairs(block: Block, key1: v1009001.AccountId32, key2: number): Promise<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1009001.AccountId32): AsyncIterable<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1009001.AccountId32, key2: number): AsyncIterable<[k: [v1009001.AccountId32, number], v: (v1009001.Type_1096 | undefined)][]>
}
