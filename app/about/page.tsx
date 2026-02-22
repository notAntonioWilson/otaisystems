'use client';

import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { AgentVideoPlaceholder } from '@/components/agent-video-placeholder';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
              The Person Behind the Systems.
            </h1>

            <div className="mb-12">
              <AgentVideoPlaceholder label="[Video: Founder — About OTAI Systems]" />
            </div>

            <div className="max-w-[700px] mx-auto text-center">
              <p className="text-lg text-gray-400 leading-relaxed">
                [Founder story and mission coming soon.]
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
