// app/legal/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description:
    'Información legal de Zora Pymes conforme a la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos de Ecuador.',
  alternates: { canonical: `${SITE_URL}/legal` },
  robots: { index: true, follow: true },
}

const sections = [
  { id: 'titular',      title: 'Titular del sitio' },
  { id: 'objeto',       title: 'Objeto' },
  { id: 'condiciones',  title: 'Condiciones de uso' },
  { id: 'propiedad',    title: 'Propiedad intelectual' },
  { id: 'responsabilidad', title: 'Responsabilidad' },
  { id: 'enlaces',      title: 'Enlaces externos' },
  { id: 'ley',          title: 'Legislación aplicable' },
]

export default function LegalPage() {
  return (
    <>
      <Navbar />

      <main>
        <LegalLayout
          title="Aviso legal"
          description="Información legal sobre la titularidad de este sitio web y las condiciones de uso, conforme a la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos de la República del Ecuador."
          lastUpdate="18 de septiembre de 2026"
          sections={sections}
        >
          <h2 id="titular">1. Titular del sitio</h2>

          <p>
            En cumplimiento de la <strong>Ley de Comercio Electrónico, Firmas
            Electrónicas y Mensajes de Datos</strong> y demás normativa aplicable
            en la República del Ecuador, se informa:
          </p>

          <ul>
            <li><strong>Denominación:</strong> ZoraEC</li>
            <li><strong>RUC:</strong> 1719393553001</li>
            <li><strong>Domicilio fiscal:</strong> PICHINCHA Y GUAYAS </li>
            <li><strong>Correo electrónico:</strong> zorapymes@zoraec.com</li>
            <li><strong>Dominio web:</strong> zorapymes.com</li>
          </ul>

          <h2 id="objeto">2. Objeto</h2>

          <p>
            El presente aviso legal regula el uso del sitio web{' '}
            <strong>zorapymes.com</strong> (en adelante, «el Sitio»), del que es
            titular [ZoraEC]. La navegación por el Sitio atribuye la
            condición de usuario e implica la aceptación plena de las
            condiciones aquí publicadas.
          </p>

          <p>
            Zora es una plataforma de <strong>software como servicio (SaaS)</strong>{' '}
            para la gestión contable de pequeñas y medianas empresas (pymes),
            emprendedores y personas naturales obligadas a llevar contabilidad.
          </p>

          <h2 id="condiciones">3. Condiciones de uso</h2>

          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos
            y servicios del Sitio, y a no emplearlos para:
          </p>

          <ul>
            <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe.</li>
            <li>Difundir contenidos de carácter racista, xenófobo, discriminatorio o que atente contra los derechos humanos.</li>
            <li>Provocar daños en los sistemas físicos o lógicos del titular, sus proveedores o terceros.</li>
            <li>Introducir o difundir virus informáticos o cualquier otro sistema que pueda causar daños.</li>
            <li>Intentar acceder, utilizar o manipular los datos del titular, terceros o de otros usuarios.</li>
            <li>Suplantar la identidad de otras personas o empresas.</li>
          </ul>

          <h2 id="propiedad">4. Propiedad intelectual e industrial</h2>

          <p>
            Todos los contenidos del Sitio (textos, imágenes, marcas, logotipos,
            código fuente, diseño gráfico, estructura de navegación, bases de
            datos, etc.) son titularidad de [ZoraEC] o de terceros que han
            autorizado su uso, y están protegidos por la{' '}
            <strong>Ley de Propiedad Intelectual</strong> y la{' '}
            <strong>Ley de Propiedad Industrial</strong> del Ecuador, así como
            por los tratados internacionales aplicables.
          </p>

          <p>
            Queda expresamente prohibida la reproducción, distribución,
            comunicación pública, transformación o cualquier otra forma de
            explotación, total o parcial, sin autorización expresa y por escrito
            del titular.
          </p>

          <h2 id="responsabilidad">5. Responsabilidad</h2>

          <p>
            [ZoraEC] no se hace responsable de los daños y perjuicios de
            cualquier naturaleza que pudieran derivarse de:
          </p>

          <ul>
            <li>Errores u omisiones en los contenidos.</li>
            <li>Falta de disponibilidad del Sitio o fallos técnicos puntuales.</li>
            <li>Actuaciones de terceros que vulneren derechos de propiedad intelectual, secretos empresariales, derecho al honor, intimidad personal o familiar, propia imagen o protección de datos.</li>
            <li>Uso ilícito o negligente del Sitio por parte del usuario.</li>
            <li>Decisiones contables, fiscales o legales tomadas por el usuario basándose únicamente en la información mostrada por el Sitio.</li>
          </ul>

          <p>
            <strong>Importante:</strong> Zora es una herramienta tecnológica de
            apoyo. <strong>No sustituye el asesoramiento profesional</strong> de
            un contador público autorizado, un auditor o un abogado tributarista.
          </p>

          <h2 id="enlaces">6. Enlaces externos</h2>

          <p>
            El Sitio puede contener enlaces a páginas de terceros. [ZoraEC]
            no se hace responsable del contenido, políticas de privacidad o
            prácticas de dichos sitios. La inclusión de un enlace no implica
            aprobación o respaldo de su contenido.
          </p>

          <h2 id="ley">7. Legislación aplicable y jurisdicción</h2>

          <p>
            La relación entre [ZoraEC] y el usuario se regirá por la
            normativa vigente en la República del Ecuador, en particular:
          </p>

          <ul>
            <li>Constitución de la República del Ecuador.</li>
            <li>Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos.</li>
            <li>Ley Orgánica de Defensa del Consumidor.</li>
            <li>Ley Orgánica de Protección de Datos Personales (LOPDP).</li>
            <li>Código de Comercio Ecuatoriano.</li>
            <li>Código Tributario y normativa del Servicio de Rentas Internas (SRI).</li>
          </ul>

          <p>
            Para la resolución de cualquier controversia, ambas partes se someten
            a los jueces y tribunales competentes del domicilio del usuario
            cuando este actúe como consumidor, y a los de [DIRECCIÓN FISCAL] en
            caso contrario. Cuando el usuario actúe como consumidor, podrá
            acudir a la <strong>Defensoría del Pueblo</strong> o a los
            mecanismos de mediación previstos en la ley.
          </p>

          <hr />

          <p>
            Para cualquier duda sobre este aviso legal, escribe a{' '}
            <a href="mailto:[EMAIL]">[zorapymes@zoraec.com]</a>.
          </p>
        </LegalLayout>
      </main>

      <Footer />
    </>
  )
}