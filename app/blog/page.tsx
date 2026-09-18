// app/blog/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { getAllPosts, getFeaturedPost, formatDate } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ideas, guías y consejos prácticos para llevar la contabilidad de tu pyme o emprendimiento sin saber contabilidad. Por el equipo de Zora.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog · Zora Pymes',
    description: 'Ideas y guías para llevar tu negocio más simple.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featured = getFeaturedPost()
  const posts = featured
    ? allPosts.filter((p) => p.slug !== featured.slug)
    : allPosts

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
        {featured && (
          <Section bg="default" className="pt-0 md:pt-0">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <Card
                variant="featured"
                className="overflow-hidden md:grid md:grid-cols-2 md:items-stretch md:p-0"
                hoverable
              >
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

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <Badge variant="primary">{featured.category}</Badge>
                    <span className="text-muted">
                      {formatDate(featured.date)} · {featured.readTime}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-balance transition-colors group-hover:text-primary md:text-3xl">
                    {featured.title}
                  </h2>

                  <p className="mt-4 text-md text-muted text-pretty">
                    {featured.excerpt}
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
        )}

        {/* Grid de posts */}
        {posts.length > 0 && (
          <Section bg="surface">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
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
                      <span>{formatDate(p.date)}</span>
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
        )}

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

              <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="#">
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