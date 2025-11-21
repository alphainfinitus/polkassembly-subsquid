import { UnknownVersionError } from '@shared/errors'
import { Event } from '@src/processor'
import {
    dispatched
} from '@kusama/types/scheduler/events'

interface ScheduledData {
    blockNumber: number,
    result?: string
}

export function getDispatchedEventData(itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v1058.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v1058.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v9111.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v9111.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v9170.is(itemEvent)) {
        const { task, id, result } = dispatched.v9170.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9190.is(itemEvent)) {
        const { task, id, result } = dispatched.v9190.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9160.is(itemEvent)) {
        const { task, id, result } = dispatched.v9160.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9420.is(itemEvent)) {
        const { task, id, result } = dispatched.v9420.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9320.is(itemEvent)) {
        const { task, id, result } = dispatched.v9320.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9420.is(itemEvent)) {
        const { task, id, result } = dispatched.v9420.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v9430.is(itemEvent)) {
        const { task, id, result } = dispatched.v9430.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v1005000.is(itemEvent)) {
        const { task, id, result } = dispatched.v1005000.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}