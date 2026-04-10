"use client";

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow = 'Noir Coffee Roasters',
  title = 'Crafted for the Curious Palate',
  subtitle = 'Seasonal menus, intentional brewing, and beans sourced with transparency.',
  align = 'center',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="font-['Lato'] text-xs uppercase tracking-[0.2em] text-[#722F37]">{eyebrow}</p>
      <h2 className="mt-2 font-['Playfair_Display'] text-4xl text-[#1b1b1b] md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl font-['Lato'] text-base text-[#1b1b1b]/75">{subtitle}</p>
    </div>
  )
}
