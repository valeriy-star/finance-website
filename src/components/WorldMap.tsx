import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { asset } from '@/lib/paths';

// Equirectangular projection on the Simplemaps world-map.svg
// (viewBox 0 0 2000 857). Position each marker as a percentage of
// the container, computed from latitude / longitude:
//   left = (lon + 180) / 360 * 100
//   top  = (90  - lat) / 180 * 100
const jurisdictions = [
  { code: 'US', label: 'United States', lat: 38,  lon: -97 },
  { code: 'IE', label: 'Ireland',       lat: 53,  lon: -8  },
  { code: 'UK', label: 'United Kingdom', lat: 52, lon: -2  },
  { code: 'CZ', label: 'Czechia',       lat: 50,  lon: 15  },
  { code: 'EE', label: 'Estonia',       lat: 59,  lon: 25  },
  { code: 'UA', label: 'Ukraine',       lat: 49,  lon: 31  },
  { code: 'BG', label: 'Bulgaria',      lat: 42,  lon: 25  },
  { code: 'CY', label: 'Cyprus',        lat: 35,  lon: 33  },
  { code: 'GE', label: 'Georgia',       lat: 42,  lon: 43  },
  { code: 'CN', label: 'China',         lat: 35,  lon: 105 },
];

function toPosition(lat: number, lon: number) {
  return {
    left: `${((lon + 180) / 360) * 100}%`,
    top: `${((90 - lat) / 180) * 100}%`,
  };
}

export function WorldMap() {
  const mapSrc = asset('/images/world-map.svg');
  return (
    <section className="py-20 lg:py-24 bg-brand-ink text-white">
      <Container>
        <SectionHeading
          variant="dark"
          eyebrow="International presence"
          title="Where finance work actually crosses borders."
          intro="Practical experience across ten jurisdictions for security, customer proximity and access to investment. The deeper challenge is not registration — it is banking, substance, residency and operational reality."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-6">
              {/* 2000:857 ratio matches the SVG viewBox so marker percentages line up */}
              <div className="relative w-full" style={{ aspectRatio: '2000 / 857' }}>
                {/* The map itself: original SVG is light-grey on white. CSS filters
                    invert that so the continents read as soft-white on the navy
                    background. Opacity keeps it from competing with the markers. */}
                <img
                  src={mapSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.18,
                  }}
                />

                {/* Markers */}
                {jurisdictions.map((j) => {
                  const pos = toPosition(j.lat, j.lon);
                  return (
                    <div
                      key={j.code}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: pos.left, top: pos.top }}
                      title={j.label}
                    >
                      {/* Outer pulse halo */}
                      <span className="absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-brand-accent/30" />
                      {/* Core dot */}
                      <span className="absolute -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand-accent ring-1 ring-white/40" />
                    </div>
                  );
                })}
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
