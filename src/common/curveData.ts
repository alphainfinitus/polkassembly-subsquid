import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto';
import { getStorageData } from '../mappings/fellowshipReferendum/events/referendaSubmitted';
import { Proposal, CurveData } from '../model'
import { getTotalIssuanceStorageData, getTotalInactiveIssuanceStorageData } from '../storage/balances';
import { ProcessorContext } from '../processor';

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

        approvalPercent = Number(tally.ayes) / (Number(tally.ayes) + Number(tally.nays)) * 100
        supportPercent = Number(tally.bareAyes || 0) / Number(activeIssuance) * 100

        await ctx.store.insert(
            new CurveData({
                id: randomUUID(),
                index: proposal.index,
                proposal: proposal,
                timestamp: new Date(header.timestamp),
                approvalPercent: !isNaN(approvalPercent) ? approvalPercent : 0.00,
                supportPercent: !isNaN(supportPercent) ? supportPercent : 0.00,
                block: header.height,
            })
        )
    }

}