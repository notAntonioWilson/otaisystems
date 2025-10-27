'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Briefcase, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface PricingCardProps {
  label: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ label, description, features, popular = false }: PricingCardProps) {
  const router = useRouter();

  const getIcon = () => {
    switch(label) {
      case 'Starter': return <Zap className="w-6 h-6 text-primary" />;
      case 'Professional': return <Briefcase className="w-6 h-6 text-primary" />;
      case 'Enterprise': return <Building2 className="w-6 h-6 text-primary" />;
      default: return <Zap className="w-6 h-6 text-primary" />;
    }
  };

  const handleScheduleClick = () => {
    const tier = label.toLowerCase();
    router.push(`/schedule/${tier}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div
        className={`glass-card p-8 h-full flex flex-col rounded-xl transition-all duration-300 ${
          popular ? 'glow-accent-sm' : ''
        }`}
      >
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            {getIcon()}
            <h3 className="text-2xl font-bold">{label}</h3>
            {popular && (
              <span className="ml-auto text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <button
          onClick={handleScheduleClick}
          className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          Schedule a call
        </button>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-muted-foreground">What's Included:</h4>
        </div>

        <ul className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
