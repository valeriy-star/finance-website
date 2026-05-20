import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactCTA } from '@/components/ContactCTA';
import { asset } from '@/lib/paths';
import {
  heroBadges,
  coreExpertise,
  achievements,
} from '@/data/executiveSummary';

export const metadata: Metadata = {
  title: 'Executive Summary',
  description:
    'Valeriy Kosovan — international finance executive and transformation leader. Strategic CFO expertise across technology, SaaS, logistics, ERP implementation and international structuring.',
};

export default function ExecutiveSummaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-ink text-white">
        <Container className="grid lg:grid-cols-12 gap-12 items-center pt-16 sm:pt-20 lg:pt-24 pb-20">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow eyebrow-light">Professional Executive Summary</p>
            <h1 className="mt-4 font-display font-semibold tracking-tightest text-[2.25rem] sm:text-5xl lg:text-[3.4rem] leading-[1.06]">
              Valeriy Kosovan
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/80">
              Strategic CFO · Finance Transformation Leader · International Finance Executive
            </p>
            <p className="mt-6 max-w-2xl text-white/75 leading-relaxed">
              An international finance executive and transformation leader with more than twenty
              years of experience across corporate finance, SaaS, logistics, ERP implementation,
              international tax structuring, operational finance, strategic planning and business
              transformation. CFO-level expertise combined with hands-on operational execution.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-xl">
              {heroBadges.map((b) => (
                <div key={b.title} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="font-display text-base leading-tight text-white">{b.title}</p>
                  <p className="mt-1 text-xs text-white/65 leading-snug">{b.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent text-white px-5 py-3 text-sm font-medium hover:bg-brand-accentDark transition-colors"
              >
                Discuss a finance upgrade
              </Link>
              <Link
                href="/articles/"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-5 py-3 text-sm font-medium hover:border-white transition-colors"
              >
                Read professional articles
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-brand ring-1 ring-white/10">
              <Image
                src={asset('/images/valeriy-kosovan-executive-dark.jpg')}
                alt="Valeriy Kosovan — Strategic CFO and Finance Transformation Leader"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Executive profile */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Executive profile"
            title="A commercially focused finance executive."
          />
          <div className="mt-8 grid lg:grid-cols-2 gap-10">
            <p className="text-lg text-brand-ink/85 leading-relaxed">
              Valeriy Kosovan is a commercially focused finance executive with a rare combination of
              strategic finance leadership and deep operational execution. His career has centred on
              building and transforming financial infrastructure inside fast-growing organisations
              operating across multiple jurisdictions, business models and operational environments.
            </p>
            <p className="text-base text-brand-slate leading-relaxed">
              Unlike traditional CFO profiles focused mainly on reporting and compliance, Valeriy’s
              work has involved designing the full financial architecture required to support growth:
              accounting systems, management reporting, budgeting, treasury, procurement controls,
              payroll systems, banking infrastructure, tax planning and internal financial governance.
              His profile is especially relevant for technology companies, SaaS businesses, logistics
              groups, founder-led scale-ups and international organisations that require more than
              basic financial oversight.
            </p>
          </div>
        </Container>
      </section>

      {/* Core expertise grid */}
      <section className="py-20 lg:py-24 bg-brand-mist/40 border-y border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Core areas of expertise"
            title="Six areas where leadership consistently moves the business forward."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreExpertise.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-brand/10 bg-white p-6 hover:border-brand/40 transition-colors"
              >
                <h3 className="font-semibold text-brand-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected achievements */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected achievements"
            title="Outcomes from inside complex, fast-growing organisations."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-6 rounded-full bg-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-ink leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-brand-slate leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* International */}
      <section className="py-20 lg:py-24 bg-brand-ink text-white">
        <Container className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-brand">
              <Image
                src={asset('/images/valeriy-kosovan-city.jpg')}
                alt="Valeriy Kosovan — international finance executive"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              variant="dark"
              eyebrow="International finance and structuring"
              title="Cross-border experience designed for real operational substance."
            />
            <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
              <p>
                A major strength of Valeriy’s profile is practical experience in cross-border finance.
                He has been involved in designing and implementing international corporate structures
                across the United Kingdom, United States, Ireland, Cyprus and China.
              </p>
              <p>
                These structures were developed not only for administrative purposes, but as part of
                broader long-term strategies: improving banking transparency, separating operational
                risks, supporting investor readiness, optimising tax exposure and building scalable
                foundations for future growth.
              </p>
              <p>
                His work in this area includes holding-company design, withholding tax optimisation,
                UK–Cyprus structuring, IP migration strategies, dividend and royalty flows, corporate
                residency considerations, banking relationships, VAT compliance, payment
                infrastructure and cross-border operational setup.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Transformation */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Finance transformation and ERP implementation"
            title="From fragmented spreadsheets to scalable financial systems."
          />
          <div className="mt-8 grid lg:grid-cols-2 gap-10">
            <p className="text-lg text-brand-ink/85 leading-relaxed">
              Recent work demonstrates strong capability in finance transformation and ERP
              implementation. One major project involved migrating a complex organisation from
              spreadsheet-based financial management into Odoo Accounting.
            </p>
            <p className="text-base text-brand-slate leading-relaxed">
              This kind of transformation requires more than software implementation. It requires
              understanding how financial data moves through the business, how departments interact,
              how reporting is used by management and how operational processes need to be redesigned
              before they can be automated. The approach combines financial control, process design
              and practical implementation.
            </p>
          </div>
        </Container>
      </section>

      {/* Commercial CFO */}
      <section className="py-20 lg:py-24 bg-brand-mist/40 border-y border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="A commercially oriented CFO"
            title="Not back-office finance. A management system that helps the business grow."
            intro="Valeriy’s focus is not limited to historical reporting. He works with business drivers, operational constraints, cash-flow planning, profitability analysis and strategic decision-making. Earlier experience in sales and product management strengthens this commercial perspective."
          />
        </Container>
      </section>

      {/* Full executive summary */}
      <section className="py-20 lg:py-24 bg-brand-mist/40 border-t border-slate-100">
        <Container>
          <SectionHeading
            eyebrow="Full executive summary"
            title="A more detailed reading."
          />
          <div className="mt-10 max-w-prose space-y-5 text-brand-ink/85 leading-relaxed">
            <p>
              Valeriy Kosovan is an international finance executive and transformation leader with
              more than twenty years of experience spanning corporate finance, SaaS, logistics, ERP
              implementation, international tax structuring, operational finance, strategic planning
              and business transformation. His career demonstrates a rare combination of high-level
              strategic finance leadership and deep operational execution.
            </p>
            <p>
              His professional profile is especially attractive for technology companies, SaaS
              businesses, logistics groups, founder-led scale-ups and international organisations
              that require not only financial oversight, but also the ability to design scalable
              systems, implement operational discipline, improve reporting visibility and support
              long-term strategic growth.
            </p>
            <p>
              One of the defining characteristics of Valeriy’s career is his ability to build finance
              functions from the ground up. Throughout his work with different ventures, he has
              operated in environments where rapid growth outpaced existing financial structures. In
              these situations he has been responsible for creating the financial architecture
              required to support scaling businesses — accounting systems, management reporting,
              budgeting processes, treasury operations, procurement controls, payroll systems,
              banking infrastructure, tax planning frameworks and internal financial governance.
            </p>
            <p>
              In senior finance roles, including Chief Financial Officer and Vice President of
              Finance, Valeriy’s responsibilities included oversight of accounting operations,
              financial planning, budgeting, tax strategy, banking relationships, compliance,
              cash-flow management and investor-facing financial reporting.
            </p>
            <p>
              His achievements include implementing international corporate structures aligned with
              long-term strategic objectives, maintaining efficient tax structures, initiating and
              completing external audit processes, creating group-wide management and tax accounting
              systems, establishing budgeting procedures and building specialised financial functions
              including treasury, accounts payable, accounts receivable and procurement.
            </p>
            <p>
              What makes these achievements particularly important is the complexity of the
              operating environment. Valeriy has been heavily involved in designing and implementing
              international corporate structures across several jurisdictions, including the United
              Kingdom, United States, Ireland, Cyprus and China. These structures were created as
              part of a deliberate long-term strategy to support investor readiness, separate
              operational risks, optimise tax exposure, improve banking transparency and create
              scalable foundations for future growth.
            </p>
            <p>
              Importantly, his involvement has extended beyond high-level planning. He has managed
              practical implementation challenges including banking relationships, payment providers,
              VAT compliance, legal coordination, operational setup and financial infrastructure.
              His expertise in international structuring and cross-border finance includes
              holding-company design, withholding tax optimisation, UK–Cyprus structures, IP
              migration strategies, dividend and royalty flows, corporate residency considerations,
              investor-friendly structures, cross-border compliance and long-term tax-efficient
              planning.
            </p>
            <p>
              Another major strength is finance transformation and ERP implementation. Recent
              projects demonstrate leadership in migrating complex organisations from fragmented
              spreadsheet-based financial management into scalable ERP-driven finance operations.
              One significant example involved migrating a large organisation from Google Sheets
              into Odoo Accounting.
            </p>
            <p>
              The transformation work demonstrates several executive-level competencies: ability to
              lead change in complex organisations, understanding of operational finance beyond
              accounting, experience managing ERP implementation risk, process redesign capability,
              stakeholder management across departments and practical understanding of how systems
              affect business decision-making.
            </p>
            <p>
              Work in gross profit forecasting and operational financial planning also shows a
              finance leader focused on forward-looking business management. This includes
              profitability analysis, KPI development, budgeting frameworks, operational forecasting
              and financial modelling designed to support strategic decision-making.
            </p>
            <p>
              Overall, Valeriy Kosovan can be described as a modern strategic CFO and transformation
              executive with strong international exposure and deep operational capability. His
              experience goes beyond traditional accounting leadership: building and scaling finance
              functions, designing international corporate structures, implementing ERP and
              operational finance systems, improving reporting and financial visibility, supporting
              growth and investment readiness, optimising tax and operational structures, managing
              cross-border operations and acting as a strategic adviser to business leadership.
            </p>
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Get in touch"
        title="Build finance infrastructure that can scale."
        body="If your business has outgrown spreadsheets, fragmented reporting or informal financial processes, it may be time to upgrade the finance function. I help founders and leadership teams design the systems, structures and reporting discipline needed for the next stage of growth."
      />
    </>
  );
}
