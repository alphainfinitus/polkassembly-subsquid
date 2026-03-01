import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AssetRegistry | Call_Balances | Call_Bounties | Call_ChildBounties | Call_ClientsInfo | Call_Contracts | Call_Council | Call_CumulusXcm | Call_Currencies | Call_Democracy | Call_DiaOracleModule | Call_DmpQueue | Call_Farming | Call_Fee | Call_Identity | Call_Issue | Call_Multisig | Call_Nomination | Call_Oracle | Call_ParachainInfo | Call_ParachainStaking | Call_ParachainSystem | Call_PolkadotXcm | Call_PooledVaultRewards | Call_Preimage | Call_Proxy | Call_Redeem | Call_Replace | Call_RewardDistribution | Call_Scheduler | Call_Security | Call_Session | Call_StellarRelay | Call_System | Call_TechnicalCommittee | Call_Timestamp | Call_TokenAllowance | Call_Tokens | Call_Treasury | Call_TreasuryBuyoutExtension | Call_Utility | Call_VaultRegistry | Call_VaultStaking | Call_Vesting | Call_VestingManager | Call_XTokens | Call_XcmpQueue | Call_ZenlinkProtocol

export interface Call_AssetRegistry {
    __kind: 'AssetRegistry'
    value: AssetRegistryCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_ClientsInfo {
    __kind: 'ClientsInfo'
    value: ClientsInfoCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DiaOracleModule {
    __kind: 'DiaOracleModule'
    value: DiaOracleModuleCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_Farming {
    __kind: 'Farming'
    value: FarmingCall
}

export interface Call_Fee {
    __kind: 'Fee'
    value: FeeCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Issue {
    __kind: 'Issue'
    value: IssueCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Nomination {
    __kind: 'Nomination'
    value: NominationCall
}

export interface Call_Oracle {
    __kind: 'Oracle'
    value: OracleCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_PooledVaultRewards {
    __kind: 'PooledVaultRewards'
    value: PooledVaultRewardsCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Redeem {
    __kind: 'Redeem'
    value: RedeemCall
}

export interface Call_Replace {
    __kind: 'Replace'
    value: ReplaceCall
}

export interface Call_RewardDistribution {
    __kind: 'RewardDistribution'
    value: RewardDistributionCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Security {
    __kind: 'Security'
    value: SecurityCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_StellarRelay {
    __kind: 'StellarRelay'
    value: StellarRelayCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_TokenAllowance {
    __kind: 'TokenAllowance'
    value: TokenAllowanceCall
}

export interface Call_Tokens {
    __kind: 'Tokens'
    value: TokensCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_TreasuryBuyoutExtension {
    __kind: 'TreasuryBuyoutExtension'
    value: TreasuryBuyoutExtensionCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_VaultRegistry {
    __kind: 'VaultRegistry'
    value: VaultRegistryCall
}

export interface Call_VaultStaking {
    __kind: 'VaultStaking'
    value: VaultStakingCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VestingManager {
    __kind: 'VestingManager'
    value: VestingManagerCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_ZenlinkProtocol {
    __kind: 'ZenlinkProtocol'
    value: ZenlinkProtocolCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ZenlinkProtocolCall = ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_withdraw_reward | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_transfer

/**
 * See [`Pallet::add_liquidity`].
 */
export interface ZenlinkProtocolCall_add_liquidity {
    __kind: 'add_liquidity'
    asset0: AssetId
    asset1: AssetId
    amount0Desired: bigint
    amount1Desired: bigint
    amount0Min: bigint
    amount1Min: bigint
    deadline: number
}

/**
 * See [`Pallet::bootstrap_charge_reward`].
 */
export interface ZenlinkProtocolCall_bootstrap_charge_reward {
    __kind: 'bootstrap_charge_reward'
    asset0: AssetId
    asset1: AssetId
    chargeRewards: [AssetId, bigint][]
}

/**
 * See [`Pallet::bootstrap_claim`].
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
    __kind: 'bootstrap_claim'
    recipient: MultiAddress
    asset0: AssetId
    asset1: AssetId
    deadline: number
}

/**
 * See [`Pallet::bootstrap_contribute`].
 */
export interface ZenlinkProtocolCall_bootstrap_contribute {
    __kind: 'bootstrap_contribute'
    asset0: AssetId
    asset1: AssetId
    amount0Contribute: bigint
    amount1Contribute: bigint
    deadline: number
}

/**
 * See [`Pallet::bootstrap_create`].
 */
export interface ZenlinkProtocolCall_bootstrap_create {
    __kind: 'bootstrap_create'
    asset0: AssetId
    asset1: AssetId
    targetSupply0: bigint
    targetSupply1: bigint
    capacitySupply0: bigint
    capacitySupply1: bigint
    end: number
    rewards: AssetId[]
    limits: [AssetId, bigint][]
}

/**
 * See [`Pallet::bootstrap_end`].
 */
export interface ZenlinkProtocolCall_bootstrap_end {
    __kind: 'bootstrap_end'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::bootstrap_refund`].
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
    __kind: 'bootstrap_refund'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::bootstrap_update`].
 */
export interface ZenlinkProtocolCall_bootstrap_update {
    __kind: 'bootstrap_update'
    asset0: AssetId
    asset1: AssetId
    targetSupply0: bigint
    targetSupply1: bigint
    capacitySupply0: bigint
    capacitySupply1: bigint
    end: number
    rewards: AssetId[]
    limits: [AssetId, bigint][]
}

/**
 * See [`Pallet::bootstrap_withdraw_reward`].
 */
export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
    __kind: 'bootstrap_withdraw_reward'
    asset0: AssetId
    asset1: AssetId
    recipient: MultiAddress
}

/**
 * See [`Pallet::create_pair`].
 */
export interface ZenlinkProtocolCall_create_pair {
    __kind: 'create_pair'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::remove_liquidity`].
 */
export interface ZenlinkProtocolCall_remove_liquidity {
    __kind: 'remove_liquidity'
    asset0: AssetId
    asset1: AssetId
    liquidity: bigint
    amount0Min: bigint
    amount1Min: bigint
    recipient: MultiAddress
    deadline: number
}

/**
 * See [`Pallet::set_fee_point`].
 */
export interface ZenlinkProtocolCall_set_fee_point {
    __kind: 'set_fee_point'
    feePoint: number
}

/**
 * See [`Pallet::set_fee_receiver`].
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
    __kind: 'set_fee_receiver'
    sendTo?: (MultiAddress | undefined)
}

/**
 * See [`Pallet::swap_assets_for_exact_assets`].
 */
export interface ZenlinkProtocolCall_swap_assets_for_exact_assets {
    __kind: 'swap_assets_for_exact_assets'
    amountOut: bigint
    amountInMax: bigint
    path: AssetId[]
    recipient: MultiAddress
    deadline: number
}

/**
 * See [`Pallet::swap_exact_assets_for_assets`].
 */
export interface ZenlinkProtocolCall_swap_exact_assets_for_assets {
    __kind: 'swap_exact_assets_for_assets'
    amountIn: bigint
    amountOutMin: bigint
    path: AssetId[]
    recipient: MultiAddress
    deadline: number
}

/**
 * See [`Pallet::transfer`].
 */
export interface ZenlinkProtocolCall_transfer {
    __kind: 'transfer'
    assetId: AssetId
    recipient: MultiAddress
    amount: bigint
}

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

export interface AssetId {
    chainId: number
    assetType: number
    assetIndex: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * See [`Pallet::resume_xcm_execution`].
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * See [`Pallet::service_overweight`].
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * See [`Pallet::suspend_xcm_execution`].
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * See [`Pallet::update_drop_threshold`].
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * See [`Pallet::update_resume_threshold`].
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * See [`Pallet::update_suspend_threshold`].
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * See [`Pallet::update_threshold_weight`].
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: Weight
}

/**
 * See [`Pallet::update_weight_restrict_decay`].
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: Weight
}

/**
 * See [`Pallet::update_xcmp_max_individual_weight`].
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: Weight
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: CurrencyId
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset`].
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset_with_fee`].
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiassets`].
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multicurrencies`].
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [CurrencyId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: CurrencyId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type V3AssetInstance = V3AssetInstance_Array16 | V3AssetInstance_Array32 | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Index | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V2AssetInstance = V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Blob | V2AssetInstance_Index | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type CurrencyId = CurrencyId_Native | CurrencyId_Stellar | CurrencyId_Token | CurrencyId_XCM | CurrencyId_ZenlinkLPToken

export interface CurrencyId_Native {
    __kind: 'Native'
}

export interface CurrencyId_Stellar {
    __kind: 'Stellar'
    value: Asset
}

export interface CurrencyId_Token {
    __kind: 'Token'
    value: bigint
}

export interface CurrencyId_XCM {
    __kind: 'XCM'
    value: number
}

export interface CurrencyId_ZenlinkLPToken {
    __kind: 'ZenlinkLPToken'
    value: [number, number, number, number]
}

export type Asset = Asset_AlphaNum12 | Asset_AlphaNum4 | Asset_StellarNative

export interface Asset_AlphaNum12 {
    __kind: 'AlphaNum12'
    code: Bytes
    issuer: Bytes
}

export interface Asset_AlphaNum4 {
    __kind: 'AlphaNum4'
    code: Bytes
    issuer: Bytes
}

export interface Asset_StellarNative {
    __kind: 'StellarNative'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingManagerCall = VestingManagerCall_remove_vesting_schedule

/**
 * See [`Pallet::remove_vesting_schedule`].
 */
export interface VestingManagerCall_remove_vesting_schedule {
    __kind: 'remove_vesting_schedule'
    who: MultiAddress
    scheduleIndex: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 * See [`Pallet::force_vested_transfer`].
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::merge_schedules`].
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * See [`Pallet::vest`].
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * See [`Pallet::vest_other`].
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * See [`Pallet::vested_transfer`].
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VaultStakingCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VaultRegistryCall = VaultRegistryCall_accept_new_issues | VaultRegistryCall_deposit_collateral | VaultRegistryCall_recover_vault_id | VaultRegistryCall_register_public_key | VaultRegistryCall_register_vault | VaultRegistryCall_report_undercollateralized_vault | VaultRegistryCall_set_custom_secure_threshold | VaultRegistryCall_set_liquidation_collateral_threshold | VaultRegistryCall_set_minimum_collateral | VaultRegistryCall_set_premium_redeem_threshold | VaultRegistryCall_set_punishment_delay | VaultRegistryCall_set_secure_collateral_threshold | VaultRegistryCall_set_system_collateral_ceiling | VaultRegistryCall_withdraw_collateral

/**
 * See [`Pallet::accept_new_issues`].
 */
export interface VaultRegistryCall_accept_new_issues {
    __kind: 'accept_new_issues'
    currencyPair: VaultCurrencyPair
    acceptNewIssues: boolean
}

/**
 * See [`Pallet::deposit_collateral`].
 */
export interface VaultRegistryCall_deposit_collateral {
    __kind: 'deposit_collateral'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * See [`Pallet::recover_vault_id`].
 */
export interface VaultRegistryCall_recover_vault_id {
    __kind: 'recover_vault_id'
    currencyPair: VaultCurrencyPair
}

/**
 * See [`Pallet::register_public_key`].
 */
export interface VaultRegistryCall_register_public_key {
    __kind: 'register_public_key'
    publicKey: Bytes
}

/**
 * See [`Pallet::register_vault`].
 */
export interface VaultRegistryCall_register_vault {
    __kind: 'register_vault'
    currencyPair: VaultCurrencyPair
    collateral: bigint
}

/**
 * See [`Pallet::report_undercollateralized_vault`].
 */
export interface VaultRegistryCall_report_undercollateralized_vault {
    __kind: 'report_undercollateralized_vault'
    vaultId: VaultId
}

/**
 * See [`Pallet::set_custom_secure_threshold`].
 */
export interface VaultRegistryCall_set_custom_secure_threshold {
    __kind: 'set_custom_secure_threshold'
    currencyPair: VaultCurrencyPair
    customThreshold?: (FixedU128 | undefined)
}

/**
 * See [`Pallet::set_liquidation_collateral_threshold`].
 */
export interface VaultRegistryCall_set_liquidation_collateral_threshold {
    __kind: 'set_liquidation_collateral_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

/**
 * See [`Pallet::set_minimum_collateral`].
 */
export interface VaultRegistryCall_set_minimum_collateral {
    __kind: 'set_minimum_collateral'
    currencyId: CurrencyId
    minimum: bigint
}

/**
 * See [`Pallet::set_premium_redeem_threshold`].
 */
export interface VaultRegistryCall_set_premium_redeem_threshold {
    __kind: 'set_premium_redeem_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

/**
 * See [`Pallet::set_punishment_delay`].
 */
export interface VaultRegistryCall_set_punishment_delay {
    __kind: 'set_punishment_delay'
    punishmentDelay: number
}

/**
 * See [`Pallet::set_secure_collateral_threshold`].
 */
export interface VaultRegistryCall_set_secure_collateral_threshold {
    __kind: 'set_secure_collateral_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

/**
 * See [`Pallet::set_system_collateral_ceiling`].
 */
export interface VaultRegistryCall_set_system_collateral_ceiling {
    __kind: 'set_system_collateral_ceiling'
    currencyPair: VaultCurrencyPair
    ceiling: bigint
}

/**
 * See [`Pallet::withdraw_collateral`].
 */
export interface VaultRegistryCall_withdraw_collateral {
    __kind: 'withdraw_collateral'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

export type FixedU128 = bigint

export interface VaultId {
    accountId: AccountId32
    currencies: VaultCurrencyPair
}

export interface VaultCurrencyPair {
    collateral: CurrencyId
    wrapped: CurrencyId
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_328
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_331
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_330
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_329
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type Void = never

export type Type_329 = Type_329_Member | Type_329_Members | Type_329__Phantom

export interface Type_329_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_329_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_329__Phantom {
    __kind: '_Phantom'
}

export type Type_330 = Type_330_Response | Type_330_Xcm

export interface Type_330_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_330_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Type_331 = Type_331_Relay | Type_331_SiblingParachain

export interface Type_331_Relay {
    __kind: 'Relay'
}

export interface Type_331_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_328 = Type_328_Member | Type_328_Members | Type_328__Phantom

export interface Type_328_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_328_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_328__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryBuyoutExtensionCall = TreasuryBuyoutExtensionCall_buyout | TreasuryBuyoutExtensionCall_update_allowed_assets | TreasuryBuyoutExtensionCall_update_buyout_limit

/**
 * See [`Pallet::buyout`].
 */
export interface TreasuryBuyoutExtensionCall_buyout {
    __kind: 'buyout'
    asset: CurrencyId
    amount: Amount
}

/**
 * See [`Pallet::update_allowed_assets`].
 */
export interface TreasuryBuyoutExtensionCall_update_allowed_assets {
    __kind: 'update_allowed_assets'
    assets: CurrencyId[]
}

/**
 * See [`Pallet::update_buyout_limit`].
 */
export interface TreasuryBuyoutExtensionCall_update_buyout_limit {
    __kind: 'update_buyout_limit'
    limit?: (bigint | undefined)
}

export type Amount = Amount_Buyout | Amount_Exchange

export interface Amount_Buyout {
    __kind: 'Buyout'
    value: bigint
}

export interface Amount_Exchange {
    __kind: 'Exchange'
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TokensCall = TokensCall_force_transfer | TokensCall_set_balance | TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive

/**
 * See [`Pallet::force_transfer`].
 */
export interface TokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::set_balance`].
 */
export interface TokensCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    currencyId: CurrencyId
    newFree: bigint
    newReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface TokensCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface TokensCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    currencyId: CurrencyId
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface TokensCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TokenAllowanceCall = TokenAllowanceCall_add_allowed_currencies | TokenAllowanceCall_approve | TokenAllowanceCall_remove_allowed_currencies | TokenAllowanceCall_transfer_from

/**
 * See [`Pallet::add_allowed_currencies`].
 */
export interface TokenAllowanceCall_add_allowed_currencies {
    __kind: 'add_allowed_currencies'
    currencies: CurrencyId[]
}

/**
 * See [`Pallet::approve`].
 */
export interface TokenAllowanceCall_approve {
    __kind: 'approve'
    id: CurrencyId
    delegate: AccountId32
    amount: bigint
}

/**
 * See [`Pallet::remove_allowed_currencies`].
 */
export interface TokenAllowanceCall_remove_allowed_currencies {
    __kind: 'remove_allowed_currencies'
    currencies: CurrencyId[]
}

/**
 * See [`Pallet::transfer_from`].
 */
export interface TokenAllowanceCall_transfer_from {
    __kind: 'transfer_from'
    id: CurrencyId
    owner: AccountId32
    destination: AccountId32
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 * See [`Pallet::close`].
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * See [`Pallet::vote`].
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StellarRelayCall = StellarRelayCall_update_tier_1_validator_set

/**
 * See [`Pallet::update_tier_1_validator_set`].
 */
export interface StellarRelayCall_update_tier_1_validator_set {
    __kind: 'update_tier_1_validator_set'
    validators: Validator[]
    organizations: Organization[]
    enactmentBlockHeight: number
}

export interface Organization {
    id: bigint
    name: Bytes
}

export interface Validator {
    name: Bytes
    publicKey: Bytes
    organizationId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    aura: Public
}

export type Public = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SecurityCall = SecurityCall_insert_parachain_error | SecurityCall_remove_parachain_error | SecurityCall_set_parachain_status

/**
 * See [`Pallet::insert_parachain_error`].
 */
export interface SecurityCall_insert_parachain_error {
    __kind: 'insert_parachain_error'
    errorCode: ErrorCode
}

/**
 * See [`Pallet::remove_parachain_error`].
 */
export interface SecurityCall_remove_parachain_error {
    __kind: 'remove_parachain_error'
    errorCode: ErrorCode
}

/**
 * See [`Pallet::set_parachain_status`].
 */
export interface SecurityCall_set_parachain_status {
    __kind: 'set_parachain_status'
    statusCode: StatusCode
}

export type StatusCode = StatusCode_Error | StatusCode_Running | StatusCode_Shutdown

export interface StatusCode_Error {
    __kind: 'Error'
}

export interface StatusCode_Running {
    __kind: 'Running'
}

export interface StatusCode_Shutdown {
    __kind: 'Shutdown'
}

export type ErrorCode = ErrorCode_None | ErrorCode_OracleOffline

export interface ErrorCode_None {
    __kind: 'None'
}

export interface ErrorCode_OracleOffline {
    __kind: 'OracleOffline'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RewardDistributionCall = RewardDistributionCall_collect_reward | RewardDistributionCall_set_reward_per_block

/**
 * See [`Pallet::collect_reward`].
 */
export interface RewardDistributionCall_collect_reward {
    __kind: 'collect_reward'
    vaultId: VaultId
    rewardCurrencyId: CurrencyId
    index?: (number | undefined)
}

/**
 * See [`Pallet::set_reward_per_block`].
 */
export interface RewardDistributionCall_set_reward_per_block {
    __kind: 'set_reward_per_block'
    newRewardPerBlock: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReplaceCall = ReplaceCall_accept_replace | ReplaceCall_cancel_replace | ReplaceCall_execute_replace | ReplaceCall_minimum_transfer_amount_update | ReplaceCall_request_replace | ReplaceCall_set_replace_period | ReplaceCall_withdraw_replace

/**
 * See [`Pallet::accept_replace`].
 */
export interface ReplaceCall_accept_replace {
    __kind: 'accept_replace'
    currencyPair: VaultCurrencyPair
    oldVault: VaultId
    amount: bigint
    collateral: bigint
    stellarAddress: Bytes
}

/**
 * See [`Pallet::cancel_replace`].
 */
export interface ReplaceCall_cancel_replace {
    __kind: 'cancel_replace'
    replaceId: H256
}

/**
 * See [`Pallet::execute_replace`].
 */
export interface ReplaceCall_execute_replace {
    __kind: 'execute_replace'
    replaceId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesXdrEncoded: Bytes
    transactionSetXdrEncoded: Bytes
}

/**
 * See [`Pallet::minimum_transfer_amount_update`].
 */
export interface ReplaceCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

/**
 * See [`Pallet::request_replace`].
 */
export interface ReplaceCall_request_replace {
    __kind: 'request_replace'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * See [`Pallet::set_replace_period`].
 */
export interface ReplaceCall_set_replace_period {
    __kind: 'set_replace_period'
    period: number
}

/**
 * See [`Pallet::withdraw_replace`].
 */
export interface ReplaceCall_withdraw_replace {
    __kind: 'withdraw_replace'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RedeemCall = RedeemCall_cancel_redeem | RedeemCall_execute_redeem | RedeemCall_liquidation_redeem | RedeemCall_minimum_transfer_amount_update | RedeemCall_mint_tokens_for_reimbursed_redeem | RedeemCall_rate_limit_update | RedeemCall_request_redeem | RedeemCall_self_redeem | RedeemCall_set_redeem_period

/**
 * See [`Pallet::cancel_redeem`].
 */
export interface RedeemCall_cancel_redeem {
    __kind: 'cancel_redeem'
    redeemId: H256
    reimburse: boolean
}

/**
 * See [`Pallet::execute_redeem`].
 */
export interface RedeemCall_execute_redeem {
    __kind: 'execute_redeem'
    redeemId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesEncoded: Bytes
    transactionSetEncoded: Bytes
}

/**
 * See [`Pallet::liquidation_redeem`].
 */
export interface RedeemCall_liquidation_redeem {
    __kind: 'liquidation_redeem'
    currencies: VaultCurrencyPair
    amountWrapped: bigint
}

/**
 * See [`Pallet::minimum_transfer_amount_update`].
 */
export interface RedeemCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

/**
 * See [`Pallet::mint_tokens_for_reimbursed_redeem`].
 */
export interface RedeemCall_mint_tokens_for_reimbursed_redeem {
    __kind: 'mint_tokens_for_reimbursed_redeem'
    currencyPair: VaultCurrencyPair
    redeemId: H256
}

/**
 * See [`Pallet::rate_limit_update`].
 */
export interface RedeemCall_rate_limit_update {
    __kind: 'rate_limit_update'
    limitVolumeAmount?: (bigint | undefined)
    limitVolumeCurrencyId: CurrencyId
    intervalLength: number
}

/**
 * See [`Pallet::request_redeem`].
 */
export interface RedeemCall_request_redeem {
    __kind: 'request_redeem'
    amountWrapped: bigint
    stellarAddress: Bytes
    vaultId: VaultId
}

/**
 * See [`Pallet::self_redeem`].
 */
export interface RedeemCall_self_redeem {
    __kind: 'self_redeem'
    currencyPair: VaultCurrencyPair
    amountWrapped: bigint
}

/**
 * See [`Pallet::set_redeem_period`].
 */
export interface RedeemCall_set_redeem_period {
    __kind: 'set_redeem_period'
    period: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::create_pure`].
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * See [`Pallet::kill_pure`].
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * See [`Pallet::remove_proxy`].
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

export type ProxyType = ProxyType_Any

export interface ProxyType_Any {
    __kind: 'Any'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PooledVaultRewardsCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_312
    maxWeight: Weight
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::send`].
 */
export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type V3Instruction = V3Instruction_AliasOrigin | V3Instruction_BurnAsset | V3Instruction_BuyExecution | V3Instruction_ClaimAsset | V3Instruction_ClearError | V3Instruction_ClearOrigin | V3Instruction_ClearTopic | V3Instruction_ClearTransactStatus | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_DescendOrigin | V3Instruction_ExchangeAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectError | V3Instruction_ExpectOrigin | V3Instruction_ExpectPallet | V3Instruction_ExpectTransactStatus | V3Instruction_ExportMessage | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_LockAsset | V3Instruction_NoteUnlockable | V3Instruction_QueryPallet | V3Instruction_QueryResponse | V3Instruction_ReceiveTeleportedAsset | V3Instruction_RefundSurplus | V3Instruction_ReportError | V3Instruction_ReportHolding | V3Instruction_ReportTransactStatus | V3Instruction_RequestUnlock | V3Instruction_ReserveAssetDeposited | V3Instruction_SetAppendix | V3Instruction_SetErrorHandler | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_SubscribeVersion | V3Instruction_Transact | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Trap | V3Instruction_UniversalOrigin | V3Instruction_UnlockAsset | V3Instruction_UnpaidExecution | V3Instruction_UnsubscribeVersion | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export type V3Response = V3Response_Assets | V3Response_DispatchResult | V3Response_ExecutionResult | V3Response_Null | V3Response_PalletsInfo | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3PalletInfo {
    index: number
    name: BoundedVec
    moduleName: BoundedVec
    major: number
    minor: number
    patch: number
}

export type BoundedVec = Bytes

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export type V3Error = V3Error_AssetNotFound | V3Error_BadOrigin | V3Error_Barrier | V3Error_DestinationUnsupported | V3Error_ExceedsMaxMessageSize | V3Error_ExceedsStackLimit | V3Error_ExpectationFalse | V3Error_ExportError | V3Error_FailedToDecode | V3Error_FailedToTransactAsset | V3Error_FeesNotMet | V3Error_HoldingWouldOverflow | V3Error_InvalidLocation | V3Error_LocationCannotHold | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_LockError | V3Error_MaxWeightInvalid | V3Error_NameMismatch | V3Error_NoDeal | V3Error_NoPermission | V3Error_NotDepositable | V3Error_NotHoldingFees | V3Error_NotWithdrawable | V3Error_Overflow | V3Error_PalletNotFound | V3Error_ReanchorFailed | V3Error_TooExpensive | V3Error_Transport | V3Error_Trap | V3Error_Unanchored | V3Error_UnhandledXcmVersion | V3Error_Unimplemented | V3Error_UnknownClaim | V3Error_Unroutable | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_VersionIncompatible | V3Error_WeightLimitReached | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MaxWeightInvalid | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type Type_312 = Type_312_V2 | Type_312_V3

export interface Type_312_V2 {
    __kind: 'V2'
    value: Type_315[]
}

export interface Type_312_V3 {
    __kind: 'V3'
    value: Type_319[]
}

export type Type_319 = Type_319_AliasOrigin | Type_319_BurnAsset | Type_319_BuyExecution | Type_319_ClaimAsset | Type_319_ClearError | Type_319_ClearOrigin | Type_319_ClearTopic | Type_319_ClearTransactStatus | Type_319_DepositAsset | Type_319_DepositReserveAsset | Type_319_DescendOrigin | Type_319_ExchangeAsset | Type_319_ExpectAsset | Type_319_ExpectError | Type_319_ExpectOrigin | Type_319_ExpectPallet | Type_319_ExpectTransactStatus | Type_319_ExportMessage | Type_319_HrmpChannelAccepted | Type_319_HrmpChannelClosing | Type_319_HrmpNewChannelOpenRequest | Type_319_InitiateReserveWithdraw | Type_319_InitiateTeleport | Type_319_LockAsset | Type_319_NoteUnlockable | Type_319_QueryPallet | Type_319_QueryResponse | Type_319_ReceiveTeleportedAsset | Type_319_RefundSurplus | Type_319_ReportError | Type_319_ReportHolding | Type_319_ReportTransactStatus | Type_319_RequestUnlock | Type_319_ReserveAssetDeposited | Type_319_SetAppendix | Type_319_SetErrorHandler | Type_319_SetFeesMode | Type_319_SetTopic | Type_319_SubscribeVersion | Type_319_Transact | Type_319_TransferAsset | Type_319_TransferReserveAsset | Type_319_Trap | Type_319_UniversalOrigin | Type_319_UnlockAsset | Type_319_UnpaidExecution | Type_319_UnsubscribeVersion | Type_319_WithdrawAsset

export interface Type_319_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_319_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_319_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_319_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_319_ClearError {
    __kind: 'ClearError'
}

export interface Type_319_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_319_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_319_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_319_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_319_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_319_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_319_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_319_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_319_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_319_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_319_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_319_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_319_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_319_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_319_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_319_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_319_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_319_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_319_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_319_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_319_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_319_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_319_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_319_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_319_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_319_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_319_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_319_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_319_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_319_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_319[]
}

export interface Type_319_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_319[]
}

export interface Type_319_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_319_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_319_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_319_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_316
}

export interface Type_319_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_319_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_319_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_319_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_319_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_319_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_319_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_319_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_316 {
    encoded: Bytes
}

export type Type_315 = Type_315_BuyExecution | Type_315_ClaimAsset | Type_315_ClearError | Type_315_ClearOrigin | Type_315_DepositAsset | Type_315_DepositReserveAsset | Type_315_DescendOrigin | Type_315_ExchangeAsset | Type_315_HrmpChannelAccepted | Type_315_HrmpChannelClosing | Type_315_HrmpNewChannelOpenRequest | Type_315_InitiateReserveWithdraw | Type_315_InitiateTeleport | Type_315_QueryHolding | Type_315_QueryResponse | Type_315_ReceiveTeleportedAsset | Type_315_RefundSurplus | Type_315_ReportError | Type_315_ReserveAssetDeposited | Type_315_SetAppendix | Type_315_SetErrorHandler | Type_315_SubscribeVersion | Type_315_Transact | Type_315_TransferAsset | Type_315_TransferReserveAsset | Type_315_Trap | Type_315_UnsubscribeVersion | Type_315_WithdrawAsset

export interface Type_315_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_315_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_315_ClearError {
    __kind: 'ClearError'
}

export interface Type_315_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_315_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_315_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_315_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_315_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_315_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_315_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_315_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_315_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_315_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_315_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_315_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_315_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_315_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_315_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_315_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_315_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_315[]
}

export interface Type_315_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_315[]
}

export interface Type_315_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_315_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_316
}

export interface Type_315_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_315_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_315_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_315_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_315_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

/**
 * See [`Pallet::authorize_upgrade`].
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * See [`Pallet::enact_authorized_upgrade`].
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * See [`Pallet::set_validation_data`].
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

/**
 * See [`Pallet::sudo_send_upward_message`].
 */
export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V5PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export interface StorageProof {
    trieNodes: Bytes[]
}

export interface V5PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainStakingCall = ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_candidate_stake_less | ParachainStakingCall_candidate_stake_more | ParachainStakingCall_claim_rewards | ParachainStakingCall_delegator_stake_less | ParachainStakingCall_delegator_stake_more | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_execute_scheduled_reward_change | ParachainStakingCall_force_new_round | ParachainStakingCall_force_remove_candidate | ParachainStakingCall_increment_collator_rewards | ParachainStakingCall_increment_delegator_rewards | ParachainStakingCall_init_leave_candidates | ParachainStakingCall_join_candidates | ParachainStakingCall_join_delegators | ParachainStakingCall_leave_delegators | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_set_inflation | ParachainStakingCall_set_max_candidate_stake | ParachainStakingCall_set_max_selected_candidates | ParachainStakingCall_unlock_unstaked

/**
 * See [`Pallet::cancel_leave_candidates`].
 */
export interface ParachainStakingCall_cancel_leave_candidates {
    __kind: 'cancel_leave_candidates'
}

/**
 * See [`Pallet::candidate_stake_less`].
 */
export interface ParachainStakingCall_candidate_stake_less {
    __kind: 'candidate_stake_less'
    less: bigint
}

/**
 * See [`Pallet::candidate_stake_more`].
 */
export interface ParachainStakingCall_candidate_stake_more {
    __kind: 'candidate_stake_more'
    more: bigint
}

/**
 * See [`Pallet::claim_rewards`].
 */
export interface ParachainStakingCall_claim_rewards {
    __kind: 'claim_rewards'
}

/**
 * See [`Pallet::delegator_stake_less`].
 */
export interface ParachainStakingCall_delegator_stake_less {
    __kind: 'delegator_stake_less'
    candidate: MultiAddress
    less: bigint
}

/**
 * See [`Pallet::delegator_stake_more`].
 */
export interface ParachainStakingCall_delegator_stake_more {
    __kind: 'delegator_stake_more'
    candidate: MultiAddress
    more: bigint
}

/**
 * See [`Pallet::execute_leave_candidates`].
 */
export interface ParachainStakingCall_execute_leave_candidates {
    __kind: 'execute_leave_candidates'
    collator: MultiAddress
}

/**
 * See [`Pallet::execute_scheduled_reward_change`].
 */
export interface ParachainStakingCall_execute_scheduled_reward_change {
    __kind: 'execute_scheduled_reward_change'
}

/**
 * See [`Pallet::force_new_round`].
 */
export interface ParachainStakingCall_force_new_round {
    __kind: 'force_new_round'
}

/**
 * See [`Pallet::force_remove_candidate`].
 */
export interface ParachainStakingCall_force_remove_candidate {
    __kind: 'force_remove_candidate'
    collator: MultiAddress
}

/**
 * See [`Pallet::increment_collator_rewards`].
 */
export interface ParachainStakingCall_increment_collator_rewards {
    __kind: 'increment_collator_rewards'
}

/**
 * See [`Pallet::increment_delegator_rewards`].
 */
export interface ParachainStakingCall_increment_delegator_rewards {
    __kind: 'increment_delegator_rewards'
}

/**
 * See [`Pallet::init_leave_candidates`].
 */
export interface ParachainStakingCall_init_leave_candidates {
    __kind: 'init_leave_candidates'
}

/**
 * See [`Pallet::join_candidates`].
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    stake: bigint
}

/**
 * See [`Pallet::join_delegators`].
 */
export interface ParachainStakingCall_join_delegators {
    __kind: 'join_delegators'
    collator: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::leave_delegators`].
 */
export interface ParachainStakingCall_leave_delegators {
    __kind: 'leave_delegators'
}

/**
 * See [`Pallet::set_blocks_per_round`].
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: number
}

/**
 * See [`Pallet::set_inflation`].
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    collatorMaxRatePercentage: Perquintill
    collatorAnnualRewardRatePercentage: Perquintill
    delegatorMaxRatePercentage: Perquintill
    delegatorAnnualRewardRatePercentage: Perquintill
}

/**
 * See [`Pallet::set_max_candidate_stake`].
 */
export interface ParachainStakingCall_set_max_candidate_stake {
    __kind: 'set_max_candidate_stake'
    new: bigint
}

/**
 * See [`Pallet::set_max_selected_candidates`].
 */
export interface ParachainStakingCall_set_max_selected_candidates {
    __kind: 'set_max_selected_candidates'
    new: number
}

/**
 * See [`Pallet::unlock_unstaked`].
 */
export interface ParachainStakingCall_unlock_unstaked {
    __kind: 'unlock_unstaked'
    target: MultiAddress
}

export type Perquintill = bigint

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainInfoCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OracleCall = OracleCall_set_max_delay | OracleCall_update_oracle_keys

/**
 * See [`Pallet::set_max_delay`].
 */
export interface OracleCall_set_max_delay {
    __kind: 'set_max_delay'
    newMaxDelay: bigint
}

/**
 * See [`Pallet::update_oracle_keys`].
 */
export interface OracleCall_update_oracle_keys {
    __kind: 'update_oracle_keys'
    oracleKeys: Key[]
}

export type Key = Key_ExchangeRate

export interface Key_ExchangeRate {
    __kind: 'ExchangeRate'
    value: CurrencyId
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationCall = NominationCall_deposit_collateral | NominationCall_opt_in_to_nomination | NominationCall_opt_out_of_nomination | NominationCall_set_nomination_enabled | NominationCall_withdraw_collateral

/**
 * See [`Pallet::deposit_collateral`].
 */
export interface NominationCall_deposit_collateral {
    __kind: 'deposit_collateral'
    vaultId: VaultId
    amount: bigint
}

/**
 * See [`Pallet::opt_in_to_nomination`].
 */
export interface NominationCall_opt_in_to_nomination {
    __kind: 'opt_in_to_nomination'
    currencyPair: VaultCurrencyPair
}

/**
 * See [`Pallet::opt_out_of_nomination`].
 */
export interface NominationCall_opt_out_of_nomination {
    __kind: 'opt_out_of_nomination'
    currencyPair: VaultCurrencyPair
}

/**
 * See [`Pallet::set_nomination_enabled`].
 */
export interface NominationCall_set_nomination_enabled {
    __kind: 'set_nomination_enabled'
    enabled: boolean
}

/**
 * See [`Pallet::withdraw_collateral`].
 */
export interface NominationCall_withdraw_collateral {
    __kind: 'withdraw_collateral'
    vaultId: VaultId
    amount: bigint
    index?: (number | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IssueCall = IssueCall_cancel_issue | IssueCall_execute_issue | IssueCall_minimum_transfer_amount_update | IssueCall_rate_limit_update | IssueCall_request_issue | IssueCall_set_issue_period

/**
 * See [`Pallet::cancel_issue`].
 */
export interface IssueCall_cancel_issue {
    __kind: 'cancel_issue'
    issueId: H256
}

/**
 * See [`Pallet::execute_issue`].
 */
export interface IssueCall_execute_issue {
    __kind: 'execute_issue'
    issueId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesEncoded: Bytes
    transactionSetEncoded: Bytes
}

/**
 * See [`Pallet::minimum_transfer_amount_update`].
 */
export interface IssueCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

/**
 * See [`Pallet::rate_limit_update`].
 */
export interface IssueCall_rate_limit_update {
    __kind: 'rate_limit_update'
    limitVolumeAmount?: (bigint | undefined)
    limitVolumeCurrencyId: CurrencyId
    intervalLength: number
}

/**
 * See [`Pallet::request_issue`].
 */
export interface IssueCall_request_issue {
    __kind: 'request_issue'
    amount: bigint
    vaultId: VaultId
}

/**
 * See [`Pallet::set_issue_period`].
 */
export interface IssueCall_set_issue_period {
    __kind: 'set_issue_period'
    period: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type BitFlags = bigint

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FeeCall = FeeCall_set_issue_fee | FeeCall_set_issue_griefing_collateral | FeeCall_set_premium_redeem_fee | FeeCall_set_punishment_fee | FeeCall_set_redeem_fee | FeeCall_set_replace_griefing_collateral

/**
 * See [`Pallet::set_issue_fee`].
 */
export interface FeeCall_set_issue_fee {
    __kind: 'set_issue_fee'
    fee: FixedU128
}

/**
 * See [`Pallet::set_issue_griefing_collateral`].
 */
export interface FeeCall_set_issue_griefing_collateral {
    __kind: 'set_issue_griefing_collateral'
    griefingCollateral: FixedU128
}

/**
 * See [`Pallet::set_premium_redeem_fee`].
 */
export interface FeeCall_set_premium_redeem_fee {
    __kind: 'set_premium_redeem_fee'
    fee: FixedU128
}

/**
 * See [`Pallet::set_punishment_fee`].
 */
export interface FeeCall_set_punishment_fee {
    __kind: 'set_punishment_fee'
    fee: FixedU128
}

/**
 * See [`Pallet::set_redeem_fee`].
 */
export interface FeeCall_set_redeem_fee {
    __kind: 'set_redeem_fee'
    fee: FixedU128
}

/**
 * See [`Pallet::set_replace_griefing_collateral`].
 */
export interface FeeCall_set_replace_griefing_collateral {
    __kind: 'set_replace_griefing_collateral'
    griefingCollateral: FixedU128
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FarmingCall = FarmingCall_add_boost_pool_whitelist | FarmingCall_charge | FarmingCall_charge_boost | FarmingCall_claim | FarmingCall_close_pool | FarmingCall_create_farming_pool | FarmingCall_deposit | FarmingCall_edit_pool | FarmingCall_end_boost_round | FarmingCall_force_gauge_claim | FarmingCall_force_retire_pool | FarmingCall_gauge_withdraw | FarmingCall_kill_pool | FarmingCall_reset_pool | FarmingCall_set_next_round_whitelist | FarmingCall_set_retire_limit | FarmingCall_start_boost_round | FarmingCall_vote | FarmingCall_withdraw | FarmingCall_withdraw_claim

/**
 * See [`Pallet::add_boost_pool_whitelist`].
 */
export interface FarmingCall_add_boost_pool_whitelist {
    __kind: 'add_boost_pool_whitelist'
    whitelist: number[]
}

/**
 * See [`Pallet::charge`].
 */
export interface FarmingCall_charge {
    __kind: 'charge'
    pid: number
    rewards: [CurrencyId, bigint][]
}

/**
 * See [`Pallet::charge_boost`].
 */
export interface FarmingCall_charge_boost {
    __kind: 'charge_boost'
    rewards: [CurrencyId, bigint][]
}

/**
 * See [`Pallet::claim`].
 */
export interface FarmingCall_claim {
    __kind: 'claim'
    pid: number
}

/**
 * See [`Pallet::close_pool`].
 */
export interface FarmingCall_close_pool {
    __kind: 'close_pool'
    pid: number
}

/**
 * See [`Pallet::create_farming_pool`].
 */
export interface FarmingCall_create_farming_pool {
    __kind: 'create_farming_pool'
    tokensProportion: [CurrencyId, Perbill][]
    basicRewards: [CurrencyId, bigint][]
    gaugeInit?: ([CurrencyId, number, [CurrencyId, bigint][]] | undefined)
    minDepositToStart: bigint
    afterBlockToStart: number
    withdrawLimitTime: number
    claimLimitTime: number
    withdrawLimitCount: number
}

/**
 * See [`Pallet::deposit`].
 */
export interface FarmingCall_deposit {
    __kind: 'deposit'
    pid: number
    addValue: bigint
    gaugeInfo?: ([bigint, number] | undefined)
}

/**
 * See [`Pallet::edit_pool`].
 */
export interface FarmingCall_edit_pool {
    __kind: 'edit_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    gaugeBasicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitCount?: (number | undefined)
}

/**
 * See [`Pallet::end_boost_round`].
 */
export interface FarmingCall_end_boost_round {
    __kind: 'end_boost_round'
}

/**
 * See [`Pallet::force_gauge_claim`].
 */
export interface FarmingCall_force_gauge_claim {
    __kind: 'force_gauge_claim'
    gid: number
}

/**
 * See [`Pallet::force_retire_pool`].
 */
export interface FarmingCall_force_retire_pool {
    __kind: 'force_retire_pool'
    pid: number
}

/**
 * See [`Pallet::gauge_withdraw`].
 */
export interface FarmingCall_gauge_withdraw {
    __kind: 'gauge_withdraw'
    gid: number
}

/**
 * See [`Pallet::kill_pool`].
 */
export interface FarmingCall_kill_pool {
    __kind: 'kill_pool'
    pid: number
}

/**
 * See [`Pallet::reset_pool`].
 */
export interface FarmingCall_reset_pool {
    __kind: 'reset_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    minDepositToStart?: (bigint | undefined)
    afterBlockToStart?: (number | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    withdrawLimitCount?: (number | undefined)
    gaugeInit?: ([CurrencyId, number, [CurrencyId, bigint][]] | undefined)
}

/**
 * See [`Pallet::set_next_round_whitelist`].
 */
export interface FarmingCall_set_next_round_whitelist {
    __kind: 'set_next_round_whitelist'
    whitelist: number[]
}

/**
 * See [`Pallet::set_retire_limit`].
 */
export interface FarmingCall_set_retire_limit {
    __kind: 'set_retire_limit'
    limit: number
}

/**
 * See [`Pallet::start_boost_round`].
 */
export interface FarmingCall_start_boost_round {
    __kind: 'start_boost_round'
    roundLength: number
}

/**
 * See [`Pallet::vote`].
 */
export interface FarmingCall_vote {
    __kind: 'vote'
    voteList: [number, Percent][]
}

/**
 * See [`Pallet::withdraw`].
 */
export interface FarmingCall_withdraw {
    __kind: 'withdraw'
    pid: number
    removeValue?: (bigint | undefined)
}

/**
 * See [`Pallet::withdraw_claim`].
 */
export interface FarmingCall_withdraw_claim {
    __kind: 'withdraw_claim'
    pid: number
}

export type Percent = number

export type Perbill = number

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * See [`Pallet::service_overweight`].
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DiaOracleModuleCall = DiaOracleModuleCall_add_currency | DiaOracleModuleCall_authorize_account | DiaOracleModuleCall_deauthorize_account | DiaOracleModuleCall_remove_currency | DiaOracleModuleCall_set_batching_api | DiaOracleModuleCall_set_updated_coin_infos

/**
 * See [`Pallet::add_currency`].
 */
export interface DiaOracleModuleCall_add_currency {
    __kind: 'add_currency'
    blockchain: Bytes
    symbol: Bytes
}

/**
 * See [`Pallet::authorize_account`].
 */
export interface DiaOracleModuleCall_authorize_account {
    __kind: 'authorize_account'
    accountId: AccountId32
}

/**
 * See [`Pallet::deauthorize_account`].
 */
export interface DiaOracleModuleCall_deauthorize_account {
    __kind: 'deauthorize_account'
    accountId: AccountId32
}

/**
 * See [`Pallet::remove_currency`].
 */
export interface DiaOracleModuleCall_remove_currency {
    __kind: 'remove_currency'
    blockchain: Bytes
    symbol: Bytes
}

/**
 * See [`Pallet::set_batching_api`].
 */
export interface DiaOracleModuleCall_set_batching_api {
    __kind: 'set_batching_api'
    api: Bytes
}

/**
 * See [`Pallet::set_updated_coin_infos`].
 */
export interface DiaOracleModuleCall_set_updated_coin_infos {
    __kind: 'set_updated_coin_infos'
    coinInfos: [[Bytes, Bytes], CoinInfo][]
}

export interface CoinInfo {
    symbol: Bytes
    name: Bytes
    blockchain: Bytes
    supply: bigint
    lastUpdateTimestamp: bigint
    price: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 * See [`Pallet::blacklist`].
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * See [`Pallet::cancel_proposal`].
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * See [`Pallet::cancel_referendum`].
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * See [`Pallet::clear_public_proposals`].
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * See [`Pallet::delegate`].
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::emergency_cancel`].
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * See [`Pallet::external_propose`].
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_default`].
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_majority`].
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * See [`Pallet::fast_track`].
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

/**
 * See [`Pallet::propose`].
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * See [`Pallet::second`].
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::undelegate`].
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * See [`Pallet::unlock`].
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * See [`Pallet::veto_external`].
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * See [`Pallet::vote`].
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * See [`Pallet::transfer`].
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::transfer_native_currency`].
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::update_balance`].
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CumulusXcmCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 * See [`Pallet::close`].
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * See [`Pallet::vote`].
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ContractsCall = ContractsCall_call | ContractsCall_call_old_weight | ContractsCall_instantiate | ContractsCall_instantiate_old_weight | ContractsCall_instantiate_with_code | ContractsCall_instantiate_with_code_old_weight | ContractsCall_migrate | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_upload_code

/**
 * See [`Pallet::call`].
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: MultiAddress
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * See [`Pallet::call_old_weight`].
 */
export interface ContractsCall_call_old_weight {
    __kind: 'call_old_weight'
    dest: MultiAddress
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * See [`Pallet::instantiate`].
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_old_weight`].
 */
export interface ContractsCall_instantiate_old_weight {
    __kind: 'instantiate_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_with_code`].
 */
export interface ContractsCall_instantiate_with_code {
    __kind: 'instantiate_with_code'
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_with_code_old_weight`].
 */
export interface ContractsCall_instantiate_with_code_old_weight {
    __kind: 'instantiate_with_code_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::migrate`].
 */
export interface ContractsCall_migrate {
    __kind: 'migrate'
    weightLimit: Weight
}

/**
 * See [`Pallet::remove_code`].
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: H256
}

/**
 * See [`Pallet::set_code`].
 */
export interface ContractsCall_set_code {
    __kind: 'set_code'
    dest: MultiAddress
    codeHash: H256
}

/**
 * See [`Pallet::upload_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Bytes
    storageDepositLimit?: (bigint | undefined)
    determinism: Determinism
}

export type Determinism = Determinism_Enforced | Determinism_Relaxed

export interface Determinism_Enforced {
    __kind: 'Enforced'
}

export interface Determinism_Relaxed {
    __kind: 'Relaxed'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClientsInfoCall = ClientsInfoCall_authorize_account | ClientsInfoCall_deauthorize_account | ClientsInfoCall_set_current_client_release | ClientsInfoCall_set_pending_client_release

/**
 * See [`Pallet::authorize_account`].
 */
export interface ClientsInfoCall_authorize_account {
    __kind: 'authorize_account'
    accountId: AccountId32
}

/**
 * See [`Pallet::deauthorize_account`].
 */
export interface ClientsInfoCall_deauthorize_account {
    __kind: 'deauthorize_account'
    accountId: AccountId32
}

/**
 * See [`Pallet::set_current_client_release`].
 */
export interface ClientsInfoCall_set_current_client_release {
    __kind: 'set_current_client_release'
    clientName: Bytes
    release: ClientRelease
}

/**
 * See [`Pallet::set_pending_client_release`].
 */
export interface ClientsInfoCall_set_pending_client_release {
    __kind: 'set_pending_client_release'
    clientName: Bytes
    release: ClientRelease
}

export interface ClientRelease {
    uri: Bytes
    checksum: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ChildBountiesCall = ChildBountiesCall_accept_curator | ChildBountiesCall_add_child_bounty | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::add_child_bounty`].
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::award_child_bounty`].
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_child_bounty`].
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::close_child_bounty`].
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssetRegistryCall = AssetRegistryCall_register_asset | AssetRegistryCall_update_asset

/**
 * See [`Pallet::register_asset`].
 */
export interface AssetRegistryCall_register_asset {
    __kind: 'register_asset'
    metadata: AssetMetadata
    assetId?: (CurrencyId | undefined)
}

/**
 * See [`Pallet::update_asset`].
 */
export interface AssetRegistryCall_update_asset {
    __kind: 'update_asset'
    assetId: CurrencyId
    decimals?: (number | undefined)
    name?: (Bytes | undefined)
    symbol?: (Bytes | undefined)
    existentialDeposit?: (bigint | undefined)
    location: Option<(VersionedMultiLocation | undefined)>
    additional?: (CustomMetadata | undefined)
}

export interface CustomMetadata {
    diaKeys: DiaKeys
    feePerSecond: bigint
}

export interface DiaKeys {
    blockchain: Bytes
    symbol: Bytes
}

export interface AssetMetadata {
    decimals: number
    name: Bytes
    symbol: Bytes
    existentialDeposit: bigint
    location?: (VersionedMultiLocation | undefined)
    additional: CustomMetadata
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        AssetRegistry: AssetRegistryCall,
        Balances: BalancesCall,
        Bounties: BountiesCall,
        ChildBounties: ChildBountiesCall,
        ClientsInfo: ClientsInfoCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        CumulusXcm: CumulusXcmCall,
        Currencies: CurrenciesCall,
        Democracy: DemocracyCall,
        DiaOracleModule: DiaOracleModuleCall,
        DmpQueue: DmpQueueCall,
        Farming: FarmingCall,
        Fee: FeeCall,
        Identity: IdentityCall,
        Issue: IssueCall,
        Multisig: MultisigCall,
        Nomination: NominationCall,
        Oracle: OracleCall,
        ParachainInfo: ParachainInfoCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        PooledVaultRewards: PooledVaultRewardsCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Redeem: RedeemCall,
        Replace: ReplaceCall,
        RewardDistribution: RewardDistributionCall,
        Scheduler: SchedulerCall,
        Security: SecurityCall,
        Session: SessionCall,
        StellarRelay: StellarRelayCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        Timestamp: TimestampCall,
        TokenAllowance: TokenAllowanceCall,
        Tokens: TokensCall,
        Treasury: TreasuryCall,
        TreasuryBuyoutExtension: TreasuryBuyoutExtensionCall,
        Utility: UtilityCall,
        VaultRegistry: VaultRegistryCall,
        VaultStaking: VaultStakingCall,
        Vesting: VestingCall,
        VestingManager: VestingManagerCall,
        XTokens: XTokensCall,
        XcmpQueue: XcmpQueueCall,
        ZenlinkProtocol: ZenlinkProtocolCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ZenlinkProtocolCall: sts.Type<ZenlinkProtocolCall> = sts.closedEnum(() => {
    return  {
        add_liquidity: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            amount0Desired: sts.bigint(),
            amount1Desired: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            deadline: sts.number(),
        }),
        bootstrap_charge_reward: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            chargeRewards: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_claim: sts.enumStruct({
            recipient: MultiAddress,
            asset0: AssetId,
            asset1: AssetId,
            deadline: sts.number(),
        }),
        bootstrap_contribute: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            amount0Contribute: sts.bigint(),
            amount1Contribute: sts.bigint(),
            deadline: sts.number(),
        }),
        bootstrap_create: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => AssetId),
            limits: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_end: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
        }),
        bootstrap_refund: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
        }),
        bootstrap_update: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => AssetId),
            limits: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_withdraw_reward: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            recipient: MultiAddress,
        }),
        create_pair: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
        }),
        remove_liquidity: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            liquidity: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        set_fee_point: sts.enumStruct({
            feePoint: sts.number(),
        }),
        set_fee_receiver: sts.enumStruct({
            sendTo: sts.option(() => MultiAddress),
        }),
        swap_assets_for_exact_assets: sts.enumStruct({
            amountOut: sts.bigint(),
            amountInMax: sts.bigint(),
            path: sts.array(() => AssetId),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        swap_exact_assets_for_assets: sts.enumStruct({
            amountIn: sts.bigint(),
            amountOutMin: sts.bigint(),
            path: sts.array(() => AssetId),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        transfer: sts.enumStruct({
            assetId: AssetId,
            recipient: MultiAddress,
            amount: sts.bigint(),
        }),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const AccountId32 = sts.bytes()

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return  {
        chainId: sts.number(),
        assetType: sts.number(),
        assetIndex: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
        resume_xcm_execution: sts.unit(),
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
        suspend_xcm_execution: sts.unit(),
        update_drop_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_resume_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_suspend_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_threshold_weight: sts.enumStruct({
            new: Weight,
        }),
        update_weight_restrict_decay: sts.enumStruct({
            new: Weight,
        }),
        update_xcmp_max_individual_weight: sts.enumStruct({
            new: Weight,
        }),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedMultiAsset,
            fee: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedMultiAssets,
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return  {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return  {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const VersionedMultiAsset: sts.Type<VersionedMultiAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
    }
})

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export const CurrencyId: sts.Type<CurrencyId> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        Stellar: Asset,
        Token: sts.bigint(),
        XCM: sts.number(),
        ZenlinkLPToken: sts.tuple(() => [sts.number(), sts.number(), sts.number(), sts.number()]),
    }
})

export const Asset: sts.Type<Asset> = sts.closedEnum(() => {
    return  {
        AlphaNum12: sts.enumStruct({
            code: sts.bytes(),
            issuer: sts.bytes(),
        }),
        AlphaNum4: sts.enumStruct({
            code: sts.bytes(),
            issuer: sts.bytes(),
        }),
        StellarNative: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingManagerCall: sts.Type<VestingManagerCall> = sts.closedEnum(() => {
    return  {
        remove_vesting_schedule: sts.enumStruct({
            who: MultiAddress,
            scheduleIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
            schedule: VestingInfo,
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: MultiAddress,
        }),
        vested_transfer: sts.enumStruct({
            target: MultiAddress,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: sts.bigint(),
        perBlock: sts.bigint(),
        startingBlock: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VaultStakingCall: sts.Type<VaultStakingCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VaultRegistryCall: sts.Type<VaultRegistryCall> = sts.closedEnum(() => {
    return  {
        accept_new_issues: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            acceptNewIssues: sts.boolean(),
        }),
        deposit_collateral: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            amount: sts.bigint(),
        }),
        recover_vault_id: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
        }),
        register_public_key: sts.enumStruct({
            publicKey: sts.bytes(),
        }),
        register_vault: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            collateral: sts.bigint(),
        }),
        report_undercollateralized_vault: sts.enumStruct({
            vaultId: VaultId,
        }),
        set_custom_secure_threshold: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            customThreshold: sts.option(() => FixedU128),
        }),
        set_liquidation_collateral_threshold: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            threshold: FixedU128,
        }),
        set_minimum_collateral: sts.enumStruct({
            currencyId: CurrencyId,
            minimum: sts.bigint(),
        }),
        set_premium_redeem_threshold: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            threshold: FixedU128,
        }),
        set_punishment_delay: sts.enumStruct({
            punishmentDelay: sts.number(),
        }),
        set_secure_collateral_threshold: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            threshold: FixedU128,
        }),
        set_system_collateral_ceiling: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            ceiling: sts.bigint(),
        }),
        withdraw_collateral: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            amount: sts.bigint(),
        }),
    }
})

