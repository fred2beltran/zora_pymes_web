// app/precios/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { PricingBlock } from './PricingBlock'
import { ComparisonTable } from './ComparisonTable'
import { PricingFAQ } from './PricingFAQ'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Planes de Zora Pymes: empieza gratis, sube a Pro por 19 €/mes o Business por 49 €/mes. Sin permanencia, sin tarjeta, cancela cuando quieras.',
  alternates: {
    canonical: `${SITE_URL}/precios`,
  },
  openGraph: {
    title: 'Precios · Zora Pymes',
    description:
      'Empieza gratis. Sube a Pro por 19 €/mes. Cancela cuando quieras.',
    url: `${SITE_URL}/precios`,
    type: 'website',
  },
}

export default function PreciosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero de precios */}
        <Section bg="default" className="pb-0 md:pb-0">
          <div className="mx-auto max-w-prose text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Precios
            </span>
            <h1 className="mt-4 text-3xl font-bold text-balance md:text-4xl">
              Precios claros. Sin sorpresas.
            </h1>
            <p className="mt-5 text-md text-muted text-pretty md:text-lg">
              Empieza gratis y sube de plan cuando tu negocio lo necesite.
              Sin permanencia. Sin tarjeta al registrarte. Cancela en 1 clic.
            </p>
          </div>
        </Section>

        {/* Planes con toggle */}
        <PricingBlock />

        {/* Tabla comparativa */}
        <ComparisonTable />

        {/* FAQ específico de precios */}
        <PricingFAQ />

        {/* CTA final */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}