// lib/structured-data.ts
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SOCIAL, CONTACT_EMAIL } from '@/lib/site'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [SOCIAL.linkedin, SOCIAL.x, SOCIAL.instagram, SOCIAL.youtube],
  }
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Plan gratuito para empezar a ordenarte',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '19',
        priceCurrency: 'EUR',
        description: 'Copiloto IA, facturas ilimitadas y recordatorios de plazos',
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '49',
        priceCurrency: 'EUR',
        description: 'Multi-empresa, API y asesor contable humano',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '1200',
    },
  }
}

export function faqSchema() {
  const faqs = [
    {
      q: '¿Necesito saber contabilidad para usar Zora?',
      a: 'No. Zora traduce todo a lenguaje humano. Y si tienes dudas, el Copiloto IA te responde paso a paso.',
    },
    {
      q: '¿Es seguro conectar mi banco?',
      a: 'Sí. Usamos cifrado bancario (AES-256) y cumplimos el RGPD. Zora solo lee, nunca mueve dinero.',
    },
    {
      q: '¿Puedo cancelar cuando quiera?',
      a: 'Sí. Sin permanencia. Cancelas en 1 clic desde tu panel. Y te llevas tus datos exportados.',
    },
    {
      q: '¿Sirve para mi tipo de negocio?',
      a: 'Zora funciona para autónomos, pymes, tiendas online, agencias, freelancers y SaaS. Si facturas, Zora te sirve.',
    },
    {
      q: '¿Qué pasa cuando termine la prueba gratis?',
      a: 'Nada. No pedimos tarjeta al registrarte. Si te gusta, eliges plan. Si no, tu cuenta queda en Starter gratis.',
    },
    {
      q: '¿Puedo hablar con un contador humano?',
      a: 'Sí, en el plan Business tienes asesor contable humano incluido. En otros planes, el Copiloto IA resuelve el 90% de dudas.',
    },
    {
      q: '¿Zora emite facturas por mí?',
      a: 'Sí. Puedes crear y enviar facturas directamente desde Zora. Con tu logo y datos fiscales.',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}