'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
}

export default function MenuItemCard({
  name = 'House Coffee',
  description = 'Balanced and sweet with notes of cacao.',
  price = '$4.00',
}: Partial<MenuItemCardProps>) {
  return (
    <Card className={cn('rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md')}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-['Playfair_Display'] text-xl text-[#1b1b1b]">{name}</h3>
        <span className="font-['Lato'] text-sm font-bold text-[#722F37]">{price}</span>
      </div>
      <p className="mt-2 font-['Lato'] text-sm text-[#1b1b1b]/75">{description}</p>
    </Card>
  )
}
