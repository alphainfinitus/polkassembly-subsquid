import { lookupArchive } from "@subsquid/archive-registry"
import { Store } from '@subsquid/typeorm-store'

const config: any = {
    chain: {
        name: 'zeitgeist',
        prefix: 73,
    },
    dataSource: {
        chain: 'wss://zeitgeist.api.onfinality.io/public-ws',
        archive: lookupArchive('zeitgeist', { type: "Substrate", release: "ArrowSquid" }),
    },
    typesBundle: 'zeitgeist',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
