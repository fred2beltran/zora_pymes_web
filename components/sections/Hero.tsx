// components/sections/Hero.tsx
'use client'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { DashboardMockup } from '@/components/visuals/DashboardMockup'
import { events } from '@/lib/analytics'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Gradiente radial de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(67,197,158,0.18) 0%, transparent 60%)',
        }}
      />
      {/* Grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:px-8">
        {/* Columna texto */}
        <div className="animate-fade-in-up">
          <Badge variant="new">✨ Nuevo · Copiloto IA incluido</Badge>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Tu contabilidad, clara.{' '}
            <span className="text-primary">Sin saber contabilidad.</span>
          </h1>

          <p className="mt-5 max-w-prose text-lg text-muted text-pretty">
            Zora lleva las facturas, impuestos y reportes de tu negocio por ti.
            Con un Copiloto IA que te guía paso a paso. Para pymes y
            emprendedores.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              as="link"
              href="/registro"
              size="lg"
              onClick={() => events.ctaClick('hero_primary')}
            >
              Empieza gratis
            </Button>
            <Button
              as="link"
              href="#como-funciona"
              variant="secondary"
              size="lg"
              onClick={() => events.ctaClick('hero_secondary')}
            >
              ▶ Ver cómo funciona
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted">
            Sin tarjeta · Configúralo en 5 minutos
          </p>
        </div>

        {/* Columna visual */}
        <div
          className="animate-fade-in-up md:pl-4"
          style={{ animationDelay: '120ms' }}
        >
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}