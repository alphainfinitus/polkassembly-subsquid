/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '@src/shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@src/shared/tools'
import { storage } from '@kusama/storage'
import { createTechCommitteeMotion } from '@kusama/mappings/utils/proposals'
import { getProposedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, proposer, hash, threshold } = getProposedData(item)
    const storageData = await storage.techCommittee.getProposalOf(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TechCommitteeProposal, index))
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const section = storageData.__kind as string
    const method = storageData.value.__kind as string
    const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

    const { __kind, ...argsValue } = storageData.value;

    // const { section, method, args, description } = parseProposalCall(ctx._chain, storageData)

    await createTechCommitteeMotion(ctx, header, extrinsicIndex, {
        index,
        hash: hash,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        threshold,
        call: {
            section,
            method,
            description: desc,
            args: argsValue as Record<string, unknown>,
        },
    })
}