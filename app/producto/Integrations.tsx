// app/producto/Integrations.tsx
import { Section } from '@/components/ui/Section'

const integrations = [
  { name: 'BBVA',         category: 'Banco' },
  { name: 'Santander',    category: 'Banco' },
  { name: 'CaixaBank',    category: 'Banco' },
  { name: 'Stripe',       category: 'Pagos' },
  { name: 'PayPal',       category: 'Pagos' },
  { name: 'Shopify',      category: 'Ecommerce' },
  { name: 'WooCommerce',  category: 'Ecommerce' },
  { name: 'Holded',       category: 'Contabilidad' },
  { name: 'Hacienda',     category: 'Oficial' },
  { name: 'AEAT',         category: 'Oficial' },
  { name: 'Slack',        category: 'Notificaciones' },
  { name: 'Google Drive', category: 'Almacenamiento' },
]

export function Integrations() {
  return (
    <Section bg="surface" id="integraciones">
      <div className="mx-auto max-w-prose text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Integraciones
        </span>
        <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
          Conecta Zora con lo que ya usas.
        </h2>
        <p className="mt-4 text-md text-muted text-pretty">
          Bancos, pasarelas de pago, tiendas online y organismos oficiales. Sin
          exportar ni importar archivos a mano.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {integrations.map((i) => (
          <div
            key={i.name}
            className="flex flex-col items-center justify-center gap-2 rounded-md border border-line bg-bg p-6 text-center transition-colors hover:border-primary/60"
          >
            <span className="text-md font-semibold">{i.name}</span>
            <span className="text-xs uppercase tracking-wider text-muted">
              {i.category}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        ¿Necesitas otra integración?{' '}
        <a
          href="/contacto"
          className="font-medium text-primary hover:underline underline-offset-4"
        >
          Cuéntanos →
        </a>
      </p>
    </Section>
  )
}