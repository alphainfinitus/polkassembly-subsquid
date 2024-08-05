import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {DelegationType} from "./_delegationType"

@Entity_()
export class VotingDelegation {
    constructor(props?: Partial<VotingDelegation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    from!: string

    @Index_()
    @StringColumn_({nullable: false})
    to!: string

    @BigIntColumn_({nullable: true})
    balance!: bigint | undefined | null

    @IntColumn_({nullable: false})
    lockPeriod!: number

    @IntColumn_({nullable: true})
    track!: number | undefined | null

    @Column_("varchar", {length: 9, nullable: false})
    type!: DelegationType

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @DateTimeColumn_({nullable: true})
    endedAt!: Date | undefined | null

    @IntColumn_({nullable: true})
    endedAtBlock!: number | undefined | null
}
