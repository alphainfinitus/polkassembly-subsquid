import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v295 from '../v295'
import * as v299 from '../v299'
import * as v300 from '../v300'
import * as v302 from '../v302'
import * as v48300 from '../v48300'
import * as v48902 from '../v48902'
import * as v50000 from '../v50000'
import * as v73115 from '../v73115'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v266: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v266.TaskAddress, sts.option(() => sts.bytes()), v266.DispatchResult])
    ),
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v295: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v295.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v299: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v299.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v300: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v300.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v302: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v302.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v48300: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v48300.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v48902: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v48902.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v50000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v50000.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v73115: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v73115.DispatchError),
        })
    ),
}
