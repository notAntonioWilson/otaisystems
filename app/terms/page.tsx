'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">
            Last updated: October 24, 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using OTAI Systems services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                OTAI Systems provides AI-powered automation solutions including sales automation, customer
                support, and workflow optimization. We reserve the right to modify, suspend, or discontinue
                any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment is required according to the pricing plan selected. All fees are non-refundable
                except as required by law or as specified in our 30-day money-back guarantee policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services are owned by OTAI Systems and are
                protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                OTAI Systems shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us through our website or email.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
