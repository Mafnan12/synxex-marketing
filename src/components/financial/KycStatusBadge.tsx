import type { KycTierStatus } from "@/types";
import { Badge } from "@/components/ui/Badge";

const statusConfig: Record<KycTierStatus, { label: string; tone: "positive" | "warning" | "negative" | "neutral" | "info" }> = {
  locked: { label: "Locked", tone: "neutral" },
  "not-started": { label: "Not started", tone: "neutral" },
  "in-progress": { label: "In progress", tone: "info" },
  "under-review": { label: "Under review", tone: "warning" },
  approved: { label: "Approved", tone: "positive" },
  rejected: { label: "Rejected", tone: "negative" },
  expired: { label: "Expired", tone: "warning" },
};

export function KycStatusBadge({ status }: { status: KycTierStatus }) {
  const config = statusConfig[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
