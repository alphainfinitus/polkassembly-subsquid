import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, ManyToOne as ManyToOne_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {ConvictionVote} from "./convictionVote.model"
import {Proposal} from "./proposal.model"
import {VoteDecision} from "./_voteDecision"
import {VoteBalance, fromJsonVoteBalance} from "./_voteBalance"
import {VoteType} from "./_voteType"

@Entity_()
export class FlattenedConvictionVotes {
    constructor(props?: Partial<FlattenedConvictionVotes>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    voter!: string | undefined | null

    @Index_()
    @ManyToOne_(() => ConvictionVote, {nullable: true})
    parentVote!: ConvictionVote | undefined | null

    @BooleanColumn_({nullable: true})
    isDelegated!: boolean | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    delegatedTo!: string | undefined | null

    @Index_()
    @IntColumn_({nullable: false})
    proposalIndex!: number

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @IntColumn_({nullable: true})
    removedAtBlock!: number | undefined | null

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @DateTimeColumn_({nullable: true})
    removedAt!: Date | undefined | null

    @Index_()
    @Column_("varchar", {length: 12, nullable: false})
    decision!: VoteDecision

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonVoteBalance(obj)}, nullable: false})
    balance!: VoteBalance

    @IntColumn_({nullable: true})
    lockPeriod!: number | undefined | null

    @Column_("varchar", {length: 17, nullable: false})
    type!: VoteType
}
