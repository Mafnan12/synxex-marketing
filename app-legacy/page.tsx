import type { Metadata } from "next";
import MarketingLayout from "@/app/(marketing)/layout";
import { MarketingHome } from "@/components/marketing/MarketingHome";

export const metadata: Metadata = {
  title: "SynxEx — One Platform. Every Market.",
  description: "Explore the SynxEx platform across crypto, forex, stocks, banking, remittance, Web3, and AI.",
};

export default function Home() {
  return (
    <MarketingLayout>
      <MarketingHome />
    </MarketingLayout>
  );
}
