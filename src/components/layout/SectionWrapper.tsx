import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'muted' | 'dark'
  as?: React.ElementType
}

export function SectionWrapper({
  children,
  className,
  variant = 'light',
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      className={cn(
        'w-full',
        variant === 'light' && 'bg-white',
        variant === 'muted' && 'bg-grey-50',
        variant === 'dark' && 'bg-navy-950',
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-20">
        {children}
      </div>
    </Tag>
  )
}
