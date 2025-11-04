import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface ChildBounty {
    parentBounty: number
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    status: ChildBountyStatus
}

export type ChildBountyStatus = ChildBountyStatus_Active | ChildBountyStatus_Added | ChildBountyStatus_CuratorProposed | ChildBountyStatus_PendingPayout

export interface ChildBountyStatus_Active {
    __kind: 'Active'
    curator: AccountId32
}

export interface ChildBountyStatus_Added {
    __kind: 'Added'
}

export interface ChildBountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: AccountId32
}

export interface ChildBountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: AccountId32
    beneficiary: AccountId32
    unlockAt: number
}

export const ChildBounty: sts.Type<ChildBounty> = sts.struct(() => {
    return  {
        parentBounty: sts.number(),
        value: sts.bigint(),
        fee: sts.bigint(),
        curatorDeposit: sts.bigint(),
        status: ChildBountyStatus,
    }
})

export const ChildBountyStatus: sts.Type<ChildBountyStatus> = sts.closedEnum(() => {
    return  {
        Active: sts.enumStruct({
            curator: AccountId32,
        }),
        Added: sts.unit(),
        CuratorProposed: sts.enumStruct({
            curator: AccountId32,
        }),
        PendingPayout: sts.enumStruct({
            curator: AccountId32,
            beneficiary: AccountId32,
            unlockAt: sts.number(),
        }),
    }
})

export interface Type_928 {
    proposer: AccountId32
    value: bigint
    fee: bigint
    curatorDeposit: bigint
    bond: bigint
    status: BountyStatus
}

export type BountyStatus = BountyStatus_Active | BountyStatus_Approved | BountyStatus_ApprovedWithCurator | BountyStatus_CuratorProposed | BountyStatus_Funded | BountyStatus_PendingPayout | BountyStatus_Proposed

export interface BountyStatus_Active {
    __kind: 'Active'
    curator: AccountId32
    updateDue: number
}

export interface BountyStatus_Approved {
    __kind: 'Approved'
}

export interface BountyStatus_ApprovedWithCurator {
    __kind: 'ApprovedWithCurator'
    curator: AccountId32
}

export interface BountyStatus_CuratorProposed {
    __kind: 'CuratorProposed'
    curator: AccountId32
}

export interface BountyStatus_Funded {
    __kind: 'Funded'
}

export interface BountyStatus_PendingPayout {
    __kind: 'PendingPayout'
    curator: AccountId32
    beneficiary: AccountId32
    unlockAt: number
}

export interface BountyStatus_Proposed {
    __kind: 'Proposed'
}

export const Type_928: sts.Type<Type_928> = sts.struct(() => {
    return  {
        proposer: AccountId32,
        value: sts.bigint(),
        fee: sts.bigint(),
        curatorDeposit: sts.bigint(),
        bond: sts.bigint(),
        status: BountyStatus,
    }
})

export const BountyStatus: sts.Type<BountyStatus> = sts.closedEnum(() => {
    return  {
        Active: sts.enumStruct({
            curator: AccountId32,
            updateDue: sts.number(),
        }),
        Approved: sts.unit(),
        ApprovedWithCurator: sts.enumStruct({
            curator: AccountId32,
        }),
        CuratorProposed: sts.enumStruct({
            curator: AccountId32,
        }),
        Funded: sts.unit(),
        PendingPayout: sts.enumStruct({
            curator: AccountId32,
            beneficiary: AccountId32,
            unlockAt: sts.number(),
        }),
        Proposed: sts.unit(),
    }
})

export type Type_917 = Type_917_Approved | Type_917_Cancelled | Type_917_Killed | Type_917_Ongoing | Type_917_Rejected | Type_917_TimedOut

