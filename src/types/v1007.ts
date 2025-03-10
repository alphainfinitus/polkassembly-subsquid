import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Balances | Call_CollatorSelection | Call_Council | Call_CumulusXcm | Call_Escrow | Call_Marketplace | Call_MessageQueue | Call_Multibatching | Call_Multisig | Call_MythProxy | Call_Nfts | Call_ParachainInfo | Call_ParachainSystem | Call_PolkadotXcm | Call_Proxy | Call_Session | Call_Sudo | Call_System | Call_Timestamp | Call_Utility | Call_Vesting | Call_XcmpQueue

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_Escrow {
    __kind: 'Escrow'
    value: EscrowCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_Multibatching {
    __kind: 'Multibatching'
    value: MultibatchingCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_MythProxy {
    __kind: 'MythProxy'
    value: MythProxyCall
}

export interface Call_Nfts {
    __kind: 'Nfts'
    value: NftsCall
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

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
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
    target: AccountId20
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
    source: AccountId20
    target: AccountId20
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
    target: AccountId20
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
    target: AccountId20
    schedule: VestingInfo
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type AccountId20 = Bytes

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

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_PolkadotXcm | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_314
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_316
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
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
    value: AccountId20
}

export type Void = never

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

export type Type_316 = Type_316_Relay | Type_316_SiblingParachain

export interface Type_316_Relay {
    __kind: 'Relay'
}

export interface Type_316_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type Type_314 = Type_314_Member | Type_314_Members | Type_314__Phantom

export interface Type_314_Member {
    __kind: 'Member'
    value: AccountId20
}

export interface Type_314_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_314__Phantom {
    __kind: '_Phantom'
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
export type SudoCall = SudoCall_remove_key | SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Permanently removes the sudo key.
 * 
 * **This cannot be un-done.**
 */
export interface SudoCall_remove_key {
    __kind: 'remove_key'
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: AccountId20
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: AccountId20
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
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
    delegate: AccountId20
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
    real: AccountId20
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
    spawner: AccountId20
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
    real: AccountId20
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
    delegate: AccountId20
    real: AccountId20
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
    delegate: AccountId20
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
    real: AccountId20
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
    delegate: AccountId20
    proxyType: ProxyType
    delay: number
}

export type ProxyType = ProxyType_Any | ProxyType_Balances | ProxyType_CancelProxy | ProxyType_NonTransfer | ProxyType_RestrictProxyManagement

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Balances {
    __kind: 'Balances'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_RestrictProxyManagement {
    __kind: 'RestrictProxyManagement'
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
    message: Type_291
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
 * - `remote_fees_id`: One of the included `assets` to be be used to pay fees.
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

export type Type_291 = Type_291_V2 | Type_291_V3 | Type_291_V4

export interface Type_291_V2 {
    __kind: 'V2'
    value: Type_294[]
}

export interface Type_291_V3 {
    __kind: 'V3'
    value: Type_298[]
}

export interface Type_291_V4 {
    __kind: 'V4'
    value: Type_301[]
}

export type Type_301 = Type_301_AliasOrigin | Type_301_BurnAsset | Type_301_BuyExecution | Type_301_ClaimAsset | Type_301_ClearError | Type_301_ClearOrigin | Type_301_ClearTopic | Type_301_ClearTransactStatus | Type_301_DepositAsset | Type_301_DepositReserveAsset | Type_301_DescendOrigin | Type_301_ExchangeAsset | Type_301_ExpectAsset | Type_301_ExpectError | Type_301_ExpectOrigin | Type_301_ExpectPallet | Type_301_ExpectTransactStatus | Type_301_ExportMessage | Type_301_HrmpChannelAccepted | Type_301_HrmpChannelClosing | Type_301_HrmpNewChannelOpenRequest | Type_301_InitiateReserveWithdraw | Type_301_InitiateTeleport | Type_301_LockAsset | Type_301_NoteUnlockable | Type_301_QueryPallet | Type_301_QueryResponse | Type_301_ReceiveTeleportedAsset | Type_301_RefundSurplus | Type_301_ReportError | Type_301_ReportHolding | Type_301_ReportTransactStatus | Type_301_RequestUnlock | Type_301_ReserveAssetDeposited | Type_301_SetAppendix | Type_301_SetErrorHandler | Type_301_SetFeesMode | Type_301_SetTopic | Type_301_SubscribeVersion | Type_301_Transact | Type_301_TransferAsset | Type_301_TransferReserveAsset | Type_301_Trap | Type_301_UniversalOrigin | Type_301_UnlockAsset | Type_301_UnpaidExecution | Type_301_UnsubscribeVersion | Type_301_WithdrawAsset

export interface Type_301_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface Type_301_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface Type_301_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface Type_301_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface Type_301_ClearError {
    __kind: 'ClearError'
}

export interface Type_301_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_301_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_301_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_301_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface Type_301_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_301_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface Type_301_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface Type_301_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface Type_301_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_301_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface Type_301_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_301_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_301_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface Type_301_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_301_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_301_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_301_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface Type_301_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_301_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface Type_301_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface Type_301_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface Type_301_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface Type_301_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface Type_301_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_301_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface Type_301_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface Type_301_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface Type_301_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface Type_301_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface Type_301_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_301[]
}

export interface Type_301_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_301[]
}

export interface Type_301_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_301_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_301_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_301_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_295
}

export interface Type_301_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface Type_301_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_301_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_301_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface Type_301_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface Type_301_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface Type_301_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_301_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export interface Type_295 {
    encoded: Bytes
}

export type Type_298 = Type_298_AliasOrigin | Type_298_BurnAsset | Type_298_BuyExecution | Type_298_ClaimAsset | Type_298_ClearError | Type_298_ClearOrigin | Type_298_ClearTopic | Type_298_ClearTransactStatus | Type_298_DepositAsset | Type_298_DepositReserveAsset | Type_298_DescendOrigin | Type_298_ExchangeAsset | Type_298_ExpectAsset | Type_298_ExpectError | Type_298_ExpectOrigin | Type_298_ExpectPallet | Type_298_ExpectTransactStatus | Type_298_ExportMessage | Type_298_HrmpChannelAccepted | Type_298_HrmpChannelClosing | Type_298_HrmpNewChannelOpenRequest | Type_298_InitiateReserveWithdraw | Type_298_InitiateTeleport | Type_298_LockAsset | Type_298_NoteUnlockable | Type_298_QueryPallet | Type_298_QueryResponse | Type_298_ReceiveTeleportedAsset | Type_298_RefundSurplus | Type_298_ReportError | Type_298_ReportHolding | Type_298_ReportTransactStatus | Type_298_RequestUnlock | Type_298_ReserveAssetDeposited | Type_298_SetAppendix | Type_298_SetErrorHandler | Type_298_SetFeesMode | Type_298_SetTopic | Type_298_SubscribeVersion | Type_298_Transact | Type_298_TransferAsset | Type_298_TransferReserveAsset | Type_298_Trap | Type_298_UniversalOrigin | Type_298_UnlockAsset | Type_298_UnpaidExecution | Type_298_UnsubscribeVersion | Type_298_WithdrawAsset

export interface Type_298_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_298_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_298_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_298_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_298_ClearError {
    __kind: 'ClearError'
}

export interface Type_298_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_298_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_298_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_298_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_298_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_298_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_298_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_298_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_298_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_298_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_298_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_298_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_298_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_298_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_298_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_298_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_298_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_298_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_298_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_298_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_298_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_298_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_298_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_298_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_298_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_298_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_298_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_298_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_298_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_298_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_298[]
}

export interface Type_298_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_298[]
}

export interface Type_298_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_298_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_298_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_298_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_295
}

export interface Type_298_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_298_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_298_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_298_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_298_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_298_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_298_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_298_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type Type_294 = Type_294_BuyExecution | Type_294_ClaimAsset | Type_294_ClearError | Type_294_ClearOrigin | Type_294_DepositAsset | Type_294_DepositReserveAsset | Type_294_DescendOrigin | Type_294_ExchangeAsset | Type_294_HrmpChannelAccepted | Type_294_HrmpChannelClosing | Type_294_HrmpNewChannelOpenRequest | Type_294_InitiateReserveWithdraw | Type_294_InitiateTeleport | Type_294_QueryHolding | Type_294_QueryResponse | Type_294_ReceiveTeleportedAsset | Type_294_RefundSurplus | Type_294_ReportError | Type_294_ReserveAssetDeposited | Type_294_SetAppendix | Type_294_SetErrorHandler | Type_294_SubscribeVersion | Type_294_Transact | Type_294_TransferAsset | Type_294_TransferReserveAsset | Type_294_Trap | Type_294_UnsubscribeVersion | Type_294_WithdrawAsset

