import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ScheduleEntry } from '@/types/content'
import scheduleData from '@/data/schedule.json'

function formatDate(dateStr: string, dateEndStr?: string): string {
  const start = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }
  if (!dateEndStr) return start.toLocaleDateString('en-GB', options)
  const end = new Date(dateEndStr)
  // Same month — "3–4 Jun 2026"
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()}–${end.getDate()} ${start.toLocaleDateString('en-GB', { month: 'short' })} ${start.getFullYear()}`
  }
  return `${start.toLocaleDateString('en-GB', options)} – ${end.toLocaleDateString('en-GB', options)}`
}

export function FeaturedCourses() {
  const schedule = scheduleData as ScheduleEntry[]
  // Show first 3 entries (already sorted chronologically in the JSON)
  const featured = schedule.slice(0, 3)

  return (
    <section className="w-full bg-grey-50">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-8">
        {/* Header */}
        <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
          Upcoming Courses
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <h2 className="text-3xl font-bold text-charcoal">
            Next Available Sessions
          </h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/schedule">View Full Schedule →</Link>
          </Button>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry) => (
            <div
              key={`${entry.courseCode}-${entry.date}`}
              className="flex flex-col rounded border border-grey-200 bg-white p-6 hover:border-blue-600 transition-colors"
            >
              {/* Date */}
              <p className="text-xs font-medium text-blue-600 mb-3">
                {formatDate(entry.date, entry.dateEnd)}
              </p>
              {/* Name */}
              <h3 className="text-base font-semibold text-charcoal leading-snug flex-1">
                {entry.courseName}
              </h3>
              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <Badge>{entry.courseCode}</Badge>
                <span className="text-xs text-grey-400">{entry.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
