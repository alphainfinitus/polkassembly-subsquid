import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AssetRegistry | Call_Balances | Call_Bounties | Call_ChildBounties | Call_ClientsInfo | Call_Contracts | Call_Council | Call_Currencies | Call_Democracy | Call_DiaOracleModule | Call_DmpQueue | Call_Farming | Call_Fee | Call_Identity | Call_Issue | Call_Multisig | Call_Nomination | Call_Oracle | Call_ParachainStaking | Call_ParachainSystem | Call_PolkadotXcm | Call_PooledVaultRewards | Call_Preimage | Call_Proxy | Call_Redeem | Call_Replace | Call_RewardDistribution | Call_Scheduler | Call_Security | Call_Session | Call_StellarRelay | Call_System | Call_TechnicalCommittee | Call_Timestamp | Call_TokenAllowance | Call_Tokens | Call_Treasury | Call_TreasuryBuyoutExtension | Call_Utility | Call_VaultRegistry | Call_Vesting | Call_VestingManager | Call_XTokens | Call_XcmpQueue | Call_ZenlinkProtocol

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ZenlinkProtocolCall = ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_withdraw_reward | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_transfer

/**
 * Provide liquidity to a pair.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
 * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
 * - `amount_0_min`: Minimum amount of asset_0 added to the pair
 * - `amount_1_min`: Minimum amount of asset_1 added to the pair
 * - `deadline`: Height of the cutoff block of this transaction
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

export interface ZenlinkProtocolCall_bootstrap_charge_reward {
    __kind: 'bootstrap_charge_reward'
    asset0: AssetId
    asset1: AssetId
    chargeRewards: [AssetId, bigint][]
}

/**
 * Claim lp asset from a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
    __kind: 'bootstrap_claim'
    recipient: MultiAddress
    asset0: AssetId
    asset1: AssetId
    deadline: number
}

/**
 * Contribute some asset to a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
 * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
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
 * Create bootstrap pair
 * 
 * The order of asset don't affect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `target_supply_0`: Target amount of asset_0 total contribute
 * - `target_supply_0`: Target amount of asset_1 total contribute
 * - `capacity_supply_0`: The max amount of asset_0 total contribute
 * - `capacity_supply_1`: The max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
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
 * End a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_end {
    __kind: 'bootstrap_end'
    asset0: AssetId
    asset1: AssetId
}

/**
 * Contributor refund from disable bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
    __kind: 'bootstrap_refund'
    asset0: AssetId
    asset1: AssetId
}

/**
 * update a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `min_contribution_0`: The new min amount of asset_0 contribute
 * - `min_contribution_0`: The new min amount of asset_1 contribute
 * - `target_supply_0`: The new target amount of asset_0 total contribute
 * - `target_supply_0`: The new target amount of asset_1 total contribute
 * - `capacity_supply_0`: The new max amount of asset_0 total contribute
 * - `capacity_supply_1`: The new max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
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

export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
    __kind: 'bootstrap_withdraw_reward'
    asset0: AssetId
    asset1: AssetId
    recipient: MultiAddress
}

/**
 * Create pair by two assets.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up Pair
 * - `asset_1`: Asset which make up Pair
 */
export interface ZenlinkProtocolCall_create_pair {
    __kind: 'create_pair'
    asset0: AssetId
    asset1: AssetId
}

/**
 * Extract liquidity.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
 * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
 * - `recipient`: Account that accepts withdrawal of assets
 * - `deadline`: Height of the cutoff block of this transaction
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
 * Set the protocol fee point.
 * 
 * # Arguments
 * 
 * - `fee_point`:
 * 0 means that all exchange fees belong to the liquidity provider.
 * 30 means that all exchange fees belong to the fee receiver.
 */
export interface ZenlinkProtocolCall_set_fee_point {
    __kind: 'set_fee_point'
    feePoint: number
}

/**
 * Set the new receiver of the protocol fee.
 * 
 * # Arguments
 * 
 * - `send_to`:
 * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
 * (2) None: it turn off the protocol fee.
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
    __kind: 'set_fee_receiver'
    sendTo?: (MultiAddress | undefined)
}

/**
 * Buy amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_out`: Amount of the foreign will be bought
 * - `amount_in_max`: Maximum amount of sold foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
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
 * Sell amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_in`: Amount of the foreign will be sold
 * - `amount_out_min`: Minimum amount of target foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
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
 * Move some assets from one holder to another.
 * 
 * # Arguments
 * 
 * - `asset_id`: The foreign id.
 * - `target`: The receiver of the foreign.
 * - `amount`: The amount of the foreign to transfer.
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

export interface AssetId {
    chainId: number
    assetType: number
    assetIndex: bigint
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
    currencyId: CurrencyId
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
    currencies: [CurrencyId, bigint][]
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingManagerCall = VestingManagerCall_remove_vesting_schedule

export interface VestingManagerCall_remove_vesting_schedule {
    __kind: 'remove_vesting_schedule'
    who: MultiAddress
    scheduleIndex: number
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VaultRegistryCall = VaultRegistryCall_accept_new_issues | VaultRegistryCall_deposit_collateral | VaultRegistryCall_recover_vault_id | VaultRegistryCall_register_public_key | VaultRegistryCall_register_vault | VaultRegistryCall_report_undercollateralized_vault | VaultRegistryCall_set_custom_secure_threshold | VaultRegistryCall_set_liquidation_collateral_threshold | VaultRegistryCall_set_minimum_collateral | VaultRegistryCall_set_premium_redeem_threshold | VaultRegistryCall_set_punishment_delay | VaultRegistryCall_set_secure_collateral_threshold | VaultRegistryCall_set_system_collateral_ceiling | VaultRegistryCall_withdraw_collateral

/**
 * Configures whether or not the vault accepts new issues.
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction (i.e. the vault)
 * * `accept_new_issues` - true indicates that the vault accepts new issues
 * 
 * # Weight: `O(1)`
 */
export interface VaultRegistryCall_accept_new_issues {
    __kind: 'accept_new_issues'
    currencyPair: VaultCurrencyPair
    acceptNewIssues: boolean
}

/**
 * Deposit collateral as a security against stealing the
 * Stellar assets locked with the caller.
 * 
 * # Arguments
 * * `amount` - the amount of extra collateral to lock
 */
