import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { TestimonialCard } from '@/components/testimonial-card';
import { proofs } from '@/content/proof';
import { services } from '@/content/services';
import { Quote, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProofDetailClient from './proof-detail-client';

export async function generateStaticParams() {
  return proofs.map((proof) => ({
    slug: proof.slug,
  }));
}

export default function ProofDetailPage({ params }: { params: { slug: string } }) {
  const proof = proofs.find((p) => p.slug === params.slug);

  if (!proof) {
    notFound();
  }

  const service = services.find((s) => s.slug === proof.serviceSlug);
  const relatedProofs = proofs
    .filter((p) => p.serviceSlug === proof.serviceSlug && p.slug !== proof.slug)
    .slice(0, 3);

  return <ProofDetailClient proof={proof} service={service} relatedProofs={relatedProofs} />;
}
