import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Consulting | ${siteConfig.shortName}`,
  description: `TLC IT consulting services — Flex IT, AIX OS Migration, and Application Consulting.`,
}

export default function ConsultingPage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">Consulting — Coming in Story 4.2</h1>
    </div>
  )
}
