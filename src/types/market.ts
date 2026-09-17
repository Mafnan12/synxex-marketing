export type AssetClass = "crypto" | "forex" | "stocks";

export interface MarketTicker {
  symbol: string;
  displayName: string;
  assetClass: AssetClass;
  price: number;
  changePercent24h: number;
  volume24h: number;
  currency: string;
}

export type OrderSide = "buy" | "sell";
export type OrderType = "market" | "limit" | "stop" | "stop-limit";
export type OrderStatus = "open" | "filled" | "partially-filled" | "cancelled" | "rejected";

export interface OrderBookLevel {
  price: number;
  quantity: number;
}

export interface OrderBookSnapshot {
  symbol: string;
  bids: OrderBookLevel[];
  asks: OrderBookLevel[];
}

export interface Position {
  id: string;
  symbol: string;
  side: OrderSide;
  quantity: number;
  entryPrice: number;
  markPrice: number;
  leverage: number;
  unrealizedPnl: number;
  liquidationPrice: number | null;
}

export interface MarginSummary {
  equity: number;
  usedMargin: number;
  availableMargin: number;
  maintenanceMargin: number;
  marginRatio: number;
  liquidationThreshold: number;
}
