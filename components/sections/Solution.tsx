// components/sections/Solution.tsx
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    num: '01',
    title: 'Conecta tu negocio',
    desc: 'Añade tus datos, banco o facturas. Zora lo ordena todo automáticamente.',
    tag: '2 minutos',
  },
  {
    num: '02',
    title: 'Deja que Zora trabaje',
    desc: 'Clasifica gastos, calcula impuestos, avisa de plazos. Y si tienes dudas, pregúntale al Copiloto IA.',
    tag: '0 minutos',
    ia: true,
  },
  {
    num: '03',
    title: 'Mira tus números claros',
    desc: 'Reportes simples, sin jerga. Sabes cuánto ganas, cuánto debes y cuánto te queda.',
    tag: '1 clic',
  },
]

export function Solution() {
  return (
    <Section bg="default" id="como-funciona">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          La solución
        </span>

        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Zora lo hace por ti. En 3 pasos.
        </h2>

        <p className="mt-4 text-md text-muted text-pretty">
          Sin instalar nada. Sin manuales. Sin llamar a un contador para lo básico.
        </p>
      </div>

      <div className="relative mt-16 grid gap-10 md:grid-cols-3">
        {/* Línea conectora (solo desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-line md:block"
        />

        {steps.map((s) => (
          <div key={s.num} className="relative text-center md:text-left">
            {/* Número */}
            <div className="relative inline-flex items-center gap-3 md:block">
              <span className="text-5xl font-bold text-primary/20 md:text-6xl">
                {s.num}
              </span>
              {s.ia && (
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-full bg-ai md:absolute md:right-0 md:top-2"
                />
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{s.desc}</p>

            <div className="mt-4 flex justify-center md:justify-start">
              <Badge variant="completed">⏱ {s.tag}</Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button as="link" href="/registro" size="lg">
          Probar Zora gratis
        </Button>
      </div>
    </Section>
  )
}