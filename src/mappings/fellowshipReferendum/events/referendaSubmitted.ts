import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { createReferendumV2 } from '../../utils/proposals'
import { getEventData } from './getters'
import { ss58codec } from '../../../common/tools'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor';

interface ReferendumInfo {
    index: number
    trackNumber: number
    origin: string
    enactmentAt?: number
    enactmentAfter?: number
    submittedAt: number
    submissionDeposit: {who: Uint8Array, amount: bigint}
    decisionDeposit: {who: Uint8Array, amount: bigint} | undefined
    deciding: {since: number, confirming: number | undefined} | undefined
    tally: {ayes: bigint, nays: bigint, support: bigint}
}


export async function getStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumInfo | undefined> {
    const storageData = await block._runtime.getStorage(block.hash, 'FellowshipReferenda.ReferendumInfoFor', index)

    if (!storageData) return undefined
    if(storageData.__kind === 'Ongoing') {
        let enactmentAt = undefined
        let enactmentAfter = undefined;
        if(storageData.value.enactment.__kind === 'At') {
            enactmentAt = storageData.value.enactment.value
        }
        else if(storageData.value.enactment.__kind === 'After') {
            enactmentAfter = storageData.value.enactment.value
        }
        return {
            index,
            trackNumber: storageData.value.track,
            origin: storageData.value.origin.value.__kind,
            enactmentAt: enactmentAt,
            enactmentAfter: enactmentAfter,
            submittedAt: storageData.value.submitted,
            submissionDeposit: storageData.value.submissionDeposit,
            decisionDeposit: storageData.value.decisionDeposit,
            deciding: storageData.value.deciding,
            tally: storageData.value.tally
        }
    }
}


export async function handleSubmitted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, hash } = getEventData(item)

    const storageData = await getStorageData(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.FellowshipReferendum, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    await createReferendumV2(ctx, header, extrinsicIndex, {
        index,
        status: ProposalStatus.Submitted,
        hash,
        proposer: ss58codec.encode(storageData.submissionDeposit.who),
        submissionDeposit: storageData.submissionDeposit,
        decisionDeposit: storageData.decisionDeposit,
        deciding: storageData.deciding,
        tally: storageData.tally,
        trackNumber: storageData.trackNumber,
        origin: storageData.origin,
        submittedAt: storageData.submittedAt,
        enactmentAt: storageData.enactmentAt,
        enactmentAfter: storageData.enactmentAfter,
    }, ProposalType.FellowshipReferendum)
}