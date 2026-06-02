import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Clients | ${siteConfig.shortName}`,
  description: `100+ enterprise organisations trust TLC for cybersecurity and IT training in Pakistan.`,
}

export default function ClientsPage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">Clients — Coming in Story 4.3</h1>
    </div>
  )
}
