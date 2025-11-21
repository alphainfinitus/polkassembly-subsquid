import { BlockHeader, DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields, Event as _Event, Call as _Call, Extrinsic as _Extrinsic } from '@subsquid/substrate-processor'
import * as assethubModules from '@assethub/mappings'
import * as kusamaModules from '@kusama/mappings'
import assert from 'assert'
import { ChainConfig } from '@src/chainConfig'

export function createProcessor(config: ChainConfig) {
    //@ts-ignore ts(2589)
    const processor = new SubstrateBatchProcessor()
        .setGateway(config.gateway)
        .setRpcEndpoint(config.rpcEndpoint)
        .setBlockRange(config.blockRange)
        .setPrometheusPort(config.prometheusPort)
        .setFields({ event: { args: true }, call: { origin: true, success: true, error: true, args: true }, extrinsic: { hash: true, fee: true, tip: true }, block: { timestamp: true } })

    const calls: string[] = []

    if (config.hasReferenda) {
        calls.push(
            'ConvictionVoting.vote',
            'ConvictionVoting.delegate',
            'ConvictionVoting.undelegate',
            'ConvictionVoting.remove_vote',
            'ConvictionVoting.remove_other_vote'
        )
    }

    if (config.hasDemocracy) {
        calls.push(
            'Democracy.vote',
            'Democracy.remove_vote',
            'Democracy.remove_other_vote',
            'Democracy.delegate',
            'Democracy.undelegate'
        )
    }

    if (config.hasTreasury && config.hasDemocracy) {
        calls.push(
            'Treasury.accept_curator',
            'Treasury.unassign_curator'
        )
    }

    if (config.hasBounties) {
        calls.push(
            'Bounties.accept_curator',
            'Bounties.unassign_curator',
            'Bounties.propose_curator'
        )
    }

    if (config.hasChildBounties) {
        calls.push(
            'ChildBounties.propose_curator',
            'ChildBounties.accept_curator',
            'ChildBounties.unassign_curator'
        )
    }

    if (config.hasTips) {
        calls.push('Tips.tip')
        if (config.hasDemocracy) {
            calls.push('Treasury.tip')
        }
    }

    // Always include proxy/multisig helpers to enrich origins
    calls.push(
        'Proxy.proxy',
        'Proxy.proxy_announced',
        'Multisig.as_multi',
        'Multisig.as_multi_threshold_1'
    )

    if (calls.length > 0) {
        processor.addCall({ name: calls, events: true, extrinsic: true })
    }

    const events: string[] = []

    if (config.hasReferenda) {
        events.push(
            'Referenda.Submitted',
            'Referenda.DecisionDepositPlaced',
            'Referenda.Rejected',
            'Referenda.MetadataSet',
            'Referenda.MetadataCleared',
            'Referenda.TimedOut',
            'Referenda.Approved',
            'Referenda.DecisionStarted',
            'Referenda.ConfirmStarted',
            'Referenda.ConfirmAborted',
            'Referenda.Cancelled',
            'Referenda.Killed',
            'Referenda.Confirmed'
        )
    }

    if (config.hasPreimage) {
        events.push('Preimage.Requested', 'Preimage.Noted', 'Preimage.Cleared')
    }

    if (config.hasDemocracy) {
        events.push(
            'Democracy.Proposed',
            'Democracy.Tabled',
            'Democracy.Started',
            'Democracy.Passed',
            'Democracy.NotPassed',
            'Democracy.Cancelled',
            'Democracy.Executed',
            'Democracy.PreimageNoted',
            'Democracy.PreimageUsed',
            'Democracy.PreimageInvalid',
            'Democracy.PreimageMissing',
            'Democracy.PreimageReaped',
            'DemocracySeconded'
        )
    }

    if (config.hasCouncil) {
        events.push(
            'Council.Proposed',
            'Council.Approved',
            'Council.Disapproved',
            'Council.Closed',
            'Council.Voted',
            'Council.Executed'
        )
    }

    if (config.hasTechnicalCommittee) {
        events.push(
            'TechnicalCommittee.Proposed',
            'TechnicalCommittee.Approved',
            'TechnicalCommittee.Disapproved',
            'TechnicalCommittee.Closed',
            'TechnicalCommittee.Voted',
            'TechnicalCommittee.Executed'
        )
    }

    if (config.hasTreasury) {
        events.push(
            'Treasury.Proposed',
            'Treasury.Awarded',
            'Treasury.Rejected',
            'Treasury.SpendApproved'
        )

        if (config.hasDemocracy) {
            events.push(
                'Treasury.NewTip',
                'Treasury.TipClosed',
                'Treasury.TipRetracted',
                'Treasury.BountyProposed',
                'Treasury.BountyRejected',
                'Treasury.BountyBecameActive',
                'Treasury.BountyAwarded',
                'Treasury.BountyClaimed',
                'Treasury.BountyCanceled',
                'Treasury.BountyExtended'
            )
        }
    }

    if (config.hasTips) {
        events.push('Tips.NewTip', 'Tips.TipClosed', 'Tips.TipRetracted', 'Tips.TipSlashed')
    }

    if (config.hasBounties) {
        events.push(
            'Bounties.BountyProposed',
            'Bounties.BountyRejected',
            'Bounties.BountyBecameActive',
            'Bounties.BountyAwarded',
            'Bounties.BountyClaimed',
            'Bounties.BountyCanceled',
            'Bounties.BountyExtended'
        )
    }

    if (config.hasChildBounties) {
        events.push('ChildBounties.Added', 'ChildBounties.Awarded', 'ChildBounties.Claimed', 'ChildBounties.Canceled')
    }

    events.push(
        'Multisig.NewMultisig',
        'Multisig.MultisigApproval',
        'Multisig.MultisigExecuted',
        'Multisig.MultisigCancelled',
        'Proxy.ProxyExecuted'
    )

    events.push('Scheduler.Dispatched')

    if (events.length > 0) {
        processor.addEvent({ name: events, call: true, extrinsic: true })
    }

    return processor
}

