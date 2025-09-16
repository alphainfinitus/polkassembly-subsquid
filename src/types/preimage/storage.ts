import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV28 from '../integriteeParachainV28'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    integriteeParachainV28: new StorageType('Preimage.StatusFor', 'Optional', [integriteeParachainV28.H256], integriteeParachainV28.RequestStatus) as StatusForIntegriteeParachainV28,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: integriteeParachainV28.H256): Promise<(integriteeParachainV28.RequestStatus | undefined)>
    getMany(block: Block, keys: integriteeParachainV28.H256[]): Promise<(integriteeParachainV28.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV28.H256[]>
    getKeys(block: Block, key: integriteeParachainV28.H256): Promise<integriteeParachainV28.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV28.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV28.H256): AsyncIterable<integriteeParachainV28.H256[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.RequestStatus | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV28.H256): Promise<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV28.H256): AsyncIterable<[k: integriteeParachainV28.H256, v: (integriteeParachainV28.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    integriteeParachainV28: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [integriteeParachainV28.H256, sts.number()])], integriteeParachainV28.BoundedVec) as PreimageForIntegriteeParachainV28,
}

export interface PreimageForIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [integriteeParachainV28.H256, number]): Promise<(integriteeParachainV28.BoundedVec | undefined)>
    getMany(block: Block, keys: [integriteeParachainV28.H256, number][]): Promise<(integriteeParachainV28.BoundedVec | undefined)[]>
    getKeys(block: Block): Promise<[integriteeParachainV28.H256, number][]>
    getKeys(block: Block, key: [integriteeParachainV28.H256, number]): Promise<[integriteeParachainV28.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[integriteeParachainV28.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [integriteeParachainV28.H256, number]): AsyncIterable<[integriteeParachainV28.H256, number][]>
    getPairs(block: Block): Promise<[k: [integriteeParachainV28.H256, number], v: (integriteeParachainV28.BoundedVec | undefined)][]>
    getPairs(block: Block, key: [integriteeParachainV28.H256, number]): Promise<[k: [integriteeParachainV28.H256, number], v: (integriteeParachainV28.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [integriteeParachainV28.H256, number], v: (integriteeParachainV28.BoundedVec | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [integriteeParachainV28.H256, number]): AsyncIterable<[k: [integriteeParachainV28.H256, number], v: (integriteeParachainV28.BoundedVec | undefined)][]>
}
