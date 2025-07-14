import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Balances | Call_Capacity | Call_CollatorSelection | Call_Council | Call_Democracy | Call_FrequencyTxPayment | Call_Handles | Call_Messages | Call_Msa | Call_Multisig | Call_ParachainSystem | Call_Passkey | Call_Preimage | Call_Proxy | Call_Scheduler | Call_Schemas | Call_Session | Call_StatefulStorage | Call_System | Call_TechnicalCommittee | Call_TimeRelease | Call_Timestamp | Call_Treasury | Call_Utility

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Capacity {
    __kind: 'Capacity'
    value: CapacityCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_FrequencyTxPayment {
    __kind: 'FrequencyTxPayment'
    value: FrequencyTxPaymentCall
}

export interface Call_Handles {
    __kind: 'Handles'
    value: HandlesCall
}

export interface Call_Messages {
    __kind: 'Messages'
    value: MessagesCall
}

export interface Call_Msa {
    __kind: 'Msa'
    value: MsaCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Passkey {
    __kind: 'Passkey'
    value: PasskeyCall
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

export interface Call_Schemas {
    __kind: 'Schemas'
    value: SchemasCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_StatefulStorage {
    __kind: 'StatefulStorage'
    value: StatefulStorageCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TimeRelease {
    __kind: 'TimeRelease'
    value: TimeReleaseCall
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

export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_dispatch_as_fallible | UtilityCall_force_batch | UtilityCall_if_else | UtilityCall_with_weight

export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

export interface UtilityCall_dispatch_as_fallible {
    __kind: 'dispatch_as_fallible'
    asOrigin: OriginCaller
    call: Call
}

export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

export interface UtilityCall_if_else {
    __kind: 'if_else'
    main: Call
    fallback: Call
}

export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type OriginCaller = OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_TimeRelease | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_168
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_169
}

export interface OriginCaller_TimeRelease {
    __kind: 'TimeRelease'
    value: Origin
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

export type AccountId32 = Bytes

export type Origin = Origin_TimeRelease

export interface Origin_TimeRelease {
    __kind: 'TimeRelease'
    value: AccountId32
}

export type Type_169 = Type_169_Member | Type_169_Members | Type_169__Phantom

export interface Type_169_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_169_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_169__Phantom {
    __kind: '_Phantom'
}

export type Type_168 = Type_168_Member | Type_168_Members | Type_168__Phantom

export interface Type_168_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_168_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_168__Phantom {
    __kind: '_Phantom'
}

export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_check_status | TreasuryCall_payout | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend | TreasuryCall_spend_local | TreasuryCall_void_spend

export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

export interface TreasuryCall_check_status {
    __kind: 'check_status'
    index: number
}

export interface TreasuryCall_payout {
    __kind: 'payout'
    index: number
}

export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: AccountId32
    validFrom?: (number | undefined)
}

export interface TreasuryCall_spend_local {
    __kind: 'spend_local'
    amount: bigint
    beneficiary: MultiAddress
}

export interface TreasuryCall_void_spend {
    __kind: 'void_spend'
    index: number
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

export type TimestampCall = TimestampCall_set

export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type TimeReleaseCall = TimeReleaseCall_cancel_scheduled_named_transfer | TimeReleaseCall_claim | TimeReleaseCall_claim_for | TimeReleaseCall_execute_scheduled_named_transfer | TimeReleaseCall_schedule_named_transfer | TimeReleaseCall_transfer | TimeReleaseCall_update_release_schedules

export interface TimeReleaseCall_cancel_scheduled_named_transfer {
    __kind: 'cancel_scheduled_named_transfer'
    id: Bytes
}

export interface TimeReleaseCall_claim {
    __kind: 'claim'
}

export interface TimeReleaseCall_claim_for {
    __kind: 'claim_for'
    dest: MultiAddress
}

export interface TimeReleaseCall_execute_scheduled_named_transfer {
    __kind: 'execute_scheduled_named_transfer'
    id: Bytes
    dest: MultiAddress
    schedule: ReleaseSchedule
}

export interface TimeReleaseCall_schedule_named_transfer {
    __kind: 'schedule_named_transfer'
    id: Bytes
    dest: MultiAddress
    schedule: ReleaseSchedule
    when: number
}

export interface TimeReleaseCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    schedule: ReleaseSchedule
}

export interface TimeReleaseCall_update_release_schedules {
    __kind: 'update_release_schedules'
    who: MultiAddress
    releaseSchedules: ReleaseSchedule[]
}

export interface ReleaseSchedule {
    start: number
    period: number
    periodCount: number
    perPeriod: bigint
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_kill | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_release_proposal_cost | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

export interface TechnicalCommitteeCall_kill {
    __kind: 'kill'
    proposalHash: H256
}

export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

export interface TechnicalCommitteeCall_release_proposal_cost {
    __kind: 'release_proposal_cost'
    proposalHash: H256
}

export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

export type SystemCall = SystemCall_apply_authorized_upgrade | SystemCall_authorize_upgrade | SystemCall_authorize_upgrade_without_checks | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

export interface SystemCall_apply_authorized_upgrade {
    __kind: 'apply_authorized_upgrade'
    code: Bytes
}

export interface SystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

export interface SystemCall_authorize_upgrade_without_checks {
    __kind: 'authorize_upgrade_without_checks'
    codeHash: H256
}

export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

export type StatefulStorageCall = StatefulStorageCall_apply_item_actions | StatefulStorageCall_apply_item_actions_with_signature_v2 | StatefulStorageCall_delete_page | StatefulStorageCall_delete_page_with_signature_v2 | StatefulStorageCall_upsert_page | StatefulStorageCall_upsert_page_with_signature_v2

export interface StatefulStorageCall_apply_item_actions {
    __kind: 'apply_item_actions'
    stateOwnerMsaId: bigint
    schemaId: number
    targetHash: number
    actions: ItemAction[]
}

export interface StatefulStorageCall_apply_item_actions_with_signature_v2 {
    __kind: 'apply_item_actions_with_signature_v2'
    delegatorKey: AccountId32
    proof: MultiSignature
    payload: ItemizedSignaturePayloadV2
}

export interface StatefulStorageCall_delete_page {
    __kind: 'delete_page'
    stateOwnerMsaId: bigint
    schemaId: number
    pageId: number
    targetHash: number
}

export interface StatefulStorageCall_delete_page_with_signature_v2 {
    __kind: 'delete_page_with_signature_v2'
    delegatorKey: AccountId32
    proof: MultiSignature
    payload: PaginatedDeleteSignaturePayloadV2
}

export interface StatefulStorageCall_upsert_page {
    __kind: 'upsert_page'
    stateOwnerMsaId: bigint
    schemaId: number
    pageId: number
    targetHash: number
    payload: Bytes
}

export interface StatefulStorageCall_upsert_page_with_signature_v2 {
    __kind: 'upsert_page_with_signature_v2'
    delegatorKey: AccountId32
    proof: MultiSignature
    payload: PaginatedUpsertSignaturePayloadV2
}

export interface PaginatedUpsertSignaturePayloadV2 {
    schemaId: number
    pageId: number
    targetHash: number
    expiration: number
    payload: Bytes
}

export interface PaginatedDeleteSignaturePayloadV2 {
    schemaId: number
    pageId: number
    targetHash: number
    expiration: number
}

export interface ItemizedSignaturePayloadV2 {
    schemaId: number
    targetHash: number
    expiration: number
    actions: ItemAction[]
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

export type ItemAction = ItemAction_Add | ItemAction_Delete

export interface ItemAction_Add {
    __kind: 'Add'
    data: Bytes
}

export interface ItemAction_Delete {
    __kind: 'Delete'
    index: number
}

export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    aura: Public
}

export type Public = Bytes

export type SchemasCall = SchemasCall_create_schema_name_via_governance | SchemasCall_create_schema_v3 | SchemasCall_create_schema_via_governance_v2 | SchemasCall_propose_to_create_schema_name | SchemasCall_propose_to_create_schema_v2 | SchemasCall_set_max_schema_model_bytes

export interface SchemasCall_create_schema_name_via_governance {
    __kind: 'create_schema_name_via_governance'
    schemaId: number
    schemaName: Bytes
}

export interface SchemasCall_create_schema_v3 {
    __kind: 'create_schema_v3'
    model: Bytes
    modelType: ModelType
    payloadLocation: PayloadLocation
    settings: SchemaSetting[]
    schemaName?: (Bytes | undefined)
}

export interface SchemasCall_create_schema_via_governance_v2 {
    __kind: 'create_schema_via_governance_v2'
    creatorKey: AccountId32
    model: Bytes
    modelType: ModelType
    payloadLocation: PayloadLocation
    settings: SchemaSetting[]
    schemaName?: (Bytes | undefined)
}

export interface SchemasCall_propose_to_create_schema_name {
    __kind: 'propose_to_create_schema_name'
    schemaId: number
    schemaName: Bytes
}

export interface SchemasCall_propose_to_create_schema_v2 {
    __kind: 'propose_to_create_schema_v2'
    model: Bytes
    modelType: ModelType
    payloadLocation: PayloadLocation
    settings: SchemaSetting[]
    schemaName?: (Bytes | undefined)
}

export interface SchemasCall_set_max_schema_model_bytes {
    __kind: 'set_max_schema_model_bytes'
    maxSize: number
}

export type SchemaSetting = SchemaSetting_AppendOnly | SchemaSetting_SignatureRequired

export interface SchemaSetting_AppendOnly {
    __kind: 'AppendOnly'
}

export interface SchemaSetting_SignatureRequired {
    __kind: 'SignatureRequired'
}

export type PayloadLocation = PayloadLocation_IPFS | PayloadLocation_Itemized | PayloadLocation_OnChain | PayloadLocation_Paginated

export interface PayloadLocation_IPFS {
    __kind: 'IPFS'
}

export interface PayloadLocation_Itemized {
    __kind: 'Itemized'
}

export interface PayloadLocation_OnChain {
    __kind: 'OnChain'
}

export interface PayloadLocation_Paginated {
    __kind: 'Paginated'
}

export type ModelType = ModelType_AvroBinary | ModelType_Parquet

export interface ModelType_AvroBinary {
    __kind: 'AvroBinary'
}

export interface ModelType_Parquet {
    __kind: 'Parquet'
}

export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_cancel_retry | SchedulerCall_cancel_retry_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after | SchedulerCall_set_retry | SchedulerCall_set_retry_named

export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

export interface SchedulerCall_cancel_retry {
    __kind: 'cancel_retry'
    task: [number, number]
}

export interface SchedulerCall_cancel_retry_named {
    __kind: 'cancel_retry_named'
    id: Bytes
}

export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

export interface SchedulerCall_set_retry {
    __kind: 'set_retry'
    task: [number, number]
    retries: number
    period: number
}

export interface SchedulerCall_set_retry_named {
    __kind: 'set_retry_named'
    id: Bytes
    retries: number
    period: number
}

export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_poke_deposit | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
}

export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

export interface ProxyCall_poke_deposit {
    __kind: 'poke_deposit'
}

export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export type PreimageCall = PreimageCall_ensure_updated | PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: H256[]
}

export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

export type PasskeyCall = PasskeyCall_proxy | PasskeyCall_proxy_v2

export interface PasskeyCall_proxy {
    __kind: 'proxy'
    payload: PasskeyPayload
}

export interface PasskeyCall_proxy_v2 {
    __kind: 'proxy_v2'
    payload: PasskeyPayloadV2
}

export interface PasskeyPayloadV2 {
    passkeyPublicKey: PasskeyPublicKey
    verifiablePasskeySignature: VerifiablePasskeySignature
    accountOwnershipProof: MultiSignature
    passkeyCall: PasskeyCallV2
}

export interface PasskeyCallV2 {
    accountId: AccountId32
    accountNonce: number
    call: Call
}

export interface VerifiablePasskeySignature {
    signature: PasskeySignature
    authenticatorData: Bytes
    clientDataJson: Bytes
}

export type PasskeySignature = Bytes

export type PasskeyPublicKey = Bytes

export interface PasskeyPayload {
    passkeyPublicKey: PasskeyPublicKey
    verifiablePasskeySignature: VerifiablePasskeySignature
    passkeyCall: Type_229
}

export interface Type_229 {
    accountId: AccountId32
    accountNonce: number
    accountOwnershipProof: MultiSignature
    call: Call
}

export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

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

export type Id = number

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

export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi | MultisigCall_poke_deposit

export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface MultisigCall_poke_deposit {
    __kind: 'poke_deposit'
    threshold: number
    otherSignatories: AccountId32[]
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

export type MsaCall = MsaCall_add_public_key_to_msa | MsaCall_create | MsaCall_create_provider | MsaCall_create_provider_via_governance | MsaCall_create_sponsored_account_with_delegation | MsaCall_delete_msa_public_key | MsaCall_grant_delegation | MsaCall_propose_to_be_provider | MsaCall_retire_msa | MsaCall_revoke_delegation_by_delegator | MsaCall_revoke_delegation_by_provider

export interface MsaCall_add_public_key_to_msa {
    __kind: 'add_public_key_to_msa'
    msaOwnerPublicKey: AccountId32
    msaOwnerProof: MultiSignature
    newKeyOwnerProof: MultiSignature
    addKeyPayload: AddKeyData
}

export interface MsaCall_create {
    __kind: 'create'
}

export interface MsaCall_create_provider {
    __kind: 'create_provider'
    providerName: Bytes
}

export interface MsaCall_create_provider_via_governance {
    __kind: 'create_provider_via_governance'
    providerKey: AccountId32
    providerName: Bytes
}

export interface MsaCall_create_sponsored_account_with_delegation {
    __kind: 'create_sponsored_account_with_delegation'
    delegatorKey: AccountId32
    proof: MultiSignature
    addProviderPayload: AddProvider
}

export interface MsaCall_delete_msa_public_key {
    __kind: 'delete_msa_public_key'
    publicKeyToDelete: AccountId32
}

export interface MsaCall_grant_delegation {
    __kind: 'grant_delegation'
    delegatorKey: AccountId32
    proof: MultiSignature
    addProviderPayload: AddProvider
}

export interface MsaCall_propose_to_be_provider {
    __kind: 'propose_to_be_provider'
    providerName: Bytes
}

export interface MsaCall_retire_msa {
    __kind: 'retire_msa'
}

export interface MsaCall_revoke_delegation_by_delegator {
    __kind: 'revoke_delegation_by_delegator'
    providerMsaId: bigint
}

export interface MsaCall_revoke_delegation_by_provider {
    __kind: 'revoke_delegation_by_provider'
    delegator: bigint
}

export interface AddProvider {
    authorizedMsaId: bigint
    schemaIds: number[]
    expiration: number
}

export interface AddKeyData {
    msaId: bigint
    expiration: number
    newPublicKey: AccountId32
}

export type MessagesCall = MessagesCall_add_ipfs_message | MessagesCall_add_onchain_message

export interface MessagesCall_add_ipfs_message {
    __kind: 'add_ipfs_message'
    schemaId: number
    cid: Bytes
    payloadLength: number
}

export interface MessagesCall_add_onchain_message {
    __kind: 'add_onchain_message'
    onBehalfOf?: (bigint | undefined)
    schemaId: number
    payload: Bytes
}

export type HandlesCall = HandlesCall_change_handle | HandlesCall_claim_handle | HandlesCall_retire_handle

export interface HandlesCall_change_handle {
    __kind: 'change_handle'
    msaOwnerKey: AccountId32
    proof: MultiSignature
    payload: ClaimHandlePayload
}

export interface HandlesCall_claim_handle {
    __kind: 'claim_handle'
    msaOwnerKey: AccountId32
    proof: MultiSignature
    payload: ClaimHandlePayload
}

export interface HandlesCall_retire_handle {
    __kind: 'retire_handle'
}

export interface ClaimHandlePayload {
    baseHandle: Bytes
    expiration: number
}

export type FrequencyTxPaymentCall = FrequencyTxPaymentCall_pay_with_capacity | FrequencyTxPaymentCall_pay_with_capacity_batch_all

export interface FrequencyTxPaymentCall_pay_with_capacity {
    __kind: 'pay_with_capacity'
    call: Call
}

export interface FrequencyTxPaymentCall_pay_with_capacity_batch_all {
    __kind: 'pay_with_capacity_batch_all'
    calls: Call[]
}

export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
}

export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

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

export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_kill | CouncilCall_propose | CouncilCall_release_proposal_cost | CouncilCall_set_members | CouncilCall_vote

export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

export interface CouncilCall_kill {
    __kind: 'kill'
    proposalHash: H256
}

export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

export interface CouncilCall_release_proposal_cost {
    __kind: 'release_proposal_cost'
    proposalHash: H256
}

export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

export type CollatorSelectionCall = CollatorSelectionCall_add_invulnerable | CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_remove_invulnerable | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_take_candidate_slot | CollatorSelectionCall_update_bond

export interface CollatorSelectionCall_add_invulnerable {
    __kind: 'add_invulnerable'
    who: AccountId32
}

export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_remove_invulnerable {
    __kind: 'remove_invulnerable'
    who: AccountId32
}

export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
}

export interface CollatorSelectionCall_take_candidate_slot {
    __kind: 'take_candidate_slot'
    deposit: bigint
    target: AccountId32
}

export interface CollatorSelectionCall_update_bond {
    __kind: 'update_bond'
    newDeposit: bigint
}

export type CapacityCall = CapacityCall_change_staking_target | CapacityCall_claim_staking_rewards | CapacityCall_provider_boost | CapacityCall_set_epoch_length | CapacityCall_stake | CapacityCall_unstake | CapacityCall_withdraw_unstaked

export interface CapacityCall_change_staking_target {
    __kind: 'change_staking_target'
    from: bigint
    to: bigint
    amount: bigint
}

export interface CapacityCall_claim_staking_rewards {
    __kind: 'claim_staking_rewards'
}

export interface CapacityCall_provider_boost {
    __kind: 'provider_boost'
    target: bigint
    amount: bigint
}

export interface CapacityCall_set_epoch_length {
    __kind: 'set_epoch_length'
    length: number
}

export interface CapacityCall_stake {
    __kind: 'stake'
    target: bigint
    amount: bigint
}

export interface CapacityCall_unstake {
    __kind: 'unstake'
    target: bigint
    requestedAmount: bigint
}

export interface CapacityCall_withdraw_unstaked {
    __kind: 'withdraw_unstaked'
}

export type BalancesCall = BalancesCall_burn | BalancesCall_force_adjust_total_issuance | BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

export interface BalancesCall_burn {
    __kind: 'burn'
    value: bigint
    keepAlive: boolean
}

export interface BalancesCall_force_adjust_total_issuance {
    __kind: 'force_adjust_total_issuance'
    direction: AdjustmentDirection
    delta: bigint
}

export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

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

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Balances: BalancesCall,
        Capacity: CapacityCall,
        CollatorSelection: CollatorSelectionCall,
        Council: CouncilCall,
        Democracy: DemocracyCall,
        FrequencyTxPayment: FrequencyTxPaymentCall,
        Handles: HandlesCall,
        Messages: MessagesCall,
        Msa: MsaCall,
        Multisig: MultisigCall,
        ParachainSystem: ParachainSystemCall,
        Passkey: PasskeyCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Scheduler: SchedulerCall,
        Schemas: SchemasCall,
        Session: SessionCall,
        StatefulStorage: StatefulStorageCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TimeRelease: TimeReleaseCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
    }
})

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
        dispatch_as_fallible: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        if_else: sts.enumStruct({
            main: Call,
            fallback: Call,
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
        Council: Type_168,
        TechnicalCommittee: Type_169,
        TimeRelease: Origin,
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

export const AccountId32 = sts.bytes()

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        TimeRelease: AccountId32,
    }
})

