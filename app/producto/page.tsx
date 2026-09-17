// app/producto/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Badge } from '@/components/ui/Badge'
import { DashboardMockup } from '@/components/visuals/DashboardMockup'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Features } from './Features'
import { Integrations } from './Integrations'
import { ProductHowItWorks } from './ProductHowItWorks'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Producto',
  description:
    'Zora Pymes reúne facturación, contabilidad, impuestos y reportes en una sola plataforma. Con Copiloto IA y conexión bancaria. Para pymes y emprendedores.',
  alternates: { canonical: `${SITE_URL}/producto` },
  openGraph: {
    title: 'Producto · Zora Pymes',
    description:
      'Todo lo que necesitas para llevar tu negocio, en un solo panel claro.',
    url: `${SITE_URL}/producto`,
    type: 'website',
  },
}

export default function ProductoPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero del producto */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(60% 50% at 80% 0%, rgba(67,197,158,0.18) 0%, transparent 60%)',
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />

          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:px-8">
            <div className="animate-fade-in-up">
              <Badge variant="primary">Producto</Badge>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Todo tu negocio.{' '}
                <span className="text-primary">En un solo panel.</span>
              </h1>

              <p className="mt-5 max-w-prose text-lg text-muted text-pretty">
                Zora reúne facturación, contabilidad, impuestos, reportes y
                un Copiloto IA en la misma plataforma. Sin hojas de cálculo,
                sin saltar entre 5 apps.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/registro"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-primary px-8 text-lg font-semibold text-[#101716] transition-colors hover:bg-primary-hover"
                >
                  Empieza gratis
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-line px-8 text-lg text-fg transition-colors hover:border-primary hover:text-primary"
                >
                  Ver cómo funciona
                </a>
              </div>

              <p className="mt-5 text-sm text-muted">
                Sin tarjeta · Configúralo en 5 minutos
              </p>
            </div>

            <div
              className="animate-fade-in-up md:pl-4"
              style={{ animationDelay: '120ms' }}
            >
              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* Features */}
        <Features />

        {/* Cómo funciona end-to-end */}
        <ProductHowItWorks />

        {/* Integraciones */}
        <Integrations />

        {/* CTA final */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}