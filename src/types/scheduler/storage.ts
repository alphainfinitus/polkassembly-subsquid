import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v39 from '../v39'
import * as v40 from '../v40'
import * as v41 from '../v41'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v48 from '../v48'
import * as v49 from '../v49'
import * as v61 from '../v61'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v34: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v34.ScheduledV3))) as AgendaV34,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v35: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v35.ScheduledV3))) as AgendaV35,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v36: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v36.ScheduledV3))) as AgendaV36,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v37: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v37.ScheduledV3))) as AgendaV37,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v38: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v38.ScheduledV3))) as AgendaV38,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v39: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v39.ScheduledV3))) as AgendaV39,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v40: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v40.ScheduledV3))) as AgendaV40,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v41: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v41.ScheduledV3))) as AgendaV41,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v42: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v42.ScheduledV3))) as AgendaV42,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v46: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v46.Scheduled))) as AgendaV46,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v48: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v48.Scheduled))) as AgendaV48,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v49: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v49.Scheduled))) as AgendaV49,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v61: new StorageType('Scheduler.Agenda', 'Default', [sts.bigint()], sts.array(() => sts.option(() => v61.Scheduled))) as AgendaV61,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV34  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v34.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v34.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v34.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v34.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v34.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v34.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v34.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV35  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v35.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v35.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v35.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v35.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v35.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v35.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v35.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV36  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v36.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v36.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v36.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v36.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v36.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v36.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v36.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v37.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v37.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v37.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v37.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v37.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v37.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v37.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v38.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v38.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v38.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v38.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v38.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v38.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v38.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV39  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v39.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v39.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v39.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v39.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v39.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v39.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v39.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV40  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v40.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v40.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v40.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v40.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v40.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v40.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v40.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV41  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v41.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v41.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v41.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v41.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v41.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v41.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v41.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v42.ScheduledV3 | undefined)[]
    get(block: Block, key: bigint): Promise<((v42.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v42.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v46.Scheduled | undefined)[]
    get(block: Block, key: bigint): Promise<((v46.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v46.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v46.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v46.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v46.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v46.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV48  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v48.Scheduled | undefined)[]
    get(block: Block, key: bigint): Promise<((v48.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v48.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v48.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v48.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v48.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v48.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV49  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v49.Scheduled | undefined)[]
    get(block: Block, key: bigint): Promise<((v49.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v49.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v49.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v49.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v49.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v49.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV61  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v61.Scheduled | undefined)[]
    get(block: Block, key: bigint): Promise<((v61.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<((v61.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ((v61.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ((v61.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ((v61.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ((v61.Scheduled | undefined)[] | undefined)][]>
}
