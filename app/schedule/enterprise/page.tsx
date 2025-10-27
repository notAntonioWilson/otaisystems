'use client';

import { motion } from 'framer-motion';

export default function EnterpriseSchedule() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Schedule Your Consultation With OTAI's CEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss how AI automation can transform your business. Book a free consultation with our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-8 glow-accent-sm">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-enterprise"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none'
                  }}
                  title="Schedule Enterprise Plan Consultation"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
