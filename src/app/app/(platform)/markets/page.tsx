"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { MarketTable } from "@/components/financial/MarketTable";
import { marketService } from "@/services";
import type { MarketTicker } from "@/types";

export default function MarketsPage() {
  const [tickers, setTickers] = useState<MarketTicker[] | null>(null);

  useEffect(() => {
    marketService.getMarketOverview().then(setTickers);
  }, []);

  return (
    <div className="pb-10">
      <PageHeader title="Markets" description="Crypto, forex, and stocks in one unified market view." />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-0">
            {!tickers ? (
              <div className="space-y-2 p-5">
                {Array.from({ length: 6 }).map((_, i) => (
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
