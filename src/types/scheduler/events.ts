import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as integriteeParachainV14 from '../integriteeParachainV14'
import * as integriteeParachainV18 from '../integriteeParachainV18'
import * as integriteeParachainV28 from '../integriteeParachainV28'
import * as integriteeParachainV35 from '../integriteeParachainV35'
import * as integriteeParachainV42 from '../integriteeParachainV42'
import * as v560 from '../v560'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    integriteeParachainV14: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => integriteeParachainV14.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    integriteeParachainV18: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => integriteeParachainV18.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    integriteeParachainV28: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => integriteeParachainV28.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    integriteeParachainV35: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => integriteeParachainV35.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    integriteeParachainV42: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => integriteeParachainV42.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v560: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v560.DispatchError),
        })
    ),
}
