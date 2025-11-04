import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9420 from '../v9420'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v0: new StorageType('Balances.TotalIssuance', 'Default', [], v0.Balance) as TotalIssuanceV0,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Balance
    get(block: Block): Promise<(v0.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    v0: new StorageType('Balances.Account', 'Default', [v0.AccountId], v0.AccountData) as AccountV0,
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
    v9420: new StorageType('Balances.Account', 'Default', [v9420.AccountId32], v9420.AccountData) as AccountV9420,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface AccountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountData
    get(block: Block, key: v0.AccountId): Promise<(v0.AccountData | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
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
export interface AccountV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.AccountData
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.AccountData | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v9340: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV9340,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
