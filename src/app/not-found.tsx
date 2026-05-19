import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <section className="py-28">
      <Container>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl tracking-tightest text-brand-ink">
          Page not found.
        </h1>
        <p className="mt-4 text-brand-slate max-w-md leading-relaxed">
          The page you were looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-3 text-sm font-medium hover:bg-brand-ink transition-colors"
        >
          Back to homepage
        </Link>
      </Container>
    </section>
  );
}
