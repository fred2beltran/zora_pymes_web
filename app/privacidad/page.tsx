// app/privacidad/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Cómo tratamos tus datos personales en Zora Pymes, conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.',
  alternates: { canonical: `${SITE_URL}/privacidad` },
}

const sections = [
  { id: 'responsable',   title: 'Responsable' },
  { id: 'datos',         title: 'Qué datos tratamos' },
  { id: 'finalidad',     title: 'Para qué los usamos' },
  { id: 'base',          title: 'Base legal' },
  { id: 'conservacion',  title: 'Conservación' },
  { id: 'destinatarios', title: 'Destinatarios' },
  { id: 'derechos',      title: 'Tus derechos' },
  { id: 'seguridad',     title: 'Seguridad' },
  { id: 'transferencias', title: 'Transferencias internacionales' },
  { id: 'cambios',       title: 'Cambios' },
]

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />

      <main>
        <LegalLayout
          title="Política de privacidad"
          description="Información detallada sobre cómo recogemos, tratamos y protegemos tus datos personales, conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador y su Reglamento General."
          lastUpdate="18 de septiembre de 2026"
          sections={sections}
        >
          <h2 id="responsable">1. Responsable del tratamiento</h2>

          <ul>
            <li><strong>Identidad:</strong> [ZoraEC]</li>
            <li><strong>RUC:</strong> [1719393553001]</li>
            <li><strong>Dirección:</strong> [PICHINCHA Y GUAYAS]</li>
            <li><strong>Email:</strong> [zorapymes@zoraec.com]</li>
            <li><strong>Responsable de Protección de Datos:</strong>dpo@zorapymes.com</li>
          </ul>

          <p>
            Esta política se emite en cumplimiento de la{' '}
            <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong>{' '}
            publicada en el Registro Oficial Suplemento 459 del 26 de mayo de 2021,
            y su Reglamento General, vigente desde 2023.
          </p>

          <h2 id="datos">2. Qué datos tratamos</h2>

          <p>En función de tu interacción con Zora, podemos tratar:</p>

          <h3>2.1. Datos que nos das directamente</h3>
          <ul>
            <li><strong>Identificativos:</strong> nombres, apellidos, email, teléfono.</li>
            <li><strong>Tributarios:</strong> RUC, cédula de identidad, dirección fiscal, razón social.</li>
            <li><strong>De facturación:</strong> datos bancarios, historial de pagos.</li>
            <li><strong>De tu negocio:</strong> facturas, gastos, ingresos, datos contables que subes o sincronizas.</li>
          </ul>

          <h3>2.2. Datos que recogemos automáticamente</h3>
          <ul>
            <li><strong>De uso:</strong> páginas visitadas, clics, tiempo de sesión.</li>
            <li><strong>Técnicos:</strong> dirección IP, tipo de navegador, dispositivo, sistema operativo.</li>
            <li><strong>Analíticos anónimos:</strong> métricas agregadas de tráfico, sin cookies.</li>
          </ul>

          <h3>2.3. Datos sensibles</h3>
          <p>
            Zora <strong>no solicita ni trata datos sensibles</strong> según la
            definición del art. 4 de la LOPDP (origen étnico, salud, vida sexual,
            creencias religiosas, etc.). Si en el futuro fuera necesario, se
            solicitaría consentimiento explícito y por escrito.
          </p>

          <h2 id="finalidad">3. Para qué usamos tus datos</h2>

          <ul>
            <li><strong>Prestar el servicio:</strong> gestionar tu cuenta, facturas, impuestos y reportes.</li>
            <li><strong>Comunicaciones operativas:</strong> avisos de plazos, cambios en el servicio, incidencias.</li>
            <li><strong>Facturación y cobro:</strong> gestionar pagos y suscripciones.</li>
            <li><strong>Soporte:</strong> responder a tus consultas.</li>
            <li><strong>Marketing:</strong> enviarte novedades y contenidos, solo si lo has consentido expresamente.</li>
            <li><strong>Mejora del producto:</strong> análisis agregado y anónimo para mejorar Zora.</li>
            <li><strong>Cumplimiento legal:</strong> obligaciones tributarias, contables y societarias.</li>
          </ul>

          <h2 id="base">4. Base legal del tratamiento</h2>

          <p>
            Conforme al art. 7 de la LOPDP, el tratamiento se basa en:
          </p>

          <table>
            <thead>
              <tr>
                <th>Finalidad</th>
                <th>Base legal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prestación del servicio</td>
                <td>Ejecución de contrato</td>
              </tr>
              <tr>
                <td>Facturación y obligaciones tributarias</td>
                <td>Cumplimiento de obligación legal</td>
              </tr>
              <tr>
                <td>Marketing y comunicaciones</td>
                <td>Consentimiento expreso y revocable</td>
              </tr>
              <tr>
                <td>Mejora del producto</td>
                <td>Interés legítimo</td>
              </tr>
              <tr>
                <td>Seguridad y prevención de fraude</td>
                <td>Interés legítimo</td>
              </tr>
            </tbody>
          </table>

          <h2 id="conservacion">5. Cuánto tiempo conservamos tus datos</h2>

          <ul>
            <li><strong>Datos de cuenta:</strong> mientras mantengas la cuenta activa y, tras cancelarla, durante 7 años por obligaciones tributarias.</li>
            <li><strong>Datos contables y tributarios:</strong> mínimo 7 años (art. 46 del Código Tributario ecuatoriano).</li>
            <li><strong>Datos de marketing:</strong> hasta que revoques el consentimiento.</li>
            <li><strong>Datos analíticos anónimos:</strong> máximo 26 meses.</li>
          </ul>

          <h2 id="destinatarios">6. Destinatarios de los datos</h2>

          <p>
            No vendemos ni cedemos tus datos a terceros. Únicamente los
            compartimos con proveedores que nos ayudan a prestar el servicio
            (encargados del tratamiento):
          </p>

          <ul>
            <li><strong>Vercel Inc.</strong> — hosting y despliegue (EE.UU.).</li>
            <li><strong>Stripe Payments</strong> — procesamiento de pagos con tarjeta.</li>
            <li><strong>Proveedores de servicios bancarios regulados por la Superintendencia de Bancos del Ecuador</strong> — para la conexión bancaria.</li>
            <li><strong>Servicios de email transaccional</strong> — notificaciones operativas.</li>
          </ul>

          <p>
            Todos los proveedores están sujetos a contratos de encargado de
            tratamiento conforme al art. 37 de la LOPDP.
          </p>

          <h2 id="derechos">7. Tus derechos</h2>

          <p>
            Conforme a los arts. 12 al 20 de la LOPDP, tienes derecho a:
          </p>

          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tratamos sobre ti y su origen.</li>
            <li><strong>Rectificación y actualización:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Eliminación:</strong> solicitar el borrado de tus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento en determinados supuestos.</li>
            <li><strong>Suspensión del tratamiento:</strong> solicitar que dejemos de tratar tus datos temporalmente.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado, de uso común y lectura mecánica.</li>
            <li><strong>No ser objeto de decisiones automatizadas:</strong> incluyendo perfilado, salvo cuando sea necesario para la ejecución del contrato.</li>
            <li><strong>Retirar el consentimiento:</strong> en cualquier momento, sin efectos retroactivos.</li>
          </ul>

          <p>
            Puedes ejercerlos escribiendo a <a href="mailto:[zorapymes@zoraec.com]">[zorapymes@zoraec.com]</a>{' '}
            con tu solicitud y copia de cédula o pasaporte. Responderemos en un
            plazo máximo de <strong>15 días hábiles</strong>.
          </p>

          <p>
            Si consideras que no hemos atendido correctamente tu solicitud,
            puedes reclamar ante la{' '}
            <strong>Superintendencia de Protección de Datos Personales</strong>{' '}
            del Ecuador.
          </p>

          <h2 id="seguridad">8. Seguridad de los datos</h2>

          <p>
            Aplicamos medidas técnicas y organizativas apropiadas al riesgo,
            conforme al art. 10 de la LOPDP, incluyendo:
          </p>

          <ul>
            <li>Cifrado en tránsito (TLS 1.3) y en reposo (AES-256).</li>
            <li>Control de accesos basado en roles y principio de mínimo privilegio.</li>
            <li>Auditorías periódicas y monitorización continua.</li>
            <li>Copias de seguridad cifradas con retención limitada.</li>
            <li>Registro de accesos y actividades sensibles.</li>
            <li>Notificación a la Superintendencia en caso de brechas de seguridad, conforme al art. 40 de la LOPDP.</li>
          </ul>

          <h2 id="transferencias">9. Transferencias internacionales de datos</h2>

          <p>
            Algunos de nuestros proveedores (como Vercel o Stripe) están
            establecidos fuera del Ecuador. Conforme al art. 52 de la LOPDP,
            realizamos estas transferencias solo cuando:
          </p>

          <ul>
            <li>El país receptor ofrece un nivel adecuado de protección según la Superintendencia, o</li>
            <li>Existen garantías contractuales apropiadas (cláusulas contractuales tipo), o</li>
            <li>El usuario ha otorgado consentimiento explícito e informado.</li>
          </ul>

          <p>
            Puedes solicitar más información sobre las transferencias
            internacionales escribiendo a <a href="mailto:[zorapymes@zoraec.com]">[zorapymes@zoraec.com]</a>.
          </p>

          <h2 id="cambios">10. Cambios en esta política</h2>

          <p>
            Podemos actualizar esta política para adaptarla a cambios legales o
            funcionales. Te notificaremos cualquier cambio sustancial por email
            o mediante aviso destacado en la plataforma con al menos 15 días de
            antelación.
          </p>

          <hr />

          <p>
            Última actualización: <strong>18 de septiembre de 2026</strong>.
          </p>
        </LegalLayout>
      </main>

      <Footer />
    </>
  )
}