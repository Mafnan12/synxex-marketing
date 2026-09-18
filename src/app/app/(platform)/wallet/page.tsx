import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { PhaseNotice } from "@/components/layout/PhaseNotice";

export default function WalletPage() {
  return (
    <div className="pb-10">
      <PageHeader
        title="Web3 Wallet"
        description="Unified multi-chain wallet across 31 networks, with memo/tag protection and gas-tier selection."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent>
            <PhaseNotice area="Web3 Wallet" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
