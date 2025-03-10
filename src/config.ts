import { lookupArchive } from "@subsquid/archive-registry";

const config: any = {
  chain: {
    name: "mythos",
    useEvmAddresses: true,
  },
  // typesBundle: "polkadot",
  batchSize: 500,
  blockRange: {
    from: 0,
  },
};

export default config;
