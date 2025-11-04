import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'
import * as v1002000 from '../v1002000'
import * as v1005001 from '../v1005001'
import * as v1007001 from '../v1007001'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v9420: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v9420.Type_617) as ReferendumInfoForV9420,
    /**
     *  Information concerning any given referendum.
     */
    v1000001: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1000001.ReferendumInfo) as ReferendumInfoForV1000001,
    /**
     *  Information concerning any given referendum.
     */
    v1002000: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1002000.ReferendumInfo) as ReferendumInfoForV1002000,
    /**
     *  Information concerning any given referendum.
     */
    v1005001: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1005001.ReferendumInfo) as ReferendumInfoForV1005001,
    /**
     *  Information concerning any given referendum.
     */
    v1007001: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1007001.ReferendumInfo) as ReferendumInfoForV1007001,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.Type_617 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.Type_617 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.Type_617 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1000001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1000001.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1000001.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1000001.ReferendumInfo | undefined)][]>
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
export interface ReferendumInfoForV1005001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1005001.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1005001.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1005001.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1005001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1005001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1005001.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1007001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1007001.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1007001.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1007001.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1007001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1007001.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1007001.ReferendumInfo | undefined)][]>
}