export interface Type_294_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_294_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_294_ClearError {
    __kind: 'ClearError'
}

export interface Type_294_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_294_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_294_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_294_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_294_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_294_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_294_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_294_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_294_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_294_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_294_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_294_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_294_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_294_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_294_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_294_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_294_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_294[]
}

export interface Type_294_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_294[]
}

export interface Type_294_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_294_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_295
}

export interface Type_294_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_294_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_294_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_294_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_294_WithdrawAsset {
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
    validationData: V7PersistedValidationData
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

export interface V7PersistedValidationData {
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
export type NftsCall = NftsCall_approve_item_attributes | NftsCall_approve_transfer | NftsCall_burn | NftsCall_buy_item | NftsCall_cancel_approval | NftsCall_cancel_item_attributes_approval | NftsCall_cancel_swap | NftsCall_claim_swap | NftsCall_clear_all_transfer_approvals | NftsCall_clear_attribute | NftsCall_clear_collection_metadata | NftsCall_clear_metadata | NftsCall_create | NftsCall_create_swap | NftsCall_destroy | NftsCall_force_collection_config | NftsCall_force_collection_owner | NftsCall_force_create | NftsCall_force_mint | NftsCall_force_set_attribute | NftsCall_lock_collection | NftsCall_lock_item_properties | NftsCall_lock_item_transfer | NftsCall_mint | NftsCall_mint_pre_signed | NftsCall_pay_tips | NftsCall_redeposit | NftsCall_set_accept_ownership | NftsCall_set_attribute | NftsCall_set_attributes_pre_signed | NftsCall_set_collection_max_supply | NftsCall_set_collection_metadata | NftsCall_set_metadata | NftsCall_set_price | NftsCall_set_team | NftsCall_transfer | NftsCall_transfer_ownership | NftsCall_unlock_item_transfer | NftsCall_update_mint_settings

/**
 * Approve item's attributes to be changed by a delegated third-party account.
 * 
 * Origin must be Signed and must be an owner of the `item`.
 * 
 * - `collection`: A collection of the item.
 * - `item`: The item that holds attributes.
 * - `delegate`: The account to delegate permission to change attributes of the item.
 * 
 * Emits `ItemAttributesApprovalAdded` on success.
 */
export interface NftsCall_approve_item_attributes {
    __kind: 'approve_item_attributes'
    collection: IncrementableU256
    item: bigint
    delegate: AccountId20
}

/**
 * Approve an item to be transferred by a delegated third-party account.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `item`.
 * 
 * - `collection`: The collection of the item to be approved for delegated transfer.
 * - `item`: The item to be approved for delegated transfer.
 * - `delegate`: The account to delegate permission to transfer the item.
 * - `maybe_deadline`: Optional deadline for the approval. Specified by providing the
 * 	number of blocks after which the approval will expire
 * 
 * Emits `TransferApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_approve_transfer {
    __kind: 'approve_transfer'
    collection: IncrementableU256
    item: bigint
    delegate: AccountId20
    maybeDeadline?: (number | undefined)
}

/**
 * Destroy a single item.
 * 
 * The origin must conform to `ForceOrigin` or must be Signed and the signing account must
 * be the owner of the `item`.
 * 
 * - `collection`: The collection of the item to be burned.
 * - `item`: The item to be burned.
 * 
 * Emits `Burned`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_burn {
    __kind: 'burn'
    collection: IncrementableU256
    item: bigint
}

/**
 * Allows to buy an item if it's up for sale.
 * 
 * Origin must be Signed and must not be the owner of the `item`.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item the sender wants to buy.
 * - `bid_price`: The price the sender is willing to pay.
 * 
 * Emits `ItemBought` on success.
 */
export interface NftsCall_buy_item {
    __kind: 'buy_item'
    collection: IncrementableU256
    item: bigint
    bidPrice: bigint
}

/**
 * Cancel one of the transfer approvals for a specific item.
 * 
 * Origin must be either:
 * - the `Force` origin;
 * - `Signed` with the signer being the Owner of the `item`;
 * 
 * Arguments:
 * - `collection`: The collection of the item of whose approval will be cancelled.
 * - `item`: The item of the collection of whose approval will be cancelled.
 * - `delegate`: The account that is going to loose their approval.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_cancel_approval {
    __kind: 'cancel_approval'
    collection: IncrementableU256
    item: bigint
    delegate: AccountId20
}

/**
 * Cancel the previously provided approval to change item's attributes.
 * All the previously set attributes by the `delegate` will be removed.
 * 
 * Origin must be Signed and must be an owner of the `item`.
 * 
 * - `collection`: Collection that the item is contained within.
 * - `item`: The item that holds attributes.
 * - `delegate`: The previously approved account to remove.
 * 
 * Emits `ItemAttributesApprovalRemoved` on success.
 */
export interface NftsCall_cancel_item_attributes_approval {
    __kind: 'cancel_item_attributes_approval'
    collection: IncrementableU256
    item: bigint
    delegate: AccountId20
    witness: CancelAttributesApprovalWitness
}

/**
 * Cancel an atomic swap.
 * 
 * Origin must be Signed.
 * Origin must be an owner of the `item` if the deadline hasn't expired.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item an owner wants to give.
 * 
 * Emits `SwapCancelled` on success.
 */
export interface NftsCall_cancel_swap {
    __kind: 'cancel_swap'
    offeredCollection: IncrementableU256
    offeredItem: bigint
}

/**
 * Claim an atomic swap.
 * This method executes a pending swap, that was created by a counterpart before.
 * 
 * Origin must be Signed and must be an owner of the `item`.
 * 
 * - `send_collection`: The collection of the item to be sent.
 * - `send_item`: The item to be sent.
 * - `receive_collection`: The collection of the item to be received.
 * - `receive_item`: The item to be received.
 * - `witness_price`: A price that was previously agreed on.
 * 
 * Emits `SwapClaimed` on success.
 */
export interface NftsCall_claim_swap {
    __kind: 'claim_swap'
    sendCollection: IncrementableU256
    sendItem: bigint
    receiveCollection: IncrementableU256
    receiveItem: bigint
    witnessPrice?: (PriceWithDirection | undefined)
}

/**
 * Cancel all the approvals of a specific item.
 * 
 * Origin must be either:
 * - the `Force` origin;
 * - `Signed` with the signer being the Owner of the `item`;
 * 
 * Arguments:
 * - `collection`: The collection of the item of whose approvals will be cleared.
 * - `item`: The item of the collection of whose approvals will be cleared.
 * 
 * Emits `AllApprovalsCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_clear_all_transfer_approvals {
    __kind: 'clear_all_transfer_approvals'
    collection: IncrementableU256
    item: bigint
}

/**
 * Clear an attribute for a collection or item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * attribute.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to clear.
 * - `maybe_item`: The identifier of the item whose metadata to clear.
 * - `namespace`: Attribute's namespace.
 * - `key`: The key of the attribute.
 * 
 * Emits `AttributeCleared`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_clear_attribute {
    __kind: 'clear_attribute'
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    namespace: AttributeNamespace
    key: Bytes
}

/**
 * Clear the metadata for a collection.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 * the `collection`.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose metadata to clear.
 * 
 * Emits `CollectionMetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_clear_collection_metadata {
    __kind: 'clear_collection_metadata'
    collection: IncrementableU256
}

/**
 * Clear the metadata for an item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 * `collection`.
 * 
 * Any deposit is freed for the collection's owner.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to clear.
 * - `item`: The identifier of the item whose metadata to clear.
 * 
 * Emits `ItemMetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_clear_metadata {
    __kind: 'clear_metadata'
    collection: IncrementableU256
    item: bigint
}

/**
 * Issue a new collection of non-fungible items from a public origin.
 * 
 * This new collection has no items initially and its owner is the origin.
 * 
 * The origin must be Signed and the sender must have sufficient funds free.
 * 
 * `CollectionDeposit` funds of sender are reserved.
 * 
 * Parameters:
 * - `admin`: The admin of this collection. The admin is the initial address of each
 * member of the collection's admin team.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_create {
    __kind: 'create'
    admin: AccountId20
    config: CollectionConfig
}

/**
 * Register a new atomic swap, declaring an intention to send an `item` in exchange for
 * `desired_item` from origin to target on the current blockchain.
 * The target can execute the swap during the specified `duration` of blocks (if set).
 * Additionally, the price could be set for the desired `item`.
 * 
 * Origin must be Signed and must be an owner of the `item`.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item an owner wants to give.
 * - `desired_collection`: The collection of the desired item.
 * - `desired_item`: The desired item an owner wants to receive.
 * - `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
 * - `duration`: A deadline for the swap. Specified by providing the number of blocks
 * 	after which the swap will expire.
 * 
 * Emits `SwapCreated` on success.
 */
export interface NftsCall_create_swap {
    __kind: 'create_swap'
    offeredCollection: IncrementableU256
    offeredItem: bigint
    desiredCollection: IncrementableU256
    maybeDesiredItem?: (bigint | undefined)
    maybePrice?: (PriceWithDirection | undefined)
    duration: number
}

/**
 * Destroy a collection of fungible items.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 * owner of the `collection`.
 * 
 * NOTE: The collection must have 0 items to be destroyed.
 * 
 * - `collection`: The identifier of the collection to be destroyed.
 * - `witness`: Information on the items minted in the collection. This must be
 * correct.
 * 
 * Emits `Destroyed` event when successful.
 * 
 * Weight: `O(m + c + a)` where:
 * - `m = witness.item_metadatas`
 * - `c = witness.item_configs`
 * - `a = witness.attributes`
 */
export interface NftsCall_destroy {
    __kind: 'destroy'
    collection: IncrementableU256
    witness: DestroyWitness
}

/**
 * Change the config of a collection.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `collection`: The identifier of the collection.
 * - `config`: The new config of this collection.
 * 
 * Emits `CollectionConfigChanged`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_force_collection_config {
    __kind: 'force_collection_config'
    collection: IncrementableU256
    config: CollectionConfig
}

/**
 * Change the Owner of a collection.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `collection`: The identifier of the collection.
 * - `owner`: The new Owner of this collection.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_force_collection_owner {
    __kind: 'force_collection_owner'
    collection: IncrementableU256
    owner: AccountId20
}

/**
 * Issue a new collection of non-fungible items from a privileged origin.
 * 
 * This new collection has no items initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `owner`: The owner of this collection of items. The owner has full superuser
 *   permissions over this item, but may later change and configure the permissions using
 *   `transfer_ownership` and `set_team`.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_force_create {
    __kind: 'force_create'
    owner: AccountId20
    config: CollectionConfig
}

/**
 * Mint an item of a particular collection from a privileged origin.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 * Issuer of the `collection`.
 * 
 * - `collection`: The collection of the item to be minted.
 * - `maybe_item`: An identifier of the new item.
 * - `mint_to`: Account into which the item will be minted.
 * - `item_config`: A config of the new item.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_force_mint {
    __kind: 'force_mint'
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    mintTo: AccountId20
    itemConfig: ItemConfig
}

/**
 * Force-set an attribute for a collection or item.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * If the attribute already exists and it was set by another account, the deposit
 * will be returned to the previous owner.
 * 
 * - `set_as`: An optional owner of the attribute.
 * - `collection`: The identifier of the collection whose item's metadata to set.
 * - `maybe_item`: The identifier of the item whose metadata to set.
 * - `namespace`: Attribute's namespace.
 * - `key`: The key of the attribute.
 * - `value`: The value to which to set the attribute.
 * 
 * Emits `AttributeSet`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_force_set_attribute {
    __kind: 'force_set_attribute'
    setAs?: (AccountId20 | undefined)
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    namespace: AttributeNamespace
    key: Bytes
    value: BoundedVec
}

/**
 * Disallows specified settings for the whole collection.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection to be locked.
 * - `lock_settings`: The settings to be locked.
 * 
 * Note: it's possible to only lock(set) the setting, but not to unset it.
 * 
 * Emits `CollectionLocked`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_lock_collection {
    __kind: 'lock_collection'
    collection: IncrementableU256
    lockSettings: BitFlags
}

/**
 * Disallows changing the metadata or attributes of the item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
 * of the `collection`.
 * 
 * - `collection`: The collection if the `item`.
 * - `item`: An item to be locked.
 * - `lock_metadata`: Specifies whether the metadata should be locked.
 * - `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
 *   should be locked.
 * 
 * Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
 * When the metadata or attributes are locked, it won't be possible the unlock them.
 * 
 * Emits `ItemPropertiesLocked`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_lock_item_properties {
    __kind: 'lock_item_properties'
    collection: IncrementableU256
    item: bigint
    lockMetadata: boolean
    lockAttributes: boolean
}

/**
 * Disallow further unprivileged transfer of an item.
 * 
 * Origin must be Signed and the sender should be the Freezer of the `collection`.
 * 
 * - `collection`: The collection of the item to be changed.
 * - `item`: The item to become non-transferable.
 * 
 * Emits `ItemTransferLocked`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_lock_item_transfer {
    __kind: 'lock_item_transfer'
    collection: IncrementableU256
    item: bigint
}

/**
 * Mint an item of a particular collection.
 * 
 * The origin must be Signed and the sender must comply with the `mint_settings` rules.
 * 
 * - `collection`: The collection of the item to be minted.
 * - `maybe_item`: An identifier of the new item. If the collection mints serially, this should be `None`.
 * - `mint_to`: Account into which the item will be minted.
 * - `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
 *   item_id from that collection needs to be provided within the witness data object. If
 *   the mint price is set, then it should be additionally confirmed in the `witness_data`.
 * 
 * Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_mint {
    __kind: 'mint'
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    mintTo: AccountId20
    witnessData?: (MintWitness | undefined)
}

/**
 * Mint an item by providing the pre-signed approval.
 * 
 * Origin must be Signed.
 * 
 * - `mint_data`: The pre-signed approval that consists of the information about the item,
 *   its metadata, attributes, who can mint it (`None` for anyone) and until what block
 *   number.
 * - `signature`: The signature of the `data` object.
 * - `signer`: The `data` object's signer. Should be an Issuer of the collection.
 * 
 * Emits `Issued` on success.
 * Emits `AttributeSet` if the attributes were provided.
 * Emits `ItemMetadataSet` if the metadata was not empty.
 */
export interface NftsCall_mint_pre_signed {
    __kind: 'mint_pre_signed'
    mintData: PreSignedMint
    signature: EthereumSignature
    signer: AccountId20
}

/**
 * Allows to pay the tips.
 * 
 * Origin must be Signed.
 * 
 * - `tips`: Tips array.
 * 
 * Emits `TipSent` on every tip transfer.
 */
export interface NftsCall_pay_tips {
    __kind: 'pay_tips'
    tips: ItemTip[]
}

/**
 * Re-evaluate the deposits on some items.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection of the items to be reevaluated.
 * - `items`: The items of the collection whose deposits will be reevaluated.
 * 
 * NOTE: This exists as a best-effort function. Any items which are unknown or
 * in the case that the owner account does not have reservable funds to pay for a
 * deposit increase are ignored. Generally the owner isn't going to call this on items
 * whose existing deposit is less than the refreshed deposit as it would only cost them,
 * so it's of little consequence.
 * 
 * It will still return an error in the case that the collection is unknown or the signer
 * is not permitted to call it.
 * 
 * Weight: `O(items.len())`
 */
export interface NftsCall_redeposit {
    __kind: 'redeposit'
    collection: IncrementableU256
    items: bigint[]
}

/**
 * Set (or reset) the acceptance of ownership for a particular account.
 * 
 * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 * provider reference.
 * 
 * - `maybe_collection`: The identifier of the collection whose ownership the signer is
 *   willing to accept, or if `None`, an indication that the signer is willing to accept no
 *   ownership transferal.
 * 
 * Emits `OwnershipAcceptanceChanged`.
 */
export interface NftsCall_set_accept_ownership {
    __kind: 'set_accept_ownership'
    maybeCollection?: (IncrementableU256 | undefined)
}

/**
 * Set an attribute for a collection or item.
 * 
 * Origin must be Signed and must conform to the namespace ruleset:
 * - `CollectionOwner` namespace could be modified by the `collection` Admin only;
 * - `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
 *   should be set in that case;
 * - `Account(AccountId)` namespace could be modified only when the `origin` was given a
 *   permission to do so;
 * 
 * The funds of `origin` are reserved according to the formula:
 * `AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to set.
 * - `maybe_item`: The identifier of the item whose metadata to set.
 * - `namespace`: Attribute's namespace.
 * - `key`: The key of the attribute.
 * - `value`: The value to which to set the attribute.
 * 
 * Emits `AttributeSet`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_set_attribute {
    __kind: 'set_attribute'
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    namespace: AttributeNamespace
    key: Bytes
    value: BoundedVec
}

/**
 * Set attributes for an item by providing the pre-signed approval.
 * 
 * Origin must be Signed and must be an owner of the `data.item`.
 * 
 * - `data`: The pre-signed approval that consists of the information about the item,
 *   attributes to update and until what block number.
 * - `signature`: The signature of the `data` object.
 * - `signer`: The `data` object's signer. Should be an Admin of the collection for the
 *   `CollectionOwner` namespace.
 * 
 * Emits `AttributeSet` for each provided attribute.
 * Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
 * Emits `PreSignedAttributesSet` on success.
 */
export interface NftsCall_set_attributes_pre_signed {
    __kind: 'set_attributes_pre_signed'
    data: PreSignedAttributes
    signature: EthereumSignature
    signer: AccountId20
}

/**
 * Set the maximum number of items a collection could have.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the `collection`.
 * 
 * - `collection`: The identifier of the collection to change.
 * - `max_supply`: The maximum number of items a collection could have.
 * 
 * Emits `CollectionMaxSupplySet` event when successful.
 */
export interface NftsCall_set_collection_max_supply {
    __kind: 'set_collection_max_supply'
    collection: IncrementableU256
    maxSupply: bigint
}

/**
 * Set the metadata for a collection.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 * the `collection`.
 * 
 * If the origin is `Signed`, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the item whose metadata to update.
 * - `data`: The general information of this item. Limited in length by `StringLimit`.
 * 
 * Emits `CollectionMetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_set_collection_metadata {
    __kind: 'set_collection_metadata'
    collection: IncrementableU256
    data: BoundedVec
}

/**
 * Set the metadata for an item.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 * `collection`.
 * 
 * If the origin is Signed, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `collection`: The identifier of the collection whose item's metadata to set.
 * - `item`: The identifier of the item whose metadata to set.
 * - `data`: The general information of this item. Limited in length by `StringLimit`.
 * 
 * Emits `ItemMetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_set_metadata {
    __kind: 'set_metadata'
    collection: IncrementableU256
    item: bigint
    data: BoundedVec
}

/**
 * Set (or reset) the price for an item.
 * 
 * Origin must be Signed and must be the owner of the `item`.
 * 
 * - `collection`: The collection of the item.
 * - `item`: The item to set the price for.
 * - `price`: The price for the item. Pass `None`, to reset the price.
 * - `buyer`: Restricts the buy operation to a specific account.
 * 
 * Emits `ItemPriceSet` on success if the price is not `None`.
 * Emits `ItemPriceRemoved` on success if the price is `None`.
 */
export interface NftsCall_set_price {
    __kind: 'set_price'
    collection: IncrementableU256
    item: bigint
    price?: (bigint | undefined)
    whitelistedBuyer?: (AccountId20 | undefined)
}

/**
 * Change the Issuer, Admin and Freezer of a collection.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * `collection`.
 * 
 * Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
 * after to `Some(account)`.
 * 
 * - `collection`: The collection whose team should be changed.
 * - `issuer`: The new Issuer of this collection.
 * - `admin`: The new Admin of this collection.
 * - `freezer`: The new Freezer of this collection.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_set_team {
    __kind: 'set_team'
    collection: IncrementableU256
    issuer?: (AccountId20 | undefined)
    admin?: (AccountId20 | undefined)
    freezer?: (AccountId20 | undefined)
}

/**
 * Move an item from the sender account to another.
 * 
 * Origin must be Signed and the signing account must be either:
 * - the Owner of the `item`;
 * - the approved delegate for the `item` (in this case, the approval is reset).
 * 
 * Arguments:
 * - `collection`: The collection of the item to be transferred.
 * - `item`: The item to be transferred.
 * - `dest`: The account to receive ownership of the item.
 * 
 * Emits `Transferred`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_transfer {
    __kind: 'transfer'
    collection: IncrementableU256
    item: bigint
    dest: AccountId20
}

/**
 * Change the Owner of a collection.
 * 
 * Origin must be Signed and the sender should be the Owner of the `collection`.
 * 
 * - `collection`: The collection whose owner should be changed.
 * - `owner`: The new Owner of this collection. They must have called
 *   `set_accept_ownership` with `collection` in order for this operation to succeed.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    collection: IncrementableU256
    newOwner: AccountId20
}

/**
 * Re-allow unprivileged transfer of an item.
 * 
 * Origin must be Signed and the sender should be the Freezer of the `collection`.
 * 
 * - `collection`: The collection of the item to be changed.
 * - `item`: The item to become transferable.
 * 
 * Emits `ItemTransferUnlocked`.
 * 
 * Weight: `O(1)`
 */
export interface NftsCall_unlock_item_transfer {
    __kind: 'unlock_item_transfer'
    collection: IncrementableU256
    item: bigint
}

/**
 * Update mint settings.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
 * of the `collection`.
 * 
 * - `collection`: The identifier of the collection to change.
 * - `mint_settings`: The new mint settings.
 * 
 * Emits `CollectionMintSettingsUpdated` event when successful.
 */
export interface NftsCall_update_mint_settings {
    __kind: 'update_mint_settings'
    collection: IncrementableU256
    mintSettings: MintSettings
}

export interface MintSettings {
    mintType: MintType
    price?: (bigint | undefined)
    startBlock?: (number | undefined)
    endBlock?: (number | undefined)
    defaultItemSettings: bigint
    serialMint: boolean
}

export type MintType = MintType_HolderOf | MintType_Issuer | MintType_Public

export interface MintType_HolderOf {
    __kind: 'HolderOf'
    value: IncrementableU256
}

export interface MintType_Issuer {
    __kind: 'Issuer'
}

export interface MintType_Public {
    __kind: 'Public'
}

export interface PreSignedAttributes {
    collection: IncrementableU256
    item: bigint
    attributes: [Bytes, Bytes][]
    namespace: AttributeNamespace
    deadline: number
}

export interface ItemTip {
    collection: IncrementableU256
    item: bigint
    receiver: AccountId20
    amount: bigint
}

export type EthereumSignature = Bytes

export interface PreSignedMint {
    collection: IncrementableU256
    maybeItem?: (bigint | undefined)
    attributes: [Bytes, Bytes][]
    metadata: Bytes
    onlyAccount?: (AccountId20 | undefined)
    deadline: number
    mintPrice?: (bigint | undefined)
}

export interface MintWitness {
    ownedItem?: (bigint | undefined)
    mintPrice?: (bigint | undefined)
}

export type BitFlags = bigint

export type BoundedVec = Bytes

export interface ItemConfig {
    settings: bigint
}

export interface DestroyWitness {
    itemMetadatas: bigint
    itemConfigs: bigint
    attributes: number
}

export interface CollectionConfig {
    settings: BitFlags
    maxSupply?: (bigint | undefined)
    mintSettings: MintSettings
}

export type AttributeNamespace = AttributeNamespace_Account | AttributeNamespace_CollectionOwner | AttributeNamespace_ItemOwner | AttributeNamespace_Pallet

export interface AttributeNamespace_Account {
    __kind: 'Account'
    value: AccountId20
}

export interface AttributeNamespace_CollectionOwner {
    __kind: 'CollectionOwner'
}

export interface AttributeNamespace_ItemOwner {
    __kind: 'ItemOwner'
}

export interface AttributeNamespace_Pallet {
    __kind: 'Pallet'
}

export interface PriceWithDirection {
    amount: bigint
    direction: PriceDirection
}

export type PriceDirection = PriceDirection_Receive | PriceDirection_Send

export interface PriceDirection_Receive {
    __kind: 'Receive'
}

export interface PriceDirection_Send {
    __kind: 'Send'
}

export interface CancelAttributesApprovalWitness {
    accountAttributes: number
}

export type IncrementableU256 = bigint

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MythProxyCall = MythProxyCall_add_proxy | MythProxyCall_approve_proxy_funding | MythProxyCall_proxy | MythProxyCall_register_sponsor_agent | MythProxyCall_remove_proxy | MythProxyCall_remove_sponsored_proxy | MythProxyCall_revoke_sponsor_agent

/**
 * Adds a new proxy.
 * 
 * This extrinsic allows a delegator to grant permission to a delegate account to act on their behalf
 * for a specific subset of calls defined by `proxy_type`. Optionally, a sponsor can be specified who will
 * reserve the deposit required for the proxy. The reserved deposit is returned when the proxy is removed.
 * 
 * Emits `ProxyCreated` event.
 * 
 * # Parameters
 * - `origin`: The delegator's account.
 * - `delegate`: The account that is granted the proxy permission.
 * - `proxy_type`: The type of proxy, which defines the subset of calls that the delegate can make on behalf of the delegator.
 * - `sponsor`: (Optional) The account that will reserve the deposit for the proxy. If not provided, the delegator's balance will be reserved.
 * 
 * # Errors
 * - `SponsorshipUnauthorized`: If the sponsor did not approve the delegator to use their funds.
 */
export interface MythProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: AccountId20
    proxyType: ProxyType
    sponsor?: (AccountId20 | undefined)
}

/**
 * Approves funding for a proxy.
 * 
 * This extrinsic allows a sponsor agent to approve the reservation of funds for a proxy on behalf
 * of the sponsor. The approval must be given before the proxy can be created using the sponsor's funds.
 * 
 * Emits `ProxySponsorshipApproved` event.
 * 
 * # Parameters
 * - `origin`: The sponsor agent's account.
 * - `sponsor`: The sponsor's account that will reserve the funds.
 * - `delegator`: The delegator's account that will use the sponsor's funds.
 * 
 * # Errors
 * - `SponsorAgentUnauthorized`: If the caller is not an authorized agent of the sponsor.
 */
export interface MythProxyCall_approve_proxy_funding {
    __kind: 'approve_proxy_funding'
    sponsor: AccountId20
    delegator: AccountId20
}

/**
 * Executes a call on behalf of the delegator.
 * 
 * This extrinsic allows a delegate account to execute a call on behalf of the delegator,
 * provided the delegate has the appropriate proxy permission. The call must be within the
 * subset of allowed calls defined by the proxy type.
 * 
 * Emits `ProxyExecuted` event on success. If the call fails, the error is returned.
 * 
 * # Parameters
 * - `origin`: The delegate's account.
 * - `address`: The delegator's account on whose behalf the call is made.
 * - `call`: The call to be executed.
 * 
 * # Errors
 * - `NotProxy`: If the delegate does not have proxy permission from the delegator.
 * - `frame_system::Error::<T>::CallFiltered`: If the call is not within the allowed subset of calls for the proxy.
 */
export interface MythProxyCall_proxy {
    __kind: 'proxy'
    address: AccountId20
    call: Call
}

/**
 * Registers a sponsor agent.
 * 
 * This extrinsic allows a sponsor to register an agent who is authorized to approve the reservation
 * of funds for proxies on behalf of the sponsor. This helps in delegating the responsibility of
 * managing proxy fund reservations while keeping the sponsor's credentials secure.
 * 
 * Emits `SponsorAgentRegistered` event.
 * 
 * # Parameters
 * - `origin`: The sponsor's account.
 * - `sponsor_agent`: The account to be registered as the sponsor's agent.
 */
export interface MythProxyCall_register_sponsor_agent {
    __kind: 'register_sponsor_agent'
    sponsorAgent: AccountId20
}

/**
 * Removes an existing proxy.
 * 
 * This extrinsic allows a delegator to remove a proxy permission previously granted to a delegate.
 * If a sponsor was specified during the proxy creation, the reserved deposit is returned to the sponsor.
 * 
 * Emits `ProxyRemoved` event.
 * 
 * # Parameters
 * - `origin`: The delegator's account.
 * - `delegate`: The account whose proxy permission is to be removed.
 * 
 * # Errors
 * - `NoSuchProxy`: If the proxy does not exist.
 */
export interface MythProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: AccountId20
}

