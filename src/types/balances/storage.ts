import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v105 from '../v105'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v1: new StorageType('Balances.TotalIssuance', 'Default', [], v1.Balance) as TotalIssuanceV1,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block): Promise<(v1.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v1: new StorageType('Balances.Account', 'Default', [v1.AccountId], v1.AccountData) as AccountV1,
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
    v105: new StorageType('Balances.Account', 'Default', [v105.AccountId32], v105.AccountData) as AccountV105,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountData
    get(block: Block, key: v1.AccountId): Promise<(v1.AccountData | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
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
export interface AccountV105  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v105.AccountData
    get(block: Block, key: v105.AccountId32): Promise<(v105.AccountData | undefined)>
    getMany(block: Block, keys: v105.AccountId32[]): Promise<(v105.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v105.AccountId32[]>
    getKeys(block: Block, key: v105.AccountId32): Promise<v105.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v105.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v105.AccountId32): AsyncIterable<v105.AccountId32[]>
    getPairs(block: Block): Promise<[k: v105.AccountId32, v: (v105.AccountData | undefined)][]>
    getPairs(block: Block, key: v105.AccountId32): Promise<[k: v105.AccountId32, v: (v105.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v105.AccountId32, v: (v105.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v105.AccountId32): AsyncIterable<[k: v105.AccountId32, v: (v105.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v89: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV89,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV89  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
