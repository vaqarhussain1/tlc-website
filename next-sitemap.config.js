/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tlcpak.com',
  generateRobotsTxt: true,
  outDir: 'out',
  // All 7 pages — explicitly list to ensure none are missed
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/about', changefreq: 'monthly', priority: 0.8 },
    { loc: '/training-courses', changefreq: 'weekly', priority: 0.9 },
    { loc: '/consulting', changefreq: 'monthly', priority: 0.8 },
    { loc: '/schedule', changefreq: 'weekly', priority: 0.9 },
    { loc: '/clients', changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.tlcpak.com/sitemap.xml',
    ],
  },
}
