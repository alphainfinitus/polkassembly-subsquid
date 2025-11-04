import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v2000000: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2000000.Type_917) as ReferendumInfoForV2000000,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2000000.Type_917 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2000000.Type_917 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2000000.Type_917 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2000000.Type_917 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2000000.Type_917 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2000000.Type_917 | undefined)][]>
}