export interface Type_917_Approved {
    __kind: 'Approved'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_917_Cancelled {
    __kind: 'Cancelled'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_917_Killed {
    __kind: 'Killed'
    value: number
}

export interface Type_917_Ongoing {
    __kind: 'Ongoing'
    value: Type_918
}

export interface Type_917_Rejected {
    __kind: 'Rejected'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_917_TimedOut {
    __kind: 'TimedOut'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_918 {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Deposit
    decisionDeposit?: (Deposit | undefined)
    deciding?: (DecidingStatus | undefined)
    tally: Tally
    inQueue: boolean
    alarm?: ([number, [number, number]] | undefined)
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export interface DecidingStatus {
    since: number
    confirming?: (number | undefined)
}

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
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

export type OriginCaller = OriginCaller_CumulusXcm | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_system

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_324
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_325
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_Authorized | RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_Authorized {
    __kind: 'Authorized'
}

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

export type Origin = Origin_Response | Origin_Xcm

export interface Origin_Response {
    __kind: 'Response'
    value: V5Location
}

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V5Location
}

export interface V5Location {
    parents: number
    interior: V5Junctions
}

export type V5Junctions = V5Junctions_Here | V5Junctions_X1 | V5Junctions_X2 | V5Junctions_X3 | V5Junctions_X4 | V5Junctions_X5 | V5Junctions_X6 | V5Junctions_X7 | V5Junctions_X8

export interface V5Junctions_Here {
    __kind: 'Here'
}

export interface V5Junctions_X1 {
    __kind: 'X1'
    value: V5Junction[]
}

export interface V5Junctions_X2 {
    __kind: 'X2'
    value: V5Junction[]
}

export interface V5Junctions_X3 {
    __kind: 'X3'
    value: V5Junction[]
}

export interface V5Junctions_X4 {
    __kind: 'X4'
    value: V5Junction[]
}

export interface V5Junctions_X5 {
    __kind: 'X5'
    value: V5Junction[]
}

export interface V5Junctions_X6 {
    __kind: 'X6'
    value: V5Junction[]
}

export interface V5Junctions_X7 {
    __kind: 'X7'
    value: V5Junction[]
}

export interface V5Junctions_X8 {
    __kind: 'X8'
    value: V5Junction[]
}

export type V5Junction = V5Junction_AccountId32 | V5Junction_AccountIndex64 | V5Junction_AccountKey20 | V5Junction_GeneralIndex | V5Junction_GeneralKey | V5Junction_GlobalConsensus | V5Junction_OnlyChild | V5Junction_PalletInstance | V5Junction_Parachain | V5Junction_Plurality

export interface V5Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V5NetworkId | undefined)
    id: Bytes
}

export interface V5Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V5NetworkId | undefined)
    index: bigint
}

export interface V5Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V5NetworkId | undefined)
    key: Bytes
}

export interface V5Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V5Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V5Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V5NetworkId
}

export interface V5Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V5Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V5Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V5Junction_Plurality {
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

export type V5NetworkId = V5NetworkId_BitcoinCash | V5NetworkId_BitcoinCore | V5NetworkId_ByFork | V5NetworkId_ByGenesis | V5NetworkId_Ethereum | V5NetworkId_Kusama | V5NetworkId_Polkadot | V5NetworkId_PolkadotBulletin

export interface V5NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V5NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V5NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V5NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V5NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V5NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V5NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V5NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export type Type_325 = Type_325_AuctionAdmin | Type_325_BigSpender | Type_325_BigTipper | Type_325_FellowshipAdmin | Type_325_GeneralAdmin | Type_325_LeaseAdmin | Type_325_MediumSpender | Type_325_ReferendumCanceller | Type_325_ReferendumKiller | Type_325_SmallSpender | Type_325_SmallTipper | Type_325_StakingAdmin | Type_325_Treasurer | Type_325_WhitelistedCaller | Type_325_WishForChange

export interface Type_325_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Type_325_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_325_BigTipper {
    __kind: 'BigTipper'
}

export interface Type_325_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Type_325_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_325_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Type_325_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_325_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_325_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_325_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_325_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Type_325_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Type_325_Treasurer {
    __kind: 'Treasurer'
}

export interface Type_325_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Type_325_WishForChange {
    __kind: 'WishForChange'
}

export type Type_324 = Type_324_Relay | Type_324_SiblingParachain

export interface Type_324_Relay {
    __kind: 'Relay'
}

export interface Type_324_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export interface Deposit {
    who: AccountId32
    amount: bigint
}

export const Type_917: sts.Type<Type_917> = sts.closedEnum(() => {
    return  {
        Approved: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        Cancelled: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        Killed: sts.number(),
        Ongoing: Type_918,
        Rejected: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        TimedOut: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
    }
})

export const Type_918: sts.Type<Type_918> = sts.struct(() => {
    return  {
        track: sts.number(),
        origin: OriginCaller,
        proposal: Bounded,
        enactment: DispatchTime,
        submitted: sts.number(),
        submissionDeposit: Deposit,
        decisionDeposit: sts.option(() => Deposit),
        deciding: sts.option(() => DecidingStatus),
        tally: Tally,
        inQueue: sts.boolean(),
        alarm: sts.option(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()])])),
    }
})

export const DecidingStatus: sts.Type<DecidingStatus> = sts.struct(() => {
    return  {
        since: sts.number(),
        confirming: sts.option(() => sts.number()),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return  {
        After: sts.number(),
        At: sts.number(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        CumulusXcm: Type_324,
        Origins: Type_325,
        PolkadotXcm: Origin,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        Authorized: sts.unit(),
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Response: V5Location,
        Xcm: V5Location,
    }
})

export const V5Location: sts.Type<V5Location> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V5Junctions,
    }
})

export const V5Junctions: sts.Type<V5Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: sts.array(() => V5Junction),
        X2: sts.array(() => V5Junction),
        X3: sts.array(() => V5Junction),
        X4: sts.array(() => V5Junction),
        X5: sts.array(() => V5Junction),
        X6: sts.array(() => V5Junction),
        X7: sts.array(() => V5Junction),
        X8: sts.array(() => V5Junction),
    }
})

