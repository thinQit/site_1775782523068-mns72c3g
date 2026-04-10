export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import BentoGallery from "@/components/BentoGallery";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="A roastery built on origin and repeatability"
        subheadline="Noir started as a late-night roasting project and became a café for people who care about process—on the farm, in the roaster, and at the bar."
        primaryCta={{ label: "Meet the Team", href: "/about" }}
        secondaryCta={{ label: "Visit Noir", href: "/visit" }}
      />

      <section className="animate-fade-in-up py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6">
            <FeaturesCards3D
              title="From warehouse roasts to a pour-over bar"
              subtitle="We roast in small batches and serve coffee the way we want to drink it: aromatic, sweet, and true to origin."
              features={[
                { icon: "Calendar", title: "2019", description: "First micro-roasts in a shared warehouse space; weekly cuppings with local baristas." },
                { icon: "Factory", title: "2022", description: "Upgraded to a production drum roaster; began publishing brew recipes and roast dates." },
                { icon: "Store", title: "2025", description: "Opened the café with a dedicated pour-over bar and industrial interior built for focus." },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ScrollReveal>
          <BentoGallery
            headline="The people behind the bar"
            subheadline="A small team with a shared obsession: clean cups and consistent service."
            images={[
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg", alt: "Mara Kline, head roaster, calibrating roast profiles" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg", alt: "Evan Park leading service at the espresso bar" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/1181405.jpg", alt: "Sofia Reyes preparing pour-over flight at brew bar" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577327/site-images/team-people/12899112.jpg", alt: "Team cupping session for weekly quality checks" },
            ]}
          />
        </ScrollReveal>
      </section>
    </main>
  );
}
