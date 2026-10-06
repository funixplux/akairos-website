function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-akairos-300">
        <span className="h-1.5 w-1.5 rounded-full bg-akairos-400" />
        Release intelligence, reimagined
      </span>
      <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
        Ship at the
        <span className="bg-gradient-to-r from-akairos-300 via-akairos-400 to-akairos-600 bg-clip-text text-transparent">
          {' '}
          perfect moment
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        Akairos turns your product telemetry into release-ready signals. Know
        exactly when a feature is safe to launch — and to whom — without drowning
        in dashboards.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="w-full rounded-full bg-akairos-500 px-7 py-3 text-base font-medium text-white shadow-xl shadow-akairos-600/30 transition-transform hover:scale-[1.03] hover:bg-akairos-400 sm:w-auto"
        >
          Start free trial
        </a>
        <a
          href="#features"
          className="w-full rounded-full border border-white/15 px-7 py-3 text-base font-medium text-slate-200 transition-colors hover:border-white/40 hover:text-white sm:w-auto"
        >
          See how it works
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        No credit card required · 14-day trial · Cancel anytime
      </p>
    </section>
  )
}

export default Hero
