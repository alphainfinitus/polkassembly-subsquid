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

export type OriginCaller = OriginCaller_Origins | OriginCaller_TechComm | OriginCaller_system

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_122
}

export interface OriginCaller_TechComm {
    __kind: 'TechComm'
    value: Type_123
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

export type Type_123 = Type_123_Member | Type_123_Members | Type_123__Phantom

export interface Type_123_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_123_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_123__Phantom {
    __kind: '_Phantom'
}

export type Type_122 = Type_122_BigSpender | Type_122_BigTipper | Type_122_ClusterProtocolActivator | Type_122_ClusterProtocolUpdater | Type_122_GeneralAdmin | Type_122_MediumSpender | Type_122_ReferendumCanceller | Type_122_ReferendumKiller | Type_122_SmallSpender | Type_122_SmallTipper | Type_122_StakingAdmin | Type_122_Treasurer | Type_122_WhitelistedCaller

export interface Type_122_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_122_BigTipper {
    __kind: 'BigTipper'
}

export interface Type_122_ClusterProtocolActivator {
    __kind: 'ClusterProtocolActivator'
}

export interface Type_122_ClusterProtocolUpdater {
    __kind: 'ClusterProtocolUpdater'
}

export interface Type_122_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_122_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_122_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_122_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_122_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_122_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Type_122_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Type_122_Treasurer {
    __kind: 'Treasurer'
}

export interface Type_122_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
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
        Origins: Type_122,
        TechComm: Type_123,
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

export const Type_123: sts.Type<Type_123> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_122: sts.Type<Type_122> = sts.closedEnum(() => {
    return  {
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        ClusterProtocolActivator: sts.unit(),
        ClusterProtocolUpdater: sts.unit(),
        GeneralAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        Treasurer: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export const Deposit: sts.Type<Deposit> = sts.struct(() => {
    return  {
        who: AccountId32,
        amount: sts.bigint(),
    }
})
