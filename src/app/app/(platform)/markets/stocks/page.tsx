import { AssetClassMarketPage } from "@/components/financial/AssetClassMarketPage";

export default function StocksMarketsPage() {
  return (
    <AssetClassMarketPage
      assetClass="stocks"
      title="Stocks"
      description="Equities available for trading on SynxEx."
    />
  );
}
