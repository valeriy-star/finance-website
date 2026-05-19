import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function CFORequirement() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why the founder needs a CFO from stage three"
              title="In IT, there is no luxury of slow learning."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-slate">
              <p>
                In traditional industries that grow slowly, a company may have five to ten years to find,
                train and develop a finance leader internally. In IT, fast growth does not leave much time
                for trial and error.
              </p>
              <p>
                The company needs to manage automation, write policies, establish controls and prepare
                operational finance specialists quickly. The role of KOSOVAN is to provide external
                CFO-level expertise and help upgrade the finance function of the business.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            {/* Growth-vs-finance abstract chart */}
            <GrowthChart />
          </div>
        </div>
      </Container>
    </section>
  );
}

function GrowthChart() {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-slate">
          Growth vs. finance maturity
        </p>
        <div className="flex items-center gap-4 text-[11px] text-brand-slate">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
            Business growth
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            Finance maturity
          </span>
        </div>
      </div>
      <svg viewBox="0 0 400 220" className="w-full h-auto">
        {/* grid */}
        <g stroke="#E5E7EE" strokeWidth="1">
          <line x1="0" y1="55" x2="400" y2="55" />
          <line x1="0" y1="110" x2="400" y2="110" />
          <line x1="0" y1="165" x2="400" y2="165" />
        </g>
        {/* business growth — rocket-like exponential */}
        <path
          d="M10 200 C 80 195, 140 175, 200 130 S 320 30, 390 15"
          fill="none"
          stroke="#BD202E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* finance maturity — linear and slower */}
        <path
          d="M10 200 L 390 95"
          fill="none"
          stroke="#282561"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
        {/* gap arrow */}
        <g stroke="#9A9FB5" strokeWidth="1.4" fill="none">
          <line x1="320" y1="46" x2="320" y2="86" strokeLinecap="round" />
          <path d="M315 50 L320 44 L325 50" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M315 82 L320 88 L325 82" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="330" y="70" fontSize="11" fill="#5A6079" fontFamily="Inter, system-ui">
          The gap
        </text>
      </svg>
      <p className="mt-3 text-xs text-brand-slate leading-relaxed">
        Business growth in IT typically outpaces the maturity of the finance function — exactly the gap
        that CFO-level work is designed to close.
      </p>
    </div>
  );
}
