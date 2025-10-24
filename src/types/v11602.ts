import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_AssetSwitchPool1 | Call_Attestation | Call_Balances | Call_Collators | Call_Council | Call_Ctype | Call_Delegation | Call_Democracy | Call_DepositStorage | Call_Did | Call_DidLookup | Call_DipProvider | Call_Fungibles | Call_Indices | Call_Ismp | Call_IsmpParachain | Call_MessageQueue | Call_Migration | Call_Multisig | Call_ParachainInfo | Call_ParachainStaking | Call_ParachainSystem | Call_PolkadotXcm | Call_Preimage | Call_Proxy | Call_PublicCredentials | Call_Scheduler | Call_Session | Call_System | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Tips | Call_TipsMembership | Call_TokenGateway | Call_Treasury | Call_Utility | Call_Vesting | Call_Web3Names | Call_XcmpQueue

export interface Call_AssetSwitchPool1 {
    __kind: 'AssetSwitchPool1'
    value: AssetSwitchPool1Call
}

export interface Call_Attestation {
    __kind: 'Attestation'
    value: AttestationCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Collators {
    __kind: 'Collators'
    value: CollatorsCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Ctype {
    __kind: 'Ctype'
    value: CtypeCall
}

export interface Call_Delegation {
    __kind: 'Delegation'
    value: DelegationCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DepositStorage {
    __kind: 'DepositStorage'
    value: DepositStorageCall
}

export interface Call_Did {
    __kind: 'Did'
    value: DidCall
}

export interface Call_DidLookup {
    __kind: 'DidLookup'
    value: DidLookupCall
}

export interface Call_DipProvider {
    __kind: 'DipProvider'
    value: DipProviderCall
}

export interface Call_Fungibles {
    __kind: 'Fungibles'
    value: FungiblesCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Ismp {
    __kind: 'Ismp'
    value: IsmpCall
}

export interface Call_IsmpParachain {
    __kind: 'IsmpParachain'
    value: IsmpParachainCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_Migration {
    __kind: 'Migration'
    value: MigrationCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
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

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_PublicCredentials {
    __kind: 'PublicCredentials'
    value: PublicCredentialsCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface Call_TipsMembership {
    __kind: 'TipsMembership'
    value: TipsMembershipCall
}

export interface Call_TokenGateway {
    __kind: 'TokenGateway'
    value: TokenGatewayCall
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

export interface Call_Web3Names {
    __kind: 'Web3Names'
    value: Web3NamesCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold

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
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Overwrites the number of pages which must be in the queue after which we drop any
 * further messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages which the queue must be reduced to before it signals
 * that message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the number of pages which must be in the queue for the other side to be
 * told to suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type Web3NamesCall = Web3NamesCall_ban | Web3NamesCall_change_deposit_owner | Web3NamesCall_claim | Web3NamesCall_reclaim_deposit | Web3NamesCall_release_by_owner | Web3NamesCall_unban | Web3NamesCall_update_deposit

/**
 * Ban a name.
 * 
 * A banned name cannot be claimed by anyone. The name's deposit
 * is returned to the original payer.
 * 
 * The origin must be the ban origin.
 * 
 * Emits `Web3NameBanned` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Banned, Owner, Names storage entries + origin check
 * - Writes: Names, Owner, Banned storage entries + currency deposit
 *   release
 * # </weight>
 */
export interface Web3NamesCall_ban {
    __kind: 'ban'
    name: Bytes
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be the owner of the web3name.
 * The sender of the call will be the new deposit owner.
 */
export interface Web3NamesCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
}

/**
 * Assign the specified name to the owner as specified in the
 * origin.
 * 
 * The name must not have already been claimed by someone else and the
 * owner must not already own another name.
 * 
 * Emits `Web3NameClaimed` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Names, Owner, Banned storage entries + available currency
 *   check + origin check
 * - Writes: Names, Owner storage entries + currency deposit reserve
 * # </weight>
 */
export interface Web3NamesCall_claim {
    __kind: 'claim'
    name: Bytes
}

/**
 * Release the provided name from its owner.
 * 
 * The origin must be the account that paid for the name's deposit.
 * 
 * Emits `Web3NameReleased` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Owner storage entry + origin check
 * - Writes: Names, Owner storage entries + currency deposit release
 * # </weight>
 */
export interface Web3NamesCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    name: Bytes
}

/**
 * Release the provided name from its owner.
 * 
 * The origin must be the owner of the specified name.
 * 
 * Emits `Web3NameReleased` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Names storage entry + origin check
 * - Writes: Names, Owner storage entries + currency deposit release
 * # </weight>
 */
export interface Web3NamesCall_release_by_owner {
    __kind: 'release_by_owner'
}

/**
 * Unban a name.
 * 
 * Make a name claimable again.
 * 
 * The origin must be the ban origin.
 * 
 * Emits `Web3NameUnbanned` if the operation is carried out
 * successfully.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Banned storage entry + origin check
 * - Writes: Banned storage entry deposit release
 * # </weight>
 */
export interface Web3NamesCall_unban {
    __kind: 'unban'
    name: Bytes
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface Web3NamesCall_update_deposit {
    __kind: 'update_deposit'
    nameInput: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_force_remove_vesting_schedule | VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 * Force remove a vesting schedule
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `target`: An account that has a vesting schedule
 * - `schedule_index`: The vesting schedule index that should be removed
 */
export interface VestingCall_force_remove_vesting_schedule {
    __kind: 'force_remove_vesting_schedule'
    target: MultiAddress
    scheduleIndex: number
}

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
 * Contains a variant per dispatchable extrinsic that this pallet has.
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

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_Did | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_339
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_343
}

export interface OriginCaller_Did {
    __kind: 'Did'
    value: DidRawOrigin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_340
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

export type Type_340 = Type_340_Member | Type_340_Members | Type_340__Phantom

export interface Type_340_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_340_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_340__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V4Location
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V4Location
}

export interface V4Location {
    parents: number
    interior: V4Junctions
}

export type V4Junctions = V4Junctions_Here | V4Junctions_X1 | V4Junctions_X2 | V4Junctions_X3 | V4Junctions_X4 | V4Junctions_X5 | V4Junctions_X6 | V4Junctions_X7 | V4Junctions_X8

export interface V4Junctions_Here {
    __kind: 'Here'
}

export interface V4Junctions_X1 {
    __kind: 'X1'
    value: V4Junction[]
}

export interface V4Junctions_X2 {
    __kind: 'X2'
    value: V4Junction[]
}

export interface V4Junctions_X3 {
    __kind: 'X3'
    value: V4Junction[]
}

export interface V4Junctions_X4 {
    __kind: 'X4'
    value: V4Junction[]
}

export interface V4Junctions_X5 {
    __kind: 'X5'
    value: V4Junction[]
}

export interface V4Junctions_X6 {
    __kind: 'X6'
    value: V4Junction[]
}

export interface V4Junctions_X7 {
    __kind: 'X7'
    value: V4Junction[]
}

export interface V4Junctions_X8 {
    __kind: 'X8'
    value: V4Junction[]
}

export type V4Junction = V4Junction_AccountId32 | V4Junction_AccountIndex64 | V4Junction_AccountKey20 | V4Junction_GeneralIndex | V4Junction_GeneralKey | V4Junction_GlobalConsensus | V4Junction_OnlyChild | V4Junction_PalletInstance | V4Junction_Parachain | V4Junction_Plurality

export interface V4Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V4NetworkId | undefined)
    id: Bytes
}

export interface V4Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V4NetworkId | undefined)
    index: bigint
}

export interface V4Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V4NetworkId | undefined)
    key: Bytes
}

export interface V4Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V4Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V4Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V4NetworkId
}

export interface V4Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V4Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V4Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V4Junction_Plurality {
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

export type V4NetworkId = V4NetworkId_BitcoinCash | V4NetworkId_BitcoinCore | V4NetworkId_ByFork | V4NetworkId_ByGenesis | V4NetworkId_Ethereum | V4NetworkId_Kusama | V4NetworkId_Polkadot | V4NetworkId_PolkadotBulletin | V4NetworkId_Rococo | V4NetworkId_Westend | V4NetworkId_Wococo

export interface V4NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V4NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V4NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V4NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V4NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V4NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V4NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V4NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V4NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V4NetworkId_Westend {
    __kind: 'Westend'
}

export interface V4NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface DidRawOrigin {
    id: AccountId32
    submitter: AccountId32
}

export type Type_343 = Type_343_Relay | Type_343_SiblingParachain

export interface Type_343_Relay {
    __kind: 'Relay'
}

export interface Type_343_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_339 = Type_339_Member | Type_339_Members | Type_339__Phantom

export interface Type_339_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_339_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_339__Phantom {
    __kind: '_Phantom'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_check_status | TreasuryCall_payout | TreasuryCall_remove_approval | TreasuryCall_spend | TreasuryCall_spend_local | TreasuryCall_void_spend

/**
 * Check the status of the spend and remove it from the storage if processed.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * 
 * The status check is a prerequisite for retrying a failed payout.
 * If a spend has either succeeded or expired, it is removed from the storage by this
 * function. In such instances, transaction fees are refunded.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::PaymentFailed`] if the spend payout has failed.
 * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
 */
export interface TreasuryCall_check_status {
    __kind: 'check_status'
    index: number
}

/**
 * Claim a spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed
 * 
 * ## Details
 * 
 * Spends must be claimed within some temporal bounds. A spend may be claimed within one
 * [`Config::PayoutPeriod`] from the `valid_from` block.
 * In case of a payout failure, the spend status must be updated with the `check_status`
 * dispatchable before retrying with the current function.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::Paid`] if successful.
 */
export interface TreasuryCall_payout {
    __kind: 'payout'
    index: number
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * The original deposit will no longer be returned.
 * 
 * ### Parameters
 * - `proposal_id`: The index of a proposal
 * 
 * ### Complexity
 * - O(A) where `A` is the number of approvals
 * 
 * ### Errors
 * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
 *   approval queue, i.e., the proposal has not been approved. This could also mean the
 *   proposal does not exist altogether, thus there is no way it would have been approved
 *   in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least
 * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
 * for assertion using the [`Config::BalanceConverter`].
 * 
 * ## Details
 * 
 * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
 * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
 * the [`Config::PayoutPeriod`].
 * 
 * ### Parameters
 * - `asset_kind`: An indicator of the specific asset class to be spent.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The beneficiary of the spend.
 * - `valid_from`: The block number from which the spend can be claimed. It can refer to
 *   the past if the resulting spend has not yet expired according to the
 *   [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
 *   approval.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendApproved`] if successful.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
    validFrom?: (bigint | undefined)
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
 * 
 * ### Details
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 * 
 * ### Parameters
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * ## Events
 * 
 * Emits [`Event::SpendApproved`] if successful.
 */
export interface TreasuryCall_spend_local {
    __kind: 'spend_local'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Void previously approved spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * A spend void is only possible if the payout has not been attempted yet.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendVoided`] if successful.
 */
export interface TreasuryCall_void_spend {
    __kind: 'void_spend'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TokenGatewayCall = TokenGatewayCall_create_erc6160_asset | TokenGatewayCall_set_token_gateway_addresses | TokenGatewayCall_teleport | TokenGatewayCall_update_asset_precision | TokenGatewayCall_update_erc6160_asset

/**
 * Registers a multi-chain ERC6160 asset. The asset should not already exist.
 * 
 * This works by dispatching a request to the TokenGateway module on each requested chain
 * to create the asset.
 * `native` should be true if this asset originates from this chain
 */
export interface TokenGatewayCall_create_erc6160_asset {
    __kind: 'create_erc6160_asset'
    asset: AssetRegistration
}

/**
 * Set the token gateway address for specified chains
 */
export interface TokenGatewayCall_set_token_gateway_addresses {
    __kind: 'set_token_gateway_addresses'
    addresses: [StateMachine, Bytes][]
}

/**
 * Teleports a registered asset
 * locks the asset and dispatches a request to token gateway on the destination
 */
export interface TokenGatewayCall_teleport {
    __kind: 'teleport'
    params: TeleportParams
}

/**
 * Update the precision for an existing asset
 */
export interface TokenGatewayCall_update_asset_precision {
    __kind: 'update_asset_precision'
    update: PrecisionUpdate
}

/**
 * Registers a multi-chain ERC6160 asset. The asset should not already exist.
 * 
 * This works by dispatching a request to the TokenGateway module on each requested chain
 * to create the asset.
 */
export interface TokenGatewayCall_update_erc6160_asset {
    __kind: 'update_erc6160_asset'
    asset: GatewayAssetUpdate
}

export interface GatewayAssetUpdate {
    assetId: H256
    addChains: StateMachine[]
    removeChains: StateMachine[]
    newAdmins: [StateMachine, H160][]
}

export type H160 = Bytes

export interface PrecisionUpdate {
    assetId: V4Location
    precisions: [StateMachine, number][]
}

export interface TeleportParams {
    assetId: V4Location
    destination: StateMachine
    recepient: H256
    amount: bigint
    timeout: bigint
    tokenGateway: Bytes
    relayerFee: bigint
    callData?: (Bytes | undefined)
    redeem: boolean
}

export type StateMachine = StateMachine_Evm | StateMachine_Kusama | StateMachine_Polkadot | StateMachine_Substrate | StateMachine_Tendermint

export interface StateMachine_Evm {
    __kind: 'Evm'
    value: number
}

export interface StateMachine_Kusama {
    __kind: 'Kusama'
    value: number
}

export interface StateMachine_Polkadot {
    __kind: 'Polkadot'
    value: number
}

export interface StateMachine_Substrate {
    __kind: 'Substrate'
    value: Bytes
}

export interface StateMachine_Tendermint {
    __kind: 'Tendermint'
    value: Bytes
}

export interface AssetRegistration {
    localId: V4Location
    reg: GatewayAssetRegistration
    native: boolean
    precision: [StateMachine, number][]
}

export interface GatewayAssetRegistration {
    name: Bytes
    symbol: Bytes
    chains: StateMachine[]
    minimumBalance?: (bigint | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TipsMembershipCall = TipsMembershipCall_add_member | TipsMembershipCall_change_key | TipsMembershipCall_clear_prime | TipsMembershipCall_remove_member | TipsMembershipCall_reset_members | TipsMembershipCall_set_prime | TipsMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TipsMembershipCall_add_member {
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
export interface TipsMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TipsMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TipsMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TipsMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TipsMembershipCall_set_prime {
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
export interface TipsMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TipsCall = TipsCall_close_tip | TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_slash_tip | TipsCall_tip | TipsCall_tip_new

/**
 * Close and payout a tip.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * The tip identified by `hash` must have finished its countdown period.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * ## Complexity
 * - : `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`. `T`
 *   is charged as upper bound given by `ContainsLengthBound`. The actual cost depends on
 *   the implementation of `T::Tippers`.
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: H256
}

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * 
 * Emits `NewTip` if successful.
 * 
 * ## Complexity
 * - `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Bytes
    who: MultiAddress
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 * If successful, the original deposit will be unreserved.
 * 
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * Emits `TipRetracted` if successful.
 * 
 * ## Complexity
 * - `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: H256
}

/**
 * Remove and slash an already-open tip.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * As a result, the finder is slashed and the deposits are lost.
 * 
 * Emits `TipSlashed` if successful.
 * 
 * ## Complexity
 * - O(1).
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: H256
}

/**
 * Declare a tip value for an already-open tip.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 * 
 * ## Complexity
 * - `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`, insert
 *   tip and check closing, `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 * 
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: H256
    tipValue: bigint
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `NewTip` if successful.
 * 
 * ## Complexity
 * - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Bytes
    who: MultiAddress
    tipValue: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * [`Config::MinimumPeriod`].
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
 * that changing the complexity of this call could result exhausting the resources in a
 * block to execute any other calls.
 * 
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
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
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
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
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_apply_authorized_upgrade | SystemCall_authorize_upgrade | SystemCall_authorize_upgrade_without_checks | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
 * the new `code` in the same block or attempt to schedule the upgrade.
 * 
 * All origins are allowed.
 */
export interface SystemCall_apply_authorized_upgrade {
    __kind: 'apply_authorized_upgrade'
    code: Bytes
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * WARNING: This authorizes an upgrade that will take place without any safety checks, for
 * example that the spec name remains the same and that the version number increases. Not
 * recommended for normal use. Use `authorize_upgrade` instead.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade_without_checks {
    __kind: 'authorize_upgrade_without_checks'
    codeHash: H256
}

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
 * Can be executed by every `origin`.
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
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * Note that runtime upgrades will not run if this is called with a not-increasing spec
 * version!
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_cancel_retry | SchedulerCall_cancel_retry_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after | SchedulerCall_set_retry | SchedulerCall_set_retry_named

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
 * Removes the retry configuration of a task.
 */
export interface SchedulerCall_cancel_retry {
    __kind: 'cancel_retry'
    task: [bigint, number]
}

/**
 * Cancel the retry configuration of a named task.
 */
export interface SchedulerCall_cancel_retry_named {
    __kind: 'cancel_retry_named'
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
 * Set a retry configuration for a task so that, in case its scheduled run fails, it will
 * be retried after `period` blocks, for a total amount of `retries` retries or until it
 * succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry {
    __kind: 'set_retry'
    task: [bigint, number]
    retries: number
    period: bigint
}

/**
 * Set a retry configuration for a named task so that, in case its scheduled run fails, it
 * will be retried after `period` blocks, for a total amount of `retries` retries or until
 * it succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry_named {
    __kind: 'set_retry_named'
    id: Bytes
    retries: number
    period: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PublicCredentialsCall = PublicCredentialsCall_add | PublicCredentialsCall_change_deposit_owner | PublicCredentialsCall_reclaim_deposit | PublicCredentialsCall_remove | PublicCredentialsCall_revoke | PublicCredentialsCall_unrevoke | PublicCredentialsCall_update_deposit

/**
 * Register a new public credential on chain.
 * 
 * This function fails if a credential with the same identifier already
 * exists for the specified subject.
 * 
 * Emits `CredentialStored`.
 */
export interface PublicCredentialsCall_add {
    __kind: 'add'
    credential: Credential
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be the owner of the credential.
 * The sender of the call will be the new deposit owner.
 */
export interface PublicCredentialsCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
    credentialId: H256
}

/**
 * Removes the information pertaining a public credential from the
 * chain and returns the deposit to its payer.
 * 
 * The removal of the credential does not delete it entirely from the
 * blockchain history, but only its link *from* the blockchain state
 * *to* the blockchain history is removed.
 * 
 * Clients parsing public credentials should interpret
 * the lack of such a link as the fact that the credential has been
 * removed by its attester some time in the past.
 * 
 * This function fails if a credential already exists for the specified
 * subject.
 * 
 * The dispatch origin must be the owner of the deposit, hence not the
 * credential's attester.
 * 
 * Emits `CredentialRemoved`.
 */
export interface PublicCredentialsCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    credentialId: H256
}

/**
 * Removes the information pertaining a public credential from the
 * chain.
 * 
 * The removal of the credential does not delete it entirely from the
 * blockchain history, but only its link *from* the blockchain state
 * *to* the blockchain history is removed.
 * 
 * Clients parsing public credentials should interpret
 * the lack of such a link as the fact that the credential has been
 * removed by its attester some time in the past.
 * 
 * This function fails if a credential already exists for the specified
 * subject.
 * 
 * The dispatch origin must be authorized to remove the credential.
 * 
 * Emits `CredentialRemoved`.
 */
export interface PublicCredentialsCall_remove {
    __kind: 'remove'
    credentialId: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Revokes a public credential.
 * 
 * If a credential was already revoked, this function does not fail but
 * simply results in a noop.
 * 
 * The dispatch origin must be authorized to revoke the credential.
 * 
 * Emits `CredentialRevoked`.
 */
export interface PublicCredentialsCall_revoke {
    __kind: 'revoke'
    credentialId: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Unrevokes a public credential.
 * 
 * If a credential was not revoked, this function does not fail but
 * simply results in a noop.
 * 
 * The dispatch origin must be authorized to unrevoke the
 * credential.
 * 
 * Emits `CredentialUnrevoked`.
 */
export interface PublicCredentialsCall_unrevoke {
    __kind: 'unrevoke'
    credentialId: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface PublicCredentialsCall_update_deposit {
    __kind: 'update_deposit'
    credentialId: H256
}

export type PalletAuthorize = PalletAuthorize_Delegation

export interface PalletAuthorize_Delegation {
    __kind: 'Delegation'
    value: DelegationAc
}

export interface DelegationAc {
    subjectNodeId: H256
    maxChecks: number
}

export interface Credential {
    ctypeHash: H256
    subject: Bytes
    claims: Bytes
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_NonDepositClaiming | ProxyType_NonTransfer | ProxyType_ParachainStaking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonDepositClaiming {
    __kind: 'NonDepositClaiming'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_ParachainStaking {
    __kind: 'ParachainStaking'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_ensure_updated | PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Ensure that the a bulk of pre-images is upgraded.
 * 
 * The caller pays no fee if at least 90% of pre-images were successfully updated.
 */
export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: H256[]
}

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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_claim_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_transfer_assets | PolkadotXcmCall_transfer_assets_using_type_and_then

/**
 * Claims assets trapped on this pallet because of leftover assets during XCM execution.
 * 
 * - `origin`: Anyone can call this extrinsic.
 * - `assets`: The exact assets that were trapped. Use the version to specify what version
 * was the latest when they were trapped.
 * - `beneficiary`: The location/account where the claimed assets will be deposited.
 */
export interface PolkadotXcmCall_claim_assets {
    __kind: 'claim_assets'
    assets: VersionedAssets
    beneficiary: VersionedLocation
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than
 * the maximum amount of weight that the message could take to be executed, then no
 * execution attempt will be made.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_442
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
    location: VersionedLocation
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
    location: VersionedLocation
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
    location: V4Location
    version: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * **This function is deprecated: Use `limited_teleport_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve, or through teleports.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
 * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
 * operation will fail and the sent assets may be at risk.
 * 
 * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
 * to `dest`, no limitations imposed on `fees`.
 *  - for local reserve: transfer assets to sovereign account of destination chain and
 *    forward a notification XCM to `dest` to mint and deposit reserve-based assets to
 *    `beneficiary`.
 *  - for destination reserve: burn local assets and forward a notification to `dest` chain
 *    to withdraw the reserve assets from this chain's sovereign account and deposit them
 *    to `beneficiary`.
 *  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
 *    from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
 *    and deposit reserve-based assets to `beneficiary`.
 *  - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
 *    assets and deposit them to `beneficiary`.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
 *   Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
 *   from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_transfer_assets {
    __kind: 'transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Transfer assets from the local chain to the destination chain using explicit transfer
 * types for assets and fees.
 * 
 * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
 * provide the `assets_transfer_type` to be used for `assets`:
 *  - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `TransferType::DestinationReserve`: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
 *    chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
 *    XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
 *    the remote `reserve` is Asset Hub.
 *  - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
 *    mint/teleport assets and deposit them to `beneficiary`.
 * 
 * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
 * buy execution using transferred `assets` identified by `remote_fees_id`.
 * Make sure enough of the specified `remote_fees_id` asset is included in the given list
 * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * `remote_fees_id` may use different transfer type than rest of `assets` and can be
 * specified through `fees_transfer_type`.
 * 
 * The caller needs to specify what should happen to the transferred assets once they reach
 * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
 * contains the instructions to execute on `dest` as a final step.
 *   This is usually as simple as:
 *   `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
 *   but could be something more exotic like sending the `assets` even further.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
 *   parachain across a bridge to another ecosystem destination.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
 * - `remote_fees_id`: One of the included `assets` to be used to pay fees.
 * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
 * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
 *   transfer, which also determines what happens to the assets on the destination chain.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_transfer_assets_using_type_and_then {
    __kind: 'transfer_assets_using_type_and_then'
    dest: VersionedLocation
    assets: VersionedAssets
    assetsTransferType: TransferType
    remoteFeesId: VersionedAssetId
    feesTransferType: TransferType
    customXcmOnDest: VersionedXcm
    weightLimit: V3WeightLimit
}

export type VersionedAssetId = VersionedAssetId_V3 | VersionedAssetId_V4

export interface VersionedAssetId_V3 {
    __kind: 'V3'
    value: V3AssetId
}

export interface VersionedAssetId_V4 {
    __kind: 'V4'
    value: V4AssetId
}

export interface V4AssetId {
    parents: number
    interior: V4Junctions
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

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_PolkadotBulletin | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

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

export interface V3NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
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

export type TransferType = TransferType_DestinationReserve | TransferType_LocalReserve | TransferType_RemoteReserve | TransferType_Teleport

export interface TransferType_DestinationReserve {
    __kind: 'DestinationReserve'
}

export interface TransferType_LocalReserve {
    __kind: 'LocalReserve'
}

export interface TransferType_RemoteReserve {
    __kind: 'RemoteReserve'
    value: VersionedLocation
}

export interface TransferType_Teleport {
    __kind: 'Teleport'
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3 | VersionedXcm_V4

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export interface VersionedXcm_V4 {
    __kind: 'V4'
    value: V4Instruction[]
}

export type V4Instruction = V4Instruction_AliasOrigin | V4Instruction_BurnAsset | V4Instruction_BuyExecution | V4Instruction_ClaimAsset | V4Instruction_ClearError | V4Instruction_ClearOrigin | V4Instruction_ClearTopic | V4Instruction_ClearTransactStatus | V4Instruction_DepositAsset | V4Instruction_DepositReserveAsset | V4Instruction_DescendOrigin | V4Instruction_ExchangeAsset | V4Instruction_ExpectAsset | V4Instruction_ExpectError | V4Instruction_ExpectOrigin | V4Instruction_ExpectPallet | V4Instruction_ExpectTransactStatus | V4Instruction_ExportMessage | V4Instruction_HrmpChannelAccepted | V4Instruction_HrmpChannelClosing | V4Instruction_HrmpNewChannelOpenRequest | V4Instruction_InitiateReserveWithdraw | V4Instruction_InitiateTeleport | V4Instruction_LockAsset | V4Instruction_NoteUnlockable | V4Instruction_QueryPallet | V4Instruction_QueryResponse | V4Instruction_ReceiveTeleportedAsset | V4Instruction_RefundSurplus | V4Instruction_ReportError | V4Instruction_ReportHolding | V4Instruction_ReportTransactStatus | V4Instruction_RequestUnlock | V4Instruction_ReserveAssetDeposited | V4Instruction_SetAppendix | V4Instruction_SetErrorHandler | V4Instruction_SetFeesMode | V4Instruction_SetTopic | V4Instruction_SubscribeVersion | V4Instruction_Transact | V4Instruction_TransferAsset | V4Instruction_TransferReserveAsset | V4Instruction_Trap | V4Instruction_UniversalOrigin | V4Instruction_UnlockAsset | V4Instruction_UnpaidExecution | V4Instruction_UnsubscribeVersion | V4Instruction_WithdrawAsset

export interface V4Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface V4Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface V4Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface V4Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface V4Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V4Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V4Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V4Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V4Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface V4Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface V4Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface V4Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface V4Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V4Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface V4Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V4Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V4Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface V4Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V4Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V4Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V4Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface V4Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface V4Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface V4Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface V4Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface V4Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V4Instruction_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface V4Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface V4Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface V4Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface V4Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface V4Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V4Instruction[]
}

export interface V4Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V4Instruction[]
}

export interface V4Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V4Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V4Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V4Instruction_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V4Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface V4Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V4Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface V4Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface V4Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface V4Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V4Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V3OriginKind = V3OriginKind_Native | V3OriginKind_SovereignAccount | V3OriginKind_Superuser | V3OriginKind_Xcm

export interface V3OriginKind_Native {
    __kind: 'Native'
}

export interface V3OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V3OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V3OriginKind_Xcm {
    __kind: 'Xcm'
}

export type V4Response = V4Response_Assets | V4Response_DispatchResult | V4Response_ExecutionResult | V4Response_Null | V4Response_PalletsInfo | V4Response_Version

export interface V4Response_Assets {
    __kind: 'Assets'
    value: V4Asset[]
}

export interface V4Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V4Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V4Response_Null {
    __kind: 'Null'
}

export interface V4Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V4PalletInfo[]
}

export interface V4Response_Version {
    __kind: 'Version'
    value: number
}

export interface V4PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export interface V4QueryResponseInfo {
    destination: V4Location
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

export type V4AssetFilter = V4AssetFilter_Definite | V4AssetFilter_Wild

export interface V4AssetFilter_Definite {
    __kind: 'Definite'
    value: V4Asset[]
}

export interface V4AssetFilter_Wild {
    __kind: 'Wild'
    value: V4WildAsset
}

export type V4WildAsset = V4WildAsset_All | V4WildAsset_AllCounted | V4WildAsset_AllOf | V4WildAsset_AllOfCounted

export interface V4WildAsset_All {
    __kind: 'All'
}

export interface V4WildAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V4WildAsset_AllOf {
    __kind: 'AllOf'
    id: V4AssetId
    fun: V4WildFungibility
}

export interface V4WildAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V4AssetId
    fun: V4WildFungibility
    count: number
}

export type V4WildFungibility = V4WildFungibility_Fungible | V4WildFungibility_NonFungible

export interface V4WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V4WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export interface V4Asset {
    id: V4AssetId
    fun: V4Fungibility
}

export type V4Fungibility = V4Fungibility_Fungible | V4Fungibility_NonFungible

export interface V4Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V4Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V4AssetInstance
}

export type V4AssetInstance = V4AssetInstance_Array16 | V4AssetInstance_Array32 | V4AssetInstance_Array4 | V4AssetInstance_Array8 | V4AssetInstance_Index | V4AssetInstance_Undefined

export interface V4AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V4AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V4AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V4AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V4AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V4AssetInstance_Undefined {
    __kind: 'Undefined'
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
    originKind: V3OriginKind
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

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
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

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type Type_442 = Type_442_V2 | Type_442_V3 | Type_442_V4

export interface Type_442_V2 {
    __kind: 'V2'
    value: Type_445[]
}

export interface Type_442_V3 {
    __kind: 'V3'
    value: Type_449[]
}

export interface Type_442_V4 {
    __kind: 'V4'
    value: Type_452[]
}

export type Type_452 = Type_452_AliasOrigin | Type_452_BurnAsset | Type_452_BuyExecution | Type_452_ClaimAsset | Type_452_ClearError | Type_452_ClearOrigin | Type_452_ClearTopic | Type_452_ClearTransactStatus | Type_452_DepositAsset | Type_452_DepositReserveAsset | Type_452_DescendOrigin | Type_452_ExchangeAsset | Type_452_ExpectAsset | Type_452_ExpectError | Type_452_ExpectOrigin | Type_452_ExpectPallet | Type_452_ExpectTransactStatus | Type_452_ExportMessage | Type_452_HrmpChannelAccepted | Type_452_HrmpChannelClosing | Type_452_HrmpNewChannelOpenRequest | Type_452_InitiateReserveWithdraw | Type_452_InitiateTeleport | Type_452_LockAsset | Type_452_NoteUnlockable | Type_452_QueryPallet | Type_452_QueryResponse | Type_452_ReceiveTeleportedAsset | Type_452_RefundSurplus | Type_452_ReportError | Type_452_ReportHolding | Type_452_ReportTransactStatus | Type_452_RequestUnlock | Type_452_ReserveAssetDeposited | Type_452_SetAppendix | Type_452_SetErrorHandler | Type_452_SetFeesMode | Type_452_SetTopic | Type_452_SubscribeVersion | Type_452_Transact | Type_452_TransferAsset | Type_452_TransferReserveAsset | Type_452_Trap | Type_452_UniversalOrigin | Type_452_UnlockAsset | Type_452_UnpaidExecution | Type_452_UnsubscribeVersion | Type_452_WithdrawAsset

export interface Type_452_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface Type_452_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface Type_452_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface Type_452_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface Type_452_ClearError {
    __kind: 'ClearError'
}

export interface Type_452_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_452_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_452_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_452_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface Type_452_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_452_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface Type_452_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface Type_452_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface Type_452_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_452_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface Type_452_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_452_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_452_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface Type_452_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_452_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_452_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_452_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface Type_452_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_452_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface Type_452_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface Type_452_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface Type_452_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface Type_452_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface Type_452_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_452_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface Type_452_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface Type_452_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface Type_452_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface Type_452_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface Type_452_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_452[]
}

export interface Type_452_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_452[]
}

export interface Type_452_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_452_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_452_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_452_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_446
}

export interface Type_452_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface Type_452_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_452_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_452_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface Type_452_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface Type_452_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface Type_452_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_452_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export interface Type_446 {
    encoded: Bytes
}

export type Type_449 = Type_449_AliasOrigin | Type_449_BurnAsset | Type_449_BuyExecution | Type_449_ClaimAsset | Type_449_ClearError | Type_449_ClearOrigin | Type_449_ClearTopic | Type_449_ClearTransactStatus | Type_449_DepositAsset | Type_449_DepositReserveAsset | Type_449_DescendOrigin | Type_449_ExchangeAsset | Type_449_ExpectAsset | Type_449_ExpectError | Type_449_ExpectOrigin | Type_449_ExpectPallet | Type_449_ExpectTransactStatus | Type_449_ExportMessage | Type_449_HrmpChannelAccepted | Type_449_HrmpChannelClosing | Type_449_HrmpNewChannelOpenRequest | Type_449_InitiateReserveWithdraw | Type_449_InitiateTeleport | Type_449_LockAsset | Type_449_NoteUnlockable | Type_449_QueryPallet | Type_449_QueryResponse | Type_449_ReceiveTeleportedAsset | Type_449_RefundSurplus | Type_449_ReportError | Type_449_ReportHolding | Type_449_ReportTransactStatus | Type_449_RequestUnlock | Type_449_ReserveAssetDeposited | Type_449_SetAppendix | Type_449_SetErrorHandler | Type_449_SetFeesMode | Type_449_SetTopic | Type_449_SubscribeVersion | Type_449_Transact | Type_449_TransferAsset | Type_449_TransferReserveAsset | Type_449_Trap | Type_449_UniversalOrigin | Type_449_UnlockAsset | Type_449_UnpaidExecution | Type_449_UnsubscribeVersion | Type_449_WithdrawAsset

export interface Type_449_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_449_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_449_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_449_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_449_ClearError {
    __kind: 'ClearError'
}

export interface Type_449_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_449_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_449_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_449_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_449_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_449_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_449_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_449_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_449_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_449_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_449_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_449_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_449_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_449_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_449_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_449_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_449_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_449_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_449_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_449_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_449_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_449_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_449_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_449_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_449_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_449_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_449_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_449_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_449_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_449_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_449[]
}

export interface Type_449_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_449[]
}

export interface Type_449_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_449_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_449_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_449_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_446
}

export interface Type_449_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_449_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_449_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_449_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_449_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_449_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_449_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_449_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type Type_445 = Type_445_BuyExecution | Type_445_ClaimAsset | Type_445_ClearError | Type_445_ClearOrigin | Type_445_DepositAsset | Type_445_DepositReserveAsset | Type_445_DescendOrigin | Type_445_ExchangeAsset | Type_445_HrmpChannelAccepted | Type_445_HrmpChannelClosing | Type_445_HrmpNewChannelOpenRequest | Type_445_InitiateReserveWithdraw | Type_445_InitiateTeleport | Type_445_QueryHolding | Type_445_QueryResponse | Type_445_ReceiveTeleportedAsset | Type_445_RefundSurplus | Type_445_ReportError | Type_445_ReserveAssetDeposited | Type_445_SetAppendix | Type_445_SetErrorHandler | Type_445_SubscribeVersion | Type_445_Transact | Type_445_TransferAsset | Type_445_TransferReserveAsset | Type_445_Trap | Type_445_UnsubscribeVersion | Type_445_WithdrawAsset

export interface Type_445_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_445_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_445_ClearError {
    __kind: 'ClearError'
}

export interface Type_445_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_445_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_445_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_445_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_445_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_445_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_445_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_445_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_445_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_445_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_445_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_445_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_445_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_445_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_445_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_445_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_445_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_445[]
}

export interface Type_445_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_445[]
}

export interface Type_445_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_445_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_446
}

export interface Type_445_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_445_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_445_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_445_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_445_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type VersionedLocation = VersionedLocation_V2 | VersionedLocation_V3 | VersionedLocation_V4

export interface VersionedLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface VersionedLocation_V4 {
    __kind: 'V4'
    value: V4Location
}

export type VersionedAssets = VersionedAssets_V2 | VersionedAssets_V3 | VersionedAssets_V4

export interface VersionedAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface VersionedAssets_V4 {
    __kind: 'V4'
    value: V4Asset[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

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
    validationData: V8PersistedValidationData
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

export interface V8PersistedValidationData {
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
    more: bigint
}

/**
 * Execute the network exit of a candidate who requested to leave at
 * least `ExitQueueDelay` rounds ago. Prepares unstaking of the
 * candidates and their delegators stake which can be unfreezed via
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
 * delegators.
 * 
 * Moreover, sets rewards for all collators and delegators
 * before adjusting the inflation.
 * 
 * The dispatch origin can be any signed one because we bail if called
 * too early.
 * 
 * Emits `RoundInflationSet`.
 */
export interface ParachainStakingCall_execute_scheduled_reward_change {
    __kind: 'execute_scheduled_reward_change'
    currentCollatorCandidatePoolSize: number
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
 * which can be unfreezed via `unlock_unstaked` after waiting at
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
 * Actively increment the rewards of a collator.
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
 * Actively increment the rewards of a delegator.
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
    new: bigint
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
 * NOTE: Iterates over CandidatePool and for each candidate over their
 * delegators to update their rewards before the reward rates change.
 * Needs to be improved when scaling up `MaxTopCandidates`.
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
    currentCollatorCandidatePoolSize: number
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
    height: bigint
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MigrationCall = MigrationCall_update_balance

export interface MigrationCall_update_balance {
    __kind: 'update_balance'
    requestedMigrations: EntriesToMigrate
}

export interface EntriesToMigrate {
    attestation: H256[]
    delegation: H256[]
    did: AccountId32[]
    lookup: LinkableAccountId[]
    w3N: Web3Name[]
    publicCredentials: [AssetDid, H256][]
}

export interface AssetDid {
    chainId: V1ChainId
    assetId: V1AssetId
}

export type V1AssetId = V1AssetId_Erc1155 | V1AssetId_Erc20 | V1AssetId_Erc721 | V1AssetId_Generic | V1AssetId_Slip44

export interface V1AssetId_Erc1155 {
    __kind: 'Erc1155'
    value: V1EvmSmartContractNonFungibleReference
}

export interface V1AssetId_Erc20 {
    __kind: 'Erc20'
    value: V1EvmSmartContractFungibleReference
}

export interface V1AssetId_Erc721 {
    __kind: 'Erc721'
    value: V1EvmSmartContractNonFungibleReference
}

export interface V1AssetId_Generic {
    __kind: 'Generic'
    value: V1GenericAssetId
}

export interface V1AssetId_Slip44 {
    __kind: 'Slip44'
    value: V1Slip44Reference
}

export type V1Slip44Reference = bigint

export interface V1GenericAssetId {
    namespace: V1GenericAssetNamespace
    reference: V1GenericAssetReference
    id?: (V1GenericAssetIdentifier | undefined)
}

export type V1GenericAssetIdentifier = Bytes

export type V1GenericAssetReference = Bytes

export type V1GenericAssetNamespace = Bytes

export type V1EvmSmartContractNonFungibleReference = [V1EvmSmartContractFungibleReference, (V1EvmSmartContractNonFungibleIdentifier | undefined)]

export type V1EvmSmartContractNonFungibleIdentifier = Bytes

export type V1EvmSmartContractFungibleReference = Bytes

export type V1ChainId = V1ChainId_Bip122 | V1ChainId_Dotsama | V1ChainId_Eip155 | V1ChainId_Generic | V1ChainId_Solana

export interface V1ChainId_Bip122 {
    __kind: 'Bip122'
    value: V1GenesisHexHash32Reference
}

export interface V1ChainId_Dotsama {
    __kind: 'Dotsama'
    value: V1GenesisHexHash32Reference
}

export interface V1ChainId_Eip155 {
    __kind: 'Eip155'
    value: V1Eip155Reference
}

export interface V1ChainId_Generic {
    __kind: 'Generic'
    value: V1GenericChainId
}

export interface V1ChainId_Solana {
    __kind: 'Solana'
    value: V1GenesisBase58Hash32Reference
}

export type V1GenesisBase58Hash32Reference = Bytes

export interface V1GenericChainId {
    namespace: V1GenericChainNamespace
    reference: V1GenericChainReference
}

export type V1GenericChainReference = Bytes

export type V1GenericChainNamespace = Bytes

export type V1Eip155Reference = bigint

export type V1GenesisHexHash32Reference = Bytes

export type Web3Name = Bytes

export type LinkableAccountId = LinkableAccountId_AccountId20 | LinkableAccountId_AccountId32

export interface LinkableAccountId_AccountId20 {
    __kind: 'AccountId20'
    value: AccountId20
}

export interface LinkableAccountId_AccountId32 {
    __kind: 'AccountId32'
    value: AccountId32
}

export type AccountId20 = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_execute_overweight | MessageQueueCall_reap_page

/**
 * Execute an overweight message.
 * 
 * Temporary processing errors will be propagated whereas permanent errors are treated
 * as success condition.
 * 
 * - `origin`: Must be `Signed`.
 * - `message_origin`: The origin from which the message to be executed arrived.
 * - `page`: The page in the queue in which the message to be executed is sitting.
 * - `index`: The index into the queue of the message to be executed.
 * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *   of the message.
 * 
 * Benchmark complexity considerations: O(index + weight_limit).
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * Remove a page which has no more messages remaining to be processed or is stale.
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Here | AggregateMessageOrigin_Parent | AggregateMessageOrigin_Sibling

export interface AggregateMessageOrigin_Here {
    __kind: 'Here'
}

export interface AggregateMessageOrigin_Parent {
    __kind: 'Parent'
}

export interface AggregateMessageOrigin_Sibling {
    __kind: 'Sibling'
    value: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IsmpParachainCall = IsmpParachainCall_add_parachain | IsmpParachainCall_remove_parachain | IsmpParachainCall_update_parachain_consensus

/**
 * Add some new parachains to the parachains whitelist
 */
export interface IsmpParachainCall_add_parachain {
    __kind: 'add_parachain'
    paraIds: ParachainData[]
}

/**
 * Removes some parachains from the parachains whitelist
 */
export interface IsmpParachainCall_remove_parachain {
    __kind: 'remove_parachain'
    paraIds: number[]
}

/**
 * This allows block builders submit parachain consensus proofs as inherents. If the
 * provided [`ConsensusMessage`] is not for a parachain, this call will fail.
 */
export interface IsmpParachainCall_update_parachain_consensus {
    __kind: 'update_parachain_consensus'
    data: ConsensusMessage
}

export interface ConsensusMessage {
    consensusProof: Bytes
    consensusStateId: Bytes
    signer: Bytes
}

export interface ParachainData {
    id: number
    slotDuration: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IsmpCall = IsmpCall_create_consensus_client | IsmpCall_fund_message | IsmpCall_handle_unsigned | IsmpCall_update_consensus_state

/**
 * Create a consensus client, using a subjectively chosen consensus state. This can also
 * be used to overwrite an existing consensus state. The dispatch origin for this
 * call must be `T::AdminOrigin`.
 * 
 * - `message`: [`CreateConsensusState`] struct.
 * 
 * Emits [`Event::ConsensusClientCreated`] if successful.
 */
export interface IsmpCall_create_consensus_client {
    __kind: 'create_consensus_client'
    message: CreateConsensusState
}

/**
 * Add more funds to a message (request or response) to be used for delivery and execution.
 * 
 * Should not be called on a message that has been completed (delivered or timed-out) as
 * those funds will be lost forever.
 */
export interface IsmpCall_fund_message {
    __kind: 'fund_message'
    message: FundMessageParams
}

/**
 * Execute the provided batch of ISMP messages, this will short-circuit and revert if any
 * of the provided messages are invalid. This is an unsigned extrinsic that permits anyone
 * execute ISMP messages for free, provided they have valid proofs and the messages have
 * not been previously processed.
 * 
 * The dispatch origin for this call must be an unsigned one.
 * 
 * - `messages`: the messages to handle or process.
 * 
 * Emits different message events based on the Message received if successful.
 */
export interface IsmpCall_handle_unsigned {
    __kind: 'handle_unsigned'
    messages: Message[]
}

/**
 * Modify the unbonding period and challenge period for a consensus state.
 * The dispatch origin for this call must be `T::AdminOrigin`.
 * 
 * - `message`: `UpdateConsensusState` struct.
 */
export interface IsmpCall_update_consensus_state {
    __kind: 'update_consensus_state'
    message: UpdateConsensusState
}

export interface UpdateConsensusState {
    consensusStateId: Bytes
    unbondingPeriod?: (bigint | undefined)
    challengePeriods: [StateMachine, bigint][]
}

export type Message = Message_Consensus | Message_FraudProof | Message_Request | Message_Response | Message_Timeout

export interface Message_Consensus {
    __kind: 'Consensus'
    value: ConsensusMessage
}

export interface Message_FraudProof {
    __kind: 'FraudProof'
    value: FraudProofMessage
}

export interface Message_Request {
    __kind: 'Request'
    value: RequestMessage
}

export interface Message_Response {
    __kind: 'Response'
    value: ResponseMessage
}

export interface Message_Timeout {
    __kind: 'Timeout'
    value: TimeoutMessage
}

export type TimeoutMessage = TimeoutMessage_Get | TimeoutMessage_Post | TimeoutMessage_PostResponse

export interface TimeoutMessage_Get {
    __kind: 'Get'
    requests: Request[]
}

export interface TimeoutMessage_Post {
    __kind: 'Post'
    requests: Request[]
    timeoutProof: Proof
}

export interface TimeoutMessage_PostResponse {
    __kind: 'PostResponse'
    responses: PostResponse[]
    timeoutProof: Proof
}

export interface PostResponse {
    post: PostRequest
    response: Bytes
    timeoutTimestamp: bigint
}

export interface PostRequest {
    source: StateMachine
    dest: StateMachine
    nonce: bigint
    from: Bytes
    to: Bytes
    timeoutTimestamp: bigint
    body: Bytes
}

export interface Proof {
    height: StateMachineHeight
    proof: Bytes
}

export interface StateMachineHeight {
    id: StateMachineId
    height: bigint
}

export interface StateMachineId {
    stateId: StateMachine
    consensusStateId: Bytes
}

export type Request = Request_Get | Request_Post

export interface Request_Get {
    __kind: 'Get'
    value: GetRequest
}

export interface Request_Post {
    __kind: 'Post'
    value: PostRequest
}

export interface GetRequest {
    source: StateMachine
    dest: StateMachine
    nonce: bigint
    from: Bytes
    keys: Bytes[]
    height: bigint
    context: Bytes
    timeoutTimestamp: bigint
}

export interface ResponseMessage {
    datagram: RequestResponse
    proof: Proof
    signer: Bytes
}

export type RequestResponse = RequestResponse_Request | RequestResponse_Response

export interface RequestResponse_Request {
    __kind: 'Request'
    value: Request[]
}

export interface RequestResponse_Response {
    __kind: 'Response'
    value: Response[]
}

export type Response = Response_Get | Response_Post

export interface Response_Get {
    __kind: 'Get'
    value: GetResponse
}

export interface Response_Post {
    __kind: 'Post'
    value: PostResponse
}

export interface GetResponse {
    get: GetRequest
    values: StorageValue[]
}

export interface StorageValue {
    key: Bytes
    value?: (Bytes | undefined)
}

export interface RequestMessage {
    requests: PostRequest[]
    proof: Proof
    signer: Bytes
}

export interface FraudProofMessage {
    proof1: Bytes
    proof2: Bytes
    consensusStateId: Bytes
}

export interface FundMessageParams {
    commitment: MessageCommitment
    amount: bigint
}

export type MessageCommitment = MessageCommitment_Request | MessageCommitment_Response

export interface MessageCommitment_Request {
    __kind: 'Request'
    value: H256
}

export interface MessageCommitment_Response {
    __kind: 'Response'
    value: H256
}

export interface CreateConsensusState {
    consensusState: Bytes
    consensusClientId: Bytes
    consensusStateId: Bytes
    unbondingPeriod: bigint
    challengePeriods: [StateMachine, bigint][]
    stateMachineCommitments: [StateMachineId, StateCommitmentHeight][]
}

export interface StateCommitmentHeight {
    commitment: StateCommitment
    height: bigint
}

export interface StateCommitment {
    timestamp: bigint
    overlayRoot?: (H256 | undefined)
    stateRoot: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 * Assign an previously unassigned index.
 * 
 * Payment: `Deposit` is reserved from the sender account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be claimed. This must not be in use.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: bigint
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: bigint
    freeze: boolean
}

/**
 * Free up an index owned by the sender.
 * 
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 * - `index`: the index to be freed. This must be owned by the sender.
 * 
 * Emits `IndexFreed` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: bigint
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 * 
 * - `index`: the index to be frozen in place.
 * 
 * Emits `IndexFrozen` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: bigint
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
    index: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FungiblesCall = FungiblesCall_approve_transfer | FungiblesCall_block | FungiblesCall_burn | FungiblesCall_cancel_approval | FungiblesCall_clear_metadata | FungiblesCall_create | FungiblesCall_destroy_accounts | FungiblesCall_destroy_approvals | FungiblesCall_finish_destroy | FungiblesCall_force_asset_status | FungiblesCall_force_cancel_approval | FungiblesCall_force_clear_metadata | FungiblesCall_force_create | FungiblesCall_force_set_metadata | FungiblesCall_force_transfer | FungiblesCall_freeze | FungiblesCall_freeze_asset | FungiblesCall_mint | FungiblesCall_refund | FungiblesCall_refund_other | FungiblesCall_set_metadata | FungiblesCall_set_min_balance | FungiblesCall_set_team | FungiblesCall_start_destroy | FungiblesCall_thaw | FungiblesCall_thaw_asset | FungiblesCall_touch | FungiblesCall_touch_other | FungiblesCall_transfer | FungiblesCall_transfer_all | FungiblesCall_transfer_approved | FungiblesCall_transfer_keep_alive | FungiblesCall_transfer_ownership

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
export interface FungiblesCall_approve_transfer {
    __kind: 'approve_transfer'
    id: V4Location
    delegate: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the account's asset.
 * - `who`: The account to be unblocked.
 * 
 * Emits `Blocked`.
 * 
 * Weight: `O(1)`
 */
export interface FungiblesCall_block {
    __kind: 'block'
    id: V4Location
    who: MultiAddress
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
export interface FungiblesCall_burn {
    __kind: 'burn'
    id: V4Location
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
export interface FungiblesCall_cancel_approval {
    __kind: 'cancel_approval'
    id: V4Location
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
export interface FungiblesCall_clear_metadata {
    __kind: 'clear_metadata'
    id: V4Location
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
 * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface FungiblesCall_create {
    __kind: 'create'
    id: V4Location
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
export interface FungiblesCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: V4Location
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
export interface FungiblesCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: V4Location
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
export interface FungiblesCall_finish_destroy {
    __kind: 'finish_destroy'
    id: V4Location
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
export interface FungiblesCall_force_asset_status {
    __kind: 'force_asset_status'
    id: V4Location
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
export interface FungiblesCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: V4Location
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
export interface FungiblesCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: V4Location
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
 * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
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
export interface FungiblesCall_force_create {
    __kind: 'force_create'
    id: V4Location
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
export interface FungiblesCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: V4Location
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
export interface FungiblesCall_force_transfer {
    __kind: 'force_transfer'
    id: V4Location
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 * must already exist as an entry in `Account`s of the asset. If you want to freeze an
 * account that does not have an entry, use `touch_other` first.
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
export interface FungiblesCall_freeze {
    __kind: 'freeze'
    id: V4Location
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
export interface FungiblesCall_freeze_asset {
    __kind: 'freeze_asset'
    id: V4Location
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
export interface FungiblesCall_mint {
    __kind: 'mint'
    id: V4Location
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
 * account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for which the caller would like the deposit
 *   refunded.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface FungiblesCall_refund {
    __kind: 'refund'
    id: V4Location
    allowBurn: boolean
}

/**
 * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
 * 
 * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
 * order to burn a non-zero balance of the asset, the caller must be the account and should
 * use `refund`.
 * 
 * - `id`: The identifier of the asset for the account holding a deposit.
 * - `who`: The account to refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface FungiblesCall_refund_other {
    __kind: 'refund_other'
    id: V4Location
    who: MultiAddress
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
export interface FungiblesCall_set_metadata {
    __kind: 'set_metadata'
    id: V4Location
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * Sets the minimum balance of an asset.
 * 
 * Only works if there aren't any accounts that are holding the asset or if
 * the new value of `min_balance` is less than the old one.
 * 
 * Origin must be Signed and the sender has to be the Owner of the
 * asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `min_balance`: The new value of `min_balance`.
 * 
 * Emits `AssetMinBalanceChanged` event when successful.
 */
export interface FungiblesCall_set_min_balance {
    __kind: 'set_min_balance'
    id: V4Location
    minBalance: bigint
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
export interface FungiblesCall_set_team {
    __kind: 'set_team'
    id: V4Location
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
 */
export interface FungiblesCall_start_destroy {
    __kind: 'start_destroy'
    id: V4Location
}

/**
 * Allow unprivileged transfers to and from an account again.
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
export interface FungiblesCall_thaw {
    __kind: 'thaw'
    id: V4Location
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
export interface FungiblesCall_thaw_asset {
    __kind: 'thaw_asset'
    id: V4Location
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
export interface FungiblesCall_touch {
    __kind: 'touch'
    id: V4Location
}

/**
 * Create an asset account for `who`.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
 *   must have sufficient funds for a deposit to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * - `who`: The account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface FungiblesCall_touch_other {
    __kind: 'touch_other'
    id: V4Location
    who: MultiAddress
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
export interface FungiblesCall_transfer {
    __kind: 'transfer'
    id: V4Location
    target: MultiAddress
    amount: bigint
}

/**
 * Transfer the entire transferable balance from the caller asset account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `id`: The identifier of the asset for the account holding a deposit.
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the asset account has, causing the sender asset account to be killed
 *   (false), or transfer everything except at least the minimum balance, which will
 *   guarantee to keep the sender asset account alive (true).
 */
export interface FungiblesCall_transfer_all {
    __kind: 'transfer_all'
    id: V4Location
    dest: MultiAddress
    keepAlive: boolean
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
export interface FungiblesCall_transfer_approved {
    __kind: 'transfer_approved'
    id: V4Location
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
export interface FungiblesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: V4Location
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
export interface FungiblesCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: V4Location
    owner: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DipProviderCall = DipProviderCall_commit_identity | DipProviderCall_delete_identity_commitment

/**
 * Generate a new versioned commitment for the subject identified by
 * the provided `Identifier`. If an old commitment for the same version
 * is present, it is overridden. Hooks are called before the new
 * commitment is stored, and optionally before the old one is replaced.
 */
export interface DipProviderCall_commit_identity {
    __kind: 'commit_identity'
    identifier: AccountId32
    version?: (number | undefined)
}

/**
 * Delete an identity commitment of a specific version for a specific
 * `Identifier`. If a commitment of the provided version does not exist
 * for the given `Identifier`, an error is returned. Hooks are called
 * after the commitment has been removed.
 */
export interface DipProviderCall_delete_identity_commitment {
    __kind: 'delete_identity_commitment'
    identifier: AccountId32
    version?: (number | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DidLookupCall = DidLookupCall_associate_account | DidLookupCall_associate_sender | DidLookupCall_change_deposit_owner | DidLookupCall_reclaim_deposit | DidLookupCall_remove_account_association | DidLookupCall_remove_sender_association | DidLookupCall_update_deposit

/**
 * Associate the given account to the DID that authorized this call.
 * 
 * The account has to sign the DID and a blocknumber after which the
 * signature expires in order to authorize the association.
 * 
 * The signature will be checked against the scale encoded tuple of the
 * method specific id of the did identifier and the block number after
 * which the signature should be regarded invalid.
 * 
 * Emits `AssociationEstablished` and, optionally, `AssociationRemoved`
 * if there was a previous association for the account.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_associate_account {
    __kind: 'associate_account'
    req: AssociateAccountRequest
    expiration: bigint
}

/**
 * Associate the sender of the call to the DID that authorized this
 * call.
 * 
 * Emits `AssociationEstablished` and, optionally, `AssociationRemoved`
 * if there was a previous association for the account.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_associate_sender {
    __kind: 'associate_sender'
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be linked to the account.
 * The sender of the call will be the new deposit owner.
 */
export interface DidLookupCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
    account: LinkableAccountId
}

/**
 * Remove the association of the provided account. This call can only
 * be called from the deposit owner. The reserved deposit will be
 * freed.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids
 * - Writes: ConnectedDids
 * # </weight>
 */
export interface DidLookupCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    account: LinkableAccountId
}

/**
 * Remove the association of the provided account ID. This call doesn't
 * require the authorization of the account ID, but the associated DID
 * needs to match the DID that authorized this call.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_remove_account_association {
    __kind: 'remove_account_association'
    account: LinkableAccountId
}

/**
 * Remove the association of the sender account. This call doesn't
 * require the authorization of the DID, but requires a signed origin.
 * 
 * Emits `AssociationRemoved`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: ConnectedDids + ConnectedAccounts + DID Origin Check
 * - Writes: ConnectedDids + ConnectedAccounts
 * # </weight>
 */
export interface DidLookupCall_remove_sender_association {
    __kind: 'remove_sender_association'
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface DidLookupCall_update_deposit {
    __kind: 'update_deposit'
    account: LinkableAccountId
}

export type AssociateAccountRequest = AssociateAccountRequest_Ethereum | AssociateAccountRequest_Polkadot

export interface AssociateAccountRequest_Ethereum {
    __kind: 'Ethereum'
    value: [AccountId20, EthereumSignature]
}

export interface AssociateAccountRequest_Polkadot {
    __kind: 'Polkadot'
    value: [AccountId32, MultiSignature]
}

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type EthereumSignature = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DidCall = DidCall_add_key_agreement_key | DidCall_add_service_endpoint | DidCall_change_deposit_owner | DidCall_create | DidCall_create_from_account | DidCall_delete | DidCall_dispatch_as | DidCall_reclaim_deposit | DidCall_remove_attestation_key | DidCall_remove_delegation_key | DidCall_remove_key_agreement_key | DidCall_remove_service_endpoint | DidCall_set_attestation_key | DidCall_set_authentication_key | DidCall_set_delegation_key | DidCall_submit_did_call | DidCall_update_deposit

/**
 * Add a single new key agreement key to the DID.
 * 
 * The new key is added to the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_add_key_agreement_key {
    __kind: 'add_key_agreement_key'
    newKey: DidEncryptionKey
}

/**
 * Add a new service endpoint under the given DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did, ServiceEndpoints, DidEndpointsCount
 * - Writes: Did, ServiceEndpoints, DidEndpointsCount
 * # </weight>
 */
export interface DidCall_add_service_endpoint {
    __kind: 'add_service_endpoint'
    serviceEndpoint: DidEndpoint
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be the did owner.
 * The sender of the call will be the new deposit owner.
 */
export interface DidCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
}

/**
 * Store a new DID on chain, after verifying that the creation
 * operation has been signed by the KILT account associated with the
 * identifier of the DID being created and that a DID with the same
 * identifier has not previously existed on (and then deleted from) the
 * chain.
 * 
 * There must be no DID information stored on chain under the same DID
 * identifier.
 * 
 * The new keys added with this operation are stored under the DID
 * identifier along with the block number in which the operation was
 * executed.
 * 
 * The dispatch origin can be any KILT account with enough funds to
 * execute the extrinsic and it does not have to be tied in any way to
 * the KILT account identifying the DID subject.
 * 
 * Emits `DidCreated`.
 * 
 * # <weight>
 * - The transaction's complexity is mainly dependent on the number of
 *   new key agreement keys and the number of new service endpoints
 *   included in the operation.
 * ---------
 * Weight: O(K) + O(N) where K is the number of new key agreement
 * keys bounded by `MaxNewKeyAgreementKeys`, while N is the number of
 * new service endpoints bounded by `MaxNumberOfServicesPerDid`.
 * - Reads: [Origin Account], Did, DidBlacklist
 * - Writes: Did (with K new key agreement keys), ServiceEndpoints
 *   (with N new service endpoints), DidEndpointsCount
 * # </weight>
 */
export interface DidCall_create {
    __kind: 'create'
    details: DidCreationDetails
    signature: DidSignature
}

/**
 * Store a new DID on chain.
 * 
 * The DID identifier is derived from the account ID that submits this
 * call. The authentication key must correspond to the account ID that
 * submitted this call. For accounts that use the ed25519 and sr25519
 * schema, the authentication key must be of the
 * `DidVerificationKey::Ed25519` or `DidVerificationKey::Sr25519`
 * variant and contains the public key. For Ecdsa accounts, the
 * `DidVerificationKey::Ecdsa` variant is calculated by hashing the
 * Ecdsa public key.
 * 
 * If this call is dispatched by an account id that doesn't correspond
 * to a public private key pair, the `DidVerificationKey::Account`
 * variant shall be used (Multisig, Pure Proxy, Governance origins).
 * The resulting DID can NOT be used for signing data and is therefore
 * limited to onchain activities.
 * 
 * There must be no DID information stored on chain under the same DID
 * identifier. This call will fail if there exists a DID with the same
 * identifier or if a DID with the same identifier existed and was
 * deleted.
 * 
 * The origin for this account must be funded and provide the required
 * deposit and fee.
 * 
 * Emits `DidCreated`.
 */
export interface DidCall_create_from_account {
    __kind: 'create_from_account'
    authenticationKey: DidVerificationKey
}

/**
 * Delete a DID from the chain and all information associated with it,
 * after verifying that the delete operation has been signed by the DID
 * subject using the authentication key currently stored on chain.
 * 
 * The referenced DID identifier must be present on chain before the
 * delete operation is evaluated.
 * 
 * After it is deleted, a DID with the same identifier cannot be
 * re-created ever again.
 * 
 * As the result of the deletion, all traces of the DID are removed
 * from the storage, which results in the invalidation of all
 * attestations issued by the DID subject.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidDeleted`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Kills: Did entry associated to the DID identifier
 * # </weight>
 */
export interface DidCall_delete {
    __kind: 'delete'
    endpointsToRemove: number
}

/**
 * Proxy a dispatchable call of another runtime extrinsic that
 * supports a DID origin.
 * 
 * The referenced DID identifier must be present on chain before the
 * operation is dispatched.
 * 
 * A call submitted through this extrinsic must be signed with the
 * right DID key, depending on the call. In contrast to the
 * `submit_did_call` extrinsic, this call doesn't separate the sender
 * from the DID subject. The key that must be used for this DID call
 * is required to also be a valid account with enough balance to pay
 * for fees.
 * 
 * The dispatch origin must be a KILT account with enough funds to
 * execute the extrinsic and must correspond to the required DID
 * Verification Key.
 * 
 * Emits `DidCallDispatched`.
 */
export interface DidCall_dispatch_as {
    __kind: 'dispatch_as'
    didIdentifier: AccountId32
    call: Call
}

/**
 * Reclaim a deposit for a DID. This will delete the DID and all
 * information associated with it, after verifying that the caller is
 * the owner of the deposit.
 * 
 * The referenced DID identifier must be present on chain before the
 * delete operation is evaluated.
 * 
 * After it is deleted, a DID with the same identifier cannot be
 * re-created ever again.
 * 
 * As the result of the deletion, all traces of the DID are removed
 * from the storage, which results in the invalidation of all
 * attestations issued by the DID subject.
 * 
 * Emits `DidDeleted`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Kills: Did entry associated to the DID identifier
 * # </weight>
 */
export interface DidCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    didSubject: AccountId32
    endpointsToRemove: number
}

/**
 * Remove the DID attestation key.
 * 
 * The old key is deleted from the set of public keys if
 * it is not used in any other part of the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_attestation_key {
    __kind: 'remove_attestation_key'
}

/**
 * Remove the DID delegation key.
 * 
 * The old key is deleted from the set of public keys if
 * it is not used in any other part of the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_delegation_key {
    __kind: 'remove_delegation_key'
}

/**
 * Remove a DID key agreement key from both its set of key agreement
 * keys and as well as its public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_remove_key_agreement_key {
    __kind: 'remove_key_agreement_key'
    keyId: H256
}

/**
 * Remove the service with the provided ID from the DID.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], ServiceEndpoints, DidEndpointsCount
 * - Writes: Did, ServiceEndpoints, DidEndpointsCount
 * # </weight>
 */
export interface DidCall_remove_service_endpoint {
    __kind: 'remove_service_endpoint'
    serviceId: Bytes
}

/**
 * Set or update the DID attestation key.
 * 
 * If an old key existed, it is deleted from the set of public keys if
 * it is not used in any other part of the DID. The new key is added to
 * the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_attestation_key {
    __kind: 'set_attestation_key'
    newKey: DidVerificationKey
}

/**
 * Update the DID authentication key.
 * 
 * The old key is deleted from the set of public keys if it is
 * not used in any other part of the DID. The new key is added to the
 * set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_authentication_key {
    __kind: 'set_authentication_key'
    newKey: DidVerificationKey
}

/**
 * Set or update the DID delegation key.
 * 
 * If an old key existed, it is deleted from the set of public keys if
 * it is not used in any other part of the DID. The new key is added to
 * the set of public keys.
 * 
 * The dispatch origin must be a DID origin proxied via the
 * `submit_did_call` extrinsic.
 * 
 * Emits `DidUpdated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_set_delegation_key {
    __kind: 'set_delegation_key'
    newKey: DidVerificationKey
}

/**
 * Proxy a dispatchable call of another runtime extrinsic that
 * supports a DID origin.
 * 
 * The referenced DID identifier must be present on chain before the
 * operation is dispatched.
 * 
 * A call submitted through this extrinsic must be signed with the
 * right DID key, depending on the call. This information is provided
 * by the `DidAuthorizedCallOperation` parameter, which specifies the
 * DID subject acting as the origin of the call, the DID's tx counter
 * (nonce), the dispatchable to call in case signature verification
 * succeeds, the type of DID key to use to verify the operation
 * signature, and the block number the operation was targeting for
 * inclusion, when it was created and signed.
 * 
 * In case the signature is incorrect, the nonce is not valid, the
 * required key is not present for the specified DID, or the block
 * specified is too old the verification fails and the call is not
 * dispatched. Otherwise, the call is properly dispatched with a
 * `DidOrigin` origin indicating the DID subject.
 * 
 * A successful dispatch operation results in the tx counter associated
 * with the given DID to be incremented, to mitigate replay attacks.
 * 
 * The dispatch origin can be any KILT account with enough funds to
 * execute the extrinsic and it does not have to be tied in any way to
 * the KILT account identifying the DID subject.
 * 
 * Emits `DidCallDispatched`.
 * 
 * # <weight>
 * Weight: O(1) + weight of the dispatched call
 * - Reads: [Origin Account], Did
 * - Writes: Did
 * # </weight>
 */
export interface DidCall_submit_did_call {
    __kind: 'submit_did_call'
    didCall: DidAuthorizedCallOperation
    signature: DidSignature
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface DidCall_update_deposit {
    __kind: 'update_deposit'
    did: AccountId32
}

export interface DidAuthorizedCallOperation {
    did: AccountId32
    txCounter: bigint
    call: Call
    blockNumber: bigint
    submitter: AccountId32
}

export type DidVerificationKey = DidVerificationKey_Account | DidVerificationKey_Ecdsa | DidVerificationKey_Ed25519 | DidVerificationKey_Sr25519

export interface DidVerificationKey_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface DidVerificationKey_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface DidVerificationKey_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface DidVerificationKey_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export type DidSignature = DidSignature_Ecdsa | DidSignature_Ed25519 | DidSignature_Sr25519

export interface DidSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface DidSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface DidSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export interface DidCreationDetails {
    did: AccountId32
    submitter: AccountId32
    newKeyAgreementKeys: DidEncryptionKey[]
    newAttestationKey?: (DidVerificationKey | undefined)
    newDelegationKey?: (DidVerificationKey | undefined)
    newServiceDetails: DidEndpoint[]
}

export interface DidEndpoint {
    id: Bytes
    serviceTypes: Bytes[]
    urls: Bytes[]
}

export type DidEncryptionKey = DidEncryptionKey_X25519

export interface DidEncryptionKey_X25519 {
    __kind: 'X25519'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DepositStorageCall = DepositStorageCall_reclaim_deposit

/**
 * Reclaim a deposit that was previously taken. If there is no deposit
 * with the given key under the given namespace, it returns an error.
 * If a deposit exists, the deposit hooks are invoked after the deposit
 * has been removed from the pallet storage.
 */
export interface DepositStorageCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    namespace: DepositNamespace
    key: Bytes
}

export type DepositNamespace = DepositNamespace_BondedTokens | DepositNamespace_DipProvider

export interface DepositNamespace_BondedTokens {
    __kind: 'BondedTokens'
}

export interface DepositNamespace_DipProvider {
    __kind: 'DipProvider'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DelegationCall = DelegationCall_add_delegation | DelegationCall_change_deposit_owner | DelegationCall_create_hierarchy | DelegationCall_reclaim_deposit | DelegationCall_remove_delegation | DelegationCall_revoke_delegation | DelegationCall_update_deposit

/**
 * Create a new delegation node.
 * 
 * The new delegation node represents a new trust hierarchy that
 * considers the new node as its root. The owner of this node has full
 * control over any of its direct and indirect descendants.
 * 
 * For the creation to succeed, the delegatee must provide a valid
 * signature over the (blake256) hash of the creation operation details
 * which include (in order) delegation id, root node id, parent id, and
 * permissions of the new node.
 * 
 * There must be no delegation with the same id stored on chain.
 * Furthermore, the referenced root and parent nodes must already be
 * present on chain and contain the valid permissions and revocation
 * status (i.e., not revoked).
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Requires the sender of the transaction to have a reservable balance
 * of at least `Deposit` many tokens.
 * 
 * Emits `DelegationCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Roots, Delegations
 * - Writes: Delegations
 * # </weight>
 */
export interface DelegationCall_add_delegation {
    __kind: 'add_delegation'
    delegationId: H256
    parentId: H256
    delegate: AccountId32
    permissions: Permissions
    delegateSignature: DidSignature
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be the owner of the delegation node.
 * The sender of the call will be the new deposit owner.
 */
export interface DelegationCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
    delegationId: H256
}

/**
 * Create a new delegation root associated with a given CType hash.
 * 
 * The new root will allow a new trust hierarchy to be created by
 * adding children delegations to the root.
 * 
 * There must be no delegation with the same ID stored on chain, while
 * there must be already a CType with the given hash stored in the
 * CType pallet.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Requires the sender of the transaction to have a reservable balance
 * of at least `Deposit` many tokens.
 * 
 * Emits `RootCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: [Origin Account], Roots, CTypes
 * - Writes: Roots
 * # </weight>
 */
export interface DelegationCall_create_hierarchy {
    __kind: 'create_hierarchy'
    rootNodeId: H256
    ctypeHash: H256
}

/**
 * Reclaim the deposit for a delegation node (potentially a root
 * node), removing the node and all its children.
 * 
 * Returns the delegation deposit to the deposit owner for each
 * removed DelegationNode by unreserving it.
 * 
 * Removing a delegation node results in the trust hierarchy starting
 * from the given node being removed. Nevertheless, removal starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is removed, the trust hierarchy with the node as root is
 * to be considered removed.
 * 
 * The dispatch origin must be signed by the delegation deposit owner.
 * 
 * `DepositReclaimed`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_removals`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, 2 * C * Delegations
 * # </weight>
 */
export interface DelegationCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    delegationId: H256
    maxRemovals: number
}

/**
 * Remove a delegation node (potentially a root node) and all its
 * children.
 * 
 * Returns the delegation deposit to the deposit owner for each
 * removed DelegationNode by unreserving it.
 * 
 * Removing a delegation node results in the trust hierarchy starting
 * from the given node being removed. Nevertheless, removal starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is removed, the trust hierarchy with the node as root is
 * to be considered removed.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Emits C * `DelegationRemoved`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_children`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, 2 * C * Delegations
 * # </weight>
 */
export interface DelegationCall_remove_delegation {
    __kind: 'remove_delegation'
    delegationId: H256
    maxRemovals: number
}

/**
 * Revoke a delegation node (potentially a root node) and all its
 * children.
 * 
 * Does not refund the delegation back to the deposit owner as the
 * node is still stored on chain. Requires to additionally call
 * `remove_delegation` to unreserve the deposit.
 * 
 * Revoking a delegation node results in the trust hierarchy starting
 * from the given node being revoked. Nevertheless, revocation starts
 * from the leave nodes upwards, so if the operation ends prematurely
 * because it runs out of gas, the delegation state would be consistent
 * as no child would "survive" its parent. As a consequence, if the
 * given node is revoked, the trust hierarchy with the node as root is
 * to be considered revoked.
 * 
 * The dispatch origin must be split into
 * * a submitter of type `AccountId` who is responsible for paying the
 *   transaction fee and
 * * a DID subject of type `DelegationEntityId` who creates, owns and
 *   can revoke the delegation.
 * 
 * Emits C * `DelegationRevoked`.
 * 
 * # <weight>
 * Weight: O(C) where C is the number of children of the delegation
 * node which is bounded by `max_children`.
 * - Reads: [Origin Account], Roots, C * Delegations, C * Children.
 * - Writes: Roots, C * Delegations
 * # </weight>
 */
export interface DelegationCall_revoke_delegation {
    __kind: 'revoke_delegation'
    delegationId: H256
    maxParentChecks: number
    maxRevocations: number
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface DelegationCall_update_deposit {
    __kind: 'update_deposit'
    delegationId: H256
}

export interface Permissions {
    bits: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CtypeCall = CtypeCall_add | CtypeCall_set_block_number

/**
 * Create a new CType from the given unique CType hash and associates
 * it with its creator.
 * 
 * A CType with the same hash must not be stored on chain.
 * 
 * Emits `CTypeCreated`.
 * 
 * # <weight>
 * Weight: O(1)
 * - Reads: Ctypes, Balance
 * - Writes: Ctypes, Balance
 * # </weight>
 */
export interface CtypeCall_add {
    __kind: 'add'
    ctype: Bytes
}

/**
 * Set the creation block number for a given CType, if found.
 * 
 * Emits `CTypeUpdated`.
 */
export interface CtypeCall_set_block_number {
    __kind: 'set_block_number'
    ctypeHash: H256
    blockNumber: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorsCall = CollatorsCall_add_member | CollatorsCall_change_key | CollatorsCall_clear_prime | CollatorsCall_remove_member | CollatorsCall_reset_members | CollatorsCall_set_prime | CollatorsCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CollatorsCall_add_member {
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
export interface CollatorsCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CollatorsCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CollatorsCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CollatorsCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CollatorsCall_set_prime {
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
export interface CollatorsCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_burn | BalancesCall_force_adjust_total_issuance | BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * Burn the specified liquid free balance from the origin account.
 * 
 * If the origin's account ends up below the existential deposit as a result
 * of the burn and `keep_alive` is false, the account will be reaped.
 * 
 * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
 * this `burn` operation will reduce total issuance by the amount _burned_.
 */
export interface BalancesCall_burn {
    __kind: 'burn'
    value: bigint
    keepAlive: boolean
}

/**
 * Adjust the total issuance in a saturating way.
 * 
 * Can only be called by root and always needs a positive `delta`.
 * 
 * # Example
 */
export interface BalancesCall_force_adjust_total_issuance {
    __kind: 'force_adjust_total_issuance'
    direction: AdjustmentDirection
    delta: bigint
}

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
 * possibility of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

export type AdjustmentDirection = AdjustmentDirection_Decrease | AdjustmentDirection_Increase

export interface AdjustmentDirection_Decrease {
    __kind: 'Decrease'
}

export interface AdjustmentDirection_Increase {
    __kind: 'Increase'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AttestationCall = AttestationCall_add | AttestationCall_change_deposit_owner | AttestationCall_reclaim_deposit | AttestationCall_remove | AttestationCall_revoke | AttestationCall_update_deposit

/**
 * Create a new attestation.
 * 
 * The attester can optionally provide a reference to an existing
 * delegation that will be saved along with the attestation itself in
 * the form of an attested delegation.
 * 
 * The referenced CType hash must already be present on chain.
 * 
 * If an optional delegation id is provided, the dispatch origin must
 * be the owner of the delegation. Otherwise, it could be any
 * `DelegationEntityId`.
 * 
 * Emits `AttestationCreated`.
 */
export interface AttestationCall_add {
    __kind: 'add'
    claimHash: H256
    ctypeHash: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Changes the deposit owner.
 * 
 * The balance that is reserved by the current deposit owner will be
 * freed and balance of the new deposit owner will get reserved.
 * 
 * The subject of the call must be the attester who issues the
 * attestation. The sender of the call will be the new deposit owner.
 */
export interface AttestationCall_change_deposit_owner {
    __kind: 'change_deposit_owner'
    claimHash: H256
}

/**
 * Reclaim a storage deposit by removing an attestation
 * 
 * Always emits `AttestationRemoved` and emits `AttestationRevoked`
 * only if the attestation was not revoked yet.
 */
export interface AttestationCall_reclaim_deposit {
    __kind: 'reclaim_deposit'
    claimHash: H256
}

/**
 * Remove an attestation.
 * 
 * The origin must be either the creator of the attestation or an
 * entity which is an ancestor of the attester in the delegation tree,
 * i.e., it was either the delegator of the attester or an ancestor
 * thereof.
 * 
 * Always emits `AttestationRemoved` and emits `AttestationRevoked`
 * only if the attestation was not revoked yet.
 */
export interface AttestationCall_remove {
    __kind: 'remove'
    claimHash: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Revoke an existing attestation.
 * 
 * The revoker must be either the creator of the attestation being
 * revoked or an entity that in the delegation tree is an ancestor of
 * the attester, i.e., it was either the delegator of the attester or
 * an ancestor thereof.
 * 
 * Emits `AttestationRevoked`.
 */
export interface AttestationCall_revoke {
    __kind: 'revoke'
    claimHash: H256
    authorization?: (PalletAuthorize | undefined)
}

/**
 * Updates the deposit amount to the current deposit rate.
 * 
 * The sender must be the deposit owner.
 */
export interface AttestationCall_update_deposit {
    __kind: 'update_deposit'
    claimHash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssetSwitchPool1Call = AssetSwitchPool1Call_force_set_switch_pair | AssetSwitchPool1Call_force_unset_switch_pair | AssetSwitchPool1Call_pause_switch_pair | AssetSwitchPool1Call_resume_switch_pair | AssetSwitchPool1Call_set_switch_pair | AssetSwitchPool1Call_switch | AssetSwitchPool1Call_update_remote_xcm_fee

/**
 * Force-set a new switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_force_set_switch_pair {
    __kind: 'force_set_switch_pair'
    remoteAssetTotalSupply: bigint
    remoteAssetId: VersionedAssetId
    remoteAssetCirculatingSupply: bigint
    remoteReserveLocation: VersionedLocation
    remoteAssetEd: bigint
    remoteXcmFee: VersionedAsset
}

/**
 * Unset a switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_force_unset_switch_pair {
    __kind: 'force_unset_switch_pair'
}

/**
 * Pause switches for a switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_pause_switch_pair {
    __kind: 'pause_switch_pair'
}

/**
 * Resume switches for a switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_resume_switch_pair {
    __kind: 'resume_switch_pair'
}

/**
 * Set a new switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_set_switch_pair {
    __kind: 'set_switch_pair'
    remoteAssetTotalSupply: bigint
    remoteAssetId: VersionedAssetId
    remoteAssetCirculatingSupply: bigint
    remoteReserveLocation: VersionedLocation
    remoteAssetEd: bigint
    remoteXcmFee: VersionedAsset
}

/**
 * Perform a local -> remote asset switch.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_switch {
    __kind: 'switch'
    localAssetAmount: bigint
    beneficiary: VersionedLocation
}

/**
 * Update the remote XCM fee for a switch pair.
 * 
 * See the crate's README for more.
 */
export interface AssetSwitchPool1Call_update_remote_xcm_fee {
    __kind: 'update_remote_xcm_fee'
    new: VersionedAsset
}

export type VersionedAsset = VersionedAsset_V2 | VersionedAsset_V3 | VersionedAsset_V4

export interface VersionedAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export interface VersionedAsset_V4 {
    __kind: 'V4'
    value: V4Asset
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        AssetSwitchPool1: AssetSwitchPool1Call,
        Attestation: AttestationCall,
        Balances: BalancesCall,
        Collators: CollatorsCall,
        Council: CouncilCall,
        Ctype: CtypeCall,
        Delegation: DelegationCall,
        Democracy: DemocracyCall,
        DepositStorage: DepositStorageCall,
        Did: DidCall,
        DidLookup: DidLookupCall,
        DipProvider: DipProviderCall,
        Fungibles: FungiblesCall,
        Indices: IndicesCall,
        Ismp: IsmpCall,
        IsmpParachain: IsmpParachainCall,
        MessageQueue: MessageQueueCall,
        Migration: MigrationCall,
        Multisig: MultisigCall,
        ParachainInfo: ParachainInfoCall,
        ParachainStaking: ParachainStakingCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        PublicCredentials: PublicCredentialsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Tips: TipsCall,
        TipsMembership: TipsMembershipCall,
        TokenGateway: TokenGatewayCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        Web3Names: Web3NamesCall,
        XcmpQueue: XcmpQueueCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
        resume_xcm_execution: sts.unit(),
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
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const Web3NamesCall: sts.Type<Web3NamesCall> = sts.closedEnum(() => {
    return  {
        ban: sts.enumStruct({
            name: sts.bytes(),
        }),
        change_deposit_owner: sts.unit(),
        claim: sts.enumStruct({
            name: sts.bytes(),
        }),
        reclaim_deposit: sts.enumStruct({
            name: sts.bytes(),
        }),
        release_by_owner: sts.unit(),
        unban: sts.enumStruct({
            name: sts.bytes(),
        }),
        update_deposit: sts.enumStruct({
            nameInput: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_remove_vesting_schedule: sts.enumStruct({
            target: MultiAddress,
            scheduleIndex: sts.number(),
        }),
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

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_339,
        CumulusXcm: Type_343,
        Did: DidRawOrigin,
        PolkadotXcm: Origin,
        TechnicalCommittee: Type_340,
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

export const Type_340: sts.Type<Type_340> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V4Location,
        Xcm: V4Location,
    }
})

export const V4Location: sts.Type<V4Location> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V4Junctions: sts.Type<V4Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: sts.array(() => V4Junction),
        X2: sts.array(() => V4Junction),
        X3: sts.array(() => V4Junction),
        X4: sts.array(() => V4Junction),
        X5: sts.array(() => V4Junction),
        X6: sts.array(() => V4Junction),
        X7: sts.array(() => V4Junction),
        X8: sts.array(() => V4Junction),
    }
})

export const V4Junction: sts.Type<V4Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V4NetworkId,
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

export const V4NetworkId: sts.Type<V4NetworkId> = sts.closedEnum(() => {
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
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const DidRawOrigin: sts.Type<DidRawOrigin> = sts.struct(() => {
    return  {
        id: AccountId32,
        submitter: AccountId32,
    }
})

export const Type_343: sts.Type<Type_343> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_339: sts.Type<Type_339> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        check_status: sts.enumStruct({
            index: sts.number(),
        }),
        payout: sts.enumStruct({
            index: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
            validFrom: sts.option(() => sts.bigint()),
        }),
        spend_local: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        void_spend: sts.enumStruct({
            index: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TokenGatewayCall: sts.Type<TokenGatewayCall> = sts.closedEnum(() => {
    return  {
        create_erc6160_asset: sts.enumStruct({
            asset: AssetRegistration,
        }),
        set_token_gateway_addresses: sts.enumStruct({
            addresses: sts.array(() => sts.tuple(() => [StateMachine, sts.bytes()])),
        }),
        teleport: sts.enumStruct({
            params: TeleportParams,
        }),
        update_asset_precision: sts.enumStruct({
            update: PrecisionUpdate,
        }),
        update_erc6160_asset: sts.enumStruct({
            asset: GatewayAssetUpdate,
        }),
    }
})

export const GatewayAssetUpdate: sts.Type<GatewayAssetUpdate> = sts.struct(() => {
    return  {
        assetId: H256,
        addChains: sts.array(() => StateMachine),
        removeChains: sts.array(() => StateMachine),
        newAdmins: sts.array(() => sts.tuple(() => [StateMachine, H160])),
    }
})

export const H160 = sts.bytes()

export const PrecisionUpdate: sts.Type<PrecisionUpdate> = sts.struct(() => {
    return  {
        assetId: V4Location,
        precisions: sts.array(() => sts.tuple(() => [StateMachine, sts.number()])),
    }
})

export const TeleportParams: sts.Type<TeleportParams> = sts.struct(() => {
    return  {
        assetId: V4Location,
        destination: StateMachine,
        recepient: H256,
        amount: sts.bigint(),
        timeout: sts.bigint(),
        tokenGateway: sts.bytes(),
        relayerFee: sts.bigint(),
        callData: sts.option(() => sts.bytes()),
        redeem: sts.boolean(),
    }
})

export const StateMachine: sts.Type<StateMachine> = sts.closedEnum(() => {
    return  {
        Evm: sts.number(),
        Kusama: sts.number(),
        Polkadot: sts.number(),
        Substrate: sts.bytes(),
        Tendermint: sts.bytes(),
    }
})

export const AssetRegistration: sts.Type<AssetRegistration> = sts.struct(() => {
    return  {
        localId: V4Location,
        reg: GatewayAssetRegistration,
        native: sts.boolean(),
        precision: sts.array(() => sts.tuple(() => [StateMachine, sts.number()])),
    }
})

export const GatewayAssetRegistration: sts.Type<GatewayAssetRegistration> = sts.struct(() => {
    return  {
        name: sts.bytes(),
        symbol: sts.bytes(),
        chains: sts.array(() => StateMachine),
        minimumBalance: sts.option(() => sts.bigint()),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TipsMembershipCall: sts.Type<TipsMembershipCall> = sts.closedEnum(() => {
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TipsCall: sts.Type<TipsCall> = sts.closedEnum(() => {
    return  {
        close_tip: sts.enumStruct({
            hash: H256,
        }),
        report_awesome: sts.enumStruct({
            reason: sts.bytes(),
            who: MultiAddress,
        }),
        retract_tip: sts.enumStruct({
            hash: H256,
        }),
        slash_tip: sts.enumStruct({
            hash: H256,
        }),
        tip: sts.enumStruct({
            hash: H256,
            tipValue: sts.bigint(),
        }),
        tip_new: sts.enumStruct({
            reason: sts.bytes(),
            who: MultiAddress,
            tipValue: sts.bigint(),
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
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
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
        apply_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
        }),
        authorize_upgrade_without_checks: sts.enumStruct({
            codeHash: H256,
        }),
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
            when: sts.bigint(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        cancel_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
        }),
        cancel_retry_named: sts.enumStruct({
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
        set_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            retries: sts.number(),
            period: sts.bigint(),
        }),
        set_retry_named: sts.enumStruct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PublicCredentialsCall: sts.Type<PublicCredentialsCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            credential: Credential,
        }),
        change_deposit_owner: sts.enumStruct({
            credentialId: H256,
        }),
        reclaim_deposit: sts.enumStruct({
            credentialId: H256,
        }),
        remove: sts.enumStruct({
            credentialId: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        revoke: sts.enumStruct({
            credentialId: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        unrevoke: sts.enumStruct({
            credentialId: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        update_deposit: sts.enumStruct({
            credentialId: H256,
        }),
    }
})

export const PalletAuthorize: sts.Type<PalletAuthorize> = sts.closedEnum(() => {
    return  {
        Delegation: DelegationAc,
    }
})

export const DelegationAc: sts.Type<DelegationAc> = sts.struct(() => {
    return  {
        subjectNodeId: H256,
        maxChecks: sts.number(),
    }
})

export const Credential: sts.Type<Credential> = sts.struct(() => {
    return  {
        ctypeHash: H256,
        subject: sts.bytes(),
        claims: sts.bytes(),
        authorization: sts.option(() => PalletAuthorize),
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
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        NonDepositClaiming: sts.unit(),
        NonTransfer: sts.unit(),
        ParachainStaking: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        ensure_updated: sts.enumStruct({
            hashes: sts.array(() => H256),
        }),
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
        claim_assets: sts.enumStruct({
            assets: VersionedAssets,
            beneficiary: VersionedLocation,
        }),
        execute: sts.enumStruct({
            message: Type_442,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V4Location,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        transfer_assets_using_type_and_then: sts.enumStruct({
            dest: VersionedLocation,
            assets: VersionedAssets,
            assetsTransferType: TransferType,
            remoteFeesId: VersionedAssetId,
            feesTransferType: TransferType,
            customXcmOnDest: VersionedXcm,
            weightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedAssetId: sts.Type<VersionedAssetId> = sts.closedEnum(() => {
    return  {
        V3: V3AssetId,
        V4: V4AssetId,
    }
})

export const V4AssetId: sts.Type<V4AssetId> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
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
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const TransferType: sts.Type<TransferType> = sts.closedEnum(() => {
    return  {
        DestinationReserve: sts.unit(),
        LocalReserve: sts.unit(),
        RemoteReserve: VersionedLocation,
        Teleport: sts.unit(),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
        V4: sts.array(() => V4Instruction),
    }
})

export const V4Instruction: sts.Type<V4Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
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
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => V4Instruction),
        SetErrorHandler: sts.array(() => V4Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V3OriginKind: sts.Type<V3OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V4Response: sts.Type<V4Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V4Asset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V4PalletInfo),
        Version: sts.number(),
    }
})

export const V4PalletInfo: sts.Type<V4PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const V4QueryResponseInfo: sts.Type<V4QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V4Location,
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

export const V4AssetFilter: sts.Type<V4AssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V4Asset),
        Wild: V4WildAsset,
    }
})

export const V4WildAsset: sts.Type<V4WildAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V4WildFungibility: sts.Type<V4WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V4Asset: sts.Type<V4Asset> = sts.struct(() => {
    return  {
        id: V4AssetId,
        fun: V4Fungibility,
    }
})

export const V4Fungibility: sts.Type<V4Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V4AssetInstance,
    }
})

export const V4AssetInstance: sts.Type<V4AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
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
            originKind: V3OriginKind,
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

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
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

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
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

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const Type_442: sts.Type<Type_442> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_445),
        V3: sts.array(() => Type_449),
        V4: sts.array(() => Type_452),
    }
})

export const Type_452: sts.Type<Type_452> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
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
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => Type_452),
        SetErrorHandler: sts.array(() => Type_452),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: Type_446,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const Type_446: sts.Type<Type_446> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_449: sts.Type<Type_449> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_449),
        SetErrorHandler: sts.array(() => Type_449),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: Type_446,
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

export const Type_445: sts.Type<Type_445> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_445),
        SetErrorHandler: sts.array(() => Type_445),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_446,
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

export const VersionedLocation: sts.Type<VersionedLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
        V4: V4Location,
    }
})

export const VersionedAssets: sts.Type<VersionedAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
        V4: sts.array(() => V4Asset),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
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
        validationData: V8PersistedValidationData,
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

export const V8PersistedValidationData: sts.Type<V8PersistedValidationData> = sts.struct(() => {
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
            less: sts.bigint(),
        }),
        delegator_stake_more: sts.enumStruct({
            more: sts.bigint(),
        }),
        execute_leave_candidates: sts.enumStruct({
            collator: MultiAddress,
        }),
        execute_scheduled_reward_change: sts.enumStruct({
            currentCollatorCandidatePoolSize: sts.number(),
        }),
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
            new: sts.bigint(),
        }),
        set_inflation: sts.enumStruct({
            collatorMaxRatePercentage: Perquintill,
            collatorAnnualRewardRatePercentage: Perquintill,
            delegatorMaxRatePercentage: Perquintill,
            delegatorAnnualRewardRatePercentage: Perquintill,
            currentCollatorCandidatePoolSize: sts.number(),
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MigrationCall: sts.Type<MigrationCall> = sts.closedEnum(() => {
    return  {
        update_balance: sts.enumStruct({
            requestedMigrations: EntriesToMigrate,
        }),
    }
})

export const EntriesToMigrate: sts.Type<EntriesToMigrate> = sts.struct(() => {
    return  {
        attestation: sts.array(() => H256),
        delegation: sts.array(() => H256),
        did: sts.array(() => AccountId32),
        lookup: sts.array(() => LinkableAccountId),
        w3N: sts.array(() => Web3Name),
        publicCredentials: sts.array(() => sts.tuple(() => [AssetDid, H256])),
    }
})

export const AssetDid: sts.Type<AssetDid> = sts.struct(() => {
    return  {
        chainId: V1ChainId,
        assetId: V1AssetId,
    }
})

export const V1AssetId: sts.Type<V1AssetId> = sts.closedEnum(() => {
    return  {
        Erc1155: V1EvmSmartContractNonFungibleReference,
        Erc20: V1EvmSmartContractFungibleReference,
        Erc721: V1EvmSmartContractNonFungibleReference,
        Generic: V1GenericAssetId,
        Slip44: V1Slip44Reference,
    }
})

export const V1Slip44Reference = sts.bigint()

export const V1GenericAssetId: sts.Type<V1GenericAssetId> = sts.struct(() => {
    return  {
        namespace: V1GenericAssetNamespace,
        reference: V1GenericAssetReference,
        id: sts.option(() => V1GenericAssetIdentifier),
    }
})

export const V1GenericAssetIdentifier = sts.bytes()

export const V1GenericAssetReference = sts.bytes()

export const V1GenericAssetNamespace = sts.bytes()

export const V1EvmSmartContractNonFungibleReference = sts.tuple(() => [V1EvmSmartContractFungibleReference, sts.option(() => V1EvmSmartContractNonFungibleIdentifier)])

export const V1EvmSmartContractNonFungibleIdentifier = sts.bytes()

export const V1EvmSmartContractFungibleReference = sts.bytes()

export const V1ChainId: sts.Type<V1ChainId> = sts.closedEnum(() => {
    return  {
        Bip122: V1GenesisHexHash32Reference,
        Dotsama: V1GenesisHexHash32Reference,
        Eip155: V1Eip155Reference,
        Generic: V1GenericChainId,
        Solana: V1GenesisBase58Hash32Reference,
    }
})

export const V1GenesisBase58Hash32Reference = sts.bytes()

export const V1GenericChainId: sts.Type<V1GenericChainId> = sts.struct(() => {
    return  {
        namespace: V1GenericChainNamespace,
        reference: V1GenericChainReference,
    }
})

export const V1GenericChainReference = sts.bytes()

export const V1GenericChainNamespace = sts.bytes()

export const V1Eip155Reference = sts.bigint()

export const V1GenesisHexHash32Reference = sts.bytes()

export const Web3Name = sts.bytes()

export const LinkableAccountId: sts.Type<LinkableAccountId> = sts.closedEnum(() => {
    return  {
        AccountId20: AccountId20,
        AccountId32: AccountId32,
    }
})

export const AccountId20 = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MessageQueueCall: sts.Type<MessageQueueCall> = sts.closedEnum(() => {
    return  {
        execute_overweight: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: Weight,
        }),
        reap_page: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            pageIndex: sts.number(),
        }),
    }
})

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        Parent: sts.unit(),
        Sibling: Id,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IsmpParachainCall: sts.Type<IsmpParachainCall> = sts.closedEnum(() => {
    return  {
        add_parachain: sts.enumStruct({
            paraIds: sts.array(() => ParachainData),
        }),
        remove_parachain: sts.enumStruct({
            paraIds: sts.array(() => sts.number()),
        }),
        update_parachain_consensus: sts.enumStruct({
            data: ConsensusMessage,
        }),
    }
})

export const ConsensusMessage: sts.Type<ConsensusMessage> = sts.struct(() => {
    return  {
        consensusProof: sts.bytes(),
        consensusStateId: sts.bytes(),
        signer: sts.bytes(),
    }
})

export const ParachainData: sts.Type<ParachainData> = sts.struct(() => {
    return  {
        id: sts.number(),
        slotDuration: sts.bigint(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IsmpCall: sts.Type<IsmpCall> = sts.closedEnum(() => {
    return  {
        create_consensus_client: sts.enumStruct({
            message: CreateConsensusState,
        }),
        fund_message: sts.enumStruct({
            message: FundMessageParams,
        }),
        handle_unsigned: sts.enumStruct({
            messages: sts.array(() => Message),
        }),
        update_consensus_state: sts.enumStruct({
            message: UpdateConsensusState,
        }),
    }
})

export const UpdateConsensusState: sts.Type<UpdateConsensusState> = sts.struct(() => {
    return  {
        consensusStateId: sts.bytes(),
        unbondingPeriod: sts.option(() => sts.bigint()),
        challengePeriods: sts.array(() => sts.tuple(() => [StateMachine, sts.bigint()])),
    }
})

export const Message: sts.Type<Message> = sts.closedEnum(() => {
    return  {
        Consensus: ConsensusMessage,
        FraudProof: FraudProofMessage,
        Request: RequestMessage,
        Response: ResponseMessage,
        Timeout: TimeoutMessage,
    }
})

export const TimeoutMessage: sts.Type<TimeoutMessage> = sts.closedEnum(() => {
    return  {
        Get: sts.enumStruct({
            requests: sts.array(() => Request),
        }),
        Post: sts.enumStruct({
            requests: sts.array(() => Request),
            timeoutProof: Proof,
        }),
        PostResponse: sts.enumStruct({
            responses: sts.array(() => PostResponse),
            timeoutProof: Proof,
        }),
    }
})

export const PostResponse: sts.Type<PostResponse> = sts.struct(() => {
    return  {
        post: PostRequest,
        response: sts.bytes(),
        timeoutTimestamp: sts.bigint(),
    }
})

export const PostRequest: sts.Type<PostRequest> = sts.struct(() => {
    return  {
        source: StateMachine,
        dest: StateMachine,
        nonce: sts.bigint(),
        from: sts.bytes(),
        to: sts.bytes(),
        timeoutTimestamp: sts.bigint(),
        body: sts.bytes(),
    }
})

export const Proof: sts.Type<Proof> = sts.struct(() => {
    return  {
        height: StateMachineHeight,
        proof: sts.bytes(),
    }
})

export const StateMachineHeight: sts.Type<StateMachineHeight> = sts.struct(() => {
    return  {
        id: StateMachineId,
        height: sts.bigint(),
    }
})

export const StateMachineId: sts.Type<StateMachineId> = sts.struct(() => {
    return  {
        stateId: StateMachine,
        consensusStateId: sts.bytes(),
    }
})

export const Request: sts.Type<Request> = sts.closedEnum(() => {
    return  {
        Get: GetRequest,
        Post: PostRequest,
    }
})

export const GetRequest: sts.Type<GetRequest> = sts.struct(() => {
    return  {
        source: StateMachine,
        dest: StateMachine,
        nonce: sts.bigint(),
        from: sts.bytes(),
        keys: sts.array(() => sts.bytes()),
        height: sts.bigint(),
        context: sts.bytes(),
        timeoutTimestamp: sts.bigint(),
    }
})

export const ResponseMessage: sts.Type<ResponseMessage> = sts.struct(() => {
    return  {
        datagram: RequestResponse,
        proof: Proof,
        signer: sts.bytes(),
    }
})

export const RequestResponse: sts.Type<RequestResponse> = sts.closedEnum(() => {
    return  {
        Request: sts.array(() => Request),
        Response: sts.array(() => Response),
    }
})

export const Response: sts.Type<Response> = sts.closedEnum(() => {
    return  {
        Get: GetResponse,
        Post: PostResponse,
    }
})

export const GetResponse: sts.Type<GetResponse> = sts.struct(() => {
    return  {
        get: GetRequest,
        values: sts.array(() => StorageValue),
    }
})

export const StorageValue: sts.Type<StorageValue> = sts.struct(() => {
    return  {
        key: sts.bytes(),
        value: sts.option(() => sts.bytes()),
    }
})

export const RequestMessage: sts.Type<RequestMessage> = sts.struct(() => {
    return  {
        requests: sts.array(() => PostRequest),
        proof: Proof,
        signer: sts.bytes(),
    }
})

export const FraudProofMessage: sts.Type<FraudProofMessage> = sts.struct(() => {
    return  {
        proof1: sts.bytes(),
        proof2: sts.bytes(),
        consensusStateId: sts.bytes(),
    }
})

export const FundMessageParams: sts.Type<FundMessageParams> = sts.struct(() => {
    return  {
        commitment: MessageCommitment,
        amount: sts.bigint(),
    }
})

export const MessageCommitment: sts.Type<MessageCommitment> = sts.closedEnum(() => {
    return  {
        Request: H256,
        Response: H256,
    }
})

export const CreateConsensusState: sts.Type<CreateConsensusState> = sts.struct(() => {
    return  {
        consensusState: sts.bytes(),
        consensusClientId: sts.bytes(),
        consensusStateId: sts.bytes(),
        unbondingPeriod: sts.bigint(),
        challengePeriods: sts.array(() => sts.tuple(() => [StateMachine, sts.bigint()])),
        stateMachineCommitments: sts.array(() => sts.tuple(() => [StateMachineId, StateCommitmentHeight])),
    }
})

export const StateCommitmentHeight: sts.Type<StateCommitmentHeight> = sts.struct(() => {
    return  {
        commitment: StateCommitment,
        height: sts.bigint(),
    }
})

export const StateCommitment: sts.Type<StateCommitment> = sts.struct(() => {
    return  {
        timestamp: sts.bigint(),
        overlayRoot: sts.option(() => H256),
        stateRoot: H256,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.bigint(),
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            index: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FungiblesCall: sts.Type<FungiblesCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: V4Location,
            delegate: MultiAddress,
            amount: sts.bigint(),
        }),
        block: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
        }),
        burn: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        cancel_approval: sts.enumStruct({
            id: V4Location,
            delegate: MultiAddress,
        }),
        clear_metadata: sts.enumStruct({
            id: V4Location,
        }),
        create: sts.enumStruct({
            id: V4Location,
            admin: MultiAddress,
            minBalance: sts.bigint(),
        }),
        destroy_accounts: sts.enumStruct({
            id: V4Location,
        }),
        destroy_approvals: sts.enumStruct({
            id: V4Location,
        }),
        finish_destroy: sts.enumStruct({
            id: V4Location,
        }),
        force_asset_status: sts.enumStruct({
            id: V4Location,
            owner: MultiAddress,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
            minBalance: sts.bigint(),
            isSufficient: sts.boolean(),
            isFrozen: sts.boolean(),
        }),
        force_cancel_approval: sts.enumStruct({
            id: V4Location,
            owner: MultiAddress,
            delegate: MultiAddress,
        }),
        force_clear_metadata: sts.enumStruct({
            id: V4Location,
        }),
        force_create: sts.enumStruct({
            id: V4Location,
            owner: MultiAddress,
            isSufficient: sts.boolean(),
            minBalance: sts.bigint(),
        }),
        force_set_metadata: sts.enumStruct({
            id: V4Location,
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
            isFrozen: sts.boolean(),
        }),
        force_transfer: sts.enumStruct({
            id: V4Location,
            source: MultiAddress,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
        }),
        freeze_asset: sts.enumStruct({
            id: V4Location,
        }),
        mint: sts.enumStruct({
            id: V4Location,
            beneficiary: MultiAddress,
            amount: sts.bigint(),
        }),
        refund: sts.enumStruct({
            id: V4Location,
            allowBurn: sts.boolean(),
        }),
        refund_other: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
        }),
        set_metadata: sts.enumStruct({
            id: V4Location,
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        }),
        set_min_balance: sts.enumStruct({
            id: V4Location,
            minBalance: sts.bigint(),
        }),
        set_team: sts.enumStruct({
            id: V4Location,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
        }),
        start_destroy: sts.enumStruct({
            id: V4Location,
        }),
        thaw: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
        }),
        thaw_asset: sts.enumStruct({
            id: V4Location,
        }),
        touch: sts.enumStruct({
            id: V4Location,
        }),
        touch_other: sts.enumStruct({
            id: V4Location,
            who: MultiAddress,
        }),
        transfer: sts.enumStruct({
            id: V4Location,
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            id: V4Location,
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_approved: sts.enumStruct({
            id: V4Location,
            owner: MultiAddress,
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            id: V4Location,
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_ownership: sts.enumStruct({
            id: V4Location,
            owner: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DipProviderCall: sts.Type<DipProviderCall> = sts.closedEnum(() => {
    return  {
        commit_identity: sts.enumStruct({
            identifier: AccountId32,
            version: sts.option(() => sts.number()),
        }),
        delete_identity_commitment: sts.enumStruct({
            identifier: AccountId32,
            version: sts.option(() => sts.number()),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DidLookupCall: sts.Type<DidLookupCall> = sts.closedEnum(() => {
    return  {
        associate_account: sts.enumStruct({
            req: AssociateAccountRequest,
            expiration: sts.bigint(),
        }),
        associate_sender: sts.unit(),
        change_deposit_owner: sts.enumStruct({
            account: LinkableAccountId,
        }),
        reclaim_deposit: sts.enumStruct({
            account: LinkableAccountId,
        }),
        remove_account_association: sts.enumStruct({
            account: LinkableAccountId,
        }),
        remove_sender_association: sts.unit(),
        update_deposit: sts.enumStruct({
            account: LinkableAccountId,
        }),
    }
})

export const AssociateAccountRequest: sts.Type<AssociateAccountRequest> = sts.closedEnum(() => {
    return  {
        Ethereum: sts.tuple(() => [AccountId20, EthereumSignature]),
        Polkadot: sts.tuple(() => [AccountId32, MultiSignature]),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const EthereumSignature = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DidCall: sts.Type<DidCall> = sts.closedEnum(() => {
    return  {
        add_key_agreement_key: sts.enumStruct({
            newKey: DidEncryptionKey,
        }),
        add_service_endpoint: sts.enumStruct({
            serviceEndpoint: DidEndpoint,
        }),
        change_deposit_owner: sts.unit(),
        create: sts.enumStruct({
            details: DidCreationDetails,
            signature: DidSignature,
        }),
        create_from_account: sts.enumStruct({
            authenticationKey: DidVerificationKey,
        }),
        delete: sts.enumStruct({
            endpointsToRemove: sts.number(),
        }),
        dispatch_as: sts.enumStruct({
            didIdentifier: AccountId32,
            call: Call,
        }),
        reclaim_deposit: sts.enumStruct({
            didSubject: AccountId32,
            endpointsToRemove: sts.number(),
        }),
        remove_attestation_key: sts.unit(),
        remove_delegation_key: sts.unit(),
        remove_key_agreement_key: sts.enumStruct({
            keyId: H256,
        }),
        remove_service_endpoint: sts.enumStruct({
            serviceId: sts.bytes(),
        }),
        set_attestation_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        set_authentication_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        set_delegation_key: sts.enumStruct({
            newKey: DidVerificationKey,
        }),
        submit_did_call: sts.enumStruct({
            didCall: DidAuthorizedCallOperation,
            signature: DidSignature,
        }),
        update_deposit: sts.enumStruct({
            did: AccountId32,
        }),
    }
})

export const DidAuthorizedCallOperation: sts.Type<DidAuthorizedCallOperation> = sts.struct(() => {
    return  {
        did: AccountId32,
        txCounter: sts.bigint(),
        call: Call,
        blockNumber: sts.bigint(),
        submitter: AccountId32,
    }
})

export const DidVerificationKey: sts.Type<DidVerificationKey> = sts.closedEnum(() => {
    return  {
        Account: AccountId32,
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const DidSignature: sts.Type<DidSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const DidCreationDetails: sts.Type<DidCreationDetails> = sts.struct(() => {
    return  {
        did: AccountId32,
        submitter: AccountId32,
        newKeyAgreementKeys: sts.array(() => DidEncryptionKey),
        newAttestationKey: sts.option(() => DidVerificationKey),
        newDelegationKey: sts.option(() => DidVerificationKey),
        newServiceDetails: sts.array(() => DidEndpoint),
    }
})

export const DidEndpoint: sts.Type<DidEndpoint> = sts.struct(() => {
    return  {
        id: sts.bytes(),
        serviceTypes: sts.array(() => sts.bytes()),
        urls: sts.array(() => sts.bytes()),
    }
})

export const DidEncryptionKey: sts.Type<DidEncryptionKey> = sts.closedEnum(() => {
    return  {
        X25519: sts.bytes(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DepositStorageCall: sts.Type<DepositStorageCall> = sts.closedEnum(() => {
    return  {
        reclaim_deposit: sts.enumStruct({
            namespace: DepositNamespace,
            key: sts.bytes(),
        }),
    }
})

export const DepositNamespace: sts.Type<DepositNamespace> = sts.closedEnum(() => {
    return  {
        BondedTokens: sts.unit(),
        DipProvider: sts.unit(),
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
export const DelegationCall: sts.Type<DelegationCall> = sts.closedEnum(() => {
    return  {
        add_delegation: sts.enumStruct({
            delegationId: H256,
            parentId: H256,
            delegate: AccountId32,
            permissions: Permissions,
            delegateSignature: DidSignature,
        }),
        change_deposit_owner: sts.enumStruct({
            delegationId: H256,
        }),
        create_hierarchy: sts.enumStruct({
            rootNodeId: H256,
            ctypeHash: H256,
        }),
        reclaim_deposit: sts.enumStruct({
            delegationId: H256,
            maxRemovals: sts.number(),
        }),
        remove_delegation: sts.enumStruct({
            delegationId: H256,
            maxRemovals: sts.number(),
        }),
        revoke_delegation: sts.enumStruct({
            delegationId: H256,
            maxParentChecks: sts.number(),
            maxRevocations: sts.number(),
        }),
        update_deposit: sts.enumStruct({
            delegationId: H256,
        }),
    }
})

export const Permissions: sts.Type<Permissions> = sts.struct(() => {
    return  {
        bits: sts.number(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CtypeCall: sts.Type<CtypeCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            ctype: sts.bytes(),
        }),
        set_block_number: sts.enumStruct({
            ctypeHash: H256,
            blockNumber: sts.bigint(),
        }),
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
export const CollatorsCall: sts.Type<CollatorsCall> = sts.closedEnum(() => {
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        force_adjust_total_issuance: sts.enumStruct({
            direction: AdjustmentDirection,
            delta: sts.bigint(),
        }),
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

export const AdjustmentDirection: sts.Type<AdjustmentDirection> = sts.closedEnum(() => {
    return  {
        Decrease: sts.unit(),
        Increase: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AttestationCall: sts.Type<AttestationCall> = sts.closedEnum(() => {
    return  {
        add: sts.enumStruct({
            claimHash: H256,
            ctypeHash: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        change_deposit_owner: sts.enumStruct({
            claimHash: H256,
        }),
        reclaim_deposit: sts.enumStruct({
            claimHash: H256,
        }),
        remove: sts.enumStruct({
            claimHash: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        revoke: sts.enumStruct({
            claimHash: H256,
            authorization: sts.option(() => PalletAuthorize),
        }),
        update_deposit: sts.enumStruct({
            claimHash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AssetSwitchPool1Call: sts.Type<AssetSwitchPool1Call> = sts.closedEnum(() => {
    return  {
        force_set_switch_pair: sts.enumStruct({
            remoteAssetTotalSupply: sts.bigint(),
            remoteAssetId: VersionedAssetId,
            remoteAssetCirculatingSupply: sts.bigint(),
            remoteReserveLocation: VersionedLocation,
            remoteAssetEd: sts.bigint(),
            remoteXcmFee: VersionedAsset,
        }),
        force_unset_switch_pair: sts.unit(),
        pause_switch_pair: sts.unit(),
        resume_switch_pair: sts.unit(),
        set_switch_pair: sts.enumStruct({
            remoteAssetTotalSupply: sts.bigint(),
            remoteAssetId: VersionedAssetId,
            remoteAssetCirculatingSupply: sts.bigint(),
            remoteReserveLocation: VersionedLocation,
            remoteAssetEd: sts.bigint(),
            remoteXcmFee: VersionedAsset,
        }),
        switch: sts.enumStruct({
            localAssetAmount: sts.bigint(),
            beneficiary: VersionedLocation,
        }),
        update_remote_xcm_fee: sts.enumStruct({
            new: VersionedAsset,
        }),
    }
})

export const VersionedAsset: sts.Type<VersionedAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
        V4: V4Asset,
    }
})

export const H256 = sts.bytes()
