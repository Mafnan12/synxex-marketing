import type { TransactionStatus } from "@/types";
import { Badge } from "@/components/ui/Badge";

const statusConfig: Record<TransactionStatus, { label: string; tone: "positive" | "warning" | "negative" | "neutral" | "info" }> = {
  pending: { label: "Pending", tone: "neutral" },
  processing: { label: "Processing", tone: "info" },
  confirming: { label: "Confirming", tone: "info" },
  completed: { label: "Completed", tone: "positive" },
  failed: { label: "Failed", tone: "negative" },
  rejected: { label: "Rejected", tone: "negative" },
  "under-review": { label: "Under review", tone: "warning" },
};

export function TransactionStatusBadge({ status }: { status: TransactionStatus }) {
  const config = statusConfig[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
