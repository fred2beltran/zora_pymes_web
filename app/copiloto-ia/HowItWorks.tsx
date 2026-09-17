// app/copiloto-ia/HowItWorks.tsx
import { Section } from '@/components/ui/Section'

const steps = [
  {
    num: '01',
    title: 'Entiende tu pregunta',
    desc: 'Escribes en lenguaje natural. El Copiloto interpreta qué necesitas sin formularios raros ni menús.',
  },
  {
    num: '02',
    title: 'Consulta tus datos',
    desc: 'Accede solo a tus datos (nunca a los de otros). Cruza facturas, gastos, impuestos y plazos.',
  },
  {
    num: '03',
    title: 'Responde en claro',
    desc: 'Te da la respuesta en lenguaje humano. Y si quieres, ejecuta la acción por ti (marcar gasto, avisar de plazo...).',
  },
]

export function HowItWorks() {
  return (
    <Section bg="default" id="como-funciona">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-ai">
          Cómo funciona
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Por dentro, es simple.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Sin magia. Solo IA entrenada específicamente para contabilidad de
          pymes.
        </p>
      </div>

      <div className="relative mt-16 grid gap-10 md:grid-cols-3">
        {/* Línea conectora */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-line md:block"
        />

        {steps.map((s) => (
          <div key={s.num} className="relative text-center md:text-left">
            <span className="text-5xl font-bold text-ai/20 md:text-6xl">
              {s.num}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}