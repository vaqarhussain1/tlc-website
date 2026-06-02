import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { StatBlock } from '@/components/home/StatBlock'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { ClientLogoWall } from '@/components/home/ClientLogoWall'
import { JsonLd } from '@/components/shared/JsonLd'
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
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TLC — Transformation Learning and Consulting',
  url: siteConfig.url,
  email: siteConfig.email,
  foundingDate: siteConfig.founded,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressLocality: 'Karachi',
  },
  areaServed: ['Karachi', 'Lahore', 'Islamabad', 'Online'],
}

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HeroSection />
      <StatBlock />
      <ServicesOverview />
      <FeaturedCourses />
      <ClientLogoWall />
    </>
  )
}