export const Type_169: sts.Type<Type_169> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_168: sts.Type<Type_168> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        check_status: sts.enumStruct({
            index: sts.number(),
        }),
        payout: sts.enumStruct({
            index: sts.number(),
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
            beneficiary: AccountId32,
            validFrom: sts.option(() => sts.number()),
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

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

export const TimeReleaseCall: sts.Type<TimeReleaseCall> = sts.closedEnum(() => {
    return  {
        cancel_scheduled_named_transfer: sts.enumStruct({
            id: sts.bytes(),
        }),
        claim: sts.unit(),
        claim_for: sts.enumStruct({
            dest: MultiAddress,
        }),
        execute_scheduled_named_transfer: sts.enumStruct({
            id: sts.bytes(),
            dest: MultiAddress,
            schedule: ReleaseSchedule,
        }),
        schedule_named_transfer: sts.enumStruct({
            id: sts.bytes(),
            dest: MultiAddress,
            schedule: ReleaseSchedule,
            when: sts.number(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            schedule: ReleaseSchedule,
        }),
        update_release_schedules: sts.enumStruct({
            who: MultiAddress,
            releaseSchedules: sts.array(() => ReleaseSchedule),
        }),
    }
})

export const ReleaseSchedule: sts.Type<ReleaseSchedule> = sts.struct(() => {
    return  {
        start: sts.number(),
        period: sts.number(),
        periodCount: sts.number(),
        perPeriod: sts.bigint(),
    }
})

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
        kill: sts.enumStruct({
            proposalHash: H256,
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        release_proposal_cost: sts.enumStruct({
            proposalHash: H256,
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

export const StatefulStorageCall: sts.Type<StatefulStorageCall> = sts.closedEnum(() => {
    return  {
        apply_item_actions: sts.enumStruct({
            stateOwnerMsaId: sts.bigint(),
            schemaId: sts.number(),
            targetHash: sts.number(),
            actions: sts.array(() => ItemAction),
        }),
        apply_item_actions_with_signature_v2: sts.enumStruct({
            delegatorKey: AccountId32,
            proof: MultiSignature,
            payload: ItemizedSignaturePayloadV2,
        }),
        delete_page: sts.enumStruct({
            stateOwnerMsaId: sts.bigint(),
            schemaId: sts.number(),
            pageId: sts.number(),
            targetHash: sts.number(),
        }),
        delete_page_with_signature_v2: sts.enumStruct({
            delegatorKey: AccountId32,
            proof: MultiSignature,
            payload: PaginatedDeleteSignaturePayloadV2,
        }),
        upsert_page: sts.enumStruct({
            stateOwnerMsaId: sts.bigint(),
            schemaId: sts.number(),
            pageId: sts.number(),
            targetHash: sts.number(),
            payload: sts.bytes(),
        }),
        upsert_page_with_signature_v2: sts.enumStruct({
            delegatorKey: AccountId32,
            proof: MultiSignature,
            payload: PaginatedUpsertSignaturePayloadV2,
        }),
    }
})

export const PaginatedUpsertSignaturePayloadV2: sts.Type<PaginatedUpsertSignaturePayloadV2> = sts.struct(() => {
    return  {
        schemaId: sts.number(),
        pageId: sts.number(),
        targetHash: sts.number(),
        expiration: sts.number(),
        payload: sts.bytes(),
    }
})

export const PaginatedDeleteSignaturePayloadV2: sts.Type<PaginatedDeleteSignaturePayloadV2> = sts.struct(() => {
    return  {
        schemaId: sts.number(),
        pageId: sts.number(),
        targetHash: sts.number(),
        expiration: sts.number(),
    }
})

export const ItemizedSignaturePayloadV2: sts.Type<ItemizedSignaturePayloadV2> = sts.struct(() => {
    return  {
        schemaId: sts.number(),
        targetHash: sts.number(),
        expiration: sts.number(),
        actions: sts.array(() => ItemAction),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export const ItemAction: sts.Type<ItemAction> = sts.closedEnum(() => {
    return  {
        Add: sts.enumStruct({
            data: sts.bytes(),
        }),
        Delete: sts.enumStruct({
            index: sts.number(),
        }),
    }
})

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

export const SchemasCall: sts.Type<SchemasCall> = sts.closedEnum(() => {
    return  {
        create_schema_name_via_governance: sts.enumStruct({
            schemaId: sts.number(),
            schemaName: sts.bytes(),
        }),
        create_schema_v3: sts.enumStruct({
            model: sts.bytes(),
            modelType: ModelType,
            payloadLocation: PayloadLocation,
            settings: sts.array(() => SchemaSetting),
            schemaName: sts.option(() => sts.bytes()),
        }),
        create_schema_via_governance_v2: sts.enumStruct({
            creatorKey: AccountId32,
            model: sts.bytes(),
            modelType: ModelType,
            payloadLocation: PayloadLocation,
            settings: sts.array(() => SchemaSetting),
            schemaName: sts.option(() => sts.bytes()),
        }),
        propose_to_create_schema_name: sts.enumStruct({
            schemaId: sts.number(),
            schemaName: sts.bytes(),
        }),
        propose_to_create_schema_v2: sts.enumStruct({
            model: sts.bytes(),
            modelType: ModelType,
            payloadLocation: PayloadLocation,
            settings: sts.array(() => SchemaSetting),
            schemaName: sts.option(() => sts.bytes()),
        }),
        set_max_schema_model_bytes: sts.enumStruct({
            maxSize: sts.number(),
        }),
    }
})

export const SchemaSetting: sts.Type<SchemaSetting> = sts.closedEnum(() => {
    return  {
        AppendOnly: sts.unit(),
        SignatureRequired: sts.unit(),
    }
})

export const PayloadLocation: sts.Type<PayloadLocation> = sts.closedEnum(() => {
    return  {
        IPFS: sts.unit(),
        Itemized: sts.unit(),
        OnChain: sts.unit(),
        Paginated: sts.unit(),
    }
})

export const ModelType: sts.Type<ModelType> = sts.closedEnum(() => {
    return  {
        AvroBinary: sts.unit(),
        Parquet: sts.unit(),
    }
})

export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        cancel_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
        }),
        cancel_retry_named: sts.enumStruct({
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
        set_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            retries: sts.number(),
            period: sts.number(),
        }),
        set_retry_named: sts.enumStruct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.number(),
        }),
    }
})

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
        poke_deposit: sts.unit(),
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
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

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

export const PasskeyCall: sts.Type<PasskeyCall> = sts.closedEnum(() => {
    return  {
        proxy: sts.enumStruct({
            payload: PasskeyPayload,
        }),
        proxy_v2: sts.enumStruct({
            payload: PasskeyPayloadV2,
        }),
    }
})

export const PasskeyPayloadV2: sts.Type<PasskeyPayloadV2> = sts.struct(() => {
    return  {
        passkeyPublicKey: PasskeyPublicKey,
        verifiablePasskeySignature: VerifiablePasskeySignature,
        accountOwnershipProof: MultiSignature,
        passkeyCall: PasskeyCallV2,
    }
})

export const PasskeyCallV2: sts.Type<PasskeyCallV2> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        accountNonce: sts.number(),
        call: Call,
    }
})

