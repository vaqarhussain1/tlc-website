import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Course Schedule | ${siteConfig.shortName}`,
  description: `Upcoming TLC workshops in Karachi, Lahore, Islamabad, and Online.`,
}

export default function SchedulePage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">Schedule — Coming in Story 3.3</h1>
    </div>
  )
}
