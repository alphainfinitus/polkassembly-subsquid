import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDissaprovedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleDisapproved(ctx: ProcessorContext<Store>, item: Event,  header: any) {
    const hash = getDissaprovedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, hash, ProposalType.AdvisoryCommittee, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
        extrinsicIndex
    })
}