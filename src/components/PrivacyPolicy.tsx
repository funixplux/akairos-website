const lastUpdated = 'October 6, 2026'

function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-sm text-akairos-300 transition-colors hover:text-akairos-200"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to home
      </a>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-10 text-slate-300">
        <p className="leading-relaxed">
          Akairos, Inc. (&quot;Akairos,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) respects your privacy. This Privacy Policy explains what
          information we collect, how we use it, and the choices you have. By using
          our website or providing your information through our forms, you agree to
          the practices described below.
        </p>

        <div>
          <h2 className="text-xl font-medium text-white">Information we collect</h2>
          <p className="mt-3 leading-relaxed">
            When you request access or contact us, we collect the information you
            provide, such as your name, work email address, and mobile phone
            number. We also collect basic, non-identifying usage data to operate
            and improve the website.
          </p>
        </div>

        <div id="sms">
          <h2 className="text-xl font-medium text-white">
            SMS/text messaging and consent
          </h2>
          <p className="mt-3 leading-relaxed">
            If you provide your mobile phone number and opt in, you agree to
            receive text messages from Akairos related to your request, account,
            and product updates. Message frequency varies. Message and data rates
            may apply. Reply <span className="font-medium text-white">STOP</span>{' '}
            at any time to unsubscribe, or{' '}
            <span className="font-medium text-white">HELP</span> for assistance.
          </p>
          <p className="mt-4 rounded-2xl border border-akairos-400/30 bg-akairos-500/10 p-4 leading-relaxed text-slate-200">
            <span className="font-semibold text-white">
              We do not share your phone number or SMS consent with third parties
              or affiliates for their marketing purposes.
            </span>{' '}
            Mobile information and SMS opt-in consent are never sold, rented, or
            shared with any third party or affiliate for marketing or promotional
            purposes. We only share this information with service providers that
            help us deliver the messaging program (for example, our SMS platform),
            and only to the extent needed to provide that service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">
            How we use your information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>To respond to your inquiries and process access requests.</li>
            <li>
              To send transactional and service messages you have consented to
              receive.
            </li>
            <li>To operate, secure, and improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">Your choices</h2>
          <p className="mt-3 leading-relaxed">
            You can opt out of text messages at any time by replying STOP. You may
            request access to, correction of, or deletion of your personal
            information by contacting us using the details below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">Data retention</h2>
          <p className="mt-3 leading-relaxed">
            We retain personal information only for as long as necessary to fulfil
            the purposes described in this policy, unless a longer retention period
            is required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">Contact us</h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Privacy Policy or your information,
            email us at{' '}
            <a
              href="mailto:privacy@akairos.dev"
              className="text-akairos-300 underline underline-offset-2 hover:text-akairos-200"
            >
              privacy@akairos.dev
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
