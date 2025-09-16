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
    if (dispatched.integriteeParachainV14.is(itemEvent)) {
        const { task, id, result } = dispatched.integriteeParachainV14.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.integriteeParachainV18.is(itemEvent)) {
        const { task, id, result } = dispatched.integriteeParachainV18.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.integriteeParachainV28.is(itemEvent)) {
        const { task, id, result } = dispatched.integriteeParachainV28.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.integriteeParachainV35.is(itemEvent)) {
        const { task, id, result } = dispatched.integriteeParachainV35.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.integriteeParachainV42.is(itemEvent)) {
        const { task, id, result } = dispatched.integriteeParachainV42.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}