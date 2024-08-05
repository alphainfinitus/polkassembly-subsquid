import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Proposal} from "./proposal.model"

@Entity_()
export class ProposalGroup {
    constructor(props?: Partial<ProposalGroup>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: true})
    communityTreasuryIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    treasuryIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    communityCouncilMotionIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    councilMotionIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    democracyProposalIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    referendumIndex!: number | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    techCommitteeProposalIndex!: number | undefined | null

    @OneToMany_(() => Proposal, e => e.group)
    proposals!: Proposal[]
}
