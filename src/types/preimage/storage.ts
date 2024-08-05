import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v83 from '../v83'
import * as v127 from '../v127'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v83: new StorageType('Preimage.StatusFor', 'Optional', [v83.H256], v83.RequestStatus) as StatusForV83,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV83  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v83.H256): Promise<(v83.RequestStatus | undefined)>
    getMany(block: Block, keys: v83.H256[]): Promise<(v83.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v83.H256[]>
    getKeys(block: Block, key: v83.H256): Promise<v83.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v83.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v83.H256): AsyncIterable<v83.H256[]>
    getPairs(block: Block): Promise<[k: v83.H256, v: (v83.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v83.H256): Promise<[k: v83.H256, v: (v83.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v83.H256, v: (v83.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v83.H256): AsyncIterable<[k: v83.H256, v: (v83.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v83: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v83.H256, sts.number()])], sts.bytes()) as PreimageForV83,
}

export interface PreimageForV83  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v83.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v83.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v83.H256, number][]>
    getKeys(block: Block, key: [v83.H256, number]): Promise<[v83.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v83.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v83.H256, number]): AsyncIterable<[v83.H256, number][]>
    getPairs(block: Block): Promise<[k: [v83.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v83.H256, number]): Promise<[k: [v83.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v83.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v83.H256, number]): AsyncIterable<[k: [v83.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v127: new StorageType('Preimage.RequestStatusFor', 'Optional', [v127.H256], v127.RequestStatus) as RequestStatusForV127,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV127  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v127.H256): Promise<(v127.RequestStatus | undefined)>
    getMany(block: Block, keys: v127.H256[]): Promise<(v127.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v127.H256[]>
    getKeys(block: Block, key: v127.H256): Promise<v127.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v127.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v127.H256): AsyncIterable<v127.H256[]>
    getPairs(block: Block): Promise<[k: v127.H256, v: (v127.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v127.H256): Promise<[k: v127.H256, v: (v127.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v127.H256, v: (v127.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v127.H256): AsyncIterable<[k: v127.H256, v: (v127.RequestStatus | undefined)][]>
}