/**
 * Removes a proxy sponsored by the caller.
 * 
 * This extrinsic allows a sponsor to remove a proxy that they have sponsored. The reserved deposit
 * is returned to the sponsor upon removal of the proxy.
 * 
 * Emits `ProxyRemoved` event.
 * 
 * # Parameters
 * - `origin`: The sponsor's account.
 * - `delegator`: The account that delegated its authority.
 * - `delegate`: The account that received the delegation.
 * 
 * # Errors
 * - `NoSuchProxy`: If the proxy does not exist.
 * - `Unauthorized`: If the caller is not the sponsor of the specified proxy.
 */
export interface MythProxyCall_remove_sponsored_proxy {
    __kind: 'remove_sponsored_proxy'
    delegator: AccountId20
    delegate: AccountId20
}

/**
 * Revokes a sponsor agent.
 * 
 * Revokes the authorization of a sponsor agent. Once revoked, the agent will no longer be able
 * to approve the reservation of funds for proxies on behalf of the sponsor.
 * All previously approved fund reservations by this agent that have not yet been used to create proxies will also be invalidated.
 * Existing proxies created with the agent's approval will remain unaffected.
 * 
 * Emits `SponsorAgentRevoked` event.
 * 
 * # Parameters
 * - `origin`: The sponsor's account.
 * - `sponsor_agent`: The account to be revoked as the sponsor's agent.
 * 
 * # Errors
 * - `SponsorAgentUnauthorized`: If the specified agent is not currently authorized by the sponsor.
 */
