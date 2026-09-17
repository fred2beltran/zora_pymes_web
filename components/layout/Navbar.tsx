// components/layout/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { events } from '@/lib/analytics'
import { cn } from '@/lib/cn'

const links = [
  { href: '/producto',    label: 'Producto' },
  { href: '/precios',     label: 'Precios' },
  { href: '/copiloto-ia', label: 'Copiloto IA', ia: true },
  { href: '/blog',        label: 'Blog' },
  { href: '/ayuda',       label: 'Ayuda' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        {/* Logo — ancho natural, alineado a la izquierda */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Zora Pymes"
          onClick={() => events.navClick('logo')}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-grad-primary text-lg font-bold text-[#101716]">
            Z
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Zora<span className="text-primary">Pymes</span>
          </span>
        </Link>

        {/* Links desktop — centrados en el espacio disponible */}
        <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group inline-flex items-center gap-1.5 text-md text-muted transition-colors hover:text-fg"
                onClick={() => events.navClick(l.label)}
              >
                {l.label}
                {l.ia && (
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-ai"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs desktop — alineados a la derecha */}
        <div className="hidden items-center gap-5 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-md text-muted transition-colors hover:text-fg"
            onClick={() => events.navClick('login')}
          >
            Iniciar sesión
          </Link>
          <Button
            as="link"
            href="/registro"
            size="md"
            onClick={() => events.ctaClick('navbar')}
          >
            Empieza gratis
          </Button>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                'block h-0.5 w-5 bg-fg transition-transform',
                open && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-5 bg-fg transition-opacity',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-5 bg-fg transition-transform',
                open && '-translate-y-2 -rotate-45'
              )}
            />
          </div>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={cn(
          'overflow-hidden border-t border-line bg-bg transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <ul className="space-y-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => {
                  events.navClick(l.label)
                  setOpen(false)
                }}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-md text-muted hover:bg-surface hover:text-fg"
              >
                {l.label}
                {l.ia && <span className="h-1.5 w-1.5 rounded-full bg-ai" />}
              </Link>
            </li>
          ))}

          <li className="flex items-center justify-between rounded-md px-3 py-2">
            <span className="text-md text-muted">Tema</span>
            <ThemeToggle />
          </li>

          <li className="pt-2">
            <Button
              as="link"
              href="/registro"
              size="md"
              className="w-full"
              onClick={() => {
                events.ctaClick('navbar_mobile')
                setOpen(false)
              }}
            >
              Empieza gratis
            </Button>
          </li>
          <li>
            <Link
              href="/login"
              onClick={() => {
                events.navClick('login_mobile')
                setOpen(false)
              }}
              className="block rounded-md px-3 py-2 text-md text-muted hover:bg-surface hover:text-fg"
            >
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}