// app/precios/PricingFAQ.tsx
'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/cn'

const faqs = [
  {
    q: '¿Cómo funciona la prueba de 14 días del plan Pro?',
    a: 'Al registrarte entras directamente al plan Pro durante 14 días. No te pedimos tarjeta. Al terminar, decides si sigues en Pro o bajas al plan Starter gratuito. Nunca te cobramos sin avisarte.',
  },
  {
    q: '¿Puedo cambiar de plan cuando quiera?',
    a: 'Sí. Puedes subir o bajar de plan desde tu panel en cualquier momento. Si subes, se prorratea la diferencia. Si bajas, el cambio se aplica al siguiente ciclo.',
  },
  {
    q: '¿Qué pasa si cancelo a mitad de mes?',
    a: 'Te quedas con el plan activo hasta el final del periodo ya pagado. Después, tu cuenta pasa automáticamente al plan Starter gratuito. No hay penalizaciones ni cargos ocultos.',
  },
  {
    q: '¿El precio incluye IVA?',
    a: 'Los precios mostrados no incluyen IVA. El IVA se calcula según tu país en el momento del pago y se añade al total. Si eres empresa intracomunitaria, el IVA no se aplica.',
  },
  {
    q: '¿Cómo funciona el descuento anual del 20%?',
    a: 'Si eliges el pago anual, pagas 182 €/año en lugar de 228 €/año (19 € × 12). Equivale a 15,17 €/mes. Ahorras un 20% por adelantar el pago.',
  },
  {
    q: '¿Hay descuentos para startups o ONGs?',
    a: 'Sí. Tenemos descuentos especiales para startups en fase temprana, ONGs y proyectos sociales. Escríbenos a hola@zorapymes.com con el asunto "Descuento" y lo estudiamos.',
  },
  {
    q: '¿Puedo pagar con transferencia o SEPA?',
    a: 'Sí, en el plan Business. Para Starter y Pro usamos tarjeta (Visa, Mastercard, Amex) y Stripe como procesador. Business permite transferencia SEPA y factura anual.',
  },
  {
    q: '¿Cómo cancelo mi suscripción?',
    a: 'Desde tu panel: Ajustes → Suscripción → Cancelar plan. Se tarda 30 segundos. No hay llamadas, no hay formularios, no hay retención.',
  },
]

export function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section bg="default" id="faq-precios">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Dudas de precios
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Lo que todos preguntan sobre los planes.
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