// components/sections/FAQ.tsx
'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { events } from '@/lib/analytics'
import { cn } from '@/lib/cn'

const faqs = [
  {
    q: '¿Necesito saber contabilidad para usar Zora?',
    a: 'No. Zora traduce todo a lenguaje humano. Y si tienes dudas, el Copiloto IA te responde paso a paso.',
  },
  {
    q: '¿Es seguro conectar mi banco?',
    a: 'Sí. Usamos cifrado bancario (AES-256) y cumplimos el RGPD. Zora solo lee, nunca mueve dinero.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. Sin permanencia. Cancelas en 1 clic desde tu panel. Y te llevas tus datos exportados.',
  },
  {
    q: '¿Sirve para mi tipo de negocio?',
    a: 'Zora funciona para autónomos, pymes, tiendas online, agencias, freelancers y SaaS. Si facturas, Zora te sirve.',
  },
  {
    q: '¿Qué pasa cuando termine la prueba gratis?',
    a: 'Nada. No pedimos tarjeta al registrarte. Si te gusta, eliges plan. Si no, tu cuenta queda en Starter gratis.',
  },
  {
    q: '¿Puedo hablar con un contador humano?',
    a: 'Sí, en el plan Business tienes asesor contable humano incluido. En otros planes, el Copiloto IA resuelve el 90% de dudas.',
  },
  {
    q: '¿Zora emite facturas por mí?',
    a: 'Sí. Puedes crear y enviar facturas directamente desde Zora. Con tu logo y datos fiscales.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  const handleToggle = (i: number, question: string) => {
    const next = open === i ? null : i
    setOpen(next)
    if (next !== null) {
      events.faqOpen(question, 'home')
    }
  }

  return (
    <Section bg="default" id="faq">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Dudas frecuentes
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Lo que todos preguntan antes de empezar.
        </h2>
      </div>

      <ul className="mx-auto mt-12 max-w-2xl divide-y divide-line border-y border-line">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <li key={f.q}>
              <button
                onClick={() => handleToggle(i, f.q)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
              >
                <span className="text-md font-semibold">{f.q}</span>
                <span
                  aria-hidden
                  className={cn(
                    'shrink-0 text-lg text-primary transition-transform duration-200',
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
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Habla con nosotros →
        </a>
      </p>
    </Section>
  )
}