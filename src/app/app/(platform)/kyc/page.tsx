"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { KycStatusBadge } from "@/components/financial/KycStatusBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { kycService } from "@/services";
import type { KycProfile } from "@/types";
import { Check, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/utils/cn";

export default function KycPage() {
  const [profile, setProfile] = useState<KycProfile | null>(null);

  useEffect(() => {
    kycService.getKycProfile().then(setProfile);
  }, []);

  return (
    <div className="pb-10">
      <PageHeader
        title="Verification (KYC)"
        description="Requirements and review states are jurisdiction-aware and driven by the KYC service layer — nothing here is hardcoded to a specific regulator."
      />

      <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {profile && profile.activeProvider.status !== "active" && (
          <Card className="border-sx-warning/30 bg-sx-warning-soft">
            <CardContent className="flex items-center gap-3 py-4">
              <ShieldCheck className="h-5 w-5 shrink-0 text-sx-warning" />
              <p className="text-sm text-sx-text-primary">
                Your verification session continued with a backup provider ({profile.activeProvider.providerLabel}).
                Your progress was preserved — no need to restart.
              </p>
            </CardContent>
          </Card>
        )}

        {!profile ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {profile.tiers.map((tier) => (
              <Card key={tier.level} className={cn(tier.status === "locked" && "opacity-70")}>
                <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                        tier.status === "approved" ? "bg-sx-positive-soft text-sx-positive" : "bg-sx-neutral-soft text-sx-text-secondary"
                      )}
                    >
                      {tier.status === "approved" ? <Check className="h-5 w-5" /> : tier.status === "locked" ? <Lock className="h-4 w-4" /> : tier.level}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-sx-text-primary">
                          Tier {tier.level} — {tier.name}
                        </p>
                        <KycStatusBadge status={tier.status} />
                      </div>
                      <p className="mt-1 max-w-xl text-sm text-sx-text-secondary">{tier.description}</p>
                      <ul className="mt-3 space-y-1.5">
                        {tier.requirements.map((r) => (
                          <li key={r.id} className="flex items-center gap-2 text-sm">
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                                r.completed ? "bg-sx-positive text-white" : "border border-sx-border-strong"
                              )}
                            >
                              {r.completed && <Check className="h-3 w-3" />}
                            </span>
                            <span className={r.completed ? "text-sx-text-secondary" : "text-sx-text-primary"}>{r.label}</span>
                          </li>
                        ))}
                      </ul>
                      {tier.unlocks.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {tier.unlocks.map((u) => (
                            <Badge key={u} tone="neutral">
                              {u}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {tier.estimatedReview && (
                        <p className="mt-2 text-xs text-sx-text-tertiary">Estimated review: {tier.estimatedReview}</p>
                      )}
                    </div>
                  </div>
                  {tier.nextStep && tier.status !== "locked" && tier.status !== "approved" && (
                    <Button size="sm" className="shrink-0">
                      {tier.nextStep}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
