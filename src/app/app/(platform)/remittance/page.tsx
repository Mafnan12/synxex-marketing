import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function RemittancePage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Remittance"
        description="Global transfers with provider routing, transparent fees, and FX-hedged crypto-to-fiat delivery."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Remittance" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
