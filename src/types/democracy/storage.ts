import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63 from '../v63'
import * as v83 from '../v83'

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v63: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v63.H256, v63.AccountId32]))) as PublicPropsV63,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v83: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v83.Bounded, v83.AccountId32]))) as PublicPropsV83,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v63.H256, v63.AccountId32][]
    get(block: Block): Promise<([number, v63.H256, v63.AccountId32][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV83  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v83.Bounded, v83.AccountId32][]
    get(block: Block): Promise<([number, v83.Bounded, v83.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v63: new StorageType('Democracy.DepositOf', 'Optional', [sts.number()], sts.tuple(() => [sts.array(() => v63.AccountId32), sts.bigint()])) as DepositOfV63,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([v63.AccountId32[], bigint] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v63.AccountId32[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v63.AccountId32[], bigint] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v63.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v63.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v63.AccountId32[], bigint] | undefined)][]>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v63: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v63.ReferendumInfo) as ReferendumInfoOfV63,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v83: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v83.ReferendumInfo) as ReferendumInfoOfV83,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v63.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v63.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v63.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v63.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v63.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v63.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV83  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v83.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v83.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v83.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v83.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v83.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v83.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v63: new StorageType('Democracy.VotingOf', 'Default', [v63.AccountId32], v63.Voting) as VotingOfV63,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV63  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63.Voting
    get(block: Block, key: v63.AccountId32): Promise<(v63.Voting | undefined)>
    getMany(block: Block, keys: v63.AccountId32[]): Promise<(v63.Voting | undefined)[]>
    getKeys(block: Block): Promise<v63.AccountId32[]>
    getKeys(block: Block, key: v63.AccountId32): Promise<v63.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63.AccountId32): AsyncIterable<v63.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63.AccountId32, v: (v63.Voting | undefined)][]>
    getPairs(block: Block, key: v63.AccountId32): Promise<[k: v63.AccountId32, v: (v63.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63.AccountId32, v: (v63.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63.AccountId32): AsyncIterable<[k: v63.AccountId32, v: (v63.Voting | undefined)][]>
}
