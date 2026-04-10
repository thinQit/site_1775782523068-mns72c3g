"use client";

import { MapPin, Clock, Wifi, Car, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LocationMapEmbedProps {
  mapSrc?: string
}

export default function LocationMapEmbed({
  mapSrc = 'https://www.google.com/maps?q=Portland%20OR&output=embed',
}: Partial<LocationMapEmbedProps>) {
  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <iframe src={mapSrc} className="h-[420px] w-full rounded-xl border border-border" loading="lazy" />
        <div>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#1b1b1b]">Visit Noir Coffee Roasters</h3>
          <ul className="mt-5 space-y-3 font-['Lato'] text-sm text-[#1b1b1b]/80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#DDA15E]" /> 214 Foundry Lane, Portland, OR</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#DDA15E]" /> Daily 7am–6pm</li>
            <li className="flex items-center gap-2"><Wifi className="h-4 w-4 text-[#DDA15E]" /> Free Wi-Fi</li>
            <li className="flex items-center gap-2"><Car className="h-4 w-4 text-[#DDA15E]" /> Street parking nearby</li>
          </ul>
          <Button className="mt-6 rounded-lg bg-[#DDA15E] text-[#1b1b1b] hover:bg-[#c58a48]">
            <Navigation className="mr-2 h-4 w-4" /> Get Directions
          </Button>
        </div>
      </div>
    </section>
  )
}
