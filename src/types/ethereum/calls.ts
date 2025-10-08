import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v49 from '../v49'
import * as v1201 from '../v1201'
import * as v3900 from '../v3900'

export const transact =  {
    name: 'Ethereum.transact',
    /**
     *  Transact an Ethereum transaction.
     */
    v49: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v49.EthTransaction,
        })
    ),
    /**
     * Transact an Ethereum transaction.
     */
    v1201: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v1201.TransactionV2,
        })
    ),
    /**
     * Transact an Ethereum transaction.
     */
    v3900: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v3900.TransactionV3,
        })
    ),
}
