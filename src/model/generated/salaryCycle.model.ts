import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class SalaryCycle {
    constructor(props?: Partial<SalaryCycle>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    cycleIndex!: number

    @Index_()
    @IntColumn_({nullable: false})
    cycleStart!: number

    @DateTimeColumn_({nullable: true})
    cycleStartDatetime!: Date | undefined | null

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @BigIntColumn_({nullable: true})
    totalRegistrations!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    budget!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    totalUnregisteredPaid!: bigint | undefined | null
}
