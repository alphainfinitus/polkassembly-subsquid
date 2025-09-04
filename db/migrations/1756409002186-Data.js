module.exports = class Data1756409002186 {
    name = 'Data1756409002186'

    async up(db) {
        await db.query(`ALTER TABLE "curve_data" ADD "required_approval_percent" numeric`)
        await db.query(`ALTER TABLE "curve_data" ADD "required_support_percent" numeric`)
        await db.query(`ALTER TABLE "curve_data" ADD "is_approval_met" boolean`)
        await db.query(`ALTER TABLE "curve_data" ADD "is_support_met" boolean`)
        await db.query(`ALTER TABLE "curve_data" ADD "time_since_decision_start" integer`)
        await db.query(`ALTER TABLE "curve_data" ADD "deciding_end_block" integer`)
        await db.query(`CREATE INDEX "IDX_917a8d0ac0f6f593fb832f4a71" ON "curve_data" ("required_approval_percent") `)
        await db.query(`CREATE INDEX "IDX_2ff37848e5f20dcc51e9499d41" ON "curve_data" ("required_support_percent") `)
        await db.query(`CREATE INDEX "IDX_0350d79e8818e2662a5506e232" ON "curve_data" ("is_approval_met") `)
        await db.query(`CREATE INDEX "IDX_637a9a4795799e8492773e011b" ON "curve_data" ("is_support_met") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "required_approval_percent"`)
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "required_support_percent"`)
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "is_approval_met"`)
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "is_support_met"`)
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "time_since_decision_start"`)
        await db.query(`ALTER TABLE "curve_data" DROP COLUMN "deciding_end_block"`)
        await db.query(`DROP INDEX "public"."IDX_917a8d0ac0f6f593fb832f4a71"`)
        await db.query(`DROP INDEX "public"."IDX_2ff37848e5f20dcc51e9499d41"`)
        await db.query(`DROP INDEX "public"."IDX_0350d79e8818e2662a5506e232"`)
        await db.query(`DROP INDEX "public"."IDX_637a9a4795799e8492773e011b"`)
    }
}
