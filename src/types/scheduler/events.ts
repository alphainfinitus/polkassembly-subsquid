import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'
import * as v46 from '../v46'
import * as v56 from '../v56'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    v34: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.bigint(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v34: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v34.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v35: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v35.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v36: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v36.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v46: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v46.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v56: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v56.DispatchError),
        })
    ),
}
