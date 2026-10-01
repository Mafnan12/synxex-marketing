import type { Metadata } from "next";
import AIContent from "@/app/(marketing)/ai-agents/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "AI Agents" };
export default function AIAgentsPage() { return <MarketingRoute><AIContent /></MarketingRoute>; }
