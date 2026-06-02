import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { StatBlock } from '@/components/home/StatBlock'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
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
      <ServicesOverview />
      <FeaturedCourses />
      {/* Client logo wall — Story 2.3 */}
    </>
  )
}
