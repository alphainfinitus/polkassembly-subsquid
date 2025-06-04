import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1900 from '../v1900'
import * as v2000 from '../v2000'
import * as v2100 from '../v2100'
import * as v2201 from '../v2201'
import * as v2301 from '../v2301'
import * as v2801 from '../v2801'
import * as v2901 from '../v2901'
import * as v3700 from '../v3700'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v1900: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v1900.Type_547) as ReferendumInfoForV1900,
    /**
     *  Information concerning any given referendum.
     */
    v2000: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2000.Type_552) as ReferendumInfoForV2000,
    /**
     *  Information concerning any given referendum.
     */
    v2100: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2100.Type_556) as ReferendumInfoForV2100,
    /**
     *  Information concerning any given referendum.
     */
    v2201: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2201.Type_556) as ReferendumInfoForV2201,
    /**
     *  Information concerning any given referendum.
     */
    v2301: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2301.Type_571) as ReferendumInfoForV2301,
    /**
     *  Information concerning any given referendum.
     */
    v2801: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2801.Type_603) as ReferendumInfoForV2801,
    /**
     *  Information concerning any given referendum.
     */
    v2901: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v2901.ReferendumInfo) as ReferendumInfoForV2901,
    /**
     *  Information concerning any given referendum.
     */
    v3700: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v3700.ReferendumInfo) as ReferendumInfoForV3700,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1900  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v1900.Type_547 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1900.Type_547 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1900.Type_547 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1900.Type_547 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1900.Type_547 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1900.Type_547 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2000.Type_552 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2000.Type_552 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2000.Type_552 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2000.Type_552 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2000.Type_552 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2000.Type_552 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2100.Type_556 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2100.Type_556 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2100.Type_556 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2100.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2100.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2100.Type_556 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2201  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2201.Type_556 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2201.Type_556 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2201.Type_556 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2201.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2201.Type_556 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2201.Type_556 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2301  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2301.Type_571 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2301.Type_571 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2301.Type_571 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2301.Type_571 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2301.Type_571 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2301.Type_571 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2801  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2801.Type_603 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2801.Type_603 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2801.Type_603 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2801.Type_603 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2801.Type_603 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2801.Type_603 | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV2901  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v2901.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v2901.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v2901.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v2901.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v2901.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v2901.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV3700  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v3700.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v3700.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v3700.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v3700.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v3700.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v3700.ReferendumInfo | undefined)][]>
}
