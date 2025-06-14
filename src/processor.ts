import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'
import { ProposalStatus } from './model'
import { createPreimageV2 } from './mappings/utils/proposals'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://westend-rpc.polkadot.io',
        archive: 'https://v2.archive.subsquid.io/network/westend',
    })
    .setTypesBundle("./typegen/westend.json")
    .setBlockRange({ from: 0 })
    .setFields({ event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .addCall({
        name: ['ConvictionVoting.vote', 'ConvictionVoting.delegate', 'ConvictionVoting.undelegate', 'ConvictionVoting.remove_vote', 'ConvictionVoting.remove_other_vote', 'Democracy.vote',
            'Democracy.remove_vote', 'Democracy.remove_other_vote', 'Democracy.delegate', 'Democracy.undelegate', 'Treasury.accept_curator', 'Treasury.unassign_curator', 'Bounties.accept_curator',
            'Bounties.unassign_curator', 'Bounties.propose_curator', 'ChildBounties.propose_curator', 'ChildBounties.accept_curator', 'ChildBounties.unassign_curator', 'Tips.tip', 'Treasury.tip'
        ]
    })
    .addEvent({
        name: ['FellowshipReferenda.Submitted', 'FellowshipReferenda.DecisionDepositPlaced', 'FellowshipReferenda.Rejected', 'FellowshipReferenda.MetadataSet', 'FellowshipReferenda.MetadataCleared', 'FellowshipReferenda.TimedOut', 'FellowshipReferenda.Approved', 'FellowshipReferenda.DecisionStarted', 'FellowshipReferenda.ConfirmStarted',
            'FellowshipReferenda.ConfirmAborted', 'FellowshipReferenda.Cancelled', 'FellowshipReferenda.Killed', 'FellowshipReferenda.Voted', 'FellowshipReferenda.Confirmed', 'Referenda.Submitted', 'Referenda.DecisionDepositPlaced', 'Referenda.Rejected', 'Referenda.MetadataSet', 'Referenda.MetadataCleared', 'Referenda.TimedOut', 'Referenda.Approved', 'Referenda.DecisionStarted', 'Referenda.ConfirmStarted',
            'Referenda.Cancelled', 'Referenda.Killed', 'Referenda.Confirmed', 'Preimage.Requested', 'Preimage.Noted', 'Preimage.Cleared', 'Preimage.Cleared', 'Referenda.ConfirmStarted',
            'Referenda.ConfirmAborted', 'Democracy.Proposed', 'Democracy.Tabled', 'Democracy.Started', 'Democracy.Passed', 'Democracy.NotPassed', 'Democracy.Cancelled', 'Democracy.Executed',
            'Democracy.PreimageNoted', 'Democracy.PreimageUsed', 'Democracy.PreimageInvalid', 'Democracy.PreimageMissing', 'Democracy.PreimageReaped', 'DemocracySeconded', 'Treasury.Proposed',
            'Treasury.Awarded', 'Treasury.Rejected', 'Treasury.SpendApproved', 'Scheduler.Dispatched', 'Council.Proposed', 'Council.Approved', 'Council.Disapproved', 'Council.Closed', 'Council.Voted',
            'Council.Executed', 'TechnicalCommittee.Proposed', 'TechnicalCommittee.Approved', 'TechnicalCommittee.Disapproved', 'TechnicalCommittee.Closed', 'TechnicalCommittee.Voted', 'TechnicalCommittee.Executed',
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
        }
        for (let item of block.events) {
            if (item.name == 'Treasury.Proposed') {
                await modules.treasury.events.handleProposed(ctx, item, block.header)
            }
            if (item.name == 'Treasury.Awarded') {
                await modules.treasury.events.handleAwarded(ctx, item, block.header)
            }
            if (item.name == 'Treasury.Rejected') {
                await modules.treasury.events.handleRejected(ctx, item, block.header)
            }
            if (item.name == 'Treasury.SpendApproved') {
                await modules.treasury.events.handleSpendApproved(ctx, item, block.header)
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