export interface MythProxyCall_revoke_sponsor_agent {
    __kind: 'revoke_sponsor_agent'
    sponsorAgent: AccountId20
}

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
    otherSignatories: AccountId20[]
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
    otherSignatories: AccountId20[]
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
    otherSignatories: AccountId20[]
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
    otherSignatories: AccountId20[]
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
export type MultibatchingCall = MultibatchingCall_batch

/**
 * Execute multiple calls from multiple callers in a single batch.
 * 
 * If one of the calls fails, the whole batch reverts.
 * 
 * This utility is primarily intended to support cases where the calls
 * are interdependent - think a trade operation where Alice intends
 * to transfer an nft item X to Bob if and only if Bob sends an nft
 * item Y to Alice. For that reason it is designed in such a way
 * that every caller must sign the batch as a whole instead of only
 * their own calls. This has a pleasant side effect of reducing the
 * execution cost compared to signing each call separately, as only
 * one signature is required per each unique caller.
 * 
 * As the data signed by callers is a well-formed call, this allows
 * users to validate what they're signing by just decoding the data
 * using a third-party tool before signing them, e.g. by just going
 * to the decode tab on the official Parachain Explorer
 * <https://polkadot.js.org/apps/#/extrinsics/decode>.
 * 
 * # Arguments
 * 
 * - `domain` - the domain of this operation that must be unique per
 * pallet instance across networks.
 * - `sender` - must be the same as the sender of the transaction
 * - `bias` - an arbitrary 32 byte array that can be used to avoid
 * hash collisions.
 * - `calls` - a sequence of calls to execute on behalf of their
 * respective callers.
 * - `approvals` - a set of signatures, one signature per a unique
 * caller.
 * 
 * # Usage
 * 
 * - Prepare a complete `batch()` call with empty vec for `approvals`
 * parameter.
 * - Encode the call into scale-encoded bytes.
 * - Form the `approvals` array by having every caller that has
 * calls in the batch sign these bytes, one signature per caller.
 * - Send the `batch()` call with the same data and the collected
 * approvals.
 * 
 */
