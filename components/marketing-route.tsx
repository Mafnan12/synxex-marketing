import type { ReactNode } from "react";
import MarketingLayout from "@/app/(marketing)/layout";

export function MarketingRoute({ children }: { children: ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
