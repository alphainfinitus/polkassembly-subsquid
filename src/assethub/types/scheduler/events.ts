import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1009001 from '../v1009001'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v1009001: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1009001.DispatchError),
        })
    ),
}
