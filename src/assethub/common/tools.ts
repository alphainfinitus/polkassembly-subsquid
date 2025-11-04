/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ss58 from '@subsquid/ss58'
// import { Parser } from './parser'
import { chainConfigs } from '@src/chainConfig'
import { decodeHex } from '@subsquid/util-internal-hex'

export const ss58codec = ss58.codec(chainConfigs['assethub-polkadot'].prefix)

interface Call {
    __kind: string
    value: any
}

// export function parseProposalCall(chain: Chain, data: Call) {
//     const section = data.__kind as string
//     const method = data.value.__kind as string

//     const name = `${section}.${method}`

//     const description = ((chain as any).calls.get(name).docs as string[]).join('\n')

//     const codec = (chain as any).scaleCodec as Codec

//     const args = new Parser((codec as any).types).parse(chain.description.call, data)

//     return {
//         section,
//         method,
//         description,
//         args,
//     }
// }

export function getOriginAccountId(origin: any) {
    // eslint-disable-next-line sonarjs/no-small-switch
    if (!origin) return undefined
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    try {
                        const buffer = decodeHex(origin.value.value)
                        return ss58codec.encode(new Uint8Array(buffer))
                    }
                    catch (e) {
                    }
                    try {
                        const buffer = decodeHex(origin.value.value.value)
                        return ss58codec.encode(new Uint8Array(buffer))
                    }
                    catch (e) {
                        return undefined
                    }

                default:
                    return undefined
            }
        default:
            return undefined
    }
}

export function encodeId(id: string | Uint8Array) {
    if (typeof id === 'string') {
        const buffer = decodeHex(id)
        return ss58codec.encode(new Uint8Array(buffer))
    }
    return ss58codec.encode(id)
}