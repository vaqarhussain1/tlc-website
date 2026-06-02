import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `About TLC | ${siteConfig.shortName}`,
  description:
    'TLC has been Pakistan\'s premier enterprise IT training and consulting firm since 1991. IBM-certified instructors, 30+ years of experience, 100+ enterprise clients across banking, energy, government, and telecommunications.',
  openGraph: {
    title: `About TLC | ${siteConfig.shortName}`,
    description:
      'Established in Karachi in 1991, TLC delivers cybersecurity, enterprise architecture, and digital transformation workshops to Pakistan\'s leading organisations.',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
  },
}

const values = [
  {
    name: 'Respect',
    description:
      'We treat every individual — client, participant, and colleague — with dignity and genuine consideration. Mutual respect is the foundation of every engagement we undertake.',
  },
  {
    name: 'Integrity',
    description:
      'We act with honesty and transparency in all our endeavours. Our clients trust us because we deliver what we promise and stand behind the quality of our work.',
  },
  {
    name: 'Commitment',
    description:
      'We are committed to our clients\' success above all else. Every workshop, every consulting engagement, and every interaction is guided by a customer-centric approach.',
  },
  {
    name: 'Eminence',
    description:
      'We strive for excellence that exceeds expectations. Our instructors, our content, and our delivery standards are held to the highest bar in enterprise professional development.',
  },
]

const certifications = [
  { name: 'IBM', detail: 'IBM Certified Instructors — Power Systems, Storage, AIX' },
  { name: 'The Open Group', detail: 'TOGAF Certified — Enterprise Architecture' },
  { name: 'SNIA', detail: 'Storage Networking Industry Association' },
  { name: 'VMware', detail: 'Virtualisation & Cloud Infrastructure' },
  { name: 'ITIL', detail: 'IT Infrastructure Library — Service Management' },
  { name: 'ISO/IEC', detail: 'ISO/IEC 42001 AI Governance' },
  { name: 'NetApp', detail: 'Data Management & Storage Solutions' },
  { name: 'Microsoft', detail: 'Microsoft Technology Certifications' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About TLC"
        subtitle="Transformation Learning and Consulting — Pakistan's premier enterprise IT training and consulting firm, established in Karachi in 1991."
      />

      {/* Company history */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
                Our History
              </p>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                30+ Years of Enterprise Excellence
              </h2>
              <div className="space-y-4 text-base text-grey-400 leading-relaxed">
                <p>
                  TLC was established in Karachi in 1991 with a singular mission: to deliver
                  world-class enterprise technology training and consulting services to
                  Pakistan&apos;s leading organisations. Over three decades, we have built a
                  reputation for rigour, relevance, and results.
                </p>
                <p>
                  Our instructors bring an average of 25+ years of career experience in
                  enterprise technology — not academic theory, but field-tested expertise
                  earned working alongside the teams that build and secure Pakistan&apos;s
                  critical infrastructure.
                </p>
                <p>
                  Today, TLC is the trusted training and consulting partner for 100+
                  organisations across banking, telecommunications, energy, government,
                  pharmaceuticals, and manufacturing — including the State Bank of Pakistan,
                  Pakistan Stock Exchange, National Bank of Pakistan, Bank Alfalah, and
                  DP World.
                </p>
              </div>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '1991', label: 'Founded in Karachi' },
                { value: '30+', label: 'Years in Operation' },
                { value: '100+', label: 'Enterprise Clients' },
                { value: '10', label: 'IBM Redbooks Authored' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col rounded border border-grey-200 bg-grey-50 p-6"
                >
                  <span className="text-4xl font-bold text-charcoal">{value}</span>
                  <span className="mt-2 text-sm text-grey-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate values */}
      <section className="w-full bg-grey-50 border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
            Our Values
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            The Principles We Work By
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map(({ name, description }) => (
              <div
                key={name}
                className="rounded border border-grey-200 bg-white p-7"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-3">{name}</h3>
                <p className="text-sm text-grey-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor credentials */}
      <section className="w-full bg-white border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
            Instructor Credentials
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Certified. Experienced. Authoritative.
          </h2>
          <p className="text-base text-grey-400 leading-relaxed max-w-2xl mb-10">
            TLC instructors hold vendor certifications from the industry&apos;s most
            rigorous authorities. One of our senior instructors co-authored{' '}
            <strong className="text-charcoal">ten IBM Redbooks</strong> at IBM&apos;s
            International Technical Support Organisation — one of the highest
            recognitions of technical expertise in the IBM ecosystem.
          </p>

          {/* IBM Redbooks highlight */}
          <div className="mb-10 rounded border-l-4 border-blue-600 bg-[#e8f0fb] px-6 py-5">
            <p className="text-sm font-semibold text-charcoal">
              IBM Redbooks Author
            </p>
            <p className="mt-1 text-sm text-grey-400">
              Our lead instructor contributed to ten IBM Redbooks at the IBM International
              Technical Support Organisation — the authoritative reference publications used
              by IBM engineers and clients worldwide.
            </p>
          </div>

          {/* Certification grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {certifications.map(({ name, detail }) => (
              <div
                key={name}
                className="rounded border border-grey-200 bg-grey-50 p-5"
              >
                <p className="text-base font-bold text-charcoal">{name}</p>
                <p className="mt-1 text-xs text-grey-400 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to elevate your team&apos;s capabilities?
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Browse our course catalogue or contact us to discuss a bespoke training programme.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="/training-courses"
                className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                View Courses
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3 text-sm font-medium text-white/80 hover:border-white/60 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
