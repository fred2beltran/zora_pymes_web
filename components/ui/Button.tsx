// components/ui/Button.tsx
import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps {
  as?: 'button'
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonAsLink extends BaseProps {
  as: 'link'
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  type?: never
  disabled?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantMap: Record<Variant, string> = {
  primary:
    'bg-primary text-[#101716] hover:bg-primary-hover active:bg-primary-deep font-semibold',
  secondary:
    'bg-transparent text-fg border border-line hover:border-primary hover:text-primary',
  ghost:
    'bg-transparent text-primary hover:text-primary-hover hover:underline underline-offset-4',
}

const sizeMap: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-sm',
  md: 'h-11 px-6 text-md rounded-md',
  lg: 'h-14 px-8 text-lg rounded-md',
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 ' +
  'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = 'primary', size = 'md', className, children } = props

    const classes = cn(base, variantMap[variant], sizeMap[size], className)

    if (props.as === 'link') {
      return (
        <Link
          href={props.href}
          onClick={props.onClick}
          className={classes}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        type={props.type ?? 'button'}
        onClick={props.onClick}
        disabled={props.disabled}
        className={classes}
      >
        {children}
      </button>
    )
  }
)