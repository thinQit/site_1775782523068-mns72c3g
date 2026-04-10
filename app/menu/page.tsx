export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import MenuTabs from "@/components/MenuTabs";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Menu"
        subheadline="Espresso, pour-over, and pastries—crafted to let the coffee speak."
        primaryCta={{ label: "Order at the Bar", href: "/visit" }}
        secondaryCta={{ label: "Shop Beans", href: "/beans" }}
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <MenuTabs />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              title="Pastries & small bites"
              subtitle="Baked fresh daily—limited quantities."
              features={[
                { icon: "Croissant", title: "Almond Croissant — $5.25", description: "Frangipane filling, toasted almonds, crisp layers." },
                { icon: "Cookie", title: "Cardamom Bun — $4.75", description: "Cardamom sugar swirl with pearl sugar crunch." },
                { icon: "CakeSlice", title: "Olive Oil Citrus Loaf — $4.50", description: "Lemon glaze; pairs beautifully with washed coffees." },
                { icon: "Wheat", title: "Seasonal Scone — $4.25", description: "Rotates weekly; ask the bar for today’s bake." },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <CTASection
              headline="Want the same cup at home?"
              subheadline="Pick up a fresh bag—roast dates are always on the label."
              primaryCta={{ label: "Browse Beans", href: "/beans" }}
              secondaryCta={{ label: "Learn About Noir", href: "/about" }}
            />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