export interface MultibatchingCall_batch {
    __kind: 'batch'
    domain: Bytes
    sender: AccountId20
    bias: Bytes
    expiresAt: bigint
    calls: BatchedCall[]
    approvals: Approval[]
}

export interface Approval {
    from: EthereumSigner
    signature: EthereumSignature
}

export type EthereumSigner = Bytes

export interface BatchedCall {
    from: EthereumSigner
    call: Call
}

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
export type MarketplaceCall = MarketplaceCall_cancel_order | MarketplaceCall_create_order | MarketplaceCall_force_set_authority | MarketplaceCall_set_fee_signer_address | MarketplaceCall_set_payout_address

/**
 * Cancelation of an Ask or Bid order.
 * 
 * Callable by either the authority or the order creator.
 * 
 * If the order is an Ask, the item is unlocked.
 * If the order is a Bid, the bidder's balance is unlocked.
 * 
 * Parameters:
 * - `order_type`: The type of the order to be canceled (Ask or Bid).
 * - `collection`: The collection ID of the NFT associated with the order.
 * - `item`: The item ID of the NFT associated with the order.
 * - `price`: The price associated with the order (used for Bid orders).
 * 
 * Emits `OrderCanceled` event upon successful execution.
 * 
 * Weight: `WeightInfo::cancel_order` (defined in the `Config` trait).
 */
export interface MarketplaceCall_cancel_order {
    __kind: 'cancel_order'
    orderType: OrderType
    collection: IncrementableU256
    item: bigint
    price: bigint
}

