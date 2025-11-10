module.exports = class Data1762247796586 {
    name = 'Data1762247796586'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_active_by_voter"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_active_by_proposal"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_power_decision"`)
        await db.query(`DROP INDEX "public"."IDX_conviction_vote_created_type"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_hash_type"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_type_status"`)
        await db.query(`DROP INDEX "public"."IDX_proposal_created_type"`)
        await db.query(`DROP INDEX "public"."IDX_flattened_votes_active_by_voter"`)
        await db.query(`CREATE TABLE "treasury_spend" ("id" character varying NOT NULL, "index" integer NOT NULL, "beneficiary" text, "amount" numeric NOT NULL, "expire_at" integer, "expires_at" TIMESTAMP WITH TIME ZONE, "asset_kind" jsonb, "asset_id" numeric, "proposal_id" character varying, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at_block" integer, "updated_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_8c06eb3f1cf0be0d565ef90ce69" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c2948585a15309dcf5e0573dd2" ON "treasury_spend" ("index") `)
        await db.query(`CREATE INDEX "IDX_dc59b077c4289f98062a90678b" ON "treasury_spend" ("beneficiary") `)
        await db.query(`CREATE INDEX "IDX_94c26fe716223e93d72a2bbaa5" ON "treasury_spend" ("proposal_id") `)
        await db.query(`CREATE INDEX "IDX_a038460038301e6228082dd4b8" ON "treasury_spend" ("created_at_block") `)
        await db.query(`CREATE INDEX "IDX_3958d3e36d211f20707fcf397f" ON "treasury_spend" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_3b1f5bb55932b4b8d2f4c70fa8" ON "treasury_spend" ("asset_id") `)
        await db.query(`ALTER TABLE "treasury_spend" ADD CONSTRAINT "FK_94c26fe716223e93d72a2bbaa59" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
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
        await db.query(`ALTER TABLE "treasury_spend" DROP CONSTRAINT "FK_94c26fe716223e93d72a2bbaa59"`)
        await db.query(`DROP INDEX "public"."IDX_94c26fe716223e93d72a2bbaa5"`)
        await db.query(`DROP INDEX "public"."IDX_3b1f5bb55932b4b8d2f4c70fa8"`)
        await db.query(`DROP TABLE "treasury_spend"`)
        await db.query(`DROP INDEX "public"."IDX_c2948585a15309dcf5e0573dd2"`)
        await db.query(`DROP INDEX "public"."IDX_dc59b077c4289f98062a90678b"`)
        await db.query(`DROP INDEX "public"."IDX_a038460038301e6228082dd4b8"`)
        await db.query(`DROP INDEX "public"."IDX_3958d3e36d211f20707fcf397f"`)
    }
}
