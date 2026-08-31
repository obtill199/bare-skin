import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLanding from '../../../components/service-landing';
import { getServicePage, servicePages } from '../../../lib/service-pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServicePage(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://bareskinstudioict.com/services/${service.slug}/`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServiceRoute({ params }: { params: { slug: string } }) {
  const service = getServicePage(params.slug);
  if (!service) notFound();
  return <ServiceLanding service={service} />;
}
