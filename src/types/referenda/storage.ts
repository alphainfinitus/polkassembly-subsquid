import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'
import * as v1004003 from '../v1004003'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v1001002: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1001002.ReferendumInfo) as ReferendumInfoForV1001002,
    /**
     *  Information concerning any given referendum.
     */
    v1002000: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1002000.ReferendumInfo) as ReferendumInfoForV1002000,
    /**
     *  Information concerning any given referendum.
     */
    v1004003: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1004003.ReferendumInfo) as ReferendumInfoForV1004003,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1001002.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1001002.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1001002.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1001002.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1001002.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1001002.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1002000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1002000.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1002000.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1002000.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1002000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1002000.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1002000.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1004003  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1004003.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1004003.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1004003.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1004003.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1004003.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1004003.ReferendumInfo | undefined)][]>
}
