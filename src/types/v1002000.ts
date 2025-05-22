import {sts, Result, Option, Bytes, BitSequence} from './support'

export type ReferendumInfo = ReferendumInfo_Approved | ReferendumInfo_Cancelled | ReferendumInfo_Killed | ReferendumInfo_Ongoing | ReferendumInfo_Rejected | ReferendumInfo_TimedOut

export interface ReferendumInfo_Approved {
    __kind: 'Approved'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface ReferendumInfo_Cancelled {
    __kind: 'Cancelled'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface ReferendumInfo_Killed {
    __kind: 'Killed'
    value: number
}

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumInfo_Rejected {
    __kind: 'Rejected'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface ReferendumInfo_TimedOut {
    __kind: 'TimedOut'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface ReferendumStatus {
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

export type H256 = Bytes

export type OriginCaller = OriginCaller_Origins | OriginCaller_ParachainsOrigin | OriginCaller_Void | OriginCaller_XcmPallet | OriginCaller_system

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Type_173
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_175
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

export type Type_175 = Type_175_Response | Type_175_Xcm

export interface Type_175_Response {
    __kind: 'Response'
    value: V4Location
}

export interface Type_175_Xcm {
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

export type Void = never

export type Type_173 = Type_173_Parachain

export interface Type_173_Parachain {
    __kind: 'Parachain'
    value: Id
}

export type Id = number

export type Origin = Origin_AuctionAdmin | Origin_BigSpender | Origin_BigTipper | Origin_FellowshipAdmin | Origin_GeneralAdmin | Origin_LeaseAdmin | Origin_MediumSpender | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SmallSpender | Origin_SmallTipper | Origin_StakingAdmin | Origin_Treasurer | Origin_WhitelistedCaller | Origin_WishForChange

export interface Origin_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Origin_BigSpender {
    __kind: 'BigSpender'
}

export interface Origin_BigTipper {
    __kind: 'BigTipper'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Origin_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Origin_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Origin_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Origin_Treasurer {
    __kind: 'Treasurer'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Origin_WishForChange {
    __kind: 'WishForChange'
}

export interface Deposit {
    who: AccountId32
    amount: bigint
}

export const ReferendumInfo: sts.Type<ReferendumInfo> = sts.closedEnum(() => {
    return  {
        Approved: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        Cancelled: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        Killed: sts.number(),
        Ongoing: ReferendumStatus,
        Rejected: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
        TimedOut: sts.tuple(() => [sts.number(), sts.option(() => Deposit), sts.option(() => Deposit)]),
    }
})

export const ReferendumStatus: sts.Type<ReferendumStatus> = sts.struct(() => {
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

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
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

export const H256 = sts.bytes()

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Origins: Origin,
        ParachainsOrigin: Type_173,
        Void: Void,
        XcmPallet: Type_175,
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

export const Type_175: sts.Type<Type_175> = sts.closedEnum(() => {
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

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_173: sts.Type<Type_173> = sts.closedEnum(() => {
    return  {
        Parachain: Id,
    }
})

export const Id = sts.number()

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
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

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return  {
        who: AccountId32,
        amount: sts.bigint(),
    }
})
