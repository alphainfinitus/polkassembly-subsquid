import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AdvisoryCommittee | Call_AdvisoryCommitteeMembership | Call_AssetManager | Call_AssetRegistry | Call_AuthorFilter | Call_AuthorInherent | Call_AuthorMapping | Call_Authorized | Call_Balances | Call_Bounties | Call_CampaignAssets | Call_Contracts | Call_Council | Call_CouncilMembership | Call_Court | Call_CustomAssets | Call_Democracy | Call_DmpQueue | Call_GlobalDisputes | Call_HybridRouter | Call_Identity | Call_LiquidityMining | Call_MarketAssets | Call_Multisig | Call_NeoSwaps | Call_Orderbook | Call_ParachainStaking | Call_ParachainSystem | Call_Parimutuel | Call_PolkadotXcm | Call_PredictionMarkets | Call_Preimage | Call_Proxy | Call_Scheduler | Call_SimpleDisputes | Call_Styx | Call_Swaps | Call_System | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Timestamp | Call_Treasury | Call_Utility | Call_Vesting | Call_XTokens | Call_XcmpQueue

export interface Call_AdvisoryCommittee {
    __kind: 'AdvisoryCommittee'
    value: AdvisoryCommitteeCall
}

export interface Call_AdvisoryCommitteeMembership {
    __kind: 'AdvisoryCommitteeMembership'
    value: AdvisoryCommitteeMembershipCall
}

export interface Call_AssetManager {
    __kind: 'AssetManager'
    value: AssetManagerCall
}

export interface Call_AssetRegistry {
    __kind: 'AssetRegistry'
    value: AssetRegistryCall
}

export interface Call_AuthorFilter {
    __kind: 'AuthorFilter'
    value: AuthorFilterCall
}

export interface Call_AuthorInherent {
    __kind: 'AuthorInherent'
    value: AuthorInherentCall
}

export interface Call_AuthorMapping {
    __kind: 'AuthorMapping'
    value: AuthorMappingCall
}

