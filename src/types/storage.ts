import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v900 from './v900'
import * as v2000 from './v2000'
import * as v2403 from './v2403'
import * as v2501 from './v2501'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '17669917f628c38832645ae9b39d0bab5a99964e3446b9b2ef904cad2f4bd653'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV900(): BalancesAccountStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV2501(): boolean {
        return this.getTypeHash() === 'ee2115b027893d1c56456aa70c4c809a607243f8ae340fcc3174a4fda6b5fa60'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV2501(): BalancesAccountStorageV2501 {
        assert(this.isV2501)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV900 {
    get(key: Uint8Array): Promise<v900.AccountData>
    getAll(): Promise<v900.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v900.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV2501 {
    get(key: Uint8Array): Promise<v2501.AccountData>
    getAll(): Promise<v2501.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v2501.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2501.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2501.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2501.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2501.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV2201(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV2201(): BalancesInactiveIssuanceStorageV2201 {
        assert(this.isV2201)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV2201 {
    get(): Promise<bigint>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV900(): BalancesTotalIssuanceStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV900 {
    get(): Promise<bigint>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV2403(): boolean {
        return this.getTypeHash() === '9723a5b8948dbd837b6b519d58e5bcf4305ffd6e57bcda3af8564bfa065eed44'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV2403(): ConvictionVotingVotingForStorageV2403 {
        assert(this.isV2403)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV2403 {
    get(key1: Uint8Array, key2: number): Promise<v2403.Type_499>
    getAll(): Promise<v2403.Type_499[]>
    getMany(keys: [Uint8Array, number][]): Promise<v2403.Type_499[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v2403.Type_499][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v2403.Type_499][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v2403.Type_499][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v2403.Type_499][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v2403.Type_499][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v2403.Type_499][]>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV900(): DemocracyPreimagesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV900 {
    get(key: Uint8Array): Promise<(v900.PreimageStatus | undefined)>
    getAll(): Promise<v900.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v900.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV900(): DemocracyPublicPropCountStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV900 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV900(): DemocracyPublicPropsStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ce1d22fdfbf2ba6bbd40606fd5bbb2dd09374a075a2781ce2f2306ae8bc75205'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV2000(): DemocracyPublicPropsStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV900 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV2000 {
    get(): Promise<[number, v2000.Bounded, Uint8Array][]>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV900(): DemocracyReferendumInfoOfStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV2000(): DemocracyReferendumInfoOfStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV900 {
    get(key: number): Promise<(v900.ReferendumInfo | undefined)>
    getAll(): Promise<v900.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v900.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV2000 {
    get(key: number): Promise<(v2000.ReferendumInfo | undefined)>
    getAll(): Promise<v2000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2000.ReferendumInfo][]>
}

export class EthereumCurrentTransactionStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ethereum'
    }

    protected getName() {
        return 'CurrentTransactionStatuses'
    }

    /**
     *  The current transaction statuses.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'e42d9c1a7dbca2e4e0301367b0c021b885fe9bf9ce8eadadb8b48112a96cf49e'
    }

    /**
     *  The current transaction statuses.
     */
    get asV900(): EthereumCurrentTransactionStatusesStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  The current transaction statuses.
 */
export interface EthereumCurrentTransactionStatusesStorageV900 {
    get(): Promise<(v900.TransactionStatus[] | undefined)>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV2000(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV2000(): PreimagePreimageForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

export interface PreimagePreimageForStorageV2000 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV2000(): boolean {
        return this.getTypeHash() === '9a33bfa28cc58666dd8311814d92644200db23ab4156aa19d72d802536a0f95f'
    }

    /**
     *  The request status of a given hash.
     */
    get asV2000(): PreimageStatusForStorageV2000 {
        assert(this.isV2000)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV2000 {
    get(key: Uint8Array): Promise<(v2000.RequestStatus | undefined)>
    getAll(): Promise<v2000.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v2000.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2000.RequestStatus][]>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV2403(): boolean {
        return this.getTypeHash() === '2391acb69682bfc2b37325726afeadd96b5588a1a812398414eacb8bd3c94d59'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV2403(): ReferendaReferendumInfoForStorageV2403 {
        assert(this.isV2403)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV2403 {
    get(key: number): Promise<(v2403.Type_511 | undefined)>
    getAll(): Promise<v2403.Type_511[]>
    getMany(keys: number[]): Promise<(v2403.Type_511 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2403.Type_511][]>
    getPairs(key: number): Promise<[k: number, v: v2403.Type_511][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2403.Type_511][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2403.Type_511][]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV900(): boolean {
        return this.getTypeHash() === 'a83a7372c51978aa017bd09db5672f3ea3957f0882455abd9726ac2b6d4b61dc'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV900(): SystemAccountStorageV900 {
        assert(this.isV900)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2501(): boolean {
        return this.getTypeHash() === '7983bbc1ae8edba4f5e13a7cd91a68076c89d6d422e9438dacd92a53008c3751'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2501(): SystemAccountStorageV2501 {
        assert(this.isV2501)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV900 {
    get(key: Uint8Array): Promise<v900.AccountInfo>
    getAll(): Promise<v900.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v900.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v900.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v900.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v900.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v900.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2501 {
    get(key: Uint8Array): Promise<v2501.AccountInfo>
    getAll(): Promise<v2501.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2501.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2501.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2501.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2501.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2501.AccountInfo][]>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV900(): boolean {
        return this.getTypeHash() === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
    }

    /**
     *  Proposals that have been made.
     */
    get asV900(): TreasuryProposalsStorageV900 {
        assert(this.isV900)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV900 {
    get(key: number): Promise<(v900.Proposal | undefined)>
    getAll(): Promise<v900.Proposal[]>
    getMany(keys: number[]): Promise<(v900.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v900.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v900.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v900.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v900.Proposal][]>
}
