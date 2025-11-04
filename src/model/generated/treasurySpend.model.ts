import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_, JSONColumn as JSONColumn_, ManyToOne as ManyToOne_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"

@Entity_()
export class TreasurySpend {
    constructor(props?: Partial<TreasurySpend>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @StringColumn_({nullable: true})
    beneficiary!: string | undefined | null

    @BigIntColumn_({nullable: false})
    amount!: bigint

    @IntColumn_({nullable: true})
    expireAt!: number | undefined | null

    @DateTimeColumn_({nullable: true})
    expiresAt!: Date | undefined | null

    @JSONColumn_({nullable: true})
    assetKind!: unknown | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: true})
    updatedAtBlock!: number | undefined | null

    @DateTimeColumn_({nullable: true})
    updatedAt!: Date | undefined | null
}