export const FixedU128 = sts.bigint()

export const VaultId: sts.Type<VaultId> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        currencies: VaultCurrencyPair,
    }
})

export const VaultCurrencyPair: sts.Type<VaultCurrencyPair> = sts.struct(() => {
    return  {
        collateral: CurrencyId,
        wrapped: CurrencyId,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_328,
        CumulusXcm: Type_331,
        PolkadotXcm: Type_330,
        TechnicalCommittee: Type_329,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_329: sts.Type<Type_329> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_330: sts.Type<Type_330> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Type_331: sts.Type<Type_331> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_328: sts.Type<Type_328> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryBuyoutExtensionCall: sts.Type<TreasuryBuyoutExtensionCall> = sts.closedEnum(() => {
    return  {
        buyout: sts.enumStruct({
            asset: CurrencyId,
            amount: Amount,
        }),
        update_allowed_assets: sts.enumStruct({
            assets: sts.array(() => CurrencyId),
        }),
        update_buyout_limit: sts.enumStruct({
            limit: sts.option(() => sts.bigint()),
        }),
    }
})

export const Amount: sts.Type<Amount> = sts.closedEnum(() => {
    return  {
        Buyout: sts.bigint(),
        Exchange: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TokensCall: sts.Type<TokensCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TokenAllowanceCall: sts.Type<TokenAllowanceCall> = sts.closedEnum(() => {
    return  {
        add_allowed_currencies: sts.enumStruct({
            currencies: sts.array(() => CurrencyId),
        }),
        approve: sts.enumStruct({
            id: CurrencyId,
            delegate: AccountId32,
            amount: sts.bigint(),
        }),
        remove_allowed_currencies: sts.enumStruct({
            currencies: sts.array(() => CurrencyId),
        }),
        transfer_from: sts.enumStruct({
            id: CurrencyId,
            owner: AccountId32,
            destination: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StellarRelayCall: sts.Type<StellarRelayCall> = sts.closedEnum(() => {
    return  {
        update_tier_1_validator_set: sts.enumStruct({
            validators: sts.array(() => Validator),
            organizations: sts.array(() => Organization),
            enactmentBlockHeight: sts.number(),
        }),
    }
})

export const Organization: sts.Type<Organization> = sts.struct(() => {
    return  {
        id: sts.bigint(),
        name: sts.bytes(),
    }
})

export const Validator: sts.Type<Validator> = sts.struct(() => {
    return  {
        name: sts.bytes(),
        publicKey: sts.bytes(),
        organizationId: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        aura: Public,
    }
})

export const Public = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SecurityCall: sts.Type<SecurityCall> = sts.closedEnum(() => {
    return  {
        insert_parachain_error: sts.enumStruct({
            errorCode: ErrorCode,
        }),
        remove_parachain_error: sts.enumStruct({
            errorCode: ErrorCode,
        }),
        set_parachain_status: sts.enumStruct({
            statusCode: StatusCode,
        }),
    }
})

export const StatusCode: sts.Type<StatusCode> = sts.closedEnum(() => {
    return  {
        Error: sts.unit(),
        Running: sts.unit(),
        Shutdown: sts.unit(),
    }
})

export const ErrorCode: sts.Type<ErrorCode> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        OracleOffline: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const RewardDistributionCall: sts.Type<RewardDistributionCall> = sts.closedEnum(() => {
    return  {
        collect_reward: sts.enumStruct({
            vaultId: VaultId,
            rewardCurrencyId: CurrencyId,
            index: sts.option(() => sts.number()),
        }),
        set_reward_per_block: sts.enumStruct({
            newRewardPerBlock: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ReplaceCall: sts.Type<ReplaceCall> = sts.closedEnum(() => {
    return  {
        accept_replace: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            oldVault: VaultId,
            amount: sts.bigint(),
            collateral: sts.bigint(),
            stellarAddress: sts.bytes(),
        }),
        cancel_replace: sts.enumStruct({
            replaceId: H256,
        }),
        execute_replace: sts.enumStruct({
            replaceId: H256,
            transactionEnvelopeXdrEncoded: sts.bytes(),
            externalizedEnvelopesXdrEncoded: sts.bytes(),
            transactionSetXdrEncoded: sts.bytes(),
        }),
        minimum_transfer_amount_update: sts.enumStruct({
            newMinimumAmount: sts.bigint(),
        }),
        request_replace: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            amount: sts.bigint(),
        }),
        set_replace_period: sts.enumStruct({
            period: sts.number(),
        }),
        withdraw_replace: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const RedeemCall: sts.Type<RedeemCall> = sts.closedEnum(() => {
    return  {
        cancel_redeem: sts.enumStruct({
            redeemId: H256,
            reimburse: sts.boolean(),
        }),
        execute_redeem: sts.enumStruct({
            redeemId: H256,
            transactionEnvelopeXdrEncoded: sts.bytes(),
            externalizedEnvelopesEncoded: sts.bytes(),
            transactionSetEncoded: sts.bytes(),
        }),
        liquidation_redeem: sts.enumStruct({
            currencies: VaultCurrencyPair,
            amountWrapped: sts.bigint(),
        }),
        minimum_transfer_amount_update: sts.enumStruct({
            newMinimumAmount: sts.bigint(),
        }),
        mint_tokens_for_reimbursed_redeem: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            redeemId: H256,
        }),
        rate_limit_update: sts.enumStruct({
            limitVolumeAmount: sts.option(() => sts.bigint()),
            limitVolumeCurrencyId: CurrencyId,
            intervalLength: sts.number(),
        }),
        request_redeem: sts.enumStruct({
            amountWrapped: sts.bigint(),
            stellarAddress: sts.bytes(),
            vaultId: VaultId,
        }),
        self_redeem: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
            amountWrapped: sts.bigint(),
        }),
        set_redeem_period: sts.enumStruct({
            period: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: MultiAddress,
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: MultiAddress,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PooledVaultRewardsCall: sts.Type<PooledVaultRewardsCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_312,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: BoundedVec,
        moduleName: BoundedVec,
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const BoundedVec = sts.bytes()

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const Type_312: sts.Type<Type_312> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_315),
        V3: sts.array(() => Type_319),
    }
})

export const Type_319: sts.Type<Type_319> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_319),
        SetErrorHandler: sts.array(() => Type_319),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_316,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const Type_316: sts.Type<Type_316> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_315: sts.Type<Type_315> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_315),
        SetErrorHandler: sts.array(() => Type_315),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_316,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: sts.bytes(),
        }),
    }
})

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: V5PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const V5PersistedValidationData: sts.Type<V5PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainStakingCall: sts.Type<ParachainStakingCall> = sts.closedEnum(() => {
    return  {
        cancel_leave_candidates: sts.unit(),
        candidate_stake_less: sts.enumStruct({
            less: sts.bigint(),
        }),
        candidate_stake_more: sts.enumStruct({
            more: sts.bigint(),
        }),
        claim_rewards: sts.unit(),
        delegator_stake_less: sts.enumStruct({
            candidate: MultiAddress,
            less: sts.bigint(),
        }),
        delegator_stake_more: sts.enumStruct({
            candidate: MultiAddress,
            more: sts.bigint(),
        }),
        execute_leave_candidates: sts.enumStruct({
            collator: MultiAddress,
        }),
        execute_scheduled_reward_change: sts.unit(),
        force_new_round: sts.unit(),
        force_remove_candidate: sts.enumStruct({
            collator: MultiAddress,
        }),
        increment_collator_rewards: sts.unit(),
        increment_delegator_rewards: sts.unit(),
        init_leave_candidates: sts.unit(),
        join_candidates: sts.enumStruct({
            stake: sts.bigint(),
        }),
        join_delegators: sts.enumStruct({
            collator: MultiAddress,
            amount: sts.bigint(),
        }),
        leave_delegators: sts.unit(),
        set_blocks_per_round: sts.enumStruct({
            new: sts.number(),
        }),
        set_inflation: sts.enumStruct({
            collatorMaxRatePercentage: Perquintill,
            collatorAnnualRewardRatePercentage: Perquintill,
            delegatorMaxRatePercentage: Perquintill,
            delegatorAnnualRewardRatePercentage: Perquintill,
        }),
        set_max_candidate_stake: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_selected_candidates: sts.enumStruct({
            new: sts.number(),
        }),
        unlock_unstaked: sts.enumStruct({
            target: MultiAddress,
        }),
    }
})

export const Perquintill = sts.bigint()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const OracleCall: sts.Type<OracleCall> = sts.closedEnum(() => {
    return  {
        set_max_delay: sts.enumStruct({
            newMaxDelay: sts.bigint(),
        }),
        update_oracle_keys: sts.enumStruct({
            oracleKeys: sts.array(() => Key),
        }),
    }
})

export const Key: sts.Type<Key> = sts.closedEnum(() => {
    return  {
        ExchangeRate: CurrencyId,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NominationCall: sts.Type<NominationCall> = sts.closedEnum(() => {
    return  {
        deposit_collateral: sts.enumStruct({
            vaultId: VaultId,
            amount: sts.bigint(),
        }),
        opt_in_to_nomination: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
        }),
        opt_out_of_nomination: sts.enumStruct({
            currencyPair: VaultCurrencyPair,
        }),
        set_nomination_enabled: sts.enumStruct({
            enabled: sts.boolean(),
        }),
        withdraw_collateral: sts.enumStruct({
            vaultId: VaultId,
            amount: sts.bigint(),
            index: sts.option(() => sts.number()),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IssueCall: sts.Type<IssueCall> = sts.closedEnum(() => {
    return  {
        cancel_issue: sts.enumStruct({
            issueId: H256,
        }),
        execute_issue: sts.enumStruct({
            issueId: H256,
            transactionEnvelopeXdrEncoded: sts.bytes(),
            externalizedEnvelopesEncoded: sts.bytes(),
            transactionSetEncoded: sts.bytes(),
        }),
        minimum_transfer_amount_update: sts.enumStruct({
            newMinimumAmount: sts.bigint(),
        }),
        rate_limit_update: sts.enumStruct({
            limitVolumeAmount: sts.option(() => sts.bigint()),
            limitVolumeCurrencyId: CurrencyId,
            intervalLength: sts.number(),
        }),
        request_issue: sts.enumStruct({
            amount: sts.bigint(),
            vaultId: VaultId,
        }),
        set_issue_period: sts.enumStruct({
            period: sts.number(),
        }),
    }
})

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
            identity: H256,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: MultiAddress,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FeeCall: sts.Type<FeeCall> = sts.closedEnum(() => {
    return  {
        set_issue_fee: sts.enumStruct({
            fee: FixedU128,
        }),
        set_issue_griefing_collateral: sts.enumStruct({
            griefingCollateral: FixedU128,
        }),
        set_premium_redeem_fee: sts.enumStruct({
            fee: FixedU128,
        }),
        set_punishment_fee: sts.enumStruct({
            fee: FixedU128,
        }),
        set_redeem_fee: sts.enumStruct({
            fee: FixedU128,
        }),
        set_replace_griefing_collateral: sts.enumStruct({
            griefingCollateral: FixedU128,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FarmingCall: sts.Type<FarmingCall> = sts.closedEnum(() => {
    return  {
        add_boost_pool_whitelist: sts.enumStruct({
            whitelist: sts.array(() => sts.number()),
        }),
        charge: sts.enumStruct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        charge_boost: sts.enumStruct({
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        claim: sts.enumStruct({
            pid: sts.number(),
        }),
        close_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        create_farming_pool: sts.enumStruct({
            tokensProportion: sts.array(() => sts.tuple(() => [CurrencyId, Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        }),
        deposit: sts.enumStruct({
            pid: sts.number(),
            addValue: sts.bigint(),
            gaugeInfo: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
        }),
        edit_pool: sts.enumStruct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        }),
        end_boost_round: sts.unit(),
        force_gauge_claim: sts.enumStruct({
            gid: sts.number(),
        }),
        force_retire_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        gauge_withdraw: sts.enumStruct({
            gid: sts.number(),
        }),
        kill_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        reset_pool: sts.enumStruct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
        }),
        set_next_round_whitelist: sts.enumStruct({
            whitelist: sts.array(() => sts.number()),
        }),
        set_retire_limit: sts.enumStruct({
            limit: sts.number(),
        }),
        start_boost_round: sts.enumStruct({
            roundLength: sts.number(),
        }),
        vote: sts.enumStruct({
            voteList: sts.array(() => sts.tuple(() => [sts.number(), Percent])),
        }),
        withdraw: sts.enumStruct({
            pid: sts.number(),
            removeValue: sts.option(() => sts.bigint()),
        }),
        withdraw_claim: sts.enumStruct({
            pid: sts.number(),
        }),
    }
})

export const Percent = sts.number()

export const Perbill = sts.number()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DmpQueueCall: sts.Type<DmpQueueCall> = sts.closedEnum(() => {
    return  {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DiaOracleModuleCall: sts.Type<DiaOracleModuleCall> = sts.closedEnum(() => {
    return  {
        add_currency: sts.enumStruct({
            blockchain: sts.bytes(),
            symbol: sts.bytes(),
        }),
        authorize_account: sts.enumStruct({
            accountId: AccountId32,
        }),
        deauthorize_account: sts.enumStruct({
            accountId: AccountId32,
        }),
        remove_currency: sts.enumStruct({
            blockchain: sts.bytes(),
            symbol: sts.bytes(),
        }),
        set_batching_api: sts.enumStruct({
            api: sts.bytes(),
        }),
        set_updated_coin_infos: sts.enumStruct({
            coinInfos: sts.array(() => sts.tuple(() => [sts.tuple(() => [sts.bytes(), sts.bytes()]), CoinInfo])),
        }),
    }
})

export const CoinInfo: sts.Type<CoinInfo> = sts.struct(() => {
    return  {
        symbol: sts.bytes(),
        name: sts.bytes(),
        blockchain: sts.bytes(),
        supply: sts.bigint(),
        lastUpdateTimestamp: sts.bigint(),
        price: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: H256,
            maybeRefIndex: sts.option(() => sts.number()),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_default: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_majority: sts.enumStruct({
            proposal: Bounded,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
        }),
        propose: sts.enumStruct({
            proposal: Bounded,
            value: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            owner: MetadataOwner,
            maybeHash: sts.option(() => H256),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: MultiAddress,
        }),
        veto_external: sts.enumStruct({
            proposalHash: H256,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const MetadataOwner: sts.Type<MetadataOwner> = sts.closedEnum(() => {
    return  {
        External: sts.unit(),
        Proposal: sts.number(),
        Referendum: sts.number(),
    }
})

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CurrenciesCall: sts.Type<CurrenciesCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        transfer_native_currency: sts.enumStruct({
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        update_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CumulusXcmCall: sts.Type<CumulusXcmCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ContractsCall: sts.Type<ContractsCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        }),
        call_old_weight: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        }),
        instantiate: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_old_weight: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_with_code: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_with_code_old_weight: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        migrate: sts.enumStruct({
            weightLimit: Weight,
        }),
        remove_code: sts.enumStruct({
            codeHash: H256,
        }),
        set_code: sts.enumStruct({
            dest: MultiAddress,
            codeHash: H256,
        }),
        upload_code: sts.enumStruct({
            code: sts.bytes(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            determinism: Determinism,
        }),
    }
})

export const Determinism: sts.Type<Determinism> = sts.closedEnum(() => {
    return  {
        Enforced: sts.unit(),
        Relaxed: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ClientsInfoCall: sts.Type<ClientsInfoCall> = sts.closedEnum(() => {
    return  {
        authorize_account: sts.enumStruct({
            accountId: AccountId32,
        }),
        deauthorize_account: sts.enumStruct({
            accountId: AccountId32,
        }),
        set_current_client_release: sts.enumStruct({
            clientName: sts.bytes(),
            release: ClientRelease,
        }),
        set_pending_client_release: sts.enumStruct({
            clientName: sts.bytes(),
            release: ClientRelease,
        }),
    }
})

export const ClientRelease: sts.Type<ClientRelease> = sts.struct(() => {
    return  {
        uri: sts.bytes(),
        checksum: H256,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ChildBountiesCall: sts.Type<ChildBountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        add_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        award_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        close_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        propose_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AssetRegistryCall: sts.Type<AssetRegistryCall> = sts.closedEnum(() => {
    return  {
        register_asset: sts.enumStruct({
            metadata: AssetMetadata,
            assetId: sts.option(() => CurrencyId),
        }),
        update_asset: sts.enumStruct({
            assetId: CurrencyId,
            decimals: sts.option(() => sts.number()),
            name: sts.option(() => sts.bytes()),
            symbol: sts.option(() => sts.bytes()),
            existentialDeposit: sts.option(() => sts.bigint()),
            location: sts.enumOption(() => sts.option(() => VersionedMultiLocation)),
            additional: sts.option(() => CustomMetadata),
        }),
    }
})

export const CustomMetadata: sts.Type<CustomMetadata> = sts.struct(() => {
    return  {
        diaKeys: DiaKeys,
        feePerSecond: sts.bigint(),
    }
})

export const DiaKeys: sts.Type<DiaKeys> = sts.struct(() => {
    return  {
        blockchain: sts.bytes(),
        symbol: sts.bytes(),
    }
})

export const AssetMetadata: sts.Type<AssetMetadata> = sts.struct(() => {
    return  {
        decimals: sts.number(),
        name: sts.bytes(),
        symbol: sts.bytes(),
        existentialDeposit: sts.bigint(),
        location: sts.option(() => VersionedMultiLocation),
        additional: CustomMetadata,
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export interface ModuleError {
    index: number
    error: Bytes
}

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export const H256 = sts.bytes()
