'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GlowButton } from '@/components/glow-button';
import { DripButton } from '@/components/drip-button';

interface PricingCardProps {
  label: string;
  price: string;
  features: string[];
  popular?: boolean;
  onBookCall: () => void;
}

export function PricingCard({ label, price, features, popular = false, onBookCall }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        className={`p-8 h-full flex flex-col border-border bg-card/50 backdrop-blur-sm transition-all duration-300 ${
          popular ? 'border-primary glow-accent-sm' : 'hover:border-primary/50'
        }`}
      >
        {popular && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
              Most Popular
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{label}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">{price}</span>
            {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {popular ? (
          <DripButton
            onClick={onBookCall}
            className="w-full"
          >
            Book a Call
          </DripButton>
        ) : (
          <GlowButton
            onClick={onBookCall}
            className="w-full"
            size="lg"
            variant="outline"
          >
            Book a Call
          </GlowButton>
        )}
      </Card>
    </motion.div>
  );
}
