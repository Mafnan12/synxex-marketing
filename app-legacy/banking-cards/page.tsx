import type { Metadata } from "next";
import BankingCardsContent from "@/app/(marketing)/banking-cards/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Banking & Cards" };
export default function BankingCardsPage() { return <MarketingRoute><BankingCardsContent /></MarketingRoute>; }
