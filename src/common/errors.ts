export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export function TooManyOpenDelegations(block: number, track?: number, wallet?: string) {
    return `Each wallet can only have one delegation at a time. 2 or more delegations are active for wallet ${wallet}, track ${track ? track: 'Democracy'} at block ${block}`
}

export function NoDelegationFound(block: number, track?: number, wallet?: string) {
    return `No active delegation found for wallet ${wallet}, track ${track ? track: 'Democracy'} at block ${block}`
}

export function TooManyOpenVotes(block: number, index: number,  wallet?: string) {
    return `Two or more votes are active for referendum ${index} and wallet ${wallet} at block ${block}`
}

export function NoOpenVoteFound(block: number, index: number, wallet?: string) {
    return `No active vote found for referendum ${index} and wallet ${wallet} at block ${block}`
}