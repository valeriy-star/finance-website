import Link from 'next/link';

type LogoProps = {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  className?: string;
};

/**
 * Inline-SVG recreation of the KOSOVAN wordmark, faithful to the EPS:
 *  - heavy sans wordmark
 *  - a single crimson diagonal stroke through the V
 *  - optional "Financial Technology Expert" tagline
 *
 * Used in the header, footer and hero. The raster fallback lives at
 * /public/images/kosovan-logo.svg and /public/images/kosovan-logo.png.
 */
export function Logo({ variant = 'dark', showTagline = true, className = '' }: LogoProps) {
  const ink = variant === 'dark' ? '#282561' : '#FFFFFF';
  const accent = '#BD202E';

  return (
    <Link href="/" aria-label="KOSOVAN — Financial Technology Expert" className={`inline-flex flex-col leading-none ${className}`}>
      <svg
        viewBox="0 0 320 70"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 sm:h-8 w-auto"
        role="img"
        aria-hidden="true"
      >
        <text
          x="0"
          y="52"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="56"
          letterSpacing="-2"
          fill={ink}
        >
          KOSOVAN
        </text>
        {/* Crimson diagonal stroke through the V — visually anchored to the V glyph */}
        <path
          d="M210 8 L228 62"
          stroke={accent}
          strokeWidth="7"
          strokeLinecap="square"
        />
      </svg>
      {showTagline && (
        <span
          className={`mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${
            variant === 'dark' ? 'text-brand' : 'text-white/80'
          }`}
        >
          Financial Technology Expert
        </span>
      )}
    </Link>
  );
}
