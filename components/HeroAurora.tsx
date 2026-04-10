"use client";

import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroAurora({
  badge = "Chef's Seasonal Tasting",
  headline = "A Warm Table, Crafted Flavors, Unforgettable Evenings",
  subheadline = "Experience refined comfort cuisine inspired by local ingredients, slow cooking traditions, and modern presentation in an intimate setting.",
  primaryCta = { label: "Reserve a Table", href: "#reservation" },
  secondaryCta = { label: "View Menu", href: "#menu" },
}: Partial<HeroAuroraProps>) {
  return (
    <AuroraBackground
      className="bg-background text-foreground"
      auroraColors={["#f59e0b", "#ef4444", "#f97316", "#fde68a", "#fbbf24"]}
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-24 md:py-36 animate-fade-in-up"
      >
        {badge ? (
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
            {badge}
          </span>
        ) : null}

        <TextGenerateEffect
          words={headline}
          className="max-w-5xl text-center font-bold text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <p className="mt-1 max-w-2xl text-center text-base text-muted-foreground md:text-xl">
          {subheadline}
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-lg px-8 py-6 text-base md:text-lg transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href={primaryCta?.href || "#"}>{primaryCta?.label || "Reserve a Table"}</a>
          </Button>
          {secondaryCta?.label ? (
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg border-primary px-8 py-6 text-base text-foreground md:text-lg transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta?.href || "#"}>{secondaryCta?.label}</a>
            </Button>
          ) : null}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
