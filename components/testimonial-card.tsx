'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  slug: string;
  client: string;
  logo?: string;
  quote: string;
  metric?: string;
  className?: string;
}

export function TestimonialCard({
  slug,
  client,
  logo,
  quote,
  metric,
  className = '',
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Link href={`/proof/${slug}`}>
        <Card className="p-6 h-full border-border hover:border-primary/50 transition-all duration-300 hover:glow-accent-sm bg-card/50 backdrop-blur-sm group">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              {logo && (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                  <Image src={logo} alt={client} fill className="object-cover" />
                </div>
              )}
              <Quote className="w-6 h-6 text-primary/50" />
            </div>

            {metric && (
              <div className="mb-3">
                <span className="text-2xl font-bold text-primary">{metric}</span>
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3 leading-relaxed">
              {quote}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <span className="text-xs font-medium text-foreground/80">{client}</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
