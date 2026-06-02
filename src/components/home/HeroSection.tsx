import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="w-full bg-navy-950">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-5">
              Est. Karachi, 1991 — IBM Certified Instructors
            </p>

            {/* Headline */}
            <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white lg:text-[56px]">
              Pakistan&apos;s Most Trusted{' '}
              <span className="text-blue-600">Enterprise IT</span>{' '}
              Training Firm
            </h1>

            {/* Subline */}
            <p className="mt-5 text-lg leading-relaxed text-white/65 max-w-lg">
              30+ years delivering cybersecurity, enterprise architecture, and
              digital transformation workshops to 100+ of Pakistan&apos;s
              leading organisations.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/training-courses">View Our Courses</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/contact">Enquire Now</Link>
              </Button>
            </div>
          </div>

          {/* Image placeholder — replaced in Story 2.3 with real photography */}
          <div
            className="hidden lg:flex items-center justify-center rounded border border-white/10 bg-navy-800 h-80"
            aria-hidden="true"
          >
            <p className="text-sm text-white/25">Professional photography — Story 2.3</p>
          </div>
        </div>
      </div>
    </section>
  )
}
