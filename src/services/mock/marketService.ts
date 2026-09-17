import type { MarketService } from "../types";
import type { MarketTicker } from "@/types";
import { withLatency } from "./latency";

const tickers: MarketTicker[] = [
  { symbol: "BTC/USD", displayName: "Bitcoin", assetClass: "crypto", price: 61_842.15, changePercent24h: 2.14, volume24h: 1_284_000_000, currency: "USD" },
  { symbol: "ETH/USD", displayName: "Ethereum", assetClass: "crypto", price: 3_412.6, changePercent24h: -1.02, volume24h: 642_000_000, currency: "USD" },
  { symbol: "EUR/USD", displayName: "Euro / US Dollar", assetClass: "forex", price: 1.0842, changePercent24h: 0.12, volume24h: 0, currency: "USD" },
  { symbol: "GBP/USD", displayName: "British Pound / US Dollar", assetClass: "forex", price: 1.2716, changePercent24h: -0.08, volume24h: 0, currency: "USD" },
  { symbol: "AAPL", displayName: "Apple Inc.", assetClass: "stocks", price: 228.41, changePercent24h: 0.64, volume24h: 48_200_000, currency: "USD" },
  { symbol: "NVDA", displayName: "NVIDIA Corp.", assetClass: "stocks", price: 132.07, changePercent24h: 3.21, volume24h: 210_500_000, currency: "USD" },
];

export const mockMarketService: MarketService = {
  async getMarketOverview() {
    return withLatency(tickers);
  },
};
