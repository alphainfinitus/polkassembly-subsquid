import { ProposalStatus, ProposalType } from '@model/index'
import { ProcessorContext, Event } from '@src/processor'
import { updateProposalStatus } from '@kusama/mappings/utils/proposals'
import { getNotPassedData } from './getters'
import { Store } from '@subsquid/typeorm-store'

export async function handleNotPassed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const index = getNotPassedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, extrinsicIndex, {
        isEnded: true,
        status: ProposalStatus.NotPassed,
    })
}
