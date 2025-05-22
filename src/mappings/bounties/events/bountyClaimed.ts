import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyClaimedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleClaimed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, payout, beneficiary } = getBountyClaimedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}