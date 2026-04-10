'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface BentoGalleryProps {
  images?: { src: string; caption: string }[]
}

export default function BentoGallery({
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10148453.jpg', caption: 'Pour-over station' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10135116.jpg', caption: 'Roastery interior' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577087/site-images/restaurant/11236793.jpg', caption: 'Latte art' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577056/site-images/restaurant/110813.jpg', caption: 'Espresso bar' },
  ],
}: Partial<BentoGalleryProps>) {
  const [active, setActive] = useState<string>('')

  return (
    <section className="py-20 md:py-28 bg-[#1b1b1b]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-3 md:px-6">
        {images.map((img, i) => (
          <button key={img.src + i} onClick={() => setActive(img.src)} className="group relative overflow-hidden rounded-xl">
            <Image src={img.src} alt={img.caption} width={1200} height={800} unoptimized className="h-64 w-full object-cover md:h-72" />
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/45" />
            <p className="absolute bottom-3 left-3 font-['Lato'] text-sm text-[#FEFAE0] opacity-0 transition group-hover:opacity-100">{img.caption}</p>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setActive('')} className="absolute right-4 top-4 text-white"><X /></button>
          <Image src={active} alt="Gallery image" width={1600} height={1000} unoptimized className="max-h-[90vh] w-auto rounded-lg object-contain" />
        </div>
      )}
    </section>
  )
}
