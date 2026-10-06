import Logo from './Logo'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo className="h-7 w-7" />
          <span className="text-lg">Akairos</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-akairos-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-akairos-600/30 transition-transform hover:scale-[1.03] hover:bg-akairos-400"
        >
          Get early access
        </a>
      </nav>
    </header>
  )
}

export default Navbar
