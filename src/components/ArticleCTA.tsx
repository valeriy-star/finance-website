import { siteConfig } from '@/data/site';

export function ArticleCTA() {
  return (
    <aside className="mt-14 rounded-3xl bg-brand-ink text-white p-7 sm:p-10">
      <p className="eyebrow eyebrow-light">Next step</p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-tight leading-tight">
        Need to upgrade your finance function?
      </h3>
      <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
        If your business is growing faster than its financial infrastructure, the problem is rarely
        just accounting. It is usually systems, processes, reporting logic, controls, data quality
        and decision-making discipline working together.
      </p>
      <a
        href={`mailto:${siteConfig.contactEmail}?subject=Finance%20upgrade%20enquiry`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-accent text-white px-5 py-3 text-sm font-medium hover:bg-brand-accentDark transition-colors"
      >
        Discuss a finance upgrade
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </aside>
  );
}
