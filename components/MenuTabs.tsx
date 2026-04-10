'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import MenuItemCard from '@/components/MenuItemCard'

interface MenuTabsProps {
  categories?: { name: string; items: { name: string; description: string; price: string }[] }[]
}

export default function MenuTabs({
  categories = [
    { name: 'Espresso', items: [{ name: 'Noir Espresso', description: 'Chocolate, fig, dense crema', price: '$4.00' }] },
    { name: 'Pour Over', items: [{ name: 'Ethiopia Guji', description: 'Jasmine, bergamot, peach', price: '$6.50' }] },
    { name: 'Signature', items: [{ name: 'Smoked Vanilla Latte', description: 'House vanilla, oak-smoked salt', price: '$6.75' }] },
  ],
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0]?.name || '')
  const current = categories.find((c) => c.name === active) || categories[0]

  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap gap-3 border-b border-[#722F37]/20 pb-3">
          {categories.map((cat) => (
            <button key={cat.name} onClick={() => setActive(cat.name)} className={cn('relative px-4 py-2 font-[' + "'Lato'" + '] text-sm', active === cat.name ? 'text-[#722F37]' : 'text-[#1b1b1b]/70')}>
              {cat.name}
              {active === cat.name && <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-[#DDA15E]" />}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {current?.items.map((item) => <MenuItemCard key={item.name} {...item} />)}
        </div>
      </div>
    </section>
  )
}
