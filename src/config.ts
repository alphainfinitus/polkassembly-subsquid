import { lookupArchive } from "@subsquid/archive-registry"
// import { ProcessorConfig } from './common/processorConfig'
// import { Store } from '@subsquid/typeorm-store'

const config: any = {
    chain: {
        name: 'moonriver',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive('moonriver', { type: 'Substrate', release: 'ArrowSquid' }),
        chain: 'wss://wss.api.moonriver.moonbeam.network',
    },
    typesBundle: 'moonriver',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
