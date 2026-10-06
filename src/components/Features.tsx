const features = [
  {
    title: 'Timing signals',
    description:
      'Blend adoption, error budgets, and cohort health into a single go / no-go score for every release.',
    icon: 'M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07-2.83 2.83M9.76 14.24l-2.83 2.83m0-10.14 2.83 2.83m4.48 4.48 2.83 2.83',
  },
  {
    title: 'Cohort targeting',
    description:
      'Roll features out to the audiences most ready for them, then expand automatically as confidence grows.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    title: 'Instant rollback',
    description:
      'Automated guardrails watch every metric and revert regressions before your users ever notice.',
    icon: 'M3 12a9 9 0 1 0 3-6.7L3 8m0 0V3m0 5h5',
  },
  {
    title: 'Unified timeline',
    description:
      'Every deploy, flag flip, and incident on one timeline — searchable, shareable, and audit-ready.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
]

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything you need to launch with confidence
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Stop guessing. Akairos gives engineering and product teams a shared,
          data-driven view of release readiness.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-akairos-400/40 hover:bg-white/[0.06]"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-akairos-500/15 text-akairos-300 transition-colors group-hover:bg-akairos-500/25">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d={feature.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
