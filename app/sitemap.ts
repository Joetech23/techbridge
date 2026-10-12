import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';
import { industries } from '@/lib/industries';
import { posts } from '@/lib/insights';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    '',
    '/about',
    '/team',
    '/accreditations',
    '/careers',
    '/contact',
    '/case-studies',
    '/insights',
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...posts.map((p) => `/insights/${p.slug}`),
    '/privacy',
    '/cookies',
    '/terms',
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === '' ? 1 : p.startsWith('/services') ? 0.8 : 0.6 }));
}