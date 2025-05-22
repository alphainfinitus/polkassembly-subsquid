import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v1001002: new StorageType('Preimage.StatusFor', 'Optional', [v1001002.H256], v1001002.OldRequestStatus) as StatusForV1001002,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001002.H256): Promise<(v1001002.OldRequestStatus | undefined)>
    getMany(block: Block, keys: v1001002.H256[]): Promise<(v1001002.OldRequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v1001002.H256[]>
    getKeys(block: Block, key: v1001002.H256): Promise<v1001002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.H256): AsyncIterable<v1001002.H256[]>
    getPairs(block: Block): Promise<[k: v1001002.H256, v: (v1001002.OldRequestStatus | undefined)][]>
    getPairs(block: Block, key: v1001002.H256): Promise<[k: v1001002.H256, v: (v1001002.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.H256, v: (v1001002.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.H256): AsyncIterable<[k: v1001002.H256, v: (v1001002.OldRequestStatus | undefined)][]>
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

export const preimageFor =  {
    v1001002: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v1001002.H256, sts.number()])], sts.bytes()) as PreimageForV1001002,
}

export interface PreimageForV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1001002.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1001002.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1001002.H256, number][]>
    getKeys(block: Block, key: [v1001002.H256, number]): Promise<[v1001002.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1001002.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1001002.H256, number]): AsyncIterable<[v1001002.H256, number][]>
    getPairs(block: Block): Promise<[k: [v1001002.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v1001002.H256, number]): Promise<[k: [v1001002.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1001002.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1001002.H256, number]): AsyncIterable<[k: [v1001002.H256, number], v: (Bytes | undefined)][]>
}
