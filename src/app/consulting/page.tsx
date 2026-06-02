import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `IT Consulting | ${siteConfig.shortName}`,
  description:
    'TLC IT consulting services for enterprise organisations — Flex IT advisory packages, AIX OS migration consulting, and application strategy. Expert guidance for IT executives managing budget constraints and technology roadmaps.',
  openGraph: {
    title: `IT Consulting | ${siteConfig.shortName}`,
    description:
      'Expert IT consulting from TLC — flexible advisory packages, IBM Power Systems migration, and application consulting for Pakistan\'s enterprise sector.',
    url: `${siteConfig.url}/consulting`,
    siteName: siteConfig.name,
  },
}

const services = [
  {
    code: 'CS315',
    title: 'TLC Flex IT Consulting',
    tagline: 'On-demand expert advisory for your IT leadership team',
    description:
      'The TLC Flex IT Consulting service provides your organisation with access to senior technology expertise on a flexible, retainer basis. Our consultants function as an external advisory resource for your Technical Review Committee — providing independent expert opinions on technology infrastructure decisions, vendor evaluations, and strategic IT planning.',
    packages: [
      { label: 'Flex 15', detail: '15 hours of monthly consulting services' },
      { label: 'Flex 30', detail: '30 hours of quarterly services' },
      { label: 'Extended 45', detail: '45 hours of quarterly services' },
    ],
    audience: 'IT Directors, CTOs, and CIOs managing technology investment decisions',
    outcomes: [
      'Independent validation of technology infrastructure decisions',
      'Expert input on vendor selection and procurement',
      'Budget optimisation through asset leverage strategies',
      'Alignment of IT infrastructure with business priorities',
    ],
  },
  {
    code: 'CS305',
    title: 'AIX OS Migration Consulting',
    tagline: 'Expert guidance for IBM Power Systems migrations',
    description:
      'Migrating IBM AIX operating systems requires specialised expertise that bridges the gap between your internal team and IBM vendor knowledge. TLC provides dedicated migration consulting that addresses application compatibility challenges, system consistency issues, and operational continuity — before your migration begins, not after problems emerge.',
    packages: null,
    audience: 'IT teams managing IBM Power Server environments and AIX OS upgrades',
    outcomes: [
      'Pre-migration application compatibility assessment',
      'Risk identification and mitigation planning',
      'Knowledge transfer from IBM vendor expertise to your team',
      'System consistency validation prior to cutover',
    ],
  },
  {
    code: 'CS306',
    title: 'Application Consulting Services',
    tagline: 'Strategic guidance for software technology roadmaps',
    description:
      'TLC Application Consulting helps organisations build coherent software technology roadmaps and supports application development efforts across the full lifecycle. Whether you are evaluating vendors, optimising existing applications, migrating to newer versions, or reducing project CAPEX — our consultants bring the independence and expertise your decisions require.',
    packages: null,
    audience: 'IT Managers, Application Architects, and Development Teams',
    outcomes: [
      'Structured software technology roadmap development',
      'Vendor evaluation and selection frameworks',
      'Software lifecycle management strategy',
      'Development toolchain optimisation',
      'CAPEX reduction through informed technology choices',
    ],
  },
]

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="IT Consulting"
        subtitle="Strategic technology advisory for Pakistan's enterprise sector. We help IT executives align investments with business priorities, navigate complex migrations, and build coherent technology roadmaps."
      />

      {/* Services */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 space-y-16">
          {services.map(({ code, title, tagline, description, packages, audience, outcomes }, i) => (
            <article
              key={code}
              className={`grid grid-cols-1 gap-10 lg:grid-cols-5 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Content — 3 cols */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-grey-400 border border-grey-200 rounded px-2 py-0.5">
                    {code}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">{title}</h2>
                <p className="text-base font-medium text-blue-600 mb-4">{tagline}</p>
                <p className="text-base text-grey-400 leading-relaxed">{description}</p>

                {/* Packages */}
                {packages && (
                  <div className="mt-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-3">
                      Available Packages
                    </p>
                    <div className="flex flex-col gap-2">
                      {packages.map(({ label, detail }) => (
                        <div key={label} className="flex items-start gap-3">
                          <span className="mt-0.5 h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                            ✓
                          </span>
                          <span className="text-sm text-grey-400">
                            <strong className="text-charcoal">{label}</strong> — {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Detail panel — 2 cols */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="rounded border border-grey-200 bg-grey-50 p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-3">
                    Best Suited For
                  </p>
                  <p className="text-sm text-grey-400">{audience}</p>
                </div>
                <div className="rounded border border-grey-200 bg-grey-50 p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-3">
                    Key Outcomes
                  </p>
                  <ul className="space-y-2">
                    {outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-grey-400">
                        <span className="mt-0.5 text-blue-600 shrink-0">→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider between services */}
              {i < services.length - 1 && (
                <div className="lg:col-span-5 border-b border-grey-200" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Discuss your consulting requirements
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Write to us and a consultant will respond within one business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
