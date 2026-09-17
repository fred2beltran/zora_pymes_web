// components/sections/Problem.tsx
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const pains = [
  {
    emoji: '🧾',
    title: 'Facturas por todos lados',
    desc: 'En el correo, en el WhatsApp, en una carpeta. Cuando llega Hacienda, no encuentras nada.',
  },
  {
    emoji: '📊',
    title: 'No entiendes los números',
    desc: '"¿Cuánto gané este mes?" Si la respuesta es "no estoy seguro", esto es para ti.',
  },
  {
    emoji: '⏰',
    title: 'Se te pasan los plazos',
    desc: 'IVA, IRPF, retenciones... Y siempre te enteras tarde. Con multa.',
  },
]

export function Problem() {
  return (
    <Section bg="surface">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-error">
          El problema
        </span>

        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Llevar la contabilidad no debería ser un dolor de cabeza.
        </h2>

        <p className="mt-4 text-md text-muted text-pretty">
          Si tienes una pyme o un emprendimiento, seguro te suena esto:
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pains.map((p) => (
          <Card key={p.title} hoverable>
            <div className="text-3xl">{p.emoji}</div>
            <h3 className="mt-4 text-md font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{p.desc}</p>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-prose text-center text-md text-fg text-pretty">
        Esto no es culpa tuya. Nadie te enseñó contabilidad.
        <br className="hidden md:block" /> Y no deberías tener que aprenderla.
      </p>
    </Section>
  )
}