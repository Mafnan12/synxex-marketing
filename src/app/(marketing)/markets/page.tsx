import type { Metadata } from "next";
import Marketplace from "./Marketplace";

export const metadata: Metadata = {
  title: "Marketplace | SYNXEX",
  description: "Explore global financial markets and illustrative market insights through one connected ecosystem.",
};

export default function MarketsPage() {
  return <Marketplace />;
}
