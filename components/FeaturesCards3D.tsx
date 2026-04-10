"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { UtensilsCrossed, Wine, Coffee, Salad, Soup, Fish, Beef, CakeSlice, Flame, Calendar, Timer, Package, GraduationCap } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Flame, Calendar, Timer, Package, GraduationCap, 
  UtensilsCrossed,
  Wine,
  Coffee,
  Salad,
  Soup,
  Fish,
  Beef,
  CakeSlice,
};

export default function FeaturesCards3D({
  badge = "Menu Highlights",
  headline = "Signature Plates & Pairings",
  subheadline = "Discover the dishes our guests return for—crafted daily with seasonal produce and thoughtful wine selections.",
  features = [
    {
      icon: "Beef",
      title: "Burgundy Braised Short Rib",
      description: "Slow-braised for 12 hours with root vegetables and a velvety reduction.",
    },
    {
      icon: "Fish",
      title: "Citrus Herb Sea Bass",
      description: "Pan-seared sea bass with olive oil potatoes and charred lemon beurre blanc.",
    },
    {
      icon: "Wine",
      title: "Sommelier Pairing Flight",
      description: "A curated progression of old-world and new-world pours by course.",
    },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-3xl text-center">
          {badge ? (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {badge}
            </span>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">{headline}</h2>
          {subheadline ? <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p> : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || UtensilsCrossed;
            return (
              <CardContainer key={`${feature.title}-${index}`} className="inter-var">
                <CardBody className="card-hover relative h-auto w-full rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
                  <CardItem translateZ={50} className="mb-4 inline-flex rounded-lg border border-border bg-background p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </CardItem>
                  <CardItem translateZ={60} className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ={40} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
