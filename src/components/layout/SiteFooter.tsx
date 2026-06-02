import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold">
              TLC <span className="text-blue-600">|</span> Training
            </p>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Transformation Learning and Consulting — Pakistan&apos;s premier
              enterprise IT training and consulting firm since 1991.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-white/65 hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/training-courses" className="hover:text-white transition-colors">Cybersecurity Training</Link></li>
              <li><Link href="/training-courses" className="hover:text-white transition-colors">Enterprise Architecture</Link></li>
              <li><Link href="/consulting" className="hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/training-courses" className="hover:text-white transition-colors">Executive Leadership</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/about" className="hover:text-white transition-colors">About TLC</Link></li>
              <li><Link href="/clients" className="hover:text-white transition-colors">Our Clients</Link></li>
              <li><Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.locations.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} TLC — Transformation Learning and Consulting. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Karachi · Lahore · Islamabad · Online
          </p>
        </div>
      </div>
    </footer>
  )
}
