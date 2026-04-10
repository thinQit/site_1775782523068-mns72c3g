'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  brandName?: string
  links?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'Noir Coffee Roasters',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Beans', href: '/beans' },
    { label: 'About', href: '/about' },
    { label: 'Visit', href: '/visit' },
  ],
  ctaLabel = 'Reserve Pour-Over Bar',
  ctaHref = '/visit',
}: Partial<NavbarProps>) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', isScrolled ? 'bg-[#1b1b1b]/95 backdrop-blur border-b border-[#DDA15E]/20' : 'bg-transparent')}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-[#FEFAE0]">
          <Coffee className="h-5 w-5 text-[#DDA15E]" />
          <span className="font-['Playfair_Display'] text-lg font-bold tracking-wide">{brandName}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-['Lato'] text-sm text-[#FEFAE0] transition-colors hover:text-[#DDA15E]">
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg bg-[#DDA15E] px-5 text-[#1b1b1b] hover:bg-[#c58a48]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button className="md:hidden text-[#FEFAE0]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#DDA15E]/20 bg-[#1b1b1b] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-['Lato'] text-[#FEFAE0]" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg bg-[#DDA15E] text-[#1b1b1b] hover:bg-[#c58a48]">
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
