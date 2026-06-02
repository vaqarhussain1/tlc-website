import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { StackTabs } from '@/components/courses/StackTabs'
import { siteConfig } from '@/lib/site-config'
import coursesData from '@/data/courses.json'
import type { CourseStack } from '@/types/content'

export const metadata: Metadata = {
  title: `Training & Courses | ${siteConfig.shortName}`,
  description:
    'Browse TLC\'s cybersecurity, TOGAF enterprise architecture, digital transformation, storage, soft skills, and executive leadership course stacks. IBM-certified instructors. Karachi, Lahore, Islamabad, Online.',
  openGraph: {
    title: `Training & Courses | ${siteConfig.shortName}`,
    description:
      'Six course stacks — Cybersecurity, Enterprise Architecture, Digital Transformation, Storage Technologies, Soft Skills, Executive Leadership. Delivered across Pakistan and online.',
    url: `${siteConfig.url}/training-courses`,
    siteName: siteConfig.name,
  },
}

const deliveryOptions = [
  {
    city: 'Karachi',
    detail: 'TLC office and top-tier hotel venues',
  },
  {
    city: 'Lahore',
    detail: 'Leading hotel venues, client onsite',
  },
  {
    city: 'Islamabad',
    detail: 'Leading hotel venues, client onsite',
  },
  {
    city: 'Online',
    detail: 'Live instructor-led via Zoom',
  },
]

export default function TrainingCoursesPage() {
  const stacks = coursesData as CourseStack[]

  return (
    <>
      <PageHero
        title="Training &amp; Courses"
        subtitle="Six specialised course stacks delivered by IBM-certified instructors with 25+ years of enterprise technology experience. Every workshop includes a comprehensive student guide and certificate."
      />

      {/* Course catalogue */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-2">
            Course Catalogue
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            Six Specialised Stacks
          </h2>
          <StackTabs stacks={stacks} />
        </div>
      </section>

      {/* Delivery formats */}
      <section className="w-full bg-grey-50 border-t border-grey-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-2">
            Delivery Options
          </p>
          <h2 className="text-3xl font-bold text-charcoal mb-10">
            Available Across Pakistan &amp; Online
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryOptions.map(({ city, detail }) => (
              <div
                key={city}
                className="rounded border border-grey-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-charcoal">{city}</h3>
                <p className="mt-2 text-sm text-grey-400">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-grey-400">
            <strong className="text-charcoal">Group offer:</strong> One complimentary seat per four paid registrations.
            Contact us at{' '}
            <a href="mailto:info@tlcpak.com" className="text-blue-600 hover:underline">
              info@tlcpak.com
            </a>{' '}
            to enquire about onsite delivery at your organisation.
          </p>
        </div>
      </section>
    </>
  )
}
