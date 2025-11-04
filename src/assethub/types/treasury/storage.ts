import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const proposals =  {
    /**
     *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
     *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
     * 
     *  Proposals that have been made.
     */
    v2000000: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v2000000.Proposal) as ProposalsV2000000,
}

/**
 *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
 *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
 * 
 *  Proposals that have been made.
 */
export interface ProposalsV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2000000.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2000000.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2000000.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2000000.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2000000.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2000000.Proposal | undefined)][]>
}
