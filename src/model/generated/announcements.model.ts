import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, JSONColumn as JSONColumn_, ManyToOne as ManyToOne_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {AnnouncementType} from "./_announcementType"
import {Proposal} from "./proposal.model"
import {ProposalStatus} from "./_proposalStatus"
import {StatusHistory} from "./statusHistory.model"

@Entity_()
export class Announcements {
    constructor(props?: Partial<Announcements>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @Index_()
    @IntColumn_({nullable: true})
    index!: number | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    proposer!: string | undefined | null

    @Index_()
    @Column_("varchar", {length: 12, nullable: true})
    type!: AnnouncementType | undefined | null

    @StringColumn_({nullable: true})
    version!: string | undefined | null

    @BigIntColumn_({nullable: true})
    codec!: bigint | undefined | null

    @JSONColumn_({nullable: true})
    announcement!: unknown | undefined | null

    @StringColumn_({nullable: true})
    digest!: string | undefined | null

    @StringColumn_({nullable: true})
    cid!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @BigIntColumn_({nullable: true})
    code!: bigint | undefined | null

    @BooleanColumn_({nullable: true})
    isRemoved!: boolean | undefined | null

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @OneToMany_(() => StatusHistory, e => e.announcement)
    statusHistory!: StatusHistory[]

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @DateTimeColumn_({nullable: true})
    updatedAt!: Date | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    updatedAtBlock!: number | undefined | null
}
