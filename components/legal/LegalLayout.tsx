// components/legal/LegalLayout.tsx
import Link from 'next/link'

interface Section {
  id: string
  title: string
}

interface Props {
  title: string
  description: string
  lastUpdate: string
  sections: Section[]
  children: React.ReactNode
}

const legalLinks = [
  { href: '/legal',      label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies',    label: 'Cookies' },
  { href: '/terminos',   label: 'Términos' },
]

export function LegalLayout({
  title,
  description,
  lastUpdate,
  sections,
  children,
}: Props) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-12 md:grid-cols-[240px_1fr] md:gap-16 md:px-10 md:py-16">
      {/* Sidebar */}
      <aside className="md:sticky md:top-28 md:self-start">
        <nav aria-label="Navegación legal">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Documentos legales
          </p>
          <ul className="mt-4 space-y-1">
            {legalLinks.map((l) => {
              const isCurrent = l.href === `/${title.toLowerCase()}`
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      isCurrent
                        ? 'block rounded-md bg-surface px-3 py-2 text-sm font-medium text-primary'
                        : 'block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg'
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {sections.length > 0 && (
          <nav
            aria-label="Índice de contenidos"
            className="mt-10 hidden md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              En esta página
            </p>
            <ul className="mt-4 space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-md px-3 py-1.5 text-xs text-muted transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </aside>

      {/* Contenido */}
      <article className="min-w-0">
        <header className="border-b border-line pb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Legal
          </span>
          <h1 className="mt-3 text-3xl font-bold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-prose text-md text-muted text-pretty">
            {description}
          </p>
          <p className="mt-4 text-xs text-muted">
            Última actualización: <time>{lastUpdate}</time>
          </p>
        </header>

        <div className="legal-content mt-10 max-w-prose">{children}</div>
      </article>
    </div>
  )
}