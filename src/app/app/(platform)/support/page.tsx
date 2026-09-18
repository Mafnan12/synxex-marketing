"use client";

import { useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { ServiceStatusBadge } from "@/components/financial/ServiceStatusBadge";
import { useSystemStatusStore } from "@/state/useSystemStatusStore";
import { formatTimestamp } from "@/utils/format";
import { LifeBuoy, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SupportPage() {
  const { services, circuitBreakers, status, fetch } = useSystemStatusStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="pb-10">
      <PageHeader title="Support & System Status" description="Live status for every SynxEx service, plus help resources." />

      <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Service status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-0 pb-5">
            {status !== "success" ? (
              <div className="space-y-2 p-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : (
              services.map((s) => (
                <div key={s.service} className="flex flex-col gap-1 border-b border-sx-border px-5 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-sx-text-primary">{s.label}</p>
                    {s.affected && <p className="text-xs text-sx-text-secondary">{s.affected}</p>}
                    {s.availableAlternatives.length > 0 && (
                      <p className="text-xs text-sx-text-tertiary">Still available: {s.availableAlternatives.join(", ")}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <ServiceStatusBadge state={s.state} />
                    <span className="text-[11px] text-sx-text-tertiary">Updated {formatTimestamp(s.lastUpdated)}</span>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-sx-text-tertiary" />
                <p className="text-sm text-sx-text-secondary">Support ticketing integration is not yet connected.</p>
              </div>
              <Button size="sm" variant="secondary" className="w-full">
                Contact support
              </Button>
            </CardContent>
          </Card>

          {circuitBreakers.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Active notices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {circuitBreakers.map((cb) => (
                  <div key={cb.id} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-sx-warning" />
                    <span className="text-sx-text-secondary">{cb.title}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
