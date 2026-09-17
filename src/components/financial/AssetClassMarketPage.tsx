"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { MarketTable } from "@/components/financial/MarketTable";
import { marketService } from "@/services";
import type { AssetClass, MarketTicker } from "@/types";

export function AssetClassMarketPage({
  assetClass,
  title,
  description,
}: {
  assetClass: AssetClass;
  title: string;
  description: string;
}) {
  const [tickers, setTickers] = useState<MarketTicker[] | null>(null);

  useEffect(() => {
    marketService.getMarketOverview().then((all) => setTickers(all.filter((t) => t.assetClass === assetClass)));
  }, [assetClass]);

  return (
    <div className="pb-10">
      <PageHeader title={title} description={description} />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-0">
            {!tickers ? (
              <div className="space-y-2 p-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : (
              <MarketTable tickers={tickers} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
