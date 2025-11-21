import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1009001: new StorageType('Preimage.StatusFor', 'Optional', [v1009001.H256], v1009001.OldRequestStatus) as StatusForV1009001,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1009001.H256): Promise<(v1009001.OldRequestStatus | undefined)>
    getMany(block: Block, keys: v1009001.H256[]): Promise<(v1009001.OldRequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1009001.H256[]>
    getKeys(block: Block, key: v1009001.H256): Promise<v1009001.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1009001.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1009001.H256): AsyncIterable<v1009001.H256[]>
    getPairs(block: Block): Promise<[k: v1009001.H256, v: (v1009001.OldRequestStatus | undefined)][]>
    getPairs(block: Block, key: v1009001.H256): Promise<[k: v1009001.H256, v: (v1009001.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1009001.H256, v: (v1009001.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1009001.H256): AsyncIterable<[k: v1009001.H256, v: (v1009001.OldRequestStatus | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1009001: new StorageType('Preimage.RequestStatusFor', 'Optional', [v1009001.H256], v1009001.RequestStatus) as RequestStatusForV1009001,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1009001.H256): Promise<(v1009001.RequestStatus | undefined)>
    getMany(block: Block, keys: v1009001.H256[]): Promise<(v1009001.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1009001.H256[]>
    getKeys(block: Block, key: v1009001.H256): Promise<v1009001.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1009001.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1009001.H256): AsyncIterable<v1009001.H256[]>
    getPairs(block: Block): Promise<[k: v1009001.H256, v: (v1009001.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v1009001.H256): Promise<[k: v1009001.H256, v: (v1009001.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1009001.H256, v: (v1009001.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1009001.H256): AsyncIterable<[k: v1009001.H256, v: (v1009001.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v1009001: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v1009001.H256, sts.number()])], sts.bytes()) as PreimageForV1009001,
}

export interface PreimageForV1009001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1009001.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1009001.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1009001.H256, number][]>
    getKeys(block: Block, key: [v1009001.H256, number]): Promise<[v1009001.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1009001.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1009001.H256, number]): AsyncIterable<[v1009001.H256, number][]>
    getPairs(block: Block): Promise<[k: [v1009001.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v1009001.H256, number]): Promise<[k: [v1009001.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1009001.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1009001.H256, number]): AsyncIterable<[k: [v1009001.H256, number], v: (Bytes | undefined)][]>
}
