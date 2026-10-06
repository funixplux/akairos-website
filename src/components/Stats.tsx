const stats = [
  { value: '43%', label: 'faster time to launch' },
  { value: '9.2x', label: 'return on release effort' },
  { value: '68%', label: 'fewer rollback incidents' },
  { value: '500+', label: 'teams shipping with Akairos' },
]

function Stats() {
  return (
    <section id="metrics" className="scroll-mt-20 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="bg-gradient-to-r from-akairos-300 to-akairos-500 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
              {stat.value}
            </div>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