export const V5Junction: sts.Type<V5Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V5NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V5NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V5NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V5NetworkId,
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

export const V5NetworkId: sts.Type<V5NetworkId> = sts.closedEnum(() => {
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
    }
})

export const Type_325: sts.Type<Type_325> = sts.closedEnum(() => {
    return  {
        AuctionAdmin: sts.unit(),
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        FellowshipAdmin: sts.unit(),
        GeneralAdmin: sts.unit(),
        LeaseAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        Treasurer: sts.unit(),
        WhitelistedCaller: sts.unit(),
        WishForChange: sts.unit(),
    }
})

export const Type_324: sts.Type<Type_324> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return  {
        who: AccountId32,
        amount: sts.bigint(),
    }
})

export type AccountId32 = Bytes

export type Type_912 = Type_912_Casting | Type_912_Delegating

export interface Type_912_Casting {
    __kind: 'Casting'
    value: Type_913
}

export interface Type_912_Delegating {
    __kind: 'Delegating'
    value: Delegating
}

export interface Delegating {
    balance: bigint
    target: AccountId32
    conviction: Conviction
    delegations: Delegations
    prior: PriorLock
}

export type PriorLock = [number, bigint]

export interface Delegations {
    votes: bigint
    capital: bigint
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

export interface Type_913 {
    votes: [number, AccountVote][]
    delegations: Delegations
    prior: PriorLock
}

export type AccountVote = AccountVote_Split | AccountVote_SplitAbstain | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

export const Type_912: sts.Type<Type_912> = sts.closedEnum(() => {
    return  {
        Casting: Type_913,
        Delegating: Delegating,
    }
})

export const Delegating: sts.Type<Delegating> = sts.struct(() => {
    return  {
        balance: sts.bigint(),
        target: AccountId32,
        conviction: Conviction,
        delegations: Delegations,
        prior: PriorLock,
    }
})

export const PriorLock = sts.tuple(() => [sts.number(), sts.bigint()])

export const Delegations: sts.Type<Delegations> = sts.struct(() => {
    return  {
        votes: sts.bigint(),
        capital: sts.bigint(),
    }
})

export const Type_913: sts.Type<Type_913> = sts.struct(() => {
    return  {
        votes: sts.array(() => sts.tuple(() => [sts.number(), AccountVote])),
        delegations: Delegations,
        prior: PriorLock,
    }
})

export interface Proposal {
    proposer: AccountId32
    value: bigint
    beneficiary: AccountId32
    bond: bigint
}

export const Proposal: sts.Type<Proposal> = sts.struct(() => {
    return  {
        proposer: AccountId32,
        value: sts.bigint(),
        beneficiary: AccountId32,
        bond: sts.bigint(),
    }
})

export type RequestStatus = RequestStatus_Requested | RequestStatus_Unrequested

export interface RequestStatus_Requested {
    __kind: 'Requested'
    maybeTicket?: ([AccountId32, HoldConsideration] | undefined)
    count: number
    maybeLen?: (number | undefined)
}

export interface RequestStatus_Unrequested {
    __kind: 'Unrequested'
    ticket: [AccountId32, HoldConsideration]
    len: number
}

export type HoldConsideration = bigint

export const RequestStatus: sts.Type<RequestStatus> = sts.closedEnum(() => {
    return  {
        Requested: sts.enumStruct({
            maybeTicket: sts.option(() => sts.tuple(() => [AccountId32, HoldConsideration])),
            count: sts.number(),
            maybeLen: sts.option(() => sts.number()),
        }),
        Unrequested: sts.enumStruct({
            ticket: sts.tuple(() => [AccountId32, HoldConsideration]),
            len: sts.number(),
        }),
    }
})

export const HoldConsideration = sts.bigint()

export type H256 = Bytes

export type OldRequestStatus = OldRequestStatus_Requested | OldRequestStatus_Unrequested

export interface OldRequestStatus_Requested {
    __kind: 'Requested'
    deposit?: ([AccountId32, bigint] | undefined)
    count: number
    len?: (number | undefined)
}

export interface OldRequestStatus_Unrequested {
    __kind: 'Unrequested'
    deposit: [AccountId32, bigint]
    len: number
}

export const OldRequestStatus: sts.Type<OldRequestStatus> = sts.closedEnum(() => {
    return  {
        Requested: sts.enumStruct({
            deposit: sts.option(() => sts.tuple(() => [AccountId32, sts.bigint()])),
            count: sts.number(),
            len: sts.option(() => sts.number()),
        }),
        Unrequested: sts.enumStruct({
            deposit: sts.tuple(() => [AccountId32, sts.bigint()]),
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

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

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

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
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

export const H256 = sts.bytes()
