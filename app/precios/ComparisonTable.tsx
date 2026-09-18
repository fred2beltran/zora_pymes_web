// app/precios/ComparisonTable.tsx
import { Fragment } from 'react'
import { Section } from '@/components/ui/Section'

type CellValue = string | boolean

interface Row {
  category: string
  feature: string
  starter: CellValue
  pro: CellValue
  business: CellValue
}

const rows: Row[] = [
  { category: 'General', feature: 'Usuarios',                     starter: '1',           pro: 'Hasta 5',       business: 'Ilimitados' },
  { category: 'General', feature: 'Facturas al mes',              starter: '20',          pro: 'Ilimitadas',    business: 'Ilimitadas' },
  { category: 'General', feature: 'Multi-empresa',                starter: false,         pro: false,           business: true },

  { category: 'Contabilidad', feature: 'Clasificación automática de gastos', starter: true,  pro: true,            business: true },
  { category: 'Contabilidad', feature: 'Reportes básicos',        starter: true,          pro: true,            business: true },
  { category: 'Contabilidad', feature: 'Reportes avanzados',      starter: false,         pro: true,            business: true },
  { category: 'Contabilidad', feature: 'Recordatorios de plazos', starter: false,         pro: true,            business: true },

  { category: 'Copiloto IA', feature: 'Copiloto IA incluido',     starter: false,         pro: true,            business: true },
  { category: 'Copiloto IA', feature: 'Preguntas ilimitadas',     starter: false,         pro: true,            business: true },

  { category: 'Equipo',      feature: 'Roles y permisos',         starter: false,         pro: true,            business: true },
  { category: 'Equipo',      feature: 'Asesor contable humano',   starter: false,         pro: false,           business: true },

  { category: 'Integraciones', feature: 'API',                     starter: false,        pro: false,           business: true },
  { category: 'Integraciones', feature: 'Conexión bancaria',       starter: true,         pro: true,            business: true },
  { category: 'Integraciones', feature: 'Exportar a Excel/CSV',    starter: true,         pro: true,            business: true },

  { category: 'Soporte',     feature: 'Soporte por email',         starter: true,         pro: true,            business: true },
  { category: 'Soporte',     feature: 'Soporte prioritario',       starter: false,        pro: true,            business: true },
  { category: 'Soporte',     feature: 'Soporte 24/7',              starter: false,        pro: false,           business: true },

  { category: 'Seguridad',   feature: 'Cifrado AES-256',           starter: true,         pro: true,            business: true },
  { category: 'Seguridad',   feature: 'Cumplimiento LOPDP',        starter: true,         pro: true,            business: true },
  { category: 'Seguridad',   feature: 'Auditoría de accesos',      starter: false,        pro: true,            business: true },
]

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span
        aria-label="Incluido"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-xs font-bold text-success"
      >
        ✓
      </span>
    )
  }
  if (value === false) {
    return (
      <span
        aria-label="No incluido"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-line/40 text-xs text-muted"
      >
        —
      </span>
    )
  }
  return <span className="text-sm">{value}</span>
}

export function ComparisonTable() {
  const categories = Array.from(new Set(rows.map((r) => r.category)))

  return (
    <Section bg="surface" id="comparativa">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Comparativa
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Todo lo que incluye cada plan.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Sin letra chica. Lo que ves es lo que hay.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line bg-bg">
              <th className="sticky left-0 z-10 bg-bg px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted">
                Característica
              </th>
              <th className="px-5 py-4 text-center">
                <div className="text-sm font-semibold">Starter</div>
                <div className="mt-1 text-xs text-muted">Gratis</div>
              </th>
              <th className="relative px-5 py-4 text-center">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-grad-primary" />
                <div className="text-sm font-semibold text-primary">Pro</div>
                <div className="mt-1 text-xs text-muted">$19/mes</div>
              </th>
              <th className="px-5 py-4 text-center">
                <div className="text-sm font-semibold">Business</div>
                <div className="mt-1 text-xs text-muted">$49/mes</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <Fragment key={cat}>
                <tr className="bg-bg/60">
                  <td
                    colSpan={4}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {cat}
                  </td>
                </tr>
                {rows
                  .filter((r) => r.category === cat)
                  .map((r) => (
                    <tr
                      key={r.feature}
                      className="border-t border-line transition-colors hover:bg-bg/40"
                    >
                      <td className="px-5 py-3 text-sm">{r.feature}</td>
                      <td className="px-5 py-3 text-center">
                        <Cell value={r.starter} />
                      </td>
                      <td className="bg-primary/5 px-5 py-3 text-center">
                        <Cell value={r.pro} />
                      </td>
                      <td className="px-5 py-3 text-center">
                        <Cell value={r.business} />
                      </td>
                    </tr>
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        ¿No ves la feature que buscas?{' '}
        <a
          href="/contacto"
          className="font-medium text-primary hover:underline underline-offset-4"
        >
          Pregúntanos →
        </a>
      </p>
    </Section>
  )
}