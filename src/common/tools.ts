/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "../config";
import { decodeHex } from "@subsquid/util-internal-hex";

// Function to format EVM addresses
export function formatEvmAddress(
  address: string | Uint8Array | undefined
): string | undefined {
  if (!address) return undefined;

  // If it's already a hex string with 0x prefix
  if (typeof address === "string" && address.startsWith("0x")) {
    return address.toLowerCase();
  }

  // If it's a hex string without 0x prefix
  if (typeof address === "string") {
    return `0x${address}`.toLowerCase();
  }

  // If it's a Uint8Array
  return `0x${Buffer.from(address).toString("hex")}`.toLowerCase();
}

// Add compatibility layer for ss58codec
export const ss58codec = {
  encode: (address: string | Uint8Array): string => {
    return formatEvmAddress(address) || "";
  },
  decode: (address: string): Uint8Array => {
    // For EVM addresses, just return the bytes
    if (address.startsWith("0x")) {
      address = address.slice(2);
    }
    return Buffer.from(address, "hex");
  },
};

interface Call {
  __kind: string;
  value: any;
}

export function getOriginAccountId(origin: any) {
  // eslint-disable-next-line sonarjs/no-small-switch
  if (!origin) return undefined;
  switch (origin.__kind) {
    case "system":
      // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
      switch (origin.value.__kind) {
        case "Signed":
          try {
            return formatEvmAddress(decodeHex(origin.value.value));
          } catch (e) {}
          try {
            return formatEvmAddress(decodeHex(origin.value.value.value));
          } catch (e) {
            return undefined;
          }

        default:
          return undefined;
      }
    default:
      return undefined;
  }
}

export function encodeId(id: string | Uint8Array) {
  return formatEvmAddress(typeof id === "string" ? decodeHex(id) : id);
}
