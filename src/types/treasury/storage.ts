import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v1001002: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v1001002.Proposal) as ProposalsV1001002,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1001002.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1001002.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1001002.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1001002.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1001002.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1001002.Proposal | undefined)][]>
}
