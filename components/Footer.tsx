"use client";

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface FooterProps {
  brandName?: string
}

export default function Footer({ brandName = 'Noir Coffee Roasters' }: Partial<FooterProps>) {
  return (
    <footer className="bg-[#1b1b1b] text-[#FEFAE0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#DDA15E]">{brandName}</h3>
          <p className="mt-3 font-['Lato'] text-sm text-[#FEFAE0]/80">Single-origin beans, precision espresso, and a slow bar experience in a dark industrial space.</p>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg">Navigate</h4>
          <ul className="mt-3 space-y-2 font-['Lato'] text-sm text-[#FEFAE0]/85">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/beans">Beans</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/visit">Visit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg">Contact</h4>
          <ul className="mt-3 space-y-3 font-['Lato'] text-sm text-[#FEFAE0]/85">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#DDA15E]" /> 214 Foundry Lane, Portland, OR</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#DDA15E]" /> (503) 555-0198</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#DDA15E]" /> hello@noirroasters.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg">Hours</h4>
          <ul className="mt-3 space-y-2 font-['Lato'] text-sm text-[#FEFAE0]/85">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#DDA15E]" /> Mon–Fri: 7am–6pm</li>
            <li>Sat: 8am–7pm</li>
            <li>Sun: 8am–4pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#DDA15E]/20 py-4 text-center font-['Lato'] text-xs text-[#FEFAE0]/70">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  )
}
