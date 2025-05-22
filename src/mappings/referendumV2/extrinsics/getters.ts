import { UnknownVersionError } from '../../../common/errors'
import { delegate, removeOtherVote, removeVote, undelegate, vote } from '../../../types/conviction-voting/calls'
import { convictionToLockPeriod } from './utils'

type DemocracyVote =
    | {
        type: 'Standard'
        balance?: bigint
        value: number
    }
    | {
        type: 'Split'
        aye: bigint
        nay: bigint
    }
    | {
        type: 'SplitAbstain'
        aye: bigint
        nay: bigint
        abstain: bigint
    }


interface DemocracyVoteCallData {
    index: number
    vote: DemocracyVote
}

export function getVoteData(itemCall: any): DemocracyVoteCallData {
    if (vote.v1001002.is(itemCall)) {
        const { pollIndex, vote: voteData } = vote.v1001002.decode(itemCall)
        if (voteData.__kind === 'Standard') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Standard',
                    balance: voteData.balance,
                    value: voteData.vote
                },
            }
        }
        else if (voteData.__kind === 'Split') {
            return {
                index: pollIndex,
                vote: {
                    type: 'Split',
                    aye: voteData.aye,
                    nay: voteData.nay,
                },
            }
        }
        else {
            return {
                index: pollIndex,
                vote: {
                    type: 'SplitAbstain',
                    aye: voteData.aye,
                    nay: voteData.nay,
                    abstain: voteData.abstain,
                },
            }
        }
    }
    else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export interface ConvictionVoteDelegateCallData {
    track: number
    to: any
    lockPeriod: number
    balance?: bigint
}

export function getDelegateData(itemCall: any): ConvictionVoteDelegateCallData {
    if (delegate.v1001002.is(itemCall)) {
        //{ class, to, conviction, balance}
        const eventData = delegate.v1001002.decode(itemCall)
        return {
            track: eventData.class,
            to: eventData.to.__kind != "Index" ? eventData.to.value : null,
            lockPeriod: convictionToLockPeriod(eventData.conviction.__kind),
            balance: eventData.balance
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}
export interface ConvictionVoteUndelegateCallData {
    track: number
}

export function getUndelegateData(itemCall: any): ConvictionVoteUndelegateCallData {
    if (undelegate.v1001002.is(itemCall)) {
        const eventData = undelegate.v1001002.decode(itemCall)
        return {
            track: eventData.class
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export interface ConvictionVotingRemoveVoteCallData {
    index: number
    track: number | undefined
}

export function getRemoveVoteData(itemCall: any): ConvictionVotingRemoveVoteCallData {
    if (removeVote.v1001002.is(itemCall)) {
        const eventData = removeVote.v1001002.decode(itemCall)
        return {
            index: eventData.index,
            track: eventData.class
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export interface ConvictionVotingRemoveOtherVoteCallData {
    index: number
    track: number | undefined
    target: string | null
}

export function getRemoveOtherVoteData(itemCall: any): ConvictionVotingRemoveOtherVoteCallData {
    if (removeOtherVote.v1001002.is(itemCall)) {
        const eventData = removeOtherVote.v1001002.decode(itemCall)
        return {
            index: eventData.index,
            track: eventData.class,
            target: eventData.target.__kind != "Index" ? eventData.target.value : null
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}
