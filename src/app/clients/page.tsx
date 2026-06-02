import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { TestimonialCard } from '@/components/clients/TestimonialCard'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Clients | ${siteConfig.shortName}`,
  description:
    '100+ enterprise organisations across Pakistan trust TLC for cybersecurity, enterprise architecture, and IT training. Clients include State Bank of Pakistan, Pakistan Stock Exchange, National Bank, Bank Alfalah, DP World, and more.',
  openGraph: {
    title: `Clients | ${siteConfig.shortName}`,
    description:
      'Trusted by Pakistan\'s leading banks, government institutions, energy companies, and multinationals for enterprise IT training and consulting.',
    url: `${siteConfig.url}/clients`,
    siteName: siteConfig.name,
  },
}

const clients = [
  { name: 'State Bank of Pakistan', sector: 'Government / Banking' },
  { name: 'Pakistan Stock Exchange', sector: 'Finance' },
  { name: 'National Bank of Pakistan', sector: 'Banking' },
  { name: 'Bank Alfalah', sector: 'Banking' },
  { name: 'Bank AL-Habib', sector: 'Banking' },
  { name: 'United Bank Limited', sector: 'Banking' },
  { name: 'DP World', sector: 'Logistics' },
  { name: 'Engro Corporation', sector: 'Energy / Manufacturing' },
  { name: 'Pakistan Telecommunication Company', sector: 'Telecommunications' },
  { name: 'Oil & Gas Development Company', sector: 'Energy' },
  { name: 'Fauji Fertilizer Company', sector: 'Manufacturing' },
  { name: 'GlaxoSmithKline Pakistan', sector: 'Pharmaceuticals' },
  { name: 'Nestle Pakistan', sector: 'FMCG / Manufacturing' },
  { name: 'Unilever Pakistan', sector: 'FMCG' },
  { name: 'K-Electric', sector: 'Energy / Utilities' },
  { name: 'Pakistan Railways', sector: 'Government' },
  { name: 'Telenor Pakistan', sector: 'Telecommunications' },
  { name: 'Jazz (Veon)', sector: 'Telecommunications' },
]

const industries = [
  { name: 'Banking & Finance', icon: '🏦', description: 'Central banks, commercial banks, stock exchanges, and financial regulators' },
  { name: 'Telecommunications', icon: '📡', description: 'Major telecom operators and infrastructure providers' },
  { name: 'Energy & Utilities', icon: '⚡', description: 'Oil & gas, power generation, and utility companies' },
  { name: 'Government', icon: '🏛️', description: 'Federal institutions, regulators, and public sector enterprises' },
  { name: 'Pharmaceuticals', icon: '💊', description: 'Multinational and local pharmaceutical manufacturers' },
  { name: 'Manufacturing', icon: '🏭', description: 'FMCG, fertilizers, chemicals, and industrial manufacturers' },
]

const testimonials = [
  {
    quote: 'The Zero Trust Security workshop delivered by TLC was exactly what our security team needed. The content was current, practical, and directly applicable to our hybrid environment. The instructor\'s depth of knowledge and real-world examples made complex concepts accessible to our entire team.',
    name: 'Muhammad Asif Khan',
    title: 'Head of Information Security',
    organisation: 'A Leading Pakistani Bank',
    course: 'Zero Trust Security Implementation — TN280',
  },
  {
    quote: 'TLC\'s TOGAF Enterprise Architecture workshop transformed how our technology leadership approaches enterprise design. The structured methodology and hands-on exercises gave our architects a common language and framework that we now apply across all major initiatives.',
    name: 'Sana Mirza',
    title: 'Director of IT Architecture',
    organisation: 'A Telecommunications Company',
    course: 'TOGAF Enterprise Architecture Framework — TN212',
  },
  {
    quote: 'The Cybersecurity Risk Management Framework course gave our team a robust understanding of NIST CSF 2.0. TLC\'s instructors didn\'t just cover the theory — they walked us through practical implementation steps tailored to the Pakistani regulatory environment.',
    name: 'Kamran Iqbal',
    title: 'Chief Risk Officer',
    organisation: 'A Financial Institution',
    course: 'Cybersecurity Risk Management Framework — TN227',
  },
  {
    quote: 'We have been sending our IT managers to TLC workshops for several years. The consistency of quality, the relevance of content, and the professionalism of delivery has made TLC our preferred training partner for enterprise technology education.',
    name: 'Farrukh Ahmed',
    title: 'General Manager, Information Technology',
    organisation: 'An Energy Sector Company',
    course: 'Multiple Programmes',
  },
  {
    quote: 'The Executive Leadership Series on Strategic AI Governance was a revelation for our board-level technology discussions. TLC framed ISO/IEC 42001 in a way that was immediately actionable for senior leadership — not theoretical.',
    name: 'Dr. Ayesha Siddiqui',
    title: 'Chief Digital Officer',
    organisation: 'A Government Institution',
    course: 'Strategic Leadership in AI — TN490',
  },
  {
    quote: 'TLC\'s AIX consulting team helped us navigate a complex IBM Power Systems migration with minimal disruption to our operations. Their knowledge of application compatibility issues saved us from what would have been a costly rollback.',
    name: 'Tariq Mahmood',
    title: 'Senior System Administrator',
    organisation: 'A Manufacturing Conglomerate',
    course: 'AIX OS Migration Consulting — CS305',
  },
  {
    quote: 'The Decision Making and Business Analytics workshop was outstanding. Our leadership team came away with practical frameworks for data-driven decision making that we immediately applied to our quarterly planning cycle.',
    name: 'Nadia Hassan',
    title: 'VP Strategy & Planning',
    organisation: 'A Pharmaceutical Company',
    course: 'Decision Making & Business Analytics — TN216',
  },
  {
    quote: 'TLC delivered a customised TOGAF Business Architecture programme for our architecture team. The depth of knowledge, the quality of course materials, and the post-workshop support set TLC apart from any other training provider we have engaged.',
    name: 'Omar Farooq',
    title: 'Enterprise Architect',
    organisation: 'A Stock Exchange',
    course: 'Foundation of TOGAF Business Architecture — TN512',
  },
  {
    quote: 'Our cybersecurity team attended the Building Effective SOC workshop. TLC\'s approach of combining global best practices with local context was exactly what we needed to build a credible Security Operations Centre for our organisation.',
    name: 'Bilal Sheikh',
    title: 'CISO',
    organisation: 'A Commercial Bank',
    course: 'Building Effective Security Operations Centers — TN224',
  },
  {
    quote: 'The AI-Driven Business Resilience workshop gave our technology leadership team a clear roadmap for integrating AI into our business continuity and data protection strategy. Highly recommended for any enterprise navigating AI adoption.',
    name: 'Anum Qureshi',
    title: 'IT Manager',
    organisation: 'A Telecommunications Provider',
    course: 'AI-Driven Business Resilience — TN285',
  },
  {
    quote: 'We engaged TLC\'s Flex IT Consulting service to support our Technical Review Committee. The quality of advice, the speed of response, and the depth of expertise provided exceptional value — far exceeding what we expected from an external advisory arrangement.',
    name: 'Shahid Raza',
    title: 'Chief Information Officer',
    organisation: 'A Government-Owned Enterprise',
    course: 'TLC Flex IT Consulting — CS315',
  },
  {
    quote: 'TLC has been our go-to training partner for IBM systems education for over a decade. Their instructors\' hands-on experience with IBM Power and storage technologies is unmatched in Pakistan. We trust TLC to keep our teams at the leading edge.',
    name: 'Zeeshan Ali',
    title: 'Head of Infrastructure',
    organisation: 'An Industrial Group',
    course: 'IBM Systems & Storage Training',
  },
]

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="100+ of Pakistan's leading organisations across banking, energy, telecommunications, government, pharmaceuticals, and manufacturing trust TLC for enterprise IT training and consulting."
      />

      {/* Client grid */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
            Our Clients
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            Trusted by Pakistan&apos;s Leading Institutions
          </h2>
          <div className="flex flex-wrap gap-3">
            {clients.map(({ name, sector }) => (
              <div
                key={name}
                className="flex flex-col rounded border border-grey-200 bg-grey-50 px-4 py-3"
              >
                <span className="text-sm font-semibold text-charcoal">{name}</span>
                <span className="text-xs text-grey-400 mt-0.5">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="w-full bg-grey-50 border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
            Industries Served
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            Across Pakistan&apos;s Key Sectors
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon, description }) => (
              <div
                key={name}
                className="rounded border border-grey-200 bg-white p-6"
              >
                <p className="text-2xl mb-3" aria-hidden="true">{icon}</p>
                <h3 className="text-base font-bold text-charcoal">{name}</h3>
                <p className="mt-2 text-sm text-grey-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
            Client Feedback
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Join Pakistan&apos;s leading organisations
          </h3>
          <p className="mt-2 text-sm text-white/60 max-w-md mx-auto">
            Contact us to discuss training programmes, group rates, or onsite delivery for your organisation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
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
      </section>
    </>
  )
}
