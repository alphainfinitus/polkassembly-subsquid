import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1005001 from '../v1005001'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    v9420: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v9420: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9430: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1005001: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1005001.DispatchError),
        })
    ),
}
