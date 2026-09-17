// app/login/LoginForm.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const loginSchema = z.object({
  email: z.string().min(1, 'Email obligatorio').email('Email no válido'),
  password: z.string().min(1, 'Contraseña obligatoria'),
  remember: z.boolean().optional(),
})

type LoginInput = z.infer<typeof loginSchema>

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export function LoginForm() {
  const [showPwd, setShowPwd] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: false },
  })

  async function onSubmit(data: LoginInput) {
    setServerError(null)
    // Simulación: aquí iría tu API real
    await new Promise((r) => setTimeout(r, 1000))

    // Demo: considera error si el email no incluye "@zora"
    if (!data.email.includes('@')) {
      setServerError('Email o contraseña incorrectos')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-3xl text-success">
          ✓
        </div>
        <h1 className="mt-6 text-2xl font-bold">Bienvenida de nuevo</h1>
        <p className="mt-3 max-w-sm text-sm text-muted text-pretty">
          Te estamos redirigiendo a tu panel. (Demo — en producción, aquí
          cargaría tu dashboard.)
        </p>
        <Button as="link" href="/" variant="secondary" size="md" className="mt-8">
          Volver al inicio
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5" noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Contraseña"
        type={showPwd ? 'text' : 'password'}
        placeholder="Tu contraseña"
        autoComplete="current-password"
        error={errors.password?.message}
        trailing={
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            aria-label={showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            className="text-muted transition-colors hover:text-fg"
          >
            <EyeIcon open={showPwd} />
          </button>
        }
        {...register('password')}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-sm border-line bg-surface text-primary focus:ring-2 focus:ring-primary/30"
            {...register('remember')}
          />
          <span>Recordarme</span>
        </label>
        <Link
          href="#"
          className="text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      {serverError && (
        <div
          role="alert"
          className="rounded-md border border-error/40 bg-error/10 px-4 py-3 text-sm text-error"
        >
          {serverError}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Entrando…' : 'Iniciar sesión'}
      </Button>
    </form>
  )
}