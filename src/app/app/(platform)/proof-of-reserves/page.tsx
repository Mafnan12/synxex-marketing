"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { reservesService } from "@/services";
import type { ProofOfReservesSnapshot } from "@/types";
import { ScrollText } from "lucide-react";

export default function ProofOfReservesPage() {
  const [snapshot, setSnapshot] = useState<ProofOfReservesSnapshot | null>(null);

  useEffect(() => {
    reservesService.getProofOfReserves().then(setSnapshot);
  }, []);

  return (
    <div className="pb-10">
      <PageHeader
        title="Proof of Reserves"
        description="Reserve, liability, and verification data is sourced exclusively from backend audit infrastructure. Nothing on this page is estimated or fabricated."
      />

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            {!snapshot ? null : !snapshot.available ? (
              <EmptyState
                icon={ScrollText}
                title="Reserve verification integration not yet connected"
                description="This page is wired to the Proof of Reserves service contract and will populate automatically once a reserve auditor / on-chain verification integration is connected. No figures are shown until then."
              />
            ) : (
              <div className="space-y-2 text-sm text-sx-text-secondary">
                {/* Real data path — populated once snapshot.available is true from a live integration. */}
                <p>Total reserves and liabilities render here once verification data is available.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
