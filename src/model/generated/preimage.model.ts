import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {ProposedCall} from "./_proposedCall"
import {ProposalStatus} from "./_proposalStatus"

@Entity_()
export class Preimage {
    constructor(props?: Partial<Preimage>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: true})
    proposer!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @BigIntColumn_({nullable: true})
    deposit!: bigint | undefined | null

    @IntColumn_({nullable: true})
    length!: number | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new ProposedCall(undefined, obj)}, nullable: true})
    proposedCall!: ProposedCall | undefined | null

    @StringColumn_({nullable: true})
    section!: string | undefined | null

    @StringColumn_({nullable: true})
    method!: string | undefined | null

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

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
