import { lookupArchive } from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'kilt',
        prefix: 38,
    },
    dataSource: {
        chain: 'wss://kilt.ibp.network',
        archive: lookupArchive('kilt', { type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'kilt',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
