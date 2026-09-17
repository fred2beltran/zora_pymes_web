// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { url: '/',              priority: 1.0, changeFrequency: 'weekly'  },
    { url: '/producto',      priority: 0.9, changeFrequency: 'monthly' },
    { url: '/precios',       priority: 0.9, changeFrequency: 'monthly' },
    { url: '/copiloto-ia',   priority: 0.9, changeFrequency: 'monthly' },
    { url: '/registro',      priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog',          priority: 0.7, changeFrequency: 'weekly'  },
    { url: '/ayuda',         priority: 0.6, changeFrequency: 'monthly' },
    { url: '/sobre',         priority: 0.5, changeFrequency: 'yearly'  },
    { url: '/contacto',      priority: 0.5, changeFrequency: 'yearly'  },
    { url: '/legal',         priority: 0.3, changeFrequency: 'yearly'  },
    { url: '/privacidad',    priority: 0.3, changeFrequency: 'yearly'  },
    { url: '/cookies',       priority: 0.3, changeFrequency: 'yearly'  },
    { url: '/terminos',      priority: 0.3, changeFrequency: 'yearly'  },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}