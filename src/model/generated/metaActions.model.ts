import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {FellowshipParams} from "./_fellowshipParams"

@Entity_()
export class MetaActions {
    constructor(props?: Partial<MetaActions>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    who!: string | undefined | null

    @BigIntColumn_({nullable: true})
    amount!: bigint | undefined | null

    @BooleanColumn_({nullable: true})
    isActive!: boolean | undefined | null

    @StringColumn_({nullable: true})
    evidence!: string | undefined | null

    @IntColumn_({nullable: true})
    rank!: number | undefined | null

    @IntColumn_({nullable: true})
    toRank!: number | undefined | null

    @BooleanColumn_({nullable: true})
    showClaimButton!: boolean | undefined | null

    @BooleanColumn_({nullable: true})
    evidenceJudged!: boolean | undefined | null

    @StringColumn_({nullable: true})
    wish!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new FellowshipParams(undefined, obj)}, nullable: true})
    params!: FellowshipParams | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: true})
    createdAt!: Date | undefined | null

    @IntColumn_({nullable: true})
    createdAtBlock!: number | undefined | null

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null
}