export async function handleBlocks(ctx: any, config: ChainConfig) {
    const modules = config.name === 'kusama' ? kusamaModules : assethubModules

    for (let block of ctx.blocks) {
        let multisigOrigins = new Map<string, any>()
        for (let item of block.events) {
            if (item.name == 'Multisig.MultisigExecuted') {
                const eventPayload = 'event' in item && item.event != null ? item.event : item
                const eventArgs = eventPayload?.args

                let multisigAddress: string
                if (Array.isArray(eventArgs)) {
                    assert(eventArgs.length >= 3)
                    multisigAddress = eventArgs[2]
                } else if (eventArgs && typeof eventArgs === 'object') {
                    assert('multisig' in eventArgs)
                    multisigAddress = eventArgs.multisig
                } else {
                    throw new Error('Unexpected Multisig.MultisigExecuted args shape')
                }

                const extrinsicHash = eventPayload?.extrinsic?.hash ?? item.extrinsic?.hash
                assert(extrinsicHash != null, 'Missing extrinsic hash for Multisig.MultisigExecuted event')

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
            if (config.hasDemocracy && config.name === 'kusama') {
                if (item.name == 'Democracy.vote') {
                    await kusamaModules.democracy.extrinsics.handleVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_vote') {
                    await kusamaModules.democracy.extrinsics.handleRemoveVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.remove_other_vote') {
                    await kusamaModules.democracy.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
                }
                if (item.name == 'Democracy.delegate') {
                    await kusamaModules.democracy.extrinsics.handleDelegate(ctx, item, block.header)
                }
                if (item.name == 'Democracy.undelegate') {
                    await kusamaModules.democracy.extrinsics.handleUndelegate(ctx, item, block.header)
                }
            }

            if (config.hasReferenda) {
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

            if (config.hasBounties) {
                if (item.name == 'Bounties.accept_curator') {
                    await modules.bounties.extrinsics.handleAcceptCurator(ctx, item, block.header)
                }
                if (item.name == 'Bounties.unassign_curator') {
                    await modules.bounties.extrinsics.handleUnassignCurator(ctx, item, block.header)
                }
                if (item.name == 'Bounties.propose_curator') {
                    await modules.bounties.extrinsics.handleProposeCurator(ctx, item, block.header)
                }
            }

            if (config.hasTreasury && config.hasDemocracy && config.name === 'kusama') {
                if (item.name == 'Treasury.accept_curator') {
                    await kusamaModules.bounties.extrinsics.handleAcceptCuratorOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.unassign_curator') {
                    await kusamaModules.bounties.extrinsics.handleUnassignCuratorOld(ctx, item, block.header)
                }
            }

            if (config.hasChildBounties) {
                if (item.name == 'ChildBounties.accept_curator') {
                    await modules.childBounties.extrinsics.handleAcceptCurator(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.propose_curator') {
                    await modules.childBounties.extrinsics.handleProposeCurator(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.unassign_curator') {
                    await modules.childBounties.extrinsics.handleUnassignCurator(ctx, item, block.header)
                }
            }

            if (config.hasTips && config.name === 'kusama') {
                if (item.name == 'Tips.tip') {
                    await kusamaModules.tips.extrinsics.handleNewTipValue(ctx, item, block.header)
                }
                if (config.hasDemocracy && item.name == 'Treasury.tip') {
                    await kusamaModules.tips.extrinsics.handleNewTipValueOld(ctx, item, block.header)
                }
            }
        }

        for (let item of block.events) {
            if (config.hasDemocracy && config.name === 'kusama') {
                if (item.name == 'Democracy.Proposed') {
                    await kusamaModules.democracy.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Tabled') {
                    await kusamaModules.democracy.events.handleTabled(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Started') {
                    await kusamaModules.democracy.events.handleStarted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Passed') {
                    await kusamaModules.democracy.events.handlePassed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.NotPassed') {
                    await kusamaModules.democracy.events.handleNotPassed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Cancelled') {
                    await kusamaModules.democracy.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Executed') {
                    await kusamaModules.democracy.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Seconded') {
                    await kusamaModules.democracy.events.handleDemocracySeconds(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageNoted') {
                    await kusamaModules.democracy.events.handlePreimageNoted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageUsed') {
                    await kusamaModules.democracy.events.handlePreimageUsed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageInvalid') {
                    await kusamaModules.democracy.events.handlePreimageInvalid(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageMissing') {
                    await kusamaModules.democracy.events.handlePreimageMissing(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageReaped') {
                    await kusamaModules.democracy.events.handlePreimageReaped(ctx, item, block.header)
                }
            }

            if (config.hasCouncil && config.name === 'kusama') {
                if (item.name == 'Council.Proposed') {
                    await kusamaModules.council.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Council.Voted') {
                    await kusamaModules.council.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'Council.Closed') {
                    await kusamaModules.council.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'Council.Disapproved') {
                    await kusamaModules.council.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'Council.Executed') {
                    await kusamaModules.council.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Council.Approved') {
                    await kusamaModules.council.events.handleApproved(ctx, item, block.header)
                }
            }

            if (config.hasTechnicalCommittee && config.name === 'kusama') {
                if (item.name == 'TechnicalCommittee.Proposed') {
                    await kusamaModules.techComittee.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Approved') {
                    await kusamaModules.techComittee.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Disapproved') {
                    await kusamaModules.techComittee.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Closed') {
                    await kusamaModules.techComittee.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Voted') {
                    await kusamaModules.techComittee.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Executed') {
                    await kusamaModules.techComittee.events.handleExecuted(ctx, item, block.header)
                }
            }

            if (config.hasTreasury) {
                if (item.name == 'Treasury.Proposed' && config.name === 'kusama') {
                    await kusamaModules.treasury.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Treasury.Awarded') {
                    await modules.treasury.events.handleAwarded(ctx, item, block.header)
                }
                if (item.name == 'Treasury.Rejected' && config.name === 'kusama') {
                    await kusamaModules.treasury.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'Treasury.SpendApproved') {
                    await modules.treasury.events.handleSpendApproved(ctx, item, block.header)
                }

                if (config.hasDemocracy && config.name === 'kusama') {
                    if (item.name == 'Treasury.BountyProposed') {
                        await kusamaModules.bounties.events.handleProposedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyRejected') {
                        await kusamaModules.bounties.events.handleRejectedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyBecameActive') {
                        await kusamaModules.bounties.events.handleBecameActiveOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyAwarded') {
                        await kusamaModules.bounties.events.handleAwardedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyClaimed') {
                        await kusamaModules.bounties.events.handleClaimedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyCanceled') {
                        await kusamaModules.bounties.events.handleCanceledOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.BountyExtended') {
                        await kusamaModules.bounties.events.handleExtendedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.NewTip') {
                        await kusamaModules.tips.events.handleNewTipOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.TipRetracted') {
                        await kusamaModules.tips.events.handleRetractedOld(ctx, item, block.header)
                    }
                    if (item.name == 'Treasury.TipClosed') {
                        await kusamaModules.tips.events.handleClosedOld(ctx, item, block.header)
                    }
                }
            }

            if (config.hasTips && config.name === 'kusama') {
                if (item.name == 'Tips.TipClosed') {
                    await kusamaModules.tips.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'Tips.NewTip') {
                    await kusamaModules.tips.events.handleNewTip(ctx, item, block.header)
                }
                if (item.name == 'Tips.TipRetracted') {
                    await kusamaModules.tips.events.handleRetracted(ctx, item, block.header)
                }
                if (item.name == 'Tips.TipSlashed') {
                    await kusamaModules.tips.events.handleSlashed(ctx, item, block.header)
                }
            }

            if (config.hasBounties) {
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
            }

            if (config.hasChildBounties) {
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
            }

            if (config.hasPreimage) {
                if (item.name == 'Preimage.Noted') {
                    await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Cleared') {
                    await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Requested') {
                    await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header)
                }
            }

            if (config.hasReferenda) {
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
            }

            if (item.name == 'Scheduler.Dispatched') {
                if (config.hasReferenda) {
                    await modules.referendumV2.events.handleReferendumV2Execution(ctx, item, block.header)
                }
            }
        }
    }
}

export type Fields = SubstrateBatchProcessorFields<ReturnType<typeof createProcessor>>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>