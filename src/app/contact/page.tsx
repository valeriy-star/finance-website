import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Discuss a finance upgrade for your technology, SaaS or logistics business with Valeriy Kosovan.',
};

export default function ContactPage() {
  const subject = encodeURIComponent('Finance upgrade enquiry');
  const body = encodeURIComponent(
    'Hello Valeriy,\n\nI’d like to discuss a finance upgrade for our business.\n\nA short summary:\n- Industry: \n- Company stage: \n- What we are trying to solve: \n\nBest regards,\n',
  );
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;

  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <Container className="pt-16 sm:pt-24 pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display font-semibold tracking-tightest text-[2.25rem] sm:text-5xl lg:text-[3.4rem] leading-[1.06] text-brand-ink">
            The set of tasks relevant to each company should be analysed and discussed individually.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate">
            Send a short note if you feel that it is time to upgrade the finance of your business.
            A direct email works best — it lets us begin with the right context for your company,
            sector and current stage.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Get in touch"
                title="Start a conversation."
              />
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-brand-ink leading-relaxed">
                  The simplest way to start is by email, with a few lines about your business and
                  what you are trying to solve. A first response usually arrives within two business
                  days.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={mailto}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-accent text-white px-5 py-3 text-sm font-medium hover:bg-brand-accentDark transition-colors"
                  >
                    Write to {siteConfig.contactEmail}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand/20 text-brand-ink px-5 py-3 text-sm font-medium hover:border-brand/50 transition-colors"
                  >
                    Open empty email
                  </a>
                </div>
                <p className="mt-6 text-sm text-brand-slate">
                  Prefer to share more upfront? A short brief covering industry, stage, current
                  finance setup and the specific question to solve makes the first call far more
                  useful.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl bg-brand-ink text-white p-6 sm:p-8">
                <p className="eyebrow eyebrow-light">What you can ask about</p>
                <ul className="mt-4 space-y-3 text-white/85 leading-relaxed">
                  <li className="flex gap-3"><Dot /><span>A comprehensive finance upgrade for a fast-growing IT business.</span></li>
                  <li className="flex gap-3"><Dot /><span>Targeted improvements: accounting, payroll, metrics or cash-flow architecture.</span></li>
                  <li className="flex gap-3"><Dot /><span>ERP migration — particularly Odoo Accounting for multi-entity groups.</span></li>
                  <li className="flex gap-3"><Dot /><span>International structuring across 10 jurisdictions including the UK, US, Ireland, Cyprus, China and Georgia.</span></li>
                  <li className="flex gap-3"><Dot /><span>Audit, investor and reporting readiness.</span></li>
                </ul>
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <p className="eyebrow">Direct contact</p>
                <p className="mt-3 font-display text-xl text-brand-ink tracking-tight">
                  <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-accent">
                    {siteConfig.contactEmail}
                  </a>
                </p>
                <p className="mt-1 text-sm text-brand-slate">{siteConfig.url.replace('https://', '')}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function Dot() {
  return <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />;
}
