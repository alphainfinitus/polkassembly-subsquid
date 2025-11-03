import { TypeormDatabase } from '@subsquid/typeorm-store'
import { getChainConfig } from './chainConfig'
import { createProcessor, handleBlocks } from './processor'

const chainName = process.argv[2]

if (!chainName) {
  console.error('Error: Chain name is required as first argument')
  console.error('Usage: node lib/main.js <chain-name>')
  console.error('Available chains: polkadot, assethub-polkadot')
  process.exit(1)
}

const config = getChainConfig(chainName)

console.log(`Starting ${config.name} processor...`)
console.log(`Gateway: ${config.gateway}`)
console.log(`RPC: ${config.rpcEndpoint}`)
console.log(`Prometheus port: ${config.prometheusPort}`)
console.log(`State schema: ${config.stateSchema}`)

const processor = createProcessor(config)

processor.run(
  new TypeormDatabase({ stateSchema: config.stateSchema }),
  async (ctx) => {
    await handleBlocks(ctx, config)
  }
)


