// app/registro/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { RegisterForm } from './RegisterForm'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export const metadata: Metadata = {
  title: 'Crea tu cuenta',
  description:
    'Empieza gratis en Zora Pymes. Contabilidad clara para pymes y emprendedores, sin saber contabilidad. Sin tarjeta.',
  robots: { index: false, follow: false },
}

const benefits = [
  {
    title: 'Sin tarjeta',
    desc: 'Empieza gratis. Elige plan solo cuando lo necesites.',
  },
  {
    title: 'En 5 minutos',
    desc: 'Conecta tu negocio y deja que Zora ordene tus números.',
  },
  {
    title: 'Copiloto IA incluido',
    desc: 'Pregúntale lo que sea. Te responde en lenguaje humano.',
  },
  {
    title: 'Tus datos, seguros',
    desc: 'Cifrado AES-256. Cumplimos el RGPD. Solo tú decides.',
  },
]

export default function RegistroPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
      {/* Panel izquierdo — valor + beneficios (oculto en mobile) */}
      <aside className="relative hidden overflow-hidden bg-surface px-10 py-12 lg:flex lg:flex-col">
        {/* Gradiente decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-grad-primary opacity-20 blur-3xl"
        />

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2" aria-label="Zora Pymes">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-grad-primary text-base font-bold text-[#101716]">
            Z
          </span>
          <span className="text-md font-semibold tracking-tight">
            Zora<span className="text-primary">Pymes</span>
          </span>
        </Link>

        {/* Titular */}
        <div className="relative mt-16 max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-balance">
            Contabilidad clara. <span className="text-primary">Sin saber contabilidad.</span>
          </h2>
          <p className="mt-4 text-md text-muted text-pretty">
            Únete a las 12.000+ pymes y emprendedores que ya llevan sus números
            al día con Zora.
          </p>
        </div>

        {/* Beneficios */}
        <ul className="relative mt-10 space-y-5">
          {benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-[10px] font-bold text-success"
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-semibold">{b.title}</p>
                <p className="text-sm text-muted text-pretty">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Testimonio */}
        <div className="relative mt-auto rounded-md border border-line bg-bg p-5">
          <div className="text-primary" aria-label="5 estrellas">
            ★★★★★
          </div>
          <p className="mt-3 text-sm text-fg text-pretty">
            "Antes perdía 4 horas al mes con la contabilidad. Ahora son 10
            minutos. Y por fin sé cuánto gano de verdad."
          </p>
          <p className="mt-3 text-xs text-muted">
            María G. · Fundadora de tienda online
          </p>
        </div>
      </aside>

      {/* Panel derecho — formulario */}
      <section className="flex flex-col bg-bg px-6 py-10 md:px-12 md:py-12">
        {/* Barra superior: logo mobile + toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:invisible" aria-label="Zora Pymes">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-grad-primary text-sm font-bold text-[#101716]">
              Z
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Zora<span className="text-primary">Pymes</span>
            </span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Formulario */}
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-balance">
              Crea tu cuenta gratis
            </h1>
            <p className="mt-2 text-sm text-muted">
              Empieza en 5 minutos. Sin tarjeta.
            </p>
          </header>

          <RegisterForm />

          <p className="mt-6 text-center text-sm text-muted">
            ¿Ya tienes cuenta?{' '}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Inicia sesión
            </Link>
          </p>
        </div>

        {/* Footer mínimo */}
        <div className="mx-auto w-full max-w-md text-center text-xs text-muted">
          © {new Date().getFullYear()} Zora Pymes ·{' '}
          <Link href="/legal" className="hover:text-fg">Legal</Link> ·{' '}
          <Link href="/privacidad" className="hover:text-fg">Privacidad</Link> ·{' '}
          <Link href="/cookies" className="hover:text-fg">Cookies</Link>
        </div>
      </section>
    </main>
  )
}