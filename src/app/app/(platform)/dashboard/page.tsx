"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";
import { Badge } from "@/components/ui/Badge";
import { CurrencyAmount } from "@/components/financial/CurrencyAmount";
import { PercentageChange } from "@/components/financial/PercentageChange";
import { SubAccountAllocation } from "@/components/financial/SubAccountAllocation";
import { TransactionRow } from "@/components/financial/TransactionRow";
import { KycStatusBadge } from "@/components/financial/KycStatusBadge";
import { useAccountStore } from "@/state/useAccountStore";
import { useNotificationStore } from "@/state/useNotificationStore";
import { useSystemStatusStore } from "@/state/useSystemStatusStore";
import { marketService, transactionService, kycService, aiAgentService } from "@/services";
import type { MarketTicker, Transaction, KycProfile, AiAgent } from "@/types";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { formatTimestamp } from "@/utils/format";

export default function DashboardPage() {
  const { snapshot, status: accountStatus, fetch: fetchAccount } = useAccountStore();
  const { items: notifications, fetch: fetchNotifications } = useNotificationStore();
  const { circuitBreakers, fetch: fetchSystemStatus } = useSystemStatusStore();

  const [tickers, setTickers] = useState<MarketTicker[] | null>(null);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [kyc, setKyc] = useState<KycProfile | null>(null);
  const [agents, setAgents] = useState<AiAgent[] | null>(null);

  useEffect(() => {
    fetchAccount();
    fetchNotifications();
    fetchSystemStatus();
    marketService.getMarketOverview().then(setTickers);
    transactionService.getRecentTransactions(5).then(setTransactions);
    kycService.getKycProfile().then(setKyc);
    aiAgentService.listAgents().then(setAgents);
  }, [fetchAccount, fetchNotifications, fetchSystemStatus]);

  const securityAlerts = notifications.filter((n) => n.category === "security" && !n.read);
  const currentTier = kyc?.tiers.find((t) => t.level === kyc.currentTier);

  return (
    <div className="pb-10">
      <PageHeader
        title="Dashboard"
        description="Your entire financial position across every SynxEx vertical, in one view."
      />

      <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {circuitBreakers.length > 0 && (
          <div className="space-y-3">
            {circuitBreakers.map((cb) => (
              <div
                key={cb.id}
                className="flex flex-col gap-3 rounded-[var(--sx-radius-lg)] border border-sx-warning/30 bg-sx-warning-soft px-5 py-4 sm:flex-row sm:items-start"
              >
                <AlertTriangle className="h-5 w-5 shrink-0 text-sx-warning" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-sx-text-primary">{cb.title}</p>
                  <p className="text-sm text-sx-text-secondary">{cb.why}</p>
                  <p className="text-xs text-sx-text-tertiary">
                    Affected: {cb.affected.join(", ")} · {cb.whatYouCanDo}
                  </p>
                  <p className="text-xs text-sx-text-tertiary">
                    Next update expected {formatTimestamp(cb.nextUpdateExpected)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Portfolio hero */}
        <Card>
          <CardContent className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-sx-text-secondary">Total portfolio value</p>
                {accountStatus === "loading" || !snapshot ? (
                  <Skeleton className="mt-2 h-10 w-56" />
                ) : (
                  <div className="mt-1 flex flex-wrap items-baseline gap-3">
                    <CurrencyAmount amount={snapshot.totalPortfolioValue} currency="USD" size="xl" />
                    <PercentageChange value={snapshot.todaysChangePercent} />
                  </div>
                )}
                {snapshot && (
                  <p className="mt-1 text-sm text-sx-text-tertiary">
                    <CurrencyAmount amount={snapshot.todaysChangeValue} currency="USD" size="sm" signDisplay="always" /> today
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <StatTile label="Available balance" value={snapshot?.availableBalance} loading={!snapshot} />
                <StatTile
                  label="Crypto balance"
                  value={snapshot?.subAccounts.find((s) => s.vertical === "crypto")?.balance}
                  loading={!snapshot}
                />
                <StatTile
                  label="Banking balance"
                  value={snapshot?.subAccounts.find((s) => s.vertical === "banking")?.balance}
                  loading={!snapshot}
                />
                <StatTile
                  label="Trading balance"
                  value={
                    (snapshot?.subAccounts.find((s) => s.vertical === "forex")?.balance ?? 0) +
                    (snapshot?.subAccounts.find((s) => s.vertical === "stocks")?.balance ?? 0)
                  }
                  loading={!snapshot}
                />
                <StatTile
                  label="Wallet balance"
                  value={snapshot?.subAccounts.find((s) => s.vertical === "wallet")?.balance}
                  loading={!snapshot}
                />
                <StatTile
                  label="Card balance"
                  value={snapshot?.subAccounts.find((s) => s.vertical === "cards")?.balance}
                  loading={!snapshot}
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-sx-text-primary">Balance allocation</p>
              {!snapshot ? (
                <Skeleton className="h-40 w-full" />
              ) : (
                <SubAccountAllocation subAccounts={snapshot.subAccounts} />
              )}
              <p className="mt-3 text-xs text-sx-text-tertiary">
                These are internal virtual sub-accounts within your single SynxEx balance — not separate external
                wallets. No manual transfers are required between verticals.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Market overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Market overview</CardTitle>
              <Link href="/app/markets" className="flex items-center gap-1 text-xs font-medium text-sx-brand hover:underline">
                View markets <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              {!tickers ? (
                <div className="space-y-2 p-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-sx-border">
                  {tickers.map((t) => (
                    <div key={t.symbol} className="flex items-center justify-between px-5 py-3">
                      <div>
                        <p className="text-sm font-medium text-sx-text-primary">{t.symbol}</p>
                        <p className="text-xs text-sx-text-tertiary">{t.displayName}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CurrencyAmount amount={t.price} currency={t.currency} size="sm" />
                        <PercentageChange value={t.changePercent24h} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="border-t border-sx-border px-5 py-2 text-[11px] text-sx-text-tertiary">
                Demo market data for interface development — not connected to a live feed.
              </p>
            </CardContent>
          </Card>

          {/* KYC + Security */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Verification status</CardTitle>
                <Link href="/app/kyc" className="text-xs font-medium text-sx-brand hover:underline">
                  Manage
                </Link>
              </CardHeader>
              <CardContent className="space-y-3">
                {!currentTier ? (
                  <Skeleton className="h-16 w-full" />
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        Tier {currentTier.level} · {currentTier.name}
                      </p>
                      <KycStatusBadge status={currentTier.status} />
                    </div>
                    {currentTier.nextStep && (
                      <p className="text-xs text-sx-text-secondary">Next: {currentTier.nextStep}</p>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security alerts</CardTitle>
                <Link href="/app/security" className="text-xs font-medium text-sx-brand hover:underline">
                  Security center
                </Link>
              </CardHeader>
              <CardContent>
                {securityAlerts.length === 0 ? (
                  <p className="text-sm text-sx-text-tertiary">No open security alerts.</p>
                ) : (
                  <ul className="space-y-2">
                    {securityAlerts.map((a) => (
                      <li key={a.id} className="text-sm">
                        <p className="font-medium text-sx-text-primary">{a.title}</p>
                        <p className="text-xs text-sx-text-secondary">{a.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent transactions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent transactions</CardTitle>
              <Link href="/app/transactions" className="flex items-center gap-1 text-xs font-medium text-sx-brand hover:underline">
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              {!transactions ? (
                <div className="space-y-2 p-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              ) : (
                transactions.map((t) => <TransactionRow key={t.id} transaction={t} />)
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value, loading }: { label: string; value?: number; loading?: boolean }) {
  return (
    <div className="rounded-[var(--sx-radius-md)] border border-sx-border p-3">
      <p className="text-xs text-sx-text-tertiary">{label}</p>
      {loading || value === undefined ? (
        <Skeleton className="mt-1.5 h-5 w-20" />
      ) : (
        <CurrencyAmount amount={value} currency="USD" size="sm" className="mt-1 block" />
      )}
    </div>
  );
}