export interface Call_Authorized {
    __kind: 'Authorized'
    value: AuthorizedCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_CampaignAssets {
    __kind: 'CampaignAssets'
    value: CampaignAssetsCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CouncilMembership {
    __kind: 'CouncilMembership'
    value: CouncilMembershipCall
}

export interface Call_Court {
    __kind: 'Court'
    value: CourtCall
}

export interface Call_CustomAssets {
    __kind: 'CustomAssets'
    value: CustomAssetsCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_GlobalDisputes {
    __kind: 'GlobalDisputes'
    value: GlobalDisputesCall
}

export interface Call_HybridRouter {
    __kind: 'HybridRouter'
    value: HybridRouterCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_LiquidityMining {
    __kind: 'LiquidityMining'
    value: LiquidityMiningCall
}

export interface Call_MarketAssets {
    __kind: 'MarketAssets'
    value: MarketAssetsCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_NeoSwaps {
    __kind: 'NeoSwaps'
    value: NeoSwapsCall
}

export interface Call_Orderbook {
    __kind: 'Orderbook'
    value: OrderbookCall
}

export interface Call_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Parimutuel {
    __kind: 'Parimutuel'
    value: ParimutuelCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_PredictionMarkets {
    __kind: 'PredictionMarkets'
    value: PredictionMarketsCall
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

export interface Call_SimpleDisputes {
    __kind: 'SimpleDisputes'
    value: SimpleDisputesCall
}

export interface Call_Styx {
    __kind: 'Styx'
    value: StyxCall
}

export interface Call_Swaps {
    __kind: 'Swaps'
    value: SwapsCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalCommitteeMembership {
    __kind: 'TechnicalCommitteeMembership'
    value: TechnicalCommitteeMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
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

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: Weight
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: Weight
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * Transfer native currencies.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: XcmAssetClass
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [XcmAssetClass, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: XcmAssetClass
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

export type XcmAssetClass = XcmAssetClass_ForeignAsset | XcmAssetClass_Ztg

export interface XcmAssetClass_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface XcmAssetClass_Ztg {
    __kind: 'Ztg'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 4 Reads, 4 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 * # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
 * the highest possible start and end blocks. If both schedules have already started the
 * current block will be used as the schedule start; with the caveat that if one schedule
 * is finished by the current block, the other will be treated as the new merged schedule,
 * unmodified.
 * 
 * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
 * NOTE: This will unlock all schedules through the current block prior to merging.
 * NOTE: If both schedules have ended by the current block, no new schedule will be created
 * and both will be removed.
 * 
 * Merged schedule attributes:
 * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
 *   current_block)`.
 * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
 * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `schedule1_index`: index of the first schedule to merge.
 * - `schedule2_index`: index of the second schedule to merge.
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 2 Reads, 2 Writes
 *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account
 * # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account receiving the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: bigint
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type OriginCaller = OriginCaller_AdvisoryCommittee | OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_AdvisoryCommittee {
    __kind: 'AdvisoryCommittee'
    value: Type_315
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_316
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_319
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_317
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

export type Type_317 = Type_317_Member | Type_317_Members | Type_317__Phantom

export interface Type_317_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_317_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_317__Phantom {
    __kind: '_Phantom'
}

export type Type_319 = Type_319_Response | Type_319_Xcm

export interface Type_319_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_319_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Origin = Origin_Relay | Origin_SiblingParachain

export interface Origin_Relay {
    __kind: 'Relay'
}

export interface Origin_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_316 = Type_316_Member | Type_316_Members | Type_316__Phantom

export interface Type_316_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_316_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_316__Phantom {
    __kind: '_Phantom'
}

export type Type_315 = Type_315_Member | Type_315_Members | Type_315__Phantom

export interface Type_315_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_315_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_315__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * The original deposit will no longer be returned.
 * 
 * May only be called from `T::RejectOrigin`.
 * - `proposal_id`: The index of a proposal
 * 
 * # <weight>
 * - Complexity: O(A) where `A` is the number of approvals
 * - Db reads and writes: `Approvals`
 * # </weight>
 * 
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_clear_prime | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SwapsCall = SwapsCall_force_pool_exit | SwapsCall_pool_exit | SwapsCall_pool_exit_with_exact_asset_amount | SwapsCall_pool_exit_with_exact_pool_amount | SwapsCall_pool_join | SwapsCall_pool_join_with_exact_asset_amount | SwapsCall_pool_join_with_exact_pool_amount | SwapsCall_swap_exact_amount_in | SwapsCall_swap_exact_amount_out

/**
 * Forcibly withdraw an LPs share. All parameters as in `exit`, except that `who` is the LP
 * whose shares are withdrawn.
 * 
 * Used in the migration from swaps to neo-swaps. Deprecated and scheduled for removal in
 * v0.5.3.
 */
export interface SwapsCall_force_pool_exit {
    __kind: 'force_pool_exit'
    who: AccountId32
    poolId: bigint
    poolAmount: bigint
    minAssetsOut: bigint[]
}

/**
 * Exchanges an LP's (liquidity provider's) pool shares for a proportionate amount of each
 * of the pool's assets. The assets received are distributed according to the LP's
 * percentage ownership of the pool.
 * 
 * # Arguments
 * 
 * * `pool_id`: The ID of the pool to withdraw from.
 * * `pool_amount`: The amount of pool shares to burn.
 * * `min_assets_out`: List of lower bounds on the assets received. The transaction is
 *   rolled back if any of the specified lower bounds are violated.
 * 
 * # Weight
 * 
 * Complexity: `O(n)` where `n` is the number of assets in the specified pool.
 */
export interface SwapsCall_pool_exit {
    __kind: 'pool_exit'
    poolId: bigint
    poolAmount: bigint
    minAssetsOut: bigint[]
}

/**
 * See [`zeitgeist_primitives::traits::Swaps::pool_exit_with_exact_asset_amount`].
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface SwapsCall_pool_exit_with_exact_asset_amount {
    __kind: 'pool_exit_with_exact_asset_amount'
    poolId: bigint
    assetOut: Asset
    assetAmount: bigint
    maxPoolAmount: bigint
}

/**
 * Exchanges an exact amount of an LP's (liquidity provider's) pool shares for a
 * proportionate amount of _one_ of the pool's assets. The assets received are distributed
 * according to the LP's percentage ownership of the pool.
 * 
 * # Arguments
 * 
 * * `pool_id`: The ID of the pool to withdraw from.
 * * `asset`: The asset received by the LP.
 * * `asset_amount`: The amount of `asset` leaving the pool.
 * * `pool_amount`: Pool amount that is entering the pool.
 * * `min_asset_amount`: The minimum amount the LP asks to receive. The transaction is
 *   rolled back if this bound is violated.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface SwapsCall_pool_exit_with_exact_pool_amount {
    __kind: 'pool_exit_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    minAssetAmount: bigint
}

/**
 * Exchanges a proportional amount of each asset of the pool for pool shares.
 * 
 * # Arguments
 * 
 * * `pool_id`: The ID of the pool to join.
 * * `pool_amount`: The amount of LP shares for this pool that should be minted to the
 *   provider.
 * * `max_assets_in`: List of upper bounds on the assets to move to the pool. The
 *   transaction is rolled back if any of the specified lower bounds are violated.
 * 
 * # Weight
 * 
 * Complexity: `O(n)` where `n` is the number of assets in the specified pool
 */
export interface SwapsCall_pool_join {
    __kind: 'pool_join'
    poolId: bigint
    poolAmount: bigint
    maxAssetsIn: bigint[]
}

/**
 * See [`zeitgeist_primitives::traits::Swaps::pool_join_with_exact_asset_amount`].
 * 
 * # Weight
 * 
 * Complexity: O(1)
 */
export interface SwapsCall_pool_join_with_exact_asset_amount {
    __kind: 'pool_join_with_exact_asset_amount'
    poolId: bigint
    assetIn: Asset
    assetAmount: bigint
    minPoolAmount: bigint
}

/**
 * Exchanges an LP's (liquidity provider's) holdings of _one_ of the assets in the pool for
 * an exact amount of pool shares.
 * 
 * # Arguments
 * 
 * * `pool_id`: The ID of the pool to withdraw from.
 * * `asset`: The asset entering the pool.
 * * `pool_amount`: Asset amount that is entering the pool.
 * * `max_asset_amount`: The maximum amount of `asset` that the LP is willing to pay. The
 *   transaction is rolled back if this bound is violated.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface SwapsCall_pool_join_with_exact_pool_amount {
    __kind: 'pool_join_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    maxAssetAmount: bigint
}

/**
 * See [`zeitgeist_primitives::traits::Swaps::swap_exact_amount_in`].
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface SwapsCall_swap_exact_amount_in {
    __kind: 'swap_exact_amount_in'
    poolId: bigint
    assetIn: Asset
    assetAmountIn: bigint
    assetOut: Asset
    minAssetAmountOut?: (bigint | undefined)
    maxPrice?: (bigint | undefined)
}

/**
 * See [`zeitgeist_primitives::traits::Swaps::swap_exact_amount_out`].
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface SwapsCall_swap_exact_amount_out {
    __kind: 'swap_exact_amount_out'
    poolId: bigint
    assetIn: Asset
    maxAssetAmountIn?: (bigint | undefined)
    assetOut: Asset
    assetAmountOut: bigint
    maxPrice?: (bigint | undefined)
}

export type Asset = Asset_CampaignAsset | Asset_CategoricalOutcome | Asset_CustomAsset | Asset_ForeignAsset | Asset_ParimutuelShare | Asset_PoolShare | Asset_ScalarOutcome | Asset_Ztg

export interface Asset_CampaignAsset {
    __kind: 'CampaignAsset'
    value: bigint
}

export interface Asset_CategoricalOutcome {
    __kind: 'CategoricalOutcome'
    value: [bigint, number]
}

export interface Asset_CustomAsset {
    __kind: 'CustomAsset'
    value: bigint
}

export interface Asset_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface Asset_ParimutuelShare {
    __kind: 'ParimutuelShare'
    value: [bigint, number]
}

export interface Asset_PoolShare {
    __kind: 'PoolShare'
    value: bigint
}

export interface Asset_ScalarOutcome {
    __kind: 'ScalarOutcome'
    value: [bigint, ScalarPosition]
}

export interface Asset_Ztg {
    __kind: 'Ztg'
}

export type ScalarPosition = ScalarPosition_Long | ScalarPosition_Short

export interface ScalarPosition_Long {
    __kind: 'Long'
}

export interface ScalarPosition_Short {
    __kind: 'Short'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StyxCall = StyxCall_cross | StyxCall_set_burn_amount

/**
 * Burns ZTG(styx.burnAmount()) to cross, granting the ability to claim your zeitgeist avatar.
 * The signer can only cross once.
 */
export interface StyxCall_cross {
    __kind: 'cross'
}

/**
 * Set the burn amount. Ensures the SetBurnAmountOrigin in the runtime.
 * Intended to be called by a governing body like the council.
 * 
 * # Arguments
 * 
 * * `amount`: The amount of the new burn price
 */
export interface StyxCall_set_burn_amount {
    __kind: 'set_burn_amount'
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SimpleDisputesCall = SimpleDisputesCall_suggest_outcome

export interface SimpleDisputesCall_suggest_outcome {
    __kind: 'suggest_outcome'
    marketId: bigint
    outcome: OutcomeReport
}

export type OutcomeReport = OutcomeReport_Categorical | OutcomeReport_Scalar

export interface OutcomeReport_Categorical {
    __kind: 'Categorical'
    value: number
}

export interface OutcomeReport_Scalar {
    __kind: 'Scalar'
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: bigint
    index: number
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: bigint
    maybePeriodic?: ([bigint, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: bigint
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: bigint
    index: number
}

/**
 * Removes a previously spawned pure proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `pure` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `pure` to create this account.
 * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `pure`.
 * - `height`: The height of the chain when the call to `pure` was processed.
 * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created pure
 * account whose `pure` call has corresponding parameters.
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: bigint
    extIndex: number
}

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `pure`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: bigint
}

export type ProxyType = ProxyType_Any | ProxyType_BuySellCompleteSets | ProxyType_CancelProxy | ProxyType_CreateEditMarket | ProxyType_Dispute | ProxyType_Governance | ProxyType_HandleAssets | ProxyType_ProvideLiquidity | ProxyType_ReportOutcome | ProxyType_Staking | ProxyType_Trading

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_BuySellCompleteSets {
    __kind: 'BuySellCompleteSets'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_CreateEditMarket {
    __kind: 'CreateEditMarket'
}

export interface ProxyType_Dispute {
    __kind: 'Dispute'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_HandleAssets {
    __kind: 'HandleAssets'
}

export interface ProxyType_ProvideLiquidity {
    __kind: 'ProvideLiquidity'
}

export interface ProxyType_ReportOutcome {
    __kind: 'ReportOutcome'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export interface ProxyType_Trading {
    __kind: 'Trading'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * Clear an unrequested preimage from the runtime storage.
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PredictionMarketsCall = PredictionMarketsCall_admin_move_market_to_closed | PredictionMarketsCall_admin_move_market_to_resolved | PredictionMarketsCall_approve_market | PredictionMarketsCall_buy_complete_set | PredictionMarketsCall_close_trusted_market | PredictionMarketsCall_create_market | PredictionMarketsCall_create_market_and_deploy_pool | PredictionMarketsCall_dispute | PredictionMarketsCall_dispute_early_close | PredictionMarketsCall_edit_market | PredictionMarketsCall_manually_close_market | PredictionMarketsCall_redeem_shares | PredictionMarketsCall_reject_early_close | PredictionMarketsCall_reject_market | PredictionMarketsCall_report | PredictionMarketsCall_request_edit | PredictionMarketsCall_schedule_early_close | PredictionMarketsCall_sell_complete_set | PredictionMarketsCall_start_global_dispute

/**
 * Allows the `CloseOrigin` to immediately move an open market to closed.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`, where `n` is the number of market ids,
 * which open at the same time as the specified market,
 * and `m` is the number of market ids,
 * which close at the same time as the specified market.
 */
export interface PredictionMarketsCall_admin_move_market_to_closed {
    __kind: 'admin_move_market_to_closed'
    marketId: bigint
}

/**
 * Allows the `ResolveOrigin` to immediately move a reported or disputed
 * market to resolved.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`, where `n` is the number of market ids
 * per dispute / report block, m is the number of disputes.
 */
export interface PredictionMarketsCall_admin_move_market_to_resolved {
    __kind: 'admin_move_market_to_resolved'
    marketId: bigint
}

/**
 * Approves a market that is waiting for approval from the
 * advisory committee.
 * 
 * NOTE: Returns the proposer's bond since the market has been
 * deemed valid by an advisory committee.
 * 
 * NOTE: Can only be called by the `ApproveOrigin`.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface PredictionMarketsCall_approve_market {
    __kind: 'approve_market'
    marketId: bigint
}

/**
 * Buy a complete set of outcome shares of a market.
 * 
 * The cost of a full set is exactly one unit of the market's base asset. For example,
 * when calling `buy_complete_set(origin, 1, 2)` on a categorical market with five
 * different outcomes, the caller pays `2` of the base asset and receives `2` of each of
 * the five outcome tokens.
 * 
 * NOTE: This is the only way to create new shares of outcome tokens.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of outcome assets in the market.
 */
export interface PredictionMarketsCall_buy_complete_set {
    __kind: 'buy_complete_set'
    marketId: bigint
    amount: bigint
}

/**
 * Allows the market creator of a trusted market
 * to immediately move an open market to closed.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`, where `n` is the number of market ids,
 * which open at the same time as the specified market,
 * and `m` is the number of market ids,
 * which close at the same time as the specified market.
 */
export interface PredictionMarketsCall_close_trusted_market {
    __kind: 'close_trusted_market'
    marketId: bigint
}

/**
 * Creates a market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of market ids,
 * which close at the same time as the specified market.
 */
export interface PredictionMarketsCall_create_market {
    __kind: 'create_market'
    baseAsset: BaseAssetClass
    creatorFee: Perbill
    oracle: AccountId32
    period: MarketPeriod
    deadlines: Deadlines
    metadata: MultiHash
    creation: MarketCreation
    marketType: MarketType
    disputeMechanism?: (MarketDisputeMechanism | undefined)
    scoringRule: ScoringRule
}

/**
 * Create a market, deploy a LMSR pool, and buy outcome tokens and provide liquidity to the
 * market.
 * 
 * # Weight
 * 
 * `O(n)` where `n` is the number of markets which close on the same block, plus the
 * resources consumed by `DeployPool::create_pool`. In the standard implementation using
 * neo-swaps, this is `O(m)` where `m` is the number of assets in the market.
 */
export interface PredictionMarketsCall_create_market_and_deploy_pool {
    __kind: 'create_market_and_deploy_pool'
    baseAsset: BaseAssetClass
    creatorFee: Perbill
    oracle: AccountId32
    period: MarketPeriod
    deadlines: Deadlines
    metadata: MultiHash
    marketType: MarketType
    disputeMechanism?: (MarketDisputeMechanism | undefined)
    amount: bigint
    spotPrices: bigint[]
    swapFee: bigint
}

/**
 * Dispute on a market that has been reported or already disputed.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of outstanding disputes.
 */
export interface PredictionMarketsCall_dispute {
    __kind: 'dispute'
    marketId: bigint
}

/**
 * Allows anyone to dispute a scheduled early close.
 * 
 * The market period is reset to the original (old) period.
 * A `CloseEarlyDisputeBond` is reserved, which is returned,
 * if the `CloseMarketsEarlyOrigin` decides to reject
 * the early close request of the market creator or
 * if the `CloseMarketsEarlyOrigin` is inactive.
 * It is slashed, if the `CloseMarketsEarlyOrigin` decides to schedule the early close.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the maximum number of market ids
 * in `MarketIdsPerClose...` either at the old period end or new period end.
 */
export interface PredictionMarketsCall_dispute_early_close {
    __kind: 'dispute_early_close'
    marketId: bigint
}

/**
 * Edit a proposed market for which request is made.
 * 
 * Edit can only be made by the creator of the market.
 * 
 * # Arguments
 * 
 * * `market_id`: The id of the market to edit.
 * * `oracle`: Oracle to edit market.
 * * `period`: MarketPeriod to edit market.
 * * `deadlines`: Deadlines to edit market.
 * * `metadata`: MultiHash metadata to edit market.
 * * `market_type`: MarketType to edit market.
 * * `dispute_mechanism`: MarketDisputeMechanism to edit market.
 * * `scoring_rule`: ScoringRule to edit market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of markets
 * which end at the same time as the market before the edit.
 */
export interface PredictionMarketsCall_edit_market {
    __kind: 'edit_market'
    baseAsset: BaseAssetClass
    marketId: bigint
    oracle: AccountId32
    period: MarketPeriod
    deadlines: Deadlines
    metadata: MultiHash
    marketType: MarketType
    disputeMechanism?: (MarketDisputeMechanism | undefined)
    scoringRule: ScoringRule
}

/**
 * Allows the manual closing for "broken" markets.
 * A market is "broken", if an unexpected chain stall happened
 * and the auto close was scheduled during this time.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`,
 * and `n` is the number of market ids,
 * which close at the same time as the specified market.
 */
export interface PredictionMarketsCall_manually_close_market {
    __kind: 'manually_close_market'
    marketId: bigint
}

/**
 * Redeems the winning shares of a prediction market.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface PredictionMarketsCall_redeem_shares {
    __kind: 'redeem_shares'
    marketId: bigint
}

/**
 * Allows the `CloseMarketsEarlyOrigin` to reject a scheduled early close.
 * 
 * The market period is reset to the original (old) period
 * in case it was scheduled before (fat-finger protection).
 * 
 * The disputant gets back the `CloseEarlyDisputeBond`
 * and receives the market creators `CloseEarlyRequestBond`.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the maximum number of market ids
 * in `MarketIdsPerClose...` either at the old period end or new period end.
 */
export interface PredictionMarketsCall_reject_early_close {
    __kind: 'reject_early_close'
    marketId: bigint
}

/**
 * Rejects a market that is waiting for approval from the advisory committee.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`,
 * where `n` is the number of market ids,
 * which open at the same time as the specified market,
 * and `m` is the number of market ids,
 * which close at the same time as the specified market.
 */
export interface PredictionMarketsCall_reject_market {
    __kind: 'reject_market'
    marketId: bigint
    rejectReason: Bytes
}

/**
 * Reports the outcome of a market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of market ids,
 * which reported at the same time as the specified market.
 */
export interface PredictionMarketsCall_report {
    __kind: 'report'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * Request an edit to a proposed market.
 * 
 * Can only be called by the `RequestEditOrigin`.
 * 
 * # Arguments
 * 
 * * `market_id`: The id of the market to edit.
 * * `edit_reason`: An short record of what needs to be changed.
 * 
 * # Weight
 * 
 * Complexity: `O(edit_reason.len())`
 */
export interface PredictionMarketsCall_request_edit {
    __kind: 'request_edit'
    marketId: bigint
    editReason: Bytes
}

/**
 * Allows the `CloseMarketsEarlyOrigin` or the market creator to schedule an early close.
 * 
 * The market creator schedules it `now + EarlyClose...Period` in the future.
 * This is to allow enough time for a potential dispute.
 * The market creator reserves a `CloseEarlyDisputeBond`, which is returned,
 * if the `CloseMarketsEarlyOrigin` decides to accept the early close request
 * or if it is not disputed.
 * It is slashed, if the early close request is disputed
 * and the `CloseMarketsEarlyOrigin` decides to reject the early close.
 * The `CloseMarketsEarlyOrigin` (or root) can schedule it `now + CloseProtection...Period`
 * in the future. This is to prevent fat finger mistakes.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the maximum number of market ids
 * in `MarketIdsPerClose...` either at the old period end or new period end.
 */
export interface PredictionMarketsCall_schedule_early_close {
    __kind: 'schedule_early_close'
    marketId: bigint
}

/**
 * Sells a complete set of outcomes shares for a market.
 * 
 * Each complete set is sold for one unit of the market's base asset.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of assets for a categorical market.
 */
export interface PredictionMarketsCall_sell_complete_set {
    __kind: 'sell_complete_set'
    marketId: bigint
    amount: bigint
}

/**
 * Start a global dispute, if the market dispute mechanism fails.
 * 
 * # Arguments
 * 
 * * `market_id`: The identifier of the market.
 * 
 * NOTE:
 * The returned outcomes of the market dispute mechanism and the report outcome
 * are added to the global dispute voting outcomes.
 * The bond of each dispute is the initial vote amount.
 */
export interface PredictionMarketsCall_start_global_dispute {
    __kind: 'start_global_dispute'
    marketId: bigint
}

export type ScoringRule = ScoringRule_AmmCdaHybrid | ScoringRule_Parimutuel

export interface ScoringRule_AmmCdaHybrid {
    __kind: 'AmmCdaHybrid'
}

export interface ScoringRule_Parimutuel {
    __kind: 'Parimutuel'
}

export type MarketDisputeMechanism = MarketDisputeMechanism_Authorized | MarketDisputeMechanism_Court | MarketDisputeMechanism_SimpleDisputes

export interface MarketDisputeMechanism_Authorized {
    __kind: 'Authorized'
}

export interface MarketDisputeMechanism_Court {
    __kind: 'Court'
}

export interface MarketDisputeMechanism_SimpleDisputes {
    __kind: 'SimpleDisputes'
}

export type MarketType = MarketType_Categorical | MarketType_Scalar

export interface MarketType_Categorical {
    __kind: 'Categorical'
    value: number
}

export interface MarketType_Scalar {
    __kind: 'Scalar'
    value: RangeInclusive
}

export interface RangeInclusive {
    start: bigint
    end: bigint
}

export type MarketCreation = MarketCreation_Advised | MarketCreation_Permissionless

export interface MarketCreation_Advised {
    __kind: 'Advised'
}

export interface MarketCreation_Permissionless {
    __kind: 'Permissionless'
}

export type MultiHash = MultiHash_Sha3_384

export interface MultiHash_Sha3_384 {
    __kind: 'Sha3_384'
    value: Bytes
}

export interface Deadlines {
    gracePeriod: bigint
    oracleDuration: bigint
    disputeDuration: bigint
}

export type MarketPeriod = MarketPeriod_Block | MarketPeriod_Timestamp

export interface MarketPeriod_Block {
    __kind: 'Block'
    value: Range
}

export interface MarketPeriod_Timestamp {
    __kind: 'Timestamp'
    value: Range
}

export interface Range {
    start: bigint
    end: bigint
}

export type Perbill = number

export type BaseAssetClass = BaseAssetClass_CampaignAsset | BaseAssetClass_ForeignAsset | BaseAssetClass_Ztg

export interface BaseAssetClass_CampaignAsset {
    __kind: 'CampaignAsset'
    value: bigint
}

export interface BaseAssetClass_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface BaseAssetClass_Ztg {
    __kind: 'Ztg'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_378
    maxWeight: Weight
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    xcmVersion: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
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
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
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
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
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
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

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

export type Type_378 = Type_378_V2 | Type_378_V3

export interface Type_378_V2 {
    __kind: 'V2'
    value: Type_381[]
}

export interface Type_378_V3 {
    __kind: 'V3'
    value: Type_385[]
}

export type Type_385 = Type_385_AliasOrigin | Type_385_BurnAsset | Type_385_BuyExecution | Type_385_ClaimAsset | Type_385_ClearError | Type_385_ClearOrigin | Type_385_ClearTopic | Type_385_ClearTransactStatus | Type_385_DepositAsset | Type_385_DepositReserveAsset | Type_385_DescendOrigin | Type_385_ExchangeAsset | Type_385_ExpectAsset | Type_385_ExpectError | Type_385_ExpectOrigin | Type_385_ExpectPallet | Type_385_ExpectTransactStatus | Type_385_ExportMessage | Type_385_HrmpChannelAccepted | Type_385_HrmpChannelClosing | Type_385_HrmpNewChannelOpenRequest | Type_385_InitiateReserveWithdraw | Type_385_InitiateTeleport | Type_385_LockAsset | Type_385_NoteUnlockable | Type_385_QueryPallet | Type_385_QueryResponse | Type_385_ReceiveTeleportedAsset | Type_385_RefundSurplus | Type_385_ReportError | Type_385_ReportHolding | Type_385_ReportTransactStatus | Type_385_RequestUnlock | Type_385_ReserveAssetDeposited | Type_385_SetAppendix | Type_385_SetErrorHandler | Type_385_SetFeesMode | Type_385_SetTopic | Type_385_SubscribeVersion | Type_385_Transact | Type_385_TransferAsset | Type_385_TransferReserveAsset | Type_385_Trap | Type_385_UniversalOrigin | Type_385_UnlockAsset | Type_385_UnpaidExecution | Type_385_UnsubscribeVersion | Type_385_WithdrawAsset

export interface Type_385_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_385_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_385_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_385_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_385_ClearError {
    __kind: 'ClearError'
}

export interface Type_385_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_385_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_385_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_385_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_385_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_385_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_385_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_385_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_385_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_385_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_385_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_385_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_385_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_385_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_385_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_385_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_385_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_385_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_385_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_385_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_385_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_385_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_385_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_385_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_385_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_385_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_385_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_385_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_385_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_385_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_385[]
}

export interface Type_385_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_385[]
}

export interface Type_385_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_385_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_385_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_385_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_382
}

export interface Type_385_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_385_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_385_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_385_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_385_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_385_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_385_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_385_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_382 {
    encoded: Bytes
}

export type Type_381 = Type_381_BuyExecution | Type_381_ClaimAsset | Type_381_ClearError | Type_381_ClearOrigin | Type_381_DepositAsset | Type_381_DepositReserveAsset | Type_381_DescendOrigin | Type_381_ExchangeAsset | Type_381_HrmpChannelAccepted | Type_381_HrmpChannelClosing | Type_381_HrmpNewChannelOpenRequest | Type_381_InitiateReserveWithdraw | Type_381_InitiateTeleport | Type_381_QueryHolding | Type_381_QueryResponse | Type_381_ReceiveTeleportedAsset | Type_381_RefundSurplus | Type_381_ReportError | Type_381_ReserveAssetDeposited | Type_381_SetAppendix | Type_381_SetErrorHandler | Type_381_SubscribeVersion | Type_381_Transact | Type_381_TransferAsset | Type_381_TransferReserveAsset | Type_381_Trap | Type_381_UnsubscribeVersion | Type_381_WithdrawAsset

export interface Type_381_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_381_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_381_ClearError {
    __kind: 'ClearError'
}

export interface Type_381_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_381_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_381_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_381_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_381_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_381_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_381_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_381_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_381_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_381_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_381_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_381_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_381_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_381_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_381_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_381_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_381_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_381[]
}

export interface Type_381_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_381[]
}

export interface Type_381_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_381_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_382
}

export interface Type_381_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_381_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_381_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_381_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_381_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParimutuelCall = ParimutuelCall_buy | ParimutuelCall_claim_refunds | ParimutuelCall_claim_rewards

/**
 * Buy parimutuel shares for the market's base asset.
 * 
 * # Arguments
 * 
 * - `asset`: The outcome asset to buy the shares of.
 * - `amount`: The amount of base asset to spend
 * and of parimutuel shares to receive.
 * Keep in mind that there are external fees taken from this amount.
 * 
 * Complexity: `O(1)`
 */
export interface ParimutuelCall_buy {
    __kind: 'buy'
    asset: ParimutuelAssetClass
    amount: bigint
}

/**
 * Refund the base asset of losing categorical outcome assets
 * in case that there was no account betting on the winner outcome.
 * 
 * # Arguments
 * 
 * - `refund_asset`: The outcome asset to refund.
 * 
 * Complexity: `O(1)`
 */
export interface ParimutuelCall_claim_refunds {
    __kind: 'claim_refunds'
    refundAsset: ParimutuelAssetClass
}

/**
 * Claim winnings from a resolved market.
 * 
 * Complexity: `O(1)`
 */
export interface ParimutuelCall_claim_rewards {
    __kind: 'claim_rewards'
    marketId: bigint
}

export type ParimutuelAssetClass = ParimutuelAssetClass_Share

export interface ParimutuelAssetClass_Share {
    __kind: 'Share'
    value: [bigint, number]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
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

export interface V2PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainStakingCall = ParachainStakingCall_cancel_candidate_bond_less | ParachainStakingCall_cancel_delegation_request | ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_cancel_leave_delegators | ParachainStakingCall_candidate_bond_more | ParachainStakingCall_delegate | ParachainStakingCall_delegate_with_auto_compound | ParachainStakingCall_delegator_bond_more | ParachainStakingCall_execute_candidate_bond_less | ParachainStakingCall_execute_delegation_request | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_execute_leave_delegators | ParachainStakingCall_go_offline | ParachainStakingCall_go_online | ParachainStakingCall_hotfix_remove_delegation_requests_exited_candidates | ParachainStakingCall_join_candidates | ParachainStakingCall_schedule_candidate_bond_less | ParachainStakingCall_schedule_delegator_bond_less | ParachainStakingCall_schedule_leave_candidates | ParachainStakingCall_schedule_leave_delegators | ParachainStakingCall_schedule_revoke_delegation | ParachainStakingCall_set_auto_compound | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_set_collator_commission | ParachainStakingCall_set_inflation | ParachainStakingCall_set_parachain_bond_account | ParachainStakingCall_set_parachain_bond_reserve_percent | ParachainStakingCall_set_staking_expectations | ParachainStakingCall_set_total_selected

/**
 * Cancel pending request to adjust the collator candidate self bond
 */
export interface ParachainStakingCall_cancel_candidate_bond_less {
    __kind: 'cancel_candidate_bond_less'
}

/**
 * Cancel request to change an existing delegation.
 */
export interface ParachainStakingCall_cancel_delegation_request {
    __kind: 'cancel_delegation_request'
    candidate: AccountId32
}

/**
 * Cancel open request to leave candidates
 * - only callable by collator account
 * - result upon successful call is the candidate is active in the candidate pool
 */
export interface ParachainStakingCall_cancel_leave_candidates {
    __kind: 'cancel_leave_candidates'
    candidateCount: number
}

/**
 * DEPRECATED use batch util with cancel_delegation_request for all delegations
 * Cancel a pending request to exit the set of delegators. Success clears the pending exit
 * request (thereby resetting the delay upon another `leave_delegators` call).
 */
export interface ParachainStakingCall_cancel_leave_delegators {
    __kind: 'cancel_leave_delegators'
}

/**
 * Increase collator candidate self bond by `more`
 */
export interface ParachainStakingCall_candidate_bond_more {
    __kind: 'candidate_bond_more'
    more: bigint
}

/**
 * If caller is not a delegator and not a collator, then join the set of delegators
 * If caller is a delegator, then makes delegation to change their delegation state
 */
export interface ParachainStakingCall_delegate {
    __kind: 'delegate'
    candidate: AccountId32
    amount: bigint
    candidateDelegationCount: number
    delegationCount: number
}

/**
 * If caller is not a delegator and not a collator, then join the set of delegators
 * If caller is a delegator, then makes delegation to change their delegation state
 * Sets the auto-compound config for the delegation
 */
export interface ParachainStakingCall_delegate_with_auto_compound {
    __kind: 'delegate_with_auto_compound'
    candidate: AccountId32
    amount: bigint
    autoCompound: Percent
    candidateDelegationCount: number
    candidateAutoCompoundingDelegationCount: number
    delegationCount: number
}

/**
 * Bond more for delegators wrt a specific collator candidate.
 */
export interface ParachainStakingCall_delegator_bond_more {
    __kind: 'delegator_bond_more'
    candidate: AccountId32
    more: bigint
}

/**
 * Execute pending request to adjust the collator candidate self bond
 */
export interface ParachainStakingCall_execute_candidate_bond_less {
    __kind: 'execute_candidate_bond_less'
    candidate: AccountId32
}

/**
 * Execute pending request to change an existing delegation
 */
export interface ParachainStakingCall_execute_delegation_request {
    __kind: 'execute_delegation_request'
    delegator: AccountId32
    candidate: AccountId32
}

/**
 * Execute leave candidates request
 */
export interface ParachainStakingCall_execute_leave_candidates {
    __kind: 'execute_leave_candidates'
    candidate: AccountId32
    candidateDelegationCount: number
}

/**
 * DEPRECATED use batch util with execute_delegation_request for all delegations
 * Execute the right to exit the set of delegators and revoke all ongoing delegations.
 */
export interface ParachainStakingCall_execute_leave_delegators {
    __kind: 'execute_leave_delegators'
    delegator: AccountId32
    delegationCount: number
}

/**
 * Temporarily leave the set of collator candidates without unbonding
 */
export interface ParachainStakingCall_go_offline {
    __kind: 'go_offline'
}

/**
 * Rejoin the set of collator candidates if previously had called `go_offline`
 */
export interface ParachainStakingCall_go_online {
    __kind: 'go_online'
}

/**
 * Hotfix to remove existing empty entries for candidates that have left.
 */
export interface ParachainStakingCall_hotfix_remove_delegation_requests_exited_candidates {
    __kind: 'hotfix_remove_delegation_requests_exited_candidates'
    candidates: AccountId32[]
}

/**
 * Join the set of collator candidates
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    bond: bigint
    candidateCount: number
}

/**
 * Request by collator candidate to decrease self bond by `less`
 */
export interface ParachainStakingCall_schedule_candidate_bond_less {
    __kind: 'schedule_candidate_bond_less'
    less: bigint
}

/**
 * Request bond less for delegators wrt a specific collator candidate. The delegation's
 * rewards for rounds while the request is pending use the reduced bonded amount.
 * A bond less may not be performed if any other scheduled request is pending.
 */
export interface ParachainStakingCall_schedule_delegator_bond_less {
    __kind: 'schedule_delegator_bond_less'
    candidate: AccountId32
    less: bigint
}

/**
 * Request to leave the set of candidates. If successful, the account is immediately
 * removed from the candidate pool to prevent selection as a collator.
 */
export interface ParachainStakingCall_schedule_leave_candidates {
    __kind: 'schedule_leave_candidates'
    candidateCount: number
}

/**
 * DEPRECATED use batch util with schedule_revoke_delegation for all delegations
 * Request to leave the set of delegators. If successful, the caller is scheduled to be
 * allowed to exit via a [DelegationAction::Revoke] towards all existing delegations.
 * Success forbids future delegation requests until the request is invoked or cancelled.
 */
export interface ParachainStakingCall_schedule_leave_delegators {
    __kind: 'schedule_leave_delegators'
}

/**
 * Request to revoke an existing delegation. If successful, the delegation is scheduled
 * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
 * The delegation receives no rewards for the rounds while a revoke is pending.
 * A revoke may not be performed if any other scheduled request is pending.
 */
export interface ParachainStakingCall_schedule_revoke_delegation {
    __kind: 'schedule_revoke_delegation'
    collator: AccountId32
}

/**
 * Sets the auto-compounding reward percentage for a delegation.
 */
export interface ParachainStakingCall_set_auto_compound {
    __kind: 'set_auto_compound'
    candidate: AccountId32
    value: Percent
    candidateAutoCompoundingDelegationCountHint: number
    delegationCountHint: number
}

/**
 * Set blocks per round
 * - if called with `new` less than length of current round, will transition immediately
 * in the next block
 * - also updates per-round inflation config
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: number
}

/**
 * Set the commission for all collators
 */
export interface ParachainStakingCall_set_collator_commission {
    __kind: 'set_collator_commission'
    new: Perbill
}

/**
 * Set the annual inflation rate to derive per-round inflation
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    schedule: Type_360
}

/**
 * Set the account that will hold funds set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_account {
    __kind: 'set_parachain_bond_account'
    new: AccountId32
}

/**
 * Set the percent of inflation set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_reserve_percent {
    __kind: 'set_parachain_bond_reserve_percent'
    new: Percent
}

/**
 * Set the expectations for total staked. These expectations determine the issuance for
 * the round according to logic in `fn compute_issuance`
 */
export interface ParachainStakingCall_set_staking_expectations {
    __kind: 'set_staking_expectations'
    expectations: Type_359
}

/**
 * Set the total number of collator candidates selected per round
 * - changes are not applied until the start of the next round
 */
export interface ParachainStakingCall_set_total_selected {
    __kind: 'set_total_selected'
    new: number
}

export interface Type_359 {
    min: bigint
    ideal: bigint
    max: bigint
}

export interface Type_360 {
    min: Perbill
    ideal: Perbill
    max: Perbill
}

export type Percent = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrderbookCall = OrderbookCall_fill_order | OrderbookCall_place_order | OrderbookCall_remove_order

/**
 * Fill an existing order entirely (`maker_partial_fill` = None)
 * or partially (`maker_partial_fill` = Some(partial_amount)).
 * 
 * External fees are paid in the base asset.
 * 
 * NOTE: The `maker_partial_fill` is the partial amount
 * of what the maker wants to get filled.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface OrderbookCall_fill_order {
    __kind: 'fill_order'
    orderId: bigint
    makerPartialFill?: (bigint | undefined)
}

/**
 * Place a new order.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface OrderbookCall_place_order {
    __kind: 'place_order'
    marketId: bigint
    makerAsset: Asset
    makerAmount: bigint
    takerAsset: Asset
    takerAmount: bigint
}

/**
 * Removes an order.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface OrderbookCall_remove_order {
    __kind: 'remove_order'
    orderId: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NeoSwapsCall = NeoSwapsCall_buy | NeoSwapsCall_deploy_pool | NeoSwapsCall_exit | NeoSwapsCall_join | NeoSwapsCall_sell | NeoSwapsCall_withdraw_fees

/**
 * Buy outcome tokens from the specified market.
 * 
 * The `amount_in` is paid in collateral. The transaction fails if the amount of outcome
 * tokens received is smaller than `min_amount_out`. The user must correctly specify the
 * number of outcomes for benchmarking reasons.
 * 
 * The `amount_in` parameter must also satisfy lower and upper limits due to numerical
 * constraints. In fact, after `amount_in` has been adjusted for fees, the following must
 * hold:
 * 
 * - `amount_in_minus_fees <= EXP_NUMERICAL_LIMIT * pool.liquidity_parameter`.
 * - `exp(amount_in_minus_fees/pool.liquidity_parameter) - 1 + p <= LN_NUMERICAL_LIMIT`,
 *   where `p` is the spot price of `asset_out`.
 * 
 * # Parameters
 * 
 * - `origin`: The origin account making the purchase.
 * - `market_id`: Identifier for the market related to the trade.
 * - `asset_count`: Number of assets in the pool.
 * - `asset_out`: Asset to be purchased.
 * - `amount_in`: Amount of collateral paid by the user.
 * - `min_amount_out`: Minimum number of outcome tokens the user expects to receive.
 * 
 * # Complexity
 * 
 * Depends on the implementation of `CompleteSetOperationsApi` and `ExternalFees`; when
 * using the canonical implementations, the runtime complexity is `O(asset_count)`.
 */
export interface NeoSwapsCall_buy {
    __kind: 'buy'
    marketId: bigint
    assetCount: number
    assetOut: Asset
    amountIn: bigint
    minAmountOut: bigint
}

/**
 * Deploy a pool for the specified market and provide liquidity.
 * 
 * The sender specifies a vector of `spot_prices` for the market's outcomes in the order
 * given by the `MarketCommonsApi`. The transaction will fail if the spot prices don't add
 * up to exactly `BASE`.
 * 
 * Depending on the values in the `spot_prices`, the transaction will transfer different
 * amounts of each outcome to the pool. The sender specifies a maximum `amount` of outcome
 * tokens to spend.
 * 
 * Note that the sender must acquire the outcome tokens in a separate transaction by using
 * complete set operations. It's therefore convenient to batch this function together with
 * a `buy_complete_set` with `amount` as amount of complete sets to buy.
 * 
 * Deploying the pool will cost the signer an additional fee to the tune of the
 * collateral's existential deposit. This fee is placed in the pool account and ensures
 * that swap fees can be stored in the pool account without triggering dusting or failed
 * transfers.
 * 
 * The operation is currently limited to binary and scalar markets.
 * 
 * # Complexity
 * 
 * `O(n)` where `n` is the number of assets in the pool.
 */
export interface NeoSwapsCall_deploy_pool {
    __kind: 'deploy_pool'
    marketId: bigint
    amount: bigint
    spotPrices: bigint[]
    swapFee: bigint
}

/**
 * Exit the liquidity pool for the specified market.
 * 
 * The LP relinquishes pool shares in exchange for withdrawing outcome tokens from the
 * pool. The `min_amounts_out` vector specifies the minimum number of each outcome token
 * that the LP expects to withdraw. These minimum amounts are used to adjust the outcome
 * balances in the pool, taking into account the reduction in the LP's pool share
 * ownership.
 * 
 * The transaction will fail unless the LP withdraws their fees from the pool beforehand. A
 * batch transaction is very useful here.
 * 
 * If the LP withdraws all pool shares that exist, then the pool is afterwards destroyed. A
 * new pool can be deployed at any time, provided that the market is still open. If there
 * are funds left in the pool account (this can happen due to exit fees), the remaining
 * funds are destroyed.
 * 
 * The LP is not allowed to leave a positive but small amount liquidity in the pool. If the
 * liquidity parameter drops below a certain threshold, the transaction will fail. The only
 * solution is to withdraw _all_ liquidity and let the pool die.
 * 
 * # Parameters
 * 
 * - `market_id`: Identifier for the market related to the pool.
 * - `pool_shares_amount_out`: The number of pool shares the LP will relinquish.
 * - `min_amounts_out`: Vector of the minimum amounts of each outcome token the LP expects
 *   to withdraw (with outcomes specified in the order given by `MarketCommonsApi`).
 * 
 * # Complexity
 * 
 * `O(n + d)` where `n` is the number of assets in the pool and `d` is the depth of the
 * pool's liquidity tree, or, equivalently, `log_2(m)` where `m` is the number of liquidity
 * providers in the pool.
 */
export interface NeoSwapsCall_exit {
    __kind: 'exit'
    marketId: bigint
    poolSharesAmountOut: bigint
    minAmountsOut: bigint[]
}

/**
 * Join the liquidity pool for the specified market.
 * 
 * The LP receives pool shares in exchange for staking outcome tokens into the pool. The
 * `max_amounts_in` vector specifies the maximum number of each outcome token that the LP is
 * willing to deposit. These amounts are used to adjust the outcome balances in the pool
 * according to the new proportion of pool shares owned by the LP.
 * 
 * Note that the user must acquire the outcome tokens in a separate transaction, either by
 * buying from the pool or by using complete set operations.
 * 
 * # Parameters
 * 
 * - `market_id`: Identifier for the market related to the pool.
 * - `pool_shares_amount`: The number of new pool shares the LP will receive.
 * - `max_amounts_in`: Vector of the maximum amounts of each outcome token the LP is
 *   willing to deposit (with outcomes specified in the order of `MarketCommonsApi`).
 * 
 * # Complexity
 * 
 * `O(n + d)` where `n` is the number of assets in the pool and `d` is the depth of the
 * pool's liquidity tree, or, equivalently, `log_2(m)` where `m` is the number of liquidity
 * providers in the pool.
 */
export interface NeoSwapsCall_join {
    __kind: 'join'
    marketId: bigint
    poolSharesAmount: bigint
    maxAmountsIn: bigint[]
}

/**
 * Sell outcome tokens to the specified market.
 * 
 * The `amount_in` is paid in outcome tokens. The transaction fails if the amount of outcome
 * tokens received is smaller than `min_amount_out`. The user must correctly specify the
 * number of outcomes for benchmarking reasons.
 * 
 * The `amount_in` parameter must also satisfy lower and upper limits due to numerical
 * constraints. In fact, the following must hold:
 * 
 * - `amount_in <= EXP_NUMERICAL_LIMIT * pool.liquidity_parameter`.
 * - The spot price of `asset_in` is greater than `exp(-EXP_NUMERICAL_LIMIT)` before and
 *   after execution
 * 
 * # Parameters
 * 
 * - `origin`: The origin account making the sale.
 * - `market_id`: Identifier for the market related to the trade.
 * - `asset_count`: Number of assets in the pool.
 * - `asset_in`: Asset to be sold.
 * - `amount_in`: Amount of outcome tokens paid by the user.
 * - `min_amount_out`: Minimum amount of collateral the user expects to receive.
 * 
 * # Complexity
 * 
 * Depends on the implementation of `CompleteSetOperationsApi` and `ExternalFees`; when
 * using the canonical implementations, the runtime complexity is `O(asset_count)`.
 */
export interface NeoSwapsCall_sell {
    __kind: 'sell'
    marketId: bigint
    assetCount: number
    assetIn: Asset
    amountIn: bigint
    minAmountOut: bigint
}

/**
 * Withdraw swap fees from the specified market.
 * 
 * The transaction will fail if the caller is not a liquidity provider. Should always be
 * used before calling `exit`.
 * 
 * # Parameters
 * 
 * - `market_id`: Identifier for the market related to the pool.
 * 
 * # Complexity
 * 
 * `O(1)`.
 */
export interface NeoSwapsCall_withdraw_fees {
    __kind: 'withdraw_fees'
    marketId: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
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
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account]
 *     - Writes: Multisig Storage, [Caller Account]
 * - Plus Call Weight
 * # </weight>
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
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account
 *     - Write: Multisig Storage, [Caller Account], Refund Account
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface Timepoint {
    height: bigint
    index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MarketAssetsCall = MarketAssetsCall_approve_transfer | MarketAssetsCall_burn | MarketAssetsCall_cancel_approval | MarketAssetsCall_clear_metadata | MarketAssetsCall_create | MarketAssetsCall_destroy_accounts | MarketAssetsCall_destroy_approvals | MarketAssetsCall_finish_destroy | MarketAssetsCall_force_asset_status | MarketAssetsCall_force_cancel_approval | MarketAssetsCall_force_clear_metadata | MarketAssetsCall_force_create | MarketAssetsCall_force_set_metadata | MarketAssetsCall_force_transfer | MarketAssetsCall_freeze | MarketAssetsCall_freeze_asset | MarketAssetsCall_mint | MarketAssetsCall_refund | MarketAssetsCall_set_metadata | MarketAssetsCall_set_team | MarketAssetsCall_start_destroy | MarketAssetsCall_thaw | MarketAssetsCall_thaw_asset | MarketAssetsCall_touch | MarketAssetsCall_transfer | MarketAssetsCall_transfer_approved | MarketAssetsCall_transfer_keep_alive | MarketAssetsCall_transfer_ownership

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 * 
 * Origin must be Signed.
 * 
 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 * for the purpose of holding the approval. If some non-zero amount of assets is already
 * approved from signing account to `delegate`, then it is topped up or unreserved to
 * meet the right value.
 * 
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account to delegate permission to transfer asset.
 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 * already an approval in place, then this acts additively.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: MarketAssetClass
    delegate: MultiAddress
    amount: bigint
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 * Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 * Bails with `NoAccount` if the `who` is already dead.
 * 
 * - `id`: The identifier of the asset to have some amount burned.
 * - `who`: The account to be debited from.
 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
 * minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 * Weight: `O(1)`
 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface MarketAssetsCall_burn {
    __kind: 'burn'
    id: MarketAssetClass
    who: MultiAddress
    amount: bigint
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be Signed and there must be an approval in place between signer and
 * `delegate`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: MarketAssetClass
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Any deposit is freed for the asset owner.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: MarketAssetClass
}

/**
 * Issue a new class of fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 * 
 * Funds of sender are reserved by `AssetDeposit`.
 * 
 * Parameters:
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_create {
    __kind: 'create'
    id: MarketAssetClass
    admin: MultiAddress
    minBalance: bigint
}

/**
 * Destroy all accounts associated with a given asset.
 * 
 * `destroy_accounts` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedAccounts` event.
 */
export interface MarketAssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: MarketAssetClass
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 * 
 * `destroy_approvals` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedApprovals` event.
 */
export interface MarketAssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: MarketAssetClass
}

/**
 * Complete destroying asset and unreserve currency.
 * 
 * `finish_destroy` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 * hand.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each successful call emits the `Event::Destroyed` event.
 */
export interface MarketAssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: MarketAssetClass
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 * value to account for the state bloat associated with its balance storage. If set to
 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 * an ED in the Balances pallet or whatever else is used to control user-account state
 * growth).
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_force_asset_status {
    __kind: 'force_asset_status'
    id: MarketAssetClass
    owner: MultiAddress
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
    minBalance: bigint
    isSufficient: boolean
    isFrozen: boolean
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 * account of the asset `id`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: MarketAssetClass
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is returned.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: MarketAssetClass
}

/**
 * Issue a new class of fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_force_create {
    __kind: 'force_create'
    id: MarketAssetClass
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * Force the metadata for an asset to some value.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is left alone.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface MarketAssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: MarketAssetClass
    name: Bytes
    symbol: Bytes
    decimals: number
    isFrozen: boolean
}

/**
 * Move some assets from one account to another.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `source`: The account to be debited.
 * - `dest`: The account to be credited.
 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the `source` balance above zero but
 * below the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 * `dest`.
 */
export interface MarketAssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: MarketAssetClass
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers from an account.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_freeze {
    __kind: 'freeze'
    id: MarketAssetClass
    who: MultiAddress
}

/**
 * Disallow further unprivileged transfers for the asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: MarketAssetClass
}

/**
 * Mint assets of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount minted.
 * - `beneficiary`: The account to be credited with the minted assets.
 * - `amount`: The amount of the asset to be minted.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface MarketAssetsCall_mint {
    __kind: 'mint'
    id: MarketAssetClass
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Return the deposit (if any) of an asset account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for the account to be created.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface MarketAssetsCall_refund {
    __kind: 'refund'
    id: MarketAssetClass
    allowBurn: boolean
}

/**
 * Set the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Funds of sender are reserved according to the formula:
 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 * account any already reserved funds.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: MarketAssetClass
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * Change the Issuer, Admin and Freezer of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_set_team {
    __kind: 'set_team'
    id: MarketAssetClass
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Start the process of destroying a fungible asset class.
 * 
 * `start_destroy` is the first in a series of extrinsics that should be called, to allow
 * destruction of an asset class.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * The asset class must be frozen before calling `start_destroy`.
 */
export interface MarketAssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: MarketAssetClass
}

/**
 * Allow unprivileged transfers from an account again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be unfrozen.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_thaw {
    __kind: 'thaw'
    id: MarketAssetClass
    who: MultiAddress
}

/**
 * Allow unprivileged transfers for the asset again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: MarketAssetClass
}

/**
 * Create an asset account for non-provider assets.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *   to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface MarketAssetsCall_touch {
    __kind: 'touch'
    id: MarketAssetClass
}

/**
 * Move some assets from the sender account to another.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface MarketAssetsCall_transfer {
    __kind: 'transfer'
    id: MarketAssetClass
    target: MultiAddress
    amount: bigint
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 * 
 * Origin must be Signed and there must be an approval in place by the `owner` to the
 * signer.
 * 
 * If the entire amount approved for transfer is transferred, then any deposit previously
 * reserved by `approve_transfer` is unreserved.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The account which previously approved for a transfer of at least `amount` and
 * from which the asset balance will be withdrawn.
 * - `destination`: The account to which the asset balance of `amount` will be transferred.
 * - `amount`: The amount of assets to transfer.
 * 
 * Emits `TransferredApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: MarketAssetClass
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface MarketAssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: MarketAssetClass
    target: MultiAddress
    amount: bigint
}

/**
 * Change the Owner of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface MarketAssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: MarketAssetClass
    owner: MultiAddress
}

export type MarketAssetClass = MarketAssetClass_CategoricalOutcome | MarketAssetClass_ParimutuelShare | MarketAssetClass_PoolShare | MarketAssetClass_ScalarOutcome

export interface MarketAssetClass_CategoricalOutcome {
    __kind: 'CategoricalOutcome'
    value: [bigint, number]
}

export interface MarketAssetClass_ParimutuelShare {
    __kind: 'ParimutuelShare'
    value: [bigint, number]
}

export interface MarketAssetClass_PoolShare {
    __kind: 'PoolShare'
    value: bigint
}

export interface MarketAssetClass_ScalarOutcome {
    __kind: 'ScalarOutcome'
    value: [bigint, ScalarPosition]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningCall = LiquidityMiningCall_set_per_block_distribution

export interface LiquidityMiningCall_set_per_block_distribution {
    __kind: 'set_per_block_distribution'
    perBlockDistribution: bigint
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HybridRouterCall = HybridRouterCall_buy | HybridRouterCall_sell

/**
 * Routes a buy order to AMM and CDA to achieve the best average execution price.
 * 
 * # Parameters
 * 
 * * `market_id`: The ID of the market to buy from.
 * * `asset_count`: The number of assets traded on the market.
 * * `asset`: The asset to buy.
 * * `amount_in`: The amount of the market's base asset to sell.
 * * `max_price`: The maximum price to buy at.
 * * `orders`: A list of orders from the book to use.
 * * `strategy`: The strategy to handle the remaining order when the `max_price` is reached.
 * 
 * The elements of `orders` are the orders that the router may use to execute the order. If any of
 * these orders are already filled, they are ignored. It is not necessary for the router to use all
 * specified orders. The smaller the vector, the larger the risk that the AMM is used to fill large
 * chunks of the order.
 * 
 * The `orders` vector **must** be sorted in ascending order by the price of their associated
 * orders. Failing this, the behavior of `buy` is undefined.
 * 
 * If the maximum price is reached before the entire buy order is filled, the `strategy` parameter
 * decides if the order is rolled back (`Strategy::ImmediateOrCancel`) or if a limit order for the
 * remaining amount is placed (`Strategy::LimitOrder`).
 * 
 * Complexity: `O(n)`
 */
export interface HybridRouterCall_buy {
    __kind: 'buy'
    marketId: bigint
    assetCount: number
    asset: Asset
    amountIn: bigint
    maxPrice: bigint
    orders: bigint[]
    strategy: Strategy
}

/**
 * Routes a sell order to AMM and CDA to achieve the best average execution price.
 * 
 * # Parameters
 * 
 * * `market_id`: The ID of the market to sell on.
 * * `asset_count`: The number of assets traded on the market.
 * * `asset`: The asset to sell.
 * * `amount_in`: The amount of `asset` to sell.
 * * `min_price`: The minimum price to sell at.
 * * `orders`: A list of orders from the book to use.
 * * `strategy`: The strategy to handle the remaining order when the `min_price` is reached.
 * 
 * The elements of `orders` are the orders that the router may use to execute the order. If any of
 * these orders are already filled, they are ignored. It is not necessary for the router to use all
 * specified orders. The smaller the vector, the larger the risk that the AMM is used to fill large
 * chunks of the order.
 * 
 * The `orders` vector **must** be sorted in ascending order by the price of their associated
 * orders. Failing this, the behavior of `sell` is undefined.
 * 
 * If the maximum price is reached before the entire buy order is filled, the `strategy` parameter
 * decides if the order is rolled back (`Strategy::ImmediateOrCancel`) or if a limit order for the
 * remaining amount is placed (`Strategy::LimitOrder`).
 * 
 * Complexity: `O(n)`
 */
export interface HybridRouterCall_sell {
    __kind: 'sell'
    marketId: bigint
    assetCount: number
    asset: Asset
    amountIn: bigint
    minPrice: bigint
    orders: bigint[]
    strategy: Strategy
}

export type Strategy = Strategy_ImmediateOrCancel | Strategy_LimitOrder

export interface Strategy_ImmediateOrCancel {
    __kind: 'ImmediateOrCancel'
}

export interface Strategy_LimitOrder {
    __kind: 'LimitOrder'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GlobalDisputesCall = GlobalDisputesCall_add_vote_outcome | GlobalDisputesCall_purge_outcomes | GlobalDisputesCall_refund_vote_fees | GlobalDisputesCall_reward_outcome_owner | GlobalDisputesCall_unlock_vote_balance | GlobalDisputesCall_vote_on_outcome

/**
 * Add voting outcome to a global dispute in exchange for a constant fee.
 * Errors if the voting outcome already exists or
 * if the global dispute has not started or has already finished.
 * 
 * # Arguments
 * 
 * - `market_id`: The id of the market.
 * - `outcome`: The outcome report to add.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of owner(s) of the winner outcome
 * in the case that this gets called for an already finished global dispute.
 */
export interface GlobalDisputesCall_add_vote_outcome {
    __kind: 'add_vote_outcome'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * Purge all outcomes to allow the winning outcome owner(s) to get their reward.
 * Fails if the global dispute is not concluded yet.
 * 
 * # Arguments
 * 
 * - `market_id`: The id of the market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`,
 * where `n` is the number of all existing outcomes for a global dispute.
 */
export interface GlobalDisputesCall_purge_outcomes {
    __kind: 'purge_outcomes'
    marketId: bigint
}

/**
 * Return the voting outcome fees in case the global dispute was destroyed.
 * 
 * # Arguments
 * 
 * - `market_id`: The id of the market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`,
 * where `n` is the number of all existing outcomes for a global dispute.
 */
export interface GlobalDisputesCall_refund_vote_fees {
    __kind: 'refund_vote_fees'
    marketId: bigint
}

/**
 * Reward the collected fees to the owner(s) of a voting outcome.
 * Fails if outcomes is not already purged.
 * 
 * # Arguments
 * 
 * - `market_id`: The id of the market.
 * 
 * # Weight
 * 
 * Complexity: `O(n)`, where `n` is the number of owners for the winning outcome.
 */
export interface GlobalDisputesCall_reward_outcome_owner {
    __kind: 'reward_outcome_owner'
    marketId: bigint
}

/**
 * Return all locked native tokens from a finished or destroyed global dispute.
 * Fails if the global dispute is not concluded yet.
 * 
 * # Arguments
 * 
 * - `voter`: The account id lookup to unlock funds for.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
 * and `m` is the number of owners for the winning outcome.
 */
export interface GlobalDisputesCall_unlock_vote_balance {
    __kind: 'unlock_vote_balance'
    voter: MultiAddress
}

/**
 * Vote on existing voting outcomes by locking native tokens.
 * Fails if the global dispute has not started or has already finished.
 * 
 * # Arguments
 * 
 * - `market_id`: The id of the market.
 * - `outcome`: The existing outcome report to vote on.
 * - `amount`: The amount to vote with.
 * 
 * # Weight
 * 
 * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
 * and `m` is the number of owners for the specified outcome.
 */
export interface GlobalDisputesCall_vote_on_outcome {
    __kind: 'vote_on_outcome'
    marketId: bigint
    outcome: OutcomeReport
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: bigint
    delay: bigint
}

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
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
    vote: number
    balance: bigint
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CustomAssetsCall = CustomAssetsCall_approve_transfer | CustomAssetsCall_burn | CustomAssetsCall_cancel_approval | CustomAssetsCall_clear_metadata | CustomAssetsCall_create | CustomAssetsCall_destroy_accounts | CustomAssetsCall_destroy_approvals | CustomAssetsCall_finish_destroy | CustomAssetsCall_force_asset_status | CustomAssetsCall_force_cancel_approval | CustomAssetsCall_force_clear_metadata | CustomAssetsCall_force_create | CustomAssetsCall_force_set_metadata | CustomAssetsCall_force_transfer | CustomAssetsCall_freeze | CustomAssetsCall_freeze_asset | CustomAssetsCall_mint | CustomAssetsCall_refund | CustomAssetsCall_set_metadata | CustomAssetsCall_set_team | CustomAssetsCall_start_destroy | CustomAssetsCall_thaw | CustomAssetsCall_thaw_asset | CustomAssetsCall_touch | CustomAssetsCall_transfer | CustomAssetsCall_transfer_approved | CustomAssetsCall_transfer_keep_alive | CustomAssetsCall_transfer_ownership

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 * 
 * Origin must be Signed.
 * 
 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 * for the purpose of holding the approval. If some non-zero amount of assets is already
 * approved from signing account to `delegate`, then it is topped up or unreserved to
 * meet the right value.
 * 
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account to delegate permission to transfer asset.
 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 * already an approval in place, then this acts additively.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: bigint
    delegate: MultiAddress
    amount: bigint
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 * Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 * Bails with `NoAccount` if the `who` is already dead.
 * 
 * - `id`: The identifier of the asset to have some amount burned.
 * - `who`: The account to be debited from.
 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
 * minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 * Weight: `O(1)`
 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface CustomAssetsCall_burn {
    __kind: 'burn'
    id: bigint
    who: MultiAddress
    amount: bigint
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be Signed and there must be an approval in place between signer and
 * `delegate`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: bigint
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Any deposit is freed for the asset owner.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: bigint
}

/**
 * Issue a new class of fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 * 
 * Funds of sender are reserved by `AssetDeposit`.
 * 
 * Parameters:
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_create {
    __kind: 'create'
    id: bigint
    admin: MultiAddress
    minBalance: bigint
}

/**
 * Destroy all accounts associated with a given asset.
 * 
 * `destroy_accounts` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedAccounts` event.
 */
export interface CustomAssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: bigint
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 * 
 * `destroy_approvals` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedApprovals` event.
 */
export interface CustomAssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: bigint
}

/**
 * Complete destroying asset and unreserve currency.
 * 
 * `finish_destroy` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 * hand.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each successful call emits the `Event::Destroyed` event.
 */
export interface CustomAssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: bigint
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 * value to account for the state bloat associated with its balance storage. If set to
 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 * an ED in the Balances pallet or whatever else is used to control user-account state
 * growth).
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_force_asset_status {
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
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 * account of the asset `id`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: bigint
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is returned.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: bigint
}

/**
 * Issue a new class of fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_force_create {
    __kind: 'force_create'
    id: bigint
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * Force the metadata for an asset to some value.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is left alone.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface CustomAssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
    isFrozen: boolean
}

/**
 * Move some assets from one account to another.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `source`: The account to be debited.
 * - `dest`: The account to be credited.
 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the `source` balance above zero but
 * below the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 * `dest`.
 */
export interface CustomAssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: bigint
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers from an account.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_freeze {
    __kind: 'freeze'
    id: bigint
    who: MultiAddress
}

/**
 * Disallow further unprivileged transfers for the asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: bigint
}

/**
 * Mint assets of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount minted.
 * - `beneficiary`: The account to be credited with the minted assets.
 * - `amount`: The amount of the asset to be minted.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface CustomAssetsCall_mint {
    __kind: 'mint'
    id: bigint
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Return the deposit (if any) of an asset account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for the account to be created.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface CustomAssetsCall_refund {
    __kind: 'refund'
    id: bigint
    allowBurn: boolean
}

/**
 * Set the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Funds of sender are reserved according to the formula:
 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 * account any already reserved funds.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * Change the Issuer, Admin and Freezer of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_set_team {
    __kind: 'set_team'
    id: bigint
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Start the process of destroying a fungible asset class.
 * 
 * `start_destroy` is the first in a series of extrinsics that should be called, to allow
 * destruction of an asset class.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * The asset class must be frozen before calling `start_destroy`.
 */
export interface CustomAssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: bigint
}

/**
 * Allow unprivileged transfers from an account again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be unfrozen.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_thaw {
    __kind: 'thaw'
    id: bigint
    who: MultiAddress
}

/**
 * Allow unprivileged transfers for the asset again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: bigint
}

/**
 * Create an asset account for non-provider assets.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *   to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface CustomAssetsCall_touch {
    __kind: 'touch'
    id: bigint
}

/**
 * Move some assets from the sender account to another.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface CustomAssetsCall_transfer {
    __kind: 'transfer'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 * 
 * Origin must be Signed and there must be an approval in place by the `owner` to the
 * signer.
 * 
 * If the entire amount approved for transfer is transferred, then any deposit previously
 * reserved by `approve_transfer` is unreserved.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The account which previously approved for a transfer of at least `amount` and
 * from which the asset balance will be withdrawn.
 * - `destination`: The account to which the asset balance of `amount` will be transferred.
 * - `amount`: The amount of assets to transfer.
 * 
 * Emits `TransferredApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: bigint
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface CustomAssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Change the Owner of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface CustomAssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: bigint
    owner: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CourtCall = CourtCall_appeal | CourtCall_delegate | CourtCall_denounce_vote | CourtCall_exit_court | CourtCall_join_court | CourtCall_prepare_exit_court | CourtCall_reassign_court_stakes | CourtCall_reveal_vote | CourtCall_set_inflation | CourtCall_vote

/**
 * Initiate an appeal for a court
 * if the presumptive winner of the last vote round is believed to be incorrect.
 * The last appeal does not trigger a new court round
 * but instead it marks the court mechanism for this market as failed.
 * If the court failed, the prediction markets pallet takes over the dispute resolution.
 * The prediction markets pallet might allow to trigger a global token holder vote.
 * 
 * # Arguments
 * 
 * - `court_id`: The identifier of the court.
 * 
 * # Weight
 * 
 * Complexity: It depends heavily on the complexity of `select_participants`.
 */
export interface CourtCall_appeal {
    __kind: 'appeal'
    courtId: bigint
}

/**
 * Join the court to become a delegator.
 * If the random selection algorithm chooses a delegators stake,
 * the caller delegates the vote power to the drawn delegated juror.
 * The delegator gets slashed or rewarded according to the delegated juror's decisions.
 * If the delegator is already part of the court,
 * the `amount` needs to be higher than the previous amount to update the delegators stake.
 * The `amount` of this call represents the total stake of the delegator.
 * If the pool is full, the lowest staked court participant is removed from the court pool.
 * If the `amount` is lower than the lowest staked court participant, the call fails.
 * 
 * # Arguments
 * 
 * - `amount`: The total stake associated with the joining delegator.
 * - `delegations`: The list of jurors to delegate the vote power to.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of jurors in the stake-weighted pool.
 */
export interface CourtCall_delegate {
    __kind: 'delegate'
    amount: bigint
    delegations: AccountId32[]
}

/**
 * Denounce a juror during the voting period for which the commitment vote is known.
 * This is useful to punish the behaviour that jurors reveal
 * their commitments to others before the voting period ends.
 * A check of `commitment_hash == hash(juror ++ vote_item ++ salt)`
 * is performed for validation.
 * 
 * # Arguments
 * 
 * - `court_id`: The identifier of the court.
 * - `juror`: The juror whose commitment vote might be known.
 * - `vote_item`: The raw vote item which should match with the commitment of the juror.
 * - `salt`: The hash which is used to proof that the juror did reveal
 * her vote during the voting period.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of selected draws
 * in the specified court.
 */
export interface CourtCall_denounce_vote {
    __kind: 'denounce_vote'
    courtId: bigint
    juror: MultiAddress
    voteItem: VoteItem
    salt: H256
}

/**
 * Exit the court.
 * The stake which is not locked by any court case is unlocked.
 * `prepare_exit_court` must be called before
 * to remove the court participant (juror or delegator) from the stake-weighted pool.
 * 
 * # Arguments
 * 
 * - `court_participant`: The court participant,
 * who is assumed not to be part of the pool anymore.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of jurors in the stake-weighted pool.
 */
export interface CourtCall_exit_court {
    __kind: 'exit_court'
    courtParticipant: MultiAddress
}

/**
 * Join to become a juror, who is able to get randomly selected
 * for court cases according to the provided stake.
 * If the juror is already part of the court,
 * the `amount` needs to be higher than the previous amount to update the juror stake.
 * If the juror gets selected for a court case, the juror has to vote and reveal the vote.
 * If the juror does not vote or reveal the vote, the juror gets slashed
 * by the selected multiple of `MinJurorStake` for the court.
 * The risked amount depends on the juror random selection algorithm,
 * but is at most (`MaxSelectedDraws` / 2) mulitplied by the `MinJurorStake`
 * for all jurors and delegators in one court.
 * Assume you get randomly selected on one of these `MinJurorStake`'s.
 * Then you risk at most `MinJurorStake` for this court.
 * The probability to get selected is higher the more funds are staked.
 * The `amount` of this call represents the total stake of the juror.
 * If the pool is full, the lowest staked court participant is removed from the court pool.
 * If the `amount` is lower than the lowest staked court participant, the call fails.
 * 
 * # Arguments
 * 
 * - `amount`: The total stake associated with the joining juror.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of jurors in the stake-weighted pool.
 */
export interface CourtCall_join_court {
    __kind: 'join_court'
    amount: bigint
}

/**
 * Prepare as a court participant (juror or delegator) to exit the court.
 * When this is called the court participant is not anymore able to get drawn for new cases.
 * The court participant gets removed from the stake-weighted pool.
 * After that the court participant can exit the court.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of jurors in the stake-weighted pool.
 */
export interface CourtCall_prepare_exit_court {
    __kind: 'prepare_exit_court'
}

/**
 * Reassign the stakes of the jurors and delegators
 * for the selected draws of the specified court.
 * The losing jurors and delegators get slashed and
 * pay for the winning jurors and delegators.
 * The tardy (juror did not reveal or did not vote) or denounced jurors
 * and associated delegators get slashed and reward the winners.
 * 
 * # Arguments
 * 
 * - `court_id`: The identifier of the court.
 * 
 * # Weight
 * 
 * Complexity: O(N + M), with `N` being the number of draws and `M` being the total number of valid winners and losers.
 */
export interface CourtCall_reassign_court_stakes {
    __kind: 'reassign_court_stakes'
    courtId: bigint
}

/**
 * Reveal the commitment vote of the caller, who is a selected juror.
 * A check of `commitment_hash == hash(juror ++ vote_item ++ salt)`
 * is performed for validation.
 * 
 * # Arguments
 * 
 * - `court_id`: The identifier of the court.
 * - `vote_item`: The raw vote item which should match with the commitment of the juror.
 * - `salt`: The hash which is used for the validation.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of selected draws
 * in the specified court.
 */
export interface CourtCall_reveal_vote {
    __kind: 'reveal_vote'
    courtId: bigint
    voteItem: VoteItem
    salt: H256
}

/**
 * Set the yearly inflation rate of the court system.
 * This is only allowed to be called by the `MonetaryGovernanceOrigin`.
 * 
 * # Arguments
 * 
 * - `inflation`: The desired yearly inflation rate.
 * 
 * # Weight
 * 
 * Complexity: `O(1)`
 */
export interface CourtCall_set_inflation {
    __kind: 'set_inflation'
    inflation: Perbill
}

/**
 * Vote as a randomly selected juror for a specific court case.
 * 
 * # Arguments
 * 
 * - `court_id`: The identifier of the court.
 * - `commitment_vote`: A hash which consists of `juror ++ vote_item ++ salt`.
 * 
 * # Weight
 * 
 * Complexity: `O(log(n))`, where `n` is the number of participants
 * in the list of random selections (draws).
 */
export interface CourtCall_vote {
    __kind: 'vote'
    courtId: bigint
    commitmentVote: H256
}

export type VoteItem = VoteItem_Binary | VoteItem_Outcome

export interface VoteItem_Binary {
    __kind: 'Binary'
    value: boolean
}

export interface VoteItem_Outcome {
    __kind: 'Outcome'
    value: OutcomeReport
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_change_key | CouncilMembershipCall_clear_prime | CouncilMembershipCall_remove_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_set_prime | CouncilMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface CouncilMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CouncilMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface CouncilMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ContractsCall = ContractsCall_call | ContractsCall_call_old_weight | ContractsCall_instantiate | ContractsCall_instantiate_old_weight | ContractsCall_instantiate_with_code | ContractsCall_instantiate_with_code_old_weight | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_upload_code

/**
 * Makes a call to an account, optionally transferring some balance.
 * 
 * # Parameters
 * 
 * * `dest`: Address of the contract to call.
 * * `value`: The balance to transfer from the `origin` to `dest`.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *   caller to pay for the storage consumed.
 * * `data`: The input data to pass to the contract.
 * 
 * * If the account is a smart-contract account, the associated code will be
 * executed and any value will be transferred.
 * * If the account is a regular account, any value will be transferred.
 * * If no account exists and the call value is not less than `existential_deposit`,
 * a regular account will be created and any value will be transferred.
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
 * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
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
 * Instantiates a contract from a previously deployed wasm binary.
 * 
 * This function is identical to [`Self::instantiate_with_code`] but without the
 * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 * must be supplied.
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
 * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
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
 * Instantiates a new contract from the supplied `code` optionally transferring
 * some balance.
 * 
 * This dispatchable has the same effect as calling [`Self::upload_code`] +
 * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 * also check the documentation of [`Self::upload_code`].
 * 
 * # Parameters
 * 
 * * `value`: The balance to transfer from the `origin` to the newly created contract.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *   from the caller to pay for the storage consumed.
 * * `code`: The contract code to deploy in raw bytes.
 * * `data`: The input data to pass to the contract constructor.
 * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
 * 
 * Instantiation is executed as follows:
 * 
 * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
 *   code.
 * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
 * - The destination address is computed based on the sender, code_hash and the salt.
 * - The smart-contract account is created at the computed address.
 * - The `value` is transferred to the new account.
 * - The `deploy` function is executed in the context of the newly-created account.
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
 * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
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
 * Remove the code stored under `code_hash` and refund the deposit to its owner.
 * 
 * A code can only be removed by its original uploader (its owner) and only if it is
 * not used by any contract.
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: H256
}

/**
 * Privileged function that changes the code of an existing contract.
 * 
 * This takes care of updating refcounts and all other necessary operations. Returns
 * an error if either the `code_hash` or `dest` do not exist.
 * 
 * # Note
 * 
 * This does **not** change the address of the contract in question. This means
 * that the contract address is no longer derived from its code hash after calling
 * this dispatchable.
 */
export interface ContractsCall_set_code {
    __kind: 'set_code'
    dest: MultiAddress
    codeHash: H256
}

/**
 * Upload new `code` without instantiating a contract from it.
 * 
 * If the code does not already exist a deposit is reserved from the caller
 * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 * depends on the instrumented size of the the supplied `code`.
 * 
 * If the code already exists in storage it will still return `Ok` and upgrades
 * the in storage version to the current
 * [`InstructionWeights::version`](InstructionWeights).
 * 
 * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
 *   then the only way to use this code is to delegate call into it from an offchain
 *   execution. Set to [`Determinism::Deterministic`] if in doubt.
 * 
 * # Note
 * 
 * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 * To avoid this situation a constructor could employ access control so that it can
 * only be instantiated by permissioned entities. The same is true when uploading
 * through [`Self::instantiate_with_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Bytes
    storageDepositLimit?: (bigint | undefined)
    determinism: Determinism
}

export type Determinism = Determinism_AllowIndeterminism | Determinism_Deterministic

export interface Determinism_AllowIndeterminism {
    __kind: 'AllowIndeterminism'
}

export interface Determinism_Deterministic {
    __kind: 'Deterministic'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CampaignAssetsCall = CampaignAssetsCall_approve_transfer | CampaignAssetsCall_burn | CampaignAssetsCall_cancel_approval | CampaignAssetsCall_clear_metadata | CampaignAssetsCall_create | CampaignAssetsCall_destroy_accounts | CampaignAssetsCall_destroy_approvals | CampaignAssetsCall_finish_destroy | CampaignAssetsCall_force_asset_status | CampaignAssetsCall_force_cancel_approval | CampaignAssetsCall_force_clear_metadata | CampaignAssetsCall_force_create | CampaignAssetsCall_force_set_metadata | CampaignAssetsCall_force_transfer | CampaignAssetsCall_freeze | CampaignAssetsCall_freeze_asset | CampaignAssetsCall_mint | CampaignAssetsCall_refund | CampaignAssetsCall_set_metadata | CampaignAssetsCall_set_team | CampaignAssetsCall_start_destroy | CampaignAssetsCall_thaw | CampaignAssetsCall_thaw_asset | CampaignAssetsCall_touch | CampaignAssetsCall_transfer | CampaignAssetsCall_transfer_approved | CampaignAssetsCall_transfer_keep_alive | CampaignAssetsCall_transfer_ownership

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 * 
 * Origin must be Signed.
 * 
 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 * for the purpose of holding the approval. If some non-zero amount of assets is already
 * approved from signing account to `delegate`, then it is topped up or unreserved to
 * meet the right value.
 * 
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account to delegate permission to transfer asset.
 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 * already an approval in place, then this acts additively.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: bigint
    delegate: MultiAddress
    amount: bigint
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 * Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 * Bails with `NoAccount` if the `who` is already dead.
 * 
 * - `id`: The identifier of the asset to have some amount burned.
 * - `who`: The account to be debited from.
 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
 * minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 * Weight: `O(1)`
 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface CampaignAssetsCall_burn {
    __kind: 'burn'
    id: bigint
    who: MultiAddress
    amount: bigint
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be Signed and there must be an approval in place between signer and
 * `delegate`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: bigint
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Any deposit is freed for the asset owner.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: bigint
}

/**
 * Issue a new class of fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 * 
 * Funds of sender are reserved by `AssetDeposit`.
 * 
 * Parameters:
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_create {
    __kind: 'create'
    id: bigint
    admin: MultiAddress
    minBalance: bigint
}

/**
 * Destroy all accounts associated with a given asset.
 * 
 * `destroy_accounts` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedAccounts` event.
 */
export interface CampaignAssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: bigint
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 * 
 * `destroy_approvals` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedApprovals` event.
 */
export interface CampaignAssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: bigint
}

/**
 * Complete destroying asset and unreserve currency.
 * 
 * `finish_destroy` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 * hand.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each successful call emits the `Event::Destroyed` event.
 */
export interface CampaignAssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: bigint
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 * value to account for the state bloat associated with its balance storage. If set to
 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 * an ED in the Balances pallet or whatever else is used to control user-account state
 * growth).
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_force_asset_status {
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
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 * account of the asset `id`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: bigint
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is returned.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: bigint
}

/**
 * Issue a new class of fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_force_create {
    __kind: 'force_create'
    id: bigint
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * Force the metadata for an asset to some value.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is left alone.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface CampaignAssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
    isFrozen: boolean
}

/**
 * Move some assets from one account to another.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `source`: The account to be debited.
 * - `dest`: The account to be credited.
 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the `source` balance above zero but
 * below the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 * `dest`.
 */
export interface CampaignAssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: bigint
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers from an account.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_freeze {
    __kind: 'freeze'
    id: bigint
    who: MultiAddress
}

/**
 * Disallow further unprivileged transfers for the asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: bigint
}

/**
 * Mint assets of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount minted.
 * - `beneficiary`: The account to be credited with the minted assets.
 * - `amount`: The amount of the asset to be minted.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface CampaignAssetsCall_mint {
    __kind: 'mint'
    id: bigint
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Return the deposit (if any) of an asset account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for the account to be created.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface CampaignAssetsCall_refund {
    __kind: 'refund'
    id: bigint
    allowBurn: boolean
}

/**
 * Set the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Funds of sender are reserved according to the formula:
 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 * account any already reserved funds.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: bigint
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * Change the Issuer, Admin and Freezer of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_set_team {
    __kind: 'set_team'
    id: bigint
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Start the process of destroying a fungible asset class.
 * 
 * `start_destroy` is the first in a series of extrinsics that should be called, to allow
 * destruction of an asset class.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * The asset class must be frozen before calling `start_destroy`.
 */
export interface CampaignAssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: bigint
}

/**
 * Allow unprivileged transfers from an account again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be unfrozen.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_thaw {
    __kind: 'thaw'
    id: bigint
    who: MultiAddress
}

/**
 * Allow unprivileged transfers for the asset again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: bigint
}

/**
 * Create an asset account for non-provider assets.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *   to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface CampaignAssetsCall_touch {
    __kind: 'touch'
    id: bigint
}

/**
 * Move some assets from the sender account to another.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface CampaignAssetsCall_transfer {
    __kind: 'transfer'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 * 
 * Origin must be Signed and there must be an approval in place by the `owner` to the
 * signer.
 * 
 * If the entire amount approved for transfer is transferred, then any deposit previously
 * reserved by `approve_transfer` is unreserved.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The account which previously approved for a transfer of at least `amount` and
 * from which the asset balance will be withdrawn.
 * - `destination`: The account to which the asset balance of `amount` will be transferred.
 * - `amount`: The amount of assets to transfer.
 * 
 * Emits `TransferredApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: bigint
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface CampaignAssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Change the Owner of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface CampaignAssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: bigint
    owner: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::SpendOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::SpendOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorizedCall = AuthorizedCall_authorize_market_outcome

/**
 * Overwrites already provided outcomes for the same market and account.
 */
export interface AuthorizedCall_authorize_market_outcome {
    __kind: 'authorize_market_outcome'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorMappingCall = AuthorMappingCall_add_association | AuthorMappingCall_clear_association | AuthorMappingCall_remove_keys | AuthorMappingCall_set_keys | AuthorMappingCall_update_association

/**
 * Register your NimbusId onchain so blocks you author are associated with your account.
 * 
 * Users who have been (or will soon be) elected active collators in staking,
 * should submit this extrinsic to have their blocks accepted and earn rewards.
 */
export interface AuthorMappingCall_add_association {
    __kind: 'add_association'
    nimbusId: Public
}

/**
 * Clear your Mapping.
 * 
 * This is useful when you are no longer an author and would like to re-claim your security
 * deposit.
 */
export interface AuthorMappingCall_clear_association {
    __kind: 'clear_association'
    nimbusId: Public
}

/**
 * Remove your Mapping.
 * 
 * This is useful when you are no longer an author and would like to re-claim your security
 * deposit.
 */
export interface AuthorMappingCall_remove_keys {
    __kind: 'remove_keys'
}

/**
 * Set association and session keys at once.
 * 
 * This is useful for key rotation to update Nimbus and VRF keys in one call.
 * No new security deposit is required. Will replace `update_association` which is kept
 * now for backwards compatibility reasons.
 */
export interface AuthorMappingCall_set_keys {
    __kind: 'set_keys'
    keys: Bytes
}

/**
 * Change your Mapping.
 * 
 * This is useful for normal key rotation or for when switching from one physical collator
 * machine to another. No new security deposit is required.
 * This sets keys to new_nimbus_id.into() by default.
 */
export interface AuthorMappingCall_update_association {
    __kind: 'update_association'
    oldNimbusId: Public
    newNimbusId: Public
}

export type Public = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorInherentCall = AuthorInherentCall_kick_off_authorship_validation

/**
 * This inherent is a workaround to run code after the "real" inherents have executed,
 * but before transactions are executed.
 */
export interface AuthorInherentCall_kick_off_authorship_validation {
    __kind: 'kick_off_authorship_validation'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorFilterCall = AuthorFilterCall_set_eligible

/**
 * Update the eligible count. Intended to be called by governance.
 */
export interface AuthorFilterCall_set_eligible {
    __kind: 'set_eligible'
    new: NonZeroU32
}

export type NonZeroU32 = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register_asset | AssetRegistryCall_update_asset

export interface AssetRegistryCall_register_asset {
    __kind: 'register_asset'
    metadata: AssetMetadata
    assetId?: (XcmAssetClass | undefined)
}

export interface AssetRegistryCall_update_asset {
    __kind: 'update_asset'
    assetId: XcmAssetClass
    decimals?: (number | undefined)
    name?: (Bytes | undefined)
    symbol?: (Bytes | undefined)
    existentialDeposit?: (bigint | undefined)
    location: Option<(VersionedMultiLocation | undefined)>
    additional?: (CustomMetadata | undefined)
}

export interface CustomMetadata {
    xcm: XcmMetadata
    allowAsBaseAsset: boolean
}

export interface XcmMetadata {
    feeFactor?: (bigint | undefined)
}

export interface AssetMetadata {
    decimals: number
    name: Bytes
    symbol: Bytes
    existentialDeposit: bigint
    location?: (VersionedMultiLocation | undefined)
    additional: CustomMetadata
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetManagerCall = AssetManagerCall_transfer | AssetManagerCall_transfer_native_currency | AssetManagerCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface AssetManagerCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: Asset
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface AssetManagerCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface AssetManagerCall_update_balance {
    __kind: 'update_balance'
    who: MultiAddress
    currencyId: Asset
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AdvisoryCommitteeMembershipCall = AdvisoryCommitteeMembershipCall_add_member | AdvisoryCommitteeMembershipCall_change_key | AdvisoryCommitteeMembershipCall_clear_prime | AdvisoryCommitteeMembershipCall_remove_member | AdvisoryCommitteeMembershipCall_reset_members | AdvisoryCommitteeMembershipCall_set_prime | AdvisoryCommitteeMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AdvisoryCommitteeCall = AdvisoryCommitteeCall_close | AdvisoryCommitteeCall_close_old_weight | AdvisoryCommitteeCall_disapprove_proposal | AdvisoryCommitteeCall_execute | AdvisoryCommitteeCall_propose | AdvisoryCommitteeCall_set_members | AdvisoryCommitteeCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface AdvisoryCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface AdvisoryCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface AdvisoryCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface AdvisoryCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

export const H256 = sts.bytes()

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        AdvisoryCommittee: AdvisoryCommitteeCall,
        AdvisoryCommitteeMembership: AdvisoryCommitteeMembershipCall,
        AssetManager: AssetManagerCall,
        AssetRegistry: AssetRegistryCall,
        AuthorFilter: AuthorFilterCall,
        AuthorInherent: AuthorInherentCall,
        AuthorMapping: AuthorMappingCall,
        Authorized: AuthorizedCall,
        Balances: BalancesCall,
        Bounties: BountiesCall,
        CampaignAssets: CampaignAssetsCall,
        Contracts: ContractsCall,
        Council: CouncilCall,
        CouncilMembership: CouncilMembershipCall,
        Court: CourtCall,
        CustomAssets: CustomAssetsCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
        GlobalDisputes: GlobalDisputesCall,
        HybridRouter: HybridRouterCall,
        Identity: IdentityCall,
        LiquidityMining: LiquidityMiningCall,
        MarketAssets: MarketAssetsCall,
        Multisig: MultisigCall,
        NeoSwaps: NeoSwapsCall,
        Orderbook: OrderbookCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        Parimutuel: ParimutuelCall,
        PolkadotXcm: PolkadotXcmCall,
        PredictionMarkets: PredictionMarketsCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Scheduler: SchedulerCall,
        SimpleDisputes: SimpleDisputesCall,
        Styx: StyxCall,
        Swaps: SwapsCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalCommitteeMembership: TechnicalCommitteeMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        XTokens: XTokensCall,
        XcmpQueue: XcmpQueueCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: XcmAssetClass,
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
            currencies: sts.array(() => sts.tuple(() => [XcmAssetClass, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: XcmAssetClass,
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

export const XcmAssetClass: sts.Type<XcmAssetClass> = sts.closedEnum(() => {
    return  {
        ForeignAsset: sts.number(),
        Ztg: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        startingBlock: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        AdvisoryCommittee: Type_315,
        Council: Type_316,
        CumulusXcm: Origin,
        PolkadotXcm: Type_319,
        TechnicalCommittee: Type_317,
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

export const Type_317: sts.Type<Type_317> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_319: sts.Type<Type_319> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_316: sts.Type<Type_316> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_315: sts.Type<Type_315> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalCommitteeMembershipCall: sts.Type<TechnicalCommitteeMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SwapsCall: sts.Type<SwapsCall> = sts.closedEnum(() => {
    return  {
        force_pool_exit: sts.enumStruct({
            who: AccountId32,
            poolId: sts.bigint(),
            poolAmount: sts.bigint(),
            minAssetsOut: sts.array(() => sts.bigint()),
        }),
        pool_exit: sts.enumStruct({
            poolId: sts.bigint(),
            poolAmount: sts.bigint(),
            minAssetsOut: sts.array(() => sts.bigint()),
        }),
        pool_exit_with_exact_asset_amount: sts.enumStruct({
            poolId: sts.bigint(),
            assetOut: Asset,
            assetAmount: sts.bigint(),
            maxPoolAmount: sts.bigint(),
        }),
        pool_exit_with_exact_pool_amount: sts.enumStruct({
            poolId: sts.bigint(),
            asset: Asset,
            poolAmount: sts.bigint(),
            minAssetAmount: sts.bigint(),
        }),
        pool_join: sts.enumStruct({
            poolId: sts.bigint(),
            poolAmount: sts.bigint(),
            maxAssetsIn: sts.array(() => sts.bigint()),
        }),
        pool_join_with_exact_asset_amount: sts.enumStruct({
            poolId: sts.bigint(),
            assetIn: Asset,
            assetAmount: sts.bigint(),
            minPoolAmount: sts.bigint(),
        }),
        pool_join_with_exact_pool_amount: sts.enumStruct({
            poolId: sts.bigint(),
            asset: Asset,
            poolAmount: sts.bigint(),
            maxAssetAmount: sts.bigint(),
        }),
        swap_exact_amount_in: sts.enumStruct({
            poolId: sts.bigint(),
            assetIn: Asset,
            assetAmountIn: sts.bigint(),
            assetOut: Asset,
            minAssetAmountOut: sts.option(() => sts.bigint()),
            maxPrice: sts.option(() => sts.bigint()),
        }),
        swap_exact_amount_out: sts.enumStruct({
            poolId: sts.bigint(),
            assetIn: Asset,
            maxAssetAmountIn: sts.option(() => sts.bigint()),
            assetOut: Asset,
            assetAmountOut: sts.bigint(),
            maxPrice: sts.option(() => sts.bigint()),
        }),
    }
})

export const Asset: sts.Type<Asset> = sts.closedEnum(() => {
    return  {
        CampaignAsset: sts.bigint(),
        CategoricalOutcome: sts.tuple(() => [sts.bigint(), sts.number()]),
        CustomAsset: sts.bigint(),
        ForeignAsset: sts.number(),
        ParimutuelShare: sts.tuple(() => [sts.bigint(), sts.number()]),
        PoolShare: sts.bigint(),
        ScalarOutcome: sts.tuple(() => [sts.bigint(), ScalarPosition]),
        Ztg: sts.unit(),
    }
})

export const ScalarPosition: sts.Type<ScalarPosition> = sts.closedEnum(() => {
    return  {
        Long: sts.unit(),
        Short: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const StyxCall: sts.Type<StyxCall> = sts.closedEnum(() => {
    return  {
        cross: sts.unit(),
        set_burn_amount: sts.enumStruct({
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SimpleDisputesCall: sts.Type<SimpleDisputesCall> = sts.closedEnum(() => {
    return  {
        suggest_outcome: sts.enumStruct({
            marketId: sts.bigint(),
            outcome: OutcomeReport,
        }),
    }
})

export const OutcomeReport: sts.Type<OutcomeReport> = sts.closedEnum(() => {
    return  {
        Categorical: sts.number(),
        Scalar: sts.bigint(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.bigint(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.bigint(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.bigint(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.bigint(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.bigint(),
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
            delay: sts.bigint(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        BuySellCompleteSets: sts.unit(),
        CancelProxy: sts.unit(),
        CreateEditMarket: sts.unit(),
        Dispute: sts.unit(),
        Governance: sts.unit(),
        HandleAssets: sts.unit(),
        ProvideLiquidity: sts.unit(),
        ReportOutcome: sts.unit(),
        Staking: sts.unit(),
        Trading: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PredictionMarketsCall: sts.Type<PredictionMarketsCall> = sts.closedEnum(() => {
    return  {
        admin_move_market_to_closed: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        admin_move_market_to_resolved: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        approve_market: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        buy_complete_set: sts.enumStruct({
            marketId: sts.bigint(),
            amount: sts.bigint(),
        }),
        close_trusted_market: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        create_market: sts.enumStruct({
            baseAsset: BaseAssetClass,
            creatorFee: Perbill,
            oracle: AccountId32,
            period: MarketPeriod,
            deadlines: Deadlines,
            metadata: MultiHash,
            creation: MarketCreation,
            marketType: MarketType,
            disputeMechanism: sts.option(() => MarketDisputeMechanism),
            scoringRule: ScoringRule,
        }),
        create_market_and_deploy_pool: sts.enumStruct({
            baseAsset: BaseAssetClass,
            creatorFee: Perbill,
            oracle: AccountId32,
            period: MarketPeriod,
            deadlines: Deadlines,
            metadata: MultiHash,
            marketType: MarketType,
            disputeMechanism: sts.option(() => MarketDisputeMechanism),
            amount: sts.bigint(),
            spotPrices: sts.array(() => sts.bigint()),
            swapFee: sts.bigint(),
        }),
        dispute: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        dispute_early_close: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        edit_market: sts.enumStruct({
            baseAsset: BaseAssetClass,
            marketId: sts.bigint(),
            oracle: AccountId32,
            period: MarketPeriod,
            deadlines: Deadlines,
            metadata: MultiHash,
            marketType: MarketType,
            disputeMechanism: sts.option(() => MarketDisputeMechanism),
            scoringRule: ScoringRule,
        }),
        manually_close_market: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        redeem_shares: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        reject_early_close: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        reject_market: sts.enumStruct({
            marketId: sts.bigint(),
            rejectReason: sts.bytes(),
        }),
        report: sts.enumStruct({
            marketId: sts.bigint(),
            outcome: OutcomeReport,
        }),
        request_edit: sts.enumStruct({
            marketId: sts.bigint(),
            editReason: sts.bytes(),
        }),
        schedule_early_close: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        sell_complete_set: sts.enumStruct({
            marketId: sts.bigint(),
            amount: sts.bigint(),
        }),
        start_global_dispute: sts.enumStruct({
            marketId: sts.bigint(),
        }),
    }
})

export const ScoringRule: sts.Type<ScoringRule> = sts.closedEnum(() => {
    return  {
        AmmCdaHybrid: sts.unit(),
        Parimutuel: sts.unit(),
    }
})

export const MarketDisputeMechanism: sts.Type<MarketDisputeMechanism> = sts.closedEnum(() => {
    return  {
        Authorized: sts.unit(),
        Court: sts.unit(),
        SimpleDisputes: sts.unit(),
    }
})

export const MarketType: sts.Type<MarketType> = sts.closedEnum(() => {
    return  {
        Categorical: sts.number(),
        Scalar: RangeInclusive,
    }
})

export const RangeInclusive: sts.Type<RangeInclusive> = sts.struct(() => {
    return  {
        start: sts.bigint(),
        end: sts.bigint(),
    }
})

export const MarketCreation: sts.Type<MarketCreation> = sts.closedEnum(() => {
    return  {
        Advised: sts.unit(),
        Permissionless: sts.unit(),
    }
})

export const MultiHash: sts.Type<MultiHash> = sts.closedEnum(() => {
    return  {
        Sha3_384: sts.bytes(),
    }
})

export const Deadlines: sts.Type<Deadlines> = sts.struct(() => {
    return  {
        gracePeriod: sts.bigint(),
        oracleDuration: sts.bigint(),
        disputeDuration: sts.bigint(),
    }
})

export const MarketPeriod: sts.Type<MarketPeriod> = sts.closedEnum(() => {
    return  {
        Block: Range,
        Timestamp: Range,
    }
})

export const Range: sts.Type<Range> = sts.struct(() => {
    return  {
        start: sts.bigint(),
        end: sts.bigint(),
    }
})

export const Perbill = sts.number()

export const BaseAssetClass: sts.Type<BaseAssetClass> = sts.closedEnum(() => {
    return  {
        CampaignAsset: sts.bigint(),
        ForeignAsset: sts.number(),
        Ztg: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_378,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            xcmVersion: sts.number(),
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
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

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

export const Type_378: sts.Type<Type_378> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_381),
        V3: sts.array(() => Type_385),
    }
})

export const Type_385: sts.Type<Type_385> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_385),
        SetErrorHandler: sts.array(() => Type_385),
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
            call: Type_382,
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

export const Type_382: sts.Type<Type_382> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_381: sts.Type<Type_381> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_381),
        SetErrorHandler: sts.array(() => Type_381),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_382,
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParimutuelCall: sts.Type<ParimutuelCall> = sts.closedEnum(() => {
    return  {
        buy: sts.enumStruct({
            asset: ParimutuelAssetClass,
            amount: sts.bigint(),
        }),
        claim_refunds: sts.enumStruct({
            refundAsset: ParimutuelAssetClass,
        }),
        claim_rewards: sts.enumStruct({
            marketId: sts.bigint(),
        }),
    }
})

export const ParimutuelAssetClass: sts.Type<ParimutuelAssetClass> = sts.closedEnum(() => {
    return  {
        Share: sts.tuple(() => [sts.bigint(), sts.number()]),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
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
        validationData: V2PersistedValidationData,
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

export const V2PersistedValidationData: sts.Type<V2PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainStakingCall: sts.Type<ParachainStakingCall> = sts.closedEnum(() => {
    return  {
        cancel_candidate_bond_less: sts.unit(),
        cancel_delegation_request: sts.enumStruct({
            candidate: AccountId32,
        }),
        cancel_leave_candidates: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        cancel_leave_delegators: sts.unit(),
        candidate_bond_more: sts.enumStruct({
            more: sts.bigint(),
        }),
        delegate: sts.enumStruct({
            candidate: AccountId32,
            amount: sts.bigint(),
            candidateDelegationCount: sts.number(),
            delegationCount: sts.number(),
        }),
        delegate_with_auto_compound: sts.enumStruct({
            candidate: AccountId32,
            amount: sts.bigint(),
            autoCompound: Percent,
            candidateDelegationCount: sts.number(),
            candidateAutoCompoundingDelegationCount: sts.number(),
            delegationCount: sts.number(),
        }),
        delegator_bond_more: sts.enumStruct({
            candidate: AccountId32,
            more: sts.bigint(),
        }),
        execute_candidate_bond_less: sts.enumStruct({
            candidate: AccountId32,
        }),
        execute_delegation_request: sts.enumStruct({
            delegator: AccountId32,
            candidate: AccountId32,
        }),
        execute_leave_candidates: sts.enumStruct({
            candidate: AccountId32,
            candidateDelegationCount: sts.number(),
        }),
        execute_leave_delegators: sts.enumStruct({
            delegator: AccountId32,
            delegationCount: sts.number(),
        }),
        go_offline: sts.unit(),
        go_online: sts.unit(),
        hotfix_remove_delegation_requests_exited_candidates: sts.enumStruct({
            candidates: sts.array(() => AccountId32),
        }),
        join_candidates: sts.enumStruct({
            bond: sts.bigint(),
            candidateCount: sts.number(),
        }),
        schedule_candidate_bond_less: sts.enumStruct({
            less: sts.bigint(),
        }),
        schedule_delegator_bond_less: sts.enumStruct({
            candidate: AccountId32,
            less: sts.bigint(),
        }),
        schedule_leave_candidates: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        schedule_leave_delegators: sts.unit(),
        schedule_revoke_delegation: sts.enumStruct({
            collator: AccountId32,
        }),
        set_auto_compound: sts.enumStruct({
            candidate: AccountId32,
            value: Percent,
            candidateAutoCompoundingDelegationCountHint: sts.number(),
            delegationCountHint: sts.number(),
        }),
        set_blocks_per_round: sts.enumStruct({
            new: sts.number(),
        }),
        set_collator_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_inflation: sts.enumStruct({
            schedule: Type_360,
        }),
        set_parachain_bond_account: sts.enumStruct({
            new: AccountId32,
        }),
        set_parachain_bond_reserve_percent: sts.enumStruct({
            new: Percent,
        }),
        set_staking_expectations: sts.enumStruct({
            expectations: Type_359,
        }),
        set_total_selected: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

export const Type_359: sts.Type<Type_359> = sts.struct(() => {
    return  {
        min: sts.bigint(),
        ideal: sts.bigint(),
        max: sts.bigint(),
    }
})

export const Type_360: sts.Type<Type_360> = sts.struct(() => {
    return  {
        min: Perbill,
        ideal: Perbill,
        max: Perbill,
    }
})

export const Percent = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const OrderbookCall: sts.Type<OrderbookCall> = sts.closedEnum(() => {
    return  {
        fill_order: sts.enumStruct({
            orderId: sts.bigint(),
            makerPartialFill: sts.option(() => sts.bigint()),
        }),
        place_order: sts.enumStruct({
            marketId: sts.bigint(),
            makerAsset: Asset,
            makerAmount: sts.bigint(),
            takerAsset: Asset,
            takerAmount: sts.bigint(),
        }),
        remove_order: sts.enumStruct({
            orderId: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const NeoSwapsCall: sts.Type<NeoSwapsCall> = sts.closedEnum(() => {
    return  {
        buy: sts.enumStruct({
            marketId: sts.bigint(),
            assetCount: sts.number(),
            assetOut: Asset,
            amountIn: sts.bigint(),
            minAmountOut: sts.bigint(),
        }),
        deploy_pool: sts.enumStruct({
            marketId: sts.bigint(),
            amount: sts.bigint(),
            spotPrices: sts.array(() => sts.bigint()),
            swapFee: sts.bigint(),
        }),
        exit: sts.enumStruct({
            marketId: sts.bigint(),
            poolSharesAmountOut: sts.bigint(),
            minAmountsOut: sts.array(() => sts.bigint()),
        }),
        join: sts.enumStruct({
            marketId: sts.bigint(),
            poolSharesAmount: sts.bigint(),
            maxAmountsIn: sts.array(() => sts.bigint()),
        }),
        sell: sts.enumStruct({
            marketId: sts.bigint(),
            assetCount: sts.number(),
            assetIn: Asset,
            amountIn: sts.bigint(),
            minAmountOut: sts.bigint(),
        }),
        withdraw_fees: sts.enumStruct({
            marketId: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        height: sts.bigint(),
        index: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const MarketAssetsCall: sts.Type<MarketAssetsCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: MarketAssetClass,
            delegate: MultiAddress,
            amount: sts.bigint(),
        }),
        burn: sts.enumStruct({
            id: MarketAssetClass,
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        cancel_approval: sts.enumStruct({
            id: MarketAssetClass,
            delegate: MultiAddress,
        }),
        clear_metadata: sts.enumStruct({
            id: MarketAssetClass,
        }),
        create: sts.enumStruct({
            id: MarketAssetClass,
            admin: MultiAddress,
            minBalance: sts.bigint(),
        }),
        destroy_accounts: sts.enumStruct({
            id: MarketAssetClass,
        }),
        destroy_approvals: sts.enumStruct({
            id: MarketAssetClass,
        }),
        finish_destroy: sts.enumStruct({
            id: MarketAssetClass,
        }),
        force_asset_status: sts.enumStruct({
            id: MarketAssetClass,
            owner: MultiAddress,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
            minBalance: sts.bigint(),
            isSufficient: sts.boolean(),
            isFrozen: sts.boolean(),
        }),
        force_cancel_approval: sts.enumStruct({
            id: MarketAssetClass,
            owner: MultiAddress,
            delegate: MultiAddress,
        }),
        force_clear_metadata: sts.enumStruct({
            id: MarketAssetClass,
        }),
        force_create: sts.enumStruct({
            id: MarketAssetClass,
            owner: MultiAddress,
            isSufficient: sts.boolean(),
            minBalance: sts.bigint(),
        }),
        force_set_metadata: sts.enumStruct({
            id: MarketAssetClass,
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
            isFrozen: sts.boolean(),
        }),
        force_transfer: sts.enumStruct({
            id: MarketAssetClass,
            source: MultiAddress,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            id: MarketAssetClass,
            who: MultiAddress,
        }),
        freeze_asset: sts.enumStruct({
            id: MarketAssetClass,
        }),
        mint: sts.enumStruct({
            id: MarketAssetClass,
            beneficiary: MultiAddress,
            amount: sts.bigint(),
        }),
        refund: sts.enumStruct({
            id: MarketAssetClass,
            allowBurn: sts.boolean(),
        }),
        set_metadata: sts.enumStruct({
            id: MarketAssetClass,
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        }),
        set_team: sts.enumStruct({
            id: MarketAssetClass,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
        }),
        start_destroy: sts.enumStruct({
            id: MarketAssetClass,
        }),
        thaw: sts.enumStruct({
            id: MarketAssetClass,
            who: MultiAddress,
        }),
        thaw_asset: sts.enumStruct({
            id: MarketAssetClass,
        }),
        touch: sts.enumStruct({
            id: MarketAssetClass,
        }),
        transfer: sts.enumStruct({
            id: MarketAssetClass,
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_approved: sts.enumStruct({
            id: MarketAssetClass,
            owner: MultiAddress,
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            id: MarketAssetClass,
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_ownership: sts.enumStruct({
            id: MarketAssetClass,
            owner: MultiAddress,
        }),
    }
})

export const MarketAssetClass: sts.Type<MarketAssetClass> = sts.closedEnum(() => {
    return  {
        CategoricalOutcome: sts.tuple(() => [sts.bigint(), sts.number()]),
        ParimutuelShare: sts.tuple(() => [sts.bigint(), sts.number()]),
        PoolShare: sts.bigint(),
        ScalarOutcome: sts.tuple(() => [sts.bigint(), ScalarPosition]),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const LiquidityMiningCall: sts.Type<LiquidityMiningCall> = sts.closedEnum(() => {
    return  {
        set_per_block_distribution: sts.enumStruct({
            perBlockDistribution: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const HybridRouterCall: sts.Type<HybridRouterCall> = sts.closedEnum(() => {
    return  {
        buy: sts.enumStruct({
            marketId: sts.bigint(),
            assetCount: sts.number(),
            asset: Asset,
            amountIn: sts.bigint(),
            maxPrice: sts.bigint(),
            orders: sts.array(() => sts.bigint()),
            strategy: Strategy,
        }),
        sell: sts.enumStruct({
            marketId: sts.bigint(),
            assetCount: sts.number(),
            asset: Asset,
            amountIn: sts.bigint(),
            minPrice: sts.bigint(),
            orders: sts.array(() => sts.bigint()),
            strategy: Strategy,
        }),
    }
})

export const Strategy: sts.Type<Strategy> = sts.closedEnum(() => {
    return  {
        ImmediateOrCancel: sts.unit(),
        LimitOrder: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const GlobalDisputesCall: sts.Type<GlobalDisputesCall> = sts.closedEnum(() => {
    return  {
        add_vote_outcome: sts.enumStruct({
            marketId: sts.bigint(),
            outcome: OutcomeReport,
        }),
        purge_outcomes: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        refund_vote_fees: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        reward_outcome_owner: sts.enumStruct({
            marketId: sts.bigint(),
        }),
        unlock_vote_balance: sts.enumStruct({
            voter: MultiAddress,
        }),
        vote_on_outcome: sts.enumStruct({
            marketId: sts.bigint(),
            outcome: OutcomeReport,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
            votingPeriod: sts.bigint(),
            delay: sts.bigint(),
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
            vote: sts.number(),
            balance: sts.bigint(),
        }),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CustomAssetsCall: sts.Type<CustomAssetsCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
            amount: sts.bigint(),
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
        set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CourtCall: sts.Type<CourtCall> = sts.closedEnum(() => {
    return  {
        appeal: sts.enumStruct({
            courtId: sts.bigint(),
        }),
        delegate: sts.enumStruct({
            amount: sts.bigint(),
            delegations: sts.array(() => AccountId32),
        }),
        denounce_vote: sts.enumStruct({
            courtId: sts.bigint(),
            juror: MultiAddress,
            voteItem: VoteItem,
            salt: H256,
        }),
        exit_court: sts.enumStruct({
            courtParticipant: MultiAddress,
        }),
        join_court: sts.enumStruct({
            amount: sts.bigint(),
        }),
        prepare_exit_court: sts.unit(),
        reassign_court_stakes: sts.enumStruct({
            courtId: sts.bigint(),
        }),
        reveal_vote: sts.enumStruct({
            courtId: sts.bigint(),
            voteItem: VoteItem,
            salt: H256,
        }),
        set_inflation: sts.enumStruct({
            inflation: Perbill,
        }),
        vote: sts.enumStruct({
            courtId: sts.bigint(),
            commitmentVote: H256,
        }),
    }
})

export const VoteItem: sts.Type<VoteItem> = sts.closedEnum(() => {
    return  {
        Binary: sts.boolean(),
        Outcome: OutcomeReport,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CouncilMembershipCall: sts.Type<CouncilMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        AllowIndeterminism: sts.unit(),
        Deterministic: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CampaignAssetsCall: sts.Type<CampaignAssetsCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
            amount: sts.bigint(),
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
        set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorizedCall: sts.Type<AuthorizedCall> = sts.closedEnum(() => {
    return  {
        authorize_market_outcome: sts.enumStruct({
            marketId: sts.bigint(),
            outcome: OutcomeReport,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorMappingCall: sts.Type<AuthorMappingCall> = sts.closedEnum(() => {
    return  {
        add_association: sts.enumStruct({
            nimbusId: Public,
        }),
        clear_association: sts.enumStruct({
            nimbusId: Public,
        }),
        remove_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: sts.bytes(),
        }),
        update_association: sts.enumStruct({
            oldNimbusId: Public,
            newNimbusId: Public,
        }),
    }
})

export const Public = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorInherentCall: sts.Type<AuthorInherentCall> = sts.closedEnum(() => {
    return  {
        kick_off_authorship_validation: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorFilterCall: sts.Type<AuthorFilterCall> = sts.closedEnum(() => {
    return  {
        set_eligible: sts.enumStruct({
            new: NonZeroU32,
        }),
    }
})

export const NonZeroU32 = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetRegistryCall: sts.Type<AssetRegistryCall> = sts.closedEnum(() => {
    return  {
        register_asset: sts.enumStruct({
            metadata: AssetMetadata,
            assetId: sts.option(() => XcmAssetClass),
        }),
        update_asset: sts.enumStruct({
            assetId: XcmAssetClass,
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
        xcm: XcmMetadata,
        allowAsBaseAsset: sts.boolean(),
    }
})

export const XcmMetadata: sts.Type<XcmMetadata> = sts.struct(() => {
    return  {
        feeFactor: sts.option(() => sts.bigint()),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetManagerCall: sts.Type<AssetManagerCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: Asset,
            amount: sts.bigint(),
        }),
        transfer_native_currency: sts.enumStruct({
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        update_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: Asset,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AdvisoryCommitteeMembershipCall: sts.Type<AdvisoryCommitteeMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AdvisoryCommitteeCall: sts.Type<AdvisoryCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
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
