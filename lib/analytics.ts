// lib/analytics.ts
import { track } from '@vercel/analytics'

/**
 * Eventos custom de Zora Pymes
 * Naming convention: snake_case, verbo en presente + contexto
 */
export const events = {
  // CTAs
  ctaClick: (location: string) =>
    track('cta_click', { location }),

  // Pricing
  planSelect: (plan: string, cycle: 'monthly' | 'yearly') =>
    track('plan_select', { plan, cycle }),

  cycleToggle: (cycle: 'monthly' | 'yearly') =>
    track('cycle_toggle', { cycle }),

  // Registro
  registerStart: () =>
    track('register_start'),

  registerSubmit: (businessType: string) =>
    track('register_submit', { business_type: businessType }),

  registerSuccess: (businessType: string) =>
    track('register_success', { business_type: businessType }),

  registerError: (reason: string) =>
    track('register_error', { reason }),

  // FAQ
  faqOpen: (question: string, page: string) =>
    track('faq_open', { question, page }),

  // Tema
  themeToggle: (theme: 'light' | 'dark') =>
    track('theme_toggle', { theme }),

  // Nav
  navClick: (label: string) =>
    track('nav_click', { label }),

  // Outbound
  outboundClick: (url: string) =>
    track('outbound_click', { url }),
} as const