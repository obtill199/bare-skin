import type { MetadataRoute } from 'next';
import { servicePages } from '../lib/service-pages';

export const dynamic = 'force-static';

const lastModified = new Date('2026-08-31T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = servicePages.map((service) => ({
    url: `https://bareskinstudioict.com/services/${service.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: service.slug === 'brazilian-wax-wichita' ? 0.9 : 0.8,
  }));

  return [
    {
      url: 'https://bareskinstudioict.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bareskinstudioict.com/pricing/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bareskinstudioict.com/about-kristen/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://bareskinstudioict.com/waxing-prep-aftercare/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bareskinstudioict.com/location/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...serviceUrls,
  ];
}
