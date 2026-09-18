// components/sections/Pricing.tsx
'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { events } from '@/lib/analytics'
import { cn } from '@/lib/cn'

type Cycle = 'monthly' | 'yearly'

const plans = [
  {
    name: 'Starter',
    tagline: 'Para empezar a ordenarte',
    monthly: 0,
    yearly: 0,
    cta: 'Empezar gratis',
    variant: 'secondary' as const,
    features: [
      '1 usuario',
      'Hasta 20 facturas/mes',
      'Reportes básicos',
      'Soporte por email',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Para pymes que quieren olvidarse de la contabilidad',
    monthly: 19,
    yearly: 182,
    cta: 'Probar 14 días gratis',
    variant: 'primary' as const,
    featured: true,
    features: [
      'Hasta 5 usuarios',
      'Facturas ilimitadas',
      'Copiloto IA incluido',
      'Reportes avanzados',
      'Recordatorios de plazos',
      'Soporte prioritario',
    ],
  },
  {
    name: 'Business',
    tagline: 'Para negocios en crecimiento',
    monthly: 49,
    yearly: 470,
    cta: 'Hablar con ventas',
    variant: 'secondary' as const,
    features: [
      'Usuarios ilimitados',
      'Todo lo de Pro',
      'Multi-empresa',
      'API e integraciones',
      'Asesor contable humano',
      'Soporte 24/7',
    ],
  },
]

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('monthly')

  const handleCycle = (c: Cycle) => {
    setCycle(c)
    events.cycleToggle(c)
  }

  return (
    <Section bg="surface" id="precios">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Precios
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Elige tu plan. Cancela cuando quieras.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Sin permanencia. Sin letra chica. Sin sorpresas.
        </p>
      </div>

      {/* Toggle */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-line bg-bg p-1">
          <button
            onClick={() => handleCycle('monthly')}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              cycle === 'monthly'
                ? 'bg-primary text-[#101716]'
                : 'text-muted hover:text-fg'
            )}
          >
            Mensual
          </button>
          <button
            onClick={() => handleCycle('yearly')}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              cycle === 'yearly'
                ? 'bg-primary text-[#101716]'
                : 'text-muted hover:text-fg'
            )}
          >
            Anual
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-semibold',
                cycle === 'yearly'
                  ? 'bg-[#101716]/15 text-[#101716]'
                  : 'bg-success/15 text-success'
              )}
            >
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Grid de planes */}
      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const price = cycle === 'monthly' ? p.monthly : p.yearly
          const suffix =
            p.monthly === 0 ? '' : cycle === 'monthly' ? '/mes' : '/año'
          const periodLabel =
            p.monthly === 0
              ? 'para siempre'
              : cycle === 'monthly'
              ? 'facturado mensualmente'
              : 'facturado anualmente'

          return (
            <Card
              key={p.name}
              variant={p.featured ? 'featured' : 'default'}
              className={cn(
                'relative flex h-full flex-col',
                p.featured && 'md:-translate-y-2 md:scale-[1.02]'
              )}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="new">Recomendado</Badge>
                </div>
              )}

              <div className={cn(p.featured && 'pt-3')}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted text-pretty">
                  {p.tagline}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-3xl font-bold">
                    {price === 0 ? 'Gratis' : `$${price}`}
                  </span>
                  {suffix && (
                    <span className="pb-1 text-sm text-muted">{suffix}</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted">{periodLabel}</p>
              </div>

              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className={cn(
                        'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold',
                        f === 'Copiloto IA incluido'
                          ? 'bg-ai/20 text-ai'
                          : 'bg-success/15 text-success'
                      )}
                    >
                      ✓
                    </span>
                    <span
                      className={cn(
                        f === 'Copiloto IA incluido' &&
                          'font-semibold text-ai'
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  as="link"
                  href="/registro"
                  variant={p.variant}
                  size="md"
                  className="w-full"
                  onClick={() => events.planSelect(p.name, cycle)}
                >
                  {p.cta}
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        ✅ 14 días gratis · ✅ Sin tarjeta · ✅ Cancela en 1 clic
      </p>

      <p className="mt-4 text-center text-xs text-muted">
        Precios sin IVA. El IVA (15%) se calcula en el momento del pago.
      </p>
    </Section>
  )
}