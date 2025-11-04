import { UnknownVersionError } from '@shared/errors'
import { Event } from '@src/processor'
import {
    dispatched
} from '@polkadot/types/scheduler/events'

interface ScheduledData {
    blockNumber: number,
    result?: string
}

export function getDispatchedEventData(itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v0.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v0.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v9110.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v9110.decode(itemEvent)
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
    } else if (dispatched.v9340.is(itemEvent)) {
        const { task, id, result } = dispatched.v9340.decode(itemEvent)
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
    } else if (dispatched.v1005001.is(itemEvent)) {
        const { task, id, result } = dispatched.v1005001.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}