// app/copiloto-ia/CopilotFAQ.tsx
'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/cn'

const faqs = [
  {
    q: '¿Qué modelo de IA usa el Copiloto?',
    a: 'Usamos una combinación de modelos de última generación (GPT-4 y modelos especializados en finanzas) ajustados específicamente para contabilidad de pymes en España y Latinoamérica.',
  },
  {
    q: '¿Puede cometer errores?',
    a: 'Como toda IA, puede equivocarse. Por eso siempre mostramos de dónde viene cada dato ("según tu factura #1234 del 15/03"). Y para decisiones fiscales importantes, recomendamos validar con tu asesor humano del plan Business.',
  },
  {
    q: '¿Reemplaza a un contador?',
    a: 'No. El Copiloto cubre el 90% de dudas del día a día, pero un contador humano sigue siendo necesario para temas complejos (auditorías, reestructuraciones, optimización fiscal avanzada). Zora te ahorra las llamadas por dudas básicas.',
  },
  {
    q: '¿Cuánto tarda en responder?',
    a: 'Entre 1 y 3 segundos. Los datos se consultan en tiempo real, no hay esperas de horas ni días como con un contador tradicional.',
  },
  {
    q: '¿Funciona en varios idiomas?',
    a: 'Sí. Habla español (España y Latinoamérica), inglés, portugués y catalán. Próximamente francés e italiano.',
  },
  {
    q: '¿Puedo hacerle preguntas muy específicas?',
    a: 'Sí. Cuanto más específica la pregunta, mejor. Por ejemplo: "¿Cuánto he facturado a este cliente en los últimos 6 meses?" o "¿Cuál es mi gasto medio mensual en software?"',
  },
  {
    q: '¿Qué pasa si el Copiloto no sabe algo?',
    a: 'Te lo dice claramente y te ofrece dos alternativas: escalar a un asesor humano (plan Business) o enviarte un artículo de la base de conocimiento si existe.',
  },
  {
    q: '¿Está incluido en todos los planes?',
    a: 'Está incluido en el plan Pro y Business. En el plan Starter gratuito no está disponible, pero puedes probarlo 14 días gratis al registrarte.',
  },
]

export function CopilotFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section bg="default" id="faq-copiloto">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-ai">
          Dudas sobre el Copiloto
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Todo lo que quieres saber.
        </h2>
      </div>

      <ul className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <li key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-ai"
              >
                <span className="text-md font-semibold">{f.q}</span>
                <span
                  aria-hidden
                  className={cn(
                    'shrink-0 text-lg text-ai transition-transform duration-200',
                    isOpen && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  'grid overflow-hidden transition-[grid-template-rows] duration-300',
                  isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                )}
              >
                <div className="min-h-0">
                  <p className="pr-8 text-sm text-muted text-pretty">{f.a}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-10 text-center text-sm text-muted">
        ¿Otra duda?{' '}
        <a
          href="/contacto"
          className="font-medium text-ai underline-offset-4 hover:underline"
        >
          Habla con nosotros →
        </a>
      </p>
    </Section>
  )
}