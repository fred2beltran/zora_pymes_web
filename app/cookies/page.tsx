// app/cookies/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Información sobre las cookies y tecnologías similares que utiliza Zora Pymes.',
  alternates: { canonical: `${SITE_URL}/cookies` },
}

const sections = [
  { id: 'que-son',  title: 'Qué son las cookies' },
  { id: 'usamos',   title: 'Qué usamos en Zora' },
  { id: 'tipos',    title: 'Tipos de cookies' },
  { id: 'gestion',  title: 'Cómo gestionarlas' },
  { id: 'cambios',  title: 'Cambios' },
]

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main>
        <LegalLayout
          title="Política de cookies"
          description="Información sobre las cookies y tecnologías similares que utiliza Zora Pymes, conforme a la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos del Ecuador."
          lastUpdate="18 de septiembre de 2026"
          sections={sections}
        >
          <h2 id="que-son">1. Qué son las cookies</h2>

          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo al visitar un sitio web. Se utilizan para recordar tus
            preferencias, analizar el uso del sitio y mejorar tu experiencia.
          </p>

          <h2 id="usamos">2. Qué usamos en Zora</h2>

          <p>
            <strong>Zora es una plataforma que respeta tu privacidad por
            diseño.</strong> Nuestro enfoque es minimizar el uso de cookies y
            tecnologías de seguimiento:
          </p>

          <ul>
            <li>
              <strong>No usamos cookies publicitarias</strong> ni de perfilado.
              Nunca vendemos datos a terceros para publicidad.
            </li>
            <li>
              <strong>No usamos Google Analytics</strong> ni otras herramientas
              que rastreen tu navegación entre sitios.
            </li>
            <li>
              <strong>Sí usamos analítica anónima sin cookies:</strong> empleamos
              Vercel Analytics, que mide visitas y eventos de manera agregada y
              anonimizada, sin almacenar nada en tu dispositivo.
            </li>
          </ul>

          <p>
            Como consecuencia, <strong>no mostramos un banner de cookies</strong>{' '}
            porque no necesitamos tu consentimiento previo: no instalamos
            cookies no esenciales.
          </p>

          <h2 id="tipos">3. Tipos de cookies que podemos usar</h2>

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>zora-theme</code></td>
                <td>Técnica (localStorage)</td>
                <td>Guardar tu preferencia de tema (claro/oscuro)</td>
                <td>Persistente</td>
              </tr>
              <tr>
                <td><code>next-auth.*</code></td>
                <td>Técnica</td>
                <td>Mantener tu sesión iniciada</td>
                <td>Sesión / 30 días</td>
              </tr>
              <tr>
                <td><code>__vercel.insights</code></td>
                <td>Analítica anónima</td>
                <td>Medición agregada de tráfico (sin cookies reales)</td>
                <td>Sin persistencia</td>
              </tr>
            </tbody>
          </table>

          <p>
            Las cookies <strong>técnicas o necesarias</strong> están exentas de
            consentimiento previo, ya que son imprescindibles para el
            funcionamiento del servicio solicitado por el usuario.
          </p>

          <h2 id="gestion">4. Cómo gestionar las cookies</h2>

          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies. Ten
            en cuenta que si bloqueas las cookies técnicas, algunas funciones de
            Zora pueden dejar de funcionar (por ejemplo, mantener la sesión
            iniciada o recordar el tema).
          </p>

          <p>Enlaces a las guías de los navegadores más comunes:</p>

          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2 id="cambios">5. Cambios en esta política</h2>

          <p>
            Si en el futuro incorporamos cookies de terceros o con finalidad
            analítica o publicitaria, actualizaremos esta política e
            implementaremos el correspondiente banner de consentimiento previo
            conforme a la normativa aplicable en Ecuador.
          </p>

          <hr />

          <p>
            Para cualquier duda sobre esta política, escribe a{' '}
            <a href="mailto:[zorapymes@zoraec.com]">[zorapymes@zoraec.com]</a> o consulta nuestra{' '}
            <Link href="/privacidad">política de privacidad</Link>.
          </p>
        </LegalLayout>
      </main>

      <Footer />
    </>
  )
}