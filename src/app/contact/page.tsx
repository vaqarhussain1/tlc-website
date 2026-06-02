import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Contact TLC | Training & Consulting`,
  description: `Get in touch with TLC — Pakistan's premier enterprise IT training and consulting firm. Email info@tlcpak.com or submit an enquiry for training programmes, consulting services, or group rates.`,
  openGraph: {
    title: `Contact TLC | Training & Consulting`,
    description: `Enquire about TLC's cybersecurity, enterprise architecture, and IT training workshops. Delivered in Karachi, Lahore, Islamabad, and online.`,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
  },
}

const officeLocations = [
  {
    city: 'Karachi',
    detail: 'Head Office — primary delivery location',
    note: 'TLC office and top-tier hotel venues',
  },
  {
    city: 'Lahore',
    detail: 'Available for all workshops',
    note: 'Leading hotel venues and client onsite',
  },
  {
    city: 'Islamabad',
    detail: 'Available for all workshops',
    note: 'Leading hotel venues and client onsite',
  },
  {
    city: 'Online',
    detail: 'Live instructor-led via Zoom',
    note: 'Full programme available remotely',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We respond to all enquiries within one business day. Whether you need a single workshop or an enterprise training programme, we're here to help."
      />

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Form — 8 cols */}
            <div className="lg:col-span-8">
              <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
                Send an Enquiry
              </p>
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                How can we help?
              </h2>
              <ContactForm />
            </div>

            {/* Contact details — 4 cols */}
            <aside className="lg:col-span-4 flex flex-col gap-6">

              {/* Direct contact */}
              <div className="rounded border border-grey-200 bg-grey-50 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">
                  Direct Contact
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-grey-400 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-grey-400 uppercase tracking-wider mb-1">Response Time</p>
                    <p className="text-sm text-charcoal">Within one business day</p>
                  </div>
                </div>
              </div>

              {/* Office locations */}
              <div className="rounded border border-grey-200 bg-grey-50 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">
                  Delivery Locations
                </p>
                <div className="space-y-4">
                  {officeLocations.map(({ city, detail, note }) => (
                    <div key={city}>
                      <p className="text-sm font-semibold text-charcoal">{city}</p>
                      <p className="text-xs text-grey-400 mt-0.5">{detail}</p>
                      <p className="text-xs text-grey-400">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group offer callout */}
              <div className="rounded border-l-4 border-blue-600 bg-[#e8f0fb] px-5 py-4">
                <p className="text-sm font-semibold text-charcoal">Group Offer</p>
                <p className="mt-1 text-xs text-grey-400 leading-relaxed">
                  One complimentary seat per four paid registrations on all open-enrolment workshops.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
