import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the KOSOVAN logo
        brand: {
          // primary — deep indigo from the wordmark
          DEFAULT: '#282561',
          ink: '#1B1947',
          accent: '#BD202E', // crimson stroke through the V
          accentDark: '#9A1A26',
          mist: '#EFF1F7',
          slate: '#5A6079',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '46rem',
        container: '76rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 18, 50, 0.04), 0 8px 24px rgba(15, 18, 50, 0.06)',
        ring: '0 0 0 1px rgba(40, 37, 97, 0.08)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(40,37,97,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(40,37,97,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
