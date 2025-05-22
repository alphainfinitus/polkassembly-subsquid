import { lookupArchive } from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'paseo',
        prefix: 0,
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/paseo',
        chain: 'wss://rpc.ibp.network/paseo',
    },
    typesBundle: 'paseo',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