export interface VaultRegistryCall_deposit_collateral {
    __kind: 'deposit_collateral'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * Recover vault ID from a liquidated status.
 * 
 * # Arguments
 * * `currency_pair` - the currency pair to change
 */
export interface VaultRegistryCall_recover_vault_id {
    __kind: 'recover_vault_id'
    currencyPair: VaultCurrencyPair
}

/**
 * Registers a new Stellar address for the vault.
 * 
 * # Arguments
 * * `public_key` - the Stellar public key of the vault to update
 */
export interface VaultRegistryCall_register_public_key {
    __kind: 'register_public_key'
    publicKey: Bytes
}

/**
 * Initiates the registration procedure for a new Vault.
 * The Vault locks up collateral, which is to be used in the issuing process.
 * 
 * 
 * # Errors
 * * `InsufficientVaultCollateralAmount` - if the collateral is below the minimum threshold
 * * `VaultAlreadyRegistered` - if a vault is already registered for the origin account
 * * `InsufficientCollateralAvailable` - if the vault does not own enough collateral
 */
export interface VaultRegistryCall_register_vault {
    __kind: 'register_vault'
    currencyPair: VaultCurrencyPair
    collateral: bigint
}

export interface VaultRegistryCall_report_undercollateralized_vault {
    __kind: 'report_undercollateralized_vault'
    vaultId: VaultId
}

/**
 * Configures a custom, higher secure collateral threshold for the vault.
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction (i.e. the vault)
 * * `custom_threshold` - either the threshold, or None to use the systemwide default
 * 
 * # Weight: `O(1)`
 */
export interface VaultRegistryCall_set_custom_secure_threshold {
    __kind: 'set_custom_secure_threshold'
    currencyPair: VaultCurrencyPair
    customThreshold?: (FixedU128 | undefined)
}

/**
 * Changes the collateral liquidation threshold for a currency (only executable by the Root
 * account)
 * 
 * # Arguments
 * * `currency_pair` - the currency pair to change
 * * `ceiling` - the new collateral ceiling
 */
export interface VaultRegistryCall_set_liquidation_collateral_threshold {
    __kind: 'set_liquidation_collateral_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

/**
 * Changes the minimum amount of collateral required for registration
 * (only executable by the Root account)
 * 
 * # Arguments
 * * `currency_id` - the collateral's currency id
 * * `minimum` - the new minimum collateral
 */
export interface VaultRegistryCall_set_minimum_collateral {
    __kind: 'set_minimum_collateral'
    currencyId: CurrencyId
    minimum: bigint
}

/**
 * Changes the collateral premium redeem threshold for a currency (only executable by the
 * Root account)
 * 
 * # Arguments
 * * `currency_pair` - the currency pair to change
 * * `ceiling` - the new collateral ceiling
 */
export interface VaultRegistryCall_set_premium_redeem_threshold {
    __kind: 'set_premium_redeem_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

export interface VaultRegistryCall_set_punishment_delay {
    __kind: 'set_punishment_delay'
    punishmentDelay: number
}

/**
 * Changes the secure threshold for a currency (only executable by the Root account)
 * 
 * # Arguments
 * * `currency_pair` - the currency pair to change
 * * `threshold` - the new secure threshold
 */
export interface VaultRegistryCall_set_secure_collateral_threshold {
    __kind: 'set_secure_collateral_threshold'
    currencyPair: VaultCurrencyPair
    threshold: FixedU128
}

/**
 * Changes the collateral ceiling for a currency (only executable by the Root account)
 * 
 * # Arguments
 * * `currency_pair` - the currency pair to change
 * * `ceiling` - the new collateral ceiling
 */
export interface VaultRegistryCall_set_system_collateral_ceiling {
    __kind: 'set_system_collateral_ceiling'
    currencyPair: VaultCurrencyPair
    ceiling: bigint
}

/**
 * Withdraws `amount` of the collateral from the amount locked by
 * the vault corresponding to the origin account
 * The collateral left after withdrawal must be more
 * (free or used in collateral issued tokens) than MinimumCollateralVault
 * and above the SecureCollateralThreshold. Collateral that is currently
 * being used to back issued tokens remains locked until the Vault
 * is used for a redeem request (full release can take multiple redeem requests).
 * 
 * # Arguments
 * * `amount` - the amount of collateral to withdraw
 * 
 * # Errors
 * * `VaultNotFound` - if no vault exists for the origin account
 * * `InsufficientCollateralAvailable` - if the vault does not own enough collateral
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_311
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_314
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_312
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

export type Type_312 = Type_312_Member | Type_312_Members | Type_312__Phantom

export interface Type_312_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_312_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_312__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export type Type_314 = Type_314_Relay | Type_314_SiblingParachain

export interface Type_314_Relay {
    __kind: 'Relay'
}

export interface Type_314_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_311 = Type_311_Member | Type_311_Members | Type_311__Phantom

export interface Type_311_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_311_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_311__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryBuyoutExtensionCall = TreasuryBuyoutExtensionCall_buyout | TreasuryBuyoutExtensionCall_update_allowed_assets | TreasuryBuyoutExtensionCall_update_buyout_limit

/**
 * Allows caller to buyout a given amount of native token.
 * When denoting the `amount` as `Buyout` the caller will receive this exact amount of the native token in exchange for a corresponding amount of an allowed asset.
 * When denoting the `amount` as `Exchange`, the caller will spend this exact amount of an allowed asset in exchange for a corresponding amount of the native token.
 * 
 * Parameters
 * 
 * - `origin`: Caller's origin.
 * - `asset`: Exchange asset used for buyout of basic asset.
 * - `amount`: Amount of basic asset to buyout or amount of asset to exchange.
 * 
 * Emits `Buyout` event when successful.
 */
export interface TreasuryBuyoutExtensionCall_buyout {
    __kind: 'buyout'
    asset: CurrencyId
    amount: Amount
}

/**
 * Allows root to update the allowed currencies for buyout.
 * `AllowedCurrencies` storage will be reset and updated with provided `assets`.
 * 
 * Parameters
 * 
 * - `origin`: Origin must be root.
 * - `assets`: List of assets to be inserted into `AllowedCurrencies` storage.
 * 
 * Emits `AllowedAssetsForBuyoutUpdated` event when successful.
 */
export interface TreasuryBuyoutExtensionCall_update_allowed_assets {
    __kind: 'update_allowed_assets'
    assets: CurrencyId[]
}

/**
 * Allows root to update the buyout limit.
 * 
 * Parameters
 * 
 * - `origin`: Origin must be root.
 * - `limit`: New buyout limit. If None, then buyouts are not limited.
 * 
 * Emits `BuyoutLimitUpdated` event when successful.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * ## Complexity
 *  - O(1).
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
 * ## Complexity
 * - O(1)
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
 * ## Complexity
 * - O(1)
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
 * ## Complexity
 * - O(A) where `A` is the number of approvals
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
export type TokensCall = TokensCall_force_transfer | TokensCall_set_balance | TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    currencyId: CurrencyId
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    currencyId: CurrencyId
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokenAllowanceCall = TokenAllowanceCall_add_allowed_currencies | TokenAllowanceCall_approve | TokenAllowanceCall_remove_allowed_currencies | TokenAllowanceCall_transfer_from

/**
 * Added allowed currencies that possible to use chain extension
 * 
 * # Arguments
 * * `currencies` - list of currency id allowed to use in chain extension
 */
export interface TokenAllowanceCall_add_allowed_currencies {
    __kind: 'add_allowed_currencies'
    currencies: CurrencyId[]
}

/**
 * Approve an amount for another account to spend on owner's behalf.
 * 
 * # Arguments
 * * `id` - the currency_id of the asset to approve
 * * `delegate` - the spender account to approve the asset for
 * * `amount` - the amount of the asset to approve
 */
export interface TokenAllowanceCall_approve {
    __kind: 'approve'
    id: CurrencyId
    delegate: AccountId32
    amount: bigint
}

/**
 * Remove allowed currencies that possible to use chain extension
 * 
 * # Arguments
 * * `currencies` - list of currency id allowed to use in chain extension
 */
export interface TokenAllowanceCall_remove_allowed_currencies {
    __kind: 'remove_allowed_currencies'
    currencies: CurrencyId[]
}

/**
 * Execute a pre-approved transfer from another account
 * 
 * # Arguments
 * * `id` - the currency_id of the asset to transfer
 * * `owner` - the owner account of the asset to transfer
 * * `destination` - the destination account to transfer to
 * * `amount` - the amount of the asset to transfer
 */
export interface TokenAllowanceCall_transfer_from {
    __kind: 'transfer_from'
    id: CurrencyId
    owner: AccountId32
    destination: AccountId32
    amount: bigint
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
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
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
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
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
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
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
 * ## Complexity
 * - `O(1)`
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
 * ## Complexity
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * ## Complexity
 * - `O(C)` where `C` length of `code`
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
export type StellarRelayCall = StellarRelayCall_update_tier_1_validator_set

/**
 * This extrinsic is used to update the current sets of validators and
 * organizations. The current values of validators and organizations are moved to the
 * OldValidators and OldOrganizations respectively, and the function arguments are stored
 * as new/current values. The `enactment_block_height` parameter is used by the
 * `validate_stellar_transaction` function to determine if it should use the 'old' or
 * updated sets for validation. This makes a seamless transition between old and new
 * validators possible.
 * 
 * It can only be called by the root origin.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SecurityCall = SecurityCall_insert_parachain_error | SecurityCall_remove_parachain_error | SecurityCall_set_parachain_status

/**
 * Insert a new parachain error.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `error_code` - the error code to insert
 * 
 * # Weight: `O(1)`
 */
export interface SecurityCall_insert_parachain_error {
    __kind: 'insert_parachain_error'
    errorCode: ErrorCode
}

/**
 * Remove a parachain error.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `error_code` - the error code to remove
 * 
 * # Weight: `O(1)`
 */
export interface SecurityCall_remove_parachain_error {
    __kind: 'remove_parachain_error'
    errorCode: ErrorCode
}

/**
 * Set the parachain status code.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `status_code` - the status code to set
 * 
 * # Weight: `O(1)`
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
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
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task.
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
 * Schedule a named task after a delay.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RewardDistributionCall = RewardDistributionCall_collect_reward | RewardDistributionCall_set_reward_per_block

/**
 * Allow users who have staked to collect rewards for a given vault and rewraded currency
 */
export interface RewardDistributionCall_collect_reward {
    __kind: 'collect_reward'
    vaultId: VaultId
    rewardCurrencyId: CurrencyId
    index?: (number | undefined)
}

/**
 * Sets the reward per block.
 */
export interface RewardDistributionCall_set_reward_per_block {
    __kind: 'set_reward_per_block'
    newRewardPerBlock: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReplaceCall = ReplaceCall_accept_replace | ReplaceCall_cancel_replace | ReplaceCall_execute_replace | ReplaceCall_minimum_transfer_amount_update | ReplaceCall_request_replace | ReplaceCall_set_replace_period | ReplaceCall_withdraw_replace

/**
 * Accept request of vault replacement
 * 
 * # Arguments
 * 
 * * `origin` - the initiator of the transaction: the new vault
 * * `currency_pair` - currency_pair of the new vault
 * * `amount` - amount of tokens to be replaced
 * * `collateral` - the collateral provided by the new vault to match the replace request
 *   (for backing the transferred tokens)
 * * `stellar_address` - the address that old-vault should transfer the wrapped asset to
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
 * Cancel vault replacement
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction: anyone
 * * `replace_id` - the ID of the replacement request
 */
export interface ReplaceCall_cancel_replace {
    __kind: 'cancel_replace'
    replaceId: H256
}

/**
 * Execute vault replacement
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction: the new vault
 * * `replace_id` - the ID of the replacement request
 */
export interface ReplaceCall_execute_replace {
    __kind: 'execute_replace'
    replaceId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesXdrEncoded: Bytes
    transactionSetXdrEncoded: Bytes
}

export interface ReplaceCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

/**
 * Request the replacement of a new vault ownership
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `amount` - amount of issued tokens
 */
export interface ReplaceCall_request_replace {
    __kind: 'request_replace'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * Set the default replace period for tx verification.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `period` - default period for new requests
 * 
 * # Weight: `O(1)`
 */
export interface ReplaceCall_set_replace_period {
    __kind: 'set_replace_period'
    period: number
}

/**
 * Withdraw a request of vault replacement
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction: the old vault
 * * `amount` - amount of tokens to be withdrawn from being replaced
 */
export interface ReplaceCall_withdraw_replace {
    __kind: 'withdraw_replace'
    currencyPair: VaultCurrencyPair
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RedeemCall = RedeemCall_cancel_redeem | RedeemCall_execute_redeem | RedeemCall_liquidation_redeem | RedeemCall_minimum_transfer_amount_update | RedeemCall_mint_tokens_for_reimbursed_redeem | RedeemCall_rate_limit_update | RedeemCall_request_redeem | RedeemCall_self_redeem | RedeemCall_set_redeem_period

/**
 * If a redeem request is not completed on time, the redeem request can be cancelled.
 * The user that initially requested the redeem process calls this function to obtain
 * the Vault’s collateral as compensation for not transferring the Stellar assets back to
 * their address.
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `redeem_id` - identifier of redeem request as output from request_redeem
 * * `reimburse` - specifying if the user wishes to be reimbursed in collateral
 * and slash the Vault, or wishes to keep the tokens (and retry
 * Redeem with another Vault)
 */
export interface RedeemCall_cancel_redeem {
    __kind: 'cancel_redeem'
    redeemId: H256
    reimburse: boolean
}

/**
 * A Vault calls this function after receiving an RequestRedeem event with their public
 * key. Before calling the function, the Vault transfers the specific amount of Stellar
 * assets to the Stellar address given in the original redeem request. The Vault completes
 * the redeem with this function.
 * 
 * # Arguments
 * 
 * * `origin` - anyone executing this redeem request
 * * `redeem_id` - identifier of redeem request as output from request_redeem
 * * `transaction_envelope_xdr_encoded` - the XDR representation of the transaction
 *   envelope
 * * `externalized_envelopes_encoded` - the XDR representation of the externalized
 *   envelopes
 * * `transaction_set_encoded` - the XDR representation of the transaction set
 */
export interface RedeemCall_execute_redeem {
    __kind: 'execute_redeem'
    redeemId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesEncoded: Bytes
    transactionSetEncoded: Bytes
}

/**
 * When a Vault is liquidated, its collateral is slashed up to 150% of the liquidated
 * value. To re-establish the physical 1:1 peg, the bridge allows users to burn issued
 * tokens in return for collateral at a premium rate.
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `collateral_currency` - currency to be received
 * * `wrapped_currency` - currency of the wrapped token to burn
 * * `amount_wrapped` - amount of issued tokens to burn
 */
export interface RedeemCall_liquidation_redeem {
    __kind: 'liquidation_redeem'
    currencies: VaultCurrencyPair
    amountWrapped: bigint
}

export interface RedeemCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

/**
 * Mint tokens for a redeem that was cancelled with reimburse=true. This is
 * only possible if at the time of the cancel_redeem, the vault did not have
 * sufficient collateral after being slashed to back the tokens that the user
 * used to hold.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `redeem_id` - identifier of redeem request as output from request_redeem
 */
export interface RedeemCall_mint_tokens_for_reimbursed_redeem {
    __kind: 'mint_tokens_for_reimbursed_redeem'
    currencyPair: VaultCurrencyPair
    redeemId: H256
}

export interface RedeemCall_rate_limit_update {
    __kind: 'rate_limit_update'
    limitVolumeAmount?: (bigint | undefined)
    limitVolumeCurrencyId: CurrencyId
    intervalLength: number
}

/**
 * Initializes a request to burn issued tokens against a Vault with sufficient tokens. It
 * will also ensure that the Parachain status is RUNNING.
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `amount_wrapped` - amount of tokens to redeem
 * * `asset` - the asset to redeem
 * * `stellar_address` - the address to receive assets on Stellar
 * * `vault_id` - address of the vault
 */
export interface RedeemCall_request_redeem {
    __kind: 'request_redeem'
    amountWrapped: bigint
    stellarAddress: Bytes
    vaultId: VaultId
}

export interface RedeemCall_self_redeem {
    __kind: 'self_redeem'
    currencyPair: VaultCurrencyPair
    amountWrapped: bigint
}

/**
 * Set the default redeem period for tx verification.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `period` - default period for new requests
 */
export interface RedeemCall_set_redeem_period {
    __kind: 'set_redeem_period'
    period: number
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
    delay: number
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
    delay: number
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
    height: number
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
    delay: number
}

export type ProxyType = ProxyType_Any

export interface ProxyType_Any {
    __kind: 'Any'
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
export type PooledVaultRewardsCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

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
    message: Type_296
    maxWeight: Weight
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Set or unset the global suspension state of the XCM executor.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
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
 * - `origin`: Must be an origin specified by AdminOrigin.
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

export type Type_296 = Type_296_V2 | Type_296_V3

export interface Type_296_V2 {
    __kind: 'V2'
    value: Type_299[]
}

export interface Type_296_V3 {
    __kind: 'V3'
    value: Type_303[]
}

export type Type_303 = Type_303_AliasOrigin | Type_303_BurnAsset | Type_303_BuyExecution | Type_303_ClaimAsset | Type_303_ClearError | Type_303_ClearOrigin | Type_303_ClearTopic | Type_303_ClearTransactStatus | Type_303_DepositAsset | Type_303_DepositReserveAsset | Type_303_DescendOrigin | Type_303_ExchangeAsset | Type_303_ExpectAsset | Type_303_ExpectError | Type_303_ExpectOrigin | Type_303_ExpectPallet | Type_303_ExpectTransactStatus | Type_303_ExportMessage | Type_303_HrmpChannelAccepted | Type_303_HrmpChannelClosing | Type_303_HrmpNewChannelOpenRequest | Type_303_InitiateReserveWithdraw | Type_303_InitiateTeleport | Type_303_LockAsset | Type_303_NoteUnlockable | Type_303_QueryPallet | Type_303_QueryResponse | Type_303_ReceiveTeleportedAsset | Type_303_RefundSurplus | Type_303_ReportError | Type_303_ReportHolding | Type_303_ReportTransactStatus | Type_303_RequestUnlock | Type_303_ReserveAssetDeposited | Type_303_SetAppendix | Type_303_SetErrorHandler | Type_303_SetFeesMode | Type_303_SetTopic | Type_303_SubscribeVersion | Type_303_Transact | Type_303_TransferAsset | Type_303_TransferReserveAsset | Type_303_Trap | Type_303_UniversalOrigin | Type_303_UnlockAsset | Type_303_UnpaidExecution | Type_303_UnsubscribeVersion | Type_303_WithdrawAsset

export interface Type_303_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_303_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_303_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_303_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_303_ClearError {
    __kind: 'ClearError'
}

export interface Type_303_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_303_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_303_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_303_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_303_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_303_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_303_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_303_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_303_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_303_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_303_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_303_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_303_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_303_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_303_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_303_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_303_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_303_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_303_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_303_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_303_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_303_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_303_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_303_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_303_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_303_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_303_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_303_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_303_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_303_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_303[]
}

export interface Type_303_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_303[]
}

export interface Type_303_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_303_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_303_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_303_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_300
}

export interface Type_303_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_303_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_303_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_303_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_303_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_303_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_303_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_303_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_300 {
    encoded: Bytes
}

export type Type_299 = Type_299_BuyExecution | Type_299_ClaimAsset | Type_299_ClearError | Type_299_ClearOrigin | Type_299_DepositAsset | Type_299_DepositReserveAsset | Type_299_DescendOrigin | Type_299_ExchangeAsset | Type_299_HrmpChannelAccepted | Type_299_HrmpChannelClosing | Type_299_HrmpNewChannelOpenRequest | Type_299_InitiateReserveWithdraw | Type_299_InitiateTeleport | Type_299_QueryHolding | Type_299_QueryResponse | Type_299_ReceiveTeleportedAsset | Type_299_RefundSurplus | Type_299_ReportError | Type_299_ReserveAssetDeposited | Type_299_SetAppendix | Type_299_SetErrorHandler | Type_299_SubscribeVersion | Type_299_Transact | Type_299_TransferAsset | Type_299_TransferReserveAsset | Type_299_Trap | Type_299_UnsubscribeVersion | Type_299_WithdrawAsset

export interface Type_299_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_299_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_299_ClearError {
    __kind: 'ClearError'
}

export interface Type_299_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_299_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_299_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_299_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_299_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_299_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_299_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_299_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_299_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_299_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_299_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_299_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_299_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_299_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_299_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_299_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_299_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_299[]
}

export interface Type_299_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_299[]
}

export interface Type_299_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_299_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_300
}

export interface Type_299_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_299_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_299_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_299_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_299_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
 * version and name should be verified on upgrade. Since the authorization only has a hash,
 * it cannot actually perform the verification.
 * 
 * This call requires Root origin.
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Note that this function will not apply the new `code`, but only attempt to schedule the
 * upgrade with the Relay Chain.
 * 
 * All origins are allowed.
 */
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
    validationData: V4PersistedValidationData
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

export interface V4PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainStakingCall = ParachainStakingCall_cancel_leave_candidates | ParachainStakingCall_candidate_stake_less | ParachainStakingCall_candidate_stake_more | ParachainStakingCall_claim_rewards | ParachainStakingCall_delegator_stake_less | ParachainStakingCall_delegator_stake_more | ParachainStakingCall_execute_leave_candidates | ParachainStakingCall_execute_scheduled_reward_change | ParachainStakingCall_force_new_round | ParachainStakingCall_force_remove_candidate | ParachainStakingCall_increment_collator_rewards | ParachainStakingCall_increment_delegator_rewards | ParachainStakingCall_init_leave_candidates | ParachainStakingCall_join_candidates | ParachainStakingCall_join_delegators | ParachainStakingCall_leave_delegators | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_set_inflation | ParachainStakingCall_set_max_candidate_stake | ParachainStakingCall_set_max_selected_candidates | ParachainStakingCall_unlock_unstaked

/**
 * Revert the previously requested exit of the network of a collator
 * candidate. On success, adds back the candidate to the TopCandidates
 * and updates the collators.
 * 
 * Requires the candidate to previously have called
 * `init_leave_candidates`.
 * 
 * Emits `CollatorCanceledExit`.
 */
export interface ParachainStakingCall_cancel_leave_candidates {
    __kind: 'cancel_leave_candidates'
}

/**
 * Stake less funds for a collator candidate.
 * 
 * If the new amount of staked fund is not large enough, the account
 * could be removed from the set of collator candidates and not be
 * considered for authoring the next blocks.
 * 
 * This operation affects the pallet's total stake amount.
 * 
 * The unstaked funds are not released immediately to the account, but
 * they will be available after `StakeDuration` blocks.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `CollatorStakedLess`.
 */
export interface ParachainStakingCall_candidate_stake_less {
    __kind: 'candidate_stake_less'
    less: bigint
}

/**
 * Stake more funds for a collator candidate.
 * 
 * If not in the set of candidates, staking enough funds allows the
 * account to be added to it. The larger amount of funds, the higher
 * chances to be selected as the author of the next block.
 * 
 * This operation affects the pallet's total stake amount.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `CollatorStakedMore`.
 */
export interface ParachainStakingCall_candidate_stake_more {
    __kind: 'candidate_stake_more'
    more: bigint
}

/**
 * Claim block authoring rewards for the target address.
 * 
 * Requires `Rewards` to be set beforehand, which can by triggered by
 * any of the following options
 * * Calling increment_{collator, delegator}_rewards (active)
 * * Altering your stake (active)
 * * Leaving the network as a collator (active)
 * * Revoking a delegation as a delegator (active)
 * * Being a delegator whose collator left the network, altered their
 *   stake or incremented rewards (passive)
 * 
 * The dispatch origin can be any signed one, e.g., anyone can claim
 * for anyone.
 * 
 * Emits `Rewarded`.
 */
export interface ParachainStakingCall_claim_rewards {
    __kind: 'claim_rewards'
}

/**
 * Reduce the stake for delegating a collator candidate.
 * 
 * If the new amount of staked fund is not large enough, the collator
 * could be removed from the set of collator candidates and not be
 * considered for authoring the next blocks.
 * 
 * The unstaked funds are not release immediately to the account, but
 * they will be available after `StakeDuration` blocks.
 * 
 * The remaining staked funds must still be larger than the minimum
 * required by this pallet to maintain the status of delegator.
 * 
 * The resulting total amount of funds staked must be within the
 * allowed range as set in the pallet's configuration.
 * 
 * Emits `DelegatorStakedLess`.
 */
export interface ParachainStakingCall_delegator_stake_less {
    __kind: 'delegator_stake_less'
    candidate: MultiAddress
    less: bigint
}

/**
 * Increase the stake for delegating a collator candidate.
 * 
 * If not in the set of candidates, staking enough funds allows the
 * collator candidate to be added to it.
 * 
 * Emits `DelegatorStakedMore`.
 */
export interface ParachainStakingCall_delegator_stake_more {
    __kind: 'delegator_stake_more'
    candidate: MultiAddress
    more: bigint
}

/**
 * Execute the network exit of a candidate who requested to leave at
 * least `ExitQueueDelay` rounds ago. Prepares unstaking of the
 * candidates and their delegators stake which can be unlocked via
 * `unlock_unstaked` after waiting at least `StakeDuration` many
 * blocks.
 * 
 * Requires the candidate to previously have called
 * `init_leave_candidates`.
 * 
 * The exit request can be reversed by calling
 * `cancel_leave_candidates`.
 * 
 * NOTE: Iterates over CandidatePool for each candidate over their
 * delegators to set rewards. Needs to be improved when scaling up
 * `MaxTopCandidates`.
 * 
 * Emits `CollatorLeft`.
 */
export interface ParachainStakingCall_execute_leave_candidates {
    __kind: 'execute_leave_candidates'
    collator: MultiAddress
}

/**
 * Executes the annual reduction of the reward rates for collators and
 * delegators. Moreover, sets rewards for all collators and delegators
 * before adjusting the inflation.
 * 
 * Emits `RoundInflationSet`.
 */
export interface ParachainStakingCall_execute_scheduled_reward_change {
    __kind: 'execute_scheduled_reward_change'
}

/**
 * Forces the start of the new round in the next block.
 * 
 * The new round will be enforced via <T as
 * ShouldEndSession<_>>::should_end_session.
 * 
 * The dispatch origin must be Root.
 */
export interface ParachainStakingCall_force_new_round {
    __kind: 'force_new_round'
}

/**
 * Forcedly removes a collator candidate from the TopCandidates and
 * clears all associated storage for the candidate and their
 * delegators.
 * 
 * Prepares unstaking of the candidates and their delegators stake
 * which can be unlocked via `unlock_unstaked` after waiting at
 * least `StakeDuration` many blocks. Also increments rewards for the
 * collator and their delegators.
 * 
 * Increments rewards of candidate and their delegators.
 * 
 * Emits `CandidateRemoved`.
 */
export interface ParachainStakingCall_force_remove_candidate {
    __kind: 'force_remove_candidate'
    collator: MultiAddress
}

/**
 * Actively increment the rewards of a collator and their delegators.
 * 
 * The same effect is triggered by changing the stake or leaving the
 * network.
 * 
 * The dispatch origin must be a collator.
 */
export interface ParachainStakingCall_increment_collator_rewards {
    __kind: 'increment_collator_rewards'
}

/**
 * Actively increment the rewards of a delegator for all their
 * delegations.
 * 
 * The same effect is triggered by changing the stake or revoking
 * delegations.
 * 
 * The dispatch origin must be a delegator.
 */
export interface ParachainStakingCall_increment_delegator_rewards {
    __kind: 'increment_delegator_rewards'
}

/**
 * Request to leave the set of collator candidates.
 * 
 * On success, the account is immediately removed from the candidate
 * pool to prevent selection as a collator in future validation rounds,
 * but unstaking of the funds is executed with a delay of
 * `StakeDuration` blocks.
 * 
 * The exit request can be reversed by calling
 * `cancel_leave_candidates`.
 * 
 * This operation affects the pallet's total stake amount. It is
 * updated even though the funds of the candidate who signaled to leave
 * are still locked for `ExitDelay` + `StakeDuration` more blocks.
 * 
 * NOTE 1: Upon starting a new session_i in `new_session`, the current
 * top candidates are selected to be block authors for session_i+1. Any
 * changes to the top candidates afterwards do not effect the set of
 * authors for session_i+1.
 * Thus, we have to make sure none of these collators can
 * leave before session_i+1 ends by delaying their
 * exit for `ExitDelay` many blocks.
 * 
 * NOTE 2: We do not increment rewards in this extrinsic as the
 * candidate could still author blocks, and thus be eligible to receive
 * rewards, until the end of the next session.
 * 
 * Emits `CollatorScheduledExit`.
 */
export interface ParachainStakingCall_init_leave_candidates {
    __kind: 'init_leave_candidates'
}

/**
 * Join the set of collator candidates.
 * 
 * In the next blocks, if the collator candidate has enough funds
 * staked to be included in any of the top `MaxSelectedCandidates`
 * positions, it will be included in the set of potential authors that
 * will be selected by the stake-weighted random selection function.
 * 
 * The staked funds of the new collator candidate are added to the
 * total stake of the system.
 * 
 * The total amount of funds staked must be within the allowed range as
 * set in the pallet's configuration.
 * 
 * The dispatch origin must not be already part of the collator
 * candidates nor of the delegators set.
 * 
 * Emits `JoinedCollatorCandidates`.
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    stake: bigint
}

/**
 * Join the set of delegators by delegating to a collator candidate.
 * 
 * The account that wants to delegate cannot be part of the collator
 * candidates set as well.
 * 
 * The caller must _not_ have a delegation. If that is the case, they
 * are required to first remove the delegation.
 * 
 * The amount staked must be larger than the minimum required to become
 * a delegator as set in the pallet's configuration.
 * 
 * As only `MaxDelegatorsPerCollator` are allowed to delegate a given
 * collator, the amount staked must be larger than the lowest one in
 * the current set of delegator for the operation to be meaningful.
 * 
 * The collator's total stake as well as the pallet's total stake are
 * increased accordingly.
 * 
 * Emits `Delegation`.
 * Emits `DelegationReplaced` if the candidate has
 * `MaxDelegatorsPerCollator` many delegations but this delegator
 * staked more than one of the other delegators of this candidate.
 */
export interface ParachainStakingCall_join_delegators {
    __kind: 'join_delegators'
    collator: MultiAddress
    amount: bigint
}

/**
 * Leave the set of delegators and, by implication, revoke the ongoing
 * delegation.
 * 
 * All staked funds are not unlocked immediately, but they are added to
 * the queue of pending unstaking, and will effectively be released
 * after `StakeDuration` blocks from the moment the delegator leaves.
 * 
 * This operation reduces the total stake of the pallet as well as the
 * stakes of all collators that were delegated, potentially affecting
 * their chances to be included in the set of candidates in the next
 * rounds.
 * 
 * Automatically increments the accumulated rewards of the origin of
 * the current delegation.
 * 
 * Emits `DelegatorLeft`.
 */
export interface ParachainStakingCall_leave_delegators {
    __kind: 'leave_delegators'
}

/**
 * Set the number of blocks each validation round lasts.
 * 
 * If the new value is less than the length of the current round, the
 * system will immediately move to the next round in the next block.
 * 
 * The new value must be higher than the minimum allowed as set in the
 * pallet's configuration.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `BlocksPerRoundSet`.
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: number
}

/**
 * Set the annual inflation rate to derive per-round inflation.
 * 
 * The inflation details are considered valid if the annual reward rate
 * is approximately the per-block reward rate multiplied by the
 * estimated* total number of blocks per year.
 * 
 * The estimated average block time is twelve seconds.
 * 
 * NOTE: Iterates over CandidatePool for each candidate over their
 * delegators to set rewards. Needs to be improved when scaling up
 * `MaxTopCandidates`.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `RoundInflationSet`.
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    collatorMaxRatePercentage: Perquintill
    collatorAnnualRewardRatePercentage: Perquintill
    delegatorMaxRatePercentage: Perquintill
    delegatorAnnualRewardRatePercentage: Perquintill
}

/**
 * Set the maximal amount a collator can stake. Existing stakes are not
 * changed.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `MaxCandidateStakeChanged`.
 */
export interface ParachainStakingCall_set_max_candidate_stake {
    __kind: 'set_max_candidate_stake'
    new: bigint
}

/**
 * Set the maximum number of collator candidates that can be selected
 * at the beginning of each validation round.
 * 
 * Changes are not applied until the start of the next round.
 * 
 * The new value must be higher than the minimum allowed as set in the
 * pallet's configuration.
 * 
 * The dispatch origin must be Root.
 * 
 * Emits `MaxSelectedCandidatesSet`.
 */
export interface ParachainStakingCall_set_max_selected_candidates {
    __kind: 'set_max_selected_candidates'
    new: number
}

/**
 * Unlock all previously staked funds that are now available for
 * unlocking by the origin account after `StakeDuration` blocks have
 * elapsed.
 * 
 * Weight: O(U) where U is the number of locked unstaking requests
 * bounded by `MaxUnstakeRequests`.
 * - Reads: [Origin Account], Unstaking, Locks
 * - Writes: Unstaking, Locks
 * - Kills: Unstaking & Locks if no balance is locked anymore
 * # </weight>
 */
export interface ParachainStakingCall_unlock_unstaked {
    __kind: 'unlock_unstaked'
    target: MultiAddress
}

export type Perquintill = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OracleCall = OracleCall_set_max_delay | OracleCall_update_oracle_keys

/**
 * Set the maximum delay (in milliseconds) for a reported value to be used
 * 
 * # Arguments
 * * `new_max_delay` - new max delay in milliseconds
 */
export interface OracleCall_set_max_delay {
    __kind: 'set_max_delay'
    newMaxDelay: bigint
}

/**
 * set oracle keys
 * 
 * # Arguments
 * * `oracle_key` - list of oracle keys
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NominationCall = NominationCall_deposit_collateral | NominationCall_opt_in_to_nomination | NominationCall_opt_out_of_nomination | NominationCall_set_nomination_enabled | NominationCall_withdraw_collateral

export interface NominationCall_deposit_collateral {
    __kind: 'deposit_collateral'
    vaultId: VaultId
    amount: bigint
}

/**
 * Allow nomination for this vault
 */
export interface NominationCall_opt_in_to_nomination {
    __kind: 'opt_in_to_nomination'
    currencyPair: VaultCurrencyPair
}

/**
 * Disallow nomination for this vault
 */
export interface NominationCall_opt_out_of_nomination {
    __kind: 'opt_out_of_nomination'
    currencyPair: VaultCurrencyPair
}

export interface NominationCall_set_nomination_enabled {
    __kind: 'set_nomination_enabled'
    enabled: boolean
}

export interface NominationCall_withdraw_collateral {
    __kind: 'withdraw_collateral'
    vaultId: VaultId
    amount: bigint
    index?: (number | undefined)
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
 * ## Complexity
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
 * ## Complexity
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
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
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
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IssueCall = IssueCall_cancel_issue | IssueCall_execute_issue | IssueCall_minimum_transfer_amount_update | IssueCall_rate_limit_update | IssueCall_request_issue | IssueCall_set_issue_period

/**
 * Cancel the issuance of tokens if expired
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `issue_id` - identifier of issue request as output from request_issue
 */
export interface IssueCall_cancel_issue {
    __kind: 'cancel_issue'
    issueId: H256
}

/**
 * Finalize the issuance of tokens
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `issue_id` - identifier of issue request as output from request_issue
 * * `transaction_envelope_xdr_encoded` - the XDR representation of the transaction
 *   envelope
 * * `externalized_envelopes_encoded` - the XDR representation of the externalized
 *   envelopes
 * * `transaction_set_encoded` - the XDR representation of the transaction set
 */
export interface IssueCall_execute_issue {
    __kind: 'execute_issue'
    issueId: H256
    transactionEnvelopeXdrEncoded: Bytes
    externalizedEnvelopesEncoded: Bytes
    transactionSetEncoded: Bytes
}

export interface IssueCall_minimum_transfer_amount_update {
    __kind: 'minimum_transfer_amount_update'
    newMinimumAmount: bigint
}

export interface IssueCall_rate_limit_update {
    __kind: 'rate_limit_update'
    limitVolumeAmount?: (bigint | undefined)
    limitVolumeCurrencyId: CurrencyId
    intervalLength: number
}

/**
 * Request the issuance of tokens
 * 
 * # Arguments
 * 
 * * `origin` - sender of the transaction
 * * `amount` - amount of a stellar asset the user wants to convert to issued tokens. Note
 *   that the
 * amount of issued tokens received will be less, because a fee is subtracted.
 * * `asset` - the currency id of the stellar asset the user wants to convert to issued
 *   tokens
 * * `vault` - address of the vault
 */
export interface IssueCall_request_issue {
    __kind: 'request_issue'
    amount: bigint
    vaultId: VaultId
}

/**
 * Set the default issue period for tx verification.
 * 
 * # Arguments
 * 
 * * `origin` - the dispatch origin of this call (must be _Root_)
 * * `period` - default period for new requests
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
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * ## Complexity
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
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
 * ## Complexity
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
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
export type FeeCall = FeeCall_set_issue_fee | FeeCall_set_issue_griefing_collateral | FeeCall_set_premium_redeem_fee | FeeCall_set_punishment_fee | FeeCall_set_redeem_fee | FeeCall_set_replace_griefing_collateral

/**
 * Changes the issue fee percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `fee` - the new fee
 */
export interface FeeCall_set_issue_fee {
    __kind: 'set_issue_fee'
    fee: FixedU128
}

/**
 * Changes the issue griefing collateral percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `griefing_collateral` - the new griefing collateral
 */
export interface FeeCall_set_issue_griefing_collateral {
    __kind: 'set_issue_griefing_collateral'
    griefingCollateral: FixedU128
}

/**
 * Changes the premium redeem fee percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `fee` - the new fee
 */
export interface FeeCall_set_premium_redeem_fee {
    __kind: 'set_premium_redeem_fee'
    fee: FixedU128
}

/**
 * Changes the punishment fee percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `fee` - the new fee
 */
export interface FeeCall_set_punishment_fee {
    __kind: 'set_punishment_fee'
    fee: FixedU128
}

/**
 * Changes the redeem fee percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `fee` - the new fee
 */
export interface FeeCall_set_redeem_fee {
    __kind: 'set_redeem_fee'
    fee: FixedU128
}

/**
 * Changes the replace griefing collateral percentage (only executable by the Root account)
 * 
 * # Arguments
 * 
 * * `origin` - signing account
 * * `griefing_collateral` - the new griefing collateral
 */
export interface FeeCall_set_replace_griefing_collateral {
    __kind: 'set_replace_griefing_collateral'
    griefingCollateral: FixedU128
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FarmingCall = FarmingCall_add_boost_pool_whitelist | FarmingCall_charge | FarmingCall_charge_boost | FarmingCall_claim | FarmingCall_close_pool | FarmingCall_create_farming_pool | FarmingCall_deposit | FarmingCall_edit_pool | FarmingCall_end_boost_round | FarmingCall_force_gauge_claim | FarmingCall_force_retire_pool | FarmingCall_gauge_withdraw | FarmingCall_kill_pool | FarmingCall_reset_pool | FarmingCall_set_next_round_whitelist | FarmingCall_set_retire_limit | FarmingCall_start_boost_round | FarmingCall_vote | FarmingCall_withdraw | FarmingCall_withdraw_claim

export interface FarmingCall_add_boost_pool_whitelist {
    __kind: 'add_boost_pool_whitelist'
    whitelist: number[]
}

export interface FarmingCall_charge {
    __kind: 'charge'
    pid: number
    rewards: [CurrencyId, bigint][]
}

export interface FarmingCall_charge_boost {
    __kind: 'charge_boost'
    rewards: [CurrencyId, bigint][]
}

export interface FarmingCall_claim {
    __kind: 'claim'
    pid: number
}

export interface FarmingCall_close_pool {
    __kind: 'close_pool'
    pid: number
}

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

export interface FarmingCall_deposit {
    __kind: 'deposit'
    pid: number
    addValue: bigint
    gaugeInfo?: ([bigint, number] | undefined)
}

export interface FarmingCall_edit_pool {
    __kind: 'edit_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    gaugeBasicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitCount?: (number | undefined)
}

export interface FarmingCall_end_boost_round {
    __kind: 'end_boost_round'
}

export interface FarmingCall_force_gauge_claim {
    __kind: 'force_gauge_claim'
    gid: number
}

export interface FarmingCall_force_retire_pool {
    __kind: 'force_retire_pool'
    pid: number
}

export interface FarmingCall_gauge_withdraw {
    __kind: 'gauge_withdraw'
    gid: number
}

export interface FarmingCall_kill_pool {
    __kind: 'kill_pool'
    pid: number
}

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

export interface FarmingCall_set_next_round_whitelist {
    __kind: 'set_next_round_whitelist'
    whitelist: number[]
}

export interface FarmingCall_set_retire_limit {
    __kind: 'set_retire_limit'
    limit: number
}

export interface FarmingCall_start_boost_round {
    __kind: 'start_boost_round'
    roundLength: number
}

export interface FarmingCall_vote {
    __kind: 'vote'
    voteList: [number, Percent][]
}

export interface FarmingCall_withdraw {
    __kind: 'withdraw'
    pid: number
    removeValue?: (bigint | undefined)
}

export interface FarmingCall_withdraw_claim {
    __kind: 'withdraw_claim'
    pid: number
}

export type Percent = number

export type Perbill = number

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
export type DiaOracleModuleCall = DiaOracleModuleCall_add_currency | DiaOracleModuleCall_authorize_account | DiaOracleModuleCall_deauthorize_account | DiaOracleModuleCall_remove_currency | DiaOracleModuleCall_set_batching_api | DiaOracleModuleCall_set_updated_coin_infos

export interface DiaOracleModuleCall_add_currency {
    __kind: 'add_currency'
    blockchain: Bytes
    symbol: Bytes
}

export interface DiaOracleModuleCall_authorize_account {
    __kind: 'authorize_account'
    accountId: AccountId32
}

export interface DiaOracleModuleCall_deauthorize_account {
    __kind: 'deauthorize_account'
    accountId: AccountId32
}

export interface DiaOracleModuleCall_remove_currency {
    __kind: 'remove_currency'
    blockchain: Bytes
    symbol: Bytes
}

export interface DiaOracleModuleCall_set_batching_api {
    __kind: 'set_batching_api'
    api: Bytes
}

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

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
    votingPeriod: number
    delay: number
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
 * Set or clear a metadata of a proposal or a referendum.
 * 
 * Parameters:
 * - `origin`: Must correspond to the `MetadataOwner`.
 *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *       threshold.
 *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *       threshold.
 *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *       threshold.
 *     - `Signed` by a creator for a public proposal.
 *     - `Signed` to clear a metadata for a finished referendum.
 *     - `Root` to set a metadata for an ongoing referendum.
 * - `owner`: an identifier of a metadata owner.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
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
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
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
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
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
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
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
 * - `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
 *   the only way to use this code is to delegate call into it from an offchain execution.
 *   Set to [`Determinism::Enforced`] if in doubt.
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

export type Determinism = Determinism_Enforced | Determinism_Relaxed

export interface Determinism_Enforced {
    __kind: 'Enforced'
}

export interface Determinism_Relaxed {
    __kind: 'Relaxed'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClientsInfoCall = ClientsInfoCall_authorize_account | ClientsInfoCall_deauthorize_account | ClientsInfoCall_set_current_client_release | ClientsInfoCall_set_pending_client_release

export interface ClientsInfoCall_authorize_account {
    __kind: 'authorize_account'
    accountId: AccountId32
}

export interface ClientsInfoCall_deauthorize_account {
    __kind: 'deauthorize_account'
    accountId: AccountId32
}

/**
 * Sets the current client release version, in case of a bug fix or patch.
 * 
 * # Arguments
 * * `client_name` - raw byte string representation of the client name (e.g. `b"vault"`)
 * * `release` - The release information for the given `client_name`
 */
export interface ClientsInfoCall_set_current_client_release {
    __kind: 'set_current_client_release'
    clientName: Bytes
    release: ClientRelease
}

/**
 * Sets the pending client release version. To be batched alongside the
 * `parachainSystem.authorizeUpgrade` Cumulus call.
 * Clients include the vault, oracle, and faucet.
 * 
 * # Arguments
 * * `client_name` - raw byte string representation of the client name (e.g. `b"vault"`)
 * * `release` - The release information for the given `client_name`
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ChildBountiesCall = ChildBountiesCall_accept_curator | ChildBountiesCall_add_child_bounty | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_unassign_curator

/**
 * Accept the curator role for the child-bounty.
 * 
 * The dispatch origin for this call must be the curator of this
 * child-bounty.
 * 
 * A deposit will be reserved from the curator and refund upon
 * successful payout or cancellation.
 * 
 * Fee for curator is deducted from curator fee of parent bounty.
 * 
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 * 
 * Child-bounty must be in "CuratorProposed" state, for processing the
 * call. And state of child-bounty is moved to "Active" on successful
 * call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Add a new child-bounty.
 * 
 * The dispatch origin for this call must be the curator of parent
 * bounty and the parent bounty must be in "active" state.
 * 
 * Child-bounty gets added successfully & fund gets transferred from
 * parent bounty to child-bounty account, if parent bounty has enough
 * funds, else the call fails.
 * 
 * Upper bound to maximum number of active  child bounties that can be
 * added are managed via runtime trait config
 * [`Config::MaxActiveChildBountyCount`].
 * 
 * If the call is success, the status of child-bounty is updated to
 * "Added".
 * 
 * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
 * - `value`: Value for executing the proposal.
 * - `description`: Text description for the child-bounty.
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Bytes
}

/**
 * Award child-bounty to a beneficiary.
 * 
 * The beneficiary will be able to claim the funds after a delay.
 * 
 * The dispatch origin for this call must be the parent curator or
 * curator of this child-bounty.
 * 
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 * 
 * Child-bounty must be in active state, for processing the call. And
 * state of child-bounty is moved to "PendingPayout" on successful call
 * completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `beneficiary`: Beneficiary account.
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded child-bounty after payout delay.
 * 
 * The dispatch origin for this call may be any signed origin.
 * 
 * Call works independent of parent bounty state, No need for parent
 * bounty to be in active state.
 * 
 * The Beneficiary is paid out with agreed bounty value. Curator fee is
 * paid & curator deposit is unreserved.
 * 
 * Child-bounty must be in "PendingPayout" state, for processing the
 * call. And instance of child-bounty is removed from the state on
 * successful call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Cancel a proposed or active child-bounty. Child-bounty account funds
 * are transferred to parent bounty account. The child-bounty curator
 * deposit may be unreserved if possible.
 * 
 * The dispatch origin for this call must be either parent curator or
 * `T::RejectOrigin`.
 * 
 * If the state of child-bounty is `Active`, curator deposit is
 * unreserved.
 * 
 * If the state of child-bounty is `PendingPayout`, call fails &
 * returns `PendingPayout` error.
 * 
 * For the origin other than T::RejectOrigin, parent bounty must be in
 * active state, for this child-bounty call to work. For origin
 * T::RejectOrigin execution is forced.
 * 
 * Instance of child-bounty is removed from the state on successful
 * call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Propose curator for funded child-bounty.
 * 
 * The dispatch origin for this call must be curator of parent bounty.
 * 
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 * 
 * Child-bounty must be in "Added" state, for processing the call. And
 * state of child-bounty is moved to "CuratorProposed" on successful
 * call completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `curator`: Address of child-bounty curator.
 * - `fee`: payment fee to child-bounty curator for execution.
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * Unassign curator from a child-bounty.
 * 
 * The dispatch origin for this call can be either `RejectOrigin`, or
 * the curator of the parent bounty, or any signed origin.
 * 
 * For the origin other than T::RejectOrigin and the child-bounty
 * curator, parent bounty must be in active state, for this call to
 * work. We allow child-bounty curator and T::RejectOrigin to execute
 * this call irrespective of the parent bounty state.
 * 
 * If this function is called by the `RejectOrigin` or the
 * parent bounty curator, we assume that the child-bounty curator is
 * malicious or inactive. As a result, child-bounty curator deposit is
 * slashed.
 * 
 * If the origin is the child-bounty curator, we take this as a sign
 * that they are unable to do their job, and are willingly giving up.
 * We could slash the deposit, but for now we allow them to unreserve
 * their deposit and exit without issue. (We may want to change this if
 * it is abused.)
 * 
 * Finally, the origin can be anyone iff the child-bounty curator is
 * "inactive". Expiry update due of parent bounty is used to estimate
 * inactive state of child-bounty curator.
 * 
 * This allows anyone in the community to call out that a child-bounty
 * curator is not doing their due diligence, and we should pick a new
 * one. In this case the child-bounty curator deposit is slashed.
 * 
 * State of child-bounty is moved to Added state on successful call
 * completion.
 * 
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
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
 * Set the regular balance of a given account; it also takes a reserved balance but this
 * must be the same as the account's current reserved balance.
 * 
 * The dispatch origin for this call is `root`.
 * 
 * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
 * 
 * WARNING: DEPRECATED! Will be released in approximately 3 months.
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
 *   keep the sender account alive (true).
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibililty of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register_asset | AssetRegistryCall_update_asset

export interface AssetRegistryCall_register_asset {
    __kind: 'register_asset'
    metadata: AssetMetadata
    assetId?: (CurrencyId | undefined)
}

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
        Vesting: VestingCall,
        VestingManager: VestingManagerCall,
        XTokens: XTokensCall,
        XcmpQueue: XcmpQueueCall,
        ZenlinkProtocol: ZenlinkProtocolCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return  {
        chainId: sts.number(),
        assetType: sts.number(),
        assetIndex: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        startingBlock: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        Council: Type_311,
        CumulusXcm: Type_314,
        PolkadotXcm: Origin,
        TechnicalCommittee: Type_312,
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

export const Type_312: sts.Type<Type_312> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export const Type_314: sts.Type<Type_314> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_311: sts.Type<Type_311> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
export const PooledVaultRewardsCall: sts.Type<PooledVaultRewardsCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_296,
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

export const Type_296: sts.Type<Type_296> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_299),
        V3: sts.array(() => Type_303),
    }
})

export const Type_303: sts.Type<Type_303> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_303),
        SetErrorHandler: sts.array(() => Type_303),
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
            call: Type_300,
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

export const Type_300: sts.Type<Type_300> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_299: sts.Type<Type_299> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_299),
        SetErrorHandler: sts.array(() => Type_299),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_300,
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
        validationData: V4PersistedValidationData,
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

export const V4PersistedValidationData: sts.Type<V4PersistedValidationData> = sts.struct(() => {
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        Enforced: sts.unit(),
        Relaxed: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export type AccountId32 = Bytes

export interface AccountData {
    free: bigint
    reserved: bigint
    frozen: bigint
    flags: ExtraFlags
}

export type ExtraFlags = bigint

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: sts.bigint(),
        reserved: sts.bigint(),
        frozen: sts.bigint(),
        flags: ExtraFlags,
    }
})

export const ExtraFlags = sts.bigint()

export const AccountId32 = sts.bytes()

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

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

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
