import { lookupArchive } from '@subsquid/archive-registry'
import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'
import { ProposalStatus } from './model'
import { createPreimageV2 } from './mappings/utils/proposals'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/asset-hub-kusama')
    .setRpcEndpoint('wss://asset-hub-kusama-rpc.n.dwellir.com')
    .setBlockRange({ from: 0 })
    .setFields({ event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .addCall({
        name: ['ConvictionVoting.vote', 'ConvictionVoting.delegate', 'ConvictionVoting.undelegate', 'ConvictionVoting.remove_vote', 'ConvictionVoting.remove_other_vote', 'Bounties.accept_curator',
            'Bounties.unassign_curator', 'Bounties.propose_curator', 'ChildBounties.propose_curator', 'ChildBounties.accept_curator', 'ChildBounties.unassign_curator', 'Tips.tip'
        ]
    })
    .addEvent({
        name: ['Referenda.Submitted', 'Referenda.DecisionDepositPlaced', 'Referenda.Rejected', 'Referenda.MetadataSet', 'Referenda.MetadataCleared', 'Referenda.TimedOut', 'Referenda.Approved', 'Referenda.DecisionStarted', 'Referenda.ConfirmStarted',
            'Referenda.Cancelled', 'Referenda.Killed', 'Referenda.Confirmed', 'Preimage.Requested', 'Preimage.Noted', 'Preimage.Cleared',
            'Referenda.ConfirmAborted', 'Treasury.Proposed',
            'Treasury.Awarded', 'Treasury.Rejected', 'Treasury.SpendApproved', 'Scheduler.Dispatched',
            'Treasury.NewTip', 'Treasury.TipClosed', 'Treasury.TipRetracted', 'Treasury.BountyProposed', 'Treasury.BountyRejected', 'Treasury.BountyBecameActive', 'Treasury.BountyAwarded', 'Treasury.BountyClaimed',
            'Treasury.BountyCanceled', 'Treasury.BountyExtended', 'Tips.NewTip', 'Tips.TipClosed', 'Tips.TipRetracted', 'Tips.TipSlashed', 'Bounties.BountyProposed', 'Bounties.BountyRejected', 'Bounties.BountyBecameActive',
            'Bounties.BountyAwarded', 'Bounties.BountyClaimed', 'Bounties.BountyCanceled', 'Bounties.BountyExtended', 'ChildBounties.Added', 'ChildBounties.Awarded', 'ChildBounties.Claimed', 'ChildBounties.Canceled'
        ],
        call: true,
        extrinsic: true
    })

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        let multisigOrigins = new Map<string, any>()
        for (let item of block.events) {
            let multisigAddress: string
            if (item.name == 'Multisig.MultisigExecuted') {
                if (Array.isArray(item.event.args)) {
                    assert(item.event.args.length >= 3)
                    multisigAddress = item.event.args[2]
                } else if (typeof item.event.args === 'object') {
                    assert('multisig' in item.event.args)
                    multisigAddress = item.event.args.multisig
                } else {
                    throw new Error('Unextpected case')
                }

                let extrinsicHash = item.event.extrinsic!.hash
                multisigOrigins.set(extrinsicHash, {
                    __kind: 'system',
                    value: {
                        __kind: 'Signed',
                        value: multisigAddress,
                    },
                })
            }
        }
        if (multisigOrigins.size > 0) {
            for (let item of block.calls) {
                if (item.kind === 'call' && 'extrinsic' in item && 'origin' in item.call && item.origin == null) {
                    item.origin = multisigOrigins.get(item.extrinsic.hash)
                }
            }
        }
        for (let item of block.calls) {
            if (item.name == 'ConvictionVoting.vote') {
                await modules.referendumV2.extrinsics.handleConvictionVote(ctx, item, block.header)
            }
            if (item.name == 'ConvictionVoting.delegate') {
                await modules.referendumV2.extrinsics.handleDelegate(ctx, item, block.header)
            }
            if (item.name == 'ConvictionVoting.undelegate') {
                await modules.referendumV2.extrinsics.handleUndelegate(ctx, item, block.header)
            }
            if (item.name == 'ConvictionVoting.remove_vote') {
                await modules.referendumV2.extrinsics.handleRemoveVote(ctx, item, block.header)
            }
            if (item.name == 'ConvictionVoting.remove_other_vote') {
                await modules.referendumV2.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
            }
            if (item.name == 'Bounties.accept_curator') {
                await modules.bounties.extrinsic.handleAcceptCurator(ctx, item, block.header)
            }
            if (item.name == 'Bounties.unassign_curator') {
                await modules.bounties.extrinsic.handleUnassignCurator(ctx, item, block.header)
            }
            if (item.name == 'Bounties.propose_curator') {
                await modules.bounties.extrinsic.handleProposeCurator(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.accept_curator') {
                await modules.childBounties.extrinsic.handleAcceptCurator(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.propose_curator') {
                await modules.childBounties.extrinsic.handleProposeCurator(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.unassign_curator') {
                await modules.childBounties.extrinsic.handleUnassignCurator(ctx, item, block.header)
            }
        }
        for (let item of block.events) {
            if (item.name == 'Treasury.Awarded') {
                await modules.treasury.events.handleAwarded(ctx, item, block.header)
            }
            if (item.name == 'Treasury.SpendApproved') {
                await modules.treasury.events.handleSpendApproved(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyProposed') {
                await modules.bounties.events.handleProposed(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyRejected') {
                await modules.bounties.events.handleRejected(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyBecameActive') {
                await modules.bounties.events.handleBecameActive(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyAwarded') {
                await modules.bounties.events.handleAwarded(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyClaimed') {
                await modules.bounties.events.handleClaimed(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyCanceled') {
                await modules.bounties.events.handleCanceled(ctx, item, block.header)
            }
            if (item.name == 'Bounties.BountyExtended') {
                await modules.bounties.events.handleExtended(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.Added') {
                await modules.childBounties.events.handleProposed(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.Awarded') {
                await modules.childBounties.events.handleAwarded(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.Claimed') {
                await modules.childBounties.events.handleClaimed(ctx, item, block.header)
            }
            if (item.name == 'ChildBounties.Canceled') {
                await modules.childBounties.events.handleCancelled(ctx, item, block.header)
            }
            if (item.name == 'Preimage.Noted') {
                await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header)
            }
            if (item.name == 'Preimage.Cleared') {
                await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header)
            }
            if (item.name == 'Preimage.Requested') {
                await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Submitted') {
                await modules.referendumV2.events.handleSubmitted(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Approved') {
                await modules.referendumV2.events.handleApproved(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Cancelled') {
                await modules.referendumV2.events.handleCancelled(ctx, item, block.header)
            }
            if (item.name == 'Referenda.ConfirmAborted') {
                await modules.referendumV2.events.handleConfirmAborted(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Confirmed') {
                await modules.referendumV2.events.handleConfirmed(ctx, item, block.header)
            }
            if (item.name == 'Referenda.ConfirmStarted') {
                await modules.referendumV2.events.handleConfirmStarted(ctx, item, block.header)
            }
            if (item.name == 'Referenda.DecisionDepositPlaced') {
                await modules.referendumV2.events.handleDecisionDepositPlaced(ctx, item, block.header)
            }
            if (item.name == 'Referenda.DecisionStarted') {
                await modules.referendumV2.events.handleDecisionStarted(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Killed') {
                await modules.referendumV2.events.handleKilled(ctx, item, block.header)
            }
            if (item.name == 'Referenda.Rejected') {
                await modules.referendumV2.events.handleRejected(ctx, item, block.header)
            }
            if (item.name == 'Referenda.TimedOut') {
                await modules.referendumV2.events.handleTimedOut(ctx, item, block.header)
            }
            if (item.name == 'Referenda.MetadataSet') {
                await modules.referendumV2.events.handleMetadataSet(ctx, item, block.header)
            }
            if (item.name == 'Referenda.MetadataCleared') {
                await modules.referendumV2.events.handleMetadataCleared(ctx, item, block.header)
            }
            if (item.name == 'Scheduler.Dispatched') {
                await modules.referendumV2.events.handleReferendumV2Execution(ctx, item, block.header)
            }
        }
    }
});


export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>