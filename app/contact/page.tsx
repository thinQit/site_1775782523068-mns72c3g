"use client";

export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import ContactForm from "@/components/ContactForm";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Contact Noir"
        subheadline="Questions about beans, wholesale inquiries, or tasting requests? Send a note—we’ll reply within 1 business day."
        primaryCta={{ label: "Email Us", href: "mailto:hello@noircoffeeroasters.com" }}
        secondaryCta={{ label: "Call", href: "tel:+15035550198" }}
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              title="Wholesale for restaurants and offices"
              subtitle="We offer a small wholesale program for partners who care about quality and consistency."
              features={[
                { icon: "Package", title: "Minimums", description: "Starting at 5kg/week, roasted Tue + Fri." },
                { icon: "GraduationCap", title: "Support", description: "Dial-in help, brew recipes, and staff training sessions available." },
                { icon: "Coffee", title: "Offerings", description: "House espresso blend plus 2–3 rotating single origins." },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <LocationMapEmbed />
        </ScrollReveal>
      </section>
    </main>
  );
}
