import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@/lib/paths';

type LogoProps = {
  /** "dark" = indigo wordmark on white surfaces. "light" = white wordmark on dark surfaces. */
  variant?: 'dark' | 'light';
  /** Kept for API compatibility — the tagline is part of the artwork now. */
  showTagline?: boolean;
  className?: string;
};

// The KOSOVAN logo as a high-resolution PNG, pre-rendered at 1700×422 px
// (4× the typical display width). At a header height of ~40 px the browser
// downscales 1700 px source to ~160 px wide — far crisper than rendering an
// SVG at small sizes, where path antialiasing tends to look soft.
//
// Two colour variants live in /public/images/:
//   kosovan-logo.png        — indigo wordmark + tagline + red stroke (light backgrounds)
//   kosovan-logo-light.png  — white wordmark + tagline + red stroke (dark backgrounds)
//
// The originating SVGs are kept alongside for archival use.
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const src = asset(
    variant === 'dark' ? '/images/kosovan-logo.png' : '/images/kosovan-logo-light.png',
  );
  return (
    <Link
      href="/"
      aria-label="KOSOVAN — Financial Technology Expert"
      className={`inline-block ${className}`}
    >
      <Image
        src={src}
        alt="KOSOVAN — Financial Technology Expert"
        width={1700}
        height={422}
        priority
        // Explicit rendered size lets the browser pick the right pixel density.
        sizes="(min-width: 640px) 200px, 170px"
        className="h-10 sm:h-11 w-auto"
      />
    </Link>
  );
}
