import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { proofs } from '@/content/proof';
import ServiceDataClient from './service-data-client';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDataPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceProofs = proofs.filter((p) => service.proofSlugs.includes(p.slug));

  return <ServiceDataClient service={service} serviceProofs={serviceProofs} />;
}
