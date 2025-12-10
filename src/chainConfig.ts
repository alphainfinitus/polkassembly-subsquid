export type ChainName = 'polkadot' | 'assethub-polkadot'

// Migration block constants - when Referenda/ConvictionVoting/etc moved from relay chain to AssetHub
// See https://migration.paritytech.io/#/polkadot for details
export const POLKADOT_MIGRATION_BLOCK = 28_495_696  // Polkadot relay chain block
export const ASSETHUB_POLKADOT_MIGRATION_BLOCK = 8_500_000  // Approximate AssetHub block

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
  polkadot: {
    name: 'polkadot',
    prefix: 'polkadot',
    gateway: 'https://v2.archive.subsquid.io/network/polkadot',
    rpcEndpoint: 'wss://rpc.ibp.network/polkadot',
    blockRange: { from: 0 },
    prometheusPort: 3000,
    stateSchema: 'polkadot_processor',
    // Polkadot relay chain has all modules currently indexed
    hasDemocracy: true,
    hasCouncil: true,
    hasTechnicalCommittee: true,
    hasFellowshipReferenda: false,
    hasReferenda: true,
    hasTreasury: true,
    hasBounties: true,
    hasChildBounties: true,
    hasTips: true,
    hasPreimage: true,
  },
  'assethub-polkadot': {
    name: 'assethub-polkadot',
    prefix: 'polkadot',
    gateway: 'https://v2.archive.subsquid.io/network/asset-hub-polkadot',
    rpcEndpoint: 'wss://asset-hub-polkadot-rpc.n.dwellir.com',
    blockRange: { from: 0 },
    prometheusPort: 3001,
    stateSchema: 'assethub_polkadot_processor',
    // Asset Hub hosts Gov2 but not legacy collectives
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