export const VerifiablePasskeySignature: sts.Type<VerifiablePasskeySignature> = sts.struct(() => {
    return  {
        signature: PasskeySignature,
        authenticatorData: sts.bytes(),
        clientDataJson: sts.bytes(),
    }
})

export const PasskeySignature = sts.bytes()

export const PasskeyPublicKey = sts.bytes()

export const PasskeyPayload: sts.Type<PasskeyPayload> = sts.struct(() => {
    return  {
        passkeyPublicKey: PasskeyPublicKey,
        verifiablePasskeySignature: VerifiablePasskeySignature,
        passkeyCall: Type_229,
    }
})

export const Type_229: sts.Type<Type_229> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        accountNonce: sts.number(),
        accountOwnershipProof: MultiSignature,
        call: Call,
    }
})

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

export const Id = sts.number()

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
        poke_deposit: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
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

export const MsaCall: sts.Type<MsaCall> = sts.closedEnum(() => {
    return  {
        add_public_key_to_msa: sts.enumStruct({
            msaOwnerPublicKey: AccountId32,
            msaOwnerProof: MultiSignature,
            newKeyOwnerProof: MultiSignature,
            addKeyPayload: AddKeyData,
        }),
        create: sts.unit(),
        create_provider: sts.enumStruct({
            providerName: sts.bytes(),
        }),
        create_provider_via_governance: sts.enumStruct({
            providerKey: AccountId32,
            providerName: sts.bytes(),
        }),
        create_sponsored_account_with_delegation: sts.enumStruct({
            delegatorKey: AccountId32,
            proof: MultiSignature,
            addProviderPayload: AddProvider,
        }),
        delete_msa_public_key: sts.enumStruct({
            publicKeyToDelete: AccountId32,
        }),
        grant_delegation: sts.enumStruct({
            delegatorKey: AccountId32,
            proof: MultiSignature,
            addProviderPayload: AddProvider,
        }),
        propose_to_be_provider: sts.enumStruct({
            providerName: sts.bytes(),
        }),
        retire_msa: sts.unit(),
        revoke_delegation_by_delegator: sts.enumStruct({
            providerMsaId: sts.bigint(),
        }),
        revoke_delegation_by_provider: sts.enumStruct({
            delegator: sts.bigint(),
        }),
    }
})

