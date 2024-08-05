import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63 from '../v63'

export const proposalCount =  {
    /**
     *  Number of proposals that have been made.
     */
    v63: new StorageType('Treasury.ProposalCount', 'Default', [], sts.number()) as ProposalCountV63,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v63: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], v63.Proposal) as ProposalsV63,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v63.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v63.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v63.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v63.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v63.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v63.Proposal | undefined)][]>
}

export const approvals =  {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    v63: new StorageType('Treasury.Approvals', 'Default', [], sts.array(() => sts.number())) as ApprovalsV63,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
