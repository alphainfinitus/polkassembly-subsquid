import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@assethub/common/tools'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getBountyClaimedData } from '@assethub/mappings/bounties/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

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