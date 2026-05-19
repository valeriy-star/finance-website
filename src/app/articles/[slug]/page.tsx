import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { ArticleBody } from '@/components/ArticleBody';
import { AuthorSignature } from '@/components/AuthorSignature';
import { ArticleCTA } from '@/components/ArticleCTA';
import { articles } from '@/data/articles';

type Params = { slug: string };

// Required for static export — build a page for every article slug at build time.
export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <article>
      <header className="bg-white border-b border-slate-100">
        <Container className="pt-16 sm:pt-20 pb-12 max-w-prose !px-6 sm:!px-8">
          <Link
            href="/articles/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-slate hover:text-brand-accent"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All articles
          </Link>

          <span className="mt-6 inline-flex items-center rounded-full bg-brand-mist text-brand text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1">
            {article.category}
          </span>
          <h1 className="mt-5 font-display font-semibold tracking-tightest text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.12] text-brand-ink">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{article.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-xs text-brand-slate">
            <span>{article.readingTime}</span>
            <span aria-hidden>·</span>
            <span>By Valeriy Kosovan</span>
          </div>
        </Container>
      </header>

      <section className="py-12 sm:py-16">
        <Container className="max-w-prose !px-6 sm:!px-8">
          <ArticleBody blocks={article.body} />
          <ArticleCTA />
          <AuthorSignature />
          <div className="mt-10">
            <Link
              href="/articles/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-accent"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
