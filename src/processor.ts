import { lookupArchive } from '@subsquid/archive-registry'
import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import { events, calls } from './types'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/collectives-polkadot')
    .setRpcEndpoint('wss://sys.ibp.network/collectives-polkadot')
    .setBlockRange({ from: 0 })
    .setFields({ event: {}, call: { origin: true, success: true, error: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })
    .addCall({
        name: ['FellowshipCore.submit_evidence']
    })
    .addEvent({
        name: ['Preimage.Requested', 'Preimage.Noted', 'Preimage.Cleared', 'Preimage.Cleared', 'AllianceMotion.Disapproved', 'AllianceMotion.Executed', 'AllianceMotion.Proposed', 'AllianceMotion.Approved',
            'AllianceMotion.Voted', 'AllianceMotion.Closed', 'Alliance.Announced', 'Alliance.AnnouncementRemoved', 'Alliance.UnscrupulousItemAdded', 'Alliance.UnscrupulousItemRemoved', 'FellowshipReferenda.Submitted',
            'FellowshipReferenda.Rejected', 'FellowshipReferenda.Approved', 'FellowshipReferenda.Killed', 'FellowshipReferenda.TimedOut', 'FellowshipReferenda.DecisionDepositPlaced', 'FellowshipReferenda.DecisionStarted',
            'FellowshipReferenda.Confirmed', 'FellowshipReferenda.ConfirmStarted', 'FellowshipReferenda.ConfirmAborted', 'FellowshipReferenda.Cancelled', 'FellowshipReferenda.MetadataSet', 'FellowshipReferenda.MetadataCleared',
            'FellowshipCollective.Voted', 'Scheduler.Dispatched', 'FellowshipCollective.RankChanged', 'FellowshipCollective.MemberAdded', 'FellowshipCollective.MemberRemoved', 'FellowshipCore.ActiveChanged', 'FellowshipCore.Inducted',
            'FellowshipCore.Offboarded', 'FellowshipCore.Promoted', 'FellowshipCore.Demoted', 'FellowshipCore.Proven', 'FellowshipCore.Imported', 'FellowshipCore.EvidenceJudged', 'FellowshipSalary.CycleStarted',
            'FellowshipSalary.Inducted', 'FellowshipSalary.Registered', 'FellowshipSalary.Paid', 'FellowshipCore.ParamsChanged'
        ],
        call: true,
        extrinsic: true
    })

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (event.name == events.allianceMotion.proposed.name) {
                await modules.allianceMotion.events.handleProposed(ctx, event, block.header)
            }
            if (event.name == events.allianceMotion.voted.name) {
                await modules.allianceMotion.events.handleVoted(ctx, event, block.header)
            }
            if (event.name == events.allianceMotion.closed.name) {
                await modules.allianceMotion.events.handleClosed(ctx, event, block.header)
            }
            if (event.name == events.allianceMotion.executed.name) {
                await modules.allianceMotion.events.handleExecuted(ctx, event, block.header)
            }
            if (event.name == events.allianceMotion.disapproved.name) {
                await modules.allianceMotion.events.handleDisApproved(ctx, event, block.header)
            }
            if (event.name == events.allianceMotion.approved.name) {
                await modules.allianceMotion.events.handleApproved(ctx, event, block.header)
            }
            if (event.name == events.alliance.announced.name) {
                await modules.alliance.events.handleAnnounced(ctx, event, block.header)
            }
            if (event.name == events.alliance.announcementRemoved.name) {
                await modules.alliance.events.handleAnnouncementRemoved(ctx, event, block.header)
            }
            if (event.name == events.alliance.unscrupulousItemAdded.name) {
                await modules.alliance.events.handleUnscrupulousItemAdded(ctx, event, block.header)
            }
            if (event.name == events.alliance.unscrupulousItemRemoved.name) {
                await modules.alliance.events.handleUnscrupulousItemRemoved(ctx, event, block.header)
            }
            if (event.name == events.preimage.noted.name) {
                await modules.preimageV2.events.handlePreimageV2Noted(ctx, event, block.header)
            }
            if (event.name == events.preimage.cleared.name) {
                await modules.preimageV2.events.handlePreimageV2Cleared(ctx, event, block.header)
            }
            if (event.name == events.preimage.requested.name) {
                await modules.preimageV2.events.handlePreimageV2Requested(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.submitted.name) {
                await modules.fellowshipReferendum.events.handleSubmitted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.approved.name) {
                await modules.fellowshipReferendum.events.handleApproved(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.cancelled.name) {
                await modules.fellowshipReferendum.events.handleCancelled(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.confirmAborted.name) {
                await modules.fellowshipReferendum.events.handleConfirmAborted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.confirmed.name) {
                await modules.fellowshipReferendum.events.handleConfirmed(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.confirmStarted.name) {
                await modules.fellowshipReferendum.events.handleConfirmStarted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.decisionDepositPlaced.name) {
                await modules.fellowshipReferendum.events.handleDecisionDepositPlaced(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.decisionStarted.name) {
                await modules.fellowshipReferendum.events.handleDecisionStarted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.killed.name) {
                await modules.fellowshipReferendum.events.handleKilled(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.rejected.name) {
                await modules.fellowshipReferendum.events.handleRejected(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.timedOut.name) {
                await modules.fellowshipReferendum.events.handleTimedOut(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.metadataSet.name) {
                await modules.fellowshipReferendum.events.handleMetadataSet(ctx, event, block.header)
            }
            if (event.name == events.fellowshipReferenda.metadataCleared.name) {
                await modules.fellowshipReferendum.events.handleMetadataCleared(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCollective.voted.name) {
                await modules.fellowshipReferendum.events.handleFellowshipVotes(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.inducted.name) {
                await modules.fellowshipCore.events.handleInducted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.imported.name) {
                await modules.fellowshipCore.events.handleImported(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.offboarded.name) {
                await modules.fellowshipCore.events.handleOffboarded(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.demoted.name) {
                await modules.fellowshipCore.events.handleDemoted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.paramsChanged.name) {
                await modules.fellowshipCore.events.handleParamsChanged(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.activeChanged.name) {
                await modules.fellowshipCore.events.handleActiveChanged(ctx, event, block.header)
            }
            if (event.name == events.fellowshipCore.evidenceJudged.name) {
                await modules.fellowshipCore.events.handleEvidenceJudged(ctx, event, block.header)
            }
            if (event.name == events.fellowshipSalary.inducted.name) {
                await modules.salary.events.handleInducted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipSalary.registered.name) {
                await modules.salary.events.handleRegistered(ctx, event, block.header)
            }
            if (event.name == events.fellowshipSalary.cycleStarted.name) {
                await modules.salary.events.handleCycleStarted(ctx, event, block.header)
            }
            if (event.name == events.fellowshipSalary.paid.name) {
                await modules.salary.events.handlePaid(ctx, event, block.header)
            }
            if (event.name == events.scheduler.dispatched.name) {
                await modules.fellowshipReferendum.events.handleFellowshipExecution(ctx, event, block.header)
            }
        }
        for (let call of block.calls) {
            if (call.name == calls.fellowshipCore.submitEvidence.name) {
                await modules.fellowshipCore.extrinsics.handleEvidenceSubmission(ctx, call, block.header)
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