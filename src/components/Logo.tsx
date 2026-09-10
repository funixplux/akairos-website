type LogoProps = {
  className?: string
}

function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Akairos logo"
    >
      <defs>
        <linearGradient id="akairos-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9a83ff" />
          <stop offset="1" stopColor="#6841f0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#12121d" />
      <path
        d="M32 12 L50 52 H41 L32 30 L23 52 H14 Z"
        fill="url(#akairos-logo)"
      />
    </svg>
  )
}

export default Logo
