import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyClaimedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleClaimedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.BountyClaimed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, payout, beneficiary } = getBountyClaimedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}

export async function handleClaimed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyClaimed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, payout, beneficiary } = getBountyClaimedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}
