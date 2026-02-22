'use client';

import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { AgentVideoPlaceholder } from '@/components/agent-video-placeholder';
import { motion } from 'framer-motion';
import { Clock, Shield, Zap } from 'lucide-react';

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              This Call Could Change Everything For Your Business.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              In 30 minutes we will break down exactly where AI can eliminate your biggest bottlenecks, capture more revenue, and give you back your time. No fluff. No pitch. Just clarity on what is possible for your specific business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <AgentVideoPlaceholder label="[Video: Founder — watch this before you book]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <p className="text-2xl md:text-3xl italic text-purple-400 leading-relaxed">
              "The businesses that move now are the ones that will own their market in 3 years. This call is your first move."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose a Time That Works For You.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Serious business owners only. Come ready to talk about your business and where you want it to go.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 glow-accent-sm">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-professional"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none'
                  }}
                  title="Book a Strategy Call"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  30 Minutes. No fluff, no filler, just a real conversation about your business.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  No Pressure. This is a strategy call not a sales pitch. You will leave with value regardless.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Fast Implementation. Most clients have a live system running within 2 weeks of this call.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
