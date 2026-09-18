"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { aiAgentService } from "@/services";
import type { AiAgent } from "@/types";
import { formatRelativeTime } from "@/utils/format";

const riskTone: Record<AiAgent["riskLevel"], "positive" | "info" | "warning" | "negative"> = {
  low: "positive",
  moderate: "info",
  elevated: "warning",
  high: "negative",
};

export default function AiAgentsPage() {
  const [agents, setAgents] = useState<AiAgent[] | null>(null);

  useEffect(() => {
    aiAgentService.listAgents().then(setAgents);
  }, []);

  return (
    <div className="pb-10">
      <PageHeader
        title="AI Agent Marketplace"
        description="Browse, subscribe to, and monitor AI-powered financial agents. Past performance does not guarantee future results."
      />

      <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {!agents
          ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-72 w-full" />)
          : agents.map((a) => (
              <Card key={a.id}>
                <CardContent className="flex h-full flex-col gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-sx-text-primary">{a.name}</p>
                      <Badge tone={a.validationStatus === "paper-trading" ? "warning" : "positive"}>
                        {a.validationStatus === "paper-trading" ? "Paper trading" : "Live verified"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-sx-text-secondary">{a.strategy}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {a.assetClasses.map((ac) => (
                      <Badge key={ac} tone="neutral">
                        {ac}
                      </Badge>
                    ))}
                    <Badge tone={riskTone[a.riskLevel]}>{a.riskLevel} risk</Badge>
                  </div>

                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <Metric label="Historical return" value={`${a.historicalReturnPercent.toFixed(1)}%`} />
                    <Metric label="Volatility" value={`${a.volatilityPercent.toFixed(1)}%`} />
                    <Metric label="Sharpe ratio" value={a.sharpeRatio.toFixed(2)} />
                    <Metric label="Max drawdown" value={`${a.maxDrawdownPercent.toFixed(1)}%`} />
                    <Metric label="Win rate" value={a.winRatePercent !== null ? `${a.winRatePercent.toFixed(1)}%` : "—"} />
                    <Metric label="Subscribers" value={a.subscriberCount.toLocaleString()} />
                  </dl>

                  <p className="text-[11px] text-sx-text-tertiary">{a.periodLabel} · Updated {formatRelativeTime(a.lastUpdated)}</p>

                  <div className="mt-auto flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Subscribe
                    </Button>
                    <Button size="sm" variant="secondary" className="flex-1">
                      View details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>

      <p className="px-4 pb-8 text-xs text-sx-text-tertiary sm:px-6 lg:px-8">
        Demo agent data for interface development. Past performance does not guarantee future results. Paper-trading
        agents are not validated against live capital.
      </p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sx-text-tertiary">{label}</dt>
      <dd className="tabular-nums font-medium text-sx-text-primary">{value}</dd>
    </div>
  );
}
