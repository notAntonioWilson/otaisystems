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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Schedule a Consult with OTAI's CEO
          </h1>

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
