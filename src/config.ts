import { lookupArchive } from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'mythos',
        prefix: 29972,
    },
    dataSource: {
        chain: 'wss://polkadot-mythos-rpc.polkadot.io',
    },
    typesBundle: 'mythos',
    batchSize: 500,
    blockRange: {
        from: 4342322,
    },
}

export default config
