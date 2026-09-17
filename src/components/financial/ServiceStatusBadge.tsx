import type { ServiceState } from "@/types";
import { Badge } from "@/components/ui/Badge";

const stateConfig: Record<ServiceState, { label: string; tone: "positive" | "warning" | "negative" | "neutral" }> = {
  operational: { label: "Operational", tone: "positive" },
  degraded: { label: "Degraded", tone: "warning" },
  "partial-outage": { label: "Partial outage", tone: "negative" },
  maintenance: { label: "Maintenance", tone: "neutral" },
};

export function ServiceStatusBadge({ state }: { state: ServiceState }) {
  const config = stateConfig[state];
  return (
    <Badge tone={config.tone} dot>
      {config.label}
    </Badge>
  );
}
