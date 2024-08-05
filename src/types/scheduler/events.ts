import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v63 from '../v63'
import * as v83 from '../v83'
import * as v105 from '../v105'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v63: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v63.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v83: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v83.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v105: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v105.DispatchError),
        })
    ),
}
