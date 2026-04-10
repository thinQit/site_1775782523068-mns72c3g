"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  imageSrc?: string
}

export default function CTASection({
  title = 'Reserve Your Pour-Over Experience',
  description = 'Book a seat at our brew bar and taste guided flights from our latest single-origin releases.',
  buttonLabel = 'Book Now',
  buttonHref = '/visit',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/11123392.jpg',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-[#722F37] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h3 className="font-['Playfair_Display'] text-4xl text-[#FEFAE0]">{title}</h3>
          <p className="mt-4 font-['Lato'] text-[#FEFAE0]/85">{description}</p>
          <Button asChild className="mt-6 rounded-lg bg-[#DDA15E] text-[#1b1b1b] hover:bg-[#c58a48]">
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
        <Image src={imageSrc} alt="Coffee service" width={1400} height={900} unoptimized className="h-80 w-full rounded-xl object-cover" />
      </div>
    </section>
  )
}
