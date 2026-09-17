// app/blog/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ideas, guías y consejos prácticos para llevar la contabilidad de tu pyme o emprendimiento sin saber contabilidad. Por el equipo de Zora.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog · Zora Pymes',
    description:
      'Ideas y guías para llevar tu negocio más simple.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

const featuredPost = {
  slug: 'como-llevar-contabilidad-sin-saber-contabilidad',
  category: 'Guías',
  title: 'Cómo llevar la contabilidad de tu pyme sin saber contabilidad',
  excerpt:
    'La guía definitiva para emprendedores que quieren entender sus números sin ser contadores. Sin jerga, sin manuales de 200 páginas.',
  readTime: '8 min',
  date: '12 de marzo, 2026',
}

const posts = [
  {
    slug: 'iva-trimestral-guia-practica',
    category: 'Impuestos',
    title: 'IVA trimestral: guía práctica para pymes y autónomos',
    excerpt:
      'Qué es, cuándo se presenta y cómo calcularlo sin morir en el intento.',
    readTime: '6 min',
    date: '8 de marzo, 2026',
  },
  {
    slug: 'gastos-deducibles-que-se-te-pasan',
    category: 'Deducciones',
    title: '10 gastos deducibles que seguro se te están pasando',
    excerpt:
      'Desde la cuota de autónomos hasta el móvil. Todo lo que puedes deducirte y probablemente no lo estás haciendo.',
    readTime: '5 min',
    date: '5 de marzo, 2026',
  },
  {
    slug: 'copiloto-ia-contabilidad-real',
    category: 'IA',
    title: 'Cómo usamos IA para traducir tu contabilidad a lenguaje humano',
    excerpt:
      'Por qué las herramientas contables tradicionales fallan y cómo la IA lo cambia todo.',
    readTime: '7 min',
    date: '1 de marzo, 2026',
    ia: true,
  },
  {
    slug: 'elegir-software-contable-2026',
    category: 'Producto',
    title: 'Cómo elegir un software contable en 2026 (sin equivocarte)',
    excerpt:
      'Las 7 preguntas que deberías hacerte antes de pagar por una herramienta contable.',
    readTime: '9 min',
    date: '25 de febrero, 2026',
  },
  {
    slug: 'factura-electronica-espana',
    category: 'Legal',
    title: 'Factura electrónica en España: qué cambia y cuándo',
    excerpt:
      'La Ley Crea y Crece entra en vigor. Te explicamos qué significa para tu negocio.',
    readTime: '6 min',
    date: '20 de febrero, 2026',
  },
  {
    slug: 'metricas-pyme-importan',
    category: 'Gestión',
    title: 'Las 5 métricas que toda pyme debería mirar cada mes',
    excerpt:
      'Beneficio real, margen, cash flow, punto de equilibrio y LTV. En simple.',
    readTime: '7 min',
    date: '15 de febrero, 2026',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero blog */}
        <Section bg="default" className="pb-8 md:pb-12">
          <div className="mx-auto max-w-prose text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Blog
            </span>
            <h1 className="mt-4 text-3xl font-bold text-balance md:text-4xl">
              Ideas para llevar tu negocio más simple.
            </h1>
            <p className="mt-5 text-md text-muted text-pretty md:text-lg">
              Guías prácticas, sin jerga contable. Para pymes y emprendedores
              que quieren entender sus números.
            </p>
          </div>
        </Section>

        {/* Post destacado */}
        <Section bg="default" className="pt-0 md:pt-0">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <Card
              variant="featured"
              className="overflow-hidden md:grid md:grid-cols-2 md:items-stretch md:p-0"
              hoverable
            >
              {/* Visual izquierda */}
              <div className="relative min-h-[220px] bg-grad-primary md:min-h-[320px]">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid opacity-30"
                />
                <div className="absolute left-6 top-6">
                  <Badge variant="primary">Destacado</Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-40">📘</span>
                </div>
              </div>

              {/* Contenido derecha */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <Badge variant="primary">{featuredPost.category}</Badge>
                  <span className="text-muted">
                    {featuredPost.date} · {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-balance transition-colors group-hover:text-primary md:text-3xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-md text-muted text-pretty">
                  {featuredPost.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Leer artículo
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Card>
          </Link>
        </Section>

        {/* Grid de posts */}
        <Section bg="surface">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block"
              >
                <Card
                  variant={p.ia ? 'ai' : 'default'}
                  className="flex h-full flex-col"
                  hoverable
                >
                  <div className="flex items-center gap-3 text-xs">
                    <Badge variant={p.ia ? 'ai' : 'primary'}>
                      {p.category}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-balance transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm text-muted text-pretty">
                    {p.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-line pt-4 text-xs text-muted">
                    <span>{p.date}</span>
                    <span aria-hidden>·</span>
                    <span>{p.readTime}</span>
                    <span
                      aria-hidden
                      className="ml-auto text-primary transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        {/* Newsletter */}
        <Section bg="default">
          <Card className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-xl font-bold text-balance md:text-2xl">
                Recibe 1 email al mes. Sin spam.
              </h2>
              <p className="mt-3 text-sm text-muted text-pretty">
                Guías prácticas, cambios legales que te afectan y consejos para
                llevar mejor tu negocio.
              </p>

              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                action="#"
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  aria-label="Email"
                  className="h-11 flex-1 rounded-md border border-line bg-bg px-4 text-md text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="h-11 rounded-md bg-primary px-6 text-md font-semibold text-[#101716] transition-colors hover:bg-primary-hover"
                >
                  Suscribirme
                </button>
              </form>
              <p className="mt-3 text-xs text-muted">
                Cancela cuando quieras. Sin compromiso.
              </p>
            </div>
          </Card>
        </Section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}