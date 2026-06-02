import { Badge } from '@/components/ui/badge'
import type { ScheduleEntry } from '@/types/content'

interface ScheduleTableProps {
  entries: ScheduleEntry[]
}

function formatDateRange(date: string, dateEnd?: string): string {
  const start = new Date(date)
  const opts: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  if (!dateEnd) return start.toLocaleDateString('en-GB', opts)
  const end = new Date(dateEnd)
  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return `${start.getDate()}–${end.getDate()} ${start.toLocaleDateString('en-GB', { month: 'short' })} ${start.getFullYear()}`
  }
  return `${start.toLocaleDateString('en-GB', opts)} – ${end.toLocaleDateString('en-GB', opts)}`
}

export function ScheduleTable({ entries }: ScheduleTableProps) {
  if (entries.length === 0) {
    return (
      <p className="text-grey-400 py-8 text-center">
        No upcoming sessions scheduled. Check back soon or{' '}
        <a href="mailto:info@tlcpak.com" className="text-blue-600 hover:underline">
          contact us
        </a>{' '}
        to enquire about availability.
      </p>
    )
  }

  return (
    <div>
      {/* Scrollable wrapper — preserves all columns on mobile */}
      <div className="overflow-x-auto rounded border border-grey-200">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <caption className="sr-only">Upcoming TLC course schedule</caption>
          <thead>
            <tr className="bg-charcoal text-white">
              <th scope="col" className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-white/70 whitespace-nowrap">
                Date
              </th>
              <th scope="col" className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-white/70">
                Course
              </th>
              <th scope="col" className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-white/70 whitespace-nowrap">
                Code
              </th>
              <th scope="col" className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-white/70 whitespace-nowrap">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr
                key={`${entry.courseCode}-${entry.date}`}
                className={i % 2 === 0 ? 'bg-white' : 'bg-grey-50'}
              >
                <td className="px-5 py-4 text-grey-400 whitespace-nowrap align-top">
                  {formatDateRange(entry.date, entry.dateEnd)}
                </td>
                <td className="px-5 py-4 text-charcoal font-medium align-top">
                  {entry.courseName}
                </td>
                <td className="px-5 py-4 align-top">
                  <Badge>{entry.courseCode}</Badge>
                </td>
                <td className="px-5 py-4 text-grey-400 whitespace-nowrap align-top">
                  {entry.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile scroll hint */}
      <p className="mt-2 text-center text-xs text-grey-400 sm:hidden" aria-hidden="true">
        ← scroll to see all columns →
      </p>
    </div>
  )
}
