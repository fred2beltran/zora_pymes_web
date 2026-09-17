// components/sections/Benefits.tsx
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const benefits = [
  {
    emoji: '🎯',
    title: 'Contabilidad sin saber contabilidad',
    desc: 'Traducimos todo a lenguaje humano. Tú ves claridad, nosotros hacemos el trabajo.',
  },
  {
    emoji: '🤖',
    title: 'Copiloto IA que te guía',
    desc: 'Pregúntale lo que sea: "¿cuánto gasté este mes?" o "¿qué impuestos pago?". Te responde en segundos.',
    ia: true,
  },
  {
    emoji: '⚡',
    title: 'Facturas en 30 segundos',
    desc: 'Escanea, sube o conecta. Zora las clasifica sola. Y avisa si algo no cuadra.',
  },
  {
    emoji: '📅',
    title: 'Nunca más una multa por plazo',
    desc: 'Te avisamos antes de cada fecha límite. Con recordatorios inteligentes.',
  },
  {
    emoji: '📊',
    title: 'Reportes que sí entiendes',
    desc: 'Sin PDFs de 40 páginas. Gráficos claros: cuánto ganas, cuánto gastas, cuánto te queda.',
  },
  {
    emoji: '🔒',
    title: 'Tus datos, seguros',
    desc: 'Cifrado de extremo a extremo. Cumplimos RGPD. Tus números son tuyos.',
  },
]

export function Benefits() {
  return (
    <Section bg="surface">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Por qué Zora
        </span>

        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Todo lo que necesitas. Nada que te sobre.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <Card
            key={b.title}
            variant={b.ia ? 'ai' : 'default'}
            hoverable
          >
            <div className="text-3xl">{b.emoji}</div>
            <h3 className="mt-4 text-md font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{b.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button as="link" href="/producto" variant="secondary" size="lg">
          Ver Zora en acción →
        </Button>
      </div>
    </Section>
  )
}