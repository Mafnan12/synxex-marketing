import type { Metadata } from "next";
import MarketsContent from "@/app/(marketing)/markets/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Markets" };
export default function MarketsPage() { return <MarketingRoute><MarketsContent /></MarketingRoute>; }
