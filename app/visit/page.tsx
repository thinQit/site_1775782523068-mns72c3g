export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import PricingCards from "@/components/PricingCards";
import BentoGallery from "@/components/BentoGallery";
import ScrollReveal from "@/components/ScrollReveal";

export default function VisitPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Visit the café"
        subheadline="Drop in for espresso, settle in for pour-over, or request a guided tasting at the brew bar."
        primaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=214+Ironworks+Ave+Portland+OR+97205" }}
        secondaryCta={{ label: "Request a Tasting", href: "/contact" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10148453.jpg"
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <LocationMapEmbed />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <PricingCards />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <BentoGallery
            headline="The space"
            subheadline="Concrete, steel, walnut, and warm light—built for slow coffee."
            images={[
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10520478.jpg", alt: "Noir Coffee Roasters storefront with minimal signage and warm interior glow" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577087/site-images/restaurant/11236793.jpg", alt: "Brew bar with kettles, scales, and origin cards" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577054/site-images/restaurant/10207592.jpg", alt: "Communal table seating with industrial pendant lights" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577070/site-images/restaurant/10636732.jpg", alt: "Roast room with drum roaster and cooling tray" },
            ]}
          />
        </ScrollReveal>
      </section>
    </main>
  );
}
