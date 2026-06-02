const stats = [
  { value: '30+', label: 'Years in Operation' },
  { value: '100+', label: 'Enterprise Clients' },
  { value: '6', label: 'Course Stacks' },
  { value: '10', label: 'IBM Redbooks Authored' },
]

export function StatBlock() {
  return (
    <div className="w-full bg-navy-800 border-y border-white/8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-white/8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
            >
              <span className="text-4xl font-bold text-white lg:text-5xl">
                {value}
              </span>
              <span className="mt-1.5 text-xs font-medium uppercase tracking-widest text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
