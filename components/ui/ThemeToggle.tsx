// components/ui/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { events } from '@/lib/analytics'
import { cn } from '@/lib/cn'

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const handleToggle = () => {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    events.themeToggle(next)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={cn(
        'relative inline-flex h-10 w-[68px] shrink-0 items-center rounded-full',
        'border border-line bg-surface p-1',
        'transition-colors hover:border-primary/60'
      )}
    >
      {/* Slider */}
      <span
        aria-hidden
        className={cn(
          'absolute left-1 top-1 h-8 w-8 rounded-full bg-primary',
          'transition-transform duration-300 ease-out',
          isDark && 'translate-x-[28px]'
        )}
      />

      {/* Iconos */}
      <span
        className={cn(
          'relative z-10 flex h-8 w-8 items-center justify-center transition-colors',
          !isDark ? 'text-[#101716]' : 'text-muted'
        )}
      >
        <SunIcon className="h-4 w-4" />
      </span>
      <span
        className={cn(
         'relative z-10 flex h-8 w-8 items-center justify-center transition-colors',
          isDark ? 'text-[#101716]' : 'text-muted'
        )}
      >
        <MoonIcon className="h-4 w-4" />
      </span>
    </button>
  )
}