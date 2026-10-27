import type { Metadata } from "next";
import SecurityContent from "@/app/(marketing)/security/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Security" };
export default function SecurityPage() { return <MarketingRoute><SecurityContent /></MarketingRoute>; }
