import { randomUUID } from 'node:crypto'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '@src/processor'
import { decodeHex } from '@subsquid/util-internal-hex'
import { TreasurySpend, Proposal, ProposalType } from '@model/index'

interface SS58Codec {
    encode(bytes: Uint8Array): string
}

interface GetAwarderDataFunction {
    (event: any): { index: number }
}

function extractAccountIdFromMultiAddress(multiAddress: any): Uint8Array | null {
    if (!multiAddress || typeof multiAddress !== 'object') {
        return null
    }

    // Handle V4 format: { V4: { interior: { X1: [{ AccountId32: { id: ... } }] } } }
    if (multiAddress.V4?.interior?.X1) {
        const x1 = Array.isArray(multiAddress.V4.interior.X1) 
            ? multiAddress.V4.interior.X1[0] 
            : multiAddress.V4.interior.X1
        if (x1?.AccountId32?.id) {
            return toUint8Array(x1.AccountId32.id)
        }
    }

    // Handle V3 format: { V3: { interior: { X1: { AccountId32: { id: ... } } } } }
    if (multiAddress.V3?.interior?.X1?.AccountId32?.id) {
        return toUint8Array(multiAddress.V3.interior.X1.AccountId32.id)
    }

    // Handle direct AccountId32 format
    if (multiAddress.AccountId32?.id) {
        return toUint8Array(multiAddress.AccountId32.id)
    }

    // Handle Id format (direct bytes)
    if (multiAddress.__kind === 'Id') {
        return toUint8Array(multiAddress.value)
    }

    return null
}

function toUint8Array(val: any): Uint8Array {
    if (typeof val === 'string') {
        return new Uint8Array(decodeHex(val))
    }
    if (val instanceof Uint8Array) {
        return val
    }
    return new Uint8Array(val)
}

function extractAccountIdFromLocation(location: any): Uint8Array | null {
    if (!location || typeof location !== 'object') {
        return null
    }

    // Handle __kind structure: { __kind: "V3", value: { interior: { __kind: "X1", value: { __kind: "AccountId32", id: ... } } } }
    if (location.__kind === 'V3' || location.__kind === 'V4') {
        const value = location.value
        if (value?.interior) {
            const interior = value.interior
            // Handle X1 junction with __kind structure
            if (interior.__kind === 'X1' && interior.value) {
                const x1Value = interior.value
                if (x1Value.__kind === 'AccountId32' && x1Value.id) {
                    return toUint8Array(x1Value.id)
                }
            }
            // Handle X1 as direct property (fallback)
            if (interior.X1) {
                const x1 = Array.isArray(interior.X1) ? interior.X1[0] : interior.X1
                if (x1?.AccountId32?.id || (x1?.__kind === 'AccountId32' && x1.id)) {
                    return toUint8Array(x1.AccountId32?.id || x1.id)
                }
            }
        }
    }

    // Handle V4 format: beneficiary.V4.interior.X1[0].AccountId32.id
    if (location.V4?.interior?.X1) {
        const x1 = Array.isArray(location.V4.interior.X1) 
            ? location.V4.interior.X1[0] 
            : location.V4.interior.X1
        if (x1?.AccountId32?.id) {
            return toUint8Array(x1.AccountId32.id)
        }
    }

    // Handle V3 format: beneficiary.V3.interior.X1.AccountId32.id
    if (location.V3?.interior?.X1?.AccountId32?.id) {
        return toUint8Array(location.V3.interior.X1.AccountId32.id)
    }

    // Handle other versioned locations - check for V0, V1, V2
    const locationValue = location.V0 || location.V1 || location.V2 || location
    
    // Handle interior junctions - AccountId32 is typically in interior.X1
    if (locationValue?.interior) {
        const interior = locationValue.interior
        
        // Handle X1 junction: { X1: { AccountId32: { id: ... } } }
        if (interior.X1) {
            const x1 = Array.isArray(interior.X1) ? interior.X1[0] : interior.X1
            if (x1?.AccountId32?.id) {
                return toUint8Array(x1.AccountId32.id)
            }
        }
        
        // Handle Here junction (empty interior)
        if (interior.Here || interior.__kind === 'Here') {
            // Here means the chain itself, not an account
            return null
        }
    }
    
    // Handle direct AccountId32 in location
    if (locationValue?.AccountId32?.id) {
        return toUint8Array(locationValue.AccountId32.id)
    }

    return null
}

function calculateExpiresAt(expireAtBlock: number | undefined, currentBlock: number, blockTime: Date): Date | null {
    if (!expireAtBlock) {
        return null
    }
    
    const blocksDiff = expireAtBlock - currentBlock
    const blockTimeMs = blockTime.getTime()
    const blockDurationMs = 6000 // 6 seconds per block (both Polkadot and AssetHub)
    const expiresAtMs = blockTimeMs + (blocksDiff * blockDurationMs)
    
    return new Date(expiresAtMs)
}

