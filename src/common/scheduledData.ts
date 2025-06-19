import { UnknownVersionError } from '../common/errors'
import { Event } from '../processor'
import {
    dispatched
} from '../types/scheduler/events'

interface ScheduledData {
    blockNumber: number,
    result?: string
}

export function getDispatchedEventData(itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v1001002.is(itemEvent)) {
        const { task, result } = dispatched.v1001002.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v1005001.is(itemEvent)) {
        const { task, result } = dispatched.v1005001.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}