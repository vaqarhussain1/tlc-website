import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Contact TLC | Training & Consulting`,
  description: `Get in touch with TLC. Email us at ${siteConfig.email} or enquire about training and consulting services.`,
}

export default function ContactPage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">Contact — Coming in Story 5.1</h1>
    </div>
  )
}
