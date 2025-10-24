'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/testimonial-card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { proofs } from '@/content/proof';
import { services } from '@/content/services';
import { useSearchParams } from 'next/navigation';

export default function ProofPage() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [selectedService, setSelectedService] = useState<string>(serviceParam || 'all');

  const filteredProofs = useMemo(() => {
    if (selectedService === 'all') {
      return proofs;
    }
    return proofs.filter((proof) => proof.serviceSlug === selectedService);
  }, [selectedService]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
            Client Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Results, <span className="text-primary">Real Proof</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are transforming operations with AI automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Tabs
            value={selectedService}
            onValueChange={setSelectedService}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 h-auto p-1 bg-card/50 backdrop-blur-sm border border-border">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              {services.map((service) => (
                <TabsTrigger
                  key={service.slug}
                  value={service.slug}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
                >
                  {service.name.replace('AI ', '')}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProofs.map((proof, index) => (
            <motion.div
              key={proof.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <TestimonialCard
                slug={proof.slug}
                client={proof.client}
                logo={proof.logo}
                quote={proof.quote}
                metric={proof.metric}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProofs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No testimonials found for this service.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
