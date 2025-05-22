import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_, FloatColumn as FloatColumn_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"

@Entity_()
export class CurveData {
    constructor(props?: Partial<CurveData>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    block!: number

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @FloatColumn_({nullable: true})
    approvalPercent!: number | undefined | null

    @Index_()
    @FloatColumn_({nullable: true})
    supportPercent!: number | undefined | null
}
