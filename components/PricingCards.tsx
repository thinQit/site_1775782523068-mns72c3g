"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PricingCardsProps {
  plans?: { name: string; price: string; features: string[]; highlighted?: boolean }[]
}

export default function PricingCards({
  plans = [
    { name: 'Starter', price: '$22 / bag', features: ['250g single-origin', 'Tasting notes card'] },
    { name: 'Roaster’s Pick', price: '$38 / month', features: ['2x 250g rotating origins', 'Brew guide', 'Early access'], highlighted: true },
    { name: 'Collector', price: '$62 / month', features: ['3x 250g microlots', 'Cupping invite', 'Priority reserve'] },
  ],
}: Partial<PricingCardsProps>) {
  return (
    <section className="bg-[#1b1b1b] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.highlighted ? 'rounded-xl border-[#DDA15E] bg-[#722F37] p-6 text-[#FEFAE0]' : 'rounded-xl border-border bg-card p-6'}>
            <h3 className="font-['Playfair_Display'] text-2xl">{plan.name}</h3>
            <p className="mt-2 font-['Lato'] text-lg font-bold">{plan.price}</p>
            <ul className="mt-4 space-y-2 font-['Lato'] text-sm">
              {plan.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Button className="mt-6 rounded-lg bg-[#DDA15E] text-[#1b1b1b] hover:bg-[#c58a48]">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
