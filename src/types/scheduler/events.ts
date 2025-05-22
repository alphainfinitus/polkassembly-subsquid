import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v1001002: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1001002.DispatchError),
        })
    ),
}
