'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { siteConfig } from '@/data/site';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/70'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/80 hover:text-brand-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="ml-2 inline-flex items-center rounded-full bg-brand text-white px-4 py-2 text-sm font-medium hover:bg-brand-ink transition-colors"
          >
            Start a conversation
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-brand-ink hover:bg-slate-100"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>
      {open && (
        <div className="lg:hidden border-t border-slate-200/70 bg-white">
          <Container className="py-3 flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-brand-ink/85 hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-full bg-brand text-white px-4 py-2 text-sm font-medium w-fit"
            >
              Start a conversation
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
