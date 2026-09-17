// components/layout/Footer.tsx
import Link from 'next/link'

const cols = [
  {
    title: 'Producto',
    links: [
      { label: 'Producto',     href: '/producto' },
      { label: 'Precios',      href: '/precios' },
      { label: 'Copiloto IA',  href: '/copiloto-ia' },
      { label: 'Integraciones', href: '/integraciones' },
      { label: 'Novedades',    href: '/novedades' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog',                 href: '/blog' },
      { label: 'Guías contables',      href: '/guias' },
      { label: 'Calculadora de IVA',   href: '/calculadora-iva' },
      { label: 'Centro de ayuda',      href: '/ayuda' },
      { label: 'Estado del servicio',  href: '/status' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Zora',          href: '/sobre' },
      { label: 'Trabaja con nosotros', href: '/empleo' },
      { label: 'Prensa',              href: '/prensa' },
      { label: 'Contacto',            href: '/contacto' },
    ],
  },
]

const social = [
  { label: 'LinkedIn',  href: 'https://linkedin.com' },
  { label: 'X',         href: 'https://x.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube',   href: 'https://youtube.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8">
        {/* Grid principal */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Columna marca */}
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Zora Pymes">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-grad-primary text-base font-bold text-[#101716]">
                Z
              </span>
              <span className="text-md font-semibold tracking-tight">
                Zora<span className="text-primary">Pymes</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted">
              Tu negocio, más simple.
            </p>

            <ul className="mt-5 flex flex-wrap gap-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-md border border-line px-3 text-xs text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columnas de links */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-fg">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Zora Pymes · Aviso legal · Privacidad · Cookies · Términos
          </p>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span>Idioma:</span>
            <button className="rounded-sm px-2 py-1 text-primary">ES</button>
            <button className="rounded-sm px-2 py-1 hover:text-fg">EN</button>
            <button className="rounded-sm px-2 py-1 hover:text-fg">PT</button>
          </div>
        </div>
      </div>
    </footer>
  )
}