export const AddProvider: sts.Type<AddProvider> = sts.struct(() => {
    return  {
        authorizedMsaId: sts.bigint(),
        schemaIds: sts.array(() => sts.number()),
        expiration: sts.number(),
    }
})

export const AddKeyData: sts.Type<AddKeyData> = sts.struct(() => {
    return  {
        msaId: sts.bigint(),
        expiration: sts.number(),
        newPublicKey: AccountId32,
    }
})

export const MessagesCall: sts.Type<MessagesCall> = sts.closedEnum(() => {
    return  {
        add_ipfs_message: sts.enumStruct({
            schemaId: sts.number(),
            cid: sts.bytes(),
            payloadLength: sts.number(),
        }),
        add_onchain_message: sts.enumStruct({
            onBehalfOf: sts.option(() => sts.bigint()),
            schemaId: sts.number(),
            payload: sts.bytes(),
        }),
    }
})

export const HandlesCall: sts.Type<HandlesCall> = sts.closedEnum(() => {
    return  {
        change_handle: sts.enumStruct({
            msaOwnerKey: AccountId32,
            proof: MultiSignature,
            payload: ClaimHandlePayload,
        }),
        claim_handle: sts.enumStruct({
            msaOwnerKey: AccountId32,
            proof: MultiSignature,
            payload: ClaimHandlePayload,
        }),
        retire_handle: sts.unit(),
    }
})

