import { UnknownVersionError } from '@shared/errors'
import { Event } from '@src/processor'
import {
    dispatched
} from '@assethub/types/scheduler/events'

interface ScheduledData {
    blockNumber: number,
    result?: string
}

export function getDispatchedEventData(itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v2000000.is(itemEvent)) {
        const { task, id, result } = dispatched.v2000000.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}