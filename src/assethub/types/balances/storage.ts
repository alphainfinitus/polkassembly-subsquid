import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v601 from '../v601'
import * as v9420 from '../v9420'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v601: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV601,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV601  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v601: new StorageType('Balances.Account', 'Default', [v601.AccountId32], v601.AccountData) as AccountV601,
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
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV601  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v601.AccountData
    get(block: Block, key: v601.AccountId32): Promise<(v601.AccountData | undefined)>
    getMany(block: Block, keys: v601.AccountId32[]): Promise<(v601.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v601.AccountId32[]>
    getKeys(block: Block, key: v601.AccountId32): Promise<v601.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v601.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v601.AccountId32): AsyncIterable<v601.AccountId32[]>
    getPairs(block: Block): Promise<[k: v601.AccountId32, v: (v601.AccountData | undefined)][]>
    getPairs(block: Block, key: v601.AccountId32): Promise<[k: v601.AccountId32, v: (v601.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v601.AccountId32, v: (v601.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v601.AccountId32): AsyncIterable<[k: v601.AccountId32, v: (v601.AccountData | undefined)][]>
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
    v9360: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV9360,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV9360  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
