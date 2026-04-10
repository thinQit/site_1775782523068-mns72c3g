'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = 'mailto:hello@noirroasters.com?subject=' + encodeURIComponent('Cafe Inquiry from ' + name) + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + email)

  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h3 className="font-['Playfair_Display'] text-3xl text-[#1b1b1b]">Contact Noir</h3>
        <div className="mt-6 space-y-4">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="min-h-36 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          <Button asChild className="rounded-lg bg-[#DDA15E] text-[#1b1b1b] hover:bg-[#c58a48]">
            <a href={mailto}>Send via Email</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
