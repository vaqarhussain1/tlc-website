import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Course } from '@/types/content'

interface CourseCardProps {
  course: Course
  stackName: string
  variant?: 'standard' | 'compact'
  className?: string
}

export function CourseCard({
  course,
  stackName,
  variant = 'standard',
  className,
}: CourseCardProps) {
  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex flex-col rounded border border-grey-200 bg-white p-6 hover:border-blue-600 transition-colors',
          className
        )}
      >
        <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2">
          {stackName}
        </p>
        <h3 className="text-base font-semibold text-charcoal leading-snug flex-1 line-clamp-2">
          {course.name}
        </h3>
        <div className="mt-4">
          <Badge>{course.code}</Badge>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col rounded border border-grey-200 bg-white p-7 hover:border-blue-600 hover:shadow-sm transition-all',
        className
      )}
    >
      {/* Stack label */}
      <p className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-3">
        {stackName}
      </p>

      {/* Course name */}
      <h3 className="text-lg font-semibold text-charcoal leading-snug flex-1">
        {course.name}
      </h3>

      {/* Description — clamped to 2 lines */}
      <p className="mt-3 text-sm text-grey-400 leading-relaxed line-clamp-2">
        {course.description}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <Badge>{course.code}</Badge>
      </div>
    </div>
  )
}
