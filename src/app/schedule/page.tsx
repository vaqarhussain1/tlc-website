import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { ScheduleTable } from '@/components/schedule/ScheduleTable'
import { JsonLd } from '@/components/shared/JsonLd'
import { siteConfig } from '@/lib/site-config'
import scheduleData from '@/data/schedule.json'
import type { ScheduleEntry } from '@/types/content'

export const metadata: Metadata = {
  title: `Course Schedule | ${siteConfig.shortName}`,
  description:
    'Upcoming TLC workshops in Karachi, Lahore, Islamabad, and Online. Cybersecurity, TOGAF, AI Governance and more — one complimentary seat per four paid registrations.',
  openGraph: {
    title: `Course Schedule | ${siteConfig.shortName}`,
    description: 'View upcoming TLC enterprise IT training workshops across Pakistan and online.',
    url: `${siteConfig.url}/schedule`,
    siteName: siteConfig.name,
  },
}

export default function SchedulePage() {
  const schedule = scheduleData as ScheduleEntry[]

  // Build JSON-LD array of CourseInstance for each entry
  const courseInstanceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': schedule.map((entry) => ({
      '@type': 'CourseInstance',
      name: entry.courseName,
      courseCode: entry.courseCode,
      startDate: entry.date,
      ...(entry.dateEnd ? { endDate: entry.dateEnd } : {}),
      location: {
        '@type': 'Place',
        name: entry.location,
        address: { '@type': 'PostalAddress', addressCountry: 'PK' },
      },
      organizer: {
        '@type': 'Organization',
        name: 'TLC — Transformation Learning and Consulting',
        url: siteConfig.url,
      },
    })),
  }

  return (
    <>
      <JsonLd data={courseInstanceJsonLd} />

      <PageHero
        title="Course Schedule"
        subtitle="All workshops include a comprehensive student guide and certificate. One complimentary seat per four paid registrations."
      />

      {/* Schedule table */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-2">
                Upcoming Workshops
              </p>
              <h2 className="text-3xl font-bold text-charcoal">
                2026 Training Calendar
              </h2>
            </div>
            <p className="text-sm text-grey-400 max-w-xs sm:text-right">
              Delivered in Karachi, Lahore, Islamabad, and online via Zoom.
            </p>
          </div>

          <ScheduleTable entries={schedule} />
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="w-full bg-grey-50 border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-charcoal">
                Need a course delivered at your organisation?
              </h3>
              <p className="mt-1 text-sm text-grey-400">
                TLC delivers all courses onsite across Pakistan. Contact us to discuss dates and group rates.
              </p>
            </div>
            <a
              href="mailto:info@tlcpak.com"
              className="shrink-0 inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
