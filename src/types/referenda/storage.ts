import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v1009001: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1009001.Type_1101) as ReferendumInfoForV1009001,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1009001.Type_1101 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1009001.Type_1101 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1009001.Type_1101 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1009001.Type_1101 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1009001.Type_1101 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1009001.Type_1101 | undefined)][]>
}