export async function createOrUpdateTreasurySpend(
    ctx: ProcessorContext<Store>,
    header: any,
    index: number,
    spendData: any,
    ss58codec: SS58Codec,
    getAwarderData: GetAwarderDataFunction,
    block?: any
): Promise<void> {
    try {
        // Try to extract account ID from MultiAddress or Location
        // For AssetSpendApproved events, beneficiary is typically a VersionedLocation
        const beneficiaryBytes = extractAccountIdFromLocation(spendData.beneficiary) 
            ?? extractAccountIdFromMultiAddress(spendData.beneficiary)
        
        if (!beneficiaryBytes) {
            ctx.log.warn(`Could not extract beneficiary from spend ${index} at block ${header.height}`)
        }

        const beneficiary = beneficiaryBytes ? ss58codec.encode(beneficiaryBytes) : ''
        const amount = BigInt(spendData.amount || 0)
        const expireAt = spendData.expireAt ? Number(spendData.expireAt) : undefined
        const expiresAt = expireAt ? calculateExpiresAt(expireAt, header.height, new Date(header.timestamp)) : null

        // Convert assetKind to JSON-safe format (convert BigInt to string)
        const assetKindJson = spendData.assetKind ? JSON.parse(JSON.stringify(spendData.assetKind, (key, value) => {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            return value
        })) : null

        // Find associated treasury proposal using multiple strategies
        let proposal: Proposal | null = null
        let proposalIndex: number | null = null
        
        // Strategy 1: Look for Treasury.Awarded events in the same block
        if (block?.events) {
            for (const event of block.events) {
                if (event.name === 'Treasury.Awarded') {
                    try {
                        const awardedData = getAwarderData(event)
                        proposalIndex = awardedData.index
                        break
                    } catch {
                        // Continue to next event if parsing fails
                    }
                }
            }
        }
        
        // If we found a proposal index from events, use it directly
        if (proposalIndex !== null) {
            const foundProposal = await ctx.store.get(Proposal, {
                where: {
                    index: proposalIndex,
                    type: ProposalType.TreasuryProposal
                }
            })
            proposal = foundProposal || null
        }
        
        // Strategy 2: Match by beneficiary and amount (look back further)
        if (!proposal && beneficiary) {
            const spendAmount = BigInt(spendData.amount || 0)
            
            // Find all treasury proposals with matching beneficiary
            const allMatchingProposals = await ctx.store.find(Proposal, {
                where: {
                    type: ProposalType.TreasuryProposal,
                    payee: beneficiary
                },
                order: {
                    updatedAtBlock: 'DESC'
                },
                take: 50 // Increased to search more proposals
            })
            
            // First, try to match by amount (within 1% tolerance)
            if (spendAmount > 0) {
                for (const candidate of allMatchingProposals) {
                    if (candidate.reward) {
                        const amountDiff = candidate.reward > spendAmount 
                            ? candidate.reward - spendAmount 
                            : spendAmount - candidate.reward
                        const tolerance = spendAmount / BigInt(100) // 1% tolerance
                        
                        if (amountDiff <= tolerance) {
                            proposal = candidate
                            break
                        }
                    }
                }
            }
            
            // Final fallback: match by beneficiary only (most recent, regardless of amount)
            if (!proposal && allMatchingProposals.length > 0) {
                proposal = allMatchingProposals[0]
            }
        }

        // Check if spend already exists
        const existingSpend = await ctx.store.get(TreasurySpend, {
            where: { index }
        })

        if (existingSpend) {
            // Update existing spend
            existingSpend.beneficiary = beneficiary
            existingSpend.amount = amount
            existingSpend.expireAt = expireAt
            existingSpend.expiresAt = expiresAt
            existingSpend.assetKind = assetKindJson
            existingSpend.proposal = proposal || null
            existingSpend.updatedAtBlock = header.height
            existingSpend.updatedAt = new Date(header.timestamp)
            await ctx.store.save(existingSpend)
        } else {
            // Create new spend
            const spend = new TreasurySpend({
                id: randomUUID(),
                index,
                beneficiary,
                amount,
                expireAt,
                expiresAt,
                assetKind: assetKindJson,
                proposal: proposal || null,
                createdAtBlock: header.height,
                createdAt: new Date(header.timestamp),
                updatedAtBlock: header.height,
                updatedAt: new Date(header.timestamp),
            })
            await ctx.store.insert(spend)
        }
    } catch (error) {
        ctx.log.warn(`Error creating/updating TreasurySpend ${index} at block ${header.height}: ${error}`)
    }
}

