import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function CardsPage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Cards"
        description="Virtual and physical card management with masked credentials and merchant controls."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Cards" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
