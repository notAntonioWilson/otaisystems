'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

const bookingLinks = {
  starter: 'https://cal.com/antonio-wilson-qfqybv/30min-starter',
  professional: 'https://cal.com/antonio-wilson-qfqybv/30min-professional',
  enterprise: 'https://cal.com/antonio-wilson-qfqybv/30min-enterprise',
};

export function ScheduleClient() {
  const params = useParams();
  const tier = params.tier as keyof typeof bookingLinks;
  const bookingUrl = bookingLinks[tier] || bookingLinks.starter;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Schedule a Consult with OTAI's CEO
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              AI isn't the future, it's now. The smartest move any company can make is to embrace it. Schedule your meeting today and start changing your business tomorrow.
            </p>
          </div>

          <div className="w-full h-[800px] bg-card rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={bookingUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a consultation"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
