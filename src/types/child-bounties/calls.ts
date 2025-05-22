import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const proposeCurator =  {
    name: 'ChildBounties.propose_curator',
    /**
     * See [`Pallet::propose_curator`].
     */
    v1001002: new CallType(
        'ChildBounties.propose_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            curator: v1001002.MultiAddress,
            fee: sts.bigint(),
        })
    ),
}

export const acceptCurator =  {
    name: 'ChildBounties.accept_curator',
    /**
     * See [`Pallet::accept_curator`].
     */
    v1001002: new CallType(
        'ChildBounties.accept_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        })
    ),
}

export const unassignCurator =  {
    name: 'ChildBounties.unassign_curator',
    /**
     * See [`Pallet::unassign_curator`].
     */
    v1001002: new CallType(
        'ChildBounties.unassign_curator',
        sts.struct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        })
    ),
}
