// app/producto/Features.tsx
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const features = [
  {
    emoji: '🧾',
    title: 'Facturación',
    desc: 'Crea, envía y cobra facturas desde Zora. Numeración automática, plantillas y recordatorios de pago.',
  },
  {
    emoji: '📚',
    title: 'Contabilidad',
    desc: 'Cada gasto clasificado, cada factura registrada. Sin asientos contables ni lenguaje raro.',
  },
  {
    emoji: '📊',
    title: 'Impuestos',
    desc: 'Cálculo automático de IVA, IRPF y retenciones. Te avisamos antes de cada plazo.',
  },
  {
    emoji: '🤖',
    title: 'Copiloto IA',
    desc: 'Pregúntale lo que sea, en lenguaje humano. Te responde con tus números reales.',
    ia: true,
  },
  {
    emoji: '📈',
    title: 'Reportes',
    desc: 'Cuánto ganas, cuánto gastas y cuánto te queda. En gráficos que sí entiendes.',
  },
  {
    emoji: '🔗',
    title: 'Conexión bancaria',
    desc: 'Conecta tu banco y Zora importa y clasifica los movimientos por ti.',
  },
]

export function Features() {
  return (
    <Section bg="surface" id="features">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Qué hace Zora
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Un producto. Todo lo que necesitas.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Sin módulos raros, sin add-ons escondidos. Todo incluido desde el primer día.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card
            key={f.title}
            variant={f.ia ? 'ai' : 'default'}
            hoverable
          >
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-4 text-md font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{f.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}