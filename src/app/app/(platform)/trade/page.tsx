import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function TradePage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Trade"
        description="Unified order entry for crypto, forex, and stocks with shared margin and order-book infrastructure."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Trading" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
