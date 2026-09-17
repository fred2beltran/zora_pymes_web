// components/sections/SocialProof.tsx
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const logos = ['Nube', 'Trazo', 'Kuma', 'Faro', 'Órbita', 'Brote']

const testimonials = [
  {
    quote:
      'Antes perdía 4 horas al mes con la contabilidad. Ahora son 10 minutos. Y por fin sé cuánto gano de verdad.',
    name: 'María G.',
    role: 'Fundadora · Tienda online de cerámica',
    initials: 'MG',
  },
  {
    quote:
      'El Copiloto IA es como tener un contador en el bolsillo. Le pregunto cualquier cosa y me responde claro.',
    name: 'Carlos R.',
    role: 'Autónomo · Diseño gráfico',
    initials: 'CR',
  },
  {
    quote:
      'Probé 3 herramientas antes. Zora es la única que no me hizo sentir tonto con la contabilidad.',
    name: 'Lucía M.',
    role: 'Cofundadora · SaaS B2B',
    initials: 'LM',
  },
]

const metrics = [
  { value: '12.000+', label: 'pymes activas' },
  { value: '4.9/5',   label: 'valoración media' },
  { value: '30 min',  label: 'ahorro medio al mes' },
  { value: '98%',     label: 'renovación anual' },
]

export function SocialProof() {
  return (
    <Section bg="default">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Ya confían en Zora
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Más de 12.000 pymes y emprendedores ya lo usan.
        </h2>
      </div>

      {/* Logos */}
      <div className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-6">
        {logos.map((name) => (
          <div
            key={name}
            className="flex h-10 items-center justify-center rounded-md border border-line/60 text-sm font-semibold tracking-wide text-muted opacity-60 transition-opacity hover:opacity-100"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Testimonios */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} hoverable>
            <div className="text-primary" aria-label="5 estrellas">
              ★★★★★
            </div>
            <p className="mt-4 text-sm text-fg text-pretty">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                {t.initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{t.name}</p>
                <p className="text-xs text-muted truncate">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Métricas */}
      <div className="mt-14 grid grid-cols-2 gap-6 rounded-lg border border-line bg-surface p-8 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-2xl font-bold text-primary md:text-3xl">
              {m.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}