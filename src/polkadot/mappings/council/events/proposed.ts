/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '@shared/errors'
import { ProposalStatus, ProposalType } from '@model/index'
import { ss58codec } from '@polkadot/common/tools'
import { storage } from '@polkadot/storage'
import { createCoucilMotion } from '@polkadot/mappings/utils/proposals'
import { getProposedData } from '@polkadot/mappings/council/events/getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, proposer, hash, threshold } = getProposedData(item)

    const storageData = await storage.council.getProposalOf(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.CouncilMotion, index))
        return
    }

    const extrinsicIndex = `${header.height}-${item.index}`

    const section = storageData.__kind as string
    const method = storageData.value.__kind as string
    const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

    const { __kind, ...argsValue } = storageData.value;

    await createCoucilMotion(ctx, header, extrinsicIndex, {
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