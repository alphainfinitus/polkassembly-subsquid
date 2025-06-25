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
    console.log('itemEvent', itemEvent)
    console.log('block', itemEvent.block.height)

    if (dispatched.v266.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v266.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v295.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v295.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v299.is(itemEvent)) {
        const { task, id, result } = dispatched.v299.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v300.is(itemEvent)) {
        const { task, id, result } = dispatched.v300.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v302.is(itemEvent)) {
        const { task, id, result } = dispatched.v302.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v48300.is(itemEvent)) {
        const { task, id, result } = dispatched.v48300.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v48902.is(itemEvent)) {
        const { task, id, result } = dispatched.v48902.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v50000.is(itemEvent)) {
        const { task, id, result } = dispatched.v50000.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v73115.is(itemEvent)) {
        const { task, id, result } = dispatched.v73115.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}