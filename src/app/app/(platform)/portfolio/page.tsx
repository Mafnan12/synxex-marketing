"use client";

import { useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { CurrencyAmount } from "@/components/financial/CurrencyAmount";
import { PercentageChange } from "@/components/financial/PercentageChange";
import { SubAccountAllocation } from "@/components/financial/SubAccountAllocation";
import { useAccountStore } from "@/state/useAccountStore";

export default function PortfolioPage() {
  const { snapshot, fetch } = useAccountStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="pb-10">
      <PageHeader title="Portfolio" description="Consolidated view of every allocation inside your unified account." />
      <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <p className="text-sm text-sx-text-secondary">Total portfolio value</p>
            {!snapshot ? (
              <Skeleton className="mt-2 h-10 w-56" />
            ) : (
              <div className="mt-1 flex items-baseline gap-3">
                <CurrencyAmount amount={snapshot.totalPortfolioValue} currency="USD" size="xl" />
                <PercentageChange value={snapshot.todaysChangePercent} />
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            {!snapshot ? <Skeleton className="h-40 w-full" /> : <SubAccountAllocation subAccounts={snapshot.subAccounts} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
