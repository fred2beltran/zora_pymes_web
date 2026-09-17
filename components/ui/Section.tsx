// components/ui/Section.tsx
import { cn } from '@/lib/cn'

type SectionBg = 'default' | 'surface' | 'gradient' | 'none'

interface SectionProps {
  id?: string
  bg?: SectionBg
  fullWidth?: boolean
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

const bgMap: Record<SectionBg, string> = {
  default:  'bg-bg',
  surface:  'bg-surface',
  gradient: 'bg-grad-primary text-[#101716]',
  none:     '',
}

export function Section({
  id,
  bg = 'default',
  fullWidth = false,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', bgMap[bg], className)}>
      {fullWidth ? (
        children
      ) : (
        <div className={cn('mx-auto w-full max-w-7xl px-6 md:px-8', containerClassName)}>
          {children}
        </div>
      )}
    </section>
  )
}