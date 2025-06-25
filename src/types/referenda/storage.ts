import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v53102 from '../v53102'
import * as v54005 from '../v54005'
import * as v73101 from '../v73101'

export const referendumInfoFor =  {
    /**
     *  Information concerning any given referendum.
     */
    v53102: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v53102.ReferendumInfo) as ReferendumInfoForV53102,
    /**
     *  Information concerning any given referendum.
     */
    v54005: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v54005.ReferendumInfo) as ReferendumInfoForV54005,
    /**
     *  Information concerning any given referendum.
     */
    v73101: new StorageType('Referenda.ReferendumInfoFor', 'Optional', [sts.number()], v73101.ReferendumInfo) as ReferendumInfoForV73101,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV53102  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v53102.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v53102.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v53102.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v53102.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v53102.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v53102.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV54005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v54005.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v54005.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v54005.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v54005.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v54005.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v54005.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV73101  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v73101.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v73101.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v73101.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v73101.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v73101.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v73101.ReferendumInfo | undefined)][]>
}
