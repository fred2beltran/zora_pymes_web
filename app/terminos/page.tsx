// app/terminos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Condiciones generales de contratación y uso del servicio Zora Pymes en Ecuador.',
  alternates: { canonical: `${SITE_URL}/terminos` },
}

const sections = [
  { id: 'objeto',         title: 'Objeto y aceptación' },
  { id: 'servicio',       title: 'Descripción del servicio' },
  { id: 'registro',       title: 'Registro y cuenta' },
  { id: 'planes',         title: 'Planes y precios' },
  { id: 'pago',           title: 'Pago y facturación' },
  { id: 'cancelacion',    title: 'Cancelación y reembolsos' },
  { id: 'uso',            title: 'Uso aceptable' },
  { id: 'propiedad',      title: 'Propiedad intelectual' },
  { id: 'garantias',      title: 'Garantías y limitaciones' },
  { id: 'consumidor',     title: 'Derechos del consumidor' },
  { id: 'modificaciones', title: 'Modificaciones' },
  { id: 'ley',            title: 'Ley aplicable' },
]

export default function TerminosPage() {
  return (
    <>
      <Navbar />

      <main>
        <LegalLayout
          title="Términos y condiciones"
          description="Condiciones generales que regulan la contratación y el uso del servicio Zora Pymes, conforme a la legislación de la República del Ecuador."
          lastUpdate="18 de septiembre de 2026"
          sections={sections}
        >
          <h2 id="objeto">1. Objeto y aceptación</h2>

          <p>
            Las presentes condiciones generales (en adelante, «las Condiciones»)
            regulan la relación contractual entre [ZoraEC] (en adelante,
            «Zora») y el usuario que contrata o utiliza el servicio de software
            de gestión contable disponible en <strong>zorapymes.com</strong> (en
            adelante, «el Servicio»).
          </p>

          <p>
            El uso del Servicio implica la aceptación plena de estas Condiciones.
            Si no estás de acuerdo, no utilices el Servicio.
          </p>

          <h2 id="servicio">2. Descripción del servicio</h2>

          <p>
            Zora es una plataforma SaaS de gestión contable para pymes,
            emprendedores y personas naturales obligadas a llevar contabilidad
            en el Ecuador, que incluye:
          </p>

          <ul>
            <li>Facturación electrónica conforme a los requisitos del SRI.</li>
            <li>Registro y clasificación de gastos.</li>
            <li>Cálculo de impuestos (IVA, Impuesto a la Renta, retenciones).</li>
            <li>Recordatorios de plazos tributarios.</li>
            <li>Reportes y análisis contable.</li>
            <li>Copiloto IA de asistencia contable.</li>
            <li>Integraciones bancarias y con organismos oficiales.</li>
          </ul>

          <p>
            El Servicio se presta "tal cual" y en régimen de mejor esfuerzo. Zora{' '}
            <strong>no sustituye el asesoramiento de un contador público
            autorizado</strong> ni constituye asesoría tributaria, legal o
            laboral personalizada.
          </p>

          <h2 id="registro">3. Registro y cuenta</h2>

          <ul>
            <li>Debes ser mayor de 18 años y tener capacidad legal para contratar.</li>
            <li>Debes proporcionar información veraz, exacta y completa.</li>
            <li>Eres responsable de mantener la confidencialidad de tus credenciales.</li>
            <li>Debes notificarnos de inmediato cualquier uso no autorizado de tu cuenta.</li>
            <li>Una persona o empresa no puede mantener múltiples cuentas gratuitas.</li>
          </ul>

          <h2 id="planes">4. Planes y precios</h2>

          <p>Zora ofrece los siguientes planes:</p>

          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Precio</th>
                <th>Ciclo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starter</td>
                <td>Gratis</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Pro</td>
                <td>USD $19 / mes</td>
                <td>Mensual o anual (USD $182/año)</td>
              </tr>
              <tr>
                <td>Business</td>
                <td>USD $49 / mes</td>
                <td>Mensual o anual (USD $470/año)</td>
              </tr>
            </tbody>
          </table>

          <p>
            Los precios se muestran sin IVA. El IVA aplicable (actualmente 15%
            en Ecuador) se añadirá en el momento del pago cuando corresponda
            según la normativa del SRI.
          </p>

          <p>
            Zora se reserva el derecho de modificar los precios con un preaviso
            mínimo de <strong>30 días</strong>. Si no aceptas el nuevo precio,
            podrás cancelar tu suscripción antes de que entre en vigor.
          </p>

          <h2 id="pago">5. Pago y facturación</h2>

          <ul>
            <li>El pago se realiza por adelantado, al inicio de cada ciclo.</li>
            <li>Aceptamos tarjeta (Visa, Mastercard, Amex) vía Stripe. El plan Business permite transferencia bancaria.</li>
            <li>Recibirás factura electrónica por email tras cada pago, conforme a los requisitos del SRI.</li>
            <li>Si un pago falla, reintentaremos durante 7 días antes de suspender la cuenta.</li>
          </ul>

          <h2 id="cancelacion">6. Cancelación y reembolsos</h2>

          <p>
            Puedes cancelar tu suscripción en cualquier momento desde tu panel.
            Al cancelar:
          </p>

          <ul>
            <li>Mantendrás acceso hasta el final del periodo ya pagado.</li>
            <li>Después, tu cuenta pasará al plan Starter gratuito.</li>
            <li>No se realizan reembolsos por periodos parciales, salvo en los 14 días posteriores a la primera contratación, conforme al derecho de reversión previsto en la Ley Orgánica de Defensa del Consumidor.</li>
            <li>Puedes exportar todos tus datos antes de cancelar.</li>
          </ul>

          <h2 id="uso">7. Uso aceptable</h2>

          <p>Te comprometes a NO usar Zora para:</p>

          <ul>
            <li>Actividades ilícitas, fraudulentas o contrarias a la ley.</li>
            <li>Almacenar contenido ilegal, difamatorio o que vulnere derechos de terceros.</li>
            <li>Intentar vulnerar la seguridad del Servicio o acceder a datos de otros usuarios.</li>
            <li>Automatizar accesos de manera abusiva (scraping, bots no autorizados).</li>
            <li>Revender el Servicio sin autorización expresa.</li>
            <li>Usar la IA para generar contenido malicioso o engañoso.</li>
            <li>Emitir facturas falsas o participar en esquemas de evasión tributaria.</li>
          </ul>

          <p>
            El incumplimiento puede conllevar la suspensión inmediata de la
            cuenta sin reembolso, y las acciones legales que correspondan.
          </p>

          <h2 id="propiedad">8. Propiedad intelectual</h2>

          <ul>
            <li>
              <strong>Software:</strong> Zora y todo su código, diseño, marcas y
              contenidos son propiedad exclusiva de [ZoraEC], protegidos
              por la Ley de Propiedad Intelectual del Ecuador.
            </li>
            <li>
              <strong>Tus datos:</strong> tú eres el único titular de los datos
              que subes. No los usamos para entrenar modelos de IA ni los
              cedemos a terceros.
            </li>
            <li>
              <strong>Licencia limitada:</strong> te otorgamos una licencia de
              uso no exclusiva, no transferible y revocable, limitada a la
              duración de tu suscripción.
            </li>
          </ul>

          <h2 id="garantias">9. Garantías y limitaciones de responsabilidad</h2>

          <p>
            Zora se presta <strong>"tal cual"</strong>, sin garantías explícitas
            o implícitas de comerciabilidad, idoneidad para un fin particular o
            ausencia de errores.
          </p>

          <p>
            Zora no será responsable de daños indirectos, lucro cesante, pérdida
            de datos o sanciones tributarias derivadas de un uso incorrecto del
            Servicio. Nuestra responsabilidad total se limita, en todo caso, al
            importe abonado por el usuario en los últimos 12 meses.
          </p>

          <h2 id="consumidor">10. Derechos del consumidor</h2>

          <p>
            Conforme a la <strong>Ley Orgánica de Defensa del Consumidor</strong>{' '}
            del Ecuador, el usuario que actúe como consumidor tiene derecho a:
          </p>

          <ul>
            <li>Información veraz, clara y suficiente sobre el Servicio.</li>
            <li>Reversión del contrato dentro de los 14 días posteriores a la compra (derecho de retractación), cuando aplique.</li>
            <li>Atención de quejas y reclamos en un plazo máximo de 15 días.</li>
            <li>Acudir a la Defensoría del Pueblo o a las autoridades de protección al consumidor.</li>
          </ul>

          <h2 id="modificaciones">11. Modificaciones</h2>

          <p>
            Podemos actualizar estas Condiciones. Te notificaremos cambios
            sustanciales con al menos 30 días de antelación por email. El uso
            continuado del Servicio tras la entrada en vigor implica su
            aceptación.
          </p>

          <h2 id="ley">12. Ley aplicable y jurisdicción</h2>

          <p>
            Estas Condiciones se rigen por la ley de la República del Ecuador.
            Para controversias, las partes se someten a los jueces y tribunales
            competentes del domicilio del usuario cuando actúe como consumidor,
            y a los de [PICHINCHA Y GUAYAS] en caso contrario.
          </p>

          <p>
            El usuario también puede acudir a la{' '}
            <strong>Defensoría del Pueblo del Ecuador</strong> o a los mecanismos
            de mediación previstos en la ley.
          </p>

          <hr />

          <p>
            Para cualquier duda, escribe a{' '}
            <a href="mailto:[zorapymes@zoraec.com]">[zorapymes@zoraec.com]</a>. Consulta también nuestra{' '}
            <Link href="/privacidad">política de privacidad</Link> y nuestra{' '}
            <Link href="/cookies">política de cookies</Link>.
          </p>
        </LegalLayout>
      </main>

      <Footer />
    </>
  )
}