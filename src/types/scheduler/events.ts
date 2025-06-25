import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v49 from '../v49'
import * as v900 from '../v900'
import * as v1300 from '../v1300'
import * as v1401 from '../v1401'
import * as v1605 from '../v1605'
import * as v2000 from '../v2000'
import * as v2500 from '../v2500'
import * as v3701 from '../v3701'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v49: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v49.TaskAddress, sts.option(() => sts.bytes()), v49.DispatchResult])
    ),
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v900: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v900.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v1300: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1300.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1401: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1401.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1605: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1605.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v2000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v2000.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v2500: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v2500.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v3701: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v3701.DispatchError),
        })
    ),
}
