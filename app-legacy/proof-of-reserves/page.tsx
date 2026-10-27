import type { Metadata } from "next";
import ReservesContent from "@/app/(marketing)/proof-of-reserves/page";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Proof of Reserves" };
export default function ProofOfReservesPage() { return <MarketingRoute><ReservesContent /></MarketingRoute>; }
