import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, IntColumn as IntColumn_, Index as Index_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Proposal} from "./proposal.model"
import {VoteDecision} from "./_voteDecision"
import {VoteBalance, fromJsonVoteBalance} from "./_voteBalance"
import {ConvictionDelegatedVotes} from "./convictionDelegatedVotes.model"
import {VoteType} from "./_voteType"

@Entity_()
export class ConvictionVote {
    constructor(props?: Partial<ConvictionVote>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: true})
    voter!: string | undefined | null

    @StringColumn_({nullable: false})
    proposalId!: string

    @Index_()
    @IntColumn_({nullable: false})
    proposalIndex!: number

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @IntColumn_({nullable: true})
    removedAtBlock!: number | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Index_()
    @DateTimeColumn_({nullable: true})
    removedAt!: Date | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    selfVotingPower!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    delegatedVotingPower!: bigint | undefined | null

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    totalVotingPower!: bigint | undefined | null

    @Index_()
    @Column_("varchar", {length: 12, nullable: false})
    decision!: VoteDecision

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonVoteBalance(obj)}, nullable: false})
    balance!: VoteBalance

    @IntColumn_({nullable: true})
    lockPeriod!: number | undefined | null

    @OneToMany_(() => ConvictionDelegatedVotes, e => e.delegatedTo)
    delegatedVotes!: ConvictionDelegatedVotes[]

    @Column_("varchar", {length: 17, nullable: false})
    type!: VoteType
}
