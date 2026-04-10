export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import MenuTabs from "@/components/MenuTabs";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTASection from "@/components/CTASection";
import BentoGallery from "@/components/BentoGallery";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Roasted in the dark. Brewed with clarity."
        subheadline="Noir Coffee Roasters is a specialty roastery + café serving single-origin espresso, a dedicated pour-over bar, and seasonal pastries in a dark industrial space."
        primaryCta={{ label: "View Menu", href: "/menu" }}
        secondaryCta={{ label: "Plan Your Visit", href: "/visit" }}
      />

      <div className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <MenuTabs />
        </ScrollReveal>
      </div>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              badge="Noir Experience"
              title="Reserve the brew bar for a guided tasting"
              subtitle="Book a 45-minute session for up to 4 guests—learn extraction, taste terroir, and take home a bag of your favorite origin."
              features={[
                {
                  icon: "Coffee",
                  title: "Origin Flight (2 coffees)",
                  description: "Two pour-overs, guided tasting notes, processing + roast discussion. $28 per person.",
                },
                {
                  icon: "Flame",
                  title: "Roaster’s Table (3 coffees)",
                  description: "Three coffees across processes + a take-home 250g bag. $45 per person.",
                },
                {
                  icon: "Calendar",
                  title: "Weekend Sessions",
                  description: "Hosted Saturdays and Sundays, 11:00am–3:00pm. Confirmed by email within 24 hours.",
                },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <CTASection
              headline="Meet the roaster behind the roast"
              subheadline="Mara Kline, Head Roaster & Co‑Founder, brings 10+ years of specialty coffee experience and a sweetness-first roasting philosophy."
              primaryCta={{ label: "Our Story", href: "/about" }}
              secondaryCta={{ label: "Explore Beans", href: "/beans" }}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <BentoGallery
            headline="Dark industrial, warm light, and the sound of grinders"
            subheadline="A space designed for focus: concrete, blackened steel, walnut accents, and a pour-over bar that puts the craft on display."
            images={[
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577073/site-images/restaurant/11236566.jpg", alt: "Pour-over bar with kettles and single-origin cards under warm pendant lights" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/11123392.jpg", alt: "Espresso station with industrial steel backdrop and latte art in progress" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577061/site-images/restaurant/10375821.jpg", alt: "Small-batch drum roaster in the back room with burlap sacks stacked nearby" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577056/site-images/restaurant/110813.jpg", alt: "Walnut bench seating against concrete wall with soft shadows" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg", alt: "Single-origin bags on a shelf with tasting notes and origin map" },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <TestimonialCarousel />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <LocationMapEmbed />
        </ScrollReveal>
      </section>
    </main>
  );
}
