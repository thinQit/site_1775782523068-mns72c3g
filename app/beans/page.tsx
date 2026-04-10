export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function BeansPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Single-origin beans, roasted weekly"
        subheadline="Choose by flavor profile—floral and tea-like, chocolate and nutty, or fruit-forward naturals. Every bag lists origin, process, and roast date."
        primaryCta={{ label: "See Current Lineup", href: "/beans" }}
        secondaryCta={{ label: "Brew Guides", href: "/about" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577084/site-images/restaurant/10918168.jpg"
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              title="Current lineup"
              subtitle="Availability rotates with harvests. Ask in-store for the next drop."
              features={[
                { icon: "Bean", title: "Ethiopia — Yirgacheffe (Washed)", description: "Jasmine • bergamot • honey • 250g $22 • 1kg $72" },
                { icon: "Bean", title: "Colombia — Huila (Honey)", description: "Caramel • red apple • cocoa • 250g $20 • 1kg $66" },
                { icon: "Bean", title: "Guatemala — Antigua (Washed)", description: "Milk chocolate • orange • toasted almond • 250g $19 • 1kg $62" },
                { icon: "Bean", title: "Brazil — Cerrado (Natural)", description: "Hazelnut • nougat • low acidity • 250g $18 • 1kg $58" },
                { icon: "Bean", title: "Noir House Espresso (Blend)", description: "Dark chocolate • dried cherry • syrupy body • 250g $19 • 1kg $62" },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              title="Brew guides (our starting recipes)"
              subtitle="Dial to taste—these recipes are designed for clarity and sweetness."
              features={[
                { icon: "Droplets", title: "V60 (1 cup)", description: "Dose 15g • Water 250g • 96°C • 2:45–3:15 • Medium-fine grind." },
                { icon: "Timer", title: "Kalita (1–2 cups)", description: "Dose 18g • Water 300g • 94–96°C • 3:00–3:30 • Medium grind." },
                { icon: "Gauge", title: "Espresso (baseline)", description: "Dose 18g • Yield 36g • 27–32s • Adjust grind first, then dose." },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <CTASection
              headline="Not sure what to choose?"
              subheadline="Tell us what you like (tea-like, chocolatey, or fruit-forward) and we’ll point you to the right origin."
              primaryCta={{ label: "Get Recommendations", href: "/contact" }}
              secondaryCta={{ label: "See Café Menu", href: "/menu" }}
            />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
