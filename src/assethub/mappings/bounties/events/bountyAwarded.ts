import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@src/shared/tools'
import { updateProposalStatus } from '@assethub/mappings/utils/proposals'
import { getBountyAwardedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleAwarded(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, beneficiary } = getBountyAwardedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, extrinsicIndex,
        {
            isEnded: true,
            status: ProposalStatus.Awarded,
            data: {
                payee: ss58codec.encode(beneficiary),
            },
        })
}
