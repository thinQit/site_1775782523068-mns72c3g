"use client";

interface PricingComparisonTableProps {
  rows?: { bean: string; process: string; priceRange: string; notes: string }[]
}

export default function PricingComparisonTable({
  rows = [
    { bean: 'Ethiopia Guji', process: 'Washed', priceRange: '$22–$28 / 250g', notes: 'Floral and tea-like, high clarity.' },
    { bean: 'Colombia Huila', process: 'Honey', priceRange: '$18–$24 / 250g', notes: 'Balanced sweetness, caramel body.' },
    { bean: 'Kenya Nyeri', process: 'Washed', priceRange: '$24–$32 / 250g', notes: 'Bright acidity, currant finish.' },
  ],
}: Partial<PricingComparisonTableProps>) {
  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[680px] text-left">
            <thead className="bg-[#722F37] text-[#FEFAE0]">
              <tr>
                <th className="px-4 py-3 font-['Lato'] text-sm">Bean</th>
                <th className="px-4 py-3 font-['Lato'] text-sm">Process</th>
                <th className="px-4 py-3 font-['Lato'] text-sm">Price Range</th>
                <th className="px-4 py-3 font-['Lato'] text-sm">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.bean} className="border-t border-border bg-white">
                  <td className="px-4 py-3 font-['Playfair_Display']">{row.bean}</td>
                  <td className="px-4 py-3 font-['Lato']">{row.process}</td>
                  <td className="px-4 py-3 font-['Lato'] font-bold text-[#722F37]">{row.priceRange}</td>
                  <td className="px-4 py-3 font-['Lato'] text-sm text-[#1b1b1b]/75">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-['Lato'] text-xs text-[#1b1b1b]/60">Prices vary by harvest lot, import costs, and roast profile complexity.</p>
      </div>
    </section>
  )
}
