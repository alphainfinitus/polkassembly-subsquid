import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV14 from '../integriteeParachainV14'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    integriteeParachainV14: new StorageType('Treasury.Proposals', 'Optional', [sts.number()], integriteeParachainV14.Proposal) as ProposalsIntegriteeParachainV14,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsIntegriteeParachainV14  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(integriteeParachainV14.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(integriteeParachainV14.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (integriteeParachainV14.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (integriteeParachainV14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (integriteeParachainV14.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (integriteeParachainV14.Proposal | undefined)][]>
}
