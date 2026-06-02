import Link from 'next/link'

const clients = [
  'State Bank of Pakistan',
  'Pakistan Stock Exchange',
  'National Bank of Pakistan',
  'Bank Alfalah',
  'Bank AL-Habib',
  'United Bank Limited',
  'DP World',
  'Engro Corporation',
  'Pakistan Telecommunication',
  'Oil & Gas Development Company',
  'Fauji Fertilizer Company',
  'GlaxoSmithKline Pakistan',
]

export function ClientLogoWall() {
  return (
    <section className="w-full bg-white border-t border-grey-200">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-grey-400 mb-8">
          Trusted by Pakistan&apos;s Leading Organisations
        </p>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded border border-grey-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-grey-400"
            >
              {name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-8 text-center text-sm text-grey-400">
          100+ organisations across banking, energy, telecommunications, government, and pharmaceuticals.{' '}
          <Link href="/clients" className="text-blue-600 hover:underline font-medium">
            See all clients →
          </Link>
        </p>
      </div>
    </section>
  )
}
