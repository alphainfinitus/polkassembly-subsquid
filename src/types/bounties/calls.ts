import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const proposeCurator =  {
    name: 'Bounties.propose_curator',
    /**
     * See [`Pallet::propose_curator`].
     */
    v1001002: new CallType(
        'Bounties.propose_curator',
        sts.struct({
            bountyId: sts.number(),
            curator: v1001002.MultiAddress,
            fee: sts.bigint(),
        })
    ),
}

export const unassignCurator =  {
    name: 'Bounties.unassign_curator',
    /**
     * See [`Pallet::unassign_curator`].
     */
    v1001002: new CallType(
        'Bounties.unassign_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const acceptCurator =  {
    name: 'Bounties.accept_curator',
    /**
     * See [`Pallet::accept_curator`].
     */
    v1001002: new CallType(
        'Bounties.accept_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}
