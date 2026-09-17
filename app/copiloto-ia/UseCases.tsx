// app/copiloto-ia/UseCases.tsx
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const cases = [
  {
    emoji: '💸',
    title: 'Impuestos',
    question: '"¿Cuánto pagué de IVA este trimestre?"',
    answer: 'Te da el total, el desglose y cuándo vence el próximo pago.',
  },
  {
    emoji: '📅',
    title: 'Plazos',
    question: '"¿Qué vence este mes?"',
    answer: 'Te avisa de todo lo que tienes que presentar y cuándo.',
  },
  {
    emoji: '🧾',
    title: 'Facturas',
    question: '"¿Qué facturas tengo pendientes?"',
    answer: 'Te lista las que están sin cobrar y las que están por emitir.',
  },
  {
    emoji: '📊',
    title: 'Beneficio real',
    question: '"¿Cuánto gané este mes?"',
    answer: 'Te da el beneficio real después de gastos e impuestos.',
  },
  {
    emoji: '🔍',
    title: 'Deducciones',
    question: '"¿Qué gastos puedo deducir?"',
    answer: 'Detecta deducciones que se te están pasando por alto.',
  },
  {
    emoji: '💡',
    title: 'Consejos',
    question: '"¿Cómo puedo pagar menos impuestos?"',
    answer: 'Sugerencias legales basadas en tus números reales.',
  },
]

export function UseCases() {
  return (
    <Section bg="surface" id="casos-de-uso">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-ai">
          Casos de uso
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Pregúntale lo que necesites. Cuando lo necesites.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          No tienes que esperar a un contador ni buscar en manuales. El
          Copiloto está disponible 24/7.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Card
            key={c.title}
            variant="ai"
            hoverable
            className="flex flex-col"
          >
            <div className="text-3xl">{c.emoji}</div>
            <h3 className="mt-4 text-md font-semibold">{c.title}</h3>
            <p className="mt-3 text-sm italic text-ai">
              {c.question}
            </p>
            <p className="mt-2 text-sm text-muted text-pretty">
              {c.answer}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}