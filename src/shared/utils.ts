import { ss58codec } from '@src/shared/tools'
import { decodeHex } from '@subsquid/substrate-processor'

/**
 * Converts a hex string to SS58 address format.
 * This utility handles the Buffer to Uint8Array conversion required by ss58codec.encode.
 * 
 * @param hexString - The hex string to decode and encode
 * @returns The SS58 encoded address
 */
export function encodeAddress(hexString: string): string {
  const buffer = decodeHex(hexString)
  // Convert Buffer to Uint8Array to satisfy TypeScript type requirements
  const uint8Array = new Uint8Array(buffer)
  return ss58codec.encode(uint8Array)
}

