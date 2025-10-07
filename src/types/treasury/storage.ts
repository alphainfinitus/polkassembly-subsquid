import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const proposals =  {
    /**
     *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
     *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
     * 
     *  Proposals that have been made.
     */
    v1009001: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v1009001.Proposal) as ProposalsV1009001,
}

/**
 *  DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
 *  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
 * 
 *  Proposals that have been made.
 */
export interface ProposalsV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1009001.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1009001.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1009001.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1009001.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1009001.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1009001.Proposal | undefined)][]>
}
