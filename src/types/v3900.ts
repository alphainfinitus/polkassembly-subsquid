import {sts, Result, Option, Bytes, BitSequence} from './support'

export const TransactionV3: sts.Type<TransactionV3> = sts.closedEnum(() => {
    return  {
        EIP1559: EIP1559Transaction,
        EIP2930: EIP2930Transaction,
        EIP7702: EIP7702Transaction,
        Legacy: LegacyTransaction,
    }
})

export const LegacyTransaction: sts.Type<LegacyTransaction> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        signature: TransactionSignature,
    }
})

export const TransactionSignature: sts.Type<TransactionSignature> = sts.struct(() => {
    return  {
        v: TransactionRecoveryId,
        r: H256,
        s: H256,
    }
})

export const H256 = sts.bytes()

export const TransactionRecoveryId = sts.bigint()

export interface TransactionSignature {
    v: TransactionRecoveryId
    r: H256
    s: H256
}

export type H256 = Bytes

export type TransactionRecoveryId = bigint

export const TransactionAction: sts.Type<TransactionAction> = sts.closedEnum(() => {
    return  {
        Call: H160,
        Create: sts.unit(),
    }
})

export const H160 = sts.bytes()

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
    __kind: 'Call'
    value: H160
}

export interface TransactionAction_Create {
    __kind: 'Create'
}

export type H160 = Bytes

export interface LegacyTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    signature: TransactionSignature
}

export const EIP7702Transaction: sts.Type<EIP7702Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        maxPriorityFeePerGas: sts.bigint(),
        maxFeePerGas: sts.bigint(),
        gasLimit: sts.bigint(),
        destination: TransactionAction,
        value: sts.bigint(),
        data: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        authorizationList: sts.array(() => AuthorizationListItem),
        signature: Type_236,
    }
})

export const Type_236: sts.Type<Type_236> = sts.struct(() => {
    return  {
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

export interface Type_236 {
    oddYParity: boolean
    r: H256
    s: H256
}

export const AuthorizationListItem: sts.Type<AuthorizationListItem> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        address: H160,
        nonce: sts.bigint(),
        signature: MalleableTransactionSignature,
    }
})

export const MalleableTransactionSignature: sts.Type<MalleableTransactionSignature> = sts.struct(() => {
    return  {
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

export interface MalleableTransactionSignature {
    oddYParity: boolean
    r: H256
    s: H256
}

export interface AuthorizationListItem {
    chainId: bigint
    address: H160
    nonce: bigint
    signature: MalleableTransactionSignature
}

export const AccessListItem: sts.Type<AccessListItem> = sts.struct(() => {
    return  {
        address: H160,
        storageKeys: sts.array(() => H256),
    }
})

export interface AccessListItem {
    address: H160
    storageKeys: H256[]
}

export interface EIP7702Transaction {
    chainId: bigint
    nonce: bigint
    maxPriorityFeePerGas: bigint
    maxFeePerGas: bigint
    gasLimit: bigint
    destination: TransactionAction
    value: bigint
    data: Bytes
    accessList: AccessListItem[]
    authorizationList: AuthorizationListItem[]
    signature: Type_236
}

export const EIP2930Transaction: sts.Type<EIP2930Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        signature: Type_236,
    }
})

export interface EIP2930Transaction {
    chainId: bigint
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    signature: Type_236
}

export const EIP1559Transaction: sts.Type<EIP1559Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        maxPriorityFeePerGas: sts.bigint(),
        maxFeePerGas: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        signature: Type_236,
    }
})

export interface EIP1559Transaction {
    chainId: bigint
    nonce: bigint
    maxPriorityFeePerGas: bigint
    maxFeePerGas: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    signature: Type_236
}

export type TransactionV3 = TransactionV3_EIP1559 | TransactionV3_EIP2930 | TransactionV3_EIP7702 | TransactionV3_Legacy

export interface TransactionV3_EIP1559 {
    __kind: 'EIP1559'
    value: EIP1559Transaction
}

export interface TransactionV3_EIP2930 {
    __kind: 'EIP2930'
    value: EIP2930Transaction
}

export interface TransactionV3_EIP7702 {
    __kind: 'EIP7702'
    value: EIP7702Transaction
}

export interface TransactionV3_Legacy {
    __kind: 'Legacy'
    value: LegacyTransaction
}
