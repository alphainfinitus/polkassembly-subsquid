import { StorageNotExistsWarn } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { createReferendumV2 } from '@assethub/mappings/utils/proposals'
import { getEventData } from '@assethub/mappings/referendumV2/events/getters'
import { ss58codec } from '@assethub/common/tools'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor';

interface ReferendumInfo {
    index: number
    trackNumber: number
    origin: string
    enactmentAt?: number
    enactmentAfter?: number
    submittedAt: number
    submissionDeposit: { who: Uint8Array, amount: bigint }
    decisionDeposit: { who: Uint8Array, amount: bigint } | undefined
    deciding: { since: number, confirming: number | undefined } | undefined
    tally: { ayes: bigint, nays: bigint, support: bigint }
}


export async function getStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumInfo | undefined> {
    const storageData = await block._runtime.getStorage(block.hash, 'Referenda.ReferendumInfoFor', index)

    if (!storageData) return undefined
    if (storageData.__kind === 'Ongoing') {
        let enactmentAt = undefined
        let enactmentAfter = undefined;
        if (storageData.value.enactment.__kind === 'At') {
            enactmentAt = storageData.value.enactment.value
        }
        else if (storageData.value.enactment.__kind === 'After') {
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
    // }else if(storage.isV9350){
    //     const storageData = await storage.asV9350.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }else if(storage.isV9370){
    //     const storageData = await storage.asV9370.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }else if(storage.isV9381){
    //     const storageData = await storage.asV9370.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }
    // else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}


export async function handleSubmitted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, hash, proposalKind } = getEventData(item)

    const storageData = await getStorageData(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.ReferendumV2, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    let proposedCall;

    if (proposalKind == 'Inline') {
        try {
            proposedCall = item.block._runtime.decodeCall(hash)
            if (proposedCall) {
                const section = proposedCall.__kind as string
                const method = proposedCall.value.__kind as string
                const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

                const { __kind, ...argsValue } = proposedCall.value;

                const decodedCall = {
                    section,
                    method,
                    description: desc,
                    args: argsValue,
                }
                proposedCall = decodedCall
            }
        }
        catch {
            ctx.log.warn(`Unable to decode inline call ${hash} at block ${header.height}`)
        }
    }

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
        proposedCall
    }, ProposalType.ReferendumV2)
}