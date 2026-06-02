import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn('w-full bg-navy-950 py-16 lg:py-20', className)}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/65 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
