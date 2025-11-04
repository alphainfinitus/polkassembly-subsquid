import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9170 from '../v9170'
import * as v9340 from '../v9340'
import * as v1001002 from '../v1001002'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v9170: new StorageType('Preimage.StatusFor', 'Optional', [v9170.H256], v9170.RequestStatus) as StatusForV9170,
    /**
     *  The request status of a given hash.
     */
    v9340: new StorageType('Preimage.StatusFor', 'Optional', [v9340.H256], v9340.RequestStatus) as StatusForV9340,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9170.H256): Promise<(v9170.RequestStatus | undefined)>
    getMany(block: Block, keys: v9170.H256[]): Promise<(v9170.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v9170.H256[]>
    getKeys(block: Block, key: v9170.H256): Promise<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<v9170.H256[]>
    getPairs(block: Block): Promise<[k: v9170.H256, v: (v9170.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v9170.H256): Promise<[k: v9170.H256, v: (v9170.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9170.H256, v: (v9170.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<[k: v9170.H256, v: (v9170.RequestStatus | undefined)][]>
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9340.H256): Promise<(v9340.RequestStatus | undefined)>
    getMany(block: Block, keys: v9340.H256[]): Promise<(v9340.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v9340.H256[]>
    getKeys(block: Block, key: v9340.H256): Promise<v9340.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.H256): AsyncIterable<v9340.H256[]>
    getPairs(block: Block): Promise<[k: v9340.H256, v: (v9340.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v9340.H256): Promise<[k: v9340.H256, v: (v9340.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.H256, v: (v9340.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.H256): AsyncIterable<[k: v9340.H256, v: (v9340.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    /**
     *  The preimages stored by this pallet.
     */
    v9170: new StorageType('Preimage.PreimageFor', 'Optional', [v9170.H256], v9170.BoundedVec) as PreimageForV9170,
    v9340: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v9340.H256, sts.number()])], sts.bytes()) as PreimageForV9340,
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimageForV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9170.H256): Promise<(v9170.BoundedVec | undefined)>
    getMany(block: Block, keys: v9170.H256[]): Promise<(v9170.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<v9170.H256[]>
    getKeys(block: Block, key: v9170.H256): Promise<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9170.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<v9170.H256[]>
    getPairs(block: Block): Promise<[k: v9170.H256, v: (v9170.BoundedVec | undefined)][]>
    getPairs(block: Block, key: v9170.H256): Promise<[k: v9170.H256, v: (v9170.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9170.H256, v: (v9170.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9170.H256): AsyncIterable<[k: v9170.H256, v: (v9170.BoundedVec | undefined)][]>
}

export interface PreimageForV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9340.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v9340.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v9340.H256, number][]>
    getKeys(block: Block, key: [v9340.H256, number]): Promise<[v9340.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9340.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9340.H256, number]): AsyncIterable<[v9340.H256, number][]>
    getPairs(block: Block): Promise<[k: [v9340.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v9340.H256, number]): Promise<[k: [v9340.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9340.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9340.H256, number]): AsyncIterable<[k: [v9340.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1001002: new StorageType('Preimage.RequestStatusFor', 'Optional', [v1001002.H256], v1001002.RequestStatus) as RequestStatusForV1001002,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001002.H256): Promise<(v1001002.RequestStatus | undefined)>
    getMany(block: Block, keys: v1001002.H256[]): Promise<(v1001002.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1001002.H256[]>
    getKeys(block: Block, key: v1001002.H256): Promise<v1001002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.H256): AsyncIterable<v1001002.H256[]>
    getPairs(block: Block): Promise<[k: v1001002.H256, v: (v1001002.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1001002.H256): Promise<[k: v1001002.H256, v: (v1001002.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.H256, v: (v1001002.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.H256): AsyncIterable<[k: v1001002.H256, v: (v1001002.RequestStatus | undefined)][]>
}
