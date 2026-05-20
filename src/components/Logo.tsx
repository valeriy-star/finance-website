import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@/lib/paths';

type LogoProps = {
  /** "dark" for indigo wordmark on white surfaces, "light" for white wordmark on dark surfaces. */
  variant?: 'dark' | 'light';
  /** Kept for API compatibility — the new SVG includes the tagline natively. */
  showTagline?: boolean;
  className?: string;
};

// The KOSOVAN logo, supplied as an SVG file rather than drawn inline.
// Two colour variants live in /public/images/:
//   kosovan-logo.svg        — indigo wordmark + tagline + red stroke
//   kosovan-logo-light.svg  — white wordmark + tagline + red stroke
// Native aspect ratio is ~426 × 106 (~4:1).
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const src = asset(
    variant === 'dark' ? '/images/kosovan-logo.svg' : '/images/kosovan-logo-light.svg',
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
        width={426}
        height={106}
        priority
        className="h-9 sm:h-10 w-auto"
      />
    </Link>
  );
}
