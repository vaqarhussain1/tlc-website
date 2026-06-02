'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { CourseCard } from '@/components/courses/CourseCard'
import { cn } from '@/lib/utils'
import type { CourseStack } from '@/types/content'

interface StackTabsProps {
  stacks: CourseStack[]
}

export function StackTabs({ stacks }: StackTabsProps) {
  // Lazy initializer reads URL hash on first client render — no effect needed for mount sync
  const [activeId, setActiveId] = useState<string>(() => {
    if (typeof window === 'undefined') return stacks[0]?.id ?? ''
    const hash = window.location.hash.replace('#', '')
    return stacks.find((s) => s.id === hash)?.id ?? stacks[0]?.id ?? ''
  })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Listen for external hash changes (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const match = stacks.find((s) => s.id === hash)
      if (match) setActiveId(match.id)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [stacks])

  const selectTab = useCallback((id: string) => {
    setActiveId(id)
    history.pushState(null, '', `#${id}`)
  }, [])

  // Keyboard navigation between tabs
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next: number | null = null
    if (e.key === 'ArrowRight') next = (index + 1) % stacks.length
    if (e.key === 'ArrowLeft') next = (index - 1 + stacks.length) % stacks.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = stacks.length - 1

    if (next !== null) {
      e.preventDefault()
      tabRefs.current[next]?.focus()
      selectTab(stacks[next].id)
    }
  }

  return (
    <div>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Course stacks"
        className="flex overflow-x-auto border-b border-grey-200 mb-8 -mx-1 px-1 scrollbar-none"
      >
        {stacks.map((stack, i) => (
          <button
            key={stack.id}
            id={`tab-${stack.id}`}
            role="tab"
            aria-selected={activeId === stack.id}
            aria-controls={`panel-${stack.id}`}
            tabIndex={activeId === stack.id ? 0 : -1}
            ref={(el) => { tabRefs.current[i] = el }}
            onClick={() => selectTab(stack.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={cn(
              'shrink-0 whitespace-nowrap px-4 py-3 text-sm border-b-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
              activeId === stack.id
                ? 'border-blue-600 text-charcoal font-semibold'
                : 'border-transparent text-grey-400 hover:text-charcoal'
            )}
          >
            {stack.name}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      {stacks.map((stack) => (
        <div
          key={stack.id}
          id={`panel-${stack.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${stack.id}`}
          hidden={stack.id !== activeId}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.courses.map((course) => (
              <CourseCard
                key={course.code}
                course={course}
                stackName={stack.name}
                variant="standard"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
