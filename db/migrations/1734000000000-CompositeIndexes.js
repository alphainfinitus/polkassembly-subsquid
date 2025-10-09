module.exports = class CompositeIndexes1734000000000 {
    name = 'CompositeIndexes1734000000000'

    async up(db) {
        // Composite indexes for most common query patterns
        
        // 1. Proposal lookups by hash + type (very common pattern)
        await db.query(`CREATE INDEX "IDX_proposal_hash_type" ON "proposal" ("hash", "type")`)
        
        // 2. ConvictionVote lookups for active votes by voter + proposal + type
        await db.query(`CREATE INDEX "IDX_conviction_vote_active_by_voter" ON "conviction_vote" ("voter", "proposal_index", "type") WHERE "removed_at_block" IS NULL`)
        
        // 3. FlattenedConvictionVotes lookups for active votes by voter + proposal + type  
        await db.query(`CREATE INDEX "IDX_flattened_votes_active_by_voter" ON "flattened_conviction_votes" ("voter", "proposal_index", "type") WHERE "removed_at_block" IS NULL`)
        
        // 4. ConvictionVote lookups for all active votes on a proposal
        await db.query(`CREATE INDEX "IDX_conviction_vote_active_by_proposal" ON "conviction_vote" ("proposal_index", "type") WHERE "removed_at_block" IS NULL`)
        
        // 5. Proposal lookups by type + status (for filtering proposals by state)
        await db.query(`CREATE INDEX "IDX_proposal_type_status" ON "proposal" ("type", "status")`)
        
        // 6. ConvictionVote with voting power for weighted queries
        await db.query(`CREATE INDEX "IDX_conviction_vote_power_decision" ON "conviction_vote" ("total_voting_power", "decision") WHERE "removed_at_block" IS NULL`)
        
        // 7. Time-based queries combining block + type
        await db.query(`CREATE INDEX "IDX_proposal_created_type" ON "proposal" ("created_at_block", "type")`)
        await db.query(`CREATE INDEX "IDX_conviction_vote_created_type" ON "conviction_vote" ("created_at_block", "type")`)
    }

    async down(db) {
        // Remove composite indexes in reverse order
        await db.query(`DROP INDEX IF EXISTS "IDX_conviction_vote_created_type"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_proposal_created_type"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_conviction_vote_power_decision"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_proposal_type_status"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_conviction_vote_active_by_proposal"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_flattened_votes_active_by_voter"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_conviction_vote_active_by_voter"`)
        await db.query(`DROP INDEX IF EXISTS "IDX_proposal_hash_type"`)
    }
}
