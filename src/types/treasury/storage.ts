import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1013 from '../v1013'

export const proposals =  {
    /**
     *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
     *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
     * 
     *  Proposals that have been made.
     */
    v1013: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v1013.Proposal) as ProposalsV1013,
}

/**
 *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
 *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
 * 
 *  Proposals that have been made.
 */
export interface ProposalsV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1013.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1013.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1013.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1013.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1013.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1013.Proposal | undefined)][]>
}
