import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1013 from '../v1013'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v1013: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1013.DispatchError),
        })
    ),
}
