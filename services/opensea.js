import * as Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider(
  process.env.NEXT_PUBLIC_WEB3_HTTP_PROVIDER
);

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
});

export class OpenSeaService {
  static async list(options = { page: 1, limit: 20 }) {
    const offset = (options?.page - 1) * options?.limit;
    return seaport.api.getOrders({
      limit: options?.limit,
      offset,
    });
  }

  static async getAsset(tokenAddress, tokenId) {
    return seaport.api.getOrder({
      token_id: tokenId,
      asset_contract_address: tokenAddress,
    });
  }
}
