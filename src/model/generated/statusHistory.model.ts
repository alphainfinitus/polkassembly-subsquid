import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"
import {Announcements} from "./announcements.model"
import {ProposalStatus} from "./_proposalStatus"
import {Preimage} from "./preimage.model"

@Entity_()
export class StatusHistory {
    constructor(props?: Partial<StatusHistory>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @Index_()
    @ManyToOne_(() => Announcements, {nullable: true})
    announcement!: Announcements | undefined | null

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

    @IntColumn_({nullable: false})
    block!: number

    @Index_()
    @ManyToOne_(() => Preimage, {nullable: true})
    preimage!: Preimage | undefined | null

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @DateTimeColumn_({nullable: false})
    timestamp!: Date
}