export const ClaimHandlePayload: sts.Type<ClaimHandlePayload> = sts.struct(() => {
    return  {
        baseHandle: sts.bytes(),
        expiration: sts.number(),
    }
})

export const FrequencyTxPaymentCall: sts.Type<FrequencyTxPaymentCall> = sts.closedEnum(() => {
    return  {
        pay_with_capacity: sts.enumStruct({
            call: Call,
        }),
        pay_with_capacity_batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
    }
})

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
        kill: sts.enumStruct({
            proposalHash: H256,
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        release_proposal_cost: sts.enumStruct({
            proposalHash: H256,
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

export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        add_invulnerable: sts.enumStruct({
            who: AccountId32,
        }),
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        remove_invulnerable: sts.enumStruct({
            who: AccountId32,
        }),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
        }),
        take_candidate_slot: sts.enumStruct({
            deposit: sts.bigint(),
            target: AccountId32,
        }),
        update_bond: sts.enumStruct({
            newDeposit: sts.bigint(),
        }),
    }
})

export const CapacityCall: sts.Type<CapacityCall> = sts.closedEnum(() => {
    return  {
        change_staking_target: sts.enumStruct({
            from: sts.bigint(),
            to: sts.bigint(),
            amount: sts.bigint(),
        }),
        claim_staking_rewards: sts.unit(),
        provider_boost: sts.enumStruct({
            target: sts.bigint(),
            amount: sts.bigint(),
        }),
        set_epoch_length: sts.enumStruct({
            length: sts.number(),
        }),
        stake: sts.enumStruct({
            target: sts.bigint(),
            amount: sts.bigint(),
        }),
        unstake: sts.enumStruct({
            target: sts.bigint(),
            requestedAmount: sts.bigint(),
        }),
        withdraw_unstaked: sts.unit(),
    }
})

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