/**
 * Create an Ask or Bid Order for a specific NFT (collection ID, Item ID).
 * 
 * Asks:
 * - An owner of an NFT can create an ask on the item with a price, expiration, and signature.
 * - The signature must come from the feeSigner account.
 * - The expiration must be above `MinOrderDuration`.
 * - After the ask is created, the NFT is locked so it can't be transferred.
 * 
 * Bids:
 * - A bid can be created on an existing item, with a price to pay, a fee, and expiration.
 * - The signature must come from the feeSigner account.
 * - The amount the bidder is willing to pay is locked from the user's Balance.
 * 
 * Match Exists:
 * - If a match between an Ask and Bid exists, the trade is triggered.
 * - The seller receives the funds, and the bidder receives the unlocked item.
 * - Fees go to payoutAddress.
 * 
 * Parameters:
 * - `order`: The details of the order to be created (including type, collection, item, price, expiration, fee, and signature).
 * - `execution`: Execution mode to indicate whether order creation should proceed if a valid match exists.
 * 
 * Emits `OrderCreated` event upon successful execution.
 * 
 * Weight: `WeightInfo::create_order` (defined in the `Config` trait).
 */
export interface MarketplaceCall_create_order {
    __kind: 'create_order'
    order: Order
    execution: Execution
}

/**
 * Sets the authority role, granting owner rights.
 * 
 * Only the root origin can execute this function.
 * 
 * Parameters:
 * - `authority`: The account ID of the administrator to be set as the pallet's authority.
 * 
 * Emits AuthorityUpdated when successful.
 * 
 * Weight: `WeightInfo::force_set_authority` (defined in the `Config` trait).
 */
export interface MarketplaceCall_force_set_authority {
    __kind: 'force_set_authority'
    authority: AccountId20
}

/**
 * Sets the fee signer address, allowing the designated account that signs fees.
 * 
 * Only an account with the authority role can execute this function. /// - `fee_signer`: The account ID of the fee signer to be set.
 * 
 * Emits `FeeSignerAddressUpdate` event upon successful execution.
 * 
 * Weight: `WeightInfo::set_fee_signer_address` (defined in the `Config` trait).
 */
export interface MarketplaceCall_set_fee_signer_address {
    __kind: 'set_fee_signer_address'
    feeSigner: AccountId20
}

/**
 * Allows the authority account to set the payout address, which receives fee payments from trades.
 * 
 * Only an account with the authority role can execute this function.
 * 
 * Parameters:
 * - `payout_address`: The account ID of the address to be set as the payout address.
 * 
 * Emits `PayoutAddressUpdated` event upon successful execution.
 * 
 * Weight: `WeightInfo::set_payout_address` (defined in the `Config` trait).
 */
export interface MarketplaceCall_set_payout_address {
    __kind: 'set_payout_address'
    payoutAddress: AccountId20
}

export type Execution = Execution_AllowCreation | Execution_Force

export interface Execution_AllowCreation {
    __kind: 'AllowCreation'
}

export interface Execution_Force {
    __kind: 'Force'
}

export interface Order {
    orderType: OrderType
    collection: IncrementableU256
    item: bigint
    price: bigint
    expiresAt: bigint
    fee: bigint
    escrowAgent?: (AccountId20 | undefined)
    signatureData: SignatureData
}

export interface SignatureData {
    signature: EthereumSignature
    nonce: Bytes
}

export type OrderType = OrderType_Ask | OrderType_Bid

export interface OrderType_Ask {
    __kind: 'Ask'
}

