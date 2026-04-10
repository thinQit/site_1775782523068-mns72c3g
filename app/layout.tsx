import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Noir Coffee Roasters | Single-Origin Espresso & Pour-Over Bar",
  description:
    "Noir Coffee Roasters is a specialty coffee roastery and café serving single-origin espresso, a dedicated pour-over bar, and fresh pastries in Portland’s Warehouse District.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Beans", href: "/beans" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Visit", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Explore",
      links: [
        { label: "Menu", href: "/menu" },
        { label: "Beans", href: "/beans" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Visit", href: "/visit" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "(503) 555-0198", href: "tel:+15035550198" },
        { label: "hello@noircoffeeroasters.com", href: "mailto:hello@noircoffeeroasters.com" },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Noir Coffee Roasters"
          navItems={navItems}
          ctaLabel="Plan Your Visit"
          ctaHref="/visit"
        />
        {children}
        <Footer
          brand="Noir Coffee Roasters"
          description="Single-origin coffee, roasted in-house—served with precision."
          columns={footerColumns}
          copyright="© 2026 Noir Coffee Roasters. Roasted weekly. Served daily."
        />
      </body>
    </html>
  );
}
