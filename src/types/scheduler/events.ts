import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v40 from '../v40'
import * as v900 from '../v900'
import * as v1300 from '../v1300'
import * as v1400 from '../v1400'
import * as v1603 from '../v1603'
import * as v2000 from '../v2000'
import * as v2500 from '../v2500'
import * as v3700 from '../v3700'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v40: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v40.TaskAddress, sts.option(() => sts.bytes()), v40.DispatchResult])
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
    v1400: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1400.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1603: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1603.DispatchError),
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
    v3700: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v3700.DispatchError),
        })
    ),
}
