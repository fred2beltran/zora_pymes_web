// app/copiloto-ia/PrivacyBlock.tsx
import { Section } from '@/components/ui/Section'

const points = [
  {
    emoji: '🔒',
    title: 'Tus datos, solo tuyos',
    desc: 'El Copiloto accede únicamente a tu cuenta. Nunca cruza datos entre usuarios.',
  },
  {
    emoji: '🧠',
    title: 'No entrenamos con tus datos',
    desc: 'Usamos modelos de IA que no aprenden de tu información. Tus números no salen de tu cuenta.',
  },
  {
    emoji: '🇪🇺',
    title: 'Servidores en la UE',
    desc: 'Cumplimos el RGPD al 100%. Datos cifrados con AES-256 y alojados en Europa.',
  },
  {
    emoji: '👤',
    title: 'Tú decides qué ve',
    desc: 'Puedes limitar el acceso del Copiloto a ciertos datos desde tu panel en cualquier momento.',
  },
]

export function PrivacyBlock() {
  return (
    <Section bg="surface">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-ai">
          Privacidad
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          IA sí. Pero con tus reglas.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Sabemos que dar acceso a tus números a una IA da respeto. Por eso
          lo hacemos de forma transparente.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-4 rounded-md border border-line bg-bg p-6"
          >
            <div className="text-3xl">{p.emoji}</div>
            <div>
              <h3 className="text-md font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted text-pretty">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Lee nuestra{' '}
        <a
          href="/privacidad"
          className="font-medium text-ai hover:underline underline-offset-4"
        >
          Política de privacidad
        </a>{' '}
        para todos los detalles.
      </p>
    </Section>
  )
}