// app/producto/ProductHowItWorks.tsx
import { Section } from '@/components/ui/Section'

const steps = [
  {
    num: '01',
    title: 'Crea tu cuenta',
    desc: 'En 2 minutos. Sin tarjeta. Solo email y contraseña.',
    tag: '2 min',
  },
  {
    num: '02',
    title: 'Conecta tu negocio',
    desc: 'Añade tus datos fiscales, conecta tu banco y sube las facturas que ya tienes.',
    tag: '3 min',
  },
  {
    num: '03',
    title: 'Deja que Zora ordene',
    desc: 'Clasifica gastos, calcula impuestos, avisa de plazos. Y te muestra todo en un panel claro.',
    tag: 'Automático',
  },
  {
    num: '04',
    title: 'Pregunta lo que quieras',
    desc: 'El Copiloto IA responde tus dudas en segundos. Sin esperar a un contador.',
    tag: 'En vivo',
    ia: true,
  },
]

export function ProductHowItWorks() {
  return (
    <Section bg="default" id="como-funciona">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Cómo funciona
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          De cero a contabilidad clara en 5 minutos.
        </h2>
      </div>

      <div className="relative mt-16 grid gap-10 md:grid-cols-4">
        {/* Línea conectora */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-line md:block"
        />

        {steps.map((s) => (
          <div key={s.num} className="relative text-center md:text-left">
            <div className="relative inline-flex items-center gap-3 md:block">
              <span
                className={
                  s.ia
                    ? 'text-5xl font-bold text-ai/20 md:text-6xl'
                    : 'text-5xl font-bold text-primary/20 md:text-6xl'
                }
              >
                {s.num}
              </span>
              {s.ia && (
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-full bg-ai md:absolute md:right-0 md:top-2"
                />
              )}
            </div>

            <h3 className="mt-4 text-md font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted text-pretty">{s.desc}</p>

            <div className="mt-3 flex justify-center md:justify-start">
              <span
                className={
                  s.ia
                    ? 'inline-flex items-center rounded-full bg-[#2A2340] px-3 py-1 text-xs font-medium text-[#E7E1FF] ring-1 ring-ai/40'
                    : 'inline-flex items-center rounded-full bg-[#1E3B33] px-3 py-1 text-xs font-medium text-[#82C985]'
                }
              >
                {s.ia ? '✨ ' : '⏱ '}{s.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}