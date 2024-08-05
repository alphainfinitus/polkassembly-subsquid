import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v133 from '../v133'

export const proposalCount =  {
    /**
     *  Number of proposals that have been made.
     */
    v133: new StorageType('CommunityTreasury.ProposalCount', 'Default', [], sts.number()) as ProposalCountV133,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountV133  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v133: new StorageType('CommunityTreasury.Proposals', 'Optional', [sts.number()], v133.Proposal) as ProposalsV133,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV133  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v133.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v133.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v133.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v133.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v133.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v133.Proposal | undefined)][]>
}

export const approvals =  {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    v133: new StorageType('CommunityTreasury.Approvals', 'Default', [], sts.array(() => sts.number())) as ApprovalsV133,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsV133  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