export interface OrderType_Bid {
    __kind: 'Bid'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EscrowCall = EscrowCall_deposit | EscrowCall_force_release | EscrowCall_release | EscrowCall_revoke

/**
 * Deposits a specified amount of funds directly into the balance of a target account by transferring from the balance of the origin.
 * The deposited amount is reserved in the target account. The reserved funds can later be released partially or in full
 * by an authorized escrow agent. This function ensures that the deposit meets or exceeds the minimum required balance.
 * 
 * # Arguments
 * * `origin` - The origin of the transaction, whose balance the funds are transferred from.
 * * `address` - The target account that will receive and hold the reserved funds.
 * * `value` - The amount to be deposited and reserved.
 * * `authorised_agent` - The agent authorized to manage and release the reserved funds.
 * 
 * # Errors
 * * `Error::<T>::DepositTooLow` if the deposit amount is below the minimum threshold.
 * * `Error::<T>::BalanceTooLow` if the target account balance is below the existential deposit.
 */
export interface EscrowCall_deposit {
    __kind: 'deposit'
    address: AccountId20
    value: bigint
    authorisedAgent: AccountId20
}

/**
 * Forcefully revokes a deposit under special conditions, overriding typical checks.
 * This function is intended for emergency or administrative use where standard revocation processes are insufficient or inappropriate.
 * It requires root privileges, underscoring its use in exceptional circumstances only.
 * 
 * # Arguments
 * * `origin` - The origin of the transaction, which must be a root call to ensure administrative authority.
 * * `address` - The account from which reserved funds will be moved.
 * * `agent` - The agent initially authorized to manage the deposit, involved for traceability and records.
 * * `destination` - The account to which the funds will be transferred, potentially different from the original depositor.
 * * `reason` - A byte vector detailing the reason for the forced revocation, providing necessary context for this exceptional action.
 * 
 * # Errors
 * * `Error::<T>::NoSuchDeposit` if there is no record of the reserved deposit for the given account, indicating that no funds are available to be forcibly revoked.
 */
export interface EscrowCall_force_release {
    __kind: 'force_release'
    address: AccountId20
    agent: AccountId20
    value: bigint
}

/**
 * Releases a specified amount from the reserved balance of an account to its available balance.
 * This action can only be initiated by an authorized escrow agent and ensures that the release does not exceed
 * the reserved amount. This method is used primarily to reduce or clear the reservations made previously by the deposit action.
 * 
 * # Arguments
 * * `origin` - The origin of the transaction, should be an authorized escrow agent.
 * * `address` - The account holder of the deposited funds.
 * * `value` - The amount to be released from the reserved balance.
 * 
 * # Errors
 * * `Error::<T>::InsufficientBalance` if the reserved balance in the account is less than the amount requested to be released.
 * * `Error::<T>::NoSuchDeposit` if there is no deposit record for the given accounts, indicating that no such reserved amount exists.
 */
export interface EscrowCall_release {
    __kind: 'release'
    address: AccountId20
    value: bigint
}

/**
 * Revokes a reserved deposit, transferring the remaining reserved funds to a specified destination account for a specified reason.
 * This function is typically used when a transaction or agreement fails to complete as planned, and the funds need to be returned or redirected.
 * Only authorized agents can initiate a revocation to ensure control and security over the process.
 * 
 * # Arguments
 * * `origin` - The origin of the transaction, should be an authorized escrow agent.
 * * `address` - The account from which the reserved funds will be withdrawn.
 * * `destination` - The account to which the funds will be transferred.
 * * `reason` - A byte vector detailing the reason for the revocation, providing transparency and traceability.
 * 
 * # Errors
 * * `Error::<T>::NoSuchDeposit` if there is no record of the reserved deposit for the given account and agent combination,
 *    indicating that no funds are available to be revoked.
 */
export interface EscrowCall_revoke {
    __kind: 'revoke'
    address: AccountId20
    destination: AccountId20
    reason: Bytes
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
    newMembers: AccountId20[]
    prime?: (AccountId20 | undefined)
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
export type CollatorSelectionCall = CollatorSelectionCall_add_invulnerable | CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_remove_invulnerable | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_take_candidate_slot | CollatorSelectionCall_update_bond

/**
 * Add a new account `who` to the list of `Invulnerables` collators. `who` must have
 * registered session keys. If `who` is a candidate, they will be removed.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_add_invulnerable {
    __kind: 'add_invulnerable'
    who: AccountId20
}

/**
 * Deregister `origin` as a collator candidate. Note that the collator can only leave on
 * session change. The `CandidacyBond` will be unreserved immediately.
 * 
 * This call will fail if the total number of candidates would drop below
 * `MinEligibleCollators`.
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

/**
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
 * be sorted.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_remove_invulnerable {
    __kind: 'remove_invulnerable'
    who: AccountId20
}

/**
 * Set the candidacy bond amount.
 * 
 * If the candidacy bond is increased by this call, all current candidates which have a
 * deposit lower than the new bond will be kicked from the list and get their deposits
 * back.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * Set the ideal number of non-invulnerable collators. If lowering this number, then the
 * number of running collators could be higher than this figure. Aside from that edge case,
 * there should be no other way to have more candidates than the desired number.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * Set the list of invulnerable (fixed) collators. These collators must do some
 * preparation, namely to have registered session keys.
 * 
 * The call will remove any accounts that have not registered keys from the set. That is,
 * it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
 * acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
 * 
 * This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
 * is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
 * `batch_all` can also be used to enforce atomicity. If any candidates are included in
 * `new`, they should be removed with `remove_invulnerable_candidate` after execution.
 * 
 * Must be called by the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId20[]
}

/**
 * The caller `origin` replaces a candidate `target` in the collator candidate list by
 * reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
 * the existing bond of the target it is trying to replace.
 * 
 * This call will fail if the caller is already a collator candidate or invulnerable, the
 * caller does not have registered session keys, the target is not a collator candidate,
 * and/or the `deposit` amount cannot be reserved.
 */
export interface CollatorSelectionCall_take_candidate_slot {
    __kind: 'take_candidate_slot'
    deposit: bigint
    target: AccountId20
}

/**
 * Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
 * 
 * Setting a `new_deposit` that is lower than the current deposit while `origin` is
 * occupying a top-`DesiredCandidates` slot is not allowed.
 * 
 * This call will fail if `origin` is not a collator candidate, the updated bond is lower
 * than the minimum candidacy bond, and/or the amount cannot be reserved.
 */
export interface CollatorSelectionCall_update_bond {
    __kind: 'update_bond'
    newDeposit: bigint
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
    who: AccountId20
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: AccountId20
    dest: AccountId20
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: AccountId20
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
    dest: AccountId20
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
    dest: AccountId20
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
    dest: AccountId20
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
    who: AccountId20[]
}

export type AdjustmentDirection = AdjustmentDirection_Decrease | AdjustmentDirection_Increase

export interface AdjustmentDirection_Decrease {
    __kind: 'Decrease'
}

export interface AdjustmentDirection_Increase {
    __kind: 'Increase'
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Balances: BalancesCall,
        CollatorSelection: CollatorSelectionCall,
        Council: CouncilCall,
        CumulusXcm: CumulusXcmCall,
        Escrow: EscrowCall,
        Marketplace: MarketplaceCall,
        MessageQueue: MessageQueueCall,
        Multibatching: MultibatchingCall,
        Multisig: MultisigCall,
        MythProxy: MythProxyCall,
        Nfts: NftsCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Proxy: ProxyCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
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
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_remove_vesting_schedule: sts.enumStruct({
            target: AccountId20,
            scheduleIndex: sts.number(),
        }),
        force_vested_transfer: sts.enumStruct({
            source: AccountId20,
            target: AccountId20,
            schedule: VestingInfo,
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: AccountId20,
        }),
        vested_transfer: sts.enumStruct({
            target: AccountId20,
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

export const AccountId20 = sts.bytes()

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
        Council: Type_314,
        CumulusXcm: Type_316,
        PolkadotXcm: Origin,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId20,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
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

export const Type_316: sts.Type<Type_316> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Type_314: sts.Type<Type_314> = sts.closedEnum(() => {
    return  {
        Member: AccountId20,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
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
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        remove_key: sts.unit(),
        set_key: sts.enumStruct({
            new: AccountId20,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: AccountId20,
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
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: AccountId20,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: AccountId20,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: AccountId20,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: AccountId20,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: AccountId20,
            real: AccountId20,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: AccountId20,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: AccountId20,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: AccountId20,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Balances: sts.unit(),
        CancelProxy: sts.unit(),
        NonTransfer: sts.unit(),
        RestrictProxyManagement: sts.unit(),
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
            message: Type_291,
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

export const Type_291: sts.Type<Type_291> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_294),
        V3: sts.array(() => Type_298),
        V4: sts.array(() => Type_301),
    }
})

export const Type_301: sts.Type<Type_301> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_301),
        SetErrorHandler: sts.array(() => Type_301),
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
            call: Type_295,
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

export const Type_295: sts.Type<Type_295> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_298: sts.Type<Type_298> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_298),
        SetErrorHandler: sts.array(() => Type_298),
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
            call: Type_295,
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

export const Type_294: sts.Type<Type_294> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_294),
        SetErrorHandler: sts.array(() => Type_294),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_295,
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
        validationData: V7PersistedValidationData,
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

export const V7PersistedValidationData: sts.Type<V7PersistedValidationData> = sts.struct(() => {
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
export const NftsCall: sts.Type<NftsCall> = sts.closedEnum(() => {
    return  {
        approve_item_attributes: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            delegate: AccountId20,
        }),
        approve_transfer: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            delegate: AccountId20,
            maybeDeadline: sts.option(() => sts.number()),
        }),
        burn: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
        }),
        buy_item: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            bidPrice: sts.bigint(),
        }),
        cancel_approval: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            delegate: AccountId20,
        }),
        cancel_item_attributes_approval: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            delegate: AccountId20,
            witness: CancelAttributesApprovalWitness,
        }),
        cancel_swap: sts.enumStruct({
            offeredCollection: IncrementableU256,
            offeredItem: sts.bigint(),
        }),
        claim_swap: sts.enumStruct({
            sendCollection: IncrementableU256,
            sendItem: sts.bigint(),
            receiveCollection: IncrementableU256,
            receiveItem: sts.bigint(),
            witnessPrice: sts.option(() => PriceWithDirection),
        }),
        clear_all_transfer_approvals: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
        }),
        clear_attribute: sts.enumStruct({
            collection: IncrementableU256,
            maybeItem: sts.option(() => sts.bigint()),
            namespace: AttributeNamespace,
            key: sts.bytes(),
        }),
        clear_collection_metadata: sts.enumStruct({
            collection: IncrementableU256,
        }),
        clear_metadata: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
        }),
        create: sts.enumStruct({
            admin: AccountId20,
            config: CollectionConfig,
        }),
        create_swap: sts.enumStruct({
            offeredCollection: IncrementableU256,
            offeredItem: sts.bigint(),
            desiredCollection: IncrementableU256,
            maybeDesiredItem: sts.option(() => sts.bigint()),
            maybePrice: sts.option(() => PriceWithDirection),
            duration: sts.number(),
        }),
        destroy: sts.enumStruct({
            collection: IncrementableU256,
            witness: DestroyWitness,
        }),
        force_collection_config: sts.enumStruct({
            collection: IncrementableU256,
            config: CollectionConfig,
        }),
        force_collection_owner: sts.enumStruct({
            collection: IncrementableU256,
            owner: AccountId20,
        }),
        force_create: sts.enumStruct({
            owner: AccountId20,
            config: CollectionConfig,
        }),
        force_mint: sts.enumStruct({
            collection: IncrementableU256,
            maybeItem: sts.option(() => sts.bigint()),
            mintTo: AccountId20,
            itemConfig: ItemConfig,
        }),
        force_set_attribute: sts.enumStruct({
            setAs: sts.option(() => AccountId20),
            collection: IncrementableU256,
            maybeItem: sts.option(() => sts.bigint()),
            namespace: AttributeNamespace,
            key: sts.bytes(),
            value: BoundedVec,
        }),
        lock_collection: sts.enumStruct({
            collection: IncrementableU256,
            lockSettings: BitFlags,
        }),
        lock_item_properties: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            lockMetadata: sts.boolean(),
            lockAttributes: sts.boolean(),
        }),
        lock_item_transfer: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
        }),
        mint: sts.enumStruct({
            collection: IncrementableU256,
            maybeItem: sts.option(() => sts.bigint()),
            mintTo: AccountId20,
            witnessData: sts.option(() => MintWitness),
        }),
        mint_pre_signed: sts.enumStruct({
            mintData: PreSignedMint,
            signature: EthereumSignature,
            signer: AccountId20,
        }),
        pay_tips: sts.enumStruct({
            tips: sts.array(() => ItemTip),
        }),
        redeposit: sts.enumStruct({
            collection: IncrementableU256,
            items: sts.array(() => sts.bigint()),
        }),
        set_accept_ownership: sts.enumStruct({
            maybeCollection: sts.option(() => IncrementableU256),
        }),
        set_attribute: sts.enumStruct({
            collection: IncrementableU256,
            maybeItem: sts.option(() => sts.bigint()),
            namespace: AttributeNamespace,
            key: sts.bytes(),
            value: BoundedVec,
        }),
        set_attributes_pre_signed: sts.enumStruct({
            data: PreSignedAttributes,
            signature: EthereumSignature,
            signer: AccountId20,
        }),
        set_collection_max_supply: sts.enumStruct({
            collection: IncrementableU256,
            maxSupply: sts.bigint(),
        }),
        set_collection_metadata: sts.enumStruct({
            collection: IncrementableU256,
            data: BoundedVec,
        }),
        set_metadata: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            data: BoundedVec,
        }),
        set_price: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            price: sts.option(() => sts.bigint()),
            whitelistedBuyer: sts.option(() => AccountId20),
        }),
        set_team: sts.enumStruct({
            collection: IncrementableU256,
            issuer: sts.option(() => AccountId20),
            admin: sts.option(() => AccountId20),
            freezer: sts.option(() => AccountId20),
        }),
        transfer: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
            dest: AccountId20,
        }),
        transfer_ownership: sts.enumStruct({
            collection: IncrementableU256,
            newOwner: AccountId20,
        }),
        unlock_item_transfer: sts.enumStruct({
            collection: IncrementableU256,
            item: sts.bigint(),
        }),
        update_mint_settings: sts.enumStruct({
            collection: IncrementableU256,
            mintSettings: MintSettings,
        }),
    }
})

