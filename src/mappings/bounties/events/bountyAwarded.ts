import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyAwardedData, } from './getters'

import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

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
