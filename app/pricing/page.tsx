export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import PricingComparisonTable from "@/components/PricingComparisonTable";
import PricingCards from "@/components/PricingCards";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Pricing"
        subheadline="Clear pricing for tastings and take-home coffee—no surprises, just good cups."
        primaryCta={{ label: "Request a Tasting", href: "/contact" }}
        secondaryCta={{ label: "Visit", href: "/visit" }}
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <PricingComparisonTable />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <PricingCards />
        </ScrollReveal>
      </section>
    </main>
  );
}
