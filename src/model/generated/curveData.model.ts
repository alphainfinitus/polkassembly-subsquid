import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, ManyToOne as ManyToOne_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_, FloatColumn as FloatColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
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
    proposal!: Proposal | undefined | null

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @FloatColumn_({nullable: true})
    approvalPercent!: number | undefined | null

    @Index_()
    @FloatColumn_({nullable: true})
    supportPercent!: number | undefined | null

    @Index_()
    @FloatColumn_({nullable: true})
    requiredApprovalPercent!: number | undefined | null

    @Index_()
    @FloatColumn_({nullable: true})
    requiredSupportPercent!: number | undefined | null

    @Index_()
    @BooleanColumn_({nullable: true})
    isApprovalMet!: boolean | undefined | null

    @Index_()
    @BooleanColumn_({nullable: true})
    isSupportMet!: boolean | undefined | null

    @IntColumn_({nullable: true})
    timeSinceDecisionStart!: number | undefined | null

    @IntColumn_({nullable: true})
    decidingEndBlock!: number | undefined | null
}