export const MintSettings: sts.Type<MintSettings> = sts.struct(() => {
    return  {
        mintType: MintType,
        price: sts.option(() => sts.bigint()),
        startBlock: sts.option(() => sts.number()),
        endBlock: sts.option(() => sts.number()),
        defaultItemSettings: sts.bigint(),
        serialMint: sts.boolean(),
    }
})

export const MintType: sts.Type<MintType> = sts.closedEnum(() => {
    return  {
        HolderOf: IncrementableU256,
        Issuer: sts.unit(),
        Public: sts.unit(),
    }
})

export const PreSignedAttributes: sts.Type<PreSignedAttributes> = sts.struct(() => {
    return  {
        collection: IncrementableU256,
        item: sts.bigint(),
        attributes: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        namespace: AttributeNamespace,
        deadline: sts.number(),
    }
})

export const ItemTip: sts.Type<ItemTip> = sts.struct(() => {
    return  {
        collection: IncrementableU256,
        item: sts.bigint(),
        receiver: AccountId20,
        amount: sts.bigint(),
    }
})

export const EthereumSignature = sts.bytes()

export const PreSignedMint: sts.Type<PreSignedMint> = sts.struct(() => {
    return  {
        collection: IncrementableU256,
        maybeItem: sts.option(() => sts.bigint()),
        attributes: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        metadata: sts.bytes(),
        onlyAccount: sts.option(() => AccountId20),
        deadline: sts.number(),
        mintPrice: sts.option(() => sts.bigint()),
    }
})

export const MintWitness: sts.Type<MintWitness> = sts.struct(() => {
    return  {
        ownedItem: sts.option(() => sts.bigint()),
        mintPrice: sts.option(() => sts.bigint()),
    }
})

export const BitFlags = sts.bigint()

export const BoundedVec = sts.bytes()

export const ItemConfig: sts.Type<ItemConfig> = sts.struct(() => {
    return  {
        settings: sts.bigint(),
    }
})

export const DestroyWitness: sts.Type<DestroyWitness> = sts.struct(() => {
    return  {
        itemMetadatas: sts.bigint(),
        itemConfigs: sts.bigint(),
        attributes: sts.number(),
    }
})

export const CollectionConfig: sts.Type<CollectionConfig> = sts.struct(() => {
    return  {
        settings: BitFlags,
        maxSupply: sts.option(() => sts.bigint()),
        mintSettings: MintSettings,
    }
})

export const AttributeNamespace: sts.Type<AttributeNamespace> = sts.closedEnum(() => {
    return  {
        Account: AccountId20,
        CollectionOwner: sts.unit(),
        ItemOwner: sts.unit(),
        Pallet: sts.unit(),
    }
})

export const PriceWithDirection: sts.Type<PriceWithDirection> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        direction: PriceDirection,
    }
})

export const PriceDirection: sts.Type<PriceDirection> = sts.closedEnum(() => {
    return  {
        Receive: sts.unit(),
        Send: sts.unit(),
    }
})

export const CancelAttributesApprovalWitness: sts.Type<CancelAttributesApprovalWitness> = sts.struct(() => {
    return  {
        accountAttributes: sts.number(),
    }
})

export const IncrementableU256 = sts.bigint()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MythProxyCall: sts.Type<MythProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: AccountId20,
            proxyType: ProxyType,
            sponsor: sts.option(() => AccountId20),
        }),
        approve_proxy_funding: sts.enumStruct({
            sponsor: AccountId20,
            delegator: AccountId20,
        }),
        proxy: sts.enumStruct({
            address: AccountId20,
            call: Call,
        }),
        register_sponsor_agent: sts.enumStruct({
            sponsorAgent: AccountId20,
        }),
        remove_proxy: sts.enumStruct({
            delegate: AccountId20,
        }),
        remove_sponsored_proxy: sts.enumStruct({
            delegator: AccountId20,
            delegate: AccountId20,
        }),
        revoke_sponsor_agent: sts.enumStruct({
            sponsorAgent: AccountId20,
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
            otherSignatories: sts.array(() => AccountId20),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId20),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId20),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId20),
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
export const MultibatchingCall: sts.Type<MultibatchingCall> = sts.closedEnum(() => {
    return  {
        batch: sts.enumStruct({
            domain: sts.bytes(),
            sender: AccountId20,
            bias: sts.bytes(),
            expiresAt: sts.bigint(),
            calls: sts.array(() => BatchedCall),
            approvals: sts.array(() => Approval),
        }),
    }
})

export const Approval: sts.Type<Approval> = sts.struct(() => {
    return  {
        from: EthereumSigner,
        signature: EthereumSignature,
    }
})

export const EthereumSigner = sts.bytes()

export const BatchedCall: sts.Type<BatchedCall> = sts.struct(() => {
    return  {
        from: EthereumSigner,
        call: Call,
    }
})

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
export const MarketplaceCall: sts.Type<MarketplaceCall> = sts.closedEnum(() => {
    return  {
        cancel_order: sts.enumStruct({
            orderType: OrderType,
            collection: IncrementableU256,
            item: sts.bigint(),
            price: sts.bigint(),
        }),
        create_order: sts.enumStruct({
            order: Order,
            execution: Execution,
        }),
        force_set_authority: sts.enumStruct({
            authority: AccountId20,
        }),
        set_fee_signer_address: sts.enumStruct({
            feeSigner: AccountId20,
        }),
        set_payout_address: sts.enumStruct({
            payoutAddress: AccountId20,
        }),
    }
})

export const Execution: sts.Type<Execution> = sts.closedEnum(() => {
    return  {
        AllowCreation: sts.unit(),
        Force: sts.unit(),
    }
})

export const Order: sts.Type<Order> = sts.struct(() => {
    return  {
        orderType: OrderType,
        collection: IncrementableU256,
        item: sts.bigint(),
        price: sts.bigint(),
        expiresAt: sts.bigint(),
        fee: sts.bigint(),
        escrowAgent: sts.option(() => AccountId20),
        signatureData: SignatureData,
    }
})

export const SignatureData: sts.Type<SignatureData> = sts.struct(() => {
    return  {
        signature: EthereumSignature,
        nonce: sts.bytes(),
    }
})

export const OrderType: sts.Type<OrderType> = sts.closedEnum(() => {
    return  {
        Ask: sts.unit(),
        Bid: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EscrowCall: sts.Type<EscrowCall> = sts.closedEnum(() => {
    return  {
        deposit: sts.enumStruct({
            address: AccountId20,
            value: sts.bigint(),
            authorisedAgent: AccountId20,
        }),
        force_release: sts.enumStruct({
            address: AccountId20,
            agent: AccountId20,
            value: sts.bigint(),
        }),
        release: sts.enumStruct({
            address: AccountId20,
            value: sts.bigint(),
        }),
        revoke: sts.enumStruct({
            address: AccountId20,
            destination: AccountId20,
            reason: sts.bytes(),
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
            newMembers: sts.array(() => AccountId20),
            prime: sts.option(() => AccountId20),
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
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        add_invulnerable: sts.enumStruct({
            who: AccountId20,
        }),
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        remove_invulnerable: sts.enumStruct({
            who: AccountId20,
        }),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId20),
        }),
        take_candidate_slot: sts.enumStruct({
            deposit: sts.bigint(),
            target: AccountId20,
        }),
        update_bond: sts.enumStruct({
            newDeposit: sts.bigint(),
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
            who: AccountId20,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: AccountId20,
            dest: AccountId20,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: AccountId20,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: AccountId20,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: AccountId20,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: AccountId20,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId20),
        }),
    }
})

export const AdjustmentDirection: sts.Type<AdjustmentDirection> = sts.closedEnum(() => {
    return  {
        Decrease: sts.unit(),
        Increase: sts.unit(),
    }
})

export const H256 = sts.bytes()
