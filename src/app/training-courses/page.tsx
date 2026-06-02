import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Training & Courses | ${siteConfig.shortName}`,
  description: `Browse TLC's cybersecurity, enterprise architecture, digital transformation, and executive leadership course stacks.`,
}

export default function TrainingCoursesPage() {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-charcoal">Training & Courses — Coming in Story 3.2</h1>
    </div>
  )
}
