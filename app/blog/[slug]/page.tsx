// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { MDXContent } from '@/components/blog/MDXContent'
import {
  getAllPostSlugs,
  getPostBySlug,
  getAllPosts,
  formatDate,
} from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

interface Params {
  params: Promise<{ slug: string }>
}

// Genera todas las rutas estáticas en build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} · Zora Pymes`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Posts relacionados: misma categoría, excluyendo el actual
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  // Si no hay de la misma categoría, coge 3 aleatorios
  const fallback = related.length
    ? related
    : getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Navbar />

      <main>
        {/* Hero del artículo */}
        <Section bg="default" className="pb-0 md:pb-0">
          <div className="mx-auto max-w-prose">
            {/* Breadcrumb */}
            <nav
              aria-label="Migas de pan"
              className="mb-8 flex items-center gap-2 text-xs text-muted"
            >
              <Link href="/" className="hover:text-fg">
                Inicio
              </Link>
              <span aria-hidden>·</span>
              <Link href="/blog" className="hover:text-fg">
                Blog
              </Link>
              <span aria-hidden>·</span>
              <span className="text-fg">{post.category}</span>
            </nav>

            <Badge variant={post.ia ? 'ai' : 'primary'}>
              {post.category}
            </Badge>

            <h1 className="mt-5 text-3xl font-bold text-balance md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg text-muted text-pretty">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-line py-5 text-sm text-muted">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  Z
                </div>
                <span>Equipo de Zora</span>
              </div>
              <span aria-hidden>·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </Section>

        {/* Contenido MDX */}
        <Section bg="default" className="pt-10 md:pt-12">
          <article className="mx-auto max-w-prose">
            <MDXContent source={post.content} />

            {/* CTA después del artículo */}
            <div className="mt-16 rounded-lg border border-line bg-surface p-8 text-center">
              <h2 className="text-xl font-bold text-balance md:text-2xl">
                ¿Te ha sido útil?
              </h2>
              <p className="mt-3 text-sm text-muted text-pretty">
                Empieza gratis en Zora y lleva tu contabilidad sin saber
                contabilidad.
              </p>
              <div className="mt-6 flex justify-center">
                <Button as="link" href="/registro" size="lg">
                  Empieza gratis
                </Button>
              </div>
            </div>
          </article>
        </Section>

        {/* Posts relacionados */}
        {fallback.length > 0 && (
          <Section bg="surface">
            <div className="mx-auto max-w-prose text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Sigue leyendo
              </span>
              <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
                Artículos relacionados
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {fallback.map((p) => (
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
                    <Badge variant={p.ia ? 'ai' : 'primary'}>
                      {p.category}
                    </Badge>
                    <h3 className="mt-4 text-md font-semibold text-balance transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-muted text-pretty">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
                      <span>{formatDate(p.date)}</span>
                      <span aria-hidden>·</span>
                      <span>{p.readTime}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button as="link" href="/blog" variant="secondary" size="md">
                Ver todos los artículos →
              </Button>
            </div>
          </Section>
        )}
      </main>

      <Footer />
    </>
  )
}