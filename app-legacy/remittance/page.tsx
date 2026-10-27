import type { Metadata } from "next";
import RemittanceContent from "@/app/(marketing)/remittance/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Remittance" };
export default function RemittancePage() { return <MarketingRoute><RemittanceContent /></MarketingRoute>; }
