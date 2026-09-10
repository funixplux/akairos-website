import Logo from './Logo'

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          <Logo className="h-6 w-6" />
          <span>Akairos</span>
        </a>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Akairos, Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
