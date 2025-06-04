import { UnknownVersionError } from '../common/errors'
import { ProcessorContext, Event } from '../processor'
import {
    dispatched,
} from '../types/scheduler/events'
// import { Event } from '../types/support'
// import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number
    result?: string
}

// export function getScheduledEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData {
//     const event = new SchedulerScheduledEvent(ctx, itemEvent)
//     if (event.isV1058) {
//         const number = event.asV1058
//         return {
//             blockNumber: number
//         }
//     } else if (event.isV2005) {
//         const [index, number] = event.asV2005
//         return {
//             blockNumber: number
//         }
//     } else if (event.isV9160) {
//         const { when, index} = event.asV9160
//         return {
//             blockNumber: index
//         }
//     } else {
//         throw new UnknownVersionError(event.constructor.name)
//     }
// }

export function getDispatchedEventData(ctx: ProcessorContext<Store>, item: Event, header: any): ScheduledData | undefined {
    if (dispatched.v40.is(item)) {
        const [[block, number], hash, result] = dispatched.v40.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: block,
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v900.is(item)) {
        const [[block, number], hash, result] = dispatched.v900.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: block,
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v1300.is(item)) {
        const { task, id, result } = dispatched.v1300.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v1400.is(item)) {
        const { task, id, result } = dispatched.v1400.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v1603.is(item)) {
        const { task, id, result } = dispatched.v1603.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v2000.is(item)) {
        const { task, id, result } = dispatched.v2000.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v2500.is(item)) {
        const { task, id, result } = dispatched.v2500.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    } else if (dispatched.v3700.is(item)) {
        const { task, id, result } = dispatched.v3700.decode(item)
        if (result.__kind == 'Ok') {
            return {
                blockNumber: task[0],
                result: result.__kind
            }
        }
        return undefined
    }
    else {
        throw new UnknownVersionError(item.name)
    }
}