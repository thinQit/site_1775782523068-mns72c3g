'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

interface TestimonialCarouselProps {
  testimonials?: { quote: string; name: string; role: string }[]
}

export default function TestimonialCarousel({
  testimonials = [
    { quote: 'Best single-origin selection in the city. Every cup is dialed perfectly.', name: 'Ari M.', role: 'Coffee Enthusiast' },
    { quote: 'Industrial vibe, warm service, and the espresso is unreal.', name: 'Lena R.', role: 'Local Designer' },
    { quote: 'Their pour-over flight taught me more in 20 minutes than years of brewing at home.', name: 'Marco T.', role: 'Home Brewer' },
  ],
}: Partial<TestimonialCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [testimonials.length])

  return (
    <section className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Card className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="font-['Playfair_Display'] text-2xl text-[#722F37]">“{testimonials[index]?.quote}”</p>
          <p className="mt-6 font-['Lato'] text-sm font-bold text-[#1b1b1b]">{testimonials[index]?.name}</p>
          <p className="font-['Lato'] text-xs text-[#1b1b1b]/70">{testimonials[index]?.role}</p>
        </Card>
      </div>
    </section>
  )
}
