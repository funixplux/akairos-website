import { useState } from 'react'
import type { FormEvent } from 'react'

type Status = 'idle' | 'success'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('success')
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Request early access
          </h2>
          <p className="mt-3 text-slate-400">
            Join the teams shipping smarter. We&apos;ll be in touch within one
            business day.
          </p>
        </div>

        {status === 'success' ? (
          <div
            role="status"
            className="mx-auto mt-10 max-w-md rounded-2xl border border-akairos-400/40 bg-akairos-500/10 p-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-akairos-500/20 text-akairos-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="text-lg font-medium text-white">
              Thanks, {name || 'friend'}!
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Your request is in. We&apos;ll reach out at {email || 'your inbox'}{' '}
              soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4"
          >
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ada Lovelace"
                className="rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-akairos-400 focus:ring-2 focus:ring-akairos-500/40 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ada@company.com"
                className="rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-akairos-400 focus:ring-2 focus:ring-akairos-500/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-xl bg-akairos-500 px-6 py-3 font-medium text-white shadow-lg shadow-akairos-600/30 transition-transform hover:scale-[1.02] hover:bg-akairos-400"
            >
              Request access
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
