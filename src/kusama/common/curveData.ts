import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto';
import { getStorageData } from '@kusama/mappings/referendumV2/events/referendaSubmitted';
import { Proposal, CurveData } from '@src/model'
import { getTotalInactiveIssuanceStorageData, getTotalIssuanceStorageData } from '@kusama/storage/balances';
import { ProcessorContext } from '@src/processor';

export async function updateCurveData(ctx: ProcessorContext<Store>, header: any, proposal: Proposal) {
    if (proposal.index == null || proposal.index == undefined) {
        return;
    }

    let approvalPercent = 0.0
    let supportPercent = 0.0

    const storageData = await getStorageData(ctx, proposal.index, header)

    if (storageData) {
        const tally = storageData.tally
        const totalIssuance = await getTotalIssuanceStorageData(ctx, header)
        const inactiveIssuance = await getTotalInactiveIssuanceStorageData(ctx, header)
        const activeIssuance = totalIssuance - inactiveIssuance;
        approvalPercent = Number(tally.ayes) / Number((tally.ayes + tally.nays)) * 100
        supportPercent = Number(tally.support) / Number(activeIssuance) * 100

        await ctx.store.insert(
            new CurveData({
                id: randomUUID(),
                index: proposal.index,
                timestamp: new Date(header.timestamp),
                approvalPercent: !isNaN(approvalPercent) ? Number(approvalPercent.toFixed(5)) : 0.00,
                supportPercent: !isNaN(approvalPercent) ? Number(supportPercent.toFixed(5)) : 0.00,
                block: header.height,
            })
        )
    }

}