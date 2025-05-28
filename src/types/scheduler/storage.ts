import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1003000 from '../v1003000'
import * as v1005001 from '../v1005001'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9420: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9420.Scheduled))) as AgendaV9420,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1000000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1000000.Scheduled))) as AgendaV1000000,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1002000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1002000.Scheduled))) as AgendaV1002000,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1002004: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1002004.Scheduled))) as AgendaV1002004,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1003000: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1003000.Scheduled))) as AgendaV1003000,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1005001: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1005001.Scheduled))) as AgendaV1005001,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9420.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9420.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9420.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1000000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1000000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1000000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1000000.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1002000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1002000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1002000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1002000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1002000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1002000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1002000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1002000.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1002004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1002004.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1002004.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1002004.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1002004.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1002004.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1002004.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1002004.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1003000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1003000.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1003000.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1003000.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1003000.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1003000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1003000.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1003000.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1005001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1005001.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1005001.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1005001.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1005001.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1005001.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1005001.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1005001.Scheduled | undefined)[] | undefined)][]>
}
