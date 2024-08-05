module.exports = class Data1722804031889 {
    name = 'Data1722804031889'

    async up(db) {
        await db.query(`ALTER TABLE "proposal_group" ADD "community_treasury_index" integer`)
        await db.query(`ALTER TABLE "proposal_group" ADD "community_council_motion_index" integer`)
        await db.query(`CREATE INDEX "IDX_e892925d2676a7ac31327280b5" ON "proposal_group" ("community_treasury_index") `)
        await db.query(`CREATE INDEX "IDX_3358340d098d70bd691ce2995d" ON "proposal_group" ("community_council_motion_index") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "proposal_group" DROP COLUMN "community_treasury_index"`)
        await db.query(`ALTER TABLE "proposal_group" DROP COLUMN "community_council_motion_index"`)
        await db.query(`DROP INDEX "public"."IDX_e892925d2676a7ac31327280b5"`)
        await db.query(`DROP INDEX "public"."IDX_3358340d098d70bd691ce2995d"`)
    }
}
