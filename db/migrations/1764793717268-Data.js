module.exports = class Data1764793717268 {
    name = 'Data1764793717268'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_active_by_voter"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_active_by_proposal"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_power_decision"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_created_type"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_hash_type"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_type_status"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_created_type"`)
        await db.query(`DROP INDEX "public"."IDX_flattened_votes_active_by_voter"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_conviction_vote_active_by_voter" ON "conviction_vote" ("voter", "proposal_index", "type") WHERE (removed_at_block IS NULL)`)
        await db.query(`CREATE INDEX "IDX_conviction_vote_active_by_proposal" ON "conviction_vote" ("proposal_index", "type") WHERE (removed_at_block IS NULL)`)
        await db.query(`CREATE INDEX "IDX_conviction_vote_power_decision" ON "conviction_vote" ("total_voting_power", "decision") WHERE (removed_at_block IS NULL)`)
        await db.query(`CREATE INDEX "IDX_conviction_vote_created_type" ON "conviction_vote" ("created_at_block", "type") `)
        await db.query(`CREATE INDEX "IDX_proposal_hash_type" ON "proposal" ("type", "hash") `)
        await db.query(`CREATE INDEX "IDX_proposal_type_status" ON "proposal" ("type", "status") `)
        await db.query(`CREATE INDEX "IDX_proposal_created_type" ON "proposal" ("type", "created_at_block") `)
        await db.query(`CREATE INDEX "IDX_flattened_votes_active_by_voter" ON "flattened_conviction_votes" ("voter", "proposal_index", "type") WHERE (removed_at_block IS NULL)`)
    }
}
