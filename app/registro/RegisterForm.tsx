// app/registro/RegisterForm.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { registerSchema, passwordStrength, type RegisterInput } from '@/lib/validations'
import { registerAction } from './actions'
import { cn } from '@/lib/cn'
import { events } from '@/lib/analytics'




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

const STRENGTH_LABELS = ['Muy débil', 'Débil', 'Aceptable', 'Buena', 'Excelente']
const STRENGTH_COLORS = [
  'bg-error',
  'bg-error',
  'bg-warning',
  'bg-success',
  'bg-success',
]

export function RegisterForm() {
  const [showPwd, setShowPwd] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      businessType: 'pyme',
      terms: false,
    },
  })

  const passwordValue = watch('password') ?? ''
  const strength = passwordStrength(passwordValue)

  async function onSubmit(data: RegisterInput) {
    setServerError(null)
    events.registerSubmit(data.businessType)

    const result = await registerAction(data)
    if (result.success) {
      events.registerSuccess(data.businessType)
      setSubmitted(true)
    } else {
      events.registerError(result.error)
      setServerError(result.error)
    }
  }

  // Pantalla de éxito
  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-3xl text-success">
          ✓
        </div>
        <h1 className="mt-6 text-2xl font-bold">¡Cuenta creada!</h1>
        <p className="mt-3 max-w-sm text-sm text-muted text-pretty">
          Te enviamos un email para confirmar tu cuenta. Ábrelo y empieza a usar
          Zora en menos de 2 minutos.
        </p>
        <Button as="link" href="/" variant="secondary" size="md" className="mt-8">
          Volver al inicio
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
     className="w-full space-y-5" 
     noValidate
    >
      <Input
        label="Nombre completo"
        type="text"
        placeholder="María García"
        autoComplete="name"
        error={errors.name?.message}
        onFocus={() => events.registerStart()}
        {...register('name')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="maria@minegocio.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <div>
        <Input
          label="Contraseña"
          type={showPwd ? 'text' : 'password'}
          placeholder="Mínimo 8 caracteres"
          autoComplete="new-password"
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

        {/* Medidor de fuerza */}
        {passwordValue && (
          <div className="mt-2">
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1 flex-1 rounded-full transition-colors',
                    i < strength ? STRENGTH_COLORS[strength] : 'bg-line'
                  )}
                />
              ))}
            </div>
            <p className="mt-1.5 text-xs text-muted">
              Seguridad: <span className="text-fg font-medium">{STRENGTH_LABELS[strength]}</span>
            </p>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-fg">
          Tipo de negocio
        </label>
        <select
          id="businessType"
          className={cn(
            'h-11 w-full rounded-md border border-line bg-surface px-4 text-md text-fg',
            'outline-none transition-colors',
            'focus:border-primary focus:ring-2 focus:ring-primary/20',
            errors.businessType && 'border-error'
          )}
          {...register('businessType')}
        >
          <option value="autonomo">Autónomo/a</option>
          <option value="pyme">Pyme</option>
          <option value="freelance">Freelance</option>
          <option value="otro">Otro</option>
        </select>
        {errors.businessType && (
          <p className="mt-1.5 text-xs text-error">{errors.businessType.message}</p>
        )}
      </div>

      {/* Términos */}
      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-line bg-surface text-primary focus:ring-2 focus:ring-primary/30"
          {...register('terms')}
        />
        <span className="text-muted">
          Acepto los{' '}
          <Link href="/terminos" className="text-primary hover:underline underline-offset-4">
            Términos
          </Link>{' '}
          y la{' '}
          <Link href="/privacidad" className="text-primary hover:underline underline-offset-4">
            Política de privacidad
          </Link>
          .
        </span>
      </label>
      {errors.terms && (
        <p className="text-xs text-error">{errors.terms.message}</p>
      )}

      {/* Error del servidor */}
      {serverError && (
        <div
          role="alert"
          className="rounded-md border border-error/40 bg-error/10 px-4 py-3 text-sm text-error"
        >
          {serverError}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Creando tu cuenta…' : 'Crear cuenta gratis'}
      </Button>

      <p className="text-center text-xs text-muted">
        Sin tarjeta · Configúralo en 5 minutos · Cancela cuando quieras
      </p>
    </form>
  )
}

