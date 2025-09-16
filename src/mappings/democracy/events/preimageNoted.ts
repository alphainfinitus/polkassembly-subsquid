/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { ProposalStatus } from '../../../model'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { createPreimage } from '../../utils/proposals'
import { getPreimageNotedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
// import { Event } from '../../../types/support'
import {
    preimages
} from '../../../types/democracy/storage'
import { Block, ProcessorContext, Event } from '../../../processor'

type ProposalCall = any

interface PreimageStorageData {
    data: string
    provider: string
    deposit: bigint
    block: number
}

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

async function getStorageData(ctx: ProcessorContext<Store>, hash: string, block: Block): Promise<PreimageStorageData | undefined> {
    // const storage = new DemocracyPreimagesStorage(ctx, block)
    if (preimages.integriteeParachainV21.is(block)) {
        const storageData = await preimages.integriteeParachainV21.get(block, hash)
        if (!storageData || storageData.__kind === 'Missing') return undefined

        const { provider, deposit, since, data } = storageData

        return {
            data,
            provider,
            deposit,
            block: since,
        }
    } else {
        throw new UnknownVersionError('Democracy.Preimages')
    }
}

export async function handlePreimageNoted(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    if (!item.call) return;

    if (!item.call.args?.encodedProposal) return;

    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const { hash, provider, deposit } = getPreimageNotedData(item)

    const storageData = await getStorageData(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn('Preimage', hash))
        return
    }

    let args;
    try {
        args = item.block._runtime.decodeCall(item.call.args?.encodedProposal);
    }
    catch (e) {
        console.log(`Error decoding call ${header.height}, extrinsicIndex: ${item.extrinsicIndex} ${e}`)
        return;
    }

    const section = args.__kind as string
    const method = args.value.__kind as string
    const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

    const { __kind, ...argsValue } = args.value;

    const decodedCall = {
        section,
        method,
        description: desc,
        args: argsValue,
    }

    await createPreimage(ctx, header, extrinsicIndex, {
        hash: hash,
        proposer: provider,
        deposit,
        call: decodedCall,
        section: decodedCall?.section,
        method: decodedCall?.method,
        status: ProposalStatus.Noted,
    })
}