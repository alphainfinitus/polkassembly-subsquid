export type ChainName = 'kusama' | 'assethub-kusama'

export interface ChainConfig {
  name: ChainName
  prefix: string
  gateway: string
  rpcEndpoint: string
  blockRange: { from: number }
  prometheusPort: number
  stateSchema: string
  // Chain capabilities - what modules are available
  hasDemocracy: boolean
  hasCouncil: boolean
  hasTechnicalCommittee: boolean
  hasFellowshipReferenda: boolean
  hasReferenda: boolean
  hasTreasury: boolean
  hasBounties: boolean
  hasChildBounties: boolean
  hasTips: boolean
  hasPreimage: boolean
}

export const chainConfigs: Record<ChainName, ChainConfig> = {
  'kusama': {
    name: 'kusama',
    prefix: 'kusama',
    gateway: 'https://v2.archive.subsquid.io/network/kusama',
    rpcEndpoint: 'wss://kusama-rpc.dwellir.com',
    blockRange: { from: 0 },
    prometheusPort: 3000,
    stateSchema: 'kusama_processor',
    // Kusama relay chain has all modules
    hasDemocracy: true,
    hasCouncil: true,
    hasTechnicalCommittee: true,
    hasFellowshipReferenda: true,
    hasReferenda: true,
    hasTreasury: true,
    hasBounties: true,
    hasChildBounties: true,
    hasTips: true,
    hasPreimage: true,
  },
  'assethub-kusama': {
    name: 'assethub-kusama',
    prefix: 'kusama',
    gateway: 'https://v2.archive.subsquid.io/network/asset-hub-kusama',
    rpcEndpoint: 'wss://asset-hub-kusama-rpc.n.dwellir.com',
    blockRange: { from: 0 },
    prometheusPort: 3001,
    stateSchema: 'assethub_kusama_processor',
    // AssetHub only has these modules
    hasDemocracy: false,
    hasCouncil: false,
    hasTechnicalCommittee: false,
    hasFellowshipReferenda: false,
    hasReferenda: true,
    hasTreasury: true,
    hasBounties: true,
    hasChildBounties: true,
    hasTips: true,
    hasPreimage: true,
  },
}

export function getChainConfig(chainName: string): ChainConfig {
  const config = chainConfigs[chainName as ChainName]
  if (!config) {
    throw new Error(`Unknown chain: ${chainName}. Available chains: ${Object.keys(chainConfigs).join(', ')}`)
  }
  return config
}

