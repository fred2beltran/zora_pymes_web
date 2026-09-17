// app/copiloto-ia/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { CopilotChatDemo } from './CopilotChatDemo'
import { UseCases } from './UseCases'
import { HowItWorks } from './HowItWorks'
import { PrivacyBlock } from './PrivacyBlock'
import { CopilotFAQ } from './CopilotFAQ'
import { AICTA } from './AICTA'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Copiloto IA',
  description:
    'Pregúntale lo que sea a tu Copiloto IA. Cuánto pagaste de IVA, cuándo vence el próximo plazo, cuánto ganaste este mes. Respuestas claras, sin jerga contable.',
  alternates: {
    canonical: `${SITE_URL}/copiloto-ia`,
  },
  openGraph: {
    title: 'Copiloto IA · Zora Pymes',
    description:
      'Tu contador personal con IA. Pregúntale lo que sea, en lenguaje humano.',
    url: `${SITE_URL}/copiloto-ia`,
    type: 'website',
  },
}

export default function CopilotoPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero IA */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Gradiente radial violeta */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(60% 50% at 20% 0%, rgba(168,139,232,0.20) 0%, transparent 60%)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30"
          />

          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.05fr] md:items-center md:px-8">
            {/* Columna texto */}
            <div className="animate-fade-in-up">
              <Badge variant="ai">✨ Copiloto IA</Badge>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Pregúntale lo que sea.{' '}
                <span className="text-ai">Te responde en claro.</span>
              </h1>

              <p className="mt-5 max-w-prose text-lg text-muted text-pretty">
                Tu Copiloto IA conoce tus números y te responde en lenguaje
                humano. Sin jerga contable. Sin esperar a un contador. En
                segundos.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Cuánto pagaste de IVA este trimestre',
                  'Cuándo vence el próximo plazo',
                  'Cuánto ganaste este mes de verdad',
                  'Qué gasto puedes deducirte',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ai/20 text-[10px] font-bold text-ai"
                    >
                      ✓
                    </span>
                    <span className="text-muted">“{q}”</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/registro"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-grad-ai px-8 text-lg font-semibold text-[#101716] transition-opacity hover:opacity-90"
                >
                  Probar el Copiloto gratis
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-line px-8 text-lg text-fg transition-colors hover:border-ai hover:text-ai"
                >
                  Ver cómo funciona
                </a>
              </div>

              <p className="mt-5 text-sm text-muted">
                Incluido en el plan Pro · 14 días gratis · Sin tarjeta
              </p>
            </div>

            {/* Columna chat */}
            <div
              className="animate-fade-in-up md:pl-4"
              style={{ animationDelay: '120ms' }}
            >
              <CopilotChatDemo />
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <UseCases />

        {/* Cómo funciona por dentro */}
        <HowItWorks />

        {/* Bloque de privacidad */}
        <PrivacyBlock />

        {/* FAQ IA */}
        <CopilotFAQ />

        {/* CTA final violeta */}
        <AICTA />
      </main>

      <Footer />
    </>
  )
}