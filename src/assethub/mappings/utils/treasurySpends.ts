import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '@src/processor'
import { ss58codec } from '@assethub/common/tools'
import { getAwarderData } from '@assethub/mappings/treasury/events/getters'
import { createOrUpdateTreasurySpend as sharedCreateOrUpdateTreasurySpend } from '@shared/treasurySpends'

export async function createOrUpdateTreasurySpend(
    ctx: ProcessorContext<Store>,
    header: any,
    index: number,
    spendData: any,
    block?: any
): Promise<void> {
    return sharedCreateOrUpdateTreasurySpend(
        ctx,
        header,
        index,
        spendData,
        ss58codec,
        getAwarderData,
        block
    )
}

