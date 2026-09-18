import { Construction } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

/** Marks a route as architecturally wired (layout, nav, types, service contract) but pending its full workflow build-out. */
export function PhaseNotice({ area }: { area: string }) {
  return (
    <EmptyState
      icon={Construction}
      title={`${area} workflow is scheduled for Phase 2`}
      description="This route is fully wired into navigation, the unified account model, and the API service layer. The detailed workflow UI ships in the next delivery phase."
    />
  );
}
