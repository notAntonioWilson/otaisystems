'use client';

import { motion } from 'framer-motion';
import { Check, Rocket, Zap, Crown } from 'lucide-react';
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
      case 'Starter': return <Rocket className="w-8 h-8" />;
      case 'Professional': return <Zap className="w-8 h-8" />;
      case 'Enterprise': return <Crown className="w-8 h-8" />;
      default: return <Rocket className="w-8 h-8" />;
    }
  };

  const handleScheduleClick = () => {
    const tier = label.toLowerCase();
    router.push(`/schedule/${tier}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="h-full"
    >
      <div
        className={`glass-card p-8 h-full flex flex-col rounded-2xl transition-all duration-500 relative overflow-hidden ${
          popular ? 'neon-glow' : ''
        }`}
      >
        {popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-bl-lg">
            Popular
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-purple-400">
              {getIcon()}
            </div>
            <h3 className="text-3xl font-black uppercase-wide text-white">{label}</h3>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-5xl font-black mb-2 gradient-text">Request for pricing</div>
          <p className="text-sm text-gray-400 leading-relaxed mt-4">{description}</p>
        </div>

        <motion.button
          onClick={handleScheduleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-4 px-6 rounded-xl font-bold uppercase text-sm tracking-wider mb-10 transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white neon-glow-sm hover:from-purple-500 hover:to-pink-500'
              : 'bg-white/5 text-white hover:bg-white/10 neon-border'
          }`}
        >
          Schedule a call
        </motion.button>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase-wide text-gray-500 tracking-widest">What's Included:</h4>
        </div>

        <ul className="space-y-4 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="shrink-0 mt-1">
                <Check className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
