import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v56 from '../v56'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v26: new StorageType('Balances.TotalIssuance', 'Default', [], v26.Balance) as TotalIssuanceV26,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.Balance
    get(block: Block): Promise<(v26.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v26: new StorageType('Balances.Account', 'Default', [v26.AccountId], v26.AccountData) as AccountV26,
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
    v56: new StorageType('Balances.Account', 'Default', [v56.AccountId32], v56.AccountData) as AccountV56,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountData
    get(block: Block, key: v26.AccountId): Promise<(v26.AccountData | undefined)>
    getMany(block: Block, keys: v26.AccountId[]): Promise<(v26.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v26.AccountId[]>
    getKeys(block: Block, key: v26.AccountId): Promise<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<v26.AccountId[]>
    getPairs(block: Block): Promise<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairs(block: Block, key: v26.AccountId): Promise<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.AccountId): AsyncIterable<[k: v26.AccountId, v: (v26.AccountData | undefined)][]>
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
export interface AccountV56  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v56.AccountData
    get(block: Block, key: v56.AccountId32): Promise<(v56.AccountData | undefined)>
    getMany(block: Block, keys: v56.AccountId32[]): Promise<(v56.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v56.AccountId32[]>
    getKeys(block: Block, key: v56.AccountId32): Promise<v56.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v56.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v56.AccountId32): AsyncIterable<v56.AccountId32[]>
    getPairs(block: Block): Promise<[k: v56.AccountId32, v: (v56.AccountData | undefined)][]>
    getPairs(block: Block, key: v56.AccountId32): Promise<[k: v56.AccountId32, v: (v56.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v56.AccountId32, v: (v56.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v56.AccountId32): AsyncIterable<[k: v56.AccountId32, v: (v56.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v48: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV48,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV48  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
