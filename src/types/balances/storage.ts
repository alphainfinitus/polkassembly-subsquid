import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as integriteeParachainV3 from '../integriteeParachainV3'
import * as integriteeParachainV35 from '../integriteeParachainV35'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    integriteeParachainV3: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceIntegriteeParachainV3,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceIntegriteeParachainV3  {
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
    integriteeParachainV3: new StorageType('Balances.Account', 'Default', [integriteeParachainV3.AccountId32], integriteeParachainV3.AccountData) as AccountIntegriteeParachainV3,
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
    integriteeParachainV35: new StorageType('Balances.Account', 'Default', [integriteeParachainV35.AccountId32], integriteeParachainV35.AccountData) as AccountIntegriteeParachainV35,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountIntegriteeParachainV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): integriteeParachainV3.AccountData
    get(block: Block, key: integriteeParachainV3.AccountId32): Promise<(integriteeParachainV3.AccountData | undefined)>
    getMany(block: Block, keys: integriteeParachainV3.AccountId32[]): Promise<(integriteeParachainV3.AccountData | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV3.AccountId32[]>
    getKeys(block: Block, key: integriteeParachainV3.AccountId32): Promise<integriteeParachainV3.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV3.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV3.AccountId32): AsyncIterable<integriteeParachainV3.AccountId32[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV3.AccountId32, v: (integriteeParachainV3.AccountData | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV3.AccountId32): Promise<[k: integriteeParachainV3.AccountId32, v: (integriteeParachainV3.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV3.AccountId32, v: (integriteeParachainV3.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV3.AccountId32): AsyncIterable<[k: integriteeParachainV3.AccountId32, v: (integriteeParachainV3.AccountData | undefined)][]>
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
export interface AccountIntegriteeParachainV35  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): integriteeParachainV35.AccountData
    get(block: Block, key: integriteeParachainV35.AccountId32): Promise<(integriteeParachainV35.AccountData | undefined)>
    getMany(block: Block, keys: integriteeParachainV35.AccountId32[]): Promise<(integriteeParachainV35.AccountData | undefined)[]>
    getKeys(block: Block): Promise<integriteeParachainV35.AccountId32[]>
    getKeys(block: Block, key: integriteeParachainV35.AccountId32): Promise<integriteeParachainV35.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<integriteeParachainV35.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: integriteeParachainV35.AccountId32): AsyncIterable<integriteeParachainV35.AccountId32[]>
    getPairs(block: Block): Promise<[k: integriteeParachainV35.AccountId32, v: (integriteeParachainV35.AccountData | undefined)][]>
    getPairs(block: Block, key: integriteeParachainV35.AccountId32): Promise<[k: integriteeParachainV35.AccountId32, v: (integriteeParachainV35.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: integriteeParachainV35.AccountId32, v: (integriteeParachainV35.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: integriteeParachainV35.AccountId32): AsyncIterable<[k: integriteeParachainV35.AccountId32, v: (integriteeParachainV35.AccountData | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    integriteeParachainV28: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceIntegriteeParachainV28,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceIntegriteeParachainV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
