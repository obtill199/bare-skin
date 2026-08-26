import type { MetadataRoute } from 'next';
import { servicePages } from '../lib/service-pages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = servicePages.map((service) => ({
    url: `https://bareskinstudioict.com/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.slug === 'brazilian-wax-wichita' ? 0.9 : 0.8,
  }));

  return [
    {
      url: 'https://bareskinstudioict.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...serviceUrls,
  ];
}