export const H256 = sts.bytes()

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
        Trie: TrieError,
        Unavailable: sts.unit(),
    }
})

export const TrieError: sts.Type<TrieError> = sts.closedEnum(() => {
    return  {
        DecodeError: sts.unit(),
        DecoderError: sts.unit(),
        DuplicateKey: sts.unit(),
        ExtraneousHashReference: sts.unit(),
        ExtraneousNode: sts.unit(),
        ExtraneousValue: sts.unit(),
        IncompleteDatabase: sts.unit(),
        IncompleteProof: sts.unit(),
        InvalidChildReference: sts.unit(),
        InvalidHash: sts.unit(),
        InvalidStateRoot: sts.unit(),
        RootMismatch: sts.unit(),
        ValueAtIncompleteKey: sts.unit(),
        ValueMismatch: sts.unit(),
    }
})

export type TrieError = TrieError_DecodeError | TrieError_DecoderError | TrieError_DuplicateKey | TrieError_ExtraneousHashReference | TrieError_ExtraneousNode | TrieError_ExtraneousValue | TrieError_IncompleteDatabase | TrieError_IncompleteProof | TrieError_InvalidChildReference | TrieError_InvalidHash | TrieError_InvalidStateRoot | TrieError_RootMismatch | TrieError_ValueAtIncompleteKey | TrieError_ValueMismatch

