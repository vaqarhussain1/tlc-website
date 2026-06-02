import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { StatBlock } from '@/components/home/StatBlock'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatBlock />
      {/* Services overview — Story 2.2 */}
      {/* Featured courses — Story 2.2 */}
      {/* Client logo wall — Story 2.3 */}
    </>
  )
}
