import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Assets | Call_Balances | Call_CollatorSelection | Call_Contracts | Call_Council | Call_CumulusXcm | Call_DappStaking | Call_DappStakingMigration | Call_Democracy | Call_DmpQueue | Call_DynamicEvmBaseFee | Call_EVM | Call_Ethereum | Call_EthereumChecked | Call_Identity | Call_Inflation | Call_Multisig | Call_ParachainInfo | Call_ParachainSystem | Call_PolkadotXcm | Call_Preimage | Call_Proxy | Call_Scheduler | Call_Session | Call_StaticPriceProvider | Call_Sudo | Call_System | Call_TechnicalCommittee | Call_Timestamp | Call_Treasury | Call_UnifiedAccounts | Call_Utility | Call_Vesting | Call_XTokens | Call_XcAssetConfig | Call_XcmpQueue

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
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

export interface Call_DappStaking {
    __kind: 'DappStaking'
    value: DappStakingCall
}

export interface Call_DappStakingMigration {
    __kind: 'DappStakingMigration'
    value: DappStakingMigrationCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_DynamicEvmBaseFee {
    __kind: 'DynamicEvmBaseFee'
    value: DynamicEvmBaseFeeCall
}

export interface Call_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Call_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Call_EthereumChecked {
    __kind: 'EthereumChecked'
    value: EthereumCheckedCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Inflation {
    __kind: 'Inflation'
    value: InflationCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_StaticPriceProvider {
    __kind: 'StaticPriceProvider'
    value: StaticPriceProviderCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
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

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_UnifiedAccounts {
    __kind: 'UnifiedAccounts'
    value: UnifiedAccountsCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_XcAssetConfig {
    __kind: 'XcAssetConfig'
    value: XcAssetConfigCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
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
export type XcAssetConfigCall = XcAssetConfigCall_change_existing_asset_location | XcAssetConfigCall_register_asset_location | XcAssetConfigCall_remove_asset | XcAssetConfigCall_remove_payment_asset | XcAssetConfigCall_set_asset_units_per_second

/**
 * See [`Pallet::change_existing_asset_location`].
 */
export interface XcAssetConfigCall_change_existing_asset_location {
    __kind: 'change_existing_asset_location'
    newAssetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * See [`Pallet::register_asset_location`].
 */
export interface XcAssetConfigCall_register_asset_location {
    __kind: 'register_asset_location'
    assetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * See [`Pallet::remove_asset`].
 */
export interface XcAssetConfigCall_remove_asset {
    __kind: 'remove_asset'
    assetId: bigint
}

/**
 * See [`Pallet::remove_payment_asset`].
 */
export interface XcAssetConfigCall_remove_payment_asset {
    __kind: 'remove_payment_asset'
    assetLocation: VersionedMultiLocation
}

/**
 * See [`Pallet::set_asset_units_per_second`].
 */
export interface XcAssetConfigCall_set_asset_units_per_second {
    __kind: 'set_asset_units_per_second'
    assetLocation: VersionedMultiLocation
    unitsPerSecond: bigint
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: bigint
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
    currencies: [bigint, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: bigint
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

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_EthereumChecked | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_325
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_322
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_323
}

export interface OriginCaller_EthereumChecked {
    __kind: 'EthereumChecked'
    value: Type_324
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_321
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_326
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

export type Type_326 = Type_326_Member | Type_326_Members | Type_326__Phantom

export interface Type_326_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_326_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_326__Phantom {
    __kind: '_Phantom'
}

export type Type_321 = Type_321_Response | Type_321_Xcm

export interface Type_321_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_321_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Type_324 = Type_324_XcmEthereumTx

export interface Type_324_XcmEthereumTx {
    __kind: 'XcmEthereumTx'
    value: AccountId32
}

export type Type_323 = Type_323_EthereumTransaction

export interface Type_323_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: H160
}

export type H160 = Bytes

export type Type_322 = Type_322_Relay | Type_322_SiblingParachain

export interface Type_322_Relay {
    __kind: 'Relay'
}

export interface Type_322_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_325 = Type_325_Member | Type_325_Members | Type_325__Phantom

export interface Type_325_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_325_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_325__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UnifiedAccountsCall = UnifiedAccountsCall_claim_default_evm_address | UnifiedAccountsCall_claim_evm_address

/**
 * See [`Pallet::claim_default_evm_address`].
 */
export interface UnifiedAccountsCall_claim_default_evm_address {
    __kind: 'claim_default_evm_address'
}

/**
 * See [`Pallet::claim_evm_address`].
 */
export interface UnifiedAccountsCall_claim_evm_address {
    __kind: 'claim_evm_address'
    evmAddress: H160
    signature: Bytes
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
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StaticPriceProviderCall = StaticPriceProviderCall_force_set_price

/**
 * See [`Pallet::force_set_price`].
 */
export interface StaticPriceProviderCall_force_set_price {
    __kind: 'force_set_price'
    price: FixedU64
}

export type FixedU64 = bigint

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

export type ProxyType = ProxyType_Any | ProxyType_Assets | ProxyType_Balances | ProxyType_CancelProxy | ProxyType_DappStaking | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_NonTransfer | ProxyType_StakerRewardClaim

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Assets {
    __kind: 'Assets'
}

export interface ProxyType_Balances {
    __kind: 'Balances'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_DappStaking {
    __kind: 'DappStaking'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_StakerRewardClaim {
    __kind: 'StakerRewardClaim'
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
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_267
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

export type Type_267 = Type_267_V2 | Type_267_V3

export interface Type_267_V2 {
    __kind: 'V2'
    value: Type_270[]
}

export interface Type_267_V3 {
    __kind: 'V3'
    value: Type_274[]
}

export type Type_274 = Type_274_AliasOrigin | Type_274_BurnAsset | Type_274_BuyExecution | Type_274_ClaimAsset | Type_274_ClearError | Type_274_ClearOrigin | Type_274_ClearTopic | Type_274_ClearTransactStatus | Type_274_DepositAsset | Type_274_DepositReserveAsset | Type_274_DescendOrigin | Type_274_ExchangeAsset | Type_274_ExpectAsset | Type_274_ExpectError | Type_274_ExpectOrigin | Type_274_ExpectPallet | Type_274_ExpectTransactStatus | Type_274_ExportMessage | Type_274_HrmpChannelAccepted | Type_274_HrmpChannelClosing | Type_274_HrmpNewChannelOpenRequest | Type_274_InitiateReserveWithdraw | Type_274_InitiateTeleport | Type_274_LockAsset | Type_274_NoteUnlockable | Type_274_QueryPallet | Type_274_QueryResponse | Type_274_ReceiveTeleportedAsset | Type_274_RefundSurplus | Type_274_ReportError | Type_274_ReportHolding | Type_274_ReportTransactStatus | Type_274_RequestUnlock | Type_274_ReserveAssetDeposited | Type_274_SetAppendix | Type_274_SetErrorHandler | Type_274_SetFeesMode | Type_274_SetTopic | Type_274_SubscribeVersion | Type_274_Transact | Type_274_TransferAsset | Type_274_TransferReserveAsset | Type_274_Trap | Type_274_UniversalOrigin | Type_274_UnlockAsset | Type_274_UnpaidExecution | Type_274_UnsubscribeVersion | Type_274_WithdrawAsset

export interface Type_274_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_274_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_274_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_274_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_274_ClearError {
    __kind: 'ClearError'
}

export interface Type_274_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_274_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_274_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_274_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_274_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_274_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_274_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_274_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_274_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_274_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_274_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_274_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_274_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_274_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_274_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_274_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_274_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_274_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_274_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_274_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_274_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_274_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_274_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_274_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_274_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_274_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_274_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_274_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_274_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_274_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_274[]
}

export interface Type_274_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_274[]
}

export interface Type_274_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_274_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_274_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_274_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_271
}

export interface Type_274_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_274_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_274_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_274_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_274_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_274_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_274_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_274_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_271 {
    encoded: Bytes
}

export type Type_270 = Type_270_BuyExecution | Type_270_ClaimAsset | Type_270_ClearError | Type_270_ClearOrigin | Type_270_DepositAsset | Type_270_DepositReserveAsset | Type_270_DescendOrigin | Type_270_ExchangeAsset | Type_270_HrmpChannelAccepted | Type_270_HrmpChannelClosing | Type_270_HrmpNewChannelOpenRequest | Type_270_InitiateReserveWithdraw | Type_270_InitiateTeleport | Type_270_QueryHolding | Type_270_QueryResponse | Type_270_ReceiveTeleportedAsset | Type_270_RefundSurplus | Type_270_ReportError | Type_270_ReserveAssetDeposited | Type_270_SetAppendix | Type_270_SetErrorHandler | Type_270_SubscribeVersion | Type_270_Transact | Type_270_TransferAsset | Type_270_TransferReserveAsset | Type_270_Trap | Type_270_UnsubscribeVersion | Type_270_WithdrawAsset

export interface Type_270_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_270_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_270_ClearError {
    __kind: 'ClearError'
}

export interface Type_270_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_270_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_270_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_270_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_270_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_270_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_270_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_270_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_270_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_270_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_270_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_270_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_270_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_270_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_270_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_270_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_270_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_270[]
}

export interface Type_270_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_270[]
}

export interface Type_270_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_270_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_271
}

export interface Type_270_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_270_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_270_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_270_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_270_WithdrawAsset {
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
export type ParachainInfoCall = never

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
export type InflationCall = InflationCall_force_inflation_recalculation | InflationCall_force_set_inflation_params

/**
 * See [`Pallet::force_inflation_recalculation`].
 */
export interface InflationCall_force_inflation_recalculation {
    __kind: 'force_inflation_recalculation'
    nextEra: number
}

/**
 * See [`Pallet::force_set_inflation_params`].
 */
export interface InflationCall_force_set_inflation_params {
    __kind: 'force_set_inflation_params'
    params: InflationParameters
}

export interface InflationParameters {
    maxInflationRate: bigint
    treasuryPart: bigint
    collatorsPart: bigint
    dappsPart: bigint
    baseStakersPart: bigint
    adjustableStakersPart: bigint
    bonusPart: bigint
    idealStakingRate: bigint
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
export type EthereumCheckedCall = EthereumCheckedCall_transact

/**
 * See [`Pallet::transact`].
 */
export interface EthereumCheckedCall_transact {
    __kind: 'transact'
    tx: CheckedEthereumTx
}

export interface CheckedEthereumTx {
    gasLimit: bigint
    target: H160
    value: bigint
    input: Bytes
    maybeAccessList?: ([H160, H256[]][] | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EthereumCall = EthereumCall_transact

/**
 * See [`Pallet::transact`].
 */
export interface EthereumCall_transact {
    __kind: 'transact'
    transaction: TransactionV2
}

export type TransactionV2 = TransactionV2_EIP1559 | TransactionV2_EIP2930 | TransactionV2_Legacy

export interface TransactionV2_EIP1559 {
    __kind: 'EIP1559'
    value: EIP1559Transaction
}

export interface TransactionV2_EIP2930 {
    __kind: 'EIP2930'
    value: EIP2930Transaction
}

export interface TransactionV2_Legacy {
    __kind: 'Legacy'
    value: LegacyTransaction
}

export interface LegacyTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    signature: TransactionSignature
}

export interface TransactionSignature {
    v: TransactionRecoveryId
    r: H256
    s: H256
}

export type TransactionRecoveryId = bigint

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
    __kind: 'Call'
    value: H160
}

export interface TransactionAction_Create {
    __kind: 'Create'
}

export interface EIP2930Transaction {
    chainId: bigint
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    oddYParity: boolean
    r: H256
    s: H256
}

export interface AccessListItem {
    address: H160
    storageKeys: H256[]
}

export interface EIP1559Transaction {
    chainId: bigint
    nonce: bigint
    maxPriorityFeePerGas: bigint
    maxFeePerGas: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    oddYParity: boolean
    r: H256
    s: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EVMCall = EVMCall_call | EVMCall_create | EVMCall_create2 | EVMCall_withdraw

/**
 * See [`Pallet::call`].
 */
export interface EVMCall_call {
    __kind: 'call'
    source: H160
    target: H160
    input: Bytes
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * See [`Pallet::create`].
 */
export interface EVMCall_create {
    __kind: 'create'
    source: H160
    init: Bytes
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * See [`Pallet::create2`].
 */
export interface EVMCall_create2 {
    __kind: 'create2'
    source: H160
    init: Bytes
    salt: H256
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * See [`Pallet::withdraw`].
 */
export interface EVMCall_withdraw {
    __kind: 'withdraw'
    address: H160
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DynamicEvmBaseFeeCall = DynamicEvmBaseFeeCall_set_base_fee_per_gas

/**
 * See [`Pallet::set_base_fee_per_gas`].
 */
export interface DynamicEvmBaseFeeCall_set_base_fee_per_gas {
    __kind: 'set_base_fee_per_gas'
    fee: bigint
}

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
export type DappStakingMigrationCall = DappStakingMigrationCall_migrate

/**
 * See [`Pallet::migrate`].
 */
export interface DappStakingMigrationCall_migrate {
    __kind: 'migrate'
    weightLimit?: (Weight | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DappStakingCall = DappStakingCall_claim_bonus_reward | DappStakingCall_claim_dapp_reward | DappStakingCall_claim_staker_rewards | DappStakingCall_claim_unlocked | DappStakingCall_cleanup_expired_entries | DappStakingCall_force | DappStakingCall_lock | DappStakingCall_maintenance_mode | DappStakingCall_register | DappStakingCall_relock_unlocking | DappStakingCall_set_dapp_owner | DappStakingCall_set_dapp_reward_beneficiary | DappStakingCall_stake | DappStakingCall_unbond_and_unstake | DappStakingCall_unlock | DappStakingCall_unregister | DappStakingCall_unstake | DappStakingCall_unstake_from_unregistered | DappStakingCall_withdraw_unbonded

/**
 * See [`Pallet::claim_bonus_reward`].
 */
export interface DappStakingCall_claim_bonus_reward {
    __kind: 'claim_bonus_reward'
    smartContract: SmartContract
}

/**
 * See [`Pallet::claim_dapp_reward`].
 */
export interface DappStakingCall_claim_dapp_reward {
    __kind: 'claim_dapp_reward'
    smartContract: SmartContract
    era: number
}

/**
 * See [`Pallet::claim_staker_rewards`].
 */
export interface DappStakingCall_claim_staker_rewards {
    __kind: 'claim_staker_rewards'
}

/**
 * See [`Pallet::claim_unlocked`].
 */
export interface DappStakingCall_claim_unlocked {
    __kind: 'claim_unlocked'
}

/**
 * See [`Pallet::cleanup_expired_entries`].
 */
export interface DappStakingCall_cleanup_expired_entries {
    __kind: 'cleanup_expired_entries'
}

/**
 * See [`Pallet::force`].
 */
export interface DappStakingCall_force {
    __kind: 'force'
    forcingType: ForcingType
}

/**
 * See [`Pallet::lock`].
 */
export interface DappStakingCall_lock {
    __kind: 'lock'
    amount: bigint
}

/**
 * See [`Pallet::maintenance_mode`].
 */
export interface DappStakingCall_maintenance_mode {
    __kind: 'maintenance_mode'
    enabled: boolean
}

/**
 * See [`Pallet::register`].
 */
export interface DappStakingCall_register {
    __kind: 'register'
    owner: AccountId32
    smartContract: SmartContract
}

/**
 * See [`Pallet::relock_unlocking`].
 */
export interface DappStakingCall_relock_unlocking {
    __kind: 'relock_unlocking'
}

/**
 * See [`Pallet::set_dapp_owner`].
 */
export interface DappStakingCall_set_dapp_owner {
    __kind: 'set_dapp_owner'
    smartContract: SmartContract
    newOwner: AccountId32
}

/**
 * See [`Pallet::set_dapp_reward_beneficiary`].
 */
export interface DappStakingCall_set_dapp_reward_beneficiary {
    __kind: 'set_dapp_reward_beneficiary'
    smartContract: SmartContract
    beneficiary?: (AccountId32 | undefined)
}

/**
 * See [`Pallet::stake`].
 */
export interface DappStakingCall_stake {
    __kind: 'stake'
    smartContract: SmartContract
    amount: bigint
}

/**
 * See [`Pallet::unbond_and_unstake`].
 */
export interface DappStakingCall_unbond_and_unstake {
    __kind: 'unbond_and_unstake'
    contractId: SmartContract
    value: bigint
}

/**
 * See [`Pallet::unlock`].
 */
export interface DappStakingCall_unlock {
    __kind: 'unlock'
    amount: bigint
}

/**
 * See [`Pallet::unregister`].
 */
export interface DappStakingCall_unregister {
    __kind: 'unregister'
    smartContract: SmartContract
}

/**
 * See [`Pallet::unstake`].
 */
export interface DappStakingCall_unstake {
    __kind: 'unstake'
    smartContract: SmartContract
    amount: bigint
}

/**
 * See [`Pallet::unstake_from_unregistered`].
 */
export interface DappStakingCall_unstake_from_unregistered {
    __kind: 'unstake_from_unregistered'
    smartContract: SmartContract
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface DappStakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
}

export type ForcingType = ForcingType_Era | ForcingType_Subperiod

export interface ForcingType_Era {
    __kind: 'Era'
}

export interface ForcingType_Subperiod {
    __kind: 'Subperiod'
}

export type SmartContract = SmartContract_Evm | SmartContract_Wasm

export interface SmartContract_Evm {
    __kind: 'Evm'
    value: H160
}

export interface SmartContract_Wasm {
    __kind: 'Wasm'
    value: AccountId32
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
export type CollatorSelectionCall = CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables

/**
 * See [`Pallet::leave_intent`].
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

/**
 * See [`Pallet::register_as_candidate`].
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * See [`Pallet::set_candidacy_bond`].
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * See [`Pallet::set_desired_candidates`].
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
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
export type AssetsCall = AssetsCall_approve_transfer | AssetsCall_block | AssetsCall_burn | AssetsCall_cancel_approval | AssetsCall_clear_metadata | AssetsCall_create | AssetsCall_destroy_accounts | AssetsCall_destroy_approvals | AssetsCall_finish_destroy | AssetsCall_force_asset_status | AssetsCall_force_cancel_approval | AssetsCall_force_clear_metadata | AssetsCall_force_create | AssetsCall_force_set_metadata | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_freeze_asset | AssetsCall_mint | AssetsCall_refund | AssetsCall_refund_other | AssetsCall_set_metadata | AssetsCall_set_min_balance | AssetsCall_set_team | AssetsCall_start_destroy | AssetsCall_thaw | AssetsCall_thaw_asset | AssetsCall_touch | AssetsCall_touch_other | AssetsCall_transfer | AssetsCall_transfer_approved | AssetsCall_transfer_keep_alive | AssetsCall_transfer_ownership

/**
 * See [`Pallet::approve_transfer`].
 */
export interface AssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: bigint
    delegate: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::block`].
 */
export interface AssetsCall_block {
    __kind: 'block'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::burn`].
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: bigint
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::cancel_approval`].
 */
export interface AssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: bigint
    delegate: MultiAddress
}

/**
 * See [`Pallet::clear_metadata`].
 */
export interface AssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: bigint
}

/**
 * See [`Pallet::create`].
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: bigint
    admin: MultiAddress
    minBalance: bigint
}

/**
 * See [`Pallet::destroy_accounts`].
 */
export interface AssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: bigint
}

/**
 * See [`Pallet::destroy_approvals`].
 */
export interface AssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: bigint
}

/**
 * See [`Pallet::finish_destroy`].
 */
export interface AssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: bigint
}

/**
 * See [`Pallet::force_asset_status`].
 */
export interface AssetsCall_force_asset_status {
    __kind: 'force_asset_status'
    id: bigint
    owner: MultiAddress
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
    minBalance: bigint
    isSufficient: boolean
    isFrozen: boolean
}

/**
 * See [`Pallet::force_cancel_approval`].
 */
export interface AssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: bigint
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * See [`Pallet::force_clear_metadata`].
 */
export interface AssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: bigint
}

/**
 * See [`Pallet::force_create`].
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: bigint
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * See [`Pallet::force_set_metadata`].
 */
export interface AssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
    isFrozen: boolean
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: bigint
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::freeze`].
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::freeze_asset`].
 */
export interface AssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: bigint
}

/**
 * See [`Pallet::mint`].
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: bigint
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::refund`].
 */
export interface AssetsCall_refund {
    __kind: 'refund'
    id: bigint
    allowBurn: boolean
}

/**
 * See [`Pallet::refund_other`].
 */
export interface AssetsCall_refund_other {
    __kind: 'refund_other'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface AssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * See [`Pallet::set_min_balance`].
 */
export interface AssetsCall_set_min_balance {
    __kind: 'set_min_balance'
    id: bigint
    minBalance: bigint
}

/**
 * See [`Pallet::set_team`].
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: bigint
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * See [`Pallet::start_destroy`].
 */
export interface AssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: bigint
}

/**
 * See [`Pallet::thaw`].
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::thaw_asset`].
 */
export interface AssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: bigint
}

/**
 * See [`Pallet::touch`].
 */
export interface AssetsCall_touch {
    __kind: 'touch'
    id: bigint
}

/**
 * See [`Pallet::touch_other`].
 */
export interface AssetsCall_touch_other {
    __kind: 'touch_other'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::transfer`].
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::transfer_approved`].
 */
export interface AssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: bigint
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface AssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::transfer_ownership`].
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: bigint
    owner: MultiAddress
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Balances: BalancesCall,
        CollatorSelection: CollatorSelectionCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        CumulusXcm: CumulusXcmCall,
        DappStaking: DappStakingCall,
        DappStakingMigration: DappStakingMigrationCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
        DynamicEvmBaseFee: DynamicEvmBaseFeeCall,
        EVM: EVMCall,
        Ethereum: EthereumCall,
        EthereumChecked: EthereumCheckedCall,
        Identity: IdentityCall,
        Inflation: InflationCall,
        Multisig: MultisigCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        StaticPriceProvider: StaticPriceProviderCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        UnifiedAccounts: UnifiedAccountsCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        XTokens: XTokensCall,
        XcAssetConfig: XcAssetConfigCall,
        XcmpQueue: XcmpQueueCall,
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
export const XcAssetConfigCall: sts.Type<XcAssetConfigCall> = sts.closedEnum(() => {
    return  {
        change_existing_asset_location: sts.enumStruct({
            newAssetLocation: VersionedMultiLocation,
            assetId: sts.bigint(),
        }),
        register_asset_location: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
            assetId: sts.bigint(),
        }),
        remove_asset: sts.enumStruct({
            assetId: sts.bigint(),
        }),
        remove_payment_asset: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
        }),
        set_asset_units_per_second: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
            unitsPerSecond: sts.bigint(),
        }),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: sts.bigint(),
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
            currencies: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: sts.bigint(),
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
        Council: Type_325,
        CumulusXcm: Type_322,
        Ethereum: Type_323,
        EthereumChecked: Type_324,
        PolkadotXcm: Type_321,
        TechnicalCommittee: Type_326,
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

export const Type_326: sts.Type<Type_326> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_321: sts.Type<Type_321> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Type_324: sts.Type<Type_324> = sts.closedEnum(() => {
    return  {
        XcmEthereumTx: AccountId32,
    }
})

export const Type_323: sts.Type<Type_323> = sts.closedEnum(() => {
    return  {
        EthereumTransaction: H160,
    }
})

export const H160 = sts.bytes()

export const Type_322: sts.Type<Type_322> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_325: sts.Type<Type_325> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UnifiedAccountsCall: sts.Type<UnifiedAccountsCall> = sts.closedEnum(() => {
    return  {
        claim_default_evm_address: sts.unit(),
        claim_evm_address: sts.enumStruct({
            evmAddress: H160,
            signature: sts.bytes(),
        }),
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
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StaticPriceProviderCall: sts.Type<StaticPriceProviderCall> = sts.closedEnum(() => {
    return  {
        force_set_price: sts.enumStruct({
            price: FixedU64,
        }),
    }
})

export const FixedU64 = sts.bigint()

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
        Assets: sts.unit(),
        Balances: sts.unit(),
        CancelProxy: sts.unit(),
        DappStaking: sts.unit(),
        Governance: sts.unit(),
        IdentityJudgement: sts.unit(),
        NonTransfer: sts.unit(),
        StakerRewardClaim: sts.unit(),
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
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_267,
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

export const Type_267: sts.Type<Type_267> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_270),
        V3: sts.array(() => Type_274),
    }
})

export const Type_274: sts.Type<Type_274> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_274),
        SetErrorHandler: sts.array(() => Type_274),
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
            call: Type_271,
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

export const Type_271: sts.Type<Type_271> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_270: sts.Type<Type_270> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_270),
        SetErrorHandler: sts.array(() => Type_270),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_271,
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
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
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
export const InflationCall: sts.Type<InflationCall> = sts.closedEnum(() => {
    return  {
        force_inflation_recalculation: sts.enumStruct({
            nextEra: sts.number(),
        }),
        force_set_inflation_params: sts.enumStruct({
            params: InflationParameters,
        }),
    }
})

export const InflationParameters: sts.Type<InflationParameters> = sts.struct(() => {
    return  {
        maxInflationRate: sts.bigint(),
        treasuryPart: sts.bigint(),
        collatorsPart: sts.bigint(),
        dappsPart: sts.bigint(),
        baseStakersPart: sts.bigint(),
        adjustableStakersPart: sts.bigint(),
        bonusPart: sts.bigint(),
        idealStakingRate: sts.bigint(),
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
export const EthereumCheckedCall: sts.Type<EthereumCheckedCall> = sts.closedEnum(() => {
    return  {
        transact: sts.enumStruct({
            tx: CheckedEthereumTx,
        }),
    }
})

export const CheckedEthereumTx: sts.Type<CheckedEthereumTx> = sts.struct(() => {
    return  {
        gasLimit: sts.bigint(),
        target: H160,
        value: sts.bigint(),
        input: sts.bytes(),
        maybeAccessList: sts.option(() => sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)]))),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EthereumCall: sts.Type<EthereumCall> = sts.closedEnum(() => {
    return  {
        transact: sts.enumStruct({
            transaction: TransactionV2,
        }),
    }
})

export const TransactionV2: sts.Type<TransactionV2> = sts.closedEnum(() => {
    return  {
        EIP1559: EIP1559Transaction,
        EIP2930: EIP2930Transaction,
        Legacy: LegacyTransaction,
    }
})

export const LegacyTransaction: sts.Type<LegacyTransaction> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        signature: TransactionSignature,
    }
})

export const TransactionSignature: sts.Type<TransactionSignature> = sts.struct(() => {
    return  {
        v: TransactionRecoveryId,
        r: H256,
        s: H256,
    }
})

export const TransactionRecoveryId = sts.bigint()

export const TransactionAction: sts.Type<TransactionAction> = sts.closedEnum(() => {
    return  {
        Call: H160,
        Create: sts.unit(),
    }
})

export const EIP2930Transaction: sts.Type<EIP2930Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

export const AccessListItem: sts.Type<AccessListItem> = sts.struct(() => {
    return  {
        address: H160,
        storageKeys: sts.array(() => H256),
    }
})

export const EIP1559Transaction: sts.Type<EIP1559Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        maxPriorityFeePerGas: sts.bigint(),
        maxFeePerGas: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EVMCall: sts.Type<EVMCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            source: H160,
            target: H160,
            input: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        create: sts.enumStruct({
            source: H160,
            init: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        create2: sts.enumStruct({
            source: H160,
            init: sts.bytes(),
            salt: H256,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        withdraw: sts.enumStruct({
            address: H160,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DynamicEvmBaseFeeCall: sts.Type<DynamicEvmBaseFeeCall> = sts.closedEnum(() => {
    return  {
        set_base_fee_per_gas: sts.enumStruct({
            fee: sts.bigint(),
        }),
    }
})

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
export const DappStakingMigrationCall: sts.Type<DappStakingMigrationCall> = sts.closedEnum(() => {
    return  {
        migrate: sts.enumStruct({
            weightLimit: sts.option(() => Weight),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DappStakingCall: sts.Type<DappStakingCall> = sts.closedEnum(() => {
    return  {
        claim_bonus_reward: sts.enumStruct({
            smartContract: SmartContract,
        }),
        claim_dapp_reward: sts.enumStruct({
            smartContract: SmartContract,
            era: sts.number(),
        }),
        claim_staker_rewards: sts.unit(),
        claim_unlocked: sts.unit(),
        cleanup_expired_entries: sts.unit(),
        force: sts.enumStruct({
            forcingType: ForcingType,
        }),
        lock: sts.enumStruct({
            amount: sts.bigint(),
        }),
        maintenance_mode: sts.enumStruct({
            enabled: sts.boolean(),
        }),
        register: sts.enumStruct({
            owner: AccountId32,
            smartContract: SmartContract,
        }),
        relock_unlocking: sts.unit(),
        set_dapp_owner: sts.enumStruct({
            smartContract: SmartContract,
            newOwner: AccountId32,
        }),
        set_dapp_reward_beneficiary: sts.enumStruct({
            smartContract: SmartContract,
            beneficiary: sts.option(() => AccountId32),
        }),
        stake: sts.enumStruct({
            smartContract: SmartContract,
            amount: sts.bigint(),
        }),
        unbond_and_unstake: sts.enumStruct({
            contractId: SmartContract,
            value: sts.bigint(),
        }),
        unlock: sts.enumStruct({
            amount: sts.bigint(),
        }),
        unregister: sts.enumStruct({
            smartContract: SmartContract,
        }),
        unstake: sts.enumStruct({
            smartContract: SmartContract,
            amount: sts.bigint(),
        }),
        unstake_from_unregistered: sts.enumStruct({
            smartContract: SmartContract,
        }),
        withdraw_unbonded: sts.unit(),
    }
})

export const ForcingType: sts.Type<ForcingType> = sts.closedEnum(() => {
    return  {
        Era: sts.unit(),
        Subperiod: sts.unit(),
    }
})

export const SmartContract: sts.Type<SmartContract> = sts.closedEnum(() => {
    return  {
        Evm: H160,
        Wasm: AccountId32,
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
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
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
export const AssetsCall: sts.Type<AssetsCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
            amount: sts.bigint(),
        }),
        block: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        burn: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        cancel_approval: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
        }),
        clear_metadata: sts.enumStruct({
            id: sts.bigint(),
        }),
        create: sts.enumStruct({
            id: sts.bigint(),
            admin: MultiAddress,
            minBalance: sts.bigint(),
        }),
        destroy_accounts: sts.enumStruct({
            id: sts.bigint(),
        }),
        destroy_approvals: sts.enumStruct({
            id: sts.bigint(),
        }),
        finish_destroy: sts.enumStruct({
            id: sts.bigint(),
        }),
        force_asset_status: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
            minBalance: sts.bigint(),
            isSufficient: sts.boolean(),
            isFrozen: sts.boolean(),
        }),
        force_cancel_approval: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            delegate: MultiAddress,
        }),
        force_clear_metadata: sts.enumStruct({
            id: sts.bigint(),
        }),
        force_create: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            isSufficient: sts.boolean(),
            minBalance: sts.bigint(),
        }),
        force_set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
            isFrozen: sts.boolean(),
        }),
        force_transfer: sts.enumStruct({
            id: sts.bigint(),
            source: MultiAddress,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        freeze_asset: sts.enumStruct({
            id: sts.bigint(),
        }),
        mint: sts.enumStruct({
            id: sts.bigint(),
            beneficiary: MultiAddress,
            amount: sts.bigint(),
        }),
        refund: sts.enumStruct({
            id: sts.bigint(),
            allowBurn: sts.boolean(),
        }),
        refund_other: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        }),
        set_min_balance: sts.enumStruct({
            id: sts.bigint(),
            minBalance: sts.bigint(),
        }),
        set_team: sts.enumStruct({
            id: sts.bigint(),
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
        }),
        start_destroy: sts.enumStruct({
            id: sts.bigint(),
        }),
        thaw: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        thaw_asset: sts.enumStruct({
            id: sts.bigint(),
        }),
        touch: sts.enumStruct({
            id: sts.bigint(),
        }),
        touch_other: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        transfer: sts.enumStruct({
            id: sts.bigint(),
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_approved: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            id: sts.bigint(),
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_ownership: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
        }),
    }
})

export const H256 = sts.bytes()
