import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function BankingPage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Banking"
        description="Multi-currency accounts, IBAN details, and FX conversion built on the unified balance."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Banking" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
