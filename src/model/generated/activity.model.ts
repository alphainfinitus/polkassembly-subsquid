import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {ActivityType} from "./_activityType"
import {Proposal} from "./proposal.model"
import {Announcements} from "./announcements.model"
import {SalaryCycle} from "./salaryCycle.model"
import {Payout} from "./payout.model"
import {MetaActions} from "./metaActions.model"
import {Vote} from "./vote.model"

@Entity_()
export class Activity {
    constructor(props?: Partial<Activity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("varchar", {length: 17, nullable: false})
    type!: ActivityType

    @Index_()
    @StringColumn_({nullable: true})
    who!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @Index_()
    @ManyToOne_(() => Announcements, {nullable: true})
    announcement!: Announcements | undefined | null

    @Index_()
    @ManyToOne_(() => SalaryCycle, {nullable: true})
    salaryCycle!: SalaryCycle | undefined | null

    @Index_()
    @ManyToOne_(() => Payout, {nullable: true})
    payout!: Payout | undefined | null

    @Index_()
    @ManyToOne_(() => MetaActions, {nullable: true})
    otherActions!: MetaActions | undefined | null

    @Index_()
    @ManyToOne_(() => Vote, {nullable: true})
    vote!: Vote | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    createdAtBlock!: number
}
