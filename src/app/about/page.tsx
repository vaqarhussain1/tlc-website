import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `About | ${siteConfig.shortName}`,
  description: `Learn about TLC's 30+ year history, corporate values, and IBM-certified instructor credentials.`,
}

export default function AboutPage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">About TLC — Coming in Story 4.1</h1>
    </div>
  )
}
