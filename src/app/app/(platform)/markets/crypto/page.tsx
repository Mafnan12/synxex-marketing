import { AssetClassMarketPage } from "@/components/financial/AssetClassMarketPage";

export default function CryptoMarketsPage() {
  return (
    <AssetClassMarketPage
      assetClass="crypto"
      title="Crypto Markets"
      description="Spot crypto pairs available on SynxEx."
    />
  );
}
