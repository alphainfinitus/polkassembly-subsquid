import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'
import * as v1001000 from '../v1001000'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v5000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v5000.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1001000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1001000.DispatchError),
        })
    ),
}
