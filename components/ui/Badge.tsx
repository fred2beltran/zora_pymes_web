// components/ui/Badge.tsx
import { cn } from '@/lib/cn'

type StateVariant =
  | 'completed'
  | 'pending'
  | 'in-progress'
  | 'cancelled'
  | 'ai'
  | 'primary'
  | 'new'

interface BadgeProps {
  variant?: StateVariant
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

const variantMap: Record<StateVariant, string> = {
  completed:     'bg-[#1E3B33] text-[#82C985]',
  pending:       'bg-[#3A2E14] text-[#E5B454]',
  'in-progress': 'bg-[#1E3140] text-[#72B7D9]',
  cancelled:     'bg-[#3A1B1D] text-[#EF767A]',
  ai:            'bg-[#2A2340] text-[#E7E1FF] ring-1 ring-ai/40',
  primary:       'bg-primary/15 text-primary ring-1 ring-primary/30',
  new:           'bg-grad-ai text-[#101716] font-semibold',
}

export function Badge({
  variant = 'primary',
  icon,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
        variantMap[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  )
}