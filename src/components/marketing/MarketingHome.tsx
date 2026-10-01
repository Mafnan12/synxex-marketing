import { Hero } from "@/components/marketing/hero/Hero";
import { CardsSection } from "@/components/marketing/CardsSection";
import { ScrollOverview } from "../../../components/scroll-overview";

export function MarketingHome() {
  return (
    <>
      <Hero />

      <ScrollOverview />

      <CardsSection />
    </>
  );
}
