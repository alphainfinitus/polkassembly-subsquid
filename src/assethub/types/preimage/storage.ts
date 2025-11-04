import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2000000 from '../v2000000'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v2000000: new StorageType('Preimage.StatusFor', 'Optional', [v2000000.H256], v2000000.OldRequestStatus) as StatusForV2000000,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2000000.H256): Promise<(v2000000.OldRequestStatus | undefined)>
    getMany(block: Block, keys: v2000000.H256[]): Promise<(v2000000.OldRequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v2000000.H256[]>
    getKeys(block: Block, key: v2000000.H256): Promise<v2000000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2000000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2000000.H256): AsyncIterable<v2000000.H256[]>
    getPairs(block: Block): Promise<[k: v2000000.H256, v: (v2000000.OldRequestStatus | undefined)][]>
    getPairs(block: Block, key: v2000000.H256): Promise<[k: v2000000.H256, v: (v2000000.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2000000.H256, v: (v2000000.OldRequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2000000.H256): AsyncIterable<[k: v2000000.H256, v: (v2000000.OldRequestStatus | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    v2000000: new StorageType('Preimage.RequestStatusFor', 'Optional', [v2000000.H256], v2000000.RequestStatus) as RequestStatusForV2000000,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2000000.H256): Promise<(v2000000.RequestStatus | undefined)>
    getMany(block: Block, keys: v2000000.H256[]): Promise<(v2000000.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<v2000000.H256[]>
    getKeys(block: Block, key: v2000000.H256): Promise<v2000000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2000000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v2000000.H256): AsyncIterable<v2000000.H256[]>
    getPairs(block: Block): Promise<[k: v2000000.H256, v: (v2000000.RequestStatus | undefined)][]>
    getPairs(block: Block, key: v2000000.H256): Promise<[k: v2000000.H256, v: (v2000000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2000000.H256, v: (v2000000.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2000000.H256): AsyncIterable<[k: v2000000.H256, v: (v2000000.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    v2000000: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v2000000.H256, sts.number()])], sts.bytes()) as PreimageForV2000000,
}

export interface PreimageForV2000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v2000000.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v2000000.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v2000000.H256, number][]>
    getKeys(block: Block, key: [v2000000.H256, number]): Promise<[v2000000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2000000.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v2000000.H256, number]): AsyncIterable<[v2000000.H256, number][]>
    getPairs(block: Block): Promise<[k: [v2000000.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v2000000.H256, number]): Promise<[k: [v2000000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2000000.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v2000000.H256, number]): AsyncIterable<[k: [v2000000.H256, number], v: (Bytes | undefined)][]>
}