export interface TrieError_DecodeError {
    __kind: 'DecodeError'
}

export interface TrieError_DecoderError {
    __kind: 'DecoderError'
}

export interface TrieError_DuplicateKey {
    __kind: 'DuplicateKey'
}

export interface TrieError_ExtraneousHashReference {
    __kind: 'ExtraneousHashReference'
}

export interface TrieError_ExtraneousNode {
    __kind: 'ExtraneousNode'
}

export interface TrieError_ExtraneousValue {
    __kind: 'ExtraneousValue'
}

export interface TrieError_IncompleteDatabase {
    __kind: 'IncompleteDatabase'
}

export interface TrieError_IncompleteProof {
    __kind: 'IncompleteProof'
}

export interface TrieError_InvalidChildReference {
    __kind: 'InvalidChildReference'
}

export interface TrieError_InvalidHash {
    __kind: 'InvalidHash'
}

export interface TrieError_InvalidStateRoot {
    __kind: 'InvalidStateRoot'
}

export interface TrieError_RootMismatch {
    __kind: 'RootMismatch'
}

export interface TrieError_ValueAtIncompleteKey {
    __kind: 'ValueAtIncompleteKey'
}

export interface TrieError_ValueMismatch {
    __kind: 'ValueMismatch'
}

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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Trie | DispatchError_Unavailable

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

export interface DispatchError_Trie {
    __kind: 'Trie'
    value: TrieError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}
