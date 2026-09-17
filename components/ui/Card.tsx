// components/ui/Card.tsx
import { cn } from '@/lib/cn'

type Variant = 'default' | 'featured' | 'ai'

interface CardProps {
  variant?: Variant
  as?: 'div' | 'article' | 'li'
  className?: string
  children: React.ReactNode
  hoverable?: boolean
}

const variantMap: Record<Variant, string> = {
  default:  'bg-surface border border-border',
  featured: 'bg-surface border-2 border-primary shadow-glow',
  ai:       'bg-surface border border-ai/60 shadow-glow-ai',
}

export function Card({
  variant = 'default',
  as: Tag = 'div',
  className,
  children,
  hoverable = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-md p-6 transition-all duration-200',
        variantMap[variant],
        hoverable && 'hover:-translate-y-0.5 hover:shadow-md',
        className
      )}
    >
      {children}
    </Tag>
  )
}