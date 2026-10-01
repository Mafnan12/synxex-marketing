import type { Metadata } from "next";
import WalletContent from "@/app/(marketing)/wallet/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Web3 Wallet" };
export default function WalletPage() { return <MarketingRoute><WalletContent /></MarketingRoute>; }
