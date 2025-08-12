import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {SalaryCycle} from "./salaryCycle.model"

@Entity_()
export class Payout {
    constructor(props?: Partial<Payout>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => SalaryCycle, {nullable: true})
    cycleIndex!: SalaryCycle | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    who!: string

    @Index_()
    @StringColumn_({nullable: false})
    beneficiary!: string

    @BigIntColumn_({nullable: true})
    amount!: bigint | undefined | null

    @IntColumn_({nullable: true})
    rank!: number | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @StringColumn_({nullable: false})
    extrinsicIndex!: string
}
