import {sts, Result, Option, Bytes, BitSequence} from './support'

export type AccountId = Bytes

export interface AccountData {
    free: Balance
    reserved: Balance
    miscFrozen: Balance
    feeFrozen: Balance
}

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: Balance,
        reserved: Balance,
        miscFrozen: Balance,
        feeFrozen: Balance,
    }
})

export const AccountId = sts.bytes()

export type Balance = bigint

export const Balance = sts.bigint()
