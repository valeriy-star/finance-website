import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, '');

  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/expertise/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/executive-summary/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/articles/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/articles/${a.slug}/`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...pages, ...articlePages];
}
