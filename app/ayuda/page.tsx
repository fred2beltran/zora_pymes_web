// app/ayuda/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Centro de ayuda',
  description:
    'Encuentra respuestas, guías y soporte para usar Zora Pymes. Artículos, tutoriales y contacto directo con el equipo.',
  alternates: { canonical: `${SITE_URL}/ayuda` },
  openGraph: {
    title: 'Centro de ayuda · Zora Pymes',
    description:
      'Encuentra respuestas y soporte para usar Zora Pymes.',
    url: `${SITE_URL}/ayuda`,
    type: 'website',
  },
}

const categories = [
  {
    emoji: '🚀',
    title: 'Empezar con Zora',
    desc: 'Cómo crear tu cuenta, configurar tu negocio y hacer tu primera factura.',
    articles: 12,
  },
  {
    emoji: '🧾',
    title: 'Facturación',
    desc: 'Crear, enviar y gestionar facturas. Numeración, plantillas y recordatorios.',
    articles: 18,
  },
  {
    emoji: '📊',
    title: 'Impuestos',
    desc: 'IVA, IRPF, retenciones, plazos y declaraciones. Todo explicado en simple.',
    articles: 15,
  },
  {
    emoji: '🤖',
    title: 'Copiloto IA',
    desc: 'Cómo usar el Copiloto, qué preguntarle y cómo interpretar sus respuestas.',
    articles: 9,
    ia: true,
  },
  {
    emoji: '🔗',
    title: 'Integraciones',
    desc: 'Conecta bancos, pasarelas de pago, tiendas online y organismos oficiales.',
    articles: 14,
  },
  {
    emoji: '🔒',
    title: 'Cuenta y seguridad',
    desc: 'Gestiona tu perfil, contraseñas, roles de equipo y privacidad de datos.',
    articles: 11,
  },
]

const popular = [
  'Cómo crear tu primera factura en Zora',
  'Cómo conectar tu banco paso a paso',
  'Qué es el IVA trimestral y cuándo se presenta',
  'Cómo funciona el Copiloto IA',
  'Cómo invitar a un contador o gestor a tu cuenta',
  'Cómo exportar tus datos a Excel o PDF',
]

export default function AyudaPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero con buscador */}
        <Section bg="default" className="pb-8 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Centro de ayuda
            </span>
            <h1 className="mt-4 text-3xl font-bold text-balance md:text-4xl">
              ¿En qué te podemos ayudar?
            </h1>
            <p className="mt-5 text-md text-muted text-pretty md:text-lg">
              Encuentra respuestas rápidas, guías paso a paso y soporte directo.
            </p>

            {/* Buscador (visual) */}
            <div className="mt-8">
              <label htmlFor="search" className="sr-only">
                Buscar en el centro de ayuda
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="search"
                  placeholder="Busca: factura, IVA, banco, copiloto…"
                  className="h-14 w-full rounded-md border border-line bg-surface pl-12 pr-4 text-md text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <span
                  aria-hidden
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-muted"
                >
                  🔍
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Categorías */}
        <Section bg="surface" className="pt-0 md:pt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Card
                key={c.title}
                variant={c.ia ? 'ai' : 'default'}
                hoverable
                className="cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{c.emoji}</div>
                  <Badge variant={c.ia ? 'ai' : 'primary'}>
                    {c.articles} artículos
                  </Badge>
                </div>
                <h2 className="mt-4 text-md font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm text-muted text-pretty">
                  {c.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Artículos populares */}
        <Section bg="default">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            {/* Lista */}
            <div>
              <h2 className="text-2xl font-bold text-balance">
                Artículos más leídos
              </h2>
              <p className="mt-3 text-sm text-muted">
                Lo que más consultan las pymes y emprendedores.
              </p>

              <ul className="mt-8 divide-y divide-line border-y border-line">
                {popular.map((title, i) => (
                  <li key={title}>
                    <Link
                      href="#"
                      className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
                    >
                      <span className="text-xs font-mono text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-md">{title}</span>
                      <span
                        aria-hidden
                        className="text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="text-2xl font-bold text-balance">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="mt-3 text-sm text-muted text-pretty">
                Nuestro equipo responde en menos de 24 horas laborables.
              </p>

              <div className="mt-8 space-y-4">
                <Card className="flex items-start gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h3 className="text-sm font-semibold">Chat en vivo</h3>
                    <p className="mt-1 text-xs text-muted">
                      Lunes a viernes · 9:00 a 19:00
                    </p>
                    <Link
                      href="#"
                      className="mt-2 inline-block text-xs font-medium text-primary hover:underline underline-offset-4"
                    >
                      Abrir chat →
                    </Link>
                  </div>
                </Card>

                <Card className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="text-sm font-semibold">Email soporte</h3>
                    <p className="mt-1 text-xs text-muted">
                      hola@zorapymes.com
                    </p>
                    <Link
                      href="mailto:hola@zorapymes.com"
                      className="mt-2 inline-block text-xs font-medium text-primary hover:underline underline-offset-4"
                    >
                      Enviar email →
                    </Link>
                  </div>
                </Card>

                <Card variant="featured" className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Soporte prioritario
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      Con plan Pro y Business. Atención 24/7 en Business.
                    </p>
                    <Button
                      as="link"
                      href="/precios"
                      variant="primary"
                      size="sm"
                      className="mt-3"
                    >
                      Ver planes
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA inferior */}
        <Section bg="surface">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-balance">
              ¿Aún no usas Zora?
            </h2>
            <p className="mt-3 text-md text-muted text-pretty">
              Empieza gratis. Configúralo en 5 minutos. Sin tarjeta.
            </p>
            <div className="mt-6 flex justify-center">
              <Button as="link" href="/registro" size="lg">
                Empieza gratis
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}