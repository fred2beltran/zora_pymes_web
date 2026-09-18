// app/not-found.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description:
    'La página que buscas no existe. Vuelve al inicio o explora las secciones principales de Zora Pymes.',
  robots: { index: false, follow: false },
}

const quickLinks = [
  {
    href: '/producto',
    label: 'Producto',
    desc: 'Todo lo que hace Zora',
    emoji: '📦',
  },
  {
    href: '/precios',
    label: 'Precios',
    desc: 'Planes desde $0',
    emoji: '💰',
  },
  {
    href: '/copiloto-ia',
    label: 'Copiloto IA',
    desc: 'Tu contador personal',
    emoji: '✨',
    ia: true,
  },
  {
    href: '/blog',
    label: 'Blog',
    desc: 'Guías y consejos',
    emoji: '📝',
  },
  {
    href: '/ayuda',
    label: 'Centro de ayuda',
    desc: 'Respuestas rápidas',
    emoji: '🆘',
  },
  {
    href: '/registro',
    label: 'Empezar gratis',
    desc: 'Crea tu cuenta en 5 min',
    emoji: '🚀',
  },
]

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main>
        <Section bg="default" className="min-h-[calc(100vh-12rem)]">
          <div className="mx-auto max-w-3xl">
            {/* Header con el "404" gigante */}
            <div className="text-center">
              <div className="relative inline-block">
                <span
                  aria-hidden
                  className="text-8xl font-bold text-primary/20 md:text-9xl"
                >
                  404
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl"
                >
                  🧭
                </span>
              </div>

              <h1 className="mt-8 text-3xl font-bold text-balance md:text-4xl">
                Esta página se fue a hacer la
                <br className="hidden md:block" /> contabilidad a otro lado.
              </h1>

              <p className="mx-auto mt-5 max-w-prose text-md text-muted text-pretty">
                La URL que buscas no existe (o ya no está). Pero no te
                preocupes, estamos aquí para ayudarte a encontrar lo que
                necesitas.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button as="link" href="/" size="lg">
                  ← Volver al inicio
                </Button>
                <Button
                  as="link"
                  href="/ayuda"
                  variant="secondary"
                  size="lg"
                >
                  Ir al centro de ayuda
                </Button>
              </div>
            </div>

            {/* Separador */}
            <div className="my-16 flex items-center gap-4">
              <div className="h-px flex-1 bg-line" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                O explora
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            {/* Quick links */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block"
                >
                  <div
                    className={
                      link.ia
                        ? 'flex h-full items-start gap-3 rounded-md border border-ai/40 bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-ai'
                        : 'flex h-full items-start gap-3 rounded-md border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md'
                    }
                  >
                    <span className="text-2xl">{link.emoji}</span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 text-sm font-semibold">
                        {link.label}
                        {link.ia && (
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 rounded-full bg-ai"
                          />
                        )}
                      </p>
                      <p className="mt-1 text-xs text-muted text-pretty">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bloque Copiloto IA */}
            <div className="mt-16 rounded-lg border border-ai/40 bg-surface p-8 text-center shadow-glow-ai">
              <Badge variant="ai">✨ Copiloto IA</Badge>
              <h2 className="mt-4 text-lg font-bold text-balance">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="mt-3 text-sm text-muted text-pretty">
                Cuéntanoslo. Nuestro equipo te responde en menos de 24 horas.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-grad-ai px-5 text-sm font-semibold text-[#101716] transition-opacity hover:opacity-90"
                >
                  Habla con nosotros
                </Link>
                <Link
                  href="/ayuda"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-line px-5 text-sm text-fg transition-colors hover:border-ai hover:text-ai"
                >
                  Ver preguntas frecuentes
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}