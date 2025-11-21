import { started } from '@kusama/types/democracy/events'
import { StorageNotExistsWarn, UnknownVersionError } from '@src/shared/errors'
import { ProposalStatus, ProposalType, ReferendumThresholdType } from '@model/index'
import { storage } from '@kusama/storage'
import { createReferendum } from '@kusama/mappings/utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '@src/processor'

interface ReferendumEventData {
    index: number
    threshold: string
}

function getEventData(itemEvent: Event): ReferendumEventData {
    if (started.v1020.is(itemEvent)) {
        const [index, threshold] = started.v1020.decode(itemEvent)
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (started.v9130.is(itemEvent)) {
        const { refIndex: index, threshold } = started.v9130.decode(itemEvent)
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export async function handleStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, threshold } = getEventData(item)

    const storageData = await storage.democracy.getReferendumInfoOf(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Referendum, index))
        return
    }

    if (storageData.status === 'Finished') {
        ctx.log.warn(`Referendum with index ${index} has already finished at block ${header.height}`)
        return
    }
    const extrinsicIndex = `${header.height}-${item.index}`

    const { hash, end, delay } = storageData

    await createReferendum(ctx, header, extrinsicIndex, {
        index,
        threshold: threshold as ReferendumThresholdType,
        status: ProposalStatus.Started,
        hash: hash,
        end: end,
        delay: delay,
    })
}
