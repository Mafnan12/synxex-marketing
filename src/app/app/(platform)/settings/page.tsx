import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function SettingsPage() {
  return (
    <div className="pb-10">
      <PageHeader title="Settings" description="Profile, preferences, and account configuration." />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Settings" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
