import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, ManyToOne as ManyToOne_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"

@Entity_()
export class Tippers {
    constructor(props?: Partial<Tippers>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @StringColumn_({nullable: true})
    tipper!: string | undefined | null

    @BigIntColumn_({nullable: true})
    value!: bigint | undefined | null

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
