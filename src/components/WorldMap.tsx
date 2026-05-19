import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const jurisdictions = [
  { code: 'US', label: 'United States', x: 23, y: 42 },
  { code: 'UK', label: 'United Kingdom', x: 47, y: 36 },
  { code: 'IE', label: 'Ireland', x: 45, y: 38 },
  { code: 'CY', label: 'Cyprus', x: 56, y: 49 },
  { code: 'GE', label: 'Georgia', x: 60, y: 45 },
  { code: 'CN', label: 'China', x: 76, y: 47 },
];

// Lightweight stylised world map — simple continent blobs only, used as a backdrop for
// the markers. Avoids any heavy geo libraries while still feeling map-like.
export function WorldMap() {
  return (
    <section className="py-20 lg:py-24 bg-brand-ink text-white">
      <Container>
        <SectionHeading
          variant="dark"
          eyebrow="International presence"
          title="Where finance work actually crosses borders."
          intro="Practical experience across multiple jurisdictions for security, customer proximity and access to investment. The deeper challenge is not registration — it is banking, substance, residency and operational reality."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-6">
              <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
                <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
                  {/* Stylised continents — abstract shapes */}
                  <g fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.2">
                    <path d="M8 28 Q 14 22 22 24 Q 30 22 32 30 Q 30 38 22 40 Q 14 42 10 38 Z" />
                    <path d="M26 38 Q 30 44 32 48 Q 28 50 26 48 Q 22 44 24 40 Z" />
                    <path d="M42 28 Q 48 24 56 26 Q 64 24 68 30 Q 64 38 58 40 Q 50 42 46 38 Q 42 34 42 28 Z" />
                    <path d="M48 38 Q 54 44 52 49 Q 48 50 46 47 Q 44 42 48 38 Z" />
                    <path d="M62 28 Q 72 24 84 28 Q 92 32 90 40 Q 84 44 76 42 Q 68 40 64 36 Z" />
                    <path d="M82 42 Q 88 44 92 48 Q 88 50 84 48 Q 80 46 82 42 Z" />
                  </g>
                  {/* Markers */}
                  {jurisdictions.map((j) => (
                    <g key={j.code} transform={`translate(${j.x} ${j.y})`}>
                      <circle r="1.6" fill="#BD202E" />
                      <circle r="3.2" fill="#BD202E" fillOpacity="0.25" />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-4 grid grid-cols-2 gap-3 self-stretch">
            {jurisdictions.map((j) => (
              <li
                key={j.code}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-accent">{j.code}</p>
                <p className="text-sm text-white/90 leading-tight mt-0.5">{j.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
