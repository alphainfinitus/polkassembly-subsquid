import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v13 from '../v13'
import * as v25 from '../v25'

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    v0: new StorageType('Treasury.Proposals', 'Optional', [v0.ProposalIndex], v0.TreasuryProposal) as ProposalsV0,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ProposalIndex): Promise<(v0.TreasuryProposal | undefined)>
    getMany(block: Block, keys: v0.ProposalIndex[]): Promise<(v0.TreasuryProposal | undefined)[]>
    getKeys(block: Block): Promise<v0.ProposalIndex[]>
    getKeys(block: Block, key: v0.ProposalIndex): Promise<v0.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ProposalIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ProposalIndex): AsyncIterable<v0.ProposalIndex[]>
    getPairs(block: Block): Promise<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairs(block: Block, key: v0.ProposalIndex): Promise<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ProposalIndex): AsyncIterable<[k: v0.ProposalIndex, v: (v0.TreasuryProposal | undefined)][]>
}

export const tips =  {
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v0: new StorageType('Treasury.Tips', 'Optional', [v0.Hash], v0.OpenTip) as TipsV0,
    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    v13: new StorageType('Treasury.Tips', 'Optional', [v13.Hash], v13.OpenTip) as TipsV13,
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(v0.OpenTip | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(v0.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (v0.OpenTip | undefined)][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.Hash): Promise<(v13.OpenTip | undefined)>
    getMany(block: Block, keys: v13.Hash[]): Promise<(v13.OpenTip | undefined)[]>
    getKeys(block: Block): Promise<v13.Hash[]>
    getKeys(block: Block, key: v13.Hash): Promise<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<v13.Hash[]>
    getPairs(block: Block): Promise<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairs(block: Block, key: v13.Hash): Promise<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.Hash): AsyncIterable<[k: v13.Hash, v: (v13.OpenTip | undefined)][]>
}

export const reasons =  {
    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    v0: new StorageType('Treasury.Reasons', 'Optional', [v0.Hash], sts.bytes()) as ReasonsV0,
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface ReasonsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (Bytes | undefined)][]>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    v25: new StorageType('Treasury.Bounties', 'Optional', [v25.BountyIndex], v25.Bounty) as BountiesV25,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.BountyIndex): Promise<(v25.Bounty | undefined)>
    getMany(block: Block, keys: v25.BountyIndex[]): Promise<(v25.Bounty | undefined)[]>
    getKeys(block: Block): Promise<v25.BountyIndex[]>
    getKeys(block: Block, key: v25.BountyIndex): Promise<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<v25.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairs(block: Block, key: v25.BountyIndex): Promise<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<[k: v25.BountyIndex, v: (v25.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    v25: new StorageType('Treasury.BountyDescriptions', 'Optional', [v25.BountyIndex], sts.bytes()) as BountyDescriptionsV25,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsV25  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v25.BountyIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v25.BountyIndex[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v25.BountyIndex[]>
    getKeys(block: Block, key: v25.BountyIndex): Promise<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.BountyIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<v25.BountyIndex[]>
    getPairs(block: Block): Promise<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v25.BountyIndex): Promise<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.BountyIndex): AsyncIterable<[k: v25.BountyIndex, v: (Bytes | undefined)][]>
}
