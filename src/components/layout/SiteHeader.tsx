'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/training-courses', label: 'Training & Courses' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-950 border-b border-white/8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-white shrink-0"
          onClick={() => setOpen(false)}
        >
          TLC <span className="text-blue-600">|</span>{' '}
          <span className="hidden sm:inline">Transformation Learning & Consulting</span>
          <span className="sm:hidden">Training</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                'text-sm transition-colors',
                pathname === href
                  ? 'text-white font-medium'
                  : 'text-white/65 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-white transition-transform duration-200',
              open && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-white transition-opacity duration-200',
              open && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-white transition-transform duration-200',
              open && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="lg:hidden bg-navy-800 border-t border-white/10"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                'flex items-center w-full px-6 h-12 text-sm border-b border-white/10 last:border-0 transition-colors',
                pathname === href
                  ? 'text-white font-medium border-l-2 border-l-blue-600 pl-5'
                  : 'text-white/65 hover:text-white'
              )}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
