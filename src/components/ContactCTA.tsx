import Link from 'next/link';
import { Container } from './Container';
import { siteConfig } from '@/data/site';

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  variant?: 'light' | 'dark';
};

export function ContactCTA({
  eyebrow = 'Get in touch',
  title = 'Build finance infrastructure that can scale.',
  body = 'If your business has outgrown spreadsheets, fragmented reporting or informal financial processes, it may be time to upgrade the finance function. I help founders and leadership teams design the systems, structures and reporting discipline needed for the next stage of growth.',
  variant = 'light',
}: Props) {
  const dark = variant === 'dark';
  return (
    <section className={`${dark ? 'bg-brand-ink text-white' : 'bg-brand-mist/60'} py-20 lg:py-24 border-y border-slate-100`}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}>{eyebrow}</p>
            <h2
              className={`mt-3 font-display font-semibold tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.08] ${
                dark ? 'text-white' : 'text-brand-ink'
              }`}
            >
              {title}
            </h2>
            <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-brand-slate'}`}>
              {body}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=Finance%20upgrade%20enquiry`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent text-white px-6 py-3.5 text-sm font-medium hover:bg-brand-accentDark transition-colors"
              >
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/contact/"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${
                  dark
                    ? 'border border-white/30 text-white hover:border-white'
                    : 'border border-brand/20 text-brand-ink hover:border-brand/50'
                } transition-colors`}
              >
                Open contact page
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
