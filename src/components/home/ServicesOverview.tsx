import Link from 'next/link'

const services = [
  {
    title: 'Cybersecurity Training',
    description:
      'Zero Trust, NIST CSF 2.0, SASE, Secure APIs, SOC development, and AI Governance — delivered by IBM-certified instructors with 25+ years of field experience.',
    href: '/training-courses#cybersecurity',
    icon: (
      <svg className="h-6 w-6 fill-blue-600" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Architecture',
    description:
      'TOGAF 10 foundation and practitioner workshops, Business Architecture, and Digital Transformation frameworks for technology leadership teams.',
    href: '/training-courses#enterprise-architecture',
    icon: (
      <svg className="h-6 w-6 fill-blue-600" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description:
      'Flexible consulting packages (15–45 hours) for AIX OS migration, application strategy, and IT infrastructure roadmap development.',
    href: '/consulting',
    icon: (
      <svg className="h-6 w-6 fill-blue-600" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-13H4c-1.1 0-2 .9-2 2v1h20V5c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
]

export function ServicesOverview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
          Our Services
        </p>
        <h2 className="text-3xl font-bold text-charcoal mb-12">
          Technology Training &amp; Consulting
          <br className="hidden sm:block" />
          for Pakistan&apos;s Enterprise Sector
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, href, icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded border border-grey-200 p-8 hover:border-blue-600 hover:shadow-sm transition-all"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-[#e8f0fb]">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-sm text-grey-400 leading-relaxed flex-1">
                {description}
              </p>
              <p className="mt-6 text-sm font-medium text-blue-600">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
