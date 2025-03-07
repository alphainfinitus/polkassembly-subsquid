import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1013 from '../v1013'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1013: new StorageType('Preimage.StatusFor', 'Optional', [v1013.H256], v1013.OldRequestStatus) as StatusForV1013,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1013.H256): Promise<(v1013.OldRequestStatus | undefined)>
    getMany(block: Block, keys: v1013.H256[]): Promise<(v1013.OldRequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1013.H256[]>
    getKeys(block: Block, key: v1013.H256): Promise<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<v1013.H256[]>
    getPairs(block: Block): Promise<[k: v1013.H256, v: (v1013.OldRequestStatus | undefined)][]>
    getPairs(block: Block, key: v1013.H256): Promise<[k: v1013.H256, v: (v1013.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1013.H256, v: (v1013.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<[k: v1013.H256, v: (v1013.OldRequestStatus | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1013: new StorageType('Preimage.RequestStatusFor', 'Optional', [v1013.H256], v1013.RequestStatus) as RequestStatusForV1013,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1013.H256): Promise<(v1013.RequestStatus | undefined)>
    getMany(block: Block, keys: v1013.H256[]): Promise<(v1013.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1013.H256[]>
    getKeys(block: Block, key: v1013.H256): Promise<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1013.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<v1013.H256[]>
    getPairs(block: Block): Promise<[k: v1013.H256, v: (v1013.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1013.H256): Promise<[k: v1013.H256, v: (v1013.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1013.H256, v: (v1013.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1013.H256): AsyncIterable<[k: v1013.H256, v: (v1013.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v1013: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v1013.H256, sts.number()])], sts.bytes()) as PreimageForV1013,
}

export interface PreimageForV1013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1013.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1013.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1013.H256, number][]>
    getKeys(block: Block, key: [v1013.H256, number]): Promise<[v1013.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1013.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1013.H256, number]): AsyncIterable<[v1013.H256, number][]>
    getPairs(block: Block): Promise<[k: [v1013.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v1013.H256, number]): Promise<[k: [v1013.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1013.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1013.H256, number]): AsyncIterable<[k: [v1013.H256, number], v: (Bytes | undefined)][]>
}
