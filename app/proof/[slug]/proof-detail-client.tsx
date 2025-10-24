'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { TestimonialCard } from '@/components/testimonial-card';
import { Quote, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Proof } from '@/content/proof';
import type { Service } from '@/content/services';

interface ProofDetailClientProps {
  proof: Proof;
  service?: Service;
  relatedProofs: Proof[];
}

export default function ProofDetailClient({ proof, service, relatedProofs }: ProofDetailClientProps) {
  const scrollToBook = () => {
    window.location.href = '/#book';
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/proof"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all proof
          </Link>

          {service && (
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
              {service.name}
            </Badge>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{proof.headline}</h1>

          {proof.metric && (
            <div className="mb-6">
              <span className="text-5xl font-bold text-primary">{proof.metric}</span>
            </div>
          )}

          <div className="flex items-center gap-4 mb-12">
            {proof.logo && (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image src={proof.logo} alt={proof.client} fill className="object-cover" />
              </div>
            )}
            <div>
              <div className="font-semibold text-lg">{proof.client}</div>
              <div className="text-sm text-muted-foreground">Client</div>
            </div>
          </div>
        </motion.div>

        {proof.media && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <VideoCard
              poster={proof.media.poster || ''}
              src={proof.media.src || ''}
              alt={proof.headline}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4" />
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-4 relative z-10">
              "{proof.quote}"
            </blockquote>
            <cite className="text-muted-foreground not-italic">— {proof.client}</cite>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">The Full Story</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{proof.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to achieve similar results?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free strategy call and discover how AI automation can transform your business.
          </p>
          <GlowButton size="lg" onClick={scrollToBook}>
            Book a Call
          </GlowButton>
        </motion.div>

        {relatedProofs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">More Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProofs.map((relatedProof) => (
                <TestimonialCard
                  key={relatedProof.slug}
                  slug={relatedProof.slug}
                  client={relatedProof.client}
                  logo={relatedProof.logo}
                  quote={relatedProof.quote}
                  metric={relatedProof.metric}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
