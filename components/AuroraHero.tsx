'use client'

import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import Link from 'next/link'

interface AuroraHeroProps {
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
}

export default function AuroraHero({
  title = 'Noir Coffee Roasters',
  subtitle = 'Single-origin beans, precision pour-over, and velvet crema espresso in a dark industrial cafe.',
  primaryCtaLabel = 'Explore Menu',
  primaryCtaHref = '/menu',
}: Partial<AuroraHeroProps>) {
  return (
    <AuroraBackground className="relative min-h-screen bg-[#FEFAE0]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#722F37]/20 via-[#FEFAE0]/70 to-[#FEFAE0]" />
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pt-20 text-center">
        <p className="mb-4 font-['Lato'] text-sm uppercase tracking-[0.25em] text-[#722F37]">Pour-over Bar • Espresso Lab • Roastery</p>
        <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#1b1b1b] md:text-7xl">{title}</h1>
        <div className="mt-6 max-w-2xl">
          <TextGenerateEffect words={subtitle} className="font-['Lato'] text-lg text-[#1b1b1b]/80" />
        </div>
        <Button asChild className="mt-10 rounded-lg bg-[#DDA15E] px-8 text-[#1b1b1b] hover:bg-[#c58a48]">
          <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
        </Button>
      </div>
    </AuroraBackground>
  )
}
