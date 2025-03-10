import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000 from '../v1000'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v1000: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV1000,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v1000: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV1000,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
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
    v1000: new StorageType('Balances.Account', 'Default', [v1000.AccountId20], v1000.AccountData) as AccountV1000,
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
export interface AccountV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000.AccountData
    get(block: Block, key: v1000.AccountId20): Promise<(v1000.AccountData | undefined)>
    getMany(block: Block, keys: v1000.AccountId20[]): Promise<(v1000.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v1000.AccountId20[]>
    getKeys(block: Block, key: v1000.AccountId20): Promise<v1000.AccountId20[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.AccountId20[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.AccountId20): AsyncIterable<v1000.AccountId20[]>
    getPairs(block: Block): Promise<[k: v1000.AccountId20, v: (v1000.AccountData | undefined)][]>
    getPairs(block: Block, key: v1000.AccountId20): Promise<[k: v1000.AccountId20, v: (v1000.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.AccountId20, v: (v1000.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.AccountId20): AsyncIterable<[k: v1000.AccountId20, v: (v1000.AccountData | undefined)][]>
}
