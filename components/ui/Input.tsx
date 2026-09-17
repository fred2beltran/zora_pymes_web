// components/ui/Input.tsx
import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  trailing?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { label, error, hint, trailing, className, id, ...rest },
    ref
  ) {
    const inputId = id ?? rest.name
    const hasError = Boolean(error)

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-fg"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError || undefined}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              'h-11 w-full rounded-md border bg-surface px-4 text-md text-fg',
              'placeholder:text-muted/70',
              'transition-colors outline-none',
              'focus:border-primary focus:ring-2 focus:ring-primary/20',
              'disabled:opacity-50 disabled:pointer-events-none',
              trailing && 'pr-12',
              hasError
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-line',
              className
            )}
            {...rest}
          />
          {trailing && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {trailing}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="mt-1.5 text-xs text-error"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-muted">
            {hint}
          </p>
        )}
      </div>
    )
  }
)