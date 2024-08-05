import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"
import {Preimage} from "./preimage.model"
import {ProposalStatus} from "./_proposalStatus"

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
    @ManyToOne_(() => Preimage, {nullable: true})
    preimage!: Preimage | undefined | null

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @IntColumn_({nullable: false})
    block!: number

    @DateTimeColumn_({nullable: false})
    timestamp!: Date
